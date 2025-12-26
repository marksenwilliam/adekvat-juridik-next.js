'use client';

import Link from 'next/link'

export default function RattsomradenPage() {
  return (
    <>
      {/* Fixed Hero Background */}
      <div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" style={{
        backgroundImage: "url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/abbe90fd-9c3a-4dae-acd5-6a3d77c640af_3840w.jpg')",
        maskImage: "linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)"
      }}></div>

      {/* Fixed Hero Background Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content Wrapper */}
      <div className="z-10 flex flex-col relative">

        {/* SECTION 1: Hero */}
        <section className="min-h-screen flex lg:px-12 w-full pt-28 pr-6 pb-20 pl-6 items-center justify-center">
          <div className="max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">

            <div className="lg:col-span-7 flex flex-col">
              <div className="mb-6 pl-1">
                <span className="text-[10px] tracking-[0.25em] text-white/50 uppercase font-medium">
                  Est. 1984
                </span>
              </div>

              <h1 className="leading-[0.95] -translate-x-16 md:text-8xl lg:text-[7rem] xl:text-[8rem] xl:text-7xl text-7xl italic text-white tracking-tight w-13 h-50 pt-5 pb-5 scale-75 skew-x-5 font-playfair" style={{
                maskImage: 'linear-gradient(170deg, transparent, black 0%, black 100%, transparent)'
              }}>
                Trygg juridik, när det gäller.
              </h1>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-end lg:pb-6 pl-0 lg:pl-10">
              <div className="lg:border-l border-white/10 lg:pl-10 space-y-8">
                <p className="text-sm lg:text-base text-gray-400 font-light leading-relaxed max-w-md">
                  Juridisk expertis med över 40 års erfarenhet. Vi stöttar privatpersoner och företag genom hela den
                  juridiska processen med engagemang och precision.
                </p>

                <a href="#rattsomraden" className="group inline-flex items-center gap-4 mt-4">
                  <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:border-white group-hover:bg-white group-hover:text-black transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 stroke-[1.5]">
                      <path d="M12 5v14"></path>
                      <path d="m19 12-7 7-7-7"></path>
                    </svg>
                  </div>
                  <span className="text-[10px] tracking-[0.2em] uppercase font-medium text-white/70 group-hover:text-white transition-colors">
                    Upptäck mer
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: Rättsområden */}
        <section id="rattsomraden" className="py-24 lg:py-32 bg-[#F9F8F6]">
          <div className="max-w-[1200px] mr-auto ml-auto pr-6 pl-6">

            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="lg:text-5xl uppercase text-4xl text-[#1a1a1a] tracking-widest font-playfair mb-6">
                Rättsområden
              </h2>
              <div className="w-12 h-px bg-[#C4A470] mx-auto mb-8"></div>
              <p className="text-gray-500 font-light text-sm lg:text-base">
                Vi erbjuder kvalificerad juridisk hjälp inom bland annat:
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 gap-x-6 gap-y-6">

              {/* Card 1 */}
              <Link href="/juridisk-radgivning" className="flex flex-col group hover:-translate-y-1 transition-transform duration-300 bg-white h-full pt-10 pr-10 pb-10 pl-10 items-start">
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

              {/* Card 2 */}
              <Link href="/tvister" className="flex flex-col group hover:-translate-y-1 transition-transform duration-300 bg-white h-full pt-10 pr-10 pb-10 pl-10 items-start">
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

              {/* Card 3 */}
              <Link href="/konsulttjanster" className="flex flex-col group hover:-translate-y-1 transition-transform duration-300 bg-white h-full pt-10 pr-10 pb-10 pl-10 items-start">
                <div className="w-12 h-12 rounded-full border border-[#EBE5DA] flex items-center justify-center text-[#C4A470] mb-6 group-hover:border-[#C4A470] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 stroke-[1.5]">
                    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                  </svg>
                </div>
                <h3 className="font-serif text-xl text-[#1a1a1a] mb-4">Konsulttjänster</h3>
                <p className="text-xs text-gray-500 font-light leading-relaxed mb-6">Löpande stöd till företag och organisationer i vardagen.</p>
                <div className="mt-auto">
                  <span className="inline-flex items-center text-[10px] uppercase group-hover:text-[#1a1a1a] transition-colors cursor-pointer font-medium text-[#C4A470] tracking-[0.15em]">
                    Läs mer
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </span>
                </div>
              </Link>

              {/* Card 4 */}
              <Link href="/foretagsoverlatelser" className="flex flex-col group hover:-translate-y-1 transition-transform duration-300 cursor-pointer bg-white h-full pt-10 pr-10 pb-10 pl-10 items-start">
                <div className="flex group-hover:border-[#C4A470] transition-colors text-[#C4A470] w-12 h-12 border-[#EBE5DA] border rounded-full mb-6 items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-[1.5] w-5 h-5">
                    <path d="M10 12h4"></path>
                    <path d="M10 8h4"></path>
                    <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
                    <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
                    <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
                  </svg>
                </div>
                <h3 className="font-serif text-xl text-[#1a1a1a] mb-4">Företagsöverlåtelser</h3>
                <p className="leading-relaxed text-xs font-light text-gray-500 mb-6">Rådgivning, avtal och förhandling vid köp och försäljning.</p>
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
              <p className="text-sm italic text-gray-400 font-serif cursor-pointer">
                Kontakta oss gärna om du är osäker på om ditt ärende faller inom våra områden
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: Prislista */}
        <section className="lg:py-32 text-white bg-[#03052b] pt-24 pb-24">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">

              {/* Left Column */}
              <div>
                <h2 className="lg:text-5xl uppercase leading-tight text-4xl tracking-widest font-playfair mb-4">
                  Rättshjälp
                  <span className="italic font-normal text-[#C4A470] font-playfair"> &</span> Arvode
                </h2>
                <div className="w-12 h-px bg-[#C4A470] mb-12"></div>

                {/* Offer Card */}
                <div className="bg-[#050615] border-white/5 border px-12 py-12 relative">
                  <span className="absolute top-8 right-8 text-[10px] tracking-[0.2em] uppercase text-gray-500 font-medium">Erbjudande</span>

                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-[#C4A470] mb-8">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 stroke-[1.5]">
                      <path d="M12 6v6l4 2"></path>
                      <circle cx="12" cy="12" r="10"></circle>
                    </svg>
                  </div>

                  <h3 className="text-3xl text-white tracking-tight font-playfair mb-2">1 timmes fri konsultation</h3>
                  <p className="font-serif italic text-[#C4A470] text-lg mb-8">Värde 2 500 kr</p>

                  <p className="text-sm text-gray-400 font-light leading-relaxed mb-10 max-w-sm">
                    Vi erbjuder alltid ett kostnadsfritt första möte för att gå igenom din situation och bedöma hur vi bäst kan hjälpa dig.
                  </p>

                  <a href="#boka" className="inline-flex items-center text-[10px] font-bold tracking-[0.15em] uppercase text-white hover:text-[#C4A470] transition-colors group">
                    Boka tid nu
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col justify-center space-y-10 lg:pt-8">

                {/* Item 1 */}
                <div className="flex gap-8 group">
                  <div className="flex-shrink-0 pt-1">
                    <div className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/50 italic font-serif text-lg group-hover:border-[#C4A470]/50 group-hover:text-[#C4A470] transition-colors duration-300">1</div>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-2xl text-white tracking-tight font-playfair mb-3">Timarvode & Fakturering</h3>
                    <p className="text-sm text-gray-400 font-light leading-relaxed mb-4 max-w-lg">
                      Vi debiterar per timme och fakturerar normalt när ärendet är avslutat. I vissa fall kan vi be om ett löpande förskott till vårt klientmedelskonto. Detta dras sedan av från det slutliga arvodet när uppdraget avslutas.
                    </p>
                    <Link href="/prislista" className="hover:text-white transition-colors underline-offset-4 hover:underline text-xs text-[#C4A470]">
                      Se fullständig prislista
                    </Link>
                  </div>
                </div>

                <div className="w-full h-px bg-white/5"></div>

                {/* Item 2 */}
                <div className="flex gap-8 group">
                  <div className="flex-shrink-0 pt-1">
                    <div className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/50 group-hover:border-[#C4A470]/50 group-hover:text-[#C4A470] transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 stroke-[1.5]">
                        <path d="M12.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v9.34"></path>
                        <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                        <path d="M10.378 12.622a1 1 0 0 1 3 3.003L8.36 20.637a2 2 0 0 1-.854.506l-2.867.837a.5.5 0 0 1-.62-.62l.836-2.869a2 2 0 0 1 .506-.853z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-2xl text-white tracking-tight font-playfair mb-3">Fasta Priser</h3>
                    <p className="text-sm text-gray-400 font-light leading-relaxed max-w-lg">
                      Vid upprättande av exempelvis testamente, äktenskapsförord eller samboavtal tillämpar vi ofta fasta priser för att ge dig trygghet och överskådlighet. Kontakta oss för aktuella prisuppgifter.
                    </p>
                  </div>
                </div>

                <div className="w-full h-px bg-white/5"></div>

                {/* Item 3 */}
                <div className="flex gap-8 group">
                  <div className="flex-shrink-0 pt-1">
                    <div className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/50 group-hover:border-[#C4A470]/50 group-hover:text-[#C4A470] transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 stroke-[1.5]">
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-2xl text-white tracking-tight font-playfair mb-3">Rättsskydd & Försäkring</h3>
                    <p className="text-sm text-gray-400 font-light leading-relaxed max-w-lg">
                      I många ärenden har du rätt till ersättning genom rättsskydd i din hemförsäkring eller företagsförsäkring. Vi hjälper dig att kontakta försäkringsbolaget och utreda om du kan använda rättsskyddet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
