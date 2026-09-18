import type { Metadata } from "next";
import CountriesPageClient from "./CountriesPageClient";

export const metadata: Metadata = {
  title: "Du học các quốc gia | FCT Education",
  description:
    "Khám phá chương trình du học tại Đài Loan, Nhật Bản, Hàn Quốc, Úc, Canada, Đức. Chi phí, điều kiện, học bổng và thông tin chi tiết từng quốc gia.",
  openGraph: {
    title: "Du học các quốc gia | FCT Education",
    description: "Khám phá chương trình du học tại 6 quốc gia hàng đầu thế giới.",
  },
};

export default function CountriesPage() {
  return <CountriesPageClient />;
}
