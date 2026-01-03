import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Rättsområden - Juridisk Expertis inom Flera Områden',
  description: 'Utforska våra rättsområden: juridisk rådgivning, tvistlösning, konsulttjänster och företagsöverlåtelser. Över 40 års erfarenhet. Kostnadsfri konsultation.',
  alternates: {
    canonical: 'https://www.adekvatjuridik.se/rattsomraden',
  },
  openGraph: {
    title: 'Rättsområden | Adekvat Juridik',
    description: 'Utforska våra rättsområden: juridisk rådgivning, tvistlösning, konsulttjänster och företagsöverlåtelser.',
  },
};

export default function RattsomradenPage() {
  const breadcrumbs = [
    { label: 'Hem', href: '/' },
    { label: 'Rättsområden', href: '/rattsomraden' },
  ];

  return (
    <>
      <div className="bg-[#050A18] min-h-screen text-gray-200 selection:bg-[#C4A470] selection:text-white overflow-x-hidden">

        {/* Breadcrumbs */}
        <div className="pt-32 px-6 lg:px-12 max-w-[1400px] mx-auto">
          <Breadcrumbs items={breadcrumbs} renderNav={true} />
        </div>

        {/* Hero Section */}
        <section className="relative w-full px-6 lg:px-12 py-12 lg:py-20">
          <div className="max-w-[1400px] mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium font-playfair leading-[1.1] mb-8 text-white">
              Rättsområden
            </h1>
            <div className="w-12 h-px bg-[#C4A470] mx-auto mb-8"></div>
            <p className="text-gray-400 font-light text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
              Med över 40 års erfarenhet erbjuder vi kvalificerad juridisk hjälp inom flera områden. 
              Oavsett om du är privatperson eller företagare finns vi här för att vägleda dig genom 
              juridikens komplexitet med personligt engagemang och expertis.
            </p>
          </div>
        </section>

        {/* Service Cards Section */}
        <section className="py-16 lg:py-24 bg-[#F9F8F6]">
          <div className="max-w-[1200px] mx-auto px-6">

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Card 1: Juridisk Rådgivning */}
              <Link href="/rattsomraden/juridisk-radgivning" className="flex flex-col group hover:-translate-y-1 transition-transform duration-300 bg-white h-full pt-10 pr-10 pb-10 pl-10 items-start shadow-sm">
                <div className="w-12 h-12 rounded-full border border-[#EBE5DA] flex items-center justify-center text-[#C4A470] mb-6 group-hover:border-[#C4A470] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 stroke-[1.5]">
                    <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                    <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                    <path d="M10 9H8"></path>
                    <path d="M16 13H8"></path>
                    <path d="M16 17H8"></path>
                  </svg>
                </div>
                <h3 className="font-serif text-xl text-[#1a1a1a] mb-4">Juridisk Rådgivning</h3>
                <p className="text-xs text-gray-500 font-light leading-relaxed mb-6">Allmänna juridiska frågor, avtal, genomgång av handlingar.</p>
                <div className="mt-auto">
                  <span className="inline-flex items-center text-[10px] uppercase group-hover:text-[#1a1a1a] transition-colors font-medium text-[#C4A470] tracking-[0.15em]">
                    Läs mer
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </span>
                </div>
              </Link>

              {/* Card 2: Tvister */}
              <Link href="/rattsomraden/tvister" className="flex flex-col group hover:-translate-y-1 transition-transform duration-300 bg-white h-full pt-10 pr-10 pb-10 pl-10 items-start shadow-sm">
                <div className="w-12 h-12 rounded-full border border-[#EBE5DA] flex items-center justify-center text-[#C4A470] mb-6 group-hover:border-[#C4A470] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 stroke-[1.5]">
                    <path d="M12 3v18"></path>
                    <path d="m19 8 3 8a5 5 0 0 1-6 0zV7"></path>
                    <path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1"></path>
                    <path d="m5 8 3 8a5 5 0 0 1-6 0zV7"></path>
                    <path d="M7 21h10"></path>
                  </svg>
                </div>
                <h3 className="font-serif text-xl text-[#1a1a1a] mb-4">Tvister</h3>
                <p className="text-xs text-gray-500 font-light leading-relaxed mb-6">Processer i och utanför domstol, medling och förhandling.</p>
                <div className="mt-auto">
                  <span className="inline-flex items-center text-[10px] uppercase group-hover:text-[#1a1a1a] transition-colors font-medium text-[#C4A470] tracking-[0.15em]">
                    Läs mer
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </span>
                </div>
              </Link>

              {/* Card 3: Konsulttjänster */}
              <Link href="/rattsomraden/konsulttjanster" className="flex flex-col group hover:-translate-y-1 transition-transform duration-300 bg-white h-full pt-10 pr-10 pb-10 pl-10 items-start shadow-sm">
                <div className="w-12 h-12 rounded-full border border-[#EBE5DA] flex items-center justify-center text-[#C4A470] mb-6 group-hover:border-[#C4A470] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 stroke-[1.5]">
                    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                  </svg>
                </div>
                <h3 className="font-serif text-xl text-[#1a1a1a] mb-4">Konsulttjänster</h3>
                <p className="text-xs text-gray-500 font-light leading-relaxed mb-6">Löpande stöd till företag och organisationer i vardagen.</p>
                <div className="mt-auto">
                  <span className="inline-flex items-center text-[10px] uppercase group-hover:text-[#1a1a1a] transition-colors font-medium text-[#C4A470] tracking-[0.15em]">
                    Läs mer
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </span>
                </div>
              </Link>

              {/* Card 4: Företagsöverlåtelser */}
              <Link href="/rattsomraden/foretagsoverlatelser" className="flex flex-col group hover:-translate-y-1 transition-transform duration-300 bg-white h-full pt-10 pr-10 pb-10 pl-10 items-start shadow-sm">
                <div className="w-12 h-12 rounded-full border border-[#EBE5DA] flex items-center justify-center text-[#C4A470] mb-6 group-hover:border-[#C4A470] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 stroke-[1.5]">
                    <path d="M10 12h4"></path>
                    <path d="M10 8h4"></path>
                    <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
                    <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
                    <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
                  </svg>
                </div>
                <h3 className="font-serif text-xl text-[#1a1a1a] mb-4">Företagsöverlåtelser</h3>
                <p className="text-xs text-gray-500 font-light leading-relaxed mb-6">Rådgivning, avtal och förhandling vid köp och försäljning.</p>
                <div className="mt-auto">
                  <span className="inline-flex items-center text-[10px] uppercase group-hover:text-[#1a1a1a] transition-colors font-medium text-[#C4A470] tracking-[0.15em]">
                    Läs mer
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </span>
                </div>
              </Link>
            </div>

            {/* Footer Text */}
            <div className="mt-20 text-center">
              <p className="text-sm italic text-gray-400 font-serif">
                Kontakta oss gärna om du är osäker på om ditt ärende faller inom våra områden
              </p>
              <div className="mt-8">
                <Link 
                  href="/kontakt" 
                  className="inline-flex items-center justify-center text-[11px] uppercase font-semibold text-white tracking-widest bg-[#C4A470] hover:bg-[#b39360] transition-colors rounded-sm py-4 px-8"
                >
                  Kontakta oss
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
