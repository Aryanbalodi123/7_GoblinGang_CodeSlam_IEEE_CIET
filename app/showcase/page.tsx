"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Mail, Twitter, Facebook } from "lucide-react";

// --- Data Definitions ---
const colorData = [
  { id: 1, name: "MIDNIGHT BLACK", swatch: "/c1.png" },
  { id: 2, name: "SAPPHIRE BLUE", swatch: "/c2.png" },
  { id: 3, name: "RACING GREEN", swatch: "/c3.png" },
  { id: 4, name: "BLACK SILVER", swatch: "/c4.png" },
  { id: 5, name: "QUICK SILVER", swatch: "/c5.png" },
  { id: 6, name: "STORM BLUE", swatch: "/c6.png" },
  { id: 7, name: "VINTAGE RED", swatch: "/c7.png" },
  { id: 8, name: "RACING RED", swatch: "/c8.png" },
  { id: 9, name: "GLACIER WHITE SOLID", swatch: "/c9.jpg" },
];

const wheelData = [
  { id: 1, name: "STANDARD BRIGHT SILVER", swatch: "/r1.jpg" },
  { id: 2, name: "SATIN GREY", swatch: "/r2.png" },
  { id: 3, name: "DIAMOND CUT", swatch: "/r3.png" },
  { id: 4, name: "DARK GREY", swatch: "/r4.png" },
  { id: 5, name: "GLOSS BLACK", swatch: "/r5.png" },
];

// --- Types ---
type ColorType = (typeof colorData)[number];
type WheelType = (typeof wheelData)[number];

// --- Constants for our logic ---
const COLOR_NINE = colorData.find(c => c.id === 9) as ColorType;
const WHEEL_ONE = wheelData.find(w => w.id === 1) as WheelType;

