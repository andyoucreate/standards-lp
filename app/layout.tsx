import "@splidejs/react-splide/css";
import "tippy.js/animations/shift-toward.css";
import "./globals.css";

import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Providers } from "./providers";

const manrope = Manrope({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://emailoverflow.com"
  ),
  title: {
    default: "Emailoverflow - Inspiration Email Marketing Illimitée",
    template: "%s | Emailoverflow",
  },
  description:
    "Suivez automatiquement les emails, publicités et landing pages de vos concurrents. Accédez à plus de 100M d'assets marketing et économisez 20+ heures par mois.",
  keywords: [
    "email marketing",
    "veille concurrentielle",
    "inspiration marketing",
    "suivi emails",
    "benchmarks marketing",
    "intelligence concurrentielle",
    "publicités",
    "landing pages",
  ],
  authors: [{ name: "Emailoverflow" }],
  creator: "Emailoverflow",
  publisher: "Emailoverflow",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Emailoverflow",
    title: "Emailoverflow - Inspiration Email Marketing Illimitée",
    description:
      "Suivez automatiquement les emails, publicités et landing pages de vos concurrents. Économisez 20+ heures par mois.",
    images: [
      {
        url: "/fb-og-image.png",
        width: 1200,
        height: 630,
        alt: "Emailoverflow - Inspiration Email Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emailoverflow - Inspiration Email Marketing Illimitée",
    description:
      "Suivez automatiquement les emails, publicités et landing pages de vos concurrents. Économisez 20+ heures par mois.",
    creator: "@emailoverflow",
    images: ["/twitter-card.png"],
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${manrope.variable} font-sans bg-n-8 text-n-1 text-base antialiased`}
      >
        <Providers>
          {children}
          <svg className="block" width={0} height={0}>
            <defs>
              <linearGradient
                id="btn-left"
                x1="50%"
                x2="50%"
                y1="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#89F9E8" />
                <stop offset="100%" stopColor="#FACB7B" />
              </linearGradient>
              <linearGradient
                id="btn-top"
                x1="100%"
                x2="0%"
                y1="50%"
                y2="50%"
              >
                <stop offset="0%" stopColor="#D87CEE" />
                <stop offset="100%" stopColor="#FACB7B" />
              </linearGradient>
              <linearGradient
                id="btn-bottom"
                x1="100%"
                x2="0%"
                y1="50%"
                y2="50%"
              >
                <stop offset="0%" stopColor="#9099FC" />
                <stop offset="100%" stopColor="#89F9E8" />
              </linearGradient>
              <linearGradient
                id="btn-right"
                x1="14.635%"
                x2="14.635%"
                y1="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#9099FC" />
                <stop offset="100%" stopColor="#D87CEE" />
              </linearGradient>
            </defs>
          </svg>
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
