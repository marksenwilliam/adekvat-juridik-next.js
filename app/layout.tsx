import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ['300', '400', '500', '600'],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '900'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.adekvatjuridik.se'),
  title: {
    default: "Adekvat Juridik - Juridisk rådgivning i Sverige",
    template: "%s | Adekvat Juridik"
  },
  description: "Erfaren juridisk rådgivning i Sverige. Över 40 års erfarenhet inom tvister, avtal, företagsöverlåtelser och konsulttjänster. Kostnadsfri första konsultation.",
  keywords: ["juridisk rådgivning", "advokat", "jurist", "tvister", "avtal", "företagsöverlåtelser", "juridisk hjälp Sverige", "rättshjälp", "juridisk konsult"],
  authors: [{ name: "Adekvat Juridik" }],
  creator: "Adekvat Juridik",
  publisher: "Adekvat Juridik",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Adekvat Juridik - Juridisk rådgivning i Sverige",
    description: "Erfaren juridisk rådgivning i Sverige. Över 40 års erfarenhet inom tvister, avtal, företagsöverlåtelser och konsulttjänster.",
    url: 'https://www.adekvatjuridik.se',
    siteName: 'Adekvat Juridik',
    locale: 'sv_SE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Adekvat Juridik - Juridisk rådgivning i Sverige",
    description: "Erfaren juridisk rådgivning i Sverige. Över 40 års erfarenhet inom tvister, avtal, företagsöverlåtelser och konsulttjänster.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: 'https://www.adekvatjuridik.se/assets/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: 'https://www.adekvatjuridik.se/assets/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: 'https://www.adekvatjuridik.se/assets/favicon-144x144.png', sizes: '144x144', type: 'image/png' },
      { url: 'https://www.adekvatjuridik.se/assets/favicon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: 'https://www.adekvatjuridik.se/assets/favicon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  verification: {
    // Add your Google Search Console verification code here when available
    // google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Adekvat Juridik',
    image: 'https://www.adekvatjuridik.se/logo.png',
    '@id': 'https://www.adekvatjuridik.se',
    url: 'https://www.adekvatjuridik.se',
    telephone: '+46-123-456-78',
    email: 'info@adekvatjuridik.se',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'SE',
      addressLocality: 'Sverige',
    },
    geo: {
      '@type': 'GeoCoordinates',
    },
    sameAs: [
      // Add social media profiles when available
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday'
      ],
      opens: '09:00',
      closes: '17:00'
    },
    priceRange: '$$',
    areaServed: {
      '@type': 'Country',
      name: 'Sweden'
    },
    description: 'Erfaren juridisk rådgivning i Sverige. Över 40 års erfarenhet inom tvister, avtal, företagsöverlåtelser och konsulttjänster.',
    knowsAbout: [
      'Juridisk Rådgivning',
      'Tvister',
      'Konsulttjänster',
      'Företagsöverlåtelser',
      'Avtalsrätt',
      'Processrätt'
    ],
  };

  return (
    <html lang="sv" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Cookiebot Cookie Consent */}
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="1a3a63d8-20b9-447c-ba35-363f1e913bc0"
          data-blockingmode="auto"
          strategy="beforeInteractive"
        />
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GLJ7KTJEWH"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GLJ7KTJEWH');
          `}
        </Script>
        {/* Preconnect to external resources for better performance */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://hoirqrkdgbmvpwutwuwj.supabase.co" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://hoirqrkdgbmvpwutwuwj.supabase.co" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} bg-black text-white antialiased selection:bg-white selection:text-black overflow-x-hidden`} style={{ fontFamily: 'var(--font-inter), sans-serif' }} suppressHydrationWarning>
        <Header />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
