"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

const partnerNames = [
  "National Taiwan University",
  "Waseda University",
  "Yonsei University",
  "University of Melbourne",
  "University of Toronto",
  "TU Munich",
  "NTHU Taiwan",
  "Osaka University",
  "Korea University",
  "UBC Canada",
  "Heidelberg University",
  "McGill University",
];

export default function PartnersSection() {
  const doubled = [...partnerNames, ...partnerNames];

  return (
    <section className="section-padding bg-muted dark:bg-gray-800/50">
      <div className="container">
        <SectionHeader
          badge="Đối tác"
          title="10+ trường đại học đối tác"
          subtitle="Hợp tác với các trường đại học danh tiếng trên toàn thế giới để đảm bảo quyền lợi tốt nhất cho học viên."
        />
      </div>

      {/* Infinite slider */}
      <div className="mt-12 overflow-hidden">
        <div className="flex gap-6 animate-marquee w-max">
          {doubled.map((name, i) => (
            <div
              key={i}
              className="flex items-center justify-center px-8 py-4 bg-white dark:bg-gray-800 rounded-2xl shadow-soft border border-border whitespace-nowrap min-w-[200px] hover:shadow-card hover:border-primary/30 transition-all duration-300"
            >
              <span className="text-sm font-semibold text-foreground/70">{name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="container mt-12">
        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
          {[
            { value: "10+", label: "Đại học đối tác" },
            { value: "6", label: "Quốc gia" },
            { value: "100%", label: "Được công nhận" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl font-bold text-primary font-heading">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
