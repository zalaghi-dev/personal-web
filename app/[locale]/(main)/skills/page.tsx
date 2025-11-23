import { getTranslations } from "next-intl/server";

export default async function SkillsPage() {
  const t = await getTranslations("SkillsPage");
  return (
    <div className="min-h-screen bg-linear-to-b from-white to-gray-50 dark:from-black dark:to-gray-950">
      <div className="container mx-auto px-6 py-24 lg:px-8">
        <h1 className="mb-4 bg-linear-to-r from-red-600 to-pink-600 bg-clip-text text-5xl font-bold text-transparent dark:from-red-400 dark:to-pink-400 md:text-6xl">
          {t("title")}
        </h1>
        <div className="mb-16 h-1 w-24 bg-linear-to-r from-red-600 to-pink-600"></div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white/80 p-8 shadow-lg backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/80">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-r from-red-500 to-red-600 text-2xl font-bold text-white shadow-lg">
              F
            </div>
            <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">Frontend</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <span className="h-2 w-2 rounded-full bg-red-500"></span>
                React / Next.js
              </li>
              <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <span className="h-2 w-2 rounded-full bg-red-500"></span>
                TypeScript
              </li>
              <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <span className="h-2 w-2 rounded-full bg-red-500"></span>
                Tailwind CSS
              </li>
            </ul>
          </div>
          
          <div className="rounded-2xl border border-gray-200 bg-white/80 p-8 shadow-lg backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/80">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-r from-pink-500 to-pink-600 text-2xl font-bold text-white shadow-lg">
              B
            </div>
            <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">Backend</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <span className="h-2 w-2 rounded-full bg-pink-500"></span>
                Node.js
              </li>
              <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <span className="h-2 w-2 rounded-full bg-pink-500"></span>
                Database
              </li>
              <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <span className="h-2 w-2 rounded-full bg-pink-500"></span>
                API Design
              </li>
            </ul>
          </div>
          
          <div className="rounded-2xl border border-gray-200 bg-white/80 p-8 shadow-lg backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/80">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-r from-rose-500 to-rose-600 text-2xl font-bold text-white shadow-lg">
              T
            </div>
            <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">Tools</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <span className="h-2 w-2 rounded-full bg-rose-500"></span>
                Git & GitHub
              </li>
              <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <span className="h-2 w-2 rounded-full bg-rose-500"></span>
                VS Code
              </li>
              <li className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <span className="h-2 w-2 rounded-full bg-rose-500"></span>
                Figma
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
