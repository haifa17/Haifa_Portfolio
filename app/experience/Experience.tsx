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
    <div
      id="experience"
      className="flex flex-col text-white gap-10 lg:gap-20 py-8 px-10 lg:px-20  items-center justify-center"
    >
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
          As a frontend developer with over 2 years of production experience, I
          specialize in building high-performance, scalable web applications
          using React.js and Next.js. I have successfully delivered complex
          projects including e-commerce platforms with full dashboard management
          systems, implementing secure authentication flows with role-based
          access control <span className="font-bold">(NextAuth, Clerk) </span>{" "}
          and optimizing performance through
          <span className="font-bold"> SSR, SSG,</span> and{" "}
          <span className="font-bold">ISR</span> strategies. My expertise
          extends to modern state management solutions{" "}
          <span className="font-bold">(React Query, Zustand)</span>, creating
          engaging user interfaces with animation libraries{" "}
          <span className="font-bold">(Framer Motion, GSAP) </span>, and
          implementing <span className="font-bold">SEO </span> best practices
          that improve discoverability. I leverage advanced techniques like{" "}
          <span className="font-bold">
            code splitting, React Suspense , and dynamic imports
          </span>{" "}
          to ensure optimal loading times and user experience. With a strong
          foundation in component-based architecture and API integration, I
          excel at
          <span className="font-bold"> translating UI/UX </span>designs into
          polished, production-ready applications. I'm experienced in
          collaborating with cross-functional teams through{" "}
          <span className="font-bold"> Git workflows </span> and
          <span className="font-bold"> code reviews</span>, and I've
          successfully implemented{" "}
          <span className="font-bold">internationalization (i18n)</span> for
          multilingual platforms. My approach combines clean, maintainable code
          with a deep understanding of current web development trends, always
          prioritizing performance, accessibility, and scalability.
        </motion.p>
      </div>
    </div>
  );
};

export default Experience;
