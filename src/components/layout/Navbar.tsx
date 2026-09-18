"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Sun, Moon, Phone } from "lucide-react";
import { useTheme } from "next-themes";
import { NAV_ITEMS, SITE_CONFIG } from "@/constants";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import ConsultationForm from "@/components/ui/ConsultationForm";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [consultOpen, setConsultOpen] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-soft border-b border-border"
            : "bg-transparent"
        )}
      >
        <div className="container">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-elevated transition-shadow">
                <span className="text-white font-bold text-lg font-heading">F</span>
              </div>
              <div>
                <div
                  className={cn(
                    "font-bold text-xl font-heading leading-none transition-colors",
                    scrolled ? "text-primary" : "text-white"
                  )}
                >
                  FCT
                </div>
                <div
                  className={cn(
                    "text-xs font-semibold tracking-widest transition-colors",
                    scrolled ? "text-muted-foreground" : "text-white/70"
                  )}
                >
                  EDUCATION
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.href)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                      isActive(item.href)
                        ? scrolled
                          ? "text-primary bg-primary/10"
                          : "text-secondary bg-white/10"
                        : scrolled
                        ? "text-foreground hover:text-primary hover:bg-primary/5"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    )}
                  >
                    {item.label}
                    {item.children && <ChevronDown size={14} />}
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.children && activeDropdown === item.href && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 w-52 bg-white dark:bg-gray-900 rounded-xl shadow-card border border-border overflow-hidden"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="flex items-center px-4 py-3 text-sm text-foreground hover:bg-primary/5 hover:text-primary transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Right actions */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Dark mode */}
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className={cn(
                    "p-2 rounded-lg transition-colors",
                    scrolled
                      ? "text-foreground hover:bg-muted"
                      : "text-white hover:bg-white/10"
                  )}
                  aria-label="Chuyển giao diện"
                >
                  {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              )}

              {/* Hotline */}
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className={cn(
                  "flex items-center gap-2 text-sm font-medium transition-colors",
                  scrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"
                )}
              >
                <Phone size={16} />
                {SITE_CONFIG.phone}
              </a>

              <Button
                variant={scrolled ? "primary" : "secondary"}
                size="sm"
                onClick={() => setConsultOpen(true)}
              >
                Đăng ký tư vấn
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className={cn(
                "lg:hidden p-2 rounded-lg transition-colors",
                scrolled ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10"
              )}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white dark:bg-gray-900 border-t border-border overflow-hidden"
            >
              <div className="container py-4 space-y-1">
                {NAV_ITEMS.map((item) => (
                  <div key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center px-4 py-3 rounded-xl text-base font-medium transition-colors",
                        isActive(item.href)
                          ? "text-primary bg-primary/10"
                          : "text-foreground hover:bg-muted"
                      )}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="flex items-center px-4 py-2.5 rounded-xl text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t border-border">
                  <Button
                    variant="primary"
                    size="md"
                    className="w-full"
                    onClick={() => {
                      setMobileOpen(false);
                      setConsultOpen(true);
                    }}
                  >
                    Đăng ký tư vấn miễn phí
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Consultation Modal */}
      <Modal
        isOpen={consultOpen}
        onClose={() => setConsultOpen(false)}
        title="Đăng ký tư vấn miễn phí"
        size="lg"
      >
        <div className="p-6">
          <p className="text-muted-foreground mb-6">
            Điền thông tin bên dưới, chuyên viên của chúng tôi sẽ liên hệ trong vòng 24 giờ.
          </p>
          <ConsultationForm onSuccess={() => setTimeout(() => setConsultOpen(false), 3000)} />
        </div>
      </Modal>
    </>
  );
}
