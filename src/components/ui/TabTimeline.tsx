import { timelineConfig } from '@/config/config';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function TabTimeline() {
  const sortedTimelines = [...timelineConfig.timelines].sort((a, b) => 
    new Date(b.time).getTime() - new Date(a.time).getTime()
  );
  
  return (
    <div className="min-h-[300px] p-4">
      
      {/* Notes Section */}
      {timelineConfig.notes && timelineConfig.notes.length > 0 && (
        <div className="mb-8 bg-gray-600/20 backdrop-blur-sm p-6 rounded-xl border-2 border-gray-600">
          <h4 className="text-lg font-semibold text-[var(--accent-purple)] mb-4">Notes:</h4>
          <ul className="space-y-2">
            {timelineConfig.notes.map((note, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-300">
                <span className="text-[var(--accent-purple)] mt-1">•</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Timeline Section */}
      <div className="relative">
        <div className="absolute right-[15px] top-0 bottom-0 w-[2px] bg-gray-600" />
        
        <div className="space-y-8">
          {sortedTimelines.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative pr-10"
            >
              <div className="absolute right-0 w-[32px] h-[32px] rounded-full bg-gray-800 border-4 border-gray-700 flex items-center justify-center shadow-[0_0_10px_rgba(214,242,123,0.3)]">
                <div className="w-[8px] h-[8px] rounded-full bg-[var(--accent-lime)]" />
              </div>
              
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl hover:scale-[1.02] transition-transform border border-gray-800">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1 space-y-4">
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold text-[var(--accent-lime)]">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-300">
                        {item.subtitle}
                      </p>
                      <time className="text-xs text-gray-400">
                        {new Date(item.time).toLocaleDateString('vi-VN', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                    </div>

                    <p className="text-sm text-gray-300">
                      {item.description}
                    </p>
                  </div>

                  {item.image_url && (
                    <div className="w-full md:w-[150px] h-[200px] md:h-[150px] rounded-xl overflow-hidden border border-gray-800 flex-shrink-0">
                      <Image
                        src={item.image_url}
                        alt={item.title}
                        width={150}
                        height={150}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 