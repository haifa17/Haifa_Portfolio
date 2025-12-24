"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // Each animated element data
  const elements = [
    {
      type: "p",
      text: "I'm Haifa Khiari",
      className: "lg:text-4xl font-extrabold",
    },
    {
      type: "p",
      text: (
        <>
          A{" "}
          <span className="bg-gradient-to-r from-[#9A33FF] to-[#FF8660] inline-block text-transparent bg-clip-text">
            Front-end
          </span>{" "}
          Developer
        </>
      ),
      className: "text-2xl lg:text-5xl font-extrabold",
    },
    {
      type: "p",
      text: (
        <>
          Passionate Software Engineer with a focus on{" "}
          <span className="font-extrabold text-lg bg-gradient-to-r from-[#5BADFF] to-[#1373D1] inline-block text-transparent bg-clip-text">
            ReactJs & NextJs
          </span>{" "}
          development, dedicated to crafting elegant and user-friendly web
          applications.
        </>
      ),
      className: "text-base",
    },
  ];

  return (
    <div
      id="home"
      className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 items-center text-white text-center lg:text-left"
    >
      {/* Left: Image */}
      <motion.img
        src="/haifa.jpg"
        alt="Haifa Khiari"
        className="rounded-md w-60 mx-auto lg:mx-0"
        ref={useInView({ triggerOnce: true, threshold: 0.5 })[0]}
        initial="hidden"
        animate={
          useInView({ triggerOnce: true, threshold: 0.5 })[1]
            ? "visible"
            : "visible"
        }
        variants={variants}
        transition={{ ease: "easeInOut", duration: 0.5 }}
      />

      {/* Right: Text + Buttons */}
      <div className="flex flex-col gap-6">
        {elements.map((el, i) => {
          const [ref, inView] = useInView({
            triggerOnce: true,
            threshold: 0.5,
          });
          const transition = {
            ease: "easeInOut",
            duration: 0.5,
            delay: i * 0.25,
          };

          return (
            <motion.div
              key={i}
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={variants}
              transition={transition}
            >
              <p className={el.className}>{el.text}</p>
            </motion.div>
          );
        })}

        {/* Buttons */}
        <motion.div
          ref={useInView({ triggerOnce: true, threshold: 0.5 })[0]}
          initial="hidden"
          animate={
            useInView({ triggerOnce: true, threshold: 0.5 })[1]
              ? "visible"
              : "visible"
          }
          variants={variants}
          transition={{ ease: "easeInOut", duration: 1 }}
          className="flex flex-col sm:flex-row gap-4 mt-4"
        >
          <a href="#contact">
            <button className="rounded-full px-4 py-3 bg-white text-black font-semibold hover:border hover:border-white hover:bg-gradient-to-r from-[#9A33FF] to-[#FF8660] hover:inline-block hover:text-transparent hover:bg-clip-text">
              Get In Touch
            </button>
          </a>

          <a href="/file/Haifa_Khiari_frontend_developer.pdf" download>
            <button className="rounded-full px-4 py-3 border border-white hover:bg-gradient-to-r from-[#9A33FF] to-[#FF8660] hover:font-semibold">
              Download CV
            </button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
