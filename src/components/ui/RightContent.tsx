'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import TabCollection from './TabCollection';
import TabTimeline from './TabTimeline';
import TabBlog from './TabBlog';

export default function RightContent() {
  const [activeTab, setActiveTab] = useState('collection');

  const containerVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 }
  };

  const contentVariants = {
    hidden: { 
      opacity: 0,
      y: 10,
      transition: { 
        duration: 0.15,
        ease: "easeIn"
      }
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.25,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    exit: { 
      opacity: 0,
      y: -10,
      transition: { 
        duration: 0.15,
        ease: "easeOut"
      }
    }
  };

  const menuItems = [
    { id: 'collection', label: 'Collection', count: 256 },
    { id: 'blog', label: 'Blogs', count: 16 },
    { id: 'timeline', label: 'Timeline', count: 4 },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'collection':
        return <TabCollection />;
      case 'timeline':
        return <TabTimeline />;
      case 'blog':
        return <TabBlog />;
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
      className="w-full h-full overflow-y-auto scrollbar-hide bg-[var(--right-section-bg)] text-[var(--text-secondary)] p-4 pt-4 md:p-8 md:pt-6"
    >
      <div className="flex w-full space-x-2 sm:space-x-4 mb-6 bg-[var(--menu-bg)] p-1 sm:p-2 rounded-xl relative">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex-1 px-2 sm:px-4 py-2 rounded-lg capitalize flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base transition-colors duration-300 ease-in-out ${
              activeTab === item.id 
                ? 'bg-[var(--primary)] text-[var(--text-secondary)]' 
                : 'hover:bg-[var(--menu-hover)] text-[var(--menu-text)]'
            }`}
          >
            <span>{item.label}</span>
            <span className={`px-1 sm:px-2 py-0.5 rounded-lg text-xs sm:text-sm transition-colors duration-300 ease-in-out ${
              item.id === 'collection' 
                ? 'bg-[var(--accent-lime)] text-[var(--text-primary)]'
                : item.id === 'timeline'
                  ? 'bg-[var(--accent-purple)] text-[var(--text-primary)]'
                  : 'bg-[var(--accent-pink)] text-[var(--text-primary)]'
            }`}>
              {item.count}
            </span>
          </button>
        ))}
        
        <div 
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--menu-indicator)]"
        />
        
        <motion.div 
          className="absolute bottom-0 h-[2px] bg-gradient-to-r from-[var(--accent-lime)] via-[var(--accent-purple)] to-[var(--accent-pink)]"
          initial={false}
          animate={{
            left: `${menuItems.findIndex(item => item.id === activeTab) * 33.33}%`,
            width: '30%'
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30
          }}
        />
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={activeTab}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {renderContent()}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}