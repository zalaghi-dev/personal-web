import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";

export default async function AdminSkills() {
  const skills = await prisma.skill.findMany({
    orderBy: { order: 'asc' },
  });

  // Group by category
  const categories = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

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
        {Object.entries(categories).map(([category, categorySkills]) => (
          <div
            key={category}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900"
          >
            <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
              {category}
            </h3>
            <div className="space-y-3">
              {categorySkills.map((skill) => (
                <div
                  key={skill.id}
                  className="flex items-center justify-between rounded-lg border border-gray-100 p-3 dark:border-gray-800"
                >
                  <div className="flex-1">
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {skill.name}
                    </span>
                    <div className="mt-1 flex items-center gap-2">
                      <div className="h-2 flex-1 rounded-full bg-gray-200 dark:bg-gray-700">
                        <div
                          className="h-2 rounded-full bg-linear-to-r from-red-600 to-pink-600"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                  <div className="ml-4 flex gap-2">
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                    <Button variant="ghost" size="sm">
                      Delete
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
