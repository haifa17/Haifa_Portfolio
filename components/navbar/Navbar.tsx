"use client";
import { AnimatedLanguageToggle } from "@/lib/CompactLanguageToggle";
import {
  Award,
  BriefcaseBusiness,
  FolderGit2,
  Home,
  Menu,
  Phone,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const t = useTranslations("Navbar");

  return (
    <div className="bg-[#222222] flex justify-end lg:justify-center overflow-hidden  py-8  ">
      <div className="hidden text-white lg:flex items-center gap-10 mx-auto max-w-7xl">
        <Link
          href="#home"
          className=" font-semibold hover:bg-gradient-to-r from-[#FF8660] to-[#9A33FF] hover:inline-block hover:text-transparent hover:bg-clip-text "
        >
          {t("home")}
        </Link>
        <Link
          href="#skills"
          className=" font-semibold hover:bg-gradient-to-r from-[#FF8660] to-[#9A33FF] hover:inline-block hover:text-transparent hover:bg-clip-text "
        >
          {t("skills")}{" "}
        </Link>
        <Link
          href="#experience"
          className=" font-semibold hover:bg-gradient-to-r from-[#FF8660] to-[#9A33FF] hover:inline-block hover:text-transparent hover:bg-clip-text "
        >
          {t("experience")}
        </Link>
        <Link
          href="#projects"
          className=" font-semibold hover:bg-gradient-to-r from-[#FF8660] to-[#9A33FF] hover:inline-block hover:text-transparent hover:bg-clip-text "
        >
          {t("projects")}
        </Link>

        <Link
          href="#contact"
          className=" font-semibold hover:bg-gradient-to-r from-[#FF8660] to-[#9A33FF] hover:inline-block hover:text-transparent hover:bg-clip-text "
        >
          {t("contact")}
        </Link>
      </div>
      {/* <AnimatedLanguageToggle /> */}
      <div className="flex mr-10 lg:hidden  " onClick={handleClick}>
        <Menu size={30} className="text-white" />
        {open && (
          <div className=" fixed inset-0 z-10 flex">
            <div className="ml-auto w-full h-[300px] mt-20 bg-white p-4 shadow-lg z-10  ">
              <div className="flex flex-col  gap-7  ">
                <Link
                  href="#home"
                  className="flex items-center gap-2 curosr-pointer text-xl font-semibold hover:bg-gradient-to-r from-[#FF8660] to-[#9A33FF] hover:inline-block hover:text-transparent hover:bg-clip-text"
                >
                  <Home size={20} /> {t("home")}
                </Link>
                <Link
                  href="#skills"
                  className=" flex items-center gap-2  text-xl curosr-pointer font-semibold hover:bg-gradient-to-r from-[#FF8660] to-[#9A33FF] hover:inline-block hover:text-transparent hover:bg-clip-text "
                >
                  <Award size={20} /> {t("skills")}
                </Link>
                <Link
                  href="#experience"
                  className=" flex items-center gap-2  text-xl curosr-pointer font-semibold hover:bg-gradient-to-r from-[#FF8660] to-[#9A33FF] hover:inline-block hover:text-transparent hover:bg-clip-text "
                >
                  <BriefcaseBusiness size={20} /> {t("experience")}
                </Link>
                <Link
                  href="#projects"
                  className="flex items-center gap-2 text-xl curosr-pointer  font-semibold hover:bg-gradient-to-r from-[#FF8660] to-[#9A33FF] hover:inline-block hover:text-transparent hover:bg-clip-text "
                >
                  <FolderGit2 size={20} /> {t("projects")}
                </Link>

                <Link
                  href="#contact"
                  className=" flex items-center gap-2  text-xl curosr-pointer font-semibold hover:bg-gradient-to-r from-[#FF8660] to-[#9A33FF] hover:inline-block hover:text-transparent hover:bg-clip-text "
                >
                  <Phone size={20} /> {t("contact")}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
