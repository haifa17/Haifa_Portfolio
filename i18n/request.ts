import { getRequestConfig } from "next-intl/server";

const locales = ["en", "fr"] ;
const defaultLocale = "en";

export default getRequestConfig(async ({ locale }) => {
  const safeLocale: string = locales.includes(locale as string)
    ? locale!
    : defaultLocale;

  return {
    locale: safeLocale,
    messages: (await import(`/messages/${safeLocale}.json`)).default,
  };
});
