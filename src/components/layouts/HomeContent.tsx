'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import backgroundImage from '@/assets/images/background_01.jpg';
import avatarImage from '@/assets/images/ken.png';
import LeftContent from '@/components/ui/LeftContent';
import RightContent from '@/components/ui/RightContent';
import { FaGithub, FaLinkedin, FaTwitter, FaChevronRight } from 'react-icons/fa';
import { useState } from 'react';

export default function HomeContent() {
  const [showRightContent, setShowRightContent] = useState(false);

  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Banner section */}
      <motion.div 
        initial={{ height: "100vh", opacity: 0 }}
        animate={{ 
          height: "200px",
          opacity: 1
        }}
        transition={{ 
          duration: 1.5,
          ease: "easeInOut",
        }}
        className="relative w-full overflow-hidden"
      >
        <motion.div
          initial={{ scale: 1.5 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 2,
            ease: "easeOut"
          }}
          className="relative w-full h-full"
        >
          <Image
            src={backgroundImage}
            alt="Banner background"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ 
            duration: 1,
            delay: 1
          }}
          className="absolute inset-0 bg-[var(--banner-overlay)] backdrop-blur-[8px]" 
        />

        {/* Container cho line và icons */}
        <div className="absolute top-[40px] w-full flex items-center">
          {/* Line trái */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 1.2,
              delay: 1.5,
              ease: [0.43, 0.13, 0.23, 0.96]
            }}
            className="h-[1px] bg-[var(--line-color)] flex-1 origin-right"
          />

          {/* Icons */}
          <div className="px-8 flex items-center gap-4">
            <motion.a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                delay: 2.2,
                ease: [0.43, 0.13, 0.23, 0.96]
              }}
              whileHover={{ scale: 1.2 }}
              className="text-[var(--icon-color)] hover:text-[var(--icon-hover-color)] transition-colors"
            >
              <FaGithub size={18} />
            </motion.a>
            <motion.a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                delay: 2.3,
                ease: [0.43, 0.13, 0.23, 0.96]
              }}
              whileHover={{ scale: 1.2 }}
              className="text-[var(--icon-color)] hover:text-[var(--icon-hover-color)] transition-colors"
            >
              <FaLinkedin size={18} />
            </motion.a>
            <motion.a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                delay: 2.4,
                ease: [0.43, 0.13, 0.23, 0.96]
              }}
              whileHover={{ scale: 1.2 }}
              className="text-[var(--icon-color)] hover:text-[var(--icon-hover-color)] transition-colors"
            >
              <FaTwitter size={18} />
            </motion.a>
          </div>

          {/* Line phải */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 1.2,
              delay: 1.5,
              ease: [0.43, 0.13, 0.23, 0.96]
            }}
            className="h-[1px] bg-[var(--line-color)] w-[30px] origin-left"
          />
        </div>
      </motion.div>

      {/* Avatar section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 1.8,
          ease: [0.43, 0.13, 0.23, 0.96]
        }}
        className="absolute left-[70px] top-[120px] flex items-center z-50"
      >
        <div className="relative">
          <div className="absolute w-[140px] h-[140px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--avatar-backdrop)] backdrop-blur-none" />
          
          <div className="relative w-[120px] h-[120px] rounded-full overflow-hidden shadow-lg">
            <Image
              src={avatarImage}
              alt="Avatar"
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        {/* Toggle button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowRightContent(!showRightContent)}
          className="ml-4 p-2 rounded-full bg-[var(--icon-color)] hover:bg-[var(--icon-hover-color)] transition-colors md:hidden"
        >
          <motion.div
            initial={false}
            animate={{ rotate: showRightContent ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <FaChevronRight size={16} />
          </motion.div>
        </motion.button>
      </motion.div>

      {/* Content sections */}
      <div className="flex flex-1 h-[calc(100vh-200px)] relative overflow-hidden">
        <motion.div 
          animate={{ 
            width: showRightContent ? '0%' : '100%',
            opacity: showRightContent ? 0 : 1
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut"
          }}
          className={`h-[calc(100vh-200px)] md:!w-1/2 md:!opacity-100 ${showRightContent ? 'hidden md:block' : ''}`}
        >
          <LeftContent />
        </motion.div>
        <motion.div 
          animate={{ 
            width: !showRightContent ? '0%' : '100%',
            opacity: !showRightContent ? 0 : 1
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut"
          }}
          className={`h-[calc(100vh-200px)] md:!w-1/2 md:!opacity-100 ${!showRightContent ? 'hidden md:block' : ''}`}
        >
          <RightContent />
        </motion.div>
      </div>
    </div>
  );
} 

