import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (options: IntersectionObserverInit = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // Keep it in view once triggered
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        ...options,
      }
    );

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, [options]);

  return { ref, isInView };
};
