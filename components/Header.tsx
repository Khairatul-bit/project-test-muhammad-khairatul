'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isTransparent, setIsTransparent] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show header when scrolling up, hide when scrolling down
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      // Add transparency effect when at top of page
      if (currentScrollY < 50) {
        setIsTransparent(true);
      } else {
        setIsTransparent(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header 
      className={`header fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isVisible ? 'header-visible' : 'header-hidden'} ${isTransparent ? 'bg-opacity-70' : ''}`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="relative w-32 h-8">
            {/* Ganti SVG dengan Image component */}
            <Image
              src="/images/logo.png"
              alt="Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link 
            href="/work" 
            className={`text-white hover:text-gray-200 ${isActive('/work') ? 'border-b-2 border-white' : ''}`}
          >
            Work
          </Link>
          <Link 
            href="/about" 
            className={`text-white hover:text-gray-200 ${isActive('/about') ? 'border-b-2 border-white' : ''}`}
          >
            About
          </Link>
          <Link 
            href="/services" 
            className={`text-white hover:text-gray-200 ${isActive('/services') ? 'border-b-2 border-white' : ''}`}
          >
            Services
          </Link>
          <Link 
            href="/ideas" 
            className={`text-white hover:text-gray-200 ${isActive('/ideas') ? 'border-b-2 border-white' : ''}`}
          >
            Ideas
          </Link>
          <Link 
            href="/careers" 
            className={`text-white hover:text-gray-200 ${isActive('/careers') ? 'border-b-2 border-white' : ''}`}
          >
            Careers
          </Link>
          <Link 
            href="/contact" 
            className={`text-white hover:text-gray-200 ${isActive('/contact') ? 'border-b-2 border-white' : ''}`}
          >
            Contact
          </Link>
        </nav>
        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;