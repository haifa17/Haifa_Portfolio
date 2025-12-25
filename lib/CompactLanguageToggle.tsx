"use client";
import React, { useState, useTransition } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { Languages, Globe, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LANGUAGES = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
];

export const AnimatedLanguageToggle = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchLocale = () => {
    const newLocale = locale === "en" ? "fr" : "en";
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);

    startTransition(() => {
      router.replace(newPathname);
    });
  };

  const currentLanguage = LANGUAGES.find((lang) => lang.code === locale);
  const otherLanguage = LANGUAGES.find((lang) => lang.code !== locale);

  return (
    <button
      onClick={switchLocale}
      disabled={isPending}
      className="relative flex items-center gap-3 px-5 py-2.5 rounded-full gradiant-primary transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group"
      aria-label="Switch language"
    >
      {/* Content */}
      <div className="relative flex items-center gap-2">
        <Globe size={18} className="text-white" />
        <span className="text-white font-medium text-sm">
          {currentLanguage?.flag}
        </span>
        <span className="text-[#9A33FF] font-bold">→</span>
        <span className="text-white font-medium text-sm">
          {otherLanguage?.flag}
        </span>
      </div>
    </button>
  );
};
