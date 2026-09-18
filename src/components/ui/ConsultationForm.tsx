"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Send } from "lucide-react";
import Button from "./Button";

interface FormData {
  name: string;
  phone: string;
  email: string;
  dob: string;
  level: string;
  country: string;
  message: string;
}

interface ConsultationFormProps {
  onSuccess?: () => void;
  compact?: boolean;
}

export default function ConsultationForm({ onSuccess, compact = false }: ConsultationFormProps) {
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    dob: "",
    level: "",
    country: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
    onSuccess?.();
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="flex flex-col items-center gap-4 py-10 text-center"
      >
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
          <CheckCircle className="text-green-600" size={40} />
        </div>
        <h3 className="text-xl font-bold text-foreground">Đăng ký thành công!</h3>
        <p className="text-muted-foreground">
          Cảm ơn bạn đã đăng ký tư vấn. Chúng tôi sẽ liên hệ trong vòng 24 giờ.
        </p>
      </motion.div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-border bg-white dark:bg-gray-800 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all";
  const labelClass = "block text-sm font-medium text-foreground mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className={compact ? "grid grid-cols-1 gap-4" : "grid grid-cols-1 md:grid-cols-2 gap-4"}>
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
          <label className={labelClass}>Ngày sinh</label>
          <input
            name="dob"
            value={form.dob}
            onChange={handleChange}
            type="date"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Trình độ học vấn *</label>
          <select name="level" value={form.level} onChange={handleChange} required className={inputClass}>
            <option value="">-- Chọn trình độ --</option>
            <option value="thpt">Học sinh THPT</option>
            <option value="cd">Cao đẳng</option>
            <option value="dh">Đại học</option>
            <option value="sdh">Sau đại học</option>
          </select>
        </div>
        <div>
          <label className={labelClass}>Quốc gia muốn đi *</label>
          <select name="country" value={form.country} onChange={handleChange} required className={inputClass}>
            <option value="">-- Chọn quốc gia --</option>
            <option value="dai-loan">🇹🇼 Đài Loan</option>
            <option value="trung-quoc">🇨🇳 Trung Quốc</option>
            <option value="nhat-ban">🇯🇵 Nhật Bản</option>
            <option value="han-quoc">🇰🇷 Hàn Quốc</option>
            <option value="khac">🌍 Chưa quyết định</option>
          </select>
        </div>
      </div>
      {!compact && (
        <div>
          <label className={labelClass}>Nội dung cần tư vấn</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            placeholder="Mô tả ngắn về mục tiêu và câu hỏi của bạn..."
            className={inputClass}
          />
        </div>
      )}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        loading={loading}
        icon={<Send size={18} />}
        className="w-full"
      >
        Gửi đăng ký tư vấn
      </Button>
      <p className="text-xs text-muted-foreground text-center">
        Thông tin của bạn được bảo mật tuyệt đối. Chúng tôi sẽ liên hệ trong 24 giờ.
      </p>
    </form>
  );
}
