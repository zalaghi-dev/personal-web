"use client";

import { Menu } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "@/components/common/mode-toggle";
import { LanguageDropdown } from "@/components/common/language-dropdown";
import { useState } from "react";

const navLinks = [
  { href: "/", label: { en: "Home", fa: "خانه" } },
  { href: "/about", label: { en: "About", fa: "درباره" } },
  { href: "/projects", label: { en: "Projects", fa: "پروژه‌ها" } },
  { href: "/skills", label: { en: "Skills", fa: "مهارت‌ها" } },
];

export function Header({ locale }: { locale: string }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold">
          Amir Zalaghi
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {link.label[locale as keyof typeof link.label] || link.label.en}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:flex md:items-center md:gap-2">
            <ModeToggle />
            <LanguageDropdown />
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 pt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-lg font-medium transition-colors hover:text-primary"
                  >
                    {link.label[locale as keyof typeof link.label] || link.label.en}
                  </Link>
                ))}
                <div className="mt-4 flex items-center gap-2 border-t pt-4">
                  <ModeToggle />
                  <LanguageDropdown />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
