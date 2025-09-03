"use client";
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

// Assign a unique rotation for each route
const routeRotations: Record<string, number> = {
  '/': 0,
  '': 0,
  '/about': Math.PI / 2,
  '/projects': Math.PI,
  '/contact': (3 * Math.PI) / 2,
};

export function useGalaxyRotation() {
  const pathname = usePathname();
  const [rotation, setRotation] = useState(routeRotations[pathname] || 0);

  useEffect(() => {
    // Animate rotation when route changes
    const target = routeRotations[pathname] || 0;
    let frame: number;
    function animate() {
      setRotation((prev) => {
        const diff = target - prev;
        if (Math.abs(diff) < 0.01) return target;
        return prev + diff * 0.08; // Smooth transition
      });
      frame = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  useEffect(() => {
    // Optionally, rotate on scroll
    const onScroll = () => {
      setRotation((prev) => prev + (window.scrollY / 100) * 0.0005);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return rotation;
}
