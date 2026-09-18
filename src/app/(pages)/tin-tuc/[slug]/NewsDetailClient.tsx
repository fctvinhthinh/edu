"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Clock, User, Calendar, Share2, Facebook, Twitter, Link2, ArrowRight, ArrowLeft } from "lucide-react";
import type { NewsArticle } from "@/types";
import { formatDate } from "@/lib/utils";
import Badge from "@/components/ui/Badge";

interface Props {
  article: NewsArticle;
  related: NewsArticle[];
}

export default function NewsDetailClient({ article, related }: Props) {
  const handleShare = (platform: string) => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const text = encodeURIComponent(article.title);
    if (platform === "facebook") window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`);
    if (platform === "twitter") window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`);
    if (platform === "copy") {
      navigator.clipboard.writeText(url);
      alert("Đã sao chép liên kết!");
    }
  };

  return (
    <>
      {/* Cover image */}
      <div className="relative h-[55vh] min-h-[360px] overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 container pb-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Badge variant="primary" className="mb-4">{article.category}</Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white leading-tight max-w-4xl">
              {article.title}
            </h1>
          </motion.div>
        </div>
      </div>

      <section className="section-padding bg-muted dark:bg-gray-800/50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* Article body */}
            <div className="lg:col-span-3">
              {/* Breadcrumb + meta */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-8 shadow-card border border-border">
                <nav className="text-sm text-muted-foreground mb-4">
                  <Link href="/" className="hover:text-primary transition-colors">Trang chủ</Link>
                  <span className="mx-2">/</span>
                  <Link href="/tin-tuc" className="hover:text-primary transition-colors">Tin tức</Link>
                  <span className="mx-2">/</span>
                  <span className="text-foreground line-clamp-1">{article.title}</span>
                </nav>

                <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <User size={16} className="text-primary" />
                    <strong className="text-foreground">{article.author}</strong>
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar size={16} className="text-primary" />
                    {formatDate(article.publishedAt)}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock size={16} className="text-primary" />
                    {article.readTime} phút đọc
                  </span>
                </div>
              </div>

              {/* Content */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-card border border-border mb-8"
              >
                {/* Lead */}
                <p className="text-lg text-muted-foreground leading-relaxed border-l-4 border-primary pl-5 mb-8 italic">
                  {article.excerpt}
                </p>

                {/* Mock rich content */}
                <div className="prose prose-lg max-w-none dark:prose-invert text-foreground">
                  <h2 className="text-2xl font-bold font-heading text-foreground mt-8 mb-4">Tổng quan</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {article.content || article.excerpt} Đây là nội dung chi tiết của bài viết, cung cấp thông tin toàn diện và hữu ích cho các bạn sinh viên đang tìm hiểu về chủ đề này.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    FCT Education luôn cập nhật thông tin mới nhất để giúp học viên đưa ra quyết định đúng đắn trong hành trình du học của mình. Với đội ngũ chuyên gia có kinh nghiệm thực tế, chúng tôi sẵn sàng tư vấn và hỗ trợ bạn từ A đến Z.
                  </p>
                  <h2 className="text-2xl font-bold font-heading text-foreground mt-8 mb-4">Chi tiết thông tin</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Để được tư vấn chi tiết hơn về chủ đề này, hãy liên hệ trực tiếp với đội ngũ FCT Education. Chúng tôi có hơn 15 năm kinh nghiệm và đã hỗ trợ hơn 5.000 học viên thành công.
                  </p>
                  <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-5 my-6">
                    <p className="text-foreground font-medium">
                      💡 <strong>Lời khuyên từ chuyên gia:</strong> Hãy liên hệ FCT Education sớm để được tư vấn và chuẩn bị hồ sơ kịp thời cho kỳ tuyển sinh sắp tới.
                    </p>
                  </div>
                  <h2 className="text-2xl font-bold font-heading text-foreground mt-8 mb-4">Kết luận</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Hy vọng bài viết này đã cung cấp cho bạn những thông tin hữu ích. Nếu còn thắc mắc, đừng ngần ngại liên hệ FCT Education để được hỗ trợ miễn phí.
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-border">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm bg-muted text-muted-foreground hover:bg-primary hover:text-white px-3 py-1.5 rounded-full cursor-pointer transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </motion.article>

              {/* Share */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-card border border-border mb-8">
                <div className="flex items-center gap-4 flex-wrap">
                  <span className="flex items-center gap-2 font-semibold text-foreground">
                    <Share2 size={18} className="text-primary" /> Chia sẻ bài viết:
                  </span>
                  <button
                    onClick={() => handleShare("facebook")}
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    <Facebook size={16} /> Facebook
                  </button>
                  <button
                    onClick={() => handleShare("twitter")}
                    className="flex items-center gap-2 bg-sky-500 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-sky-600 transition-colors"
                  >
                    <Twitter size={16} /> Twitter
                  </button>
                  <button
                    onClick={() => handleShare("copy")}
                    className="flex items-center gap-2 bg-muted text-foreground px-4 py-2 rounded-xl text-sm font-medium hover:bg-border transition-colors"
                  >
                    <Link2 size={16} /> Sao chép link
                  </button>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between gap-4">
                <Link href="/tin-tuc" className="flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                  <ArrowLeft size={18} /> Quay lại danh sách
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Related */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-card border border-border">
                <h3 className="font-bold font-heading text-foreground mb-4">📰 Bài viết liên quan</h3>
                <div className="space-y-4">
                  {related.map((a) => (
                    <Link key={a.id} href={`/tin-tuc/${a.slug}`} className="group flex gap-3">
                      <div className="relative w-20 h-16 shrink-0 overflow-hidden rounded-xl">
                        <Image
                          src={a.image}
                          alt={a.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                          {a.title}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">{formatDate(a.publishedAt)}</p>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link href="/tin-tuc" className="flex items-center gap-2 text-primary text-sm font-medium mt-4 hover:gap-3 transition-all">
                  Xem tất cả <ArrowRight size={14} />
                </Link>
              </div>

              {/* CTA */}
              <div className="bg-gradient-primary text-white rounded-2xl p-6">
                <div className="text-2xl mb-3">✈️</div>
                <h3 className="font-bold font-heading text-white mb-2">Sẵn sàng du học?</h3>
                <p className="text-white/80 text-sm mb-4">Đăng ký tư vấn miễn phí ngay hôm nay.</p>
                <Link
                  href="/lien-he"
                  className="block bg-secondary text-foreground text-center font-semibold py-2.5 rounded-xl hover:bg-secondary-400 transition-colors text-sm"
                >
                  Đăng ký tư vấn
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
