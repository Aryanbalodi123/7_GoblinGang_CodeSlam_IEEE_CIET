"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  CardTransformed,
  CardsContainer,
  ContainerScroll,
} from "@/components/blocks/animated-cards-stack";

const CAR_IMAGES = [
  "/image copy.png",
  "/image copy 3.png",
  "/image copy 4.png",
  "/image copy 5.png",
];

const CAR_CONTENT = [
  {
    leftTitle: "V8 POWER",
    leftDescription:
      "The Audi V8 4.2 litre engine delivers 480bhp (354kW) at 8,500rpm for truly exhilarating power delivery. This ensures high torque at low revs for a light, yet progressive, power delivery.",
    rightTitle: "NAVIGATE",
    specs: {
      topSpeed: "300",
      acceleration: "4.5",
      rpm: "400",
      capacity: "4.43 CC",
      power: "298 KW (450HP)",
      torque: "480NM (354 LB-FT) @ 5500 RPM",
      maxRev: "7995 RPM",
    },
  },
  {
    leftTitle: "AERODYNAMICS",
    leftDescription:
      "Advanced aerodynamic design reduces drag and increases downforce. Every curve and line has been optimized in wind tunnels to achieve maximum performance and stability at high speeds.",
    rightTitle: "PERFORMANCE",
    specs: {
      topSpeed: "310",
      acceleration: "4.2",
      rpm: "420",
      capacity: "4.43 CC",
      power: "310 KW (465HP)",
      torque: "500NM (368 LB-FT) @ 5800 RPM",
      maxRev: "8200 RPM",
    },
  },
  {
    leftTitle: "SUSPENSION",
    leftDescription:
      "Adaptive air suspension system provides perfect balance between comfort and sportiness. Real-time adjustments ensure optimal handling in any driving condition.",
    rightTitle: "DYNAMICS",
    specs: {
      topSpeed: "295",
      acceleration: "4.8",
      rpm: "390",
      capacity: "4.43 CC",
      power: "285 KW (438HP)",
      torque: "470NM (346 LB-FT) @ 5200 RPM",
      maxRev: "7800 RPM",
    },
  },
  {
    leftTitle: "BRAKING",
    leftDescription:
      "Carbon-ceramic brakes deliver exceptional stopping power with minimal fade. The advanced braking system ensures confidence-inspiring control in all conditions.",
    rightTitle: "CONTROL",
    specs: {
      topSpeed: "305",
      acceleration: "4.3",
      rpm: "410",
      capacity: "4.43 CC",
      power: "295 KW (453HP)",
      torque: "490NM (361 LB-FT) @ 5600 RPM",
      maxRev: "8000 RPM",
    },
  },
];

