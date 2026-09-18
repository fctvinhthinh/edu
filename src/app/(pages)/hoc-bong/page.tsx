import type { Metadata } from "next";
import ScholarshipsPageClient from "./ScholarshipsPageClient";

export const metadata: Metadata = {
  title: "Học bổng du học | FCT Education",
  description:
    "Tổng hợp học bổng du học hấp dẫn tại Nhật Bản, Hàn Quốc, Đài Loan, Úc, Canada, Đức. Cập nhật deadline, điều kiện và mức hỗ trợ mới nhất.",
  openGraph: {
    title: "Học bổng du học | FCT Education",
    description: "Tổng hợp học bổng du học hấp dẫn nhất từ FCT Education.",
  },
};

export default function ScholarshipsPage() {
  return <ScholarshipsPageClient />;
}
