import {
  Award,
  BriefcaseBusiness,
  FolderGit2,
  Home,
  LucideIcon,
  Phone,
} from "lucide-react";

export interface NavLink {
  href: string;
  label: string;
  icon: LucideIcon;
}
export const NAV_LINKS: NavLink[] = [
  { href: "#home", label: "home", icon: Home },
  { href: "#skills", label: "skills", icon: Award },
  { href: "#experience", label: "experience", icon: BriefcaseBusiness },
  { href: "#projects", label: "projects", icon: FolderGit2 },
  { href: "#contact", label: "contact", icon: Phone },
];
export interface Language {
  code: string;
  flag: string;
}

export const LANGUAGES: Language[] = [
  { code: "en", flag: "GB" },
  { code: "fr", flag: "FR" },
];
export const GRADIENT_HOVER_CLASSES =
  "hover:bg-gradient-to-r from-[#FF8660] to-[#9A33FF] hover:inline-block hover:text-transparent hover:bg-clip-text";
