import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("HomePage");
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-red-50 via-white to-pink-50 dark:from-gray-950 dark:via-black dark:to-red-950"></div>
      
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-red-100/20 via-transparent to-transparent dark:from-red-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,var(--tw-gradient-stops))] from-pink-100/20 via-transparent to-transparent dark:from-pink-900/20"></div>
      
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <div className="mb-6 inline-block animate-in fade-in slide-in-from-top-4 duration-1000">
          <span className="inline-block rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
            Portfolio 2025
          </span>
        </div>
        
        <h1 className="mb-6 animate-in fade-in slide-in-from-bottom-4 bg-linear-to-r from-gray-900 via-red-900 to-pink-900 bg-clip-text text-6xl font-bold tracking-tight text-transparent duration-1000 delay-200 dark:from-white dark:via-red-200 dark:to-pink-200 sm:text-7xl md:text-8xl">
          {t("title")}
        </h1>
        
        <p className="mb-8 animate-in fade-in slide-in-from-bottom-4 text-xl text-gray-600 duration-1000 delay-300 dark:text-gray-400 md:text-2xl">
          Full Stack Developer & UI/UX Enthusiast
        </p>
        
        <div className="flex animate-in fade-in slide-in-from-bottom-4 flex-wrap items-center justify-center gap-4 duration-1000 delay-500">
          <a
            href="#projects"
            className="rounded-full bg-linear-to-r from-red-600 to-pink-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-red-500/50 transition-all hover:scale-105 hover:shadow-xl hover:shadow-red-500/50 dark:shadow-red-500/30"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border-2 border-gray-300 px-8 py-4 text-sm font-semibold text-gray-700 transition-all hover:border-red-500 hover:text-red-600 dark:border-gray-700 dark:text-gray-300 dark:hover:border-red-400 dark:hover:text-red-400"
          >
            Get in Touch
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="h-6 w-6 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
}
