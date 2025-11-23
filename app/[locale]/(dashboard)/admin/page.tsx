import { BarChart3, Users, FolderGit2, TrendingUp } from "lucide-react";
import prisma from "@/lib/prisma";

export default async function AdminDashboard() {
  const [projectCount, skillCount] = await Promise.all([
    prisma.project.count(),
    prisma.skill.count(),
  ]);

  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white">
        Dashboard
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Projects</p>
              <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">{projectCount}</p>
            </div>
            <div className="rounded-full bg-red-100 p-3 dark:bg-red-900/30">
              <FolderGit2 className="h-6 w-6 text-red-600 dark:text-red-400" />
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Skills</p>
              <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">{skillCount}</p>
            </div>
            <div className="rounded-full bg-pink-100 p-3 dark:bg-pink-900/30">
              <BarChart3 className="h-6 w-6 text-pink-600 dark:text-pink-400" />
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Visitors</p>
              <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">-</p>
            </div>
            <div className="rounded-full bg-rose-100 p-3 dark:bg-rose-900/30">
              <Users className="h-6 w-6 text-rose-600 dark:text-rose-400" />
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Growth</p>
              <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">-</p>
            </div>
            <div className="rounded-full bg-orange-100 p-3 dark:bg-orange-900/30">
              <TrendingUp className="h-6 w-6 text-orange-600 dark:text-orange-400" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
          Recent Activity
        </h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4 rounded-lg border border-gray-100 p-4 dark:border-gray-800">
            <div className="h-2 w-2 rounded-full bg-red-500"></div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900 dark:text-white">New project added</p>
              <p className="text-xs text-gray-500">2 hours ago</p>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-lg border border-gray-100 p-4 dark:border-gray-800">
            <div className="h-2 w-2 rounded-full bg-pink-500"></div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900 dark:text-white">Skills updated</p>
              <p className="text-xs text-gray-500">5 hours ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

