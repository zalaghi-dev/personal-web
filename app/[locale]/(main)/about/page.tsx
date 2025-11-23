import { getTranslations } from "next-intl/server";

export default async function AboutPage() {
  const t = await getTranslations("AboutPage");
  return (
    <div className="min-h-screen bg-linear-to-b from-white to-gray-50 dark:from-black dark:to-gray-950">
      <div className="container mx-auto px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4 bg-linear-to-r from-red-600 to-pink-600 bg-clip-text text-5xl font-bold text-transparent dark:from-red-400 dark:to-pink-400 md:text-6xl">
            {t("title")}
          </h1>
          <div className="mb-12 h-1 w-24 bg-linear-to-r from-red-600 to-pink-600"></div>
          
          <div className="rounded-2xl border border-gray-200 bg-white/50 p-8 shadow-xl backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/50 md:p-12">
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              {t("description")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
