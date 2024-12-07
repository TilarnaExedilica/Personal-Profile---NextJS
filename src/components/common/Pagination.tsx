import { motion } from 'framer-motion';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  return (
    <motion.div 
      className="flex justify-center items-center gap-2 mt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 rounded-md bg-[var(--menu-bg)] text-[var(--menu-text)] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[var(--menu-hover)] transition-colors"
      >
        Previous
      </motion.button>
      
      <div className="flex gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <motion.button
            key={page}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onPageChange(page)}
            className={`w-8 h-8 rounded-md flex items-center justify-center transition-colors
              ${currentPage === page 
                ? 'bg-[var(--accent-lime)] text-black' 
                : 'bg-[var(--menu-bg)] text-[var(--menu-text)] hover:bg-[var(--menu-hover)]'
              }`}
          >
            {page}
          </motion.button>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 rounded-md bg-[var(--menu-bg)] text-[var(--menu-text)] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[var(--menu-hover)] transition-colors"
      >
        Next
      </motion.button>
    </motion.div>
  );
} 