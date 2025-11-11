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

  // Call hooks unconditionally to preserve hook order
  const yUp = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  const yDown = useTransform(scrollYProgress, [0, 1], [-offset, offset]);
  const scaleTransform = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1]);
  const rotateTransform = useTransform(scrollYProgress, [0, 0.5, 1], [20, 10, 0]);
  const opacityUpDown = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);
  const opacityScaleRotate = useTransform(scrollYProgress, [0, 0.3, 1], [0, 0.5, 1]);

  let y: MotionValue<number> | number = 0;
  let opacity: MotionValue<number> | number = 1;
  let scale: MotionValue<number> | number = 1;
  let rotate: MotionValue<number> | number = 0;

  switch (animationType) {
    case 'upFromBottom':
      y = yUp;
      opacity = opacityUpDown;
      break;
    case 'downFromTop':
      y = yDown;
      opacity = opacityUpDown;
      break;
    case 'scaleIn':
      scale = scaleTransform;
      opacity = opacityScaleRotate;
      break;
    case 'rotateIn':
      rotate = rotateTransform;
      opacity = opacityScaleRotate;
      break;
    default:
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
