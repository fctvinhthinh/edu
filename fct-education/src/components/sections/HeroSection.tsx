"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import ConsultationForm from "@/components/ui/ConsultationForm";

// Ảnh thực của FCT Education
const heroImages = [
  { src: "/images/hero-students.jpg", alt: "Học viên FCT Education trong lớp học" },
  { src: "/images/hero-students-2.jpg", alt: "Học viên FCT Education" },
  { src: "/images/hero-students-3.jpg", alt: "Hoạt động FCT Education" },
  { src: "/images/hero-students-4.webp", alt: "Học viên FCT Education 4" },
  { src: "/images/hero-students-5.webp", alt: "Học viên FCT Education 5" },
];

export default function HeroSection() {
  const [consultOpen, setConsultOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);

  // Tự động chuyển ảnh mỗi 4 giây
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const prevImg = () => setCurrentImg((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  const nextImg = () => setCurrentImg((prev) => (prev + 1) % heroImages.length);

  return (
    <>
      <section className="relative min-h-screen bg-gradient-hero overflow-hidden flex items-center">
        {/* Background blur blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-700/20 rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10 pt-24 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* ─── LEFT: nội dung ─── */}
            <div>
              {/* Badge đánh giá */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
              >
                <span className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="fill-secondary text-secondary" />
                  ))}
                </span>
                <span>Tin tưởng bởi 100+ học viên</span>
              </motion.div>

              {/* Tiêu đề */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white leading-tight mb-6"
              >
                Chắp Cánh
                <br />
                <span className="text-secondary">Ước Mơ</span>
                <br />
                Du Học
              </motion.h1>

              {/* Mô tả */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-lg"
              >
                Tư vấn du học Đài Loan, Nhật Bản, Hàn Quốc và nhiều quốc gia khác.
                <br />
                Hỗ trợ hồ sơ từ A-Z với tỷ lệ đậu Visa 98%.
              </motion.p>

              {/* Nút hành động */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  variant="secondary"
                  size="lg"
                  icon={<ArrowRight size={20} />}
                  onClick={() => setConsultOpen(true)}
                >
                  Đăng ký tư vấn
                </Button>
                <Button
                  variant="white"
                  size="lg"
                  icon={<ArrowRight size={20} />}
                  onClick={() => {
                    document.getElementById("countries")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Khám phá chương trình
                </Button>
              </motion.div>

              {/* Social proof — dùng ảnh thực */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex items-center gap-6 mt-10"
              >
                <div className="flex -space-x-3">
                  {[
                    "/images/hero-students.jpg",
                    "/images/hero-students-2.jpg",
                    "/images/hero-students-3.jpg",
                    "/images/hero-students-4.webp",
                  ].map((src, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white overflow-hidden relative"
                    >
                      <Image
                        src={src}
                        alt={`Học viên ${i + 1}`}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-white font-bold">100+ học viên</div>
                  <div className="text-white/60 text-sm">đã tin tưởng FCT Education</div>
                </div>
              </motion.div>
            </div>

            {/* ─── RIGHT: Slideshow ảnh thực ─── */}
            <div className="relative hidden lg:block">
              {/* Vòng trang trí nền */}
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-secondary/20 rounded-full blur-2xl animate-float-slow" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-accent/20 rounded-full blur-2xl animate-float" />

              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative"
              >
                {/* Khung ảnh slideshow */}
                <div className="relative w-full aspect-[4/3] max-w-lg mx-auto rounded-3xl overflow-hidden shadow-2xl">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImg}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={heroImages[currentImg].src}
                        alt={heroImages[currentImg].alt}
                        fill
                        className="object-cover object-center"
                        priority={currentImg === 0}
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Gradient overlay phía dưới */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-transparent" />

                  {/* Điều hướng slideshow */}
                  <button
                    onClick={prevImg}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors"
                    aria-label="Ảnh trước"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={nextImg}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors"
                    aria-label="Ảnh sau"
                  >
                    <ChevronRight size={18} />
                  </button>

                  {/* Dots chỉ số ảnh */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {heroImages.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentImg(i)}
                        className={`transition-all duration-300 rounded-full ${
                          i === currentImg
                            ? "w-6 h-2 bg-secondary"
                            : "w-2 h-2 bg-white/50 hover:bg-white/80"
                        }`}
                        aria-label={`Ảnh ${i + 1}`}
                      />
                    ))}
                  </div>

                  {/* Label ảnh thực */}
                  <div className="absolute top-4 left-4 bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-medium px-3 py-1.5 rounded-full">
                    📸 Học viên FCT Education
                  </div>
                </div>

                {/* Floating card — Visa */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -left-10 top-1/4 bg-white rounded-2xl shadow-card p-4 flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                    <span className="text-green-600 text-xl">✓</span>
                  </div>
                  <div>
                    <div className="font-bold text-sm text-foreground">Visa thành công</div>
                    <div className="text-xs text-muted-foreground">Tỷ lệ đậu 98%</div>
                  </div>
                </motion.div>

                {/* Floating card — Số học viên */}
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -right-8 bottom-1/4 bg-white rounded-2xl shadow-card p-4"
                >
                  <div className="text-2xl font-bold text-primary font-heading">100+</div>
                  <div className="text-xs text-muted-foreground">Học viên thành công</div>
                </motion.div>
              </motion.div>

              {/* Nút xem video */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setVideoOpen(true)}
                className="absolute bottom-4 left-0 flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-3 rounded-2xl hover:bg-white/20 transition-colors"
              >
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                  <Play size={16} className="text-foreground ml-0.5" fill="currentColor" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Xem video giới thiệu</div>
                  <div className="text-white/60 text-xs">2 phút</div>
                </div>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Chỉ báo cuộn xuống */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/60 text-xs">Cuộn xuống</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-white/60 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Modal tư vấn */}
      <Modal isOpen={consultOpen} onClose={() => setConsultOpen(false)} title="Đăng ký tư vấn miễn phí" size="lg">
        <div className="p-6">
          <ConsultationForm onSuccess={() => setTimeout(() => setConsultOpen(false), 3000)} />
        </div>
      </Modal>

      {/* Modal video */}
      <Modal isOpen={videoOpen} onClose={() => setVideoOpen(false)} size="xl">
        <div className="aspect-video">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
            className="w-full h-full"
            allowFullScreen
            allow="autoplay"
            title="FCT Education Video"
          />
        </div>
      </Modal>
    </>
  );
}
