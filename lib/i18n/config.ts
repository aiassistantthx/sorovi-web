export const i18n = {
  defaultLocale: "en",
  locales: ["en", "es", "de", "fr", "pt", "ru", "it", "nl", "pl", "ja", "ko", "zh"],
} as const;

export type Locale = (typeof i18n)["locales"][number];

export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
  de: "Deutsch",
  fr: "Français",
  pt: "Português",
  ru: "Русский",
  it: "Italiano",
  nl: "Nederlands",
  pl: "Polski",
  ja: "日本語",
  ko: "한국어",
  zh: "中文",
};

export const localeFlags: Record<Locale, string> = {
  en: "🇺🇸",
  es: "🇪🇸",
  de: "🇩🇪",
  fr: "🇫🇷",
  pt: "🇧🇷",
  ru: "🇷🇺",
  it: "🇮🇹",
  nl: "🇳🇱",
  pl: "🇵🇱",
  ja: "🇯🇵",
  ko: "🇰🇷",
  zh: "🇨🇳",
};
