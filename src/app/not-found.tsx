import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center px-4">
      <div className="text-center text-white">
        <div className="text-[120px] font-bold font-heading leading-none mb-6 text-secondary">404</div>
        <h1 className="text-3xl md:text-4xl font-bold font-heading mb-4">Trang không tìm thấy</h1>
        <p className="text-white/70 text-lg mb-10 max-w-md mx-auto">
          Trang bạn tìm kiếm không tồn tại hoặc đã bị di chuyển.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-secondary text-foreground px-6 py-3 rounded-xl font-semibold hover:-translate-y-0.5 hover:shadow-elevated transition-all duration-300"
          >
            <Home size={20} /> Về trang chủ
          </Link>
          <Link
            href="/quoc-gia"
            className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/30 px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300"
          >
            <ArrowLeft size={20} /> Xem quốc gia
          </Link>
        </div>
      </div>
    </div>
  );
}
