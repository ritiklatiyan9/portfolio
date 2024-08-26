import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import techy from '../././../../images/techy-removebg.png';

function Home2() {
  const controls = useAnimation();
  const textControls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        width: ['100%', '50%'],
        transition: { duration: 0.8, ease: 'easeInOut' },
      });
      textControls.start({
        opacity: 1,
        x: 0,
        width: '50%',
        transition: { duration: 0.8, ease: 'easeInOut', delay: 0.4 },
      });
    } else {
      controls.start({
        width: '100%',
        transition: { duration: 0.8, ease: 'easeInOut' },
      });
      textControls.start({
        opacity: 0,
        x: 50,
        width: '0%',
        transition: { duration: 0.8, ease: 'easeInOut' },
      });
    }
  }, [inView, controls, textControls]);

  return (
    <div className="relative flex flex-col md:flex-row items-center  md:p-8 lg:p-20 overflow-hidden space-y-6 md:space-y-0">
      <motion.div
        animate={controls}
        className="flex-shrink-0 rounded overflow-hidden w-full md:w-1/2"
      >
        <img
          className="w-full ml-4 h-auto object-cover"
          src={techy}
          alt="Techy"
        />
      </motion.div>

      <motion.div
        ref={ref}
        animate={textControls}
        className="w-full md:w-1/2 flex flex-col p-2 text-center md:text-left md:p-8"
      >
        <span className="text-3xl md:text-4xl lg:text-5xl flex justify-center font-bold border-b-2 border-zinc-800 px-2 py-4 rounded-2xl text-zinc-900">
          LATEST TECH.
        </span>
        <h2 className="text-base md:text-lg lg:text-xl p-2 font-semibold leading-tight mt-2 text-zinc-700">
          Blockchain technology is expanding beyond cryptocurrencies, finding applications in secure digital transactions and supply chain management. Additionally, sustainable tech, including green energy innovations and electric vehicles, is gaining momentum as the world focuses on environmental responsibility.
        </h2>
      </motion.div>
    </div>
  );
}

export default Home2;
