import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import preloaderImage from '../../images/profile.png'; // Add your preloader image path here

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Display preloader for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    isLoading && (
      <div className="preloader fixed top-0 left-0 w-full h-full bg-zinc-950 flex items-center justify-center z-50">
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <motion.img
            src={preloaderImage}
            alt="Loading..."
            className="w-64 h-64"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    )
  );
};

export default Preloader;
