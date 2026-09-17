"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  centered = true,
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(centered && "text-center", className)}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold">
            <span className="w-2 h-2 rounded-full bg-primary" />
            {badge}
          </span>
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-bold font-heading leading-tight",
          light ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={cn(
            "mt-4 text-lg leading-relaxed",
            centered && "max-w-2xl mx-auto",
            light ? "text-white/80" : "text-muted-foreground"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
