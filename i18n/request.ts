import { getRequestConfig } from "next-intl/server";
import { locales } from "../config";

// @ts-ignore
export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as (typeof locales)[number])) {
    return {
      locale: "en",
      messages: {},
    };
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
