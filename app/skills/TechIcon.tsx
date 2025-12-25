"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { TECH_ICONS } from "./constants";
import { fadeInVariants } from "@/lib/variants";

export const TechIcon = ({
  icon,
  index,
}: {
  icon: (typeof TECH_ICONS)[0];
  index: number;
}) => {
  return (
    <motion.div
      variants={fadeInVariants}
      transition={{ ease: "easeInOut", duration: 0.4, delay: index * 0.1 }}
    >
      <Image
        src={icon.src}
        width={80}
        height={80}
        alt={icon.alt}
        className="cursor-pointer hover:scale-125 transition-all ease-in-out"
      />
    </motion.div>
  );
};
