import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CCC 씨앗 순장 AI - 당신의 AI 순장",
  description:
    "순모임이 고민될 때, 신앙이 흔들릴 때, 삶이 복잡할 때 언제든 편하게 찾아올 수 있는 AI 순장 서비스",
  openGraph: {
    title: "CCC 씨앗 순장 AI - 당신의 AI 순장",
    description:
      "순모임이 고민될 때, 신앙이 흔들릴 때, 삶이 복잡할 때 언제든 편하게 찾아올 수 있는 AI 순장 서비스",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "씨앗 순장" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CCC 씨앗 순장 AI - 당신의 AI 순장",
    description:
      "순모임이 고민될 때, 신앙이 흔들릴 때, 삶이 복잡할 때 언제든 편하게 찾아올 수 있는 AI 순장 서비스",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
