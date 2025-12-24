"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
interface CardProps {
  title: string;
  description: string;
  image1?: string;
  image2?: string;
  image3?: string;
  video1?: string;
  video2?: string;
}
const Card = ({ title, description, video1 }: CardProps) => {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [ref3, inView3] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col cursor-pointer bg-gradient-to-r from-[#5BADFF] to-[#1373D1]   p-1 w-[250px]  lg:w-[400px] lg:h-[500px] rounded-md  hover:scale-110 transition-all ease-in-out ">
      <div className="bg-black  lg:w-[392px]  h-[490px] p-5">
        <motion.div
          ref={ref1}
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
          variants={variants}
          transition={{ ease: "easeInOut", duration: 0.5 }}
          className="  "
        >
          <video
            src={video1}
            controls={true}
            autoPlay={true}
            loop
            playsInline
            className="mb-2 w-full h-[150px] lg:h-[200px] object-contain hover:h-[180px] hover:lg:h-[230px] transition-all ease-in-out "
          />
        </motion.div>
        <motion.p
          ref={ref2}
          initial="hidden"
          animate={inView2 ? "visible" : "hidden"}
          variants={variants}
          transition={{ ease: "easeInOut", duration: 0.5 }}
          className="font-bold text-xl lg:text-2xl mb-3  "
        >
          {title}
        </motion.p>
        <div className="flex flex-col gap-2 lg:justify-start lg:items-start lg:text-start  ">
          <motion.p
            ref={ref3}
            initial="hidden"
            animate={inView3 ? "visible" : "hidden"}
            variants={variants}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            className=" text-[#E1E1E1]  text-xs lg:text-sm "
          >
            {" "}
            {description}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Card;
