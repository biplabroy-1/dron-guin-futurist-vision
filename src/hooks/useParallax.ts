import { useEffect, useCallback } from 'react';

interface ParallaxOptions {
  speed?: number;
  scale?: boolean;
}

export const useParallax = (elementId: string, options: ParallaxOptions = {}) => {
  const { speed = 0.5, scale = false } = options;

  const handleScroll = useCallback(() => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const viewportBottom = window.scrollY + windowHeight;
    
    // Only update if element is in view
    if (rect.top < viewportBottom && rect.bottom > 0) {
      const scrolled = window.scrollY;
      const translateY = scrolled * speed;
      const scaleValue = scale ? 1 + (scrolled * 0.0001) : 1;
      
      requestAnimationFrame(() => {
        element.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scaleValue})`;
      });
    }
  }, [elementId, speed, scale]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);
};