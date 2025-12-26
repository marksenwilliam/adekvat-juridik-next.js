'use client';

import { useState } from 'react';

interface PricingItem {
  title: string;
  description: string;
  price: string;
}

interface PricingCategory {
  id: number;
  title: string;
  description: string;
  items: PricingItem[];
}

export default function PrislistaPage() {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleDropdown = (id: number) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  // Helper function to extract numeric value from price string
  const extractPrice = (priceStr: string): number => {
    const match = priceStr.match(/(\d[\d\s]*)/);
    if (!match) return 0;
    return parseInt(match[0].replace(/\s/g, ''));
  };

  const categories: PricingCategory[] = [
    {
      id: 1,
      title: 'Avtal & bolag',
      description: 'Vi hjälper dig med avtalsrätt, bolagsbildning och företagsjuridik. Professionell rådgivning för att säkerställa dina affärsintressen.',
      items: [
        { title: 'Avtalsgranskning', description: 'Granskning av avtal med skriftliga kommentarer', price: '5 000 kr' },
        { title: 'Standardavtal', description: 'Upprättande av t.ex. konsult- eller sekretessavtal', price: '8 000 kr' },
        { title: 'Bolagsstart – paket', description: 'Juridik vid bolagsstart, inklusive handlingar', price: '15 000 kr' },
        { title: 'Aktieägaravtal small business', description: 'Aktieägaravtal för 2–4 delägare', price: '20 000 kr' },
      ].sort((a, b) => extractPrice(a.price) - extractPrice(b.price)),
    },
    {
      id: 2,
      title: 'Hyresjuridik',
      description: 'Expert rådgivning vid hyrestvister, uppsägningar och kontraktsfrågor. Vi säkerställer dina rättigheter som hyresvärd eller hyresgäst.',
      items: [
        { title: 'Genomgång av hyreskontraktet', description: 'Förhandling i hyresnämnden och ev. domstolen', price: '8 000 kr' },
      ].sort((a, b) => extractPrice(a.price) - extractPrice(b.price)),
    },
    {
      id: 3,
      title: 'Tvister',
      description: 'Erfaren representation i tvistlösning, både i och utanför domstol. Vi står vid din sida genom hela rättsprocessen med kompetens och engagemang.',
      items: [
        { title: 'Kravbrev/ombudsbrev', description: 'Upprättande av kravbrev', price: '6 000 kr' },
        { title: 'Tvisteanalys', description: 'Genomgång, möte och skriftlig bedömning', price: '8 000 kr' },
        { title: 'Svaromål – enklare tvist', description: 'Svaromål efter genomgång av underlag', price: '15 000 kr' },
      ].sort((a, b) => extractPrice(a.price) - extractPrice(b.price)),
    },
    {
      id: 4,
      title: 'Företag',
      description: 'Komplett juridiskt stöd för företag – från avtalsrätt och bolagsbildning till tvistlösning och förhandlingar. Vi skyddar dina affärsintressen.',
      items: [
        { title: 'Lilla företagsjuridik – månadspris', description: 'Löpande juridiskt stöd per månad', price: '5 000–10 000 kr/mån' },
        { title: 'HR-/anställningspaket', description: 'Avtalsmallar, klausuler och enkel policy', price: '12 000 kr' },
        { title: 'GDPR-/policygenomgång – light', description: 'Översyn av rutiner och policyunderlag', price: '15 000 kr' },
      ].sort((a, b) => extractPrice(a.price) - extractPrice(b.price)),
    },
    {
      id: 5,
      title: 'Familjerätt',
      description: 'Vi hjälper dig med äktenskapsförord, vårdnadstvister, bodelning och skilsmässa. Personlig rådgivning i känsliga familjerättsliga frågor med fokus på ditt bästa.',
      items: [
        { title: 'Äktenskapsförord', description: 'Rådgivning och upprättande av äktenskapsförord', price: '5 000 kr' },
        { title: 'Samboavtal + skuldebrev', description: 'Samboavtal och skuldebrev kopplat till bostad', price: '7 000 kr' },
        { title: 'Bodelningsavtal (överens parter)', description: 'Framtagande av bodelningsavtal', price: '15 000 kr' },
      ].sort((a, b) => extractPrice(a.price) - extractPrice(b.price)),
    },
    {
      id: 6,
      title: 'Arvsrätt',
      description: 'Stöd vid arvskiften, testamenten och boutredningar. Vi guidar dig genom processen med omsorg och juridisk expertis för att säkerställa rättvisa lösningar.',
      items: [
        { title: 'Testamente – enkel', description: 'Rådgivning och upprättande av testamente', price: '5 000 kr' },
        { title: 'Inbördes testamente', description: 'Testamente för makar eller sambor', price: '8 000 kr' },
        { title: 'Boutredning & arvskifte (överens)', description: 'Arvskifteshandling och visst stöd', price: '20 000 kr' },
      ].sort((a, b) => extractPrice(a.price) - extractPrice(b.price)),
    },
    {
      id: 7,
      title: 'Rådgivning',
      description: 'Allmän juridisk rådgivning för privatpersoner och företag. Vi erbjuder skräddarsydda lösningar och vägledning för alla typer av juridiska frågor.',
      items: [
        { title: '"Fråga juristen" – möte', description: '30–60 min juridisk rådgivning', price: '2 000 kr (privat inkl. moms)' },
        { title: 'Dokumentgranskning – mini', description: 'Snabb genomgång av ett dokument', price: '4 000 kr' },
      ].sort((a, b) => extractPrice(a.price) - extractPrice(b.price)),
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="flex flex-col lg:px-12 text-center bg-[#0c122b] w-full pt-24 pr-6 pb-20 pl-6 items-center justify-center relative z-10" style={{ paddingTop: '6.25rem', paddingBottom: '4.375rem' }}>
        <div className="mt-20 mb-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-200 backdrop-blur font-sans">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 text-violet-300">
              <rect width="20" height="14" x="2" y="5" rx="2"></rect>
              <line x1="2" x2="22" y1="10" y2="10"></line>
            </svg>
            Juridik, skräddarsydd för dig
          </span>
        </div>
        <h2 className="sm:text-5xl md:text-6xl text-4xl font-light text-white tracking-tight font-playfair mb-5">
          Transparenta priser
        </h2>
        <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
          Vi erbjuder ett antal juridiska tjänster till fasta priser för att du i förväg ska veta vad ditt ärende kostar. Observera att priserna är ungefärliga och kan justeras efter ärendets omfattning.
        </p>
      </div>

      {/* Pricing Section */}
      <section className="lg:py-28 bg-white w-full pt-20 pb-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4 lg:px-6">

          {/* Card Container */}
          <div className="bg-white shadow-xl border border-neutral-200 p-8 lg:p-12">

            {/* Header */}
            <header className="mb-12 lg:mb-16">
              <p className="text-xs font-medium uppercase tracking-[0.26em] text-neutral-400 mb-4">
                Juridik · Skräddarsydd för dig
              </p>
              <h2 className="sm:text-5xl text-4xl font-medium text-neutral-900 tracking-tight font-playfair">Prislista</h2>
              <p className="sm:text-base leading-relaxed text-sm font-light text-neutral-500 max-w-2xl mt-4">
                Vi erbjuder ett antal juridiska tjänster till fasta priser för att du i förväg ska veta vad ditt ärende kostar. Observera att priserna är ungefärliga och kan justeras efter ärendets omfattning.
              </p>
            </header>

            {/* Features List */}
            <div className="space-y-0 divide-y divide-neutral-200">
              {categories.map((category) => (
                <div key={category.id} className="feature-item">
                  <article
                    className={`feature-article flex flex-col sm:flex-row sm:items-center lg:py-10 group transition-colors -mx-6 pt-8 pr-6 pb-8 pl-6 gap-x-6 gap-y-6 cursor-pointer ${
                      openDropdown === category.id ? 'bg-neutral-50' : ''
                    }`}
                    onClick={() => toggleDropdown(category.id)}
                  >
                    <h3 className="flex-1 text-2xl sm:text-3xl lg:text-4xl font-medium text-neutral-900 tracking-tight font-playfair">
                      {category.title}
                    </h3>
                    <p className="flex-[2] text-sm sm:text-base leading-relaxed text-neutral-500 font-light">
                      {category.description}
                    </p>
                    <button
                      className={`dropdown-btn ml-auto inline-flex items-center justify-center h-11 w-11 flex-none rounded-full bg-gradient-to-br from-[#C4A470]/20 to-[#C4A470]/5 text-[#C4A470] hover:bg-[#C4A470] hover:text-white outline-none border border-[#C4A470]/20 transition-all ${
                        openDropdown === category.id ? 'bg-[#C4A470] text-white' : ''
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`w-5 h-5 transition-transform duration-400 ${
                          openDropdown === category.id ? 'rotate-180' : ''
                        }`}
                      >
                        <path d="M12 5v14"></path>
                        <path d="m19 12-7 7-7-7"></path>
                      </svg>
                    </button>
                  </article>

                  {/* Dropdown Content */}
                  <div
                    className={`overflow-hidden transition-all duration-500 -mx-6 px-6 ${
                      openDropdown === category.id ? 'max-h-[1000px] opacity-100 pt-2 pb-2' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="bg-neutral-50 p-6 mb-4 space-y-4">
                      {category.items.map((item, index) => (
                        <div
                          key={index}
                          className="pricing-item flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-neutral-200 last:border-0 gap-2"
                        >
                          <div className="flex-1">
                            <h4 className="text-base font-medium text-neutral-800">{item.title}</h4>
                            <p className="text-sm text-neutral-500 font-light">{item.description}</p>
                          </div>
                          <span className="text-base font-medium text-[#C4A470]">{item.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
