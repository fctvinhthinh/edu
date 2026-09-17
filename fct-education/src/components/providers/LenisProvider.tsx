"use client";

import { useEffect } from "react";

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let lenisInstance: { raf: (t: number) => void; destroy: () => void } | null = null;
    let rafId: number;

    async function init() {
      try {
        const LenisClass = (await import("lenis")).default;
        lenisInstance = new LenisClass({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: "vertical",
          smoothWheel: true,
          touchMultiplier: 2,
        });

        function raf(time: number) {
          lenisInstance!.raf(time);
          rafId = requestAnimationFrame(raf);
        }
        rafId = requestAnimationFrame(raf);
      } catch {
        // Lenis unavailable in SSR
      }
    }

    init();

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      lenisInstance?.destroy();
    };
  }, []);

  return <>{children}</>;
}
