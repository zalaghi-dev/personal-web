import { getTranslations } from "next-intl/server";

export default async function SkillsPage() {
  const t = await getTranslations("SkillsPage");
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-8 text-4xl font-bold">{t("title")}</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h3 className="mb-4 text-xl font-semibold">Frontend</h3>
          <ul className="space-y-2">
            <li>React / Next.js</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-xl font-semibold">Backend</h3>
          <ul className="space-y-2">
            <li>Node.js</li>
            <li>Database</li>
            <li>API Design</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
