'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { useScrollAnimation } from '@/lib/useScrollAnimation';

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  staggerChildren?: boolean;
}

export const ScrollAnimationWrapper = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.8,
  staggerChildren = false,
}: ScrollAnimationWrapperProps) => {
  const { ref, isInView } = useScrollAnimation();

  const getInitialVariant = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: 60 };
      case 'down':
        return { opacity: 0, y: -60 };
      case 'left':
        return { opacity: 0, x: -60 };
      case 'right':
        return { opacity: 0, x: 60 };
      default:
        return { opacity: 0, y: 60 };
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerChildren ? 0.1 : 0,
      },
    },
  };

  const itemVariants = {
    hidden: getInitialVariant(),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={staggerChildren ? containerVariants : undefined}
      transition={staggerChildren ? undefined : { delay }}
    >
      {staggerChildren ? (
        <motion.div variants={containerVariants}>
          {children}
        </motion.div>
      ) : (
        <motion.div
          initial={getInitialVariant()}
          animate={isInView ? { opacity: 1, x: 0, y: 0 } : getInitialVariant()}
          transition={{ duration, delay, ease: 'easeOut' }}
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  );
};
