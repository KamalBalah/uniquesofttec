import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { fullMetadata } from "@/config/metadata";

const suisseIntl = localFont({
  src: [
    {
      path: "../assets//fonts/SuisseIntl/Suisse_Intl_Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets//fonts/SuisseIntl/SuisseIntl-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets//fonts/SuisseIntl/Suisse_Intl_Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets//fonts/SuisseIntl/Suisse_Intl_Bold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-suisseIntl",
  display: "swap",
});

const cairo = localFont({
  src: [
    {
      path: "../assets/fonts/cairo/Cairo-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/cairo/Cairo-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/cairo/Cairo-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/cairo/Cairo-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/cairo/Cairo-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/cairo/Cairo-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  ...fullMetadata,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} ${suisseIntl.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
