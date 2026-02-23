import "@/app/globals.css";
import type { Metadata } from "next";
import { Noto_Sans_TC, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/app/theme-provider";
import AppHeader  from "@/components/app/appHeader";

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
    default: "YINLA",
    template: "%s | YINLA",
  },
  description: "Discord bot",
  publisher: "YINLA",
  openGraph: {
    title: "YINLA",
    description: "Discord bot",
    url: "https://bot.yincheng.app",
    siteName: "YINLA",
    locale: "zh-TW",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YINLA",
    description: "Discord bot",
    creator: "@yincheng",
  }
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
        </ThemeProvider>
      </body>
    </html>
  );
}
