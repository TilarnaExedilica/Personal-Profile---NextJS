'use client';
import { motion } from 'framer-motion';

export default function LeftContent() {
  const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
  };

  const childrenVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.8, // Đợi container animation xong
        staggerChildren: 0.1 // Mỗi child cách nhau 0.1s
      }
    }
  };

  const itemVariants = {
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
        delay: 1.5,
        ease: "easeOut"
      }}
      className="w-full p-4 pt-16 md:p-8 md:pt-16 text-[var(--text-primary)] relative z-10"
    >
      <motion.div
        variants={childrenVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 variants={itemVariants} className="text-2xl font-bold">
          Left Content
        </motion.h2>
        
        <motion.div variants={itemVariants}>
          {/* Widget 1 */}
        </motion.div>

        <motion.div variants={itemVariants}>
          {/* Widget 2 */}
        </motion.div>

        <motion.div variants={itemVariants}>
          {/* Widget 3 */}
        </motion.div>
      </motion.div>
    </motion.div>
  );
} 