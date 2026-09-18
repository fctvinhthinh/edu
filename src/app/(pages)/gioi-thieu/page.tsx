import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "Giới thiệu | FCT Education - 15 năm kinh nghiệm du học",
  description:
    "FCT Education - Hơn 15 năm kinh nghiệm tư vấn du học quốc tế. Đội ngũ chuyên gia tận tâm, tỷ lệ đậu Visa 98%, đồng hành cùng 5000+ học viên.",
  openGraph: {
    title: "Giới thiệu FCT Education",
    description: "Hơn 15 năm kinh nghiệm tư vấn du học quốc tế.",
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
