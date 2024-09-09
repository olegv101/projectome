import React from 'react';
import { motion } from 'framer-motion';
import { BiSolidMagicWand } from "react-icons/bi";


const LoadingAnimation = ({ isLoading }: { isLoading: boolean }) => {
  const pillars = [0, 1, 2, 3, 4];

  const variants = {
    visible: { y: 0 },
    hidden: { y: '100%' },
  };

  return (
    <motion.div
      className={`fixed inset-0 z-50 flex ${
        isLoading ? '' : 'pointer-events-none'
      }`}
      initial="visible"
      animate={isLoading ? 'visible' : 'hidden'}
    >
      {pillars.map((index) => (
        <motion.div
          key={index}
          className="flex-1 bg-white border-x border-black/10"
          variants={variants}
          initial="visible"
          animate={isLoading ? 'visible' : 'hidden'}
          transition={{
            duration: 0.8,
            delay: index * 0.1,
            ease: [0.43, 0.23, 0.23, 0.96], // Bezier curve for ease-in-out
          }}
        />
      ))}
      <motion.div
        className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-gray-800"
        initial={{ opacity: 1 }}
        animate={{ opacity: isLoading ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        Magic loading
        <BiSolidMagicWand className="pl-2 text-3xl animate-bounce" />
      </motion.div>
    </motion.div>
  );
};

export default LoadingAnimation;