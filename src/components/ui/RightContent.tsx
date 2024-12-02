'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function RightContent() {
  const [activeTab, setActiveTab] = useState('projects');

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
    { id: 'projects', label: 'Created', count: 256 },
    { id: 'timeline', label: 'Collection', count: 4 },
    { id: 'comments', label: 'Owned', count: 16 },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'projects':
        return <div>Nội dung Projects</div>;
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
      <div className="flex w-full space-x-4 mb-6 bg-black/20 p-2 rounded-xl">
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