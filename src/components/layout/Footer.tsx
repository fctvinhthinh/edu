import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Youtube, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/constants";
import VisitorCounter from "@/components/ui/VisitorCounter";

const footerLinks = {
  services: [
    { label: "Tư vấn du học", href: "/dich-vu" },
    { label: "Xin Visa", href: "/dich-vu" },
    { label: "Chứng minh tài chính", href: "/dich-vu" },
    { label: "Đào tạo ngoại ngữ", href: "/dich-vu" },
    { label: "Đón sân bay", href: "/dich-vu" },
    { label: "Hỗ trợ việc làm", href: "/dich-vu" },
  ],
  countries: [
    { label: "Du học Đài Loan", href: "/quoc-gia/dai-loan" },
    { label: "Du học Nhật Bản", href: "/quoc-gia/nhat-ban" },
    { label: "Du học Hàn Quốc", href: "/quoc-gia/han-quoc" },
    { label: "Du học Úc", href: "/quoc-gia/uc" },
    { label: "Du học Canada", href: "/quoc-gia/canada" },
    { label: "Du học Đức", href: "/quoc-gia/duc" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                {/* Graduation cap icon */}
                <svg
                  className="w-7 h-7 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                </svg>
                {/* Decorative dots */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <div className="font-bold text-xl font-heading text-white leading-none bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  FCT Education
                </div>
                <div className="text-xs font-medium tracking-wide text-white/70">
                  Chắp cánh ước mơ du học
                </div>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Đồng hành cùng hàng nghìn sinh viên chinh phục giấc mơ du học với 15+ năm kinh nghiệm.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={SITE_CONFIG.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href={SITE_CONFIG.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
              <a
                href={SITE_CONFIG.zalo}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors"
                aria-label="Zalo"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold font-heading mb-5">Dịch vụ</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 text-sm hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Countries */}
          <div>
            <h4 className="text-white font-bold font-heading mb-5">Quốc gia</h4>
            <ul className="space-y-3">
              {footerLinks.countries.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 text-sm hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold font-heading mb-5">Liên hệ</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={18} className="text-secondary mt-0.5 shrink-0" />
                <span className="text-white/70 text-sm">{SITE_CONFIG.address}</span>
              </li>
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-center gap-3 text-white/70 hover:text-secondary transition-colors text-sm"
                >
                  <Phone size={18} className="text-secondary shrink-0" />
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-3 text-white/70 hover:text-secondary transition-colors text-sm"
                >
                  <Mail size={18} className="text-secondary shrink-0" />
                  {SITE_CONFIG.email}
                </a>
              </li>
            </ul>

            {/* Map */}
            <div className="mt-6 rounded-xl overflow-hidden border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4456!2d106.7016!3d10.7769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ2JzM2LjgiTiAxMDbCsDQyJzA1LjgiRQ!5e0!3m2!1svi!2svn!4v1"
                width="100%"
                height="150"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="FCT Education Location"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} FCT Education. Tất cả quyền được bảo lưu.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/chinh-sach-bao-mat" className="text-white/50 hover:text-white/80 text-sm transition-colors">
              Chính sách bảo mật
            </Link>
            <Link href="/dieu-khoan" className="text-white/50 hover:text-white/80 text-sm transition-colors">
              Điều khoản sử dụng
            </Link>
          </div>
        </div>
        
        {/* Visitor Counter */}
        <VisitorCounter />
      </div>
    </footer>
  );
}
