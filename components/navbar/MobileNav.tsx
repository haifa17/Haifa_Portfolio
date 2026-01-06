import Link from "next/link";
import { GRADIENT_HOVER_CLASSES, NavLink } from "./constants";

interface MobileNavProps {
  links: NavLink[];
  t: (key: string) => string;
}

export const MobileNav = ({ links, t }:MobileNavProps) => (
  <div className="fixed inset-0 z-10 flex">
    <div className="ml-auto w-full h-[300px] mt-20 dark:text-black  bg-white p-4 shadow-lg z-10">
      <div className="flex flex-col gap-7">
        {links.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={`flex items-center gap-2 text-xl font-semibold cursor-pointer ${GRADIENT_HOVER_CLASSES}`}
          >
            <Icon size={20} /> {t(label)}
          </Link>
        ))}
      </div>
    </div>
  </div>
);
