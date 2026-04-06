export const i18n = {
  defaultLocale: "en",
  locales: ["en", "es", "de", "fr", "pt", "ru"],
} as const;

export type Locale = (typeof i18n)["locales"][number];

export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
  de: "Deutsch",
  fr: "Français",
  pt: "Português",
  ru: "Русский",
};

export const localeFlags: Record<Locale, string> = {
  en: "🇺🇸",
  es: "🇪🇸",
  de: "🇩🇪",
  fr: "🇫🇷",
  pt: "🇧🇷",
  ru: "🇷🇺",
};
