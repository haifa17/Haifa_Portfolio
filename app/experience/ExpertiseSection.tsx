"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeInVariants } from "@/lib/variants";
import { EXPERTISE_AREAS } from "./constants";
import { ExpertiseArea } from "./ExpertiseArea";


export const ExpertiseSection = () => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="w-full max-w-5xl mt-10 lg:mt-16 flex flex-col gap-10 lg:gap-20">
      <motion.h3
        ref={titleRef}
        initial="hidden"
        animate={titleInView ? "visible" : "hidden"}
        variants={fadeInVariants}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className="font-bold text-3xl lg:text-4xl uppercase text-center text-[#9A33FF]"
      >
        Areas of Expertise
      </motion.h3>

      {EXPERTISE_AREAS.map((area) => (
        <ExpertiseArea key={area.title} area={area} />
      ))}
    </div>
  );
};
