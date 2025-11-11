"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const INTERIOR_IMAGES = [
  "/automotive_5474726.jpg",
  "/image copy 6.png",
  "/image copy 7.png",
  "/image copy 8.png",
  "/image copy 9.png",
  "/image copy 10.png",
  "/image copy 11.png",
  "/image copy 12.png",
  "/image copy 8.png",
  "/image copy 7.png",
];

export default function InteriorPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(INTERIOR_IMAGES.length - 1, prev + 1));
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col lg:flex-row">
      {/* Left (Image with Navbar Overlay) */}
      <div className="w-full lg:w-[70%] relative h-[50vh] lg:h-screen">
        {/* Navbar overlaid on image */}
        <nav className="absolute top-0 left-0 w-full flex items-center px-4 sm:px-6 py-3 sm:py-4 z-10">
          <Link href="/" className="flex items-center text-2xl sm:text-3xl lg:text-[50px] font-semibold text-white hover:text-gray-200 transition-colors drop-shadow-lg">
            ← Interior
          </Link>
        </nav>

        {/* Image with transition */}
        <Image
          key={currentIndex}
          src={INTERIOR_IMAGES[currentIndex]}
          alt={`Car Interior ${currentIndex + 1}`}
          fill
          className="object-cover transition-opacity duration-500"
          priority={currentIndex === 0}
        />
      </div>

      {/* Right (Text and Navigator) */}
      <div className="w-full lg:w-[30%] min-h-[50vh] lg:h-screen flex flex-col justify-center px-6 sm:px-8 lg:px-10 py-8 lg:py-0 bg-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
          Welcome in Cockpit
        </h1>
        <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
          Step inside the world of performance and luxury — the cockpit is designed around you. 
          Every dial, stitch, and display has been crafted to deliver precision, comfort, and control. 
          Feel connected to the road with every turn of the wheel.
        </p>

        <div className="mt-8 lg:mt-12 flex items-center gap-3 sm:gap-4">
          <button 
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-gray-800 rounded flex items-center justify-center hover:bg-gray-800 hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-lg sm:text-xl"
          >
            ←
          </button>
          <span className="text-lg sm:text-xl font-semibold">
            {currentIndex + 1} / {INTERIOR_IMAGES.length}
          </span>
          <button 
            onClick={handleNext}
            disabled={currentIndex === INTERIOR_IMAGES.length - 1}
            className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-gray-800 rounded flex items-center justify-center hover:bg-gray-800 hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-lg sm:text-xl"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}

