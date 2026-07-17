import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
// TypeScript may complain about side-effect CSS imports in some setups.
// @ts-ignore
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Thiogo Gambeta - Software Engineer",
  description: "",
  keywords: [
    "Thiogo Gambeta",
    "Software Engineer",
    "Frontend Developer",
    "Portfolio",
  ],
  authors: [{ name: "Thiogo Gambeta" }],
  creator: "Thiogo Gambeta",
  publisher: "Thiogo Gambeta",
  openGraph: {
    type: "website",
    locale: "pt-BR",
    url: "https://thiogogambeta.com.br",
    title: "Thiogo Gambeta - Software Engineer",
    description: "",
    siteName: "Thiogo Gambeta Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thiogo Gambeta - Software Engineer",
    description: "",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://thiogogambeta.com.br" />
      </head>
      <body
        className={`${poppins.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
