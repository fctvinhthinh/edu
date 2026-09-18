"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function VisitorCounter() {
  const [visitors, setVisitors] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get visitor count from localStorage
    const getVisitorCount = () => {
      try {
        // Get current count from localStorage
        const currentCount = localStorage.getItem('fct-visitor-count');
        const lastVisit = localStorage.getItem('fct-last-visit');
        const today = new Date().toDateString();
        
        let count = currentCount ? parseInt(currentCount) : 1000; // Start from 1000
        
        // Only increment if it's a new day or first visit
        if (!lastVisit || lastVisit !== today) {
          count += 1;
          localStorage.setItem('fct-visitor-count', count.toString());
          localStorage.setItem('fct-last-visit', today);
        }
        
        setVisitors(count);
      } catch (error) {
        // Fallback if localStorage is not available
        setVisitors(1000 + Math.floor(Math.random() * 500));
      } finally {
        setLoading(false);
      }
    };

    // Delay to avoid hydration mismatch
    const timer = setTimeout(() => {
      getVisitorCount();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-4"
      >
        <div className="text-sm text-muted-foreground">
          Đang tải số liệu truy cập...
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center py-4 border-t border-border/50"
    >
      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
        <span className="inline-flex items-center gap-1">
          <svg
            className="w-4 h-4 text-primary"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path
              fillRule="evenodd"
              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
              clipRule="evenodd"
            />
          </svg>
          Lượt truy cập:
        </span>
        <span className="font-semibold text-primary">
          {visitors.toLocaleString("vi-VN")}
        </span>
      </div>
    </motion.div>
  );
}