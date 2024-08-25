import React, { useState } from 'react';
import backgroundImage from "../../assets/space.jpg";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '9760302690',
    message: '',
  });

  const handleWhatsAppMessage = () => {
    const message = `Name: ${formData.name}, Message: ${formData.message}`;
    const whatsappURL = `https://wa.me/${formData.phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Container animation variant
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

  // Item animation variant
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
        className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <motion.div className='p-4 justify-center text-center text-white' variants={containerVariants}>
          <motion.h1 className='font-bold text-4xl md:text-5xl' variants={itemVariants}>
            Get in <span className='text-green-400'>touch</span>
            <motion.span
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              .
            </motion.span>
          </motion.h1>
          <motion.p className='text-xl md:text-2xl' variants={itemVariants}>Don't be Shy</motion.p>
          <motion.p className='text-lg md:text-xl text-yellow-100' variants={itemVariants}>
            Feel Free to Connect , Let's Grow together, <br /> a good connection is worth millions.
          </motion.p>
        </motion.div>
        
      </motion.div>
    </>
  );
};

export default ContactPage;