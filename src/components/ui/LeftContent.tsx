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
        delayChildren: 0.8, 
        staggerChildren: 0.1 
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
      className="w-full p-4 pt-16 md:p-8 md:pt-16 pl-8 md:pl-12 lg:pl-16 text-[var(--text-primary)] relative z-10"
    >
      <motion.div
        variants={childrenVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 variants={itemVariants} className="text-3xl font-bold">
          Tilarna
        </motion.h2>
        
        <div className="flex flex-wrap items-center gap-2 mt-1">
          <motion.p variants={itemVariants} className="text-base font-normal text-[var(--text-primary)] opacity-80">
            @tilarnaexedilica
          </motion.p>
          
          <motion.button 
            variants={itemVariants}
            className="flex items-center gap-2 px-3 py-1 rounded-md bg-[var(--status-button-color)] bg-opacity-20 border border-[var(--status-button-border-color)] border-opacity-30 hover:bg-opacity-30 transition-colors"
          >
            <span className="text-sm text-[var(--text-secondary)] whitespace-nowrap">Full-time</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14" 
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[var(--text-secondary)]"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </motion.button>

          <motion.button 
            variants={itemVariants}
            className="flex items-center gap-2 px-3 py-1 rounded-md bg-[var(--role-button-color)] bg-opacity-20 border border-[var(--role-button-border-color)] border-opacity-30 hover:bg-opacity-30 transition-colors"
          >
            <span className="text-sm text-[var(--text-secondary)] whitespace-nowrap">Frontend Engineer</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[var(--text-secondary)]"
            >
              <path d="M18 8L22 12L18 16" />
              <path d="M6 8L2 12L6 16" />
              <path d="M14.5 4L9.5 20" />
            </svg>
          </motion.button>
        </div>
        
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