"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { EXPERIENCES } from "./constants";
import { fadeInVariants } from "../../lib/variants";
import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { ExpertiseSection } from "./ExpertiseSection";

const Experience = () => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div
      id="experience"
      className="flex flex-col text-white gap-10 lg:gap-20 py-8 px-6 lg:px-20 items-center justify-center"
    >
      {/* Section Title */}
      <motion.h2
        ref={titleRef}
        initial="hidden"
        animate={titleInView ? "visible" : "hidden"}
        variants={fadeInVariants}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className="font-extrabold text-4xl lg:text-5xl uppercase bg-gradient-to-r from-[#9A33FF] to-[#FF8660] text-transparent bg-clip-text"
      >
        Experience
      </motion.h2>

      {/* Experience Cards */}
      <div className="flex flex-col gap-10 lg:gap-16 w-full max-w-5xl">
        {EXPERIENCES.map((experience, index) => (
          <ExperienceCard
            key={experience.company}
            experience={experience}
            index={index}
          />
        ))}
      </div>
      {/* Expertise Section */}
      <ExpertiseSection />
    </div>
  );
};

export default Experience;
