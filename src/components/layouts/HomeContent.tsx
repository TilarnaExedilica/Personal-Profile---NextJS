'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import backgroundImage from '@/assets/images/background_1.png';
import avatarImage from '@/assets/images/ken.png';

export default function HomeContent() {
  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Banner section */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          duration: 1.8,
          ease: "easeOut"
        }}
        className="relative w-full h-[200px] overflow-hidden"
      >
        <Image
          src={backgroundImage}
          alt="Banner background"
          fill
          className="object-cover"
          priority
        />
        <motion.div 
          initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
          animate={{ opacity: 0.25, backdropFilter: "blur(4px)" }}
          transition={{ 
            duration: 2,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-black/40 backdrop-blur-sm" 
        />
      </motion.div>

      {/* Avatar section */}
      <motion.div 
        initial={{ scale: 0, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          delay: 0.4
        }}
        whileHover={{ 
          scale: 1.05,
          rotate: [0, -3, 3, 0],
          transition: { 
            duration: 0.3,
            ease: "easeInOut"
          }
        }}
        className="absolute left-[70px] top-[120px] w-[120px] h-[120px]"
      >
        <div className="relative w-full h-full rounded-full overflow-hidden shadow-lg">
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
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0.6
          }}
          className="w-1/2 p-8 pt-16 text-black"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 15,
              delay: 0.9
            }}
            className="text-2xl font-bold"
          >
            Left Content
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 20,
            delay: 0.7
          }}
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.3, ease: "easeOut" }
          }}
          className="w-1/2 p-8 bg-black text-white rounded-tl-[32px]"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 15,
              delay: 1
            }}
            className="text-2xl font-bold"
          >
            Right Content
          </motion.h2>
        </motion.div>
      </div>
    </div>
  );
} 