'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import backgroundImage from '@/assets/images/background_1.png';
import avatarImage from '@/assets/images/ken.png';

export default function HomeContent() {
  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Banner section - thêm hiệu ứng scale và blur */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative w-full h-[200px]"
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
          animate={{ opacity: 0.2, backdropFilter: "blur(3px)" }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-black" 
        />
      </motion.div>

      {/* Avatar - Thêm hiệu ứng xoay và bounce */}
      <motion.div 
        initial={{ scale: 0, opacity: 0, rotate: -180 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
        whileHover={{ scale: 1.1, rotate: 5 }}
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
        {/* Left section - Thêm hiệu ứng stagger và slide */}
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ 
            duration: 0.8,
            delay: 0.5,
            type: "spring",
            stiffness: 100
          }}
          whileHover={{ x: 10 }}
          className="w-1/2 p-8 pt-16 text-black"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.8,
              type: "spring"
            }}
            className="text-2xl font-bold"
          >
            Left Content
          </motion.h2>
        </motion.div>

        {/* Right section - Thêm hiệu ứng fade và scale */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.8,
            delay: 0.7,
            type: "spring",
            stiffness: 100
          }}
          whileHover={{ scale: 1.02 }}
          className="w-1/2 p-8 bg-black text-white"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 1,
              type: "spring"
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