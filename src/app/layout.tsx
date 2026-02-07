import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hyphen Fitness - Dubai's Largest Premium Fitness Facility",
  description: "Hyphen Fitness offers a holistic approach to health & fitness through innovative training methods, expert coaching, nutrition programs, spa facilities, and lifestyle services in Dubai, UAE.",
  keywords: ["fitness", "gym", "Dubai", "UAE", "premium fitness", "training", "nutrition", "wellness", "spa"],
  authors: [{ name: "Hyphen Fitness" }],
  openGraph: {
    title: "Hyphen Fitness - Dubai's Largest Premium Fitness Facility",
    description: "Experience elevated fitness with expert coaching, innovative training, and luxury wellness services.",
    type: "website",
    locale: "en_AE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hyphen Fitness",
    description: "Dubai's largest premium fitness facility offering holistic health and wellness.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased bg-diamond-mesh`}
      >
        {children}
      </body>
    </html>
  );
}