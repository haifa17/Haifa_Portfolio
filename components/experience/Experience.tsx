"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Experience = () => {
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
  const [ref4, inView4] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [ref5, inView5] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  const variants2 = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  const variants3 = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div id="experience" className="flex flex-col text-white gap-10 lg:gap-20 py-8 px-10 lg:px-20  items-center justify-center">
      <motion.p
        ref={ref1}
        initial="hidden"
        animate={inView1 ? "visible" : "hidden"}
        variants={variants}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className="font-extrabold text-4xl uppercase bg-gradient-to-r from-[#9A33FF] to-[#FF8660] inline-block text-transparent bg-clip-text"
      >
        Experience
      </motion.p>
      <div className="flex flex-col gap-5 lg:gap-10">
        <div className="flex flex-col lg:flex-row justify-between">
          <motion.p
            ref={ref2}
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            variants={variants2}
            transition={{ ease: "easeInOut", duration: 0.5 }}
          >
            <span className="font-bold text-lg">VISIOAD</span> / Frontend
            Developer
          </motion.p>
          <motion.p
            ref={ref3}
            initial="hidden"
            animate={inView3 ? "visible" : "hidden"}
            variants={variants3}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            className="text-[#E1E1E1]"
          >
            <span className="font-semibold"> SEPTEMBER 2023 - PRESENT </span>,
            SOUSSE-TUNISIA
          </motion.p>
        </div>
        <motion.p
          ref={ref4}
          initial="hidden"
          animate={inView4 ? "visible" : "hidden"}
          variants={variants}
          transition={{ ease: "easeInOut", duration: 0.5 }}
          className=" text-[#E1E1E1]"
        >
          As a frontend developer with 2 years of experience, I have a strong
          foundation in creating dynamic and responsive web applications. <br />{" "}
          My experience with React.js has enabled me to develop fast, scalable,
          and dynamic web pages with excellent user experiences. <br />{" "}
          Additionally, my proficiency in Next.js has equipped me with the
          skills to build server-rendered React applications that enhance
          performance and SEO. <br /> I have developed e-commerce applications
          with dashboard management, allowing me to seamlessly implement UI/UX
          designs and collaborate effectively with backend teams to consume
          APIs. <br /> I have a deep understanding of component-based
          architecture and state management, and I am well-versed in the latest
          web development trends and technologies.
        </motion.p>
        <motion.div
          ref={ref5}
          initial="hidden"
          animate={inView5 ? "visible" : "hidden"}
          variants={variants}
          transition={{ ease: "easeInOut", duration: 0.5 }}
          className="flex flex-col lg:flex-row items-center gap-4"
        >
          <div className=" w-[130px] cursor-pointer text-center rounded-full px-4 py-2 border border-[#9A33FF] transition-all duration-500 ease-in-out bg-gradient-to-r from-[#9A33FF] to-[#FF8660]  ">
            <p className="h-full w-full ">ReactJS</p>
          </div>
          <div className=" w-[130px] cursor-pointer text-center rounded-full px-4 py-2 border border-[#9A33FF] transition-all duration-500 ease-in-out bg-gradient-to-r from-[#9A33FF] to-[#FF8660]  ">
            <p className="h-full w-full ">NextJS</p>
          </div>
          <div className=" w-[130px] cursor-pointer text-center rounded-full px-4 py-2 border border-[#9A33FF] transition-all duration-500 ease-in-out bg-gradient-to-r from-[#9A33FF] to-[#FF8660]  ">
            <p className="h-full w-full ">JavaScript</p>
          </div>
          <div className=" w-[130px] cursor-pointer text-center rounded-full px-4 py-2 border border-[#9A33FF] transition-all duration-500 ease-in-out bg-gradient-to-r from-[#9A33FF] to-[#FF8660]  ">
            <p className="h-full w-full ">Typescript</p>
          </div>
          <div className=" w-[130px] cursor-pointer text-center rounded-full px-4 py-2 border border-[#9A33FF] transition-all duration-500 ease-in-out bg-gradient-to-r from-[#9A33FF] to-[#FF8660]  ">
            <p className="h-full w-full  ">Tailwind CSS</p>
          </div>
          <div className=" w-[130px] cursor-pointer text-center rounded-full px-4 py-2 border border-[#9A33FF] transition-all duration-500 ease-in-out bg-gradient-to-r from-[#9A33FF] to-[#FF8660]  ">
            <p className="h-full w-full ">Git</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