// --- Component ---
export default function ConfiguratorPage() {
  const router = useRouter();
  // --- State ---
  const [currentColor, setCurrentColor] = useState<ColorType>(COLOR_NINE);
  const [currentWheel, setCurrentWheel] = useState<WheelType>(WHEEL_ONE);
  const [isImageLoading, setIsImageLoading] = useState(false);

  // --- Click Handlers with New Logic ---
  const handleColorClick = (selectedColor: ColorType) => {
    if (selectedColor.id === currentColor.id) return;
    setIsImageLoading(true);
    setCurrentColor(selectedColor);
    
    if (selectedColor.id !== COLOR_NINE.id) {
      setCurrentWheel(WHEEL_ONE);
    }
  };

  const handleWheelClick = (selectedWheel: WheelType) => {
    if (selectedWheel.id === currentWheel.id) return;
    setIsImageLoading(true);
    setCurrentWheel(selectedWheel);

    if (selectedWheel.id !== WHEEL_ONE.id) {
      setCurrentColor(COLOR_NINE);
    }
  };

  // --- Derived State (Image Path) ---
  let carImageExtension = ".jpg";
  const combo = `${currentColor.id}${currentWheel.id}`;
  const pngCombos = ["11", "21", "31", "41", "51", "61", "71", "81", "92", "93", "94", "95"];
  if (pngCombos.includes(combo)) {
    carImageExtension = ".png";
  }
  const carImageSrc = `/${combo}${carImageExtension}`;

  // --- Render ---
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 p-2 md:p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="container max-w-6xl h-[95vh] bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col"
      >
        
        {/* === Header === */}
        <header className="flex items-center px-4 py-3 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white flex-shrink-0">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push('/')}
            className="text-gray-500 hover:text-gray-900 transition-colors duration-200"
          >
            <ArrowLeft size={20} />
          </motion.button>
          <h1 className="ml-3 text-base font-bold uppercase tracking-wider bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Wheels & Paint Finish
          </h1>
        </header>

        <main className="flex-1 flex flex-col overflow-hidden">
          {/* === Car Display === */}
          <div className="relative w-full bg-gradient-to-b from-gray-50 to-gray-100 flex-shrink-0" style={{height: '80%'}}>
            {/* Info Overlay */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="absolute top-3 right-3 text-right z-10 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg px-3 py-2 border border-gray-200"
            >
              <motion.p 
                key={currentColor.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-xs font-semibold uppercase text-gray-700 mb-0.5"
              >
                PAINT: <span className="font-normal text-gray-900">{currentColor.name}</span>
              </motion.p>
              <motion.p 
                key={currentWheel.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-xs font-semibold uppercase text-gray-700"
              >
                WHEELS: <span className="font-normal text-gray-900">{currentWheel.name}</span>
              </motion.p>
            </motion.div>

            {/* Car Image */}
            <div className="relative w-full h-full">
              <AnimatePresence mode="wait">
                {isImageLoading && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex items-center justify-center bg-gray-100/50 backdrop-blur-sm z-20"
                  >
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
              <motion.img
                key={carImageSrc}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: isImageLoading ? 0 : 1, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                src={carImageSrc}
                alt={`Car with ${currentColor.name} paint and ${currentWheel.name} wheels`}
                className="w-full h-full object-contain"
                onLoad={() => setIsImageLoading(false)}
                onError={(e) => {
                  setIsImageLoading(false);
                  e.currentTarget.src = "/placeholder.jpg"; 
                  e.currentTarget.alt = "Image not available";
                }}
              />
            </div>
          </div>

          {/* === Options Section === */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex-1 flex flex-col md:flex-row px-4 py-2 gap-4 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
          >
            {/* Paint Finish */}
            <section className="flex-1 min-h-0">
              <h3 className="text-xs font-semibold uppercase border-b border-blue-500 pb-1 mb-2 text-gray-800">
                Paint Finish
              </h3>
              <div className="flex flex-wrap gap-2 content-start">
                {colorData.map((color, index) => {
                  const isDisabled = currentWheel.id !== WHEEL_ONE.id && color.id !== COLOR_NINE.id;
                  const isSelected = currentColor.id === color.id;

                  return (
                    <motion.button
                      key={color.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + index * 0.05, duration: 0.3 }}
                      whileHover={!isDisabled ? { scale: 1.15, y: -2 } : {}}
                      whileTap={!isDisabled ? { scale: 0.95 } : {}}
                      onClick={() => handleColorClick(color)}
                      disabled={isDisabled}
                      className={`relative w-11 h-11 rounded-full border-2 transition-all duration-300 
                                  ${isSelected
                                    ? "border-blue-500 ring-2 ring-blue-200 ring-offset-1 shadow-lg" 
                                    : "border-gray-300"
                                  }
                                  ${!isDisabled 
                                    ? "hover:border-blue-400 hover:shadow-md cursor-pointer" 
                                    : "opacity-40 cursor-not-allowed"
                                  }
                                  group`}
                      title={color.name}
                    >
                      <img
                        src={color.swatch}
                        alt={color.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                      <AnimatePresence>
                        {isSelected && (
                          <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0.2, 0.4, 0.2] }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="absolute inset-0 rounded-full bg-blue-500/20"
                          />
                        )}
                      </AnimatePresence>
                      {/* Tooltip */}
                      <motion.span 
                        initial={{ opacity: 0, y: -5 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-0.5 rounded whitespace-nowrap pointer-events-none z-10"
                      >
                        {color.name}
                      </motion.span>
                    </motion.button>
                  );
                })}
              </div>
            </section>

            {/* Wheels */}
            <section className="flex-1 min-h-0">
              <h3 className="text-xs font-semibold uppercase border-b border-blue-500 pb-1 mb-2 text-gray-800">
                Wheels
              </h3>
              <div className="flex flex-wrap gap-2 content-start">
                {wheelData.map((wheel, index) => {
                  const isDisabled = currentColor.id !== COLOR_NINE.id && wheel.id !== WHEEL_ONE.id;
                  const isSelected = currentWheel.id === wheel.id;
                  
                  return (
                    <motion.button
                      key={wheel.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.05, duration: 0.3 }}
                      whileHover={!isDisabled ? { scale: 1.15, y: -2 } : {}}
                      whileTap={!isDisabled ? { scale: 0.95 } : {}}
                      onClick={() => handleWheelClick(wheel)}
                      disabled={isDisabled}
                      className={`relative w-20 h-20 rounded-full border-2 transition-all duration-300 
                                  ${isSelected
                                    ? "border-blue-500 ring-2 ring-blue-200 ring-offset-1 shadow-lg" 
                                    : "border-gray-300"
                                  }
                                  ${!isDisabled 
                                    ? "hover:border-blue-400 hover:shadow-md cursor-pointer" 
                                    : "opacity-40 cursor-not-allowed"
                                  }
                                  group bg-white`}
                      title={wheel.name}
                    >
                      <img
                        src={wheel.swatch}
                        alt={wheel.name}
                        className="w-full h-full object-contain p-1 rounded-full"
                      />
                      <AnimatePresence>
                        {isSelected && (
                          <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0.2, 0.4, 0.2] }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="absolute inset-0 rounded-full bg-blue-500/20"
                          />
                        )}
                      </AnimatePresence>
                      {/* Tooltip */}
                      <motion.span 
                        initial={{ opacity: 0, y: -5 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-0.5 rounded whitespace-nowrap pointer-events-none z-10"
                      >
                        {wheel.name}
                      </motion.span>
                    </motion.button>
                  );
                })}
              </div>
            </section>
          </motion.div>
        </main>

        {/* === Footer === */}
        <footer className="flex flex-col md:flex-row justify-between items-center px-4 py-3 border-t border-gray-200 text-xs bg-gradient-to-r from-gray-50 to-white flex-shrink-0">
          <div className="flex gap-4 text-gray-600 mb-2 md:mb-0">
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.1, color: "#2563eb" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1 transition-colors duration-200"
            >
              <Facebook size={14} /> <span className="font-medium">SHARE</span>
            </motion.a>
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.1, color: "#60a5fa" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1 transition-colors duration-200"
            >
              <Twitter size={14} /> <span className="font-medium">TWEET</span>
            </motion.a>
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.1, color: "#111827" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1 transition-colors duration-200"
            >
              <Mail size={14} /> <span className="font-medium">EMAIL</span>
            </motion.a>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-700 mb-1 text-xs">
              The Spyker C8 Aileron is currently in production.
            </p>
            <motion.button 
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="text-blue-600 font-semibold uppercase hover:text-blue-800 transition-colors duration-200 inline-flex items-center gap-1 group text-xs"
            >
              Contact a Dealer 
              <motion.span
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                &rarr;
              </motion.span>
            </motion.button>
          </div>
        </footer>
      </motion.div>
    </div>
  );
}