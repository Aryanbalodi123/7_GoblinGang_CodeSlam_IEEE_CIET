'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { useScrollAnimation } from '@/lib/useScrollAnimation';

interface ScrollSectionProps {
  children: ReactNode;
  animationType?: 'fadeInUp' | 'slideInLeft' | 'slideInRight' | 'zoomIn' | 'fadeInDown';
  delay?: number;
  duration?: number;
}

const getAnimationVariants = (type: string) => {
  switch (type) {
    case 'fadeInUp':
      return {
        hidden: { opacity: 0, y: 80 },
        visible: { opacity: 1, y: 0 },
      };
    case 'slideInLeft':
      return {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
      };
    case 'slideInRight':
      return {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
      };
    case 'zoomIn':
      return {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
      };
    case 'fadeInDown':
      return {
        hidden: { opacity: 0, y: -80 },
        visible: { opacity: 1, y: 0 },
      };
    default:
      return {
        hidden: { opacity: 0, y: 80 },
        visible: { opacity: 1, y: 0 },
      };
  }
};

export const ScrollSection = ({
  children,
  animationType = 'fadeInUp',
  delay = 0,
  duration = 0.8,
}: ScrollSectionProps) => {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.15 });
  const variants = getAnimationVariants(animationType);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
};
