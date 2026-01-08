import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { createMetadata } from "@/config/metadata";
import { Analytics } from "@vercel/analytics/next";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";

const suisseIntl = localFont({
  src: [
    {
      path: "../../assets//fonts/SuisseIntl/Suisse_Intl_Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../assets//fonts/SuisseIntl/SuisseIntl-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../assets//fonts/SuisseIntl/Suisse_Intl_Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../assets//fonts/SuisseIntl/Suisse_Intl_Bold.ttf",
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
      path: "../../assets/fonts/cairo/Cairo-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../assets/fonts/cairo/Cairo-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../assets/fonts/cairo/Cairo-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../assets/fonts/cairo/Cairo-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../assets/fonts/cairo/Cairo-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../assets/fonts/cairo/Cairo-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-cairo",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return createMetadata(locale);
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={direction} suppressHydrationWarning>
      <body className={`${cairo.variable} ${suisseIntl.variable} antialiased`}>
        <ThemeProvider defaultTheme="light">
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </ThemeProvider>
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Unique Soft | يونيك سوفت",
              url: "https://uniquesoft.tech",
              logo: "https://uniquesoft.tech/unique_soft.svg",
              sameAs: [
                "https://www.facebook.com/uniquesoft.io",
                "https://www.linkedin.com/company/uniquesoftio",
                "https://x.com/uniquesoft_io",
                "https://www.instagram.com/uniquesoft_io",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+967782804030",
                  contactType: "customer service",
                  email: "uniquesoft.io@gmail.com",
                  areaServed: "YE",
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
