"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  FileText,
  DollarSign,
  BookOpen,
  Plane,
  Briefcase,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/data/services";
import SectionHeader from "@/components/ui/SectionHeader";

const icons: Record<string, LucideIcon> = {
  GraduationCap,
  FileText,
  DollarSign,
  BookOpen,
  Plane,
  Briefcase,
};

const iconColors = [
  "bg-blue-50 text-blue-600",
  "bg-purple-50 text-purple-600",
  "bg-green-50 text-green-600",
  "bg-orange-50 text-orange-600",
  "bg-pink-50 text-pink-600",
  "bg-teal-50 text-teal-600",
];

export default function ServicesSection() {
  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="container">
        <SectionHeader
          badge="Dịch vụ"
          title="Dịch vụ toàn diện của chúng tôi"
          subtitle="Hỗ trợ bạn từ bước đầu tiên đến khi ổn định cuộc sống nơi đất khách, với đội ngũ chuyên nghiệp và tận tâm."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {services.map((service, i) => {
            const Icon = icons[service.icon] || GraduationCap;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 border border-border/50"
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${iconColors[i]} group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={26} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold font-heading text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
