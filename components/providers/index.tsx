import { ReactNode } from "react";
import { ThemeProvider } from "./theme-provider";
import { NextIntlClientProvider } from "next-intl";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <NextIntlClientProvider>{children}</NextIntlClientProvider>
    </ThemeProvider>
  );
};

export default Providers;
