import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ko", "ja", "vi"],
  defaultLocale: "en",
  localeDetection: true,
});
