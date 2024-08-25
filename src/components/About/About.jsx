import React from "react";
import { motion } from "framer-motion";
import backgroundImage from "../../assets/space.jpg";
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { FaHandPointLeft } from "react-icons/fa";

const ProgressBar = ({ percentage }) => (
  <div className="relative h-4 w-full bg-gray-800 rounded-full overflow-hidden">
    <motion.div
      className="h-full bg-blue-500 rounded-full"
      initial={{ width: 0 }}
      animate={{ width: `${percentage}%` }}
      transition={{ duration: 2, ease: "easeInOut" }}
    ></motion.div>
  </div>
);

const AboutMe = () => {
  const skills = [
    { name: "MERN Stack Development", color: "pink-900", proficiency: 90 },
    { name: "Azure Cloud Services", color: "green-900", proficiency: 40 },
    { name: "C++", color: "yellow-900", proficiency: 70 },
    { name: "Networking", color: "indigo-900", proficiency: 85 },
  ];

  const projects = [
    {
      title: "Accurate Classes Website",
      description:
        "Developed a website for Accurate Classes., a online Skills Educating Company",
      url: "https://accurate-classes.netlify.app/",
    },
    {
      title: "Medicozzz Website",
      description:
        "Developed a website for Medicozzz., online shopping medical website",
      url: "https://medicozzz.netlify.app/",
    },
    {
      title: "Smarttutr Website",
      description:
        "Handled website management for Smarttutr. , online service based comapanies for teaching institutes",
      url: "https://smarttutr.in/",
    },
  ];

  const heartbeatAnimation = {
    scale: [1, 1.1, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "loop",
    },
  };

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
        {/* Introduction Section */}
        <section className="mb-8">
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-bold mb-4 p-8 text-center text-white"
          >
            Hi there! I'm Ritik ,a{" "}
            <span className="text-green-500">M</span>
            <span className="text-pink-400">E</span>
            <span className="text-blue-400">R</span>
            <span className="text-green-400">N</span> stack developer.
          </motion.h1>
        </section>

        {/* Skills Section */}
        <section className="mb-8">
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold mb-4 text-white"
          >
            Skills
          </motion.h2>
          <div className="flex flex-wrap gap-10">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex-1 flex items-center justify-between bg-gray-900 text-white px-3 py-1 rounded-lg shadow-lg shadow-${skill.color} transition`}
                animate={heartbeatAnimation}
                style={{ minWidth: '250px' }}
              > 
                <div className="p-2 w-full">
                  <div className="p-2">
                    <span>{skill.name}</span>
                  </div>
                  <div>
                    <ProgressBar percentage={skill.proficiency} />
                    <span>{skill.proficiency}%</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-8">
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold mb-4 text-white"
          >
            Experience
          </motion.h2>
          <motion.p variants={itemVariants} className="text-white mb-4">
            Click on names , to Visit Websites
          </motion.p>
          <ul className="list-disc list-inside text-white space-y-8">
            {projects.map((project, index) => (
              <motion.li key={index} variants={itemVariants}>
                <a
                  href={project.url}
                  className="border border-green-400 p-2 rounded-xl ml-4"
                >
                  {project.title}
                </a>
                <p className="text-yellow-100 p-2 ml-8">
                  {project.description}
                </p>
              </motion.li>
            ))}
          </ul>
        </section>
      </div>
    </motion.div>
  );
};

export default AboutMe;