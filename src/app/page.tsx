import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import CountriesSection from "@/components/sections/CountriesSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PartnersSection from "@/components/sections/PartnersSection";
import NewsSection from "@/components/sections/NewsSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "FCT Education - Chắp Cánh Ước Mơ Du Học",
  description:
    "Tư vấn du học Đài Loan, Nhật Bản, Hàn Quốc, Úc, Canada, Đức. Hỗ trợ hồ sơ từ A-Z, tỷ lệ đậu Visa 98%. 15+ năm kinh nghiệm, 100+ học viên thành công.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <CountriesSection />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <PartnersSection />
      <NewsSection />
      <CTASection />
    </>
  );
}
