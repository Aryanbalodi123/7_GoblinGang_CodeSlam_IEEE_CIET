"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
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
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = scrollY / maxScroll;
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
  }, [currentIndex]);

  const currentContent = CAR_CONTENT[currentIndex];

  const handlePrev = () => {
    const newIndex = Math.max(0, currentIndex - 1);
    setCurrentIndex(newIndex);
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const targetScroll = (newIndex / (CAR_IMAGES.length - 1)) * maxScroll;
    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  };

  const handleNext = () => {
    const newIndex = Math.min(CAR_IMAGES.length - 1, currentIndex + 1);
    setCurrentIndex(newIndex);
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const targetScroll = (newIndex / (CAR_IMAGES.length - 1)) * maxScroll;
    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  };

  return (
    <div className="relative bg-white text-gray-800">
      <div className="fixed inset-0 flex z-10 pointer-events-none">
        {/* Left Section - Text and Navigation */}
        <div className="w-[30%] flex flex-col justify-between px-10 py-8 pointer-events-auto">
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

        {/* Center spacer */}
        <div className="w-[40%]" />

        {/* Right Section - Specifications */}
        <div className="w-[30%] flex flex-col justify-center px-10 py-8 space-y-8 pointer-events-auto">
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

      {/* Center Section - Scrollable Cards */}
      <ContainerScroll className="h-[400vh]">
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
  );
}
            