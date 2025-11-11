// app/page.tsx
'use client'; // Required for Framer Motion and state hooks

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react'; // Icons

// --- 1. NAVBAR COMPONENT ---
// (Layout matches image: logo left, links right)

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'C8 Aileron', href: '/c8-aileron' },
  { name: 'Heritage', href: '/heritage' },
  { name: 'Brand', href: '/brand' },
  { name: 'Company', href: '/company' },
  { name: 'News', href: '/news' },
  { name: 'Dealers', href: '/dealers' },
];

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full h-24 sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <nav className="container mx-auto h-full flex items-center justify-between px-8 lg:px-12">
        {/* Logo - left */}
        <Link href="/" className="inline-block" aria-label="Home">
          <Image
            src="/logo.png" // Make sure 'logo.png' is in your /public folder
            alt="Spyker logo"
            width={150}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav - right (This matches the image) */}
        <ul className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <motion.li
              key={item.name}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Link
                href={item.href}
                className="text-gray-500 hover:text-black transition-colors duration-200 uppercase text-xs font-medium tracking-widest"
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-black"
            aria-label="Open main menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* --- Mobile Menu (Dropdown) --- */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? 'auto' : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden overflow-hidden"
      >
        <ul className="flex flex-col p-4 space-y-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-700 hover:text-black transition-colors duration-200 uppercase text-sm font-medium tracking-wide px-2 py-3"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </header>
  );
}

// --- 2. NAVIGATE SIDEBAR COMPONENT ---
// (The black box from the right side of the image)

const sidebarItems = [
  'Introduction',
  'Exterior',
  'Driving',
  'Interior',
  'Wheels & Paint Finish',
];

function NavigateSidebar() {
  return (
    // Exact colors from image: black background, white/gray text
    <div className="bg-black text-white p-8">
      <h3 className="text-sm font-bold tracking-widest uppercase text-white mb-6">
        Navigate
      </h3>
      <ul className="space-y-0">
        {sidebarItems.map((item) => (
          <li key={item}>
            <Link
              href="#"
              className="flex items-center justify-between py-4 border-b border-gray-700 group transition-all duration-300"
            >
              <span className="text-xs font-medium tracking-wider uppercase text-gray-300 group-hover:text-white">
                {item}
              </span>
              {/* Animation on the arrow */}
              <motion.span whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 400 }}>
                <ChevronRight size={16} className="text-gray-500 group-hover:text-white" />
              </motion.span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// --- 3. MAIN PAGE COMPONENT (Default Export) ---
// (This assembles the 3-column layout from the image)

export default function HomePage() {
  // Framer Motion animation variants for fade-in effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Each child fades in 0.2s after the previous
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 100 },
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />

      <main className="grow">
        {/* --- CENTERED CAR IMAGE --- */}
        <div className="container mx-auto px-8 lg:px-12 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-5xl mx-auto"
          >
            <Image
              src="/car.png" // <-- IMPORTANT: Make sure 'car.png' is in /public
              alt="Spyker C8 Aileron"
              width={1200}
              height={675}
              className="w-full h-auto"
              priority
            />
          </motion.div>
        </div>

        {/* --- HEADING + 3 COLUMN SECTION --- */}
        <div className="container mx-auto px-8 lg:px-12 pb-16">
          {/* Heading */}
          <motion.h1 
            className="text-4xl font-bold tracking-tight text-gray-800 uppercase leading-tight mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Spyker C8 Aileron
          </motion.h1>

          {/* 3 Column Layout: Para 1, Para 2, Navigate */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Column 1: First Paragraph */}
            <motion.div 
              className="text-sm text-gray-600 leading-relaxed"
              variants={itemVariants}
            >
              <p>
                The all-new Spyker C8 Aileron marks the next step in Spyker
                Cars&apos; evolution. Inspired by the company&apos;s aviation heritage,
                Spyker&apos;s second-generation sports car features cues from
                second-generation aircraft propulsion, highlighting the
                turbine blade, rather than the propeller which adorned many
                elements of Spyker&apos;s first generation cars.
              </p>
            </motion.div>

            {/* Column 2: Second Paragraph */}
            <motion.div 
              className="text-sm text-gray-600 leading-relaxed"
              variants={itemVariants}
            >
              <p>
                With sleek aerodynamics, a long GT wheelbase, luxurious and
                spacious cabin and world-class six-speed automatic
                transmission, the new C8 Aileron has broadened the appeal of
                the Spyker brand while maintaining the marque&apos;s exclusivity.
              </p>
            </motion.div>

            {/* Column 3: Navigate Sidebar */}
            <motion.div variants={itemVariants}>
              <NavigateSidebar />
            </motion.div>
          </motion.div>
        </div>
      </main>

      {/* The "Key Specifications" component has been removed
        to match the image exactly, as you requested.
      */}
    </div>
  );
}