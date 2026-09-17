# FCT Education Website

Website tư vấn du học quốc tế - Xây dựng bằng Next.js 15 + TypeScript + Tailwind CSS + Framer Motion.

## 🚀 Cài đặt & Chạy

### Bước 1: Cài Node.js
Tải và cài Node.js LTS từ: https://nodejs.org/en/download

### Bước 2: Mở Terminal trong thư mục project

```bash
cd "d:\Webside du học\fct-education"
```

### Bước 3: Cài dependencies

```bash
npm install
```

### Bước 4: Chạy môi trường dev

```bash
npm run dev
```

Mở trình duyệt: http://localhost:3000

## 📦 Build production

```bash
npm run build
npm start
```

## 🌐 Deploy lên Vercel

```bash
npm install -g vercel
vercel
```

## 📁 Cấu trúc thư mục

```
src/
├── app/                    # Next.js App Router
│   ├── (pages)/            # Các trang
│   │   ├── gioi-thieu/     # Trang Giới thiệu
│   │   ├── quoc-gia/       # Danh sách & Chi tiết quốc gia
│   │   ├── tin-tuc/        # Tin tức & Chi tiết bài viết
│   │   ├── hoc-bong/       # Học bổng
│   │   └── lien-he/        # Liên hệ
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Trang chủ
│   ├── sitemap.ts          # Sitemap tự động
│   └── robots.ts           # robots.txt
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── providers/          # LenisProvider, ThemeProvider
│   ├── sections/           # Các section trang chủ
│   └── ui/                 # Components tái sử dụng
├── constants/              # Hằng số, config
├── data/                   # Dữ liệu tĩnh
├── hooks/                  # Custom React hooks
├── lib/                    # Utilities
└── types/                  # TypeScript types
```

## ✨ Tính năng

- ✅ Responsive 100% (Mobile, Tablet, Desktop)
- ✅ Dark Mode
- ✅ Smooth scroll (Lenis)
- ✅ Animations (Framer Motion)
- ✅ SEO tối ưu (Metadata, OpenGraph, Schema.org)
- ✅ Sitemap & robots.txt tự động
- ✅ Loading screen
- ✅ Back to top button
- ✅ Chat widget (Messenger/Zalo/Hotline)
- ✅ Form tư vấn popup
- ✅ Counter animation
- ✅ Partner logo slider
- ✅ 404 page

## 🎨 Màu sắc

| Tên | Mã màu |
|-----|--------|
| Primary | `#005BAC` |
| Secondary | `#FFD447` |
| Accent | `#00AEEF` |

## 📱 Breakpoints

| Thiết bị | Kích thước |
|----------|-----------|
| Mobile | 375px |
| Tablet | 768px |
| Laptop | 1200px |
| Desktop | 1440px |
