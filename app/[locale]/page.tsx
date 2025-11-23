import { ModeToggle } from "@/components/common/mode-toggle";
import { LanguageDropdown } from "@/components/common/language-dropdown";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("HomePage");
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex items-center gap-2">
        Hello Welcome to this template
        <ModeToggle />
        <LanguageDropdown />
      </div>
      <br />
      <h3>{t("title")}</h3>
    </div>
  );
}
