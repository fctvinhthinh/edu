"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, CheckCircle, Filter, ArrowRight, GraduationCap, DollarSign } from "lucide-react";
import { scholarships } from "@/data/scholarships";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import ConsultationForm from "@/components/ui/ConsultationForm";

const countryFilters = ["Tất cả", "Đài Loan", "Trung Quốc", "Nhật Bản", "Hàn Quốc"];
const levelFilters = ["Tất cả", "Đại học", "Thạc sĩ", "Tiến sĩ"];

const countryFlags: Record<string, string> = {
  "Đài Loan": "🇹🇼",
  "Trung Quốc": "🇨🇳",
  "Nhật Bản": "🇯🇵",
  "Hàn Quốc": "🇰🇷",
};

function getDaysLeft(deadline: string): number {
  const today = new Date();
  const d = new Date(deadline);
  return Math.ceil((d.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
}

export default function ScholarshipsPageClient() {
  const [activeCountry, setActiveCountry] = useState("Tất cả");
  const [activeLevel, setActiveLevel] = useState("Tất cả");
  const [consultOpen, setConsultOpen] = useState(false);
  const [selectedScholarship, setSelectedScholarship] = useState<string>("");

  const filtered = scholarships.filter((s) => {
    const matchCountry = activeCountry === "Tất cả" || s.country === activeCountry;
    const matchLevel = activeLevel === "Tất cả" || s.level.includes(activeLevel);
    return matchCountry && matchLevel;
  });

  return (
    <>
      {/* Banner */}
      <section className="relative h-[50vh] min-h-[360px] bg-gradient-hero flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1400&q=80"
            alt="Học bổng du học"
            fill
            className="object-cover opacity-15"
            priority
          />
        </div>
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <nav className="text-sm text-white/60 mb-3">
              <Link href="/" className="hover:text-white transition-colors">Trang chủ</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Học bổng</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-3">
              Học bổng <span className="text-secondary">du học 2025</span>
            </h1>
            <p className="text-white/80 text-lg max-w-xl">
              Cơ hội học bổng hấp dẫn từ các chính phủ và trường đại học danh tiếng thế giới. Cập nhật deadline mới nhất.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-muted dark:bg-gray-800/50">
        <div className="container">
          <SectionHeader
            badge={`${scholarships.length} học bổng`}
            title="Danh sách học bổng tiêu biểu"
            subtitle="Tổng hợp các học bổng du học uy tín nhất, được FCT Education chọn lọc và cập nhật thường xuyên."
          />

          {/* Filters */}
          <div className="mt-10 space-y-4">
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <Filter size={16} className="text-primary" /> Quốc gia:
              </div>
              {countryFilters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveCountry(f)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    activeCountry === f
                      ? "bg-primary text-white shadow-elevated"
                      : "bg-white dark:bg-gray-800 text-foreground border border-border hover:border-primary/40"
                  }`}
                >
                  {f !== "Tất cả" && countryFlags[f]} {f}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <GraduationCap size={16} className="text-primary" /> Bậc học:
              </div>
              {levelFilters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveLevel(f)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    activeLevel === f
                      ? "bg-primary text-white shadow-elevated"
                      : "bg-white dark:bg-gray-800 text-foreground border border-border hover:border-primary/40"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Scholarship grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
            {filtered.map((scholarship, i) => {
              const daysLeft = getDaysLeft(scholarship.deadline);
              const isUrgent = daysLeft <= 30 && daysLeft > 0;
              const isExpired = daysLeft <= 0;

              return (
                <motion.div
                  key={scholarship.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 flex flex-col border border-border"
                >
                  {/* Header */}
                  <div className={`p-5 ${isExpired ? "bg-gray-100 dark:bg-gray-700/50" : "bg-gradient-primary"} text-white`}>
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-3xl">{countryFlags[scholarship.country]}</span>
                      {!isExpired && (
                        <Badge
                          variant={isUrgent ? "warning" : "success"}
                          className="text-xs"
                        >
                          {isUrgent ? `⏰ Còn ${daysLeft} ngày` : "Đang mở"}
                        </Badge>
                      )}
                      {isExpired && <Badge variant="muted" className="text-xs">Đã hết hạn</Badge>}
                    </div>
                    <h3 className={`font-bold font-heading text-base leading-snug ${isExpired ? "text-gray-500" : "text-white"}`}>
                      {scholarship.title}
                    </h3>
                  </div>

                  {/* Body */}
                  <div className="p-5 flex-1 flex flex-col">
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
                      {scholarship.description}
                    </p>

                    <div className="space-y-3 mb-5">
                      <div className="flex items-start gap-2">
                        <DollarSign size={15} className="text-primary mt-0.5 shrink-0" />
                        <div>
                          <span className="text-xs text-muted-foreground block">Giá trị</span>
                          <span className="text-sm font-semibold text-foreground">{scholarship.value}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Calendar size={15} className="text-primary mt-0.5 shrink-0" />
                        <div>
                          <span className="text-xs text-muted-foreground block">Deadline</span>
                          <span className={`text-sm font-semibold ${isUrgent ? "text-orange-500" : isExpired ? "text-gray-400" : "text-foreground"}`}>
                            {new Date(scholarship.deadline).toLocaleDateString("vi-VN")}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <GraduationCap size={15} className="text-primary mt-0.5 shrink-0" />
                        <div>
                          <span className="text-xs text-muted-foreground block">Bậc học</span>
                          <span className="text-sm font-semibold text-foreground">{scholarship.level}</span>
                        </div>
                      </div>
                    </div>

                    {/* Conditions */}
                    <div className="mb-5">
                      <p className="text-xs font-semibold text-muted-foreground mb-2">ĐIỀU KIỆN:</p>
                      <div className="space-y-1.5">
                        {scholarship.conditions.slice(0, 3).map((c) => (
                          <div key={c} className="flex items-start gap-2">
                            <CheckCircle size={13} className="text-green-500 mt-0.5 shrink-0" />
                            <span className="text-xs text-foreground">{c}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 mt-auto">
                      <Button
                        variant="primary"
                        size="sm"
                        className="flex-1"
                        disabled={isExpired}
                        onClick={() => {
                          setSelectedScholarship(scholarship.title);
                          setConsultOpen(true);
                        }}
                      >
                        Đăng ký ngay
                      </Button>
                      <Button variant="outline" size="sm" icon={<ArrowRight size={14} />}>
                        Chi tiết
                      </Button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">
              <div className="text-5xl mb-4">🎓</div>
              <p className="text-lg font-medium">Không tìm thấy học bổng phù hợp</p>
              <p className="text-sm mt-2">Thử thay đổi bộ lọc</p>
            </div>
          )}

          {/* Info section */}
          <div className="mt-16 bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-card border border-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold font-heading text-foreground mb-4">
                  Cần hỗ trợ đăng ký học bổng?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  FCT Education có đội ngũ chuyên gia học bổng giàu kinh nghiệm, đã hỗ trợ hơn 200 học viên nhận học bổng toàn phần. Chúng tôi hỗ trợ từ khâu chọn học bổng, chuẩn bị hồ sơ đến nộp đơn.
                </p>
                <div className="space-y-2 mb-6">
                  {[
                    "Tư vấn chọn học bổng phù hợp",
                    "Hỗ trợ viết personal statement",
                    "Chuẩn bị hồ sơ và thư giới thiệu",
                    "Hỗ trợ phỏng vấn học bổng",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle size={18} className="text-primary shrink-0" />
                      <span className="text-foreground text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <Button variant="primary" size="lg" onClick={() => setConsultOpen(true)}>
                  Tư vấn học bổng miễn phí
                </Button>
              </div>
              <div className="relative aspect-square max-w-sm mx-auto">
                <Image
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=500&q=80"
                  alt="Học bổng du học"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal
        isOpen={consultOpen}
        onClose={() => setConsultOpen(false)}
        title={selectedScholarship ? `Đăng ký: ${selectedScholarship}` : "Tư vấn học bổng miễn phí"}
        size="lg"
      >
        <div className="p-6">
          <ConsultationForm onSuccess={() => setTimeout(() => setConsultOpen(false), 3000)} />
        </div>
      </Modal>
    </>
  );
}
