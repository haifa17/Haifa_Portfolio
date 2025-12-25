"use client";
import React from "react";
import { motion } from "framer-motion";
import { EXPERIENCES } from "@/app/experience/constants";
import { useInView } from "react-intersection-observer";
import {
  fadeInVariants,
  slideInLeft,
  slideInRight,
  staggerContainer,
} from "@/lib/variants";

export const ExperienceCard = ({
  experience,
  index,
}: {
  experience: (typeof EXPERIENCES)[0];
  index: number;
}) => {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [detailsRef, detailsInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [highlightsRef, highlightsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="flex flex-col gap-5 lg:gap-8">
      {/* Company and Role Header */}
      <motion.div
        ref={headerRef}
        initial="hidden"
        animate={headerInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-2"
      >
        <motion.div
          variants={slideInLeft}
          transition={{ ease: "easeInOut", duration: 0.5 }}
        >
          <h3 className="font-bold text-xl lg:text-2xl">
            <span className="bg-gradient-to-r from-[#9A33FF] to-[#FF8660] text-transparent bg-clip-text">
              {experience.company}
            </span>
            <span className="text-white"> / {experience.role}</span>
          </h3>
        </motion.div>

        <motion.p
          variants={slideInRight}
          transition={{ ease: "easeInOut", duration: 0.5 }}
          className="text-[#E1E1E1] text-sm lg:text-base"
        >
          <span className="font-semibold">{experience.period}</span>,{" "}
          {experience.location}
        </motion.p>
      </motion.div>

      {/* Highlights */}
      <motion.ul
        ref={highlightsRef}
        initial="hidden"
        animate={highlightsInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="flex flex-col gap-3 text-[#E1E1E1]"
      >
        {experience.highlights.map((highlight, idx) => (
          <motion.li
            key={idx}
            variants={fadeInVariants}
            transition={{ ease: "easeInOut", duration: 0.4 }}
            className="flex gap-3 items-start"
          >
            <span className="text-[#9A33FF] mt-1.5 min-w-[8px]">▹</span>
            <span className="leading-relaxed">{highlight}</span>
          </motion.li>
        ))}
      </motion.ul>

      {index < EXPERIENCES.length - 1 && (
        <motion.div
          ref={detailsRef}
          initial="hidden"
          animate={detailsInView ? "visible" : "hidden"}
          variants={fadeInVariants}
          transition={{ ease: "easeInOut", duration: 0.5 }}
          className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#9A33FF]/30 to-transparent mt-5"
        />
      )}
    </div>
  );
};
