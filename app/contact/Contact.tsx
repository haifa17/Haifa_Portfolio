"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeInVariants, slideInLeft, staggerContainer } from "@/lib/variants";
import { CONTACT_INFO } from "./constants";
import { ContactItem } from "./ContactItem";

const Contact = () => {
  const [formData, setFormData] = useState({
    subject: "",
    message: "",
  });

  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [descRef, descInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [formRef, formInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [contactRef, contactInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      id="contact"
      className="flex flex-col text-white gap-10 lg:gap-20 py-12 px-6 lg:px-20 bg-[#222222]"
    >
      {/* Title */}
      <motion.h2
        ref={titleRef}
        initial="hidden"
        animate={titleInView ? "visible" : "hidden"}
        variants={fadeInVariants}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className="font-extrabold text-4xl lg:text-5xl uppercase bg-gradient-to-r from-[#FF8660] to-[#D5491D] text-transparent bg-clip-text text-center"
      >
        Get In Touch
      </motion.h2>

      {/* Description */}
      <motion.p
        ref={descRef}
        initial="hidden"
        animate={descInView ? "visible" : "hidden"}
        variants={fadeInVariants}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className="text-[#E1E1E1] text-center text-lg max-w-3xl mx-auto leading-relaxed"
      >
        Frontend Developer with 2+ years of experience building
        production-ready, high-performance web applications. I'm always excited
        to discuss new opportunities, collaborate on interesting projects, or
        just connect with fellow developers.
      </motion.p>

      {/* Form and Contact Info */}
      <div className="flex flex-col gap-12 lg:flex-row lg:gap-16 justify-center items-start max-w-6xl mx-auto w-full">
        {/* Contact Form */}
        <motion.form
          ref={formRef}
          initial="hidden"
          animate={formInView ? "visible" : "hidden"}
          variants={slideInLeft}
          transition={{ ease: "easeInOut", duration: 0.5 }}
          action="https://formspree.io/f/meejwlzd"
          method="POST"
          className="flex flex-col gap-6 w-full lg:w-1/2"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="subject" className="font-semibold text-white">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Let's discuss..."
              required
              className="rounded-lg bg-transparent border border-[#FF8660]/30 py-3 px-4 text-white placeholder:text-[#E1E1E1]/40 focus:border-[#FF8660] focus:outline-none transition-colors duration-300"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="font-semibold text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project or idea..."
              required
              rows={6}
              className="rounded-lg bg-transparent border border-[#FF8660]/30 py-3 px-4 text-white placeholder:text-[#E1E1E1]/40 focus:border-[#FF8660] focus:outline-none transition-colors duration-300 resize-none"
            />
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-[#FF8660] to-[#D5491D] py-3 px-6 rounded-lg font-semibold hover:shadow-lg hover:shadow-[#FF8660]/50 transition-all duration-300 hover:scale-105"
          >
            Send Message
          </button>
        </motion.form>

        {/* Contact Information */}
        <motion.div
          ref={contactRef}
          initial="hidden"
          animate={contactInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="flex flex-col gap-4 w-full lg:w-1/2"
        >
          <h3 className="font-bold text-xl mb-2 text-white">
            Contact Information
          </h3>
          {CONTACT_INFO.map((item, index) => (
            <ContactItem key={item.label} item={item} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
