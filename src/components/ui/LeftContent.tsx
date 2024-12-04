'use client';
import { motion } from 'framer-motion';
import { profileConfig } from '@/config/info';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';

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
      className="w-full h-full overflow-y-auto scrollbar-hide p-4 pt-16 md:p-8 md:pt-16 pl-8 md:pl-12 lg:pl-16 text-[var(--text-primary)] relative z-10"
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

        <div className="flex flex-wrap items-center gap-2 mt-2">
          {profileConfig.contactInfo.map((contact, index) => (
            <motion.a 
              key={index}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="inline-flex items-center gap-1 text-[var(--text-primary)] opacity-80 hover:opacity-100 group relative"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3, type: "spring", stiffness: 300 }
              }}
            >
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={contact.icon.size}
                  height={contact.icon.size}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-all duration-300 group-hover:rotate-[360deg] transform group-hover:scale-110 relative z-10`}
                  style={{
                    color: contact.colors.icon,
                    '--hover-color': contact.colors.hover
                  } as React.CSSProperties}
                >
                  {contact.icon.paths.map((path, i) => (
                    <path key={i} d={path} />
                  ))}
                </svg>
                <span className="absolute inset-0 rounded-full blur-md scale-0 group-hover:scale-150 transition-transform duration-500"
                  style={{ backgroundColor: `${contact.colors.icon}33` }} />
              </div>
              <span className="relative overflow-hidden group-hover:tracking-wider transition-all duration-300">
                {contact.value}
                <span className="absolute left-0 bottom-0 w-full h-[2px] transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                  style={{ background: `linear-gradient(to right, ${contact.colors.icon}, ${contact.colors.hover})` }}/>
                <span className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 -z-10"
                  style={{ background: `linear-gradient(to right, ${contact.colors.icon}1a, ${contact.colors.hover}1a)` }}/>
                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:translate-x-full transition-transform duration-1000 skew-x-12"/>
              </span>
              <span className="absolute -inset-x-4 -inset-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl rounded-lg -z-10"
                style={{ background: `linear-gradient(to right, ${contact.colors.icon}00, ${contact.colors.hover}0d)` }}/>
            </motion.a>
          ))}
        </div>

        {profileConfig.introduction.map((intro, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            className={`mt-8 pl-4 border-l-2 border-[var(--text-primary)] border-opacity-20`}
          >
            <h1 className="text-base md:text-lg font-medium text-[var(--text-primary)]">
              {intro.title}
            </h1>
            <div className="text-sm md:text-base text-[var(--text-primary)] opacity-80 leading-relaxed prose prose-invert">
              <ReactMarkdown
                components={{
                  p: ({ children }) => (
                    <div className="flex flex-row flex-wrap gap-1 items-center">
                      {children}
                    </div>
                  ),
                  img: ({ src, alt }) => (
                    <Image 
                      src={src || ''}
                      alt={alt || ''}
                      width={100}
                      height={24}
                      className="inline-block h-6 !my-0 !align-middle"
                      unoptimized
                      style={{ height: '1.5rem', width: 'auto' }}
                    />
                  )
                }}
              >
                {intro.description}
              </ReactMarkdown>
            </div>
          </motion.div>
        ))}

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