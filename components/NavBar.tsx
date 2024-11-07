'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram } from 'lucide-react';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 backdrop-blur-sm py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.png" // Make sure to add your logo to public folder
              alt="Logo"
              width={85}
              height={85}
              className="h-12 w-auto"
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/about" 
              className="text-white hover:text-gray-300 transition-colors"
            >
              About
            </Link>
            <Link 
              href="/roster" 
              className="text-white hover:text-gray-300 transition-colors"
            >
              Roster
            </Link>
            <Link 
              href="/schedule" 
              className="text-white hover:text-gray-300 transition-colors"
            >
              Schedule
            </Link>
            <Link 
              href="/news" 
              className="text-white hover:text-gray-300 transition-colors"
            >
              News
            </Link>
          </div>

          {/* Social Media Icon */}
          <Link 
            href="https://www.instagram.com/vandyrugby/" 
            target="_blank"
            className="text-white hover:text-gray-300 transition-colors"
          >
            <Instagram size={34} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;