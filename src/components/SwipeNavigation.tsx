"use client";

import { useEffect, useState, ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";

// Define the logical order of routes that map to the header navigation
const routes = ["/", "/about", "/skills", "/projects", "/contact"];

export default function SwipeNavigation({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    // Only attach touch listeners on mobile/tablet widths to save resources on desktop
    if (typeof window === "undefined" || window.innerWidth > 768) return;

    const minSwipeDistance = 75; // Minimum distance to be considered a swipe

    const handleTouchStart = (e: TouchEvent) => {
      // Don't intercept touches on interactive elements like carousels or specific sliders
      const target = e.target as HTMLElement;
      if (target.closest('.no-swipe')) return;
      
      setTouchStart({
        x: e.changedTouches[0].screenX,
        y: e.changedTouches[0].screenY,
      });
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!touchStart) return;

      const touchEndX = e.changedTouches[0].screenX;
      const touchEndY = e.changedTouches[0].screenY;

      const deltaX = touchStart.x - touchEndX;
      const deltaY = touchStart.y - touchEndY;

      // Check if the horizontal swipe is dominant (not vertical scrolling)
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
        const currentIndex = routes.indexOf(pathname);
        
        // If the current route isn't in our ordered list (e.g. /resume), don't swipe
        if (currentIndex === -1) {
          setTouchStart(null);
          return;
        }

        if (deltaX > 0) {
          // Swiped left, go to next route
          if (currentIndex < routes.length - 1) {
            router.push(routes[currentIndex + 1]);
          }
        } else {
          // Swiped right, go to previous route
          if (currentIndex > 0) {
            router.push(routes[currentIndex - 1]);
          }
        }
      }
      
      setTouchStart(null);
    };

    document.addEventListener("touchstart", handleTouchStart, { passive: true });
    document.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [pathname, router, touchStart]);

  return <>{children}</>;
}
