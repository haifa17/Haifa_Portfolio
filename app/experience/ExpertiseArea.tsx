"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeInVariants, staggerContainer } from "@/lib/variants";
import { EXPERTISE_AREAS } from "./constants";
import { Badge } from "@/components/badge/Badge";

export const ExpertiseArea = ({
  area,
}: {
  area: (typeof EXPERTISE_AREAS)[number];
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="flex flex-col gap-4 lg:gap-6">
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
};
