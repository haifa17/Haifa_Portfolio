import { fadeInVariants } from "@/lib/variants";
import { motion } from "framer-motion";

export const Badge = ({
  skill: item,
  index,
}: {
  skill: string;
  index: number;
}) => (
  <motion.div
    variants={fadeInVariants}
    transition={{ ease: "easeInOut", duration: 0.4, delay: index * 0.05 }}
    className="cursor-pointer text-center rounded-full p-2  transition-all duration-500 ease-in-out gradient-primary hover:scale-105"
  >
    <p className="h-full w-full">{item}</p>
  </motion.div>
);
