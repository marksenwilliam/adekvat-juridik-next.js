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
  title: "Adekvat Juridik - Modern Replica",
  description: "Juridisk expertis med över 40 års erfarenhet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} bg-black text-white antialiased selection:bg-white selection:text-black overflow-x-hidden`} style={{ fontFamily: 'var(--font-inter), sans-serif' }} suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
