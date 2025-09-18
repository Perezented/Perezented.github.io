import { useEffect, useRef, useState } from "react";

export function useRouteRotationActive(rotation: number, threshold = 0.01) {
  const prevTarget = useRef<number>(rotation);
  const [isRotating, setIsRotating] = useState(false);

  useEffect(() => {
    // If rotation changes, set as rotating
    setIsRotating(true);
    prevTarget.current = rotation;
    // Check if rotation settles
    let raf: number;
    function check() {
      // If rotation is within threshold, stop rotating
      if (Math.abs(prevTarget.current - rotation) < threshold) {
        setIsRotating(false);
      } else {
        setIsRotating(true);
        raf = requestAnimationFrame(check);
      }
    }
    raf = requestAnimationFrame(check);
    return () => cancelAnimationFrame(raf);
  }, [rotation, threshold]);

  return isRotating;
}
