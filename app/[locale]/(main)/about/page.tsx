import { getTranslations } from "next-intl/server";

export default async function AboutPage() {
  const t = await getTranslations("AboutPage");
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-8 text-4xl font-bold">{t("title")}</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg">
          {t("description")}
        </p>
      </div>
    </div>
  );
}
