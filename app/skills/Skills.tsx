"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SKILL_CATEGORIES, TECH_ICONS } from "./constants";
import { SkillCategory } from "./SkillCategory";
import { TechIcon } from "./TechIcon";
import { fadeInVariants, staggerContainer } from "@/lib/variants";

const Skills = () => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [iconsRef, iconsInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div
      id="skills"
      className="flex flex-col text-white gap-10 lg:gap-20 py-8 items-center justify-center"
    >
      <motion.h2
        ref={titleRef}
        initial="hidden"
        animate={titleInView ? "visible" : "hidden"}
        variants={fadeInVariants}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className="font-bold text-4xl text-center"
      >
        SKILLS
      </motion.h2>
      <motion.div
        ref={iconsRef}
        initial="hidden"
        animate={iconsInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="flex flex-wrap justify-center items-center gap-16"
      >
        {TECH_ICONS.map((icon, index) => (
          <TechIcon key={icon.alt} icon={icon} index={index} />
        ))}
      </motion.div>

      <div className="flex flex-col gap-8 w-full max-w-6xl px-4">
        {SKILL_CATEGORIES.map((category, index) => (
          <SkillCategory
            key={category.title}
            title={category.title}
            skills={category.skills}
            gridCols={category.gridCols}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
