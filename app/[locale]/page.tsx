import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("HomePage");
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-linear-to-b from-zinc-50 to-zinc-100 dark:from-black dark:to-zinc-900">
      <div className="text-center">
        <h1 className="mb-4 text-5xl font-bold">{t("title")}</h1>
        <p className="text-xl text-muted-foreground">Full Stack Developer</p>
      </div>
    </div>
  );
}
