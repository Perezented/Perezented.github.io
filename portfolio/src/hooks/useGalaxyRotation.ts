"use client";
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

// Assign a unique rotation for each route
const routeRotations: Record<string, number> = {
  '/': 0,
  '': 0,
  '/about': .01,
  '/projects': .02,
  '/contact': -.01,
};

export function useGalaxyRotation() {
  const pathname = usePathname();
  const [rotation, setRotation] = useState(routeRotations[pathname] || 0);

  useEffect(() => {
    const target = routeRotations[pathname] || 0;
    setRotation(target);
    return () => setRotation(0); // Reset on unmount
  }, [pathname]);

  return rotation;
}
