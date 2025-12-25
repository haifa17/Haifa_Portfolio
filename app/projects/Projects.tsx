"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Wrench, Clock } from "lucide-react";
import { fadeInVariants, pulseVariants } from "@/lib/variants";
import { COMING_SOON_PROJECTS } from "./constants";
import StatusBadge from "@/components/badge/StatusBadge";
import PreviewCard from "@/components/cards/PreviewCard";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import MainButton from "@/components/buttons/MainButton";

const Projects = () => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      id="projects"
      className="flex flex-col text-white gap-10 lg:gap-20 py-12 px-6 lg:px-20 items-center justify-center min-h-screen"
    >
      <motion.h2
        ref={titleRef}
        initial="hidden"
        animate={titleInView ? "visible" : "hidden"}
        variants={fadeInVariants}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className="font-extrabold text-4xl lg:text-5xl uppercase bg-gradient-to-r from-[#9A33FF] to-[#FF8660] text-transparent bg-clip-text text-center"
      >
        Projects
      </motion.h2>

      <motion.div
        ref={contentRef}
        initial="hidden"
        animate={contentInView ? "visible" : "hidden"}
        variants={fadeInVariants}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className="flex flex-col items-center gap-8 max-w-2xl text-center"
      >
        <motion.div
          variants={pulseVariants}
          initial="initial"
          animate="animate"
          className="relative"
        >
          <div className="absolute inset-0 gradient-primary rounded-full blur-2xl opacity-30" />
          <div className="relative gradient-primary p-8 rounded-full">
            <Wrench size={64} className="text-white" strokeWidth={2} />
          </div>
        </motion.div>

        <div className="flex flex-col gap-4">
          <h3 className="text-2xl lg:text-3xl font-bold">
            🚧 Under Construction 🚧
          </h3>
          <p className="text-[#E1E1E1] text-lg leading-relaxed">
            I'm currently working on some exciting projects to showcase here.
            Check back soon to see my latest work in action!
          </p>
        </div>
        <StatusBadge
          content={
            <>
              {" "}
              <Clock size={20} className="text-[#9A33FF]" />
              <span className="font-semibold">Expected: Coming Soon</span>
            </>
          }
        />
      </motion.div>

      <PreviewCard projects={COMING_SOON_PROJECTS} />

      <motion.div
        initial="hidden"
        animate={contentInView ? "visible" : "hidden"}
        variants={fadeInVariants}
        transition={{ ease: "easeInOut", duration: 0.5, delay: 0.3 }}
        className="flex flex-col items-center gap-4 mt-8"
      >
        <p className="text-[#E1E1E1] text-center">
          In the meantime, feel free to check out my GitHub or get in touch!
        </p>
        <div className="flex gap-4">
          <SecondaryButton
            href="https://github.com/haifa17"
            title="View GitHub"
          />
          <MainButton href="#contact" title="Contact Me" />
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
