import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro, Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";
import ChatWidget from "@/components/ui/ChatWidget";
import LenisProvider from "@/components/providers/LenisProvider";
import { SITE_CONFIG } from "@/constants";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-be-vietnam-pro",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "du học Đài Loan", "du học Nhật Bản", "du học Hàn Quốc", "du học Úc",
    "du học Canada", "du học Đức", "tư vấn du học", "học bổng du học",
    "FCT Education", "visa du học",
  ],
  authors: [{ name: "FCT Education", url: SITE_CONFIG.url }],
  creator: "FCT Education",
  publisher: "FCT Education",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FCT Education - Tư vấn du học quốc tế",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    images: ["/images/og-image.jpg"],
    creator: "@fcteducation",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: {
    canonical: SITE_CONFIG.url,
    languages: { "vi-VN": SITE_CONFIG.url },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#005BAC" },
    { media: "(prefers-color-scheme: dark)", color: "#003E76" },
  ],
  width: "device-width",
  initialScale: 1,
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "FCT Education",
  url: SITE_CONFIG.url,
  logo: `${SITE_CONFIG.url}/images/logo.png`,
  description: SITE_CONFIG.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Tầng 3, Toà nhà Ngôi sao",
    addressLocality: "Phường Định Công",
    addressRegion: "Hà Nội",
    addressCountry: "VN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: SITE_CONFIG.phone,
    contactType: "customer service",
    availableLanguage: "Vietnamese",
  },
  sameAs: [SITE_CONFIG.facebook, SITE_CONFIG.youtube],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" suppressHydrationWarning className={`${beVietnamPro.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LenisProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <BackToTop />
            <ChatWidget />
            <Toaster
              position="top-right"
              toastOptions={{
                style: { borderRadius: "12px", fontFamily: "var(--font-inter)" },
              }}
            />
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
