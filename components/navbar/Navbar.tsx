"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { DesktopNav } from "./DesktopNav";
import { LANGUAGES, NAV_LINKS } from "./constants";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileNav } from "./MobileNav";
import { MobileMenuToggle } from "./MobileMenuToggle";
import { ModeToggle } from "@/components/navbar/ModeToggle";

const Navbar = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("Navbar");

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const switchLocalePath = (nextLocale: string) => {
    if (!pathname) return `/${nextLocale}`;
    const segments = pathname.split("/");
    segments[1] = nextLocale; // replace current locale
    return segments.join("/");
  };
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleLangMenu = () => setIsLangMenuOpen(!isLangMenuOpen);
  const closeLangMenu = () => setIsLangMenuOpen(false);

  return (
    <nav className="dark:bg-[#222222] bg-[#583e72] flex justify-end lg:justify-center py-8 relative z-50">
      <DesktopNav links={NAV_LINKS} t={t} />
      <div className="lg:px-8 px-4 flex items-center">
        <LanguageSwitcher
          isOpen={isLangMenuOpen}
          toggle={toggleLangMenu}
          close={closeLangMenu}
          locale={locale}
          languages={LANGUAGES}
          switchLocalePath={switchLocalePath}
        />
        <ModeToggle />
      </div>
      <MobileMenuToggle isOpen={isMobileMenuOpen} toggle={toggleMobileMenu} />

      {isMobileMenuOpen && <MobileNav links={NAV_LINKS} t={t} />}
    </nav>
  );
};

export default Navbar;
