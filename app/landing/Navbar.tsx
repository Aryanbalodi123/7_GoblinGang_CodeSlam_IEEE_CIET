'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'C8 Aileron Heritage', href: '/c8-aileron' },
  { name: 'Brand', href: '/brand' },
  { name: 'Company', href: '/company' },
  { name: 'News', href: '/news' },
  { name: 'Dealers', href: '/dealers' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50">
      <nav className="bg-linear-to-r from-white via-white to-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-lg">
        <div className="container mx-auto flex items-center justify-between py-6 px-4 md:px-6">
          {/* Logo - Made Bigger */}
          <Link href="/" className="inline-block group shrink-0" aria-label="Home">
            <div className="flex items-center transform transition-transform duration-300 hover:scale-110">
              <Image 
                src="/logo.png" 
                alt="Spyker logo" 
                width={280} 
                height={90} 
                className="h-24 w-auto drop-shadow-xl" 
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item, index) => (
              <li key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-black transition-all duration-300 uppercase text-xs font-semibold tracking-widest px-3 py-2 rounded-lg hover:bg-gray-100/80 relative overflow-hidden"
                  style={{
                    animation: `slideInDown 0.5s ease-out ${index * 0.1}s both`
                  }}
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-linear-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-black hover:bg-gray-100 rounded-lg transition-colors duration-200"
              aria-label="Open main menu"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden overflow-hidden bg-white/95 backdrop-blur-md border-t border-gray-200/50 transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="flex flex-col space-y-2 p-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-black transition-all duration-300 uppercase text-xs font-semibold tracking-widest px-3 py-2 rounded-lg hover:bg-gray-100 block w-full"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <style jsx>{`
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
}
