import type { Metadata } from "next";
// import { Cairo } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const cairo = localFont({
	src: [
		{
			path: "./assets/fonts/cairo/Cairo-Light.ttf",
			weight: "300",
			style: "normal",
		},
		{
			path: "./assets/fonts/cairo/Cairo-Regular.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "./assets/fonts/cairo/Cairo-Medium.ttf",
			weight: "500",
			style: "normal",
		},
		{
			path: "./assets/fonts/cairo/Cairo-SemiBold.ttf",
			weight: "600",
			style: "normal",
		},
		{
			path: "./assets/fonts/cairo/Cairo-Bold.ttf",
			weight: "700",
			style: "normal",
		},
		{
			path: "./assets/fonts/cairo/Cairo-Black.ttf",
			weight: "900",
			style: "normal",
		},
	],
	variable: "--font-cairo",
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
			<body className={`${cairo.variable}`}>{children}</body>
		</html>
	);
}
