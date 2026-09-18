import type { Metadata } from "next";
import NewsPageClient from "./NewsPageClient";

export const metadata: Metadata = {
  title: "Tin tức & Kinh nghiệm du học | FCT Education",
  description:
    "Cập nhật tin tức mới nhất về du học, học bổng, kinh nghiệm từ học viên và thông tin tuyển sinh từ các trường đại học quốc tế.",
  openGraph: {
    title: "Tin tức & Kinh nghiệm du học | FCT Education",
    description: "Tin tức du học mới nhất từ FCT Education.",
  },
};

export default function NewsPage() {
  return <NewsPageClient />;
}
