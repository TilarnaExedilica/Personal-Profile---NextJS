import Image from 'next/image';
import Link from 'next/link';

interface GridViewItemProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  link: string;
  tags?: string[];
}

export default function GridViewItem({ 
  title, 
  subtitle, 
  imageUrl, 
  link,
  tags 
}: GridViewItemProps) {
  return (
    <Link 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-[var(--menu-bg)] rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300"
    >
      <div className="p-4 space-y-4">
        {/* Image container */}
        <div className="relative w-full aspect-square rounded-lg overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold line-clamp-2 group-hover:text-[var(--accent-lime)] transition-colors">
            {title}
          </h3>
          <p className="text-sm text-[var(--menu-text)] line-clamp-2">
            {subtitle}
          </p>
          
          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 text-xs rounded-md bg-black/20 text-[var(--menu-text)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
} 