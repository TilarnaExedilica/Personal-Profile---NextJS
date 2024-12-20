'use client';
import { useState } from 'react';
import GridViewItem from './GridViewItem';
import Pagination from './Pagination';
import { motion, AnimatePresence } from 'framer-motion';

interface GridViewProps {
  items: Array<{
    id: string;
    title: string;
    description: string;
    thumbnail_url: string;
    post_url: string;
    posted_date: string;
    tags?: string[];
  }>;
  title: string;
}

const ITEMS_PER_PAGE = 6;

export default function GridView({ items, title }: GridViewProps) {
  const [currentPage, setCurrentPage] = useState(1);
  
  const sortedItems = [...items].sort((a, b) => 
    new Date(b.posted_date).getTime() - new Date(a.posted_date).getTime()
  );
  
  const totalPages = Math.ceil(sortedItems.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = sortedItems.slice(startIndex, endIndex);

  if (items.length === 0) {
    return (
      <div className="min-h-[300px]">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <div className="flex flex-col items-center justify-center p-8 bg-[var(--menu-bg)] rounded-xl">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-16 h-16 text-[var(--menu-text)] mb-4" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" 
            />
          </svg>
          <h3 className="text-xl font-semibold text-[var(--menu-text)] mb-2">
            Oops! Nothing Here Yet!
          </h3>
          <p className="text-[var(--menu-text)] opacity-75 text-center">
            Stay tuned! Awesome content coming soon ^_^
            <br />
            Check back later!
          </p>
        </div>
      </div>
    );
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    show: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.5
      }
    },
    exit: { 
      opacity: 0, 
      y: -30,
      scale: 0.95,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      className="min-h-[300px]"
      layout
      transition={{ 
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }}
    >
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        variants={container}
        initial="hidden"
        animate="show"
        key={currentPage}
        layout
        transition={{ 
          duration: 0.6,
          ease: [0.4, 0, 0.2, 1]
        }}
      >
        <AnimatePresence mode="wait">
          {currentItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              layout
              style={{ 
                originX: 0.5, 
                originY: 0.5 
              }}
            >
              <GridViewItem
                title={item.title}
                subtitle={item.description}
                imageUrl={item.thumbnail_url}
                link={item.post_url}
                tags={item.tags}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence mode="wait">
        {totalPages > 1 && (
          <motion.div
            key="pagination"
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: {
                duration: 0.5,
                delay: 0.3,
                ease: [0.4, 0, 0.2, 1]
              }
            }}
            exit={{ 
              opacity: 0, 
              y: 20,
              transition: {
                duration: 0.4
              }
            }}
            layout
            className="mt-8"
          >
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
} 