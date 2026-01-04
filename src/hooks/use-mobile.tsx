import { useState, useEffect } from 'react';

// Define the breakpoint for mobile view. 767px ensures it covers typical small screens
// and is the maximum width before Tailwind's 'md' breakpoint kicks in (768px).
const MOBILE_BREAKPOINT = '(max-width: 767px)';

/**
 * Hook to determine if the current viewport matches the defined mobile breakpoint.
 * @returns {boolean} True if the screen is considered mobile.
 */
export const useMobile = () => {
  // We initialize the state based on the current window size only if we are in a browser environment.
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(MOBILE_BREAKPOINT).matches;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const mediaQuery = window.matchMedia(MOBILE_BREAKPOINT);

    // Handler function to update state on size change
    const handler = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    // Setup listener
    mediaQuery.addEventListener('change', handler);

    // Cleanup function
    return () => {
      mediaQuery.removeEventListener('change', handler);
    };
  }, []);

  return isMobile;
};