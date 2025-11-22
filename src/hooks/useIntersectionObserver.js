import { useRef, useEffect, useState } from "react";

// Custom hook for Intersection Observer - Fixed to prevent flickering
export const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef || hasTriggered) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasTriggered) {
        setIsVisible(true);
        setHasTriggered(true);
        // Always disconnect after first trigger to prevent retriggering
        observer.disconnect();
      }
    }, {
      threshold: 0.1,
      rootMargin: options.margin || "-300px",
      ...options
    });

    observer.observe(currentRef);

    return () => {
      observer.disconnect();
    };
  }, [hasTriggered, options.margin]);

  return [ref, isVisible];
};

