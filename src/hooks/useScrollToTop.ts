import { useEffect } from 'react';

export const useScrollToTop = (dependencies: unknown[] = []) => {
  useEffect(() => {
    // Immediate scroll to top
    window.scrollTo(0, 0);
    
    // Smooth scroll as fallback
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }, 50);
  }, dependencies);
}; 