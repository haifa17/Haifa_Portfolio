import { fadeInVariants } from "@/app/skills/variants";
import { motion } from "framer-motion";

export const Badge = ({ skill: item, index }: { skill: string; index: number }) => (
  <motion.div
    variants={fadeInVariants}
    transition={{ ease: "easeInOut", duration: 0.4, delay: index * 0.05 }}
    className="cursor-pointer text-center rounded-full px-4 py-1 border border-[#9A33FF] transition-all duration-500 ease-in-out bg-gradient-to-r from-[#9A33FF] to-[#FF8660] hover:scale-105"
  >
    <p className="h-full w-full">{item}</p>
  </motion.div>
);
