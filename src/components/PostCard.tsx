'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

interface PostCardProps {
  id: number;
  title: string;
  thumbnail: string;
  date: string;
}

const PostCard = ({ id, title, thumbnail, date }: PostCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
  });

  // Format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
      <div className="relative pt-[56.25%] w-full" ref={ref}>
        {inView && (
          <Image
            src={thumbnail || '/placeholder.jpg'}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className={`object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setIsLoaded(true)}
            loading="lazy"
          />
        )}
        {!isLoaded && inView && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
        )}
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <p className="text-gray-500 text-sm mb-2">{formatDate(date)}</p>
        <h3 className="card-title text-lg font-semibold mb-2 line-clamp-3">{title}</h3>
      </div>
    </div>
  );
};

export default PostCard;