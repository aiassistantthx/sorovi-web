"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { i18n, localeNames, localeFlags, type Locale } from "@/lib/i18n/config";

export function LanguageSelector({ currentLocale }: { currentLocale?: Locale }) {
  const pathname = usePathname();

  // Get current locale from pathname or default
  const locale = currentLocale || i18n.defaultLocale;

  // Get pathname without locale prefix
  const getPathWithoutLocale = () => {
    const segments = pathname.split("/");
    if (i18n.locales.includes(segments[1] as Locale)) {
      return "/" + segments.slice(2).join("/") || "/";
    }
    return pathname;
  };

  const pathWithoutLocale = getPathWithoutLocale();

  return (
    <div className="relative group">
      <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
        <span>{localeFlags[locale]}</span>
        <span className="hidden sm:inline">{localeNames[locale]}</span>
        <svg
          className="w-4 h-4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div className="absolute right-0 top-full mt-1 bg-white border border-[var(--border-color)] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 min-w-[140px]">
        {i18n.locales.map((loc) => {
          const href =
            loc === i18n.defaultLocale
              ? pathWithoutLocale
              : `/${loc}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`;

          return (
            <Link
              key={loc}
              href={href}
              className={`flex items-center gap-2 px-4 py-2 text-sm hover:bg-[var(--surface-light)] transition-colors first:rounded-t-lg last:rounded-b-lg ${
                loc === locale
                  ? "text-[var(--brand-primary)] font-medium"
                  : "text-[var(--text-secondary)]"
              }`}
            >
              <span>{localeFlags[loc]}</span>
              <span>{localeNames[loc]}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
