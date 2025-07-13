'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface BannerProps {
  title: string;
  subtitle: string;
  imageUrl: string;
}

const Banner = ({ title, subtitle, imageUrl }: BannerProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Enhanced parallax effect
  const imageTransform = `translateY(${scrollPosition * 0.3}px)`;
  const textTransform = `translateY(${scrollPosition * 0.15}px)`;

  return (
    <div className="banner relative h-[400px] w-full overflow-hidden">
      <div 
        className="banner-image absolute inset-0 w-full h-full"
        style={{ transform: imageTransform }}
      >
        <Image 
          src={imageUrl} 
          alt={title}
          fill
          priority
          className="object-cover"
        />
      </div>
      <div 
        className="banner-content absolute inset-0 flex flex-col items-center justify-center text-white"
        style={{ transform: textTransform }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">{title}</h1>
        <p className="text-xl md:text-2xl text-center">{subtitle}</p>
      </div>
    </div>
  );
};

export default Banner;