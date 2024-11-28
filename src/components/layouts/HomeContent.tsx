'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import backgroundImage from '@/assets/images/background_1.png';
import avatarImage from '@/assets/images/ken.png';

export default function HomeContent() {
  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Banner section */}
      <div className="relative w-full h-[200px]">
        <Image
         src={backgroundImage}
          alt="Banner background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-10" />
      </div>
      
      {/* Avatar */}
      <motion.div 
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
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
        {/* Left section */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="w-1/2 p-8 pt-16 text-black"
        >
          <h2 className="text-2xl font-bold">Left Content</h2>
        </motion.div>

        {/* Right section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="w-1/2 p-8 bg-black text-white"
        >
          <h2 className="text-2xl font-bold">Right Content</h2>
        </motion.div>
      </div>
    </div>
  );
} 