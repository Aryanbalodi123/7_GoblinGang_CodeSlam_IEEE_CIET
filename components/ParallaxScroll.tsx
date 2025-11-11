'use client';

import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface ParallaxScrollProps {
  children: ReactNode;
  offset?: number;
  animationType?: 'upFromBottom' | 'downFromTop' | 'scaleIn' | 'rotateIn';
}

export const ParallaxScroll = ({
  children,
  offset = 100,
  animationType = 'upFromBottom',
}: ParallaxScrollProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  let y: MotionValue<number> | number = 0;
  let opacity: MotionValue<number> | number = 1;
  let scale: MotionValue<number> | number = 1;
  let rotate: MotionValue<number> | number = 0;

  switch (animationType) {
    case 'upFromBottom':
      y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
      opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);
      break;
    case 'downFromTop':
      y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);
      opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);
      break;
    case 'scaleIn':
      scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1]);
      opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 0.5, 1]);
      break;
    case 'rotateIn':
      rotate = useTransform(scrollYProgress, [0, 0.5, 1], [20, 10, 0]);
      opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 0.5, 1]);
      break;
  }

  return (
    <motion.div
      ref={ref}
      style={{
        y,
        opacity,
        scale,
        rotate,
      }}
    >
      {children}
    </motion.div>
  );
};
