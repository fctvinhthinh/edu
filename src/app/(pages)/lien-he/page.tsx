import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Liên hệ | FCT Education",
  description:
    "Liên hệ FCT Education để được tư vấn du học miễn phí. Hotline: 0902 345 678. Địa chỉ: 123 Nguyễn Huệ, Quận 1, TP.HCM.",
  openGraph: {
    title: "Liên hệ FCT Education",
    description: "Đặt lịch tư vấn du học miễn phí với chuyên gia FCT Education.",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
