"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/constants";
import SectionHeader from "@/components/ui/SectionHeader";

export default function ProcessSection() {
  return (
    <section className="section-padding bg-muted dark:bg-gray-800/50">
      <div className="container">
        <SectionHeader
          badge="Quy trình"
          title="Quy trình tư vấn du học"
          subtitle="6 bước đơn giản để bắt đầu hành trình du học của bạn cùng FCT Education."
        />

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:block mt-16">
          <div className="relative">
            {/* Line */}
            <div className="absolute top-10 left-0 right-0 h-0.5 bg-border" />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute top-10 left-0 right-0 h-0.5 bg-gradient-primary origin-left"
            />

            <div className="grid grid-cols-6 gap-4">
              {PROCESS_STEPS.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Circle */}
                  <div className="relative z-10 w-20 h-20 bg-white dark:bg-gray-800 border-4 border-primary rounded-full flex flex-col items-center justify-center shadow-elevated mb-4 group-hover:bg-primary transition-colors">
                    <span className="text-xs text-primary font-semibold">Bước</span>
                    <span className="text-xl font-bold text-primary font-heading">{step.step}</span>
                  </div>
                  <h4 className="font-bold text-foreground font-heading mb-1">{step.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden mt-10">
          <div className="relative pl-8">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />

            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative mb-8 last:mb-0"
              >
                {/* Dot */}
                <div className="absolute -left-8 top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {step.step}
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-card ml-2">
                  <h4 className="font-bold text-foreground font-heading mb-1">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
