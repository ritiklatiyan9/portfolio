import React from "react";
import { motion } from "framer-motion";
import backgroundImage from "../../assets/space.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Accurate Classes Website",
      description: "Developed a website for Accurate Classes, an online Skills Educating Company.",
      url: "https://accurate-classes.netlify.app/",
    },
    {
      title: "Medicozzz Website",
      description: "Developed a website for Medicozzz, an online shopping medical website.",
      url: "https://medicozzz.netlify.app/",
    },
    {
      title: "Smarttutr Website",
      description: "Handle website Management for Smarttutr, an online service-based company for teaching institutes.",
      url: "https://smarttutr.in/",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container mx-auto px-4 py-6"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
      >
        <div className="container mx-auto px-4 py-6">
          <motion.h1 variants={itemVariants} className="text-3xl font-bold mb-8 text-white">
            Some Modern <span className="text-green-400">Projects !</span>
          </motion.h1>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={containerVariants}>
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-900 rounded-xl p-6 transition ease-in-out shadow-sm hover:scale-105 shadow-green-500"
              >
                <h2 className="text-xl font-bold mb-2 text-white">{project.title}</h2>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.url}
                  className="text-blue-400 hover:text-blue-300 transition duration-300 ease-in-out"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Projects;
