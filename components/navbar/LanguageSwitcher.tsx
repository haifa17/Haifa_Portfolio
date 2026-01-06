import { Globe } from "lucide-react";
import Link from "next/link";
import Flag from "react-world-flags";
import { Language } from "./constants";

interface LanguageSwitcherProps {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
  locale: string;
  languages: Language[];
  switchLocalePath: (locale: string) => string;
}

export const LanguageSwitcher = ({ isOpen, toggle, close, locale, languages, switchLocalePath }:LanguageSwitcherProps) => (
  <div className="relative lg:flex justify-end lg:px-8 px-4">
    <button
      onClick={toggle}
      className="flex items-center gap-2 text-white  dark:hover:text-[#FF8660] transition"
      aria-label="Switch language"
    >
      <Globe size={20} />
    </button>
    
    {isOpen && (
      <div className="absolute right-9 lg:mt-6 w-24 rounded-xl bg-white dark:bg-[#1a1a1a] shadow-lg border border-white/10 z-50">
        {languages.map(({ code, flag }) => (
          <Link
            key={code}
            href={switchLocalePath(code)}
            onClick={close}
            className={`flex items-center justify-center px-4 py-2 text-sm font-semibold hover:bg-white/10 ${
              locale === code ? 'text-[#FF8660]' : 'text-white'
            }`}
          >
            <Flag code={flag} className="h-6 w-8" />
          </Link>
        ))}
      </div>
    )}
  </div>
);