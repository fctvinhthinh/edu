"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Phone, Mail, MapPin, Clock, Facebook,
  MessageCircle, Send, CheckCircle,
} from "lucide-react";
import Button from "@/components/ui/Button";
import { SITE_CONFIG } from "@/constants";

const contactInfo = [
  {
    icon: Phone,
    label: "Hotline",
    value: SITE_CONFIG.phone,
    href: `tel:${SITE_CONFIG.phone}`,
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Mail,
    label: "Email",
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: MapPin,
    label: "Địa chỉ",
    value: SITE_CONFIG.address,
    href: "https://maps.google.com",
    color: "bg-red-50 text-red-600",
  },
  {
    icon: Clock,
    label: "Giờ làm việc",
    value: "Thứ 2 – Thứ 7: 8:00 – 18:00",
    href: null,
    color: "bg-purple-50 text-purple-600",
  },
];

interface FormState {
  name: string;
  phone: string;
  email: string;
  country: string;
  message: string;
}

export default function ContactPageClient() {
  const [form, setForm] = useState<FormState>({
    name: "", phone: "", email: "", country: "", message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-border bg-muted dark:bg-gray-700 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-sm";
  const labelClass = "block text-sm font-medium text-foreground mb-1.5";

  return (
    <>
      {/* Banner */}
      <section className="relative h-[45vh] min-h-[320px] bg-gradient-hero flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1400&q=80"
            alt="Liên hệ FCT Education"
            fill
            className="object-cover opacity-15"
            priority
          />
        </div>
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <nav className="text-sm text-white/60 mb-3">
              <Link href="/" className="hover:text-white transition-colors">Trang chủ</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Liên hệ</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-3">
              Liên hệ <span className="text-secondary">với chúng tôi</span>
            </h1>
            <p className="text-white/80 text-lg max-w-xl">
              Đội ngũ chuyên gia sẵn sàng hỗ trợ bạn 24/7. Tư vấn miễn phí, không ràng buộc.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-muted dark:bg-gray-800/50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Left: Info + Map */}
            <div className="space-y-6">
              {/* Contact info cards */}
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-card border border-border flex items-start gap-4 hover:shadow-elevated hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center shrink-0`}>
                    <item.icon size={22} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="font-semibold text-foreground hover:text-primary transition-colors text-sm">
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-semibold text-foreground text-sm">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Social */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-card border border-border"
              >
                <p className="text-sm font-semibold text-foreground mb-4">Kết nối với chúng tôi</p>
                <div className="flex gap-3">
                  <a
                    href={SITE_CONFIG.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white py-2.5 rounded-xl text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    <Facebook size={16} /> Facebook
                  </a>
                  <a
                    href={SITE_CONFIG.zalo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-blue-500 text-white py-2.5 rounded-xl text-sm font-medium hover:bg-blue-600 transition-colors"
                  >
                    <MessageCircle size={16} /> Zalo
                  </a>
                </div>
              </motion.div>

              {/* Google Map */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-card border border-border"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4456!2d106.7016!3d10.7769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ2JzM2LjgiTiAxMDbCsDQyJzA1LjgiRQ!5e0!3m2!1svi!2svn!4v1"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="FCT Education Location"
                />
              </motion.div>
            </div>

            {/* Right: Contact form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-card border border-border"
              >
                {submitted ? (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex flex-col items-center gap-5 py-12 text-center"
                  >
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle size={48} className="text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold font-heading text-foreground mb-2">Gửi thành công!</h3>
                      <p className="text-muted-foreground">
                        Chúng tôi đã nhận được tin nhắn của bạn và sẽ liên hệ trong vòng 24 giờ.
                      </p>
                    </div>
                    <Button variant="primary" onClick={() => setSubmitted(false)}>
                      Gửi tin nhắn khác
                    </Button>
                  </motion.div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold font-heading text-foreground mb-2">
                        Gửi tin nhắn cho chúng tôi
                      </h2>
                      <p className="text-muted-foreground text-sm">
                        Điền thông tin bên dưới, chuyên viên sẽ liên hệ lại trong vòng 24 giờ.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className={labelClass}>Họ và tên *</label>
                          <input
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            placeholder="Nguyễn Văn A"
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className={labelClass}>Số điện thoại *</label>
                          <input
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            required
                            type="tel"
                            placeholder="0912 345 678"
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className={labelClass}>Email *</label>
                          <input
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            type="email"
                            placeholder="email@example.com"
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className={labelClass}>Quốc gia muốn đi</label>
                          <select
                            name="country"
                            value={form.country}
                            onChange={handleChange}
                            className={inputClass}
                          >
                            <option value="">-- Chọn quốc gia --</option>
                            <option value="dai-loan">🇹🇼 Đài Loan</option>
                            <option value="trung-quoc">🇨🇳 Trung Quốc</option>
                            <option value="nhat-ban">🇯🇵 Nhật Bản</option>
                            <option value="han-quoc">🇰🇷 Hàn Quốc</option>
                            <option value="khac">🌍 Chưa quyết định</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className={labelClass}>Nội dung *</label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          placeholder="Mô tả câu hỏi hoặc nhu cầu tư vấn của bạn..."
                          className={inputClass}
                        />
                      </div>

                      {/* reCAPTCHA placeholder */}
                      <div className="bg-muted rounded-xl p-4 flex items-center gap-3 border border-border">
                        <div className="w-5 h-5 border-2 border-border rounded" />
                        <span className="text-sm text-muted-foreground">Tôi không phải robot (reCAPTCHA)</span>
                        <Image src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" width={32} height={32} unoptimized className="w-8 h-8 ml-auto" />
                      </div>

                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        loading={loading}
                        icon={<Send size={18} />}
                        className="w-full"
                      >
                        Gửi tin nhắn
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        Thông tin của bạn được bảo mật tuyệt đối theo chính sách bảo mật của FCT Education.
                      </p>
                    </form>
                  </>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
