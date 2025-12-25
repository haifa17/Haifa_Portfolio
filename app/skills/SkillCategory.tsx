"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeInVariants, staggerContainer } from "@/lib/variants";
import { Badge } from "@/components/badge/Badge";

export const SkillCategory = ({
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
