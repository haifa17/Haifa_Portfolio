"use client";
import React from "react";
import { motion } from "framer-motion";
import { CONTACT_INFO } from "./constants";
import Link from "next/link";
import { fadeInVariants } from "@/lib/variants";

export const ContactItem = ({
  item,
  index,
}: {
  item: (typeof CONTACT_INFO)[0];
  index: number;
}) => {
  const Icon = item.icon;

  return (
    <motion.div
      variants={fadeInVariants}
      transition={{ ease: "easeInOut", duration: 0.4, delay: index * 0.1 }}
    >
      <Link
        href={item.href}
        target={item.href.startsWith("http") ? "_blank" : undefined}
        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="flex items-center gap-3 p-3 rounded-lg border border-[#FF8660]/30 bg-gradient-to-r from-[#FF8660]/5 to-[#D5491D]/5 hover:border-[#FF8660] hover:from-[#FF8660]/10 hover:to-[#D5491D]/10 transition-all duration-300 group"
      >
        <div className="p-2 rounded-full bg-gradient-to-r from-[#FF8660] to-[#D5491D] group-hover:scale-110 transition-transform duration-300">
          <Icon size={20} className="text-black dark:text-white" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs dark:text-[#E1E1E1]/60">{item.label}</span>
          <span className="font-semibold text-black dark:text-white group-hover:text-[#FF8660] transition-colors duration-300">
            {item.value}
          </span>
        </div>
      </Link>
    </motion.div>
  );
};
