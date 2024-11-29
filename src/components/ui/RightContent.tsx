'use client';
import { motion } from 'framer-motion';

export default function RightContent() {
  const containerVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ 
        duration: 0.8,
        delay: 1.7,
        ease: "easeOut"
      }}
      className="h-[calc(100vh-200px)] w-full p-4 pt-16 md:p-8 bg-[var(--right-section-bg)] text-[var(--text-secondary)] md:rounded-tl-[32px] md:hover:scale-[1.02] relative z-10"
    >
      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 0.5,
          delay: 2.5
        }}
      >
        <h2 className="text-2xl font-bold">
          Right Content
        </h2>
      </motion.div>
    </motion.div>
  );
} 