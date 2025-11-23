import { getTranslations } from "next-intl/server";

export default async function ProjectsPage() {
  const t = await getTranslations("ProjectsPage");
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-8 text-4xl font-bold">{t("title")}</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border p-6">
          <h3 className="mb-2 text-xl font-semibold">Project 1</h3>
          <p className="text-muted-foreground">Description coming soon</p>
        </div>
      </div>
    </div>
  );
}