export default function DrivingPage() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;

      // The scroll range inside this section where the cards should animate
      const start = sectionTop;
      const end = sectionTop + Math.max(1, sectionHeight - window.innerHeight);

      // If we're outside the section range, don't change the index
      if (window.scrollY < start || window.scrollY > end) return;

      const scrolled = Math.min(
        Math.max(0, window.scrollY - start),
        Math.max(1, sectionHeight - window.innerHeight)
      );

      const scrollPercentage = scrolled / Math.max(1, sectionHeight - window.innerHeight);
      const newIndex = Math.min(
        Math.max(0, Math.floor(scrollPercentage * CAR_IMAGES.length)),
        CAR_IMAGES.length - 1
      );

      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentIndex, isMobile]);

  const currentContent = CAR_CONTENT[currentIndex];

  const handlePrev = () => {
    const newIndex = Math.max(0, currentIndex - 1);
    setCurrentIndex(newIndex);
    if (!isMobile && sectionRef.current) {
      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const range = Math.max(1, sectionHeight - window.innerHeight);
      const targetScroll = sectionTop + (newIndex / Math.max(1, CAR_IMAGES.length - 1)) * range;
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    const newIndex = Math.min(CAR_IMAGES.length - 1, currentIndex + 1);
    setCurrentIndex(newIndex);
    if (!isMobile && sectionRef.current) {
      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const range = Math.max(1, sectionHeight - window.innerHeight);
      const targetScroll = sectionTop + (newIndex / Math.max(1, CAR_IMAGES.length - 1)) * range;
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    }
  };

  // Mobile Layout
  if (isMobile) {
    return (
      <div className="bg-white text-gray-800" ref={sectionRef}>
        {/* Fixed Header */}
        <nav className="fixed top-0 left-0 right-0 w-full px-4 sm:px-6 py-4 bg-white/90 backdrop-blur-sm border-b border-gray-200 z-20">
          <Link
            href="/"
            className="flex items-center text-lg sm:text-xl font-semibold text-gray-600 hover:text-gray-800 transition-colors"
          >
            ← DRIVING
          </Link>
        </nav>

        {/* Scrollable Content */}
        <div className="pt-16">
          <ContainerScroll className="h-[300vh]">
            <div className="sticky left-0 top-16 h-[40vh] sm:h-[50vh] w-full flex items-center justify-center bg-gray-50">
              <CardsContainer className="h-[280px] sm:h-[350px] w-[200px] sm:w-[250px]">
                {CAR_IMAGES.map((imageUrl, index) => (
                  <CardTransformed
                    arrayLength={CAR_IMAGES.length}
                    key={index}
                    index={index + 2}
                    variant="light"
                    className="overflow-hidden !rounded-xl !p-0 shadow-2xl will-change-transform"
                  >
                    <Image
                      src={imageUrl}
                      alt={`Car view ${index + 1}`}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </CardTransformed>
                ))}
              </CardsContainer>
            </div>
          </ContainerScroll>
        </div>

        {/* Fixed Bottom Content */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-20">
          <div className="px-4 sm:px-6 py-4 sm:py-6 space-y-4 max-h-[45vh] overflow-y-auto">
            {/* Left Content */}
            <div className="space-y-3">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-300 transition-all duration-700">
                {currentContent.leftTitle}
              </h1>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed transition-all duration-700">
                {currentContent.leftDescription}
              </p>
            </div>

            {/* Right Content */}
            <div className="space-y-3 border-t border-gray-200 pt-3">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 transition-all duration-700">
                {currentContent.rightTitle}
              </h2>

              <div className="grid grid-cols-3 gap-3">
                <div className="transition-all duration-700">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-300">
                    {currentContent.specs.topSpeed}
                  </div>
                  <div className="text-[10px] sm:text-xs text-gray-400 mt-1">
                    KM/H<br />TOP SPEED
                  </div>
                </div>
                <div className="transition-all duration-700">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-300">
                    {currentContent.specs.acceleration}
                  </div>
                  <div className="text-[10px] sm:text-xs text-gray-400 mt-1">
                    SECONDS<br />(0-62 MPH)
                  </div>
                </div>
                <div className="transition-all duration-700">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-300">
                    {currentContent.specs.rpm}
                  </div>
                  <div className="text-[10px] sm:text-xs text-gray-400 mt-1">
                    @ 7000 RPM
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-2 space-y-1 text-[10px] sm:text-xs text-gray-500 transition-all duration-700">
                <div className="flex justify-between">
                  <span>CAPACITY</span>
                  <span className="text-gray-400">{currentContent.specs.capacity}</span>
                </div>
                <div className="flex justify-between">
                  <span>POWER</span>
                  <span className="text-gray-400">{currentContent.specs.power}</span>
                </div>
                <div className="flex justify-between">
                  <span>TORQUE</span>
                  <span className="text-gray-400">{currentContent.specs.torque}</span>
                </div>
                <div className="flex justify-between">
                  <span>MAX REVOLUTIONS</span>
                  <span className="text-gray-400">{currentContent.specs.maxRev}</span>
                </div>
              </div>
            </div>

            {/* Navigator */}
            <div className="flex items-center justify-center gap-3 pt-2 pb-2">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="w-9 h-9 sm:w-10 sm:h-10 border-2 border-gray-300 rounded flex items-center justify-center hover:bg-gray-800 hover:text-white hover:border-gray-800 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                ←
              </button>
              <span className="text-sm sm:text-base font-semibold text-gray-400">
                {currentIndex + 1} / {CAR_IMAGES.length}
              </span>
              <button
                onClick={handleNext}
                disabled={currentIndex === CAR_IMAGES.length - 1}
                className="w-9 h-9 sm:w-10 sm:h-10 border-2 border-gray-300 rounded flex items-center justify-center hover:bg-gray-800 hover:text-white hover:border-gray-800 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Desktop Layout
  return (
    <div className="relative bg-white text-gray-800" ref={sectionRef}>
      {/* Use relative + sticky columns instead of a page-level fixed overlay
          so the text sections remain confined to this Driving section only. */}
      <div className="relative flex z-10">
        {/* Left Section - Text and Navigation (sticky within this section) */}
        <div className="w-[30%] sticky top-0 h-screen flex flex-col justify-between px-10 py-8 pointer-events-auto">
          <Link
            href="/"
            className="flex items-center text-lg font-semibold text-gray-600 hover:text-gray-800 transition-colors"
          >
            ← DRIVING
          </Link>

          <div className="space-y-6">
            <h1 className="text-6xl font-bold text-gray-300 transition-all duration-700 ease-in-out">
              {currentContent.leftTitle}
            </h1>
            <p className="text-base text-gray-500 leading-relaxed transition-all duration-700 ease-in-out">
              {currentContent.leftDescription}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="w-12 h-12 border-2 border-gray-300 rounded flex items-center justify-center hover:bg-gray-800 hover:text-white hover:border-gray-800 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              ←
            </button>
            <span className="text-lg font-semibold text-gray-400">
              {currentIndex + 1} / {CAR_IMAGES.length}
            </span>
            <button
              onClick={handleNext}
              disabled={currentIndex === CAR_IMAGES.length - 1}
              className="w-12 h-12 border-2 border-gray-300 rounded flex items-center justify-center hover:bg-gray-800 hover:text-white hover:border-gray-800 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              →
            </button>
          </div>
        </div>

  {/* Center Section - Scrollable Cards (placed between the left and right sticky columns) */}
  <div className="w-[40%] flex-shrink-0 flex items-center justify-center">
    <ContainerScroll className="h-[400vh] w-full">
      <div className="sticky left-0 top-0 h-screen w-full flex items-center justify-center">
        <CardsContainer className="h-[450px] w-[320px]">
          {CAR_IMAGES.map((imageUrl, index) => (
            <CardTransformed
              arrayLength={CAR_IMAGES.length}
              key={index}
              index={index + 2}
              variant="light"
              className="overflow-hidden !rounded-xl !p-0 shadow-2xl will-change-transform"
            >
              <Image
                src={imageUrl}
                alt={`Car view ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </CardTransformed>
          ))}
        </CardsContainer>
      </div>
    </ContainerScroll>
  </div>

  {/* Right Section - Specifications (sticky within this section) */}
  <div className="w-[30%] sticky top-0 h-screen flex flex-col justify-center px-10 py-8 space-y-8 pointer-events-auto">
          <h2 className="text-4xl font-bold text-gray-800 transition-all duration-700 ease-in-out">
            {currentContent.rightTitle}
          </h2>

          <div className="space-y-6">
            <div className="flex justify-between items-baseline">
              <div className="transition-all duration-700 ease-in-out">
                <div className="text-5xl font-bold text-gray-300">
                  {currentContent.specs.topSpeed}
                </div>
                <div className="text-sm text-gray-400">
                  KM/H
                  <br />
                  TOP SPEED
                </div>
              </div>
              <div className="transition-all duration-700 ease-in-out">
                <div className="text-5xl font-bold text-gray-300">
                  {currentContent.specs.acceleration}
                </div>
                <div className="text-sm text-gray-400">
                  SECONDS
                  <br />
                  (0-62 MPH)
                </div>
              </div>
              <div className="transition-all duration-700 ease-in-out">
                <div className="text-5xl font-bold text-gray-300">
                  {currentContent.specs.rpm}
                </div>
                <div className="text-sm text-gray-400">@ 7000 RPM</div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4 space-y-2 text-sm text-gray-500 transition-all duration-700 ease-in-out">
              <div className="flex justify-between">
                <span>CAPACITY</span>
                <span className="text-gray-400">
                  {currentContent.specs.capacity}
                </span>
              </div>
              <div className="flex justify-between">
                <span>POWER</span>
                <span className="text-gray-400">{currentContent.specs.power}</span>
              </div>
              <div className="flex justify-between">
                <span>TORQUE</span>
                <span className="text-gray-400">
                  {currentContent.specs.torque}
                </span>
              </div>
              <div className="flex justify-between">
                <span>MAXIMUM REVOLUTIONS</span>
                <span className="text-gray-400">
                  {currentContent.specs.maxRev}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* center cards moved into the middle column */}
    </div>
  );
}
