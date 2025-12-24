"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Card from "../cards/page";

const Projects = () => {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const cards1 = [
    {
      video1: "/projects/scrren15.mp4",
      title: "Bello Poultry Market",
      description:
        "Developed a versatile web application using Next.js to manage customers, simplifying customer interactions and data management. The platform includes multilingual support with strong translation features, allowing easy communication with a diverse customer base. Administrators can manage profiles, track interactions, and analyze data effectively, providing personalized service in different languages.",
    },
    {
      video1: "/projects/screen18.mp4",
      title: "Future Poultry Market",
      description:
        "Built a robust e-commerce web application with Next.js, featuring an intuitive dashboard for managing products, categories, users, and other essential elements of the platform. The application offers full control over all functionalities and includes a versatile store interface tailored for administrators.",
    },
  ];
  const cards2 = [
    {
      video1: "/projects/scrren13.mp4",
      title: "XpresFood Dashboard",
      description:
        "Created an admin dashboard using Next.js framework ,for managing products, categories, users and orders, providing comprehensive control over the platform's functionalities.  Designed a customer dashboard to enhance the shopping experience, enabling users to manage their accounts, track orders, and interact with the platform's features seamlessly and Implemented advanced filtering functionalities",
    },
    {
      video1: "/projects/screen16.mp4",
      title: "XpresFood Store ",
      description:
        "Developed a dynamic and user-friendly online store using the Next.js framework. The store features advanced filtering options that allow customers to easily search and sort products based on various criteria such as category, price, and size. This enhances the shopping experience by making it straightforward to find desired items. The platform also supports smooth navigation and a responsive design, ensuring accessibility and usability across all devices.",
    },
  ];

  return (
    <div
      id="projects"
      className="flex flex-col px-10 lg:px-20 text-white gap-10 lg:gap-20 py-8  items-center justify-center text-center"
    >
      <motion.p
        ref={ref1}
        initial="hidden"
        animate={inView1 ? "visible" : "hidden"}
        variants={variants}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className="font-extrabold text-4xl uppercase shadow-md"
      >
        Projects
      </motion.p>

      <div className="flex flex-col lg:flex-row gap-10 ">
        {cards2.map((card, index) => (
          <div key={index}>
            <Card
              video1={card.video1}
              title={card.title}
              description={card.description}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col lg:flex-row gap-10 ">
        {cards1.map((card, index) => (
          <div key={index}>
            <Card
              title={card.title}
              description={card.description}
              video1={card.video1}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
