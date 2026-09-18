"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Search, Clock, User, ArrowRight, Tag } from "lucide-react";
import { newsArticles, newsCategories } from "@/data/news";
import { formatDate } from "@/lib/utils";
import Badge from "@/components/ui/Badge";
import SectionHeader from "@/components/ui/SectionHeader";

export default function NewsPageClient() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Tất cả");

  const filtered = newsArticles.filter((a) => {
    const matchSearch =
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchCat = activeCategory === "Tất cả" || a.category === activeCategory;
    return matchSearch && matchCat;
  });

  const featured = newsArticles[0];

  return (
    <>
      {/* Banner */}
      <section className="relative h-[45vh] min-h-[320px] bg-gradient-hero flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=1400&q=80"
            alt="Tin tức du học"
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
              <span className="text-white">Tin tức</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-3">
              Tin tức &amp; <span className="text-secondary">Kinh nghiệm</span>
            </h1>
            <p className="text-white/80 text-lg max-w-xl">
              Cập nhật thông tin mới nhất về du học, học bổng và chia sẻ kinh nghiệm thực tế.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-muted dark:bg-gray-800/50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

            {/* Main content */}
            <div className="lg:col-span-3">
              {/* Featured */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-10"
              >
                <Link href={`/tin-tuc/${featured.slug}`} className="group block bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="relative aspect-video md:aspect-auto overflow-hidden">
                      <Image
                        src={featured.image}
                        alt={featured.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                          NỔI BẬT
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col justify-center">
                      <Badge variant="primary" className="mb-3 self-start">{featured.category}</Badge>
                      <h2 className="text-xl font-bold font-heading text-foreground group-hover:text-primary transition-colors mb-3 leading-snug">
                        {featured.title}
                      </h2>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                        {featured.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><User size={12} />{featured.author}</span>
                        <span className="flex items-center gap-1"><Clock size={12} />{featured.readTime} phút</span>
                        <span>{formatDate(featured.publishedAt)}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Article grid */}
              {filtered.length === 0 ? (
                <div className="text-center py-16 text-muted-foreground">
                  <div className="text-5xl mb-4">🔍</div>
                  <p className="text-lg font-medium">Không tìm thấy bài viết phù hợp</p>
                  <p className="text-sm mt-2">Thử tìm kiếm với từ khoá khác</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filtered.map((article, i) => (
                    <motion.div
                      key={article.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                    >
                      <Link
                        href={`/tin-tuc/${article.slug}`}
                        className="group block bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 h-full"
                      >
                        <div className="relative aspect-video overflow-hidden">
                          <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute top-3 left-3">
                            <Badge variant="primary" className="text-xs">{article.category}</Badge>
                          </div>
                        </div>
                        <div className="p-5">
                          <h3 className="font-bold font-heading text-foreground group-hover:text-primary transition-colors mb-2 leading-snug line-clamp-2">
                            {article.title}
                          </h3>
                          <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                            {article.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-xs text-muted-foreground pt-3 border-t border-border">
                            <div className="flex items-center gap-3">
                              <span className="flex items-center gap-1"><User size={11} />{article.author}</span>
                              <span className="flex items-center gap-1"><Clock size={11} />{article.readTime} phút</span>
                            </div>
                            <span>{formatDate(article.publishedAt)}</span>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Search */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-card border border-border">
                <h3 className="font-bold font-heading text-foreground mb-4">🔍 Tìm kiếm</h3>
                <div className="relative">
                  <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Tìm bài viết..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-muted dark:bg-gray-700 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-card border border-border">
                <h3 className="font-bold font-heading text-foreground mb-4">📂 Danh mục</h3>
                <div className="space-y-2">
                  {newsCategories.map((cat) => {
                    const count = cat === "Tất cả"
                      ? newsArticles.length
                      : newsArticles.filter((a) => a.category === cat).length;
                    return (
                      <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                          activeCategory === cat
                            ? "bg-primary text-white"
                            : "text-foreground hover:bg-muted"
                        }`}
                      >
                        <span>{cat}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${activeCategory === cat ? "bg-white/20" : "bg-muted text-muted-foreground"}`}>
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Featured articles */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-card border border-border">
                <h3 className="font-bold font-heading text-foreground mb-4">⭐ Bài nổi bật</h3>
                <div className="space-y-4">
                  {newsArticles.slice(0, 3).map((article) => (
                    <Link
                      key={article.id}
                      href={`/tin-tuc/${article.slug}`}
                      className="group flex gap-3"
                    >
                      <div className="relative w-16 h-16 shrink-0 rounded-xl overflow-hidden">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                          {article.title}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">{formatDate(article.publishedAt)}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-card border border-border">
                <h3 className="font-bold font-heading text-foreground mb-4">
                  <Tag size={16} className="inline mr-2" />Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {Array.from(new Set(newsArticles.flatMap((a) => a.tags))).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-muted text-muted-foreground hover:bg-primary hover:text-white px-3 py-1.5 rounded-full cursor-pointer transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
