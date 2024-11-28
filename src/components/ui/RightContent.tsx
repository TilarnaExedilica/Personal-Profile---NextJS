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
      whileHover={{ 
        scale: 1.02,
        transition: { 
          duration: 0.3,
          ease: "easeOut"
        }
      }}
      className="w-1/2 p-8 bg-[var(--right-section-bg)] text-[var(--text-secondary)] rounded-tl-[32px]"
    >
      <motion.h2 
        className="text-2xl font-bold"
      >
        Right Content
      </motion.h2>
    </motion.div>
  );
} 