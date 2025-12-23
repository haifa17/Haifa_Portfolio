"use client";
import { Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
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
      id="contact"
      className="flex flex-col text-white gap-10 lg:gap-20 py-5 px-10 lg:px-20 overflow-hidden  bg-[#222222]"
    >
      <motion.p
        ref={ref1}
        initial="hidden"
        animate={inView1 ? "visible" : "hidden"}
        variants={variants}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className="font-extrabold text-4xl uppercase bg-gradient-to-r from-[#FF8660] to-[#D5491D] inline-block text-transparent bg-clip-text text-center"
      >
        Contact
      </motion.p>
      <motion.p
        ref={ref2}
        initial="hidden"
        animate={inView2 ? "visible" : "hidden"}
        variants={variants}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className="text-[#E1E1E1] text-center "
      >
        Junior Software Engineer with 1 year of hands-on experience in designing
        and implementing robust, scalable, and innovative web solutions. <br />{" "}
        Adept at leveraging a comprehensive skill set encompassing front-end
        technologies . Excited for new opportunities and eager to improve my
        skills.
      </motion.p>
      <div className="flex flex-col gap-8 lg:flex-row lg:justify-between  lg:px-40 ">
        <form>
          <motion.div
            ref={ref3}
            initial="hidden"
            animate={inView3 ? "visible" : "hidden"}
            variants={variants2}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col gap-2">
              <p>Subject</p>
              <input
                placeholder="let's talk"
                type="text"
                className="rounded-md bg-transparent border py-2 lg:w-[500px] text-white placeholder:px-4  "
              />
            </div>
            <div className="flex flex-col gap-2">
              <p>Description</p>
              <input
                type="text"
                className="rounded-md bg-transparent border  lg:w-[500px] h-[200px] text-white "
              />
            </div>
            <button className="bg-gradient-to-r from-[#FF8660] to-[#D5491D] py-2 rounded-md  ">
              Submit
            </button>
          </motion.div>
        </form>
        <motion.div
          ref={ref4}
          initial="hidden"
          animate={inView4 ? "visible" : "hidden"}
          variants={variants3}
          transition={{ ease: "easeInOut", duration: 0.5 }}
          className="flex flex-col  gap-3 "
        >
          <div className="flex items-center gap-2 cursor-pointer text-[#E1E1E1] hover:text-[#D5491D]  ">
            <Mail size={18} className="" />
            <p className=" text-start  font-bold ">haifa.khiari@outlook.com</p>
          </div>
          <div className="flex items-center gap-2 cursor-pointer text-[#E1E1E1] hover:text-[#D5491D]   ">
            <Phone size={18} />
            <p className=" text-start font-bold">+216 55182078</p>
          </div>
          <Link
            href="https://www.linkedin.com/in/haifa-khiari-18a874177/"
            className="flex items-center gap-2 cursor-pointer text-[#E1E1E1] hover:text-[#D5491D]   "
          >
            <Linkedin size={18} className="" />
            <p className=" text-start  font-bold underline  ">Haifa Khiari </p>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
