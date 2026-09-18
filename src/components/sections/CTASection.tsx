"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { useState } from "react";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import ConsultationForm from "@/components/ui/ConsultationForm";
import { SITE_CONFIG } from "@/constants";

export default function CTASection() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              Tư vấn miễn phí — Không ràng buộc
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-6 leading-tight">
              Sẵn sàng chinh phục
              <br />
              <span className="text-secondary">giấc mơ du học?</span>
            </h2>

            <p className="text-white/80 text-lg md:text-xl mb-10 leading-relaxed">
              Đội ngũ chuyên viên của chúng tôi sẵn sàng hỗ trợ bạn 24/7.
              <br />
              Tư vấn miễn phí, không ràng buộc.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="xl"
                icon={<ArrowRight size={22} />}
                onClick={() => setOpen(true)}
              >
                Đăng ký ngay
              </Button>
              <a href={`tel:${SITE_CONFIG.phone}`}>
                <Button variant="white" size="xl" icon={<Phone size={22} />} iconPosition="left">
                  {SITE_CONFIG.phone}
                </Button>
              </a>
            </div>

            {/* Guarantee */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
              {[
                "✓ Tư vấn miễn phí",
                "✓ Không ràng buộc",
                "✓ Hỗ trợ 24/7",
                "✓ Bảo mật thông tin",
              ].map((item) => (
                <span key={item} className="text-white/80 text-sm font-medium">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Modal isOpen={open} onClose={() => setOpen(false)} title="Đăng ký tư vấn miễn phí" size="lg">
        <div className="p-6">
          <ConsultationForm onSuccess={() => setTimeout(() => setOpen(false), 3000)} />
        </div>
      </Modal>
    </>
  );
}
