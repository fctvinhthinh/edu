"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, DollarSign, Clock, Briefcase, GraduationCap } from "lucide-react";
import { countries } from "@/data/countries";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";

const filterOptions = ["Tất cả", "Chi phí thấp", "Học bổng nhiều", "Dễ Visa", "Cơ hội việc làm"];

export default function CountriesPageClient() {
  return (
    <>
      {/* Banner */}
      <section className="relative h-[50vh] min-h-[360px] bg-gradient-hero flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=1400&q=80"
            alt="Du học quốc tế"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <nav className="text-sm text-white/60 mb-3">
              <Link href="/" className="hover:text-white transition-colors">Trang chủ</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Quốc gia</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-4">
              Quốc gia <span className="text-secondary">du học</span>
            </h1>
            <p className="text-white/80 text-xl max-w-xl">
              Khám phá 4 điểm đến du học hàng đầu với đầy đủ thông tin chi phí, học bổng và cơ hội việc làm.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Country grid */}
      <section className="section-padding bg-muted dark:bg-gray-800/50">
        <div className="container">
          <SectionHeader
            badge="4 quốc gia"
            title="Chọn điểm đến phù hợp với bạn"
            subtitle="Mỗi quốc gia có những ưu điểm riêng. Hãy tìm hiểu và chọn lựa điểm đến phù hợp nhất với mục tiêu và điều kiện của bạn."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
            {countries.map((country, i) => (
              <motion.div
                key={country.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Link href={`/quoc-gia/${country.slug}`} className="group block bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-card hover:shadow-elevated hover:-translate-y-2 transition-all duration-400">
                  {/* Image */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={country.image}
                      alt={`Du học ${country.name}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 text-4xl">{country.flag}</div>
                    <div className="absolute bottom-4 left-4">
                      <h2 className="text-2xl font-bold font-heading text-white">{country.name}</h2>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5 line-clamp-2">
                      {country.description}
                    </p>

                    <div className="grid grid-cols-2 gap-3 mb-5">
                      <div className="flex items-start gap-2">
                        <DollarSign size={16} className="text-primary mt-0.5 shrink-0" />
                        <div>
                          <div className="text-xs text-muted-foreground">Chi phí / năm</div>
                          <div className="text-sm font-semibold text-foreground">{country.cost}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Clock size={16} className="text-primary mt-0.5 shrink-0" />
                        <div>
                          <div className="text-xs text-muted-foreground">Thời gian</div>
                          <div className="text-sm font-semibold text-foreground">{country.duration}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Briefcase size={16} className="text-primary mt-0.5 shrink-0" />
                        <div>
                          <div className="text-xs text-muted-foreground">Lương làm thêm</div>
                          <div className="text-sm font-semibold text-foreground line-clamp-1">{country.partTimeWage}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <GraduationCap size={16} className="text-primary mt-0.5 shrink-0" />
                        <div>
                          <div className="text-xs text-muted-foreground">Trường đối tác</div>
                          <div className="text-sm font-semibold text-foreground">{country.topUniversities.length}+ trường</div>
                        </div>
                      </div>
                    </div>

                    {/* Pros */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {country.pros.slice(0, 3).map((pro) => (
                        <Badge key={pro} variant="primary" className="text-xs">{pro}</Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-sm text-muted-foreground">{country.topUniversities.length} trường hàng đầu</span>
                      <span className="flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                        Tìm hiểu ngay <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container">
          <SectionHeader
            badge="So sánh"
            title="So sánh nhanh các quốc gia"
          />
          <div className="mt-10 overflow-x-auto rounded-2xl border border-border shadow-card">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="text-left p-4 font-semibold">Quốc gia</th>
                  <th className="text-left p-4 font-semibold">Chi phí/năm</th>
                  <th className="text-left p-4 font-semibold">Lương làm thêm</th>
                  <th className="text-left p-4 font-semibold">Điều kiện ngoại ngữ</th>
                  <th className="text-left p-4 font-semibold">Học bổng</th>
                </tr>
              </thead>
              <tbody>
                {countries.map((c, i) => (
                  <motion.tr
                    key={c.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className={`border-t border-border hover:bg-primary/5 transition-colors ${i % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-muted/50 dark:bg-gray-800/50"}`}
                  >
                    <td className="p-4 font-semibold text-foreground">
                      <span className="mr-2">{c.flag}</span>{c.name}
                    </td>
                    <td className="p-4 text-muted-foreground">{c.cost}</td>
                    <td className="p-4 text-muted-foreground">{c.partTimeWage}</td>
                    <td className="p-4 text-muted-foreground">{c.conditions[c.conditions.length - 1]}</td>
                    <td className="p-4">
                      <Badge variant="success" className="text-xs">Có học bổng</Badge>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
