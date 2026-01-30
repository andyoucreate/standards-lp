import "@splidejs/react-splide/css";
import "tippy.js/animations/shift-toward.css";
import "../globals.css";

import { JsonLd } from "@/components/JsonLd";
import { routing } from "@/i18n/routing";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Manrope } from "next/font/google";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { Providers } from "../providers";

const manrope = Manrope({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = await params;

  const metadata = {
    fr: {
      title: "emailoverflow - Inspiration Email Marketing Illimitée",
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
    },
    en: {
      title: "emailoverflow - Unlimited Email Marketing Inspiration",
      description:
        "Automatically track your competitors' emails, ads and landing pages. Access 100M+ marketing assets and save 20+ hours per month.",
      keywords: [
        "email marketing",
        "competitive intelligence",
        "marketing inspiration",
        "email tracking",
        "marketing benchmarks",
        "competitor tracking",
        "advertisements",
        "landing pages",
      ],
    },
  };

  const content = metadata[locale as keyof typeof metadata] || metadata.fr;

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://emailoverflow.ai"),
    title: {
      default: content.title,
      template: "%s | emailoverflow",
    },
    description: content.description,
    keywords: content.keywords,
    authors: [{ name: "emailoverflow" }],
    creator: "emailoverflow",
    publisher: "emailoverflow",
    openGraph: {
      type: "website",
      locale: locale === "fr" ? "fr_FR" : "en_US",
      siteName: "emailoverflow",
      title: content.title,
      description: content.description,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "emailoverflow - Email Marketing Inspiration",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: content.title,
      description: content.description,
      creator: "@emailoverflow",
      images: ["/og-image.png"],
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
        { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
        { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    },
    manifest: "/site.webmanifest",
    other: {
      "theme-color": "#0E0C15",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <JsonLd locale={locale} />
      </head>
      <body className={`${manrope.variable} font-sans bg-n-8 text-n-1 text-base antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Providers>
            {children}
            <svg className="block" width={0} height={0}>
              <defs>
                <linearGradient id="btn-left" x1="50%" x2="50%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="#89F9E8" />
                  <stop offset="100%" stopColor="#FACB7B" />
                </linearGradient>
                <linearGradient id="btn-top" x1="100%" x2="0%" y1="50%" y2="50%">
                  <stop offset="0%" stopColor="#D87CEE" />
                  <stop offset="100%" stopColor="#FACB7B" />
                </linearGradient>
                <linearGradient id="btn-bottom" x1="100%" x2="0%" y1="50%" y2="50%">
                  <stop offset="0%" stopColor="#9099FC" />
                  <stop offset="100%" stopColor="#89F9E8" />
                </linearGradient>
                <linearGradient id="btn-right" x1="14.635%" x2="14.635%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="#9099FC" />
                  <stop offset="100%" stopColor="#D87CEE" />
                </linearGradient>
              </defs>
            </svg>
          </Providers>
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
