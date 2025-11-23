import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";
import Image from "next/image";

export default async function AdminProjects() {
  const projects = await prisma.project.findMany({
    orderBy: { order: 'asc' },
  });

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Projects
        </h1>
        <Button className="bg-linear-to-r from-red-600 to-pink-600 text-white hover:from-red-700 hover:to-pink-700">
          <Plus className="mr-2 h-4 w-4" />
          Add Project
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
          >
            {project.image ? (
              <div className="mb-4 h-40 rounded-lg overflow-hidden relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="mb-4 h-40 rounded-lg bg-linear-to-br from-red-100 to-pink-100 dark:from-red-900/20 dark:to-pink-900/20"></div>
            )}
            <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
              {project.title}
            </h3>
            <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
              {project.description}
            </p>
            <div className="mb-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-800 dark:bg-red-900/20 dark:text-red-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Edit
              </Button>
              <Button variant="outline" size="sm">
                Delete
              </Button>
            </div>
          </div>
        ))}

        <div className="flex items-center justify-center rounded-xl border-2 border-dashed border-gray-300 p-6 dark:border-gray-700">
          <div className="text-center">
            <Plus className="mx-auto mb-2 h-12 w-12 text-gray-400" />
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Add new project
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
