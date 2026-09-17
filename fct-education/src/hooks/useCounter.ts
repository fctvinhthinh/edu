"use client";

import { useState, useEffect, useRef } from "react";

export function useCounter(end: number, duration = 2000, start = 0) {
  const [count, setCount] = useState(start);
  const [isRunning, setIsRunning] = useState(false);
  const frameRef = useRef<number>(0);

  const startCounter = () => {
    if (isRunning) return;
    setIsRunning(true);

    const startTime = Date.now();
    const range = end - start;

    function update() {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(start + range * eased));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(update);
      } else {
        setCount(end);
      }
    }

    frameRef.current = requestAnimationFrame(update);
  };

  useEffect(() => {
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return { count, startCounter };
}
