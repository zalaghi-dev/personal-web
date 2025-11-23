import { getTranslations } from "next-intl/server";

export default async function ProjectsPage() {
  const t = await getTranslations("ProjectsPage");
  return (
    <div className="min-h-screen bg-linear-to-b from-white to-gray-50 dark:from-black dark:to-gray-950">
      <div className="container mx-auto px-6 py-24 lg:px-8">
        <h1 className="mb-4 bg-linear-to-r from-red-600 to-pink-600 bg-clip-text text-5xl font-bold text-transparent dark:from-red-400 dark:to-pink-400 md:text-6xl">
          {t("title")}
        </h1>
        <div className="mb-16 h-1 w-24 bg-linear-to-r from-red-600 to-pink-600"></div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-lg transition-all hover:scale-105 hover:shadow-2xl dark:border-gray-800 dark:bg-gray-900">
            <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-red-500/10 blur-3xl transition-all group-hover:scale-150"></div>
            <h3 className="relative mb-3 text-2xl font-bold text-gray-900 dark:text-white">Project 1</h3>
            <p className="relative text-gray-600 dark:text-gray-400">An amazing project description coming soon</p>
          </div>
          
          <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-lg transition-all hover:scale-105 hover:shadow-2xl dark:border-gray-800 dark:bg-gray-900">
            <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-pink-500/10 blur-3xl transition-all group-hover:scale-150"></div>
            <h3 className="relative mb-3 text-2xl font-bold text-gray-900 dark:text-white">Project 2</h3>
            <p className="relative text-gray-600 dark:text-gray-400">Another incredible project to showcase</p>
          </div>
          
          <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-lg transition-all hover:scale-105 hover:shadow-2xl dark:border-gray-800 dark:bg-gray-900">
            <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-rose-500/10 blur-3xl transition-all group-hover:scale-150"></div>
            <h3 className="relative mb-3 text-2xl font-bold text-gray-900 dark:text-white">Project 3</h3>
            <p className="relative text-gray-600 dark:text-gray-400">More exciting work to be added</p>
          </div>
        </div>
      </div>
    </div>
  );
}
