"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, DollarSign } from "lucide-react";
import { featuredCountries } from "@/data/countries";
import SectionHeader from "@/components/ui/SectionHeader";

export default function CountriesSection() {
  return (
    <section id="countries" className="section-padding bg-muted dark:bg-gray-800/50">
      <div className="container">
        <SectionHeader
          badge="Điểm đến"
          title="Quốc gia du học phổ biến"
          subtitle="Khám phá các điểm đến du học hàng đầu với chi phí hợp lý, chất lượng đào tạo cao và cơ hội việc làm tốt."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {featuredCountries.map((country, i) => (
            <motion.div
              key={country.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Link href={`/quoc-gia/${country.slug}`} className="block group">
                <div className="relative overflow-hidden rounded-2xl shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-2">
                  {/* Image */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={country.image}
                      alt={country.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent" />

                    {/* Flag */}
                    <div className="absolute top-4 left-4 text-3xl">{country.flag}</div>

                    {/* Content overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="text-white font-bold text-xl font-heading mb-3">{country.name}</h3>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-white/80 text-sm">
                          <DollarSign size={14} className="text-secondary shrink-0" />
                          <span>{country.cost}</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/80 text-sm">
                          <Clock size={14} className="text-secondary shrink-0" />
                          <span>Thời gian: {country.duration}</span>
                        </div>
                      </div>

                      {/* Pros */}
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {country.pros.slice(0, 2).map((pro) => (
                          <span
                            key={pro}
                            className="text-xs bg-white/20 backdrop-blur-sm text-white px-2 py-0.5 rounded-full"
                          >
                            {pro}
                          </span>
                        ))}
                      </div>

                      {/* Button */}
                      <div className="mt-4 flex items-center text-secondary text-sm font-semibold group-hover:gap-2 transition-all gap-1">
                        Tìm hiểu thêm <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            href="/quoc-gia"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all duration-300"
          >
            Xem tất cả quốc gia <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
