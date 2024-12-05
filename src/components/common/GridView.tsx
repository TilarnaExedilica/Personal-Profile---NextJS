'use client';
import { useState } from 'react';
import GridViewItem from './GridViewItem';
import Pagination from './Pagination';

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

const ITEMS_PER_PAGE = 9;

export default function GridView({ items, title }: GridViewProps) {
  const [currentPage, setCurrentPage] = useState(1);
  
  const sortedItems = [...items].sort((a, b) => 
    new Date(b.posted_date).getTime() - new Date(a.posted_date).getTime()
  );
  
  const totalPages = Math.ceil(sortedItems.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = sortedItems.slice(startIndex, endIndex);

  return (
    <div className="min-h-[300px]">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentItems.map((item) => (
          <GridViewItem
            key={item.id}
            title={item.title}
            subtitle={item.description}
            imageUrl={item.thumbnail_url}
            link={item.post_url}
            tags={item.tags}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
} 