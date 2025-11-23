"use client";

import { usePathname } from "next/navigation";
import { Header } from "./header";

export function ConditionalHeader({ locale }: { locale: string }) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.includes("/admin");

  if (isAdminRoute) {
    return null;
  }

  return (
    <>
      <Header locale={locale} />
      <div className="h-20" />
    </>
  );
}
