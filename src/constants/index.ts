import type { NavItem } from "@/types";

export const SITE_CONFIG = {
  name: "FCT Education",
  tagline: "Chắp Cánh Ước Mơ Du Học",
  description:
    "Tư vấn du học Đài Loan, Nhật Bản, Hàn Quốc và nhiều quốc gia khác. Hỗ trợ hồ sơ từ A-Z.",
  url: "https://fcteducation.vn",
  phone: "039 565 4744",
  email: "duhocfct@gmail.com",
  address: "Tầng 3, Toà nhà Ngôi sao, Phường Định Công, Hà Nội",
  facebook: "https://www.facebook.com/profile.php?id=61591280713408",
  zalo: "https://zalo.me/0395654744",
  youtube: "https://youtube.com/fcteducation",
  hotline: "039 565 4744",
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Trang chủ", href: "/" },
  { label: "Giới thiệu", href: "/gioi-thieu" },
  {
    label: "Quốc gia",
    href: "/quoc-gia",
    children: [
      { label: "Đài Loan", href: "/quoc-gia/dai-loan" },
      { label: "Trung Quốc", href: "/quoc-gia/trung-quoc" },
      { label: "Nhật Bản", href: "/quoc-gia/nhat-ban" },
      { label: "Hàn Quốc", href: "/quoc-gia/han-quoc" },
    ],
  },
  { label: "Chương trình", href: "/chuong-trinh" },
  { label: "Tin tức", href: "/tin-tuc" },
  { label: "Học bổng", href: "/hoc-bong" },
  { label: "Liên hệ", href: "/lien-he" },
];

export const PROCESS_STEPS = [
  { step: 1, title: "Đăng ký", description: "Điền form đăng ký tư vấn miễn phí" },
  { step: 2, title: "Tư vấn", description: "Gặp chuyên viên tư vấn 1-1" },
  { step: 3, title: "Chuẩn bị hồ sơ", description: "Hỗ trợ chuẩn bị hồ sơ đầy đủ" },
  { step: 4, title: "Xin Visa", description: "Nộp hồ sơ và xin Visa" },
  { step: 5, title: "Bay", description: "Hỗ trợ đặt vé và đón sân bay" },
  { step: 6, title: "Hỗ trợ sau nhập học", description: "Đồng hành suốt quá trình học" },
];
