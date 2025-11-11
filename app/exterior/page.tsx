'use client';

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ExteriorPage() {
  const images = [
    {
      name: "Eye-Catching Headlights",
      src: "/headlight.png",
      description: "The style of the Spyker C8 Aileron's headlights is particularly eye-catching as they flow seamlessly from the body design. Latest-generation LEDs are used for the front and rear turn indicators and the sidelights within the sharply-styled headlight units. The integration of advanced lighting technology creates a distinctive visual signature that sets this vehicle apart on the road. Each headlight is meticulously crafted to provide both superior illumination and aesthetic appeal, ensuring safety meets elegance at every moment.",
    },
    {
      name: "Front View",
      src: "/frontview.png",
      description: "Experience the commanding front profile with sleek aerodynamic curves and premium detailing that defines modern luxury automotive design. The front fascia showcases a bold, aggressive stance while maintaining sophisticated proportions. The carefully sculpted hood flows seamlessly into the fenders, creating a harmonious design language that speaks to performance and refinement. Every element serves a purpose, from the intake ducts that manage airflow to the precision-engineered bumper geometry that optimizes both form and function.",
    },
    {
      name: "Back View",
      src: "/backview.png",
      description: "The rear design showcases sophisticated proportions and elegant light treatment that complements the overall aesthetic. The rear fascia features carefully integrated taillights that provide enhanced visibility and a striking visual presence. The trunk area demonstrates the same level of craftsmanship found throughout the vehicle, with clean lines and purposeful geometry that enhance the overall silhouette. The rear bumper design provides both structural integrity and visual balance to the overall composition.",
    },
    {
      name: "Side View",
      src: "/sideview.png",
      description: "Witness the dynamic side profile that captures the essence of performance and elegance in perfect harmony. The side elevation reveals beautifully curved door panels and precisely sculpted body lines that enhance aerodynamic efficiency. The carefully proportioned windows and glass surfaces create visual interest while maintaining structural integrity. The wheel arches showcase premium wheel designs nestled within expertly crafted bodywork, creating a sense of motion even when the vehicle is standing still.",
    },
    {
      name: "Top View",
      src: "/topview.png",
      description: "A comprehensive view revealing the harmonious proportions and carefully crafted lines of the entire exterior. From this perspective, you can appreciate the symmetrical design and the meticulous attention to detail across the entire roof structure. The roof contours seamlessly integrate with the body surfaces, creating smooth transitions and optimal aerodynamic performance. This view demonstrates the three-dimensional complexity and engineering excellence that goes into every aspect of the vehicle's construction.",
    },
    {
      name: "Bonnet View",
      src: "/bonnetview.png",
      description: "The sculpted bonnet displays premium craftsmanship with aggressive yet refined styling elements. The distinctive hood design features multiple sculptural lines that both enhance visual appeal and serve functional purposes for air circulation and engine cooling. The precision gaps and panel alignment demonstrate the quality of manufacturing and attention to detail. The bonnet integrates seamlessly with the front fenders and hood, creating a unified design language that extends throughout the entire vehicle.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for previous

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-300 font-sans overflow-hidden">
      <main className="w-full h-screen flex items-center justify-center p-8">
        <div className="flex gap-6 w-full h-full items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex-1 flex flex-col justify-between"
          >
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.h1 className="text-6xl font-bold text-gray-900 mb-8 leading-tight tracking-tight uppercase">
                    {images[currentIndex].name}
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-gray-700 text-lg leading-8 font-normal max-w-2xl"
                  >
                    {images[currentIndex].description}
                  </motion.p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center border-2 border-gray-700 rounded-lg overflow-hidden bg-gray-300 w-fit"
            >
              <motion.button
                onClick={goToPrevious}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-14 h-14 text-gray-700 hover:bg-gray-400 transition-all duration-300 font-bold text-2xl"
              >
                ←
              </motion.button>

              <div className="h-14 w-px bg-gray-700"></div>

              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="px-8 py-3"
              >
                <p className="text-gray-800 font-bold text-center text-lg">
                  {currentIndex + 1} / {images.length}
                </p>
              </motion.div>

              <div className="h-14 w-px bg-gray-700"></div>

              <motion.button
                onClick={goToNext}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-14 h-14 text-gray-700 hover:bg-gray-400 transition-all duration-300 font-bold text-2xl"
              >
                →
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right: Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 relative h-full flex items-center justify-center overflow-hidden"
            style={{ perspective: "1500px" }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ 
                  opacity: 0, 
                  x: direction === 1 ? 200 : -200,
                  scale: 0.85,
                  rotateY: direction === 1 ? -25 : 25,
                }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  scale: 1,
                  rotateY: 0,
                }}
                exit={{ 
                  opacity: 0, 
                  x: direction === 1 ? -200 : 200,
                  scale: 0.85,
                  rotateY: direction === 1 ? 25 : -25,
                }}
                transition={{ 
                  duration: 0.7, 
                  type: "spring", 
                  stiffness: 120,
                  damping: 20,
                  mass: 1
                }}
                className="relative w-full h-full flex items-center justify-center"
              >
                {/* Professional shadow - subtle and realistic */}
                <motion.div
                  animate={{ 
                    opacity: [0.15, 0.25, 0.15],
                    scaleX: [0.9, 1.05, 0.9],
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 w-4/5 h-12 bg-linear-to-r from-transparent via-gray-900 to-transparent blur-2xl -z-10"
                />

                {/* Clean glow - modern and minimal */}
                <motion.div
                  animate={{ 
                    opacity: [0.08, 0.15, 0.08],
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-linear-to-br from-transparent via-gray-100 to-transparent rounded-3xl blur-3xl pointer-events-none"
                />

                {/* Main image - clean and sharp */}
                <Image
                  src={images[currentIndex].src}
                  alt={images[currentIndex].name}
                  fill
                  className="object-contain drop-shadow-lg"
                  priority
                  quality={95}
                />

                {/* Subtle light reflection - professional shine */}
                <motion.div
                  animate={{ 
                    opacity: [0, 0.12, 0.05, 0],
                    x: [-400, 400]
                  }}
                  transition={{ 
                    duration: 2, 
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                  className="absolute inset-0 bg-linear-to-r from-transparent via-white to-transparent opacity-0 pointer-events-none"
                />
              </motion.div>
            </AnimatePresence>

            {/* Ambient background glow - very subtle */}
            <motion.div
              animate={{ 
                opacity: [0.04, 0.08, 0.04],
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-linear-to-br from-blue-50 via-transparent to-gray-50 pointer-events-none"
            />

            {/* Minimal floating particles - professional depth */}
            <motion.div
              animate={{ 
                y: [0, -15, 0],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-20 left-20 w-40 h-40 rounded-full bg-linear-to-br from-blue-100 to-transparent opacity-6 blur-3xl pointer-events-none"
            />
            <motion.div
              animate={{ 
                y: [0, 15, 0],
              }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-linear-to-tl from-gray-100 to-transparent opacity-6 blur-3xl pointer-events-none"
            />
          </motion.div>
        </div>
      </main>
    </div>
  );
}
