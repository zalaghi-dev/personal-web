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
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-white/80 backdrop-blur-xl dark:bg-black/80">
      <div className="container mx-auto flex h-20 items-center justify-between px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-2 text-2xl font-bold tracking-tight transition-all hover:scale-105">
          <span className="bg-linear-to-r from-red-600 to-pink-600 bg-clip-text text-transparent dark:from-red-400 dark:to-pink-400">AZ</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-gray-700 transition-all hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-linear-to-r after:from-red-600 after:to-pink-600 after:transition-all hover:after:w-full"
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
              <Button variant="ghost" size="icon" className="hover:bg-gray-100 dark:hover:bg-gray-800">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm border-l border-white/10 bg-white/95 backdrop-blur-xl dark:bg-black/95">
              <nav className="flex flex-col gap-6 pt-12">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-xl font-medium text-gray-700 transition-colors hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400"
                  >
                    {link.label[locale as keyof typeof link.label] || link.label.en}
                  </Link>
                ))}
                <div className="mt-8 flex items-center gap-3 border-t border-gray-200 pt-6 dark:border-gray-800">
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
