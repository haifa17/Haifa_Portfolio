"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeInVariants, staggerContainer } from "@/lib/variants";
import { EXPERTISE_AREAS } from "./constants";
import { Badge } from "@/components/badge/Badge";

export const ExpertiseSection = () => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="w-full max-w-5xl mt-10 lg:mt-16 flex flex-col  gap-10 lg:gap-20">
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

      {EXPERTISE_AREAS.map((area, areaIdx) => {
        const [ref, inView] = useInView({
          triggerOnce: true,
          threshold: 0.2,
        });

        return (
          <div key={area.title} className="flex flex-col  gap-4 lg:gap-6">
            <motion.h4
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeInVariants}
              transition={{ ease: "easeInOut", duration: 0.5 }}
              className="font-semibold text-lg min-w-fit text-white"
            >
              {area.title}:
            </motion.h4>
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4"
            >
              {area.items.map((item, itemIdx) => (
                <Badge key={item} skill={item} index={itemIdx} />
              ))}
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};
