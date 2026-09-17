"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  DollarSign, Clock, Briefcase, CheckCircle,
  GraduationCap, ChevronDown, MapPin, ArrowRight,
} from "lucide-react";
import type { Country } from "@/types";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Modal from "@/components/ui/Modal";
import ConsultationForm from "@/components/ui/ConsultationForm";
import { countries } from "@/data/countries";

interface Props { country: Country }

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-muted transition-colors"
      >
        <span className="font-semibold text-foreground pr-4">{question}</span>
        <ChevronDown
          size={20}
          className={`text-primary shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-5 pb-5 text-muted-foreground leading-relaxed border-t border-border pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function CountryDetailClient({ country }: Props) {
  const [consultOpen, setConsultOpen] = useState(false);
  const related = countries.filter((c) => c.slug !== country.slug).slice(0, 3);

  return (
    <>
      {/* Hero banner */}
      <section className="relative h-[65vh] min-h-[420px] flex items-end overflow-hidden">
        <Image
          src={country.image}
          alt={`Du học ${country.name}`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent" />
        <div className="container relative z-10 pb-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <nav className="text-sm text-white/60 mb-4">
              <Link href="/" className="hover:text-white transition-colors">Trang chủ</Link>
              <span className="mx-2">/</span>
              <Link href="/quoc-gia" className="hover:text-white transition-colors">Quốc gia</Link>
              <span className="mx-2">/</span>
              <span className="text-white">{country.name}</span>
            </nav>
            <div className="flex items-center gap-4 mb-3">
              <span className="text-6xl">{country.flag}</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white">
                Du học {country.name}
              </h1>
            </div>
            <p className="text-white/80 text-lg max-w-2xl">{country.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Quick stats bar */}
      <section className="bg-primary text-white py-5">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-x divide-white/20">
            {[
              { icon: DollarSign, label: "Chi phí/năm", value: country.cost },
              { icon: Clock, label: "Thời gian", value: country.duration },
              { icon: Briefcase, label: "Lương làm thêm", value: country.partTimeWage.split(" ")[0] + " " + country.partTimeWage.split(" ")[1] },
              { icon: GraduationCap, label: "Trường đối tác", value: `${country.topUniversities.length}+ trường` },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 pl-4 first:pl-0">
                <item.icon size={22} className="text-secondary shrink-0" />
                <div>
                  <div className="text-xs text-white/70">{item.label}</div>
                  <div className="font-bold text-sm">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-12">

            {/* Conditions */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-bold font-heading text-foreground mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center text-sm font-bold">1</span>
                Điều kiện tuyển sinh
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {country.conditions.map((cond) => (
                  <div key={cond} className="flex items-start gap-3 bg-muted dark:bg-gray-800 rounded-xl p-4">
                    <CheckCircle size={18} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground text-sm">{cond}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Top universities */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-bold font-heading text-foreground mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center text-sm font-bold">2</span>
                Các trường đại học hàng đầu
              </h2>
              <div className="space-y-3">
                {country.topUniversities.map((uni, i) => (
                  <motion.div
                    key={uni.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-4 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-soft border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold shrink-0">
                      {i + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground">{uni.name}</h3>
                      <div className="flex items-center gap-3 mt-0.5">
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <MapPin size={12} /> {uni.location}
                        </span>
                        {uni.ranking && (
                          <Badge variant="primary" className="text-xs">{uni.ranking}</Badge>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Scholarships */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-bold font-heading text-foreground mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center text-sm font-bold">3</span>
                Học bổng tiêu biểu
              </h2>
              <div className="space-y-3">
                {country.scholarships.map((s, i) => (
                  <div key={i} className="flex items-start gap-3 bg-secondary/10 dark:bg-yellow-900/20 rounded-xl p-4 border border-secondary/30">
                    <span className="text-secondary text-xl shrink-0">🎓</span>
                    <span className="text-foreground text-sm">{s}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Part-time work */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-bold font-heading text-foreground mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center text-sm font-bold">4</span>
                Đi làm thêm
              </h2>
              <div className="bg-gradient-primary text-white rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Briefcase size={28} />
                  </div>
                  <div>
                    <div className="text-white/80 text-sm">Mức lương tối thiểu</div>
                    <div className="text-2xl font-bold font-heading">{country.partTimeWage}</div>
                  </div>
                </div>
                <p className="text-white/80 text-sm leading-relaxed">
                  Sinh viên có thể làm thêm hợp pháp tại {country.name} trong thời gian học. Đây là cơ hội tốt để trang trải chi phí sinh hoạt và tích lũy kinh nghiệm làm việc quốc tế.
                </p>
              </div>
            </motion.section>

            {/* Top cities */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-bold font-heading text-foreground mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center text-sm font-bold">5</span>
                Thành phố phổ biến
              </h2>
              <div className="flex flex-wrap gap-3">
                {country.topCities.map((city) => (
                  <div
                    key={city}
                    className="flex items-center gap-2 bg-white dark:bg-gray-800 border border-border rounded-xl px-4 py-2.5 shadow-soft hover:border-primary/40 hover:shadow-card transition-all duration-300"
                  >
                    <MapPin size={16} className="text-primary" />
                    <span className="font-medium text-foreground">{city}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* FAQ */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-bold font-heading text-foreground mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center text-sm font-bold">6</span>
                Câu hỏi thường gặp
              </h2>
              <div className="space-y-3">
                {country.faqs.map((faq) => (
                  <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* CTA card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-primary text-white rounded-2xl p-6 sticky top-24"
            >
              <div className="text-3xl mb-3">{country.flag}</div>
              <h3 className="text-xl font-bold font-heading mb-2">
                Đăng ký tư vấn du học {country.name}
              </h3>
              <p className="text-white/80 text-sm mb-5">
                Nhận tư vấn miễn phí từ chuyên gia FCT Education với kinh nghiệm thực tế tại {country.name}.
              </p>
              <Button
                variant="secondary"
                size="md"
                className="w-full"
                onClick={() => setConsultOpen(true)}
              >
                Đăng ký ngay — Miễn phí
              </Button>
              <div className="mt-4 text-center text-white/60 text-xs">
                Phản hồi trong vòng 24 giờ
              </div>
            </motion.div>

            {/* Pros */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-card border border-border"
            >
              <h3 className="font-bold font-heading text-foreground mb-4">✨ Ưu điểm nổi bật</h3>
              <div className="space-y-2">
                {country.pros.map((pro) => (
                  <div key={pro} className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-green-500 shrink-0" />
                    <span className="text-sm text-foreground">{pro}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Related countries */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-card border border-border"
            >
              <h3 className="font-bold font-heading text-foreground mb-4">🌍 Quốc gia khác</h3>
              <div className="space-y-3">
                {related.map((c) => (
                  <Link
                    key={c.id}
                    href={`/quoc-gia/${c.slug}`}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted transition-colors group"
                  >
                    <span className="text-2xl">{c.flag}</span>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-foreground text-sm">{c.name}</div>
                      <div className="text-xs text-muted-foreground truncate">{c.cost}</div>
                    </div>
                    <ArrowRight size={16} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
                <Link
                  href="/quoc-gia"
                  className="flex items-center justify-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all pt-2"
                >
                  Xem tất cả <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Consultation Modal */}
      <Modal
        isOpen={consultOpen}
        onClose={() => setConsultOpen(false)}
        title={`Đăng ký tư vấn du học ${country.name}`}
        size="lg"
      >
        <div className="p-6">
          <ConsultationForm onSuccess={() => setTimeout(() => setConsultOpen(false), 3000)} />
        </div>
      </Modal>
    </>
  );
}
