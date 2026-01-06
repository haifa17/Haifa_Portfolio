import Link from "next/link";
import { GRADIENT_HOVER_CLASSES, NavLink } from "./constants";


  
interface DesktopNavProps {
  links: NavLink[];
  t: (key: string) => string;
}

export const DesktopNav = ({ links, t }:DesktopNavProps) => (
  <div className="hidden text-white lg:flex items-center gap-10 mx-auto max-w-7xl">
    {links.map(({ href, label }) => (
      <Link
        key={href}
        href={href}
        className={`font-semibold ${GRADIENT_HOVER_CLASSES}`}
      >
        {t(label)}
      </Link>
    ))}
  </div>
);
