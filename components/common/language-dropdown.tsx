"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { routing } from "@/i18n/routing";

const LABELS: Record<string, string> = {
  en: "English",
  fa: "فارسی",
};

export function LanguageDropdown() {
  const router = useRouter();
  const pathname = usePathname() || "/";
  const searchParams = useSearchParams();

  const segments = pathname.split("/");
  const localeInPath = segments[1] as "en" | "fa" | undefined;
  const current =
    localeInPath && routing.locales.includes(localeInPath)
      ? localeInPath
      : routing.defaultLocale;

  function navigateTo(targetLocale: string) {
    const hasLocaleSegment = localeInPath && routing.locales.includes(localeInPath);
    const rest = segments
      .slice(hasLocaleSegment ? 2 : 1)
      .join("/");
    const search = searchParams ? `?${searchParams.toString()}` : "";
    const newPath = `/${targetLocale}${rest ? `/${rest}` : ""}${search}`;
    router.push(newPath);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <span className="sr-only">Change language</span>
          <span className="text-sm">{LABELS[current] ?? current}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {routing.locales.map((loc) => (
          <DropdownMenuItem
            key={loc}
            onClick={() => {
              if (loc !== current) navigateTo(loc);
            }}
          >
            {LABELS[loc] ?? loc}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
