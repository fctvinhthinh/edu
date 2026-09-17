"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { useState } from "react";
import { testimonials } from "@/data/testimonials";
import SectionHeader from "@/components/ui/SectionHeader";

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="container">
        <SectionHeader
          badge="Học viên"
          title="Học viên nói gì về chúng tôi"
          subtitle="Hơn 100 học viên đã tin tưởng FCT Education trên hành trình chinh phục giấc mơ du học."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Featured testimonial */}
          <motion.div
            key={active}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-gradient-primary text-white rounded-3xl p-8 relative overflow-hidden"
          >
            {/* Background quote */}
            <Quote
              size={120}
              className="absolute -top-4 -right-4 text-white/10"
              strokeWidth={1}
            />

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[active].rating)].map((_, i) => (
                <Star key={i} size={20} className="fill-secondary text-secondary" />
              ))}
            </div>

            {/* Content */}
            <blockquote className="text-white/90 text-lg leading-relaxed mb-8 relative z-10">
              &ldquo;{testimonials[active].content}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4">
              <Image
                src={testimonials[active].avatar}
                alt={testimonials[active].name}
                width={56}
                height={56}
                className="w-14 h-14 rounded-full border-2 border-white/30 object-cover"
              />
              <div>
                <div className="font-bold text-white font-heading">{testimonials[active].name}</div>
                <div className="text-white/70 text-sm">
                  {testimonials[active].university}
                </div>
                <div className="text-secondary text-sm font-medium">
                  {testimonials[active].country} • {testimonials[active].year}
                </div>
              </div>
            </div>
          </motion.div>

          {/* List */}
          <div className="space-y-4">
            {testimonials.map((t, i) => (
              <motion.button
                key={t.id}
                onClick={() => setActive(i)}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 ${
                  active === i
                    ? "border-primary bg-primary/5 shadow-card"
                    : "border-border bg-white dark:bg-gray-800 hover:border-primary/40"
                }`}
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-foreground text-sm">{t.name}</span>
                      <span className="text-xs text-muted-foreground">• {t.country}</span>
                    </div>
                    <p className="text-xs text-muted-foreground truncate">{t.content}</p>
                  </div>
                  <div className="flex gap-0.5 shrink-0">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} size={12} className="fill-secondary text-secondary" />
                    ))}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
