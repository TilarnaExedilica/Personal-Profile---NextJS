'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import backgroundImage from '@/assets/images/background_01.jpg';
import LeftContent from '@/components/ui/LeftContent';
import RightContent from '@/components/ui/RightContent';
import { FaChevronRight } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { profileConfig } from '@/config/config';

interface SocialIcon {
  paths: string[];
  size: number;
}

interface SocialLink {
  platform: string;
  url: string;
  icon: SocialIcon;
}

export default function HomeContent() {
  const [showRightContent, setShowRightContent] = useState(false);
  const [bannerHeight, setBannerHeight] = useState("145px");
  const [currentGameIndex, setCurrentGameIndex] = useState(0);
  const [showGameCode, setShowGameCode] = useState(false);

  useEffect(() => {
    setBannerHeight(window.innerWidth >= 640 ? "200px" : "145px");

    const handleResize = () => {
      setBannerHeight(window.innerWidth >= 640 ? "200px" : "145px");
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGameIndex((prevIndex) => 
        prevIndex === (profileConfig.plays?.length || 1) - 1 ? 0 : prevIndex + 1
      );
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Banner section */}
      <motion.div 
        initial={{ height: "100vh", opacity: 0 }}
        animate={{
          height: [
            "100vh",
            bannerHeight
          ],
          opacity: [0, 1]
        }}
        transition={{ 
          duration: 1.5,
          ease: "easeInOut",
          times: [0, 1]
        }}
        style={{ height: bannerHeight }} 
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
            src={profileConfig.banner_url || backgroundImage}
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

        <div className="absolute top-[40px] w-full flex items-center">
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
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                delay: 2.1,
                ease: [0.43, 0.13, 0.23, 0.96]
              }}
              className="flex items-center gap-2 text-[var(--icon-color)]"
            >
              <motion.a
                href="https://github.com/TilarnaExedilica/Personal-Profile---NextJS"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2 }}
                className="text-sm text-[var(--icon-color)] hover:text-[var(--icon-hover-color)] transition-colors"
              >
                Open Source
              </motion.a>
            </motion.div>

            {profileConfig.socialLinks && profileConfig.socialLinks.length > 0 && (
              profileConfig.socialLinks.map((social: SocialLink, index: number) => (
                <motion.a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: 2.2 + (index * 0.1),
                    ease: [0.43, 0.13, 0.23, 0.96]
                  }}
                  whileHover={{ scale: 1.2 }}
                  className="text-[var(--icon-color)] hover:text-[var(--icon-hover-color)] transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={social.icon.size}
                    height={social.icon.size}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    {social.icon.paths.map((path: string, i: number) => (
                      <path key={i} d={path} />
                    ))}
                  </svg>
                </motion.a>
              ))
            )}
          </div>

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

        {/* Game Widget */}
        {profileConfig.plays && profileConfig.plays.length > 0 && (
          <div className="absolute -bottom-[2px] right-0 flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5 }}
              className="w-[250px] h-[80px] overflow-hidden hidden sm:block rounded-l-lg relative"
              onHoverStart={() => setShowGameCode(true)}
              onHoverEnd={() => setShowGameCode(false)}
            >
              <AnimatePresence>
                <motion.div
                  key={currentGameIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ 
                    duration: 0.3,
                  }}
                  className="absolute w-full h-full"
                >
                  <Image
                    src={profileConfig.plays[currentGameIndex].img_url}
                    alt={profileConfig.plays[currentGameIndex].game}
                    fill
                    className="object-cover"
                  />
                  
                  {/* Game Code Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: showGameCode ? 1 : 0 }}
                    className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 text-white"
                  >
                    <div className="text-sm font-medium">
                      {profileConfig.plays[currentGameIndex].game}
                    </div>
                    <div className="text-xs mt-1">
                      ID: {profileConfig.plays[currentGameIndex].code}
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
            
            {/* Vertical Text with blur background */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.7 }}
              className="hidden sm:flex items-center justify-center bg-black/60 backdrop-blur-[8px] px-2 py-2 rounded-tl-lg"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 2.9
                }}
                className="-rotate-180 text-[10px] tracking-wider text-white font-medium"
                style={{ writingMode: 'vertical-rl' }}
              >
                PLAY WITH ME
              </motion.div>
            </motion.div>
          </div>
        )}

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
        className="absolute left-[30px] sm:left-[70px] top-[90px] sm:top-[120px] flex items-center z-50"
      >
        <div className="relative">
          <div className="absolute w-[80px] h-[80px] sm:w-[140px] sm:h-[140px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--avatar-backdrop)] backdrop-blur-none" />
          
          <div className="relative w-[70px] h-[70px] sm:w-[120px] sm:h-[120px] rounded-full overflow-hidden shadow-lg">
            <Image
              src={profileConfig.avatar_url}
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
      <div className="flex flex-1 relative overflow-y-auto h-full">
        <motion.div 
          animate={{ 
            width: showRightContent ? '0%' : '100%',
            opacity: showRightContent ? 0 : 1
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut"
          }}
          className={`h-full overflow-y-auto md:!w-1/2 md:!opacity-100 ${showRightContent ? 'hidden md:block' : ''}`}
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
          className={`flex-1 overflow-y-auto md:!w-1/2 md:!opacity-100 ${!showRightContent ? 'hidden md:block' : ''}`}
        >
          <RightContent />
        </motion.div>
      </div>
    </div>
  );
} 