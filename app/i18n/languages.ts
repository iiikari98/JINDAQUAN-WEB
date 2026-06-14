export const languageCodes = ["en", "fr", "es", "pt", "it", "ru", "ja"] as const;

export type LanguageCode = (typeof languageCodes)[number];

export const languages: Array<{
  code: LanguageCode;
  label: string;
  htmlLang: string;
}> = [
  { code: "en", label: "English", htmlLang: "en" },
  { code: "fr", label: "Fran\u00e7ais", htmlLang: "fr" },
  { code: "es", label: "Espa\u00f1ol", htmlLang: "es" },
  { code: "pt", label: "Portugu\u00eas", htmlLang: "pt" },
  { code: "it", label: "Italiano", htmlLang: "it" },
  { code: "ru", label: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439", htmlLang: "ru" },
  { code: "ja", label: "\u65e5\u672c\u8a9e", htmlLang: "ja" },
];

export function isLanguageCode(value: string | null): value is LanguageCode {
  return languageCodes.includes(value as LanguageCode);
}
