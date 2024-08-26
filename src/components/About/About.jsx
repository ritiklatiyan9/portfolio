import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter, FaCloud, FaReact, FaNodeJs, FaDatabase, FaServer, FaMobileAlt, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiCplusplus, SiJavascript, SiTypescript, SiPython, SiDocker, SiKubernetes, SiTailwindcss } from "react-icons/si";
import img2 from '../../images/img2.jpg'
const customFontStyle = {
  fontFamily: "'Geist Regular', sans-serif",
  fontWeight: 600,
  fontStyle: "normal",
};

const ParallaxSection = ({ children, offset = 50 }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  );
};

const SkillIcon = ({ Icon, name, color }) => (
  <motion.div 
    className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg"
    whileHover={{ scale: 1.05, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Icon size={48} color={color} />
    <span className="mt-2 text-sm font-medium">{name}</span>
  </motion.div>
);

const AboutMe = () => {
  const skills = [
    { Icon: FaReact, name: "React", color: "#61DAFB" },
    { Icon: FaNodeJs, name: "Node.js", color: "#339933" },
    { Icon: SiMongodb, name: "MongoDB", color: "#47A248" },
    { Icon: SiExpress, name: "Express", color: "#000000" },
    { Icon: FaCloud, name: "Azure", color: "#0089D6" },
    { Icon: SiCplusplus, name: "C++", color: "#00599C" },
    { Icon: FaMobileAlt, name: "React Native", color: "#61DAFB" },
    { Icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
    { Icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
    { Icon: SiPython, name: "Python", color: "#3776AB" },
    { Icon: SiDocker, name: "Docker", color: "#2496ED" },
    { Icon: SiKubernetes, name: "Kubernetes", color: "#326CE5" },
    { Icon: FaHtml5, name: "HTML", color: "#E34F26" },
    { Icon: FaCss3Alt, name: "CSS", color: "#1572B6" },
    { Icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
    { Icon: FaGithub, name: "GitHub", color: "#181717" },
    { Icon: FaGitAlt, name: "Git", color: "#F05032" },
    { Icon: FaDatabase, name: "Data Structures", color: "#FF6B6B" },
  ];

  const socialLinks = [
    { Icon: FaLinkedin, href: "#", color: "#0077B5" },
    { Icon: FaGithub, href: "#", color: "#181717" },
    { Icon: FaTwitter, href: "#", color: "#1DA1F2" },
    { Icon: FaInstagram, href: "#", color: "#E4405F" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      document.body.style.setProperty('--scroll', scrollPosition / (document.body.offsetHeight - window.innerHeight));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      style={customFontStyle}
      className="bg-white text-gray-800 min-h-screen font-sans"
    >
      <main className="pt-20">
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <ParallaxSection offset={100}>
            <motion.h1 
              className="text-8xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Hey There!
            </motion.h1>
            <ParallaxSection offset={50}>
            <div className="container mx-auto px-6 border-b-2 border-zinc-900 p-4 mb-20">
              
              <p className="text-2xl leading-relaxed max-w-3xl mx-auto text-center ">
                I'm a passionate full-stack developer with expertise in MERN stack and React Native. 
                My journey in tech is driven by curiosity and a desire to create impactful solutions. 
                When I'm not coding, you can find me exploring new technologies or contributing to open-source projects.
              </p>

              <img className="w-96 ml-8 rounded-2xl shadow-2xl md:ml-48" src={img2} alt="" />
            </div>
           
          </ParallaxSection>
          </ParallaxSection>
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </section>
        
        <section id="skills" className="min-h-screen flex items-center justify-center py-20 bg-gray-200">
          <ParallaxSection offset={50}>
            <div className="container mx-auto px-6">
              <h2 className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                {skills.map((skill, index) => (
                  <SkillIcon key={index} {...skill} />
                ))}
              </div>
            </div>
          </ParallaxSection>
        </section>

       


        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
          <ParallaxSection offset={50}>
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Let's Connect</h2>
              <div className="flex justify-center space-x-8">
                {socialLinks.map(({ Icon, href, color }, index) => (
                  <motion.a 
                    key={index} 
                    href={href} 
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="transition-colors"
                  >
                    <Icon size={32} color={color} />
                  </motion.a>
                ))}
              </div>
            </div>
          </ParallaxSection>
        </section>
      </main>
    </div>
  );
};

export default AboutMe;
