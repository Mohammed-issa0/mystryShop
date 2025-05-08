import type React from "react"
import { Cairo } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ErrorBoundary from "@/components/error-boundary"
import ScrollToTop from "@/components/scroll-to-top"
import logo from "../public/logo.png"
const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-cairo",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
  <title>المتسوق الخفي - طريقك للتميز في الأداء</title>
  <meta
    name="description"
    content="المتسوق الخفي - خدمات التسوق الخفي الاحترافية لتحسين تجربة العملاء وتطوير الأداء"
  />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
  <link rel="icon" href="/logo.png" /> {/* ✅ المسار الصحيح */}
</head>
      <body className={`${cairo.className} bg-white text-gray-900`}>
        <div className="flex min-h-screen flex-col">
          <ErrorBoundary>
            <Header />
          </ErrorBoundary>
          <main className="flex-grow">
            <ErrorBoundary>{children}</ErrorBoundary>
          </main>
          <ErrorBoundary>
            <Footer />
          </ErrorBoundary>
          <ScrollToTop />
        </div>
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.dev'
    };
