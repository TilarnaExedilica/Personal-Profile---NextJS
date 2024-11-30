'use client';
import { motion } from 'framer-motion';
import { profileConfig } from '@/config/info';

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
          {profileConfig.name}
        </motion.h2>
        
        <div className="flex flex-wrap items-center gap-2 mt-1">
          <motion.p variants={itemVariants} className="text-base font-normal text-[var(--text-primary)] opacity-80">
            {profileConfig.codename}
          </motion.p>
          
          {profileConfig.jobTags.map((tag, index) => (
            <motion.button 
              key={index}
              variants={itemVariants}
              style={{
                backgroundColor: tag.colors.background,
                borderColor: tag.borders.color,
              }}
              className="flex items-center gap-2 px-3 py-1 rounded-md border hover:bg-opacity-30 transition-colors"
            >
              <span style={{ color: tag.colors.text }} className="text-sm whitespace-nowrap">
                {tag.title}
              </span>
              {tag.icon && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={tag.icon.size}
                  height={tag.icon.size}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={tag.colors.text}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {tag.icon.path && <path d={tag.icon.path} />}
                  {tag.icon.paths?.map((path, i) => (
                    <path key={i} d={path} />
                  ))}
                </svg>
              )}
            </motion.button>
          ))}
        </div>

        <motion.a 
          href={profileConfig.location.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          variants={itemVariants}
          className="inline-flex items-center gap-1 mt-2 text-[var(--text-primary)] opacity-80 hover:opacity-100 group relative"
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
        >
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={profileConfig.location.icon.size}
              height={profileConfig.location.icon.size}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:text-blue-500 transition-all duration-300 group-hover:rotate-[12deg] transform group-hover:scale-110 relative z-10"
            >
              {profileConfig.location.icon.paths.map((path, i) => (
                <path key={i} d={path} />
              ))}
            </svg>
            <span className="absolute inset-0 bg-blue-500/20 rounded-full blur-md scale-0 group-hover:scale-100 transition-transform duration-300" />
          </div>
          <span className="relative overflow-hidden group-hover:tracking-wide transition-all duration-300">
            {profileConfig.location.address}
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"/>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 -z-10"/>
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:translate-x-full transition-transform duration-1000 skew-x-12"/>
          </span>
          <span className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-blue-500/0 via-purple-500/5 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl rounded-lg -z-10"/>
        </motion.a>

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