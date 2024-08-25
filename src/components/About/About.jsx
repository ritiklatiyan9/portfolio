import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const ProgressBar = ({ percentage }) => (
  <div className="relative h-2 w-full bg-gray-200 rounded-full overflow-hidden">
    <motion.div
      className="h-full bg-blue-500 rounded-full"
      initial={{ width: 0 }}
      animate={{ width: `${percentage}%` }}
      transition={{ duration: 2, ease: "easeInOut" }}
    ></motion.div>
  </div>
);

const customFontStyle = {
  fontFamily: "'Geist Regular', sans-serif",
  fontWeight: 600,
  fontStyle: "normal",
};
const AboutMe = () => {
  const skills = [
    { name: "MERN Stack Development", color: "blue", proficiency: 90 },
    { name: "Azure Cloud Services", color: "green", proficiency: 40 },
    { name: "C++", color: "yellow", proficiency: 70 },
    { name: "Networking", color: "indigo", proficiency: 85 },
  ];

  const projects = [
    {
      title: "Accurate Classes Website",
      description: "Developed a website for Accurate Classes, an online Skills Educating Company",
      url: "https://accurate-classes.netlify.app/",
    },
    {
      title: "Synapse Forge",
      description: "Developed a website for Medicozzz, an online shopping medical website",
      url: "https://synapseforge.vercel.app/",
    },
    {
      title: "Gaming Webiste",
      description: "Handled website management for Smarttutr, online service-based companies for teaching institutes",
      url: "https://ticgame.tech/",
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
        stiffness: 300,
      },
    },
  };

  return (
    <motion.div
    style={customFontStyle} 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-gray-100 min-h-screen"
    >
      <div className="container mx-auto px-4 py-12">
        {/* Introduction Section */}
        <section className="mb-16 text-center">
          <motion.h1 variants={itemVariants} className="text-5xl font-bold mb-4 text-gray-800">
            Hi there! I'm Ritik
          </motion.h1>
          <motion.p variants={itemVariants} className="text-2xl text-gray-600">
            A <span className="text-blue-800 font-semibold">MERN</span> stack developer
          </motion.p>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-8 text-gray-800">
            Skills
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white  p-6 rounded-lg shadow-2xl"
              >
                <h3 className="text-lg font-semibold mb-2 text-gray-700">{skill.name}</h3>
                <ProgressBar  percentage={skill.proficiency} />
                <span className="text-sm text-gray-600 mt-1 inline-block">{skill.proficiency}%</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-8 text-gray-800">
            Experience
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div key={index} variants={itemVariants} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-2 text-zinc-900">
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {project.title}
                  </a>
                </h3>
                <p className="text-gray-600">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Social Links */}
        <section>
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-8 text-gray-800">
            Connect with me
          </motion.h2>
          <motion.div variants={itemVariants} className="flex justify-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors"><FaLinkedin size={24} /></a>
            <a href="#" className="text-gray-600 hover:text-pink-900 transition-colors"><FaInstagram size={24} /></a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors"><FaGithub size={24} /></a>
            <a href="#" className="text-gray-600 hover:text-blue-400 transition-colors"><FaTwitter size={24} /></a>
          </motion.div>
        </section>
      </div>
    </motion.div>
  );
};

export default AboutMe;