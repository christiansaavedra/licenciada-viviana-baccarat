import { useState, useEffect } from "react";

interface ViewportSize {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

export const useViewport = (): ViewportSize => {
  const [viewport, setViewport] = useState<ViewportSize>({
    isMobile: true,
    isTablet: false,
    isDesktop: false,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      setViewport({
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024,
      });
    };

    // Call on initial mount
    handleResize();

    // Add resize listener
    window.addEventListener("resize", handleResize);

    // Cleanup listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return viewport;
};
