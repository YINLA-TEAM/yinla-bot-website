import "@/app/globals.css";
import type { Metadata } from "next";
import { Noto_Sans_TC, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/app/theme-provider";
import AppHeader  from "@/components/app/appHeader";
import AppFooter from "@/components/app/appFooter";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: 'YINLA - 讓你的伺服器更有趣、更實用',
    template: '%s | YINLA',
  },
  authors: [{
    name: 'YinCheng',
    url: 'https://yincheng.app',
  }],
  description: 'YINLA 是專為臺灣社群打造的 Discord 全能機器人。提供地震報告、即時天氣預警、中油油價推播、中華職棒 (CPBL) 賽況及翻譯系統。',
  keywords: ['Discord Bot', 'YINLA', '地震速報', '中華職棒', 'CPBL', '油價查詢', '天氣預報', 'YouBike', '翻譯機器人'],
  openGraph: {
    title: 'YINLA - 讓你的伺服器更有趣、更實用',
    description: '整合地震、天氣、職棒與油價資訊，讓你的 Discord 伺服器更聰明！',
    url: 'https://bot.yincheng.app',
    siteName: 'YINLA',
    images: [
      {
        url: '/YINLA_v2.png',
        width: 800,
        height: 800,
        alt: 'YINLA Bot Logo',
      },
    ],
    locale: 'zh_TW',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-tw"
      suppressHydrationWarning
      className={`${inter.variable} ${notoSansTC.variable}`}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AppHeader />
          {children}
          <AppFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
