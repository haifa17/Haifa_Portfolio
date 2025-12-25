"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Badge } from "@/components/badge/Badge";
import { fadeInVariants } from "./variants";
import { SKILL_CATEGORIES, TECH_ICONS } from "./constants";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const SkillCategory = ({
  title,
  skills,
  gridCols,
  index,
}: {
  title: string;
  skills: string[];
  gridCols: string;
  index: number;
}) => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [skillsRef, skillsInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="flex flex-col  text-white items-center gap-5 w-full">
      <motion.p
        ref={titleRef}
        initial="hidden"
        animate={titleInView ? "visible" : "hidden"}
        variants={fadeInVariants}
        transition={{ ease: "easeInOut", duration: 0.5, delay: index * 0.1 }}
        className="font-semibold min-w-fit"
      >
        {title}:
      </motion.p>
      <motion.div
        ref={skillsRef}
        initial="hidden"
        animate={skillsInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className={`grid ${gridCols} grid-cols-2 items-center gap-4 w-full`}
      >
        {skills.map((skill, idx) => (
          <Badge key={skill} skill={skill} index={idx} />
        ))}
      </motion.div>
    </div>
  );
};

const TechIcon = ({
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
