import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

const METADATA_BASE = new URL("https://uniquesoft.tech");

export async function createMetadata(locale: string): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "metadata" });

  const isArabic = locale === "ar";

  return {
    metadataBase: METADATA_BASE,

    title: t("title"),
    description: t("description"),
    keywords: t.raw("keywords"),

    alternates: {
      canonical: `https://uniquesoft.tech/${isArabic ? "" : "en"}`,
      languages: {
        ar: "https://uniquesoft.tech/",
        en: "https://uniquesoft.tech/en",
      },
    },

    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `https://uniquesoft.tech/${isArabic ? "" : "en"}`,
      siteName: t("title"),
      type: "website",
      locale: isArabic ? "ar_YE" : "en_US",
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: t("title"),
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      creator: "@uniquesoft_io",
      title: t("title"),
      description: t("description"),
      images: ["/images/og-image.png"],
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}
