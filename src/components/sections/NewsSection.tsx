"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, User } from "lucide-react";
import { newsArticles } from "@/data/news";
import SectionHeader from "@/components/ui/SectionHeader";
import { formatDate } from "@/lib/utils";
import Badge from "@/components/ui/Badge";

export default function NewsSection() {
  const featured = newsArticles[0];
  const rest = newsArticles.slice(1, 4);

  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="container">
        <SectionHeader
          badge="Tin tức"
          title="Tin tức & Kinh nghiệm du học"
          subtitle="Cập nhật thông tin mới nhất về du học, học bổng và kinh nghiệm từ học viên FCT Education."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured article */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link href={`/tin-tuc/${featured.slug}`} className="group block">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-5">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="primary">{featured.category}</Badge>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <span className="flex items-center gap-1">
                  <User size={14} /> {featured.author}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={14} /> {featured.readTime} phút đọc
                </span>
                <span>{formatDate(featured.publishedAt)}</span>
              </div>
              <h3 className="text-xl font-bold font-heading text-foreground group-hover:text-primary transition-colors mb-2">
                {featured.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{featured.excerpt}</p>
            </Link>
          </motion.div>

          {/* Side articles */}
          <div className="space-y-6">
            {rest.map((article, i) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={`/tin-tuc/${article.slug}`} className="group flex gap-5">
                  <div className="relative w-28 h-24 shrink-0 overflow-hidden rounded-xl">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <Badge variant="primary" className="mb-2 text-xs">{article.category}</Badge>
                    <h4 className="font-bold text-foreground text-sm leading-snug group-hover:text-primary transition-colors line-clamp-2 mb-2">
                      {article.title}
                    </h4>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{formatDate(article.publishedAt)}</span>
                      <span>{article.readTime} phút</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            href="/tin-tuc"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all duration-300"
          >
            Xem tất cả bài viết <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
