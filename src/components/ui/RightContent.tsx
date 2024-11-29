'use client';
import { motion } from 'framer-motion';

export default function RightContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ 
        duration: 0.8,
        delay: 1.7,
        ease: "easeOut"
      }}
      className="h-[calc(100vh-200px)] w-full p-4 pt-16 md:p-8 bg-[var(--right-section-bg)] text-[var(--text-secondary)] md:rounded-tl-[32px] md:hover:scale-[1.02]"
    >
      <motion.h2 
        className="text-2xl font-bold"
      >
        Right Content
      </motion.h2>
    </motion.div>
  );
} 