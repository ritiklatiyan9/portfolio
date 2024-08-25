import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import preloaderImage from '../../images/profile.png'; // Add your preloader image path here

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Display preloader for 3 seconds

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
            className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full"
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
