'use client';
import { motion } from 'framer-motion';

export default function LeftContent() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ 
        duration: 0.8,
        delay: 1.5,
        ease: "easeOut"
      }}
      className="w-1/2 p-8 pt-16 text-[var(--text-primary)]"
    >
      <h2 className="text-2xl font-bold">
        Left Content
      </h2>
    </motion.div>
  );
} 