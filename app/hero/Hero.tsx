"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Download, Mail } from "lucide-react";
import { SOCIAL_LINKS } from "./constants";
import { fadeInVariants, scaleInVariants } from "@/lib/variants";
import StatusBadge from "@/components/badge/StatusBadge";
import Link from "next/link";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";

const Hero = () => {
  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div
      id="home"
      className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16  px-6 lg:px-20 items-center text-white min-h-[calc(100vh-80px)]"
    >
      <motion.div
        ref={imageRef}
        initial="hidden"
        animate={imageInView ? "visible" : "hidden"}
        variants={scaleInVariants}
        transition={{ ease: "easeInOut", duration: 0.7 }}
        className="relative flex items-center justify-center"
      >
        <div className="relative w-full max-w-[25rem] aspect-[3/4]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#9A33FF]/20 to-[#FF8660]/20 rounded-3xl blur-2xl" />
          <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-[#9A33FF]/40 shadow-2xl shadow-[#9A33FF]/10">
            <Image
              src="/haifa.jpg"
              alt="Haifa Khiari - Frontend Developer"
              fill
              className="object-cover"
              priority
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute -bottom-4 left-[30%] transform translate-x-1/2 bg-gradient-to-r from-[#9A33FF] to-[#FF8660] px-6 py-3 rounded-full shadow-lg"
          >
            <p className="text-white font-bold text-sm lg:text-base whitespace-nowrap">
              2+ Years Experience
            </p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        ref={contentRef}
        initial="hidden"
        animate={contentInView ? "visible" : "hidden"}
        className="flex flex-col gap-6 text-center lg:text-left"
      >
        <motion.div
          variants={fadeInVariants}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 0.1 }}
        >
          <p className="text-lg lg:text-xl text-[#E1E1E1] font-medium mb-2">
            Hi there! 👋
          </p>
          <h1 className="text-3xl lg:text-5xl font-extrabold">
            I'm{" "}
            <span className="bg-gradient-to-r from-[#9A33FF] to-[#FF8660] text-transparent bg-clip-text">
              Haifa Khiari
            </span>
          </h1>
        </motion.div>
        <motion.h2
          variants={fadeInVariants}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }}
          className="text-2xl lg:text-4xl font-bold"
        >
          Frontend Developer
          <br />
          <span className="text-xl lg:text-3xl bg-gradient-to-r from-[#5BADFF] to-[#1373D1] text-transparent bg-clip-text">
            React.js & Next.js Specialist
          </span>
        </motion.h2>
        <motion.p
          variants={fadeInVariants}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 0.3 }}
          className="text-base lg:text-lg text-[#E1E1E1] leading-relaxed"
        >
          I specialize in building{" "}
          <span className="font-semibold text-white">high-performance</span>,{" "}
          <span className="font-semibold text-white">
            scalable web applications
          </span>{" "}
          with a focus on exceptional user experiences. From e-commerce
          platforms to interactive dashboards, I bring ideas to life with clean
          code and modern technologies.
        </motion.p>

        <motion.div
          variants={fadeInVariants}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap gap-3 text-white justify-center lg:justify-start"
        >
          {["React.js", "Next.js", "TypeScript", "Tailwind CSS"].map(
            (skill, index) => (
              <StatusBadge content={skill} />
            )
          )}
        </motion.div>

        <motion.div
          variants={fadeInVariants}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 "
        >
          <SecondaryButton
            href="#contact"
            title={
              <>
                <Mail size={18} />
                Get In Touch
              </>
            }
          />
          <PrimaryButton
            download
            href="/file/Haifa_Khiari_frontend_developer.pdf"
            title={
              <>
                <Download size={18} />
                Download CV
              </>
            }
          />
        </motion.div>

        <motion.div
          variants={fadeInVariants}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 0.6 }}
          className="flex gap-4 justify-center lg:justify-start "
        >
          {SOCIAL_LINKS.map((social) => {
            const Icon = social.icon;
            return (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                // Protected against security risks
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-3 rounded-full border border-[#9A33FF]/40 hover:bg-gradient-to-r hover:from-[#9A33FF] hover:to-[#FF8660] hover:border-transparent transition-all duration-300 hover:scale-110"
              >
                <Icon size={20} />
              </Link>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
