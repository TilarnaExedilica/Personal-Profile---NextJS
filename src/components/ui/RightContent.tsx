'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function RightContent() {
  const [activeTab, setActiveTab] = useState('collection');

  const containerVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const menuItems = [
    { id: 'collection', label: 'Collection', count: 256 },
    { id: 'timeline', label: 'Timeline', count: 4 },
    { id: 'comments', label: 'Comments', count: 16 },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'collection':
        return <div>Nội dung Collection</div>;
      case 'timeline':
        return <div>Nội dung Timeline</div>;
      case 'comments':
        return <div>Nội dung Comments</div>;
      default:
        return null;
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.8, delay: 1.7, ease: "easeOut" }}
      className="h-[calc(100vh-200px)] w-full p-4 pt-16 md:p-8 bg-[var(--right-section-bg)] text-[var(--text-secondary)] md:rounded-tl-[32px] md:hover:scale-[1.02] relative z-10"
    >
      <div className="flex w-full space-x-4 mb-6 bg-black/20 p-2 rounded-xl relative">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex-1 px-4 py-2 rounded-lg capitalize flex items-center justify-center gap-2 ${
              activeTab === item.id 
                ? 'bg-[var(--primary)] text-white' 
                : 'hover:bg-black/20 text-gray-300'
            }`}
          >
            <span>{item.label}</span>
            <span className={`px-2 py-0.5 rounded-lg text-sm ${
              activeTab === item.id 
                ? 'bg-white/20' 
                : 'bg-gray-700'
            }`}>
              {item.count}
            </span>
          </button>
        ))}
        
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gray-700/50" />
        
        <motion.div 
          className="absolute bottom-0 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          initial={false}
          animate={{
            left: `${menuItems.findIndex(item => item.id === activeTab) * 33.33}%`,
            width: '33.33%'
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30
          }}
        />
      </div>

      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 2.5 }}
      >
        {renderContent()}
      </motion.div>
    </motion.div>
  );
}