import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@fontsource-variable/instrument-sans";
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
  title: "贝塔文创｜内容创作辅导与思路支持",
  description:
    "面向内容创作思路辅导、资料阅读辅助、结构建议、数据分析思路梳理与专业表达优化的合规创作支持服务。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
