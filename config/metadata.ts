import { Metadata } from "next";

const METADATA_BASE = new URL("https://uniquesoft.tech");

export const fullMetadata: Metadata = {
  title: "Unique Soft | يونيك سوفت",
  description:
    "يونيك سوفت هي شركة متخصصة في تطوير البرمجيات وتقديم حلول رقمية مبتكرة تشمل تطبيقات الموبايل، مواقع الويب، تجربة المستخدم، والاستشارات التقنية.",
  metadataBase: METADATA_BASE,
  alternates: {
    canonical: "https://uniquesoft.tech/",
    languages: {
      ar: "https://uniquesoft.tech/",
    },
  },

  keywords: [
    "تطوير برمجيات",
    "شركة برمجة في اليمن",
    "شركة برمجيات اليمن",
    "تصميم مواقع",
    "تطوير مواقع الويب",
    "برمجة تطبيقات موبايل",
    "تصميم واجهات المستخدم",
    "تجربة المستخدم UX",
    "تصميم UI/UX",
    "حلول رقمية",
    "استشارات تقنية",
    "تطوير تطبيقات اندرويد",
    "تطوير تطبيقات iOS",
    "تطوير مواقع شركات",
    "استضافة مواقع",
    "أفضل شركة برمجة في اليمن",
    "شركة تصميم مواقع في اليمن",
    "تطوير تطبيقات للشركات",
    "بناء متجر إلكتروني",
    "شركة برمجة تطبيقات يمنية",
    "تكلفة تصميم موقع في اليمن",
    "شركة تطوير مواقع احترافية",
    "تطوير مواقع متجاوبة",
    "تصميم تطبيقات موبايل احترافية",
    "شركات تقنية في اليمن",
    "Software House Yemen",
    "Web Development Yemen",
    "Mobile App Development Yemen",
    "UI/UX Design Yemen",
    "Custom Software Development",
    "Web Design Company Yemen",
    "Unique Soft",
    "Unique Soft Yemen",
    "شركة يونيك سوفت",
  ],

  // Open Graph
  openGraph: {
    title: "Unique Soft | يونيك سوفت",
    description:
      "يونيك سوفت هي شركة متخصصة في تطوير البرمجيات وتقديم حلول رقمية مبتكرة تشمل تطبيقات الموبايل، مواقع الويب، تجربة المستخدم، والاستشارات التقنية.",
    url: "https://uniquesoft.tech/",
    siteName: "Unique Soft | يونيك سوفت",
    type: "website",
    images: [
      {
        url: "https://uniquesoft.tech/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Unique Soft | يونيك سوفت",
      },
    ],
    locale: "ar-YE",
  },

  // Twitter card
  twitter: {
    card: "summary_large_image",
    creator: "@uniquesoft_io",
    title: "Unique Soft | يونيك سوفت",
    description:
      "يونيك سوفت هي شركة متخصصة في تطوير البرمجيات وتقديم حلول رقمية مبتكرة تشمل تطبيقات الموبايل، مواقع الويب، تجربة المستخدم، والاستشارات التقنية.",
    images: ["https://uniquesoft.tech/images/og-image.png"],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    // optional: fine-grained rules for Googlebot
    googleBot: {
      index: true,
      follow: true,
    },
  },
};
