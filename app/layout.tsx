import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
