import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Taylent AI — 优化您的 LLM 延迟和成本",
  description:
    "AI 高速中转 · 为 AI Agent 赋能。完美适配 Claude Code 与 Codex，0 代码侵入，尽享沉浸式极速编程体验。",
  metadataBase: new URL("https://ai.taylent.com"),
  openGraph: {
    title: "Taylent AI — 优化您的 LLM 延迟和成本",
    description:
      "AI 高速中转 · 为 AI Agent 赋能。完美适配 Claude Code 与 Codex，0 代码侵入。",
    type: "website",
    url: "https://ai.taylent.com",
    siteName: "Taylent AI",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#05080f" },
  ],
};

// Inline early-FOIT-prevention: read stored theme before React hydrates.
// Honours ?_theme=light|dark for screenshot tooling and quick QA.
const themeBootstrap = `
(function(){try{
var k='taylent-theme';
var url=new URL(location.href);
var q=url.searchParams.get('_theme');
if(q==='light'||q==='dark'){localStorage.setItem(k,q);}
var s=localStorage.getItem(k);
var d=window.matchMedia('(prefers-color-scheme: dark)').matches;
var t=s||(d?'dark':'light');
if(t==='dark')document.documentElement.classList.add('dark');
else document.documentElement.classList.remove('dark');
}catch(e){document.documentElement.classList.add('dark');}})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-Hans"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <script
          // Runs before React hydrates — prevents FOUC and ensures
          // the right CSS variables are in place from the very first paint.
          dangerouslySetInnerHTML={{ __html: themeBootstrap }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
