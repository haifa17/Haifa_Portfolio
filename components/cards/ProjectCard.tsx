"use client";
import { motion } from "framer-motion";
import { fadeInVariants } from "@/lib/variants";
import React from "react";
import { useInView } from "react-intersection-observer";
import StatusBadge from "../badge/StatusBadge";
import { COMING_SOON_PROJECTS } from "@/app/[locale]/projects/constants";
import { useTranslations } from "next-intl";
type Project = (typeof COMING_SOON_PROJECTS)[number]; // single project type

export const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
  }) => {
    const t = useTranslations("Projects");
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const Icon = project.icon;

  return (
    <motion.div
      key={project.title}
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInVariants}
      transition={{
        ease: "easeInOut",
        duration: 0.5,
        delay: index * 0.1,
      }}
      className="relative group"
    >
      {/* Card */}
      <div className="h-full bg-gradient-to-br from-[#9A33FF]/5 to-[#FF8660]/5 border border-[#9A33FF]/30 rounded-xl p-6 hover:border-[#9A33FF]/60 transition-all duration-300 flex flex-col gap-4">
        {/* Icon */}
        <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Icon size={24} className="text-white" />
        </div>

        {/* Title & Description */}
        <div className="flex flex-col gap-2">
          <h4 className="font-bold text-lg text-white">{project.title}</h4>
          <p className="text-sm text-[#E1E1E1]/80">{t(project.descriptionKey)}</p>
        </div>

        {/* Status */}
        <div className="mt-auto">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-[#E1E1E1]/60">Progress</span>
            <span className="font-semibold text-[#9A33FF]">
              {project.progress}%
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-2 bg-[#E1E1E1]/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={
                inView ? { width: `${project.progress}%` } : { width: 0 }
              }
              transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
              className="h-full gradient-primary rounded-full"
            />
          </div>

          {/* Status Badge */}
          <StatusBadge content={project.status} />
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#9A33FF]/0 to-[#FF8660]/0 group-hover:from-[#9A33FF]/10 group-hover:to-[#FF8660]/10 rounded-xl transition-all duration-300 -z-10 blur-xl" />
    </motion.div>
  );
};
