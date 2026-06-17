import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Distinctive display font used for the "Joshua Ani" wordmark
const syne = Syne({
  variable: "--font-brand",
  subsets: ["latin"],
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  title: "Joshua Ani - Product Designer & UI/UX Specialist",
  description:
    "Creative Product Designer with 8+ years of experience designing digital products, responsive websites, and immersive visual experiences.",
  keywords: ["Product Designer", "UI/UX Designer", "Web Designer", "3D Animation", "Figma", "Joshua Ani"],
  authors: [{ name: "Joshua Ani" }],
  creator: "Joshua Ani",
  openGraph: {
    title: "Joshua Ani - Product Designer & UI/UX Specialist",
    description: "Creative Product Designer with 8+ years of experience designing digital products.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} antialiased`}>
      <body className="bg-white text-gray-900 overflow-x-hidden">{children}</body>
    </html>
  );
}
