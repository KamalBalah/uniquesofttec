import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "Unique Soft|يونيك سوفت",
  description:
    "يونيك سوفت هي شركة متخصصة في تطوير البرمجيات وتقديم حلول رقمية مبتكرة تشمل تطبيقات الموبايل، مواقع الويب، تجربة المستخدم، والاستشارات التقنية",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <body className={`${cairo.variable} overflow-hidden`}>{children}</body>
    </html>
  );
}
