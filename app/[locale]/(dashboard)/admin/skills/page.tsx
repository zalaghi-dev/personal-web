"use client";

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminSkills() {
  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Skills
        </h1>
        <Button className="bg-linear-to-r from-red-600 to-pink-600 text-white hover:from-red-700 hover:to-pink-700">
          <Plus className="mr-2 h-4 w-4" />
          Add Skill
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
            Frontend
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between rounded-lg border border-gray-100 p-3 dark:border-gray-800">
              <span className="text-sm text-gray-900 dark:text-white">React</span>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm">Edit</Button>
                <Button variant="ghost" size="sm">Delete</Button>
              </div>
            </div>
            <div className="flex items-center justify-between rounded-lg border border-gray-100 p-3 dark:border-gray-800">
              <span className="text-sm text-gray-900 dark:text-white">Next.js</span>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm">Edit</Button>
                <Button variant="ghost" size="sm">Delete</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
            Backend
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between rounded-lg border border-gray-100 p-3 dark:border-gray-800">
              <span className="text-sm text-gray-900 dark:text-white">Node.js</span>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm">Edit</Button>
                <Button variant="ghost" size="sm">Delete</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
