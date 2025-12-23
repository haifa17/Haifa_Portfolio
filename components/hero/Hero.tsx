"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Hero = () => {
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

  return (
    <div
      id="home"
      className="flex flex-col text-white gap-10 py-8  items-center justify-center text-center"
    >
      <motion.img
        ref={ref1}
        initial="hidden"
        animate={inView1 ? "visible" : "hidden"}
        variants={variants}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        src="/haifa.jpg"
        alt=""
        className="rounded-md w-40 "
      />
      <div className="flex flex-col font-extrabold   ">
        <motion.p
          ref={ref2}
          initial="hidden"
          animate={inView2 ? "visible" : "hidden"}
          variants={variants}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }}
          className=" lg:text-4xl"
        >
          I&#39;m Haifa Khiari
        </motion.p>
        <motion.p
          ref={ref3}
          initial="hidden"
          animate={inView3 ? "visible" : "hidden"}
          variants={variants}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 0.75 }}
          className="text-2xl lg:text-5xl"
        >
          A{" "}
          <span className=" bg-gradient-to-r from-[#9A33FF] to-[#FF8660] inline-block text-transparent bg-clip-text ">
            Front-end
          </span>{" "}
          Developer
        </motion.p>
      </div>
      <motion.div
        ref={ref4}
        initial="hidden"
        animate={inView4 ? "visible" : "hidden"}
        variants={variants}
        transition={{ ease: "easeInOut", duration: 0.5, delay: 1 }}
        className="w-[50%]"
      >
        <p className="text-base">
          Passionate Software Engineer with a focus on{" "}
          <span className="font-extrabold text-lg bg-gradient-to-r from-[#5BADFF] to-[#1373D1] inline-block text-transparent bg-clip-text">
            {" "}
            ReactJs & NextJs{" "}
          </span>
          development, dedicated to crafting elegant and user-friendly web
          applications.
        </p>
      </motion.div>
      <motion.div
        ref={ref5}
        initial="hidden"
        animate={inView5 ? "visible" : "hidden"}
        variants={variants}
        transition={{ ease: "easeInOut", duration: 1.25 }}
        className="flex items-center gap-2 lg:gap-8 lg:text-lg "
      >
        <a href="#contact">
          <button className="rounded-full px-4 py-3 bg-white text-black font-semibold hover:border hover:border-white hover:bg-gradient-to-r from-[#9A33FF] to-[#FF8660] hover:inline-block hover:text-transparent hover:bg-clip-text ">
            Get In Touch
          </button>
        </a>

        <a href="/file/Haifa_Khiari_frontend_developer.pdf" download>
          <button className="rounded-full px-4 py-3 border border-white hover:bg-gradient-to-r from-[#9A33FF] to-[#FF8660]  hover:font-semibold">
            Download CV
          </button>
        </a>
      </motion.div>
    </div>
  );
};

export default Hero;
