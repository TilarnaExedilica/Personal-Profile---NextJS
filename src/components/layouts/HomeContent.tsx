'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import backgroundImage from '@/assets/images/background_1.png';
import avatarImage from '@/assets/images/ken.png';
import LeftContent from '@/components/ui/LeftContent';
import RightContent from '@/components/ui/RightContent';

export default function HomeContent() {
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
      </motion.div>

      {/* Avatar section */}
      <motion.div 
        initial={{ scale: 0, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 1.2,
          ease: [0.23, 1.64, 0.32, 1]
        }}
        whileHover={{ 
          scale: 1.1,
          rotate: [0, -10, 10, -10, 0],
          transition: { 
            duration: 0.8,
            ease: "easeInOut"
          }
        }}
        className="absolute left-[70px] top-[120px]"
      >
        <div className="absolute w-[140px] h-[140px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/30 backdrop-blur-none" />
        
        <div className="relative w-[120px] h-[120px] rounded-full overflow-hidden shadow-lg">
          <Image
            src={avatarImage}
            alt="Avatar"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* Content sections */}
      <div className="flex flex-1">
        <LeftContent />
        <RightContent />
      </div>
    </div>
  );
} 