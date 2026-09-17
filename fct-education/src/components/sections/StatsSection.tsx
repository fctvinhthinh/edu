"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";
import { stats } from "@/data/stats";

function CountUp({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true });
  const started = useRef(false);

  useEffect(() => {
    if (inView && !started.current) {
      started.current = true;
      const startTime = Date.now();
      const frame = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(end * eased));
        if (progress < 1) requestAnimationFrame(frame);
        else setCount(end);
      };
      requestAnimationFrame(frame);
    }
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString("vi-VN")}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center group"
            >
              <div className="relative inline-block mb-3">
                <div className="w-20 h-20 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-primary/10 transition-colors">
                  <div className="text-3xl md:text-4xl font-bold font-heading text-primary">
                    <CountUp end={parseInt(stat.value)} suffix={stat.suffix} />
                  </div>
                </div>
              </div>
              <div className="text-base md:text-lg font-semibold text-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
