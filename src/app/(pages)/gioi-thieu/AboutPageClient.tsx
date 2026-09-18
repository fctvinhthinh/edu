"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle, Award, Users, Globe, Heart } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { teamMembers } from "@/data/team";
import { useState } from "react";
import Modal from "@/components/ui/Modal";
import ConsultationForm from "@/components/ui/ConsultationForm";

const coreValues = [
  {
    icon: Heart,
    title: "Tận tâm",
    description: "Chúng tôi đặt lợi ích của học viên lên hàng đầu, hỗ trợ nhiệt tình từ A đến Z.",
    color: "bg-red-50 text-red-500",
  },
  {
    icon: Award,
    title: "Chuyên nghiệp",
    description: "Đội ngũ được đào tạo bài bản, có kinh nghiệm thực tế tại nước ngoài.",
    color: "bg-blue-50 text-blue-500",
  },
  {
    icon: CheckCircle,
    title: "Uy tín",
    description: "15+ năm hoạt động, được hàng nghìn gia đình tin tưởng lựa chọn.",
    color: "bg-green-50 text-green-500",
  },
  {
    icon: Globe,
    title: "Toàn cầu",
    description: "Mạng lưới đối tác rộng khắp 6 quốc gia với 10+ trường đại học.",
    color: "bg-purple-50 text-purple-500",
  },
  {
    icon: Users,
    title: "Cộng đồng",
    description: "Xây dựng cộng đồng học viên FCT lớn mạnh tại khắp nơi trên thế giới.",
    color: "bg-orange-50 text-orange-500",
  },
];

const milestones = [
  { year: "2009", title: "Thành lập FCT Education", desc: "Khởi đầu với đội ngũ 5 người và thị trường Đài Loan" },
  { year: "2012", title: "Mở rộng sang Nhật Bản", desc: "Ra mắt chương trình du học Nhật Bản" },
  { year: "2015", title: "Thêm Hàn Quốc & Úc", desc: "Mở rộng thị trường du học tại Châu Á & Úc" },
  { year: "2018", title: "Khai trương văn phòng thứ 2", desc: "Mở văn phòng tại Hà Nội, phục vụ miền Bắc" },
  { year: "2020", title: "100+ học viên thành công", desc: "Cột mốc 100+ học viên thành công nhập học" },
  { year: "2024", title: "Top 10 trung tâm du học uy tín", desc: "Được vinh danh trong danh sách uy tín nhất Việt Nam" },
];

const officeImages = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&w=600&q=80",
];

export default function AboutPageClient() {
  const [consultOpen, setConsultOpen] = useState(false);

  return (
    <>
      {/* Banner */}
      <section className="relative h-[60vh] min-h-[400px] bg-gradient-hero flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80"
            alt="About FCT Education"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-sm text-white/60 mb-3">Trang chủ / Giới thiệu</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-4">
              Về <span className="text-secondary">FCT Education</span>
            </h1>
            <p className="text-white/80 text-xl max-w-xl">
              Đồng hành cùng 100+ học viên chinh phục giấc mơ du học.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                <span className="w-2 h-2 rounded-full bg-primary" /> Câu chuyện của chúng tôi
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-6 leading-tight">
                Từ một giấc mơ nhỏ đến
                <span className="text-primary"> trung tâm hàng đầu</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                FCT Education được thành lập năm 2009 bởi những người có niềm đam mê với giáo dục quốc tế và mong muốn giúp các bạn trẻ Việt Nam tiếp cận cơ hội học tập tốt nhất thế giới.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Với hơn 15 năm kinh nghiệm, chúng tôi đã đồng hành cùng hơn 5.000 học viên, giúp họ thực hiện giấc mơ du học tại Đài Loan, Nhật Bản, Hàn Quốc, Úc, Canada và Đức.
              </p>
              <div className="space-y-3">
                {["Tư vấn miễn phí, không ràng buộc", "Hỗ trợ hồ sơ từ A-Z", "Tỷ lệ đậu Visa 98%", "Đồng hành sau khi nhập học"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-primary shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {officeImages.map((src, i) => (
                <div key={i} className={`relative overflow-hidden rounded-2xl ${i === 0 ? "col-span-2 aspect-video" : "aspect-square"}`}>
                  <Image src={src} alt={`Văn phòng FCT ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Mission & Vision cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
            {[
              {
                icon: "🎯",
                title: "Sứ mệnh",
                content: "Kết nối các bạn trẻ Việt Nam với những cơ hội giáo dục tốt nhất thế giới, tạo nền tảng vững chắc cho sự nghiệp tương lai.",
                color: "border-primary/20 bg-primary/5",
              },
              {
                icon: "🔭",
                title: "Tầm nhìn",
                content: "Trở thành trung tâm tư vấn du học hàng đầu Đông Nam Á, nơi mỗi học viên đều được chăm sóc như người thân trong gia đình.",
                color: "border-secondary/30 bg-secondary/5",
              },
              {
                icon: "💎",
                title: "Cam kết",
                content: "Đảm bảo chất lượng dịch vụ cao nhất, minh bạch về chi phí và quy trình, luôn đặt lợi ích học viên lên hàng đầu.",
                color: "border-accent/20 bg-accent/5",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-6 rounded-2xl border-2 ${item.color}`}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold font-heading text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-muted dark:bg-gray-800/50">
        <div className="container">
          <SectionHeader
            badge="Giá trị cốt lõi"
            title="Những giá trị chúng tôi theo đuổi"
            subtitle="5 giá trị cốt lõi định hướng mọi hoạt động và quyết định của FCT Education."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-14">
            {coreValues.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl ${val.color} flex items-center justify-center mx-auto mb-4`}>
                  <val.icon size={26} />
                </div>
                <h3 className="font-bold font-heading text-foreground mb-2">{val.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{val.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container">
          <SectionHeader
            badge="Lịch sử"
            title="Hành trình 15 năm phát triển"
            subtitle="Từ một văn phòng nhỏ đến trung tâm tư vấn du học hàng đầu Việt Nam."
          />
          <div className="mt-14 relative max-w-3xl mx-auto">
            {/* Center line */}
            <div className="absolute left-1/2 -translate-x-0.5 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex items-center mb-10 last:mb-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Content */}
                <div className={`flex-1 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-card border border-border">
                    <div className="text-primary font-bold font-heading text-lg mb-1">{m.year}</div>
                    <h4 className="font-bold text-foreground mb-1">{m.title}</h4>
                    <p className="text-sm text-muted-foreground">{m.desc}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-primary rounded-full border-4 border-white dark:border-gray-900 shadow-sm z-10" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-muted dark:bg-gray-800/50">
        <div className="container">
          <SectionHeader
            badge="Đội ngũ"
            title="Gặp gỡ đội ngũ chuyên gia"
            subtitle="Những chuyên gia giàu kinh nghiệm, tận tâm và luôn sẵn sàng hỗ trợ bạn."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold font-heading text-foreground">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Hãy để FCT Education đồng hành cùng bạn
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Liên hệ ngay hôm nay để nhận tư vấn miễn phí từ đội ngũ chuyên gia của chúng tôi.
            </p>
            <Button variant="secondary" size="lg" onClick={() => setConsultOpen(true)}>
              Đăng ký tư vấn miễn phí
            </Button>
          </motion.div>
        </div>
      </section>

      <Modal isOpen={consultOpen} onClose={() => setConsultOpen(false)} title="Đăng ký tư vấn miễn phí" size="lg">
        <div className="p-6">
          <ConsultationForm onSuccess={() => setTimeout(() => setConsultOpen(false), 3000)} />
        </div>
      </Modal>
    </>
  );
}
