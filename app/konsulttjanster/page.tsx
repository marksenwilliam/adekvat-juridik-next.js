'use client';

import Link from 'next/link';

export default function KonsulttjansterPage() {
  return (
    <>
      {/* SECTION 1: Hero */}
      <section className="md:pl-6 md:pb-6 bg-[#0C122B] pt-32 pr-6 pb-32 pl-6" style={{ maskImage: 'linear-gradient(180deg, transparent, black 20%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 20%, black 100%, transparent)' }} suppressHydrationWarning>
        <section className="flex flex-col lg:flex-row max-w-5xl mt-20 mr-auto mb-20 ml-auto">

          {/* Left Content */}
          <div className="flex flex-col z-10 lg:w-7/12 lg:pr-0 lg:pl-5 lg:pt-5 lg:pb-5 border-[#c4a470] border-0 pt-12 pr-6 pb-12 pl-6 relative" style={{ maskImage: 'linear-gradient(0deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(0deg, transparent, black 0%, black 100%, transparent)' }} suppressHydrationWarning>

            <h1 className="lg:text-8xl leading-[1.05] text-6xl text-neutral-900 tracking-tighter mb-6">
              <span className="block font-light text-gray-200 font-playfair pb-4">Juridisk <span className="lg:text-[5.6rem] text-[4.2rem]">konsultation</span> –</span>
              <span className="block text-6xl font-normal text-gray-200 tracking-normal font-playfair">Löpande stöd för företag</span>
            </h1>

            <p className="leading-relaxed text-3xl font-normal text-gray-200 tracking-tight font-playfair max-w-xl mr-20 mb-6">Professionell juridisk hjälp när du behöver tydliga svar och trygga beslut</p>
            <p className="leading-relaxed text-base font-normal text-gray-200 max-w-xl mr-20 mb-6">Som företagare eller organisationsansvarig vet du att juridiska frågor sällan väntar. De dyker upp mitt i vardagen – i ett mejl från en leverantör, i ett nytt avtal som behöver granskas, eller i en personalfråga som kräver snabbt besked. Att då behöva leta upp en jurist, förklara hela din verksamhet från grunden och vänta på svar kan vara både tidskrävande och frustrerande.</p>
            <p className="leading-relaxed text-base font-normal text-gray-200 max-w-xl mr-20 mb-6">Därför erbjuder vi konsultverksamhet som ger dig tillgång till kvalificerad juridisk hjälp precis när du behöver den. Tänk på oss som er externa juridiska avdelning.</p>

            <div className="mb-10">
              <button className="group inline-flex overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(196,164,112,0.2)] pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative items-center justify-center">
                <span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#C4A470_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                <span className="absolute inset-0 bg-neutral-800 transition-opacity duration-300 group-hover:opacity-0"></span>
                <span className="flex items-center justify-center gap-2 uppercase transition-colors duration-300 group-hover:text-white text-xs font-extrabold text-stone-800 tracking-widest bg-gradient-to-t from-[#785926] to-[#c4a470] w-full h-full pt-3 pr-8 pb-3 pl-8 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                  <span className="z-10 relative">Boka kostnadsfri konsultation</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Right Visual (Background Image with Books) */}
          <div className="overflow-hidden bg-center lg:w-5/12 lg:flex-1 h-[400px] lg:h-auto bg-neutral-50/50 w-full bg-[url(https://images.unsplash.com/photo-1505663912202-ac22d4cb3707?w=1600&q=80)] bg-cover border-0 relative lg:pt-5 lg:mb-10"></div>
        </section>
      </section>

      {/* SECTION 2: Features Card Layout */}
      <section className="lg:py-32 bg-stone-50 pt-24 pr-6 pb-24 pl-6">
        <div className="max-w-6xl mx-auto">

          {/* Card 1: Mer än reaktiv hjälp */}
          <div className="overflow-hidden sm:px-10 lg:px-14 lg:py-14 bg-[#0C122B] ring-gray-200 ring-1 rounded-none mt-5 mb-10 pt-10 pr-6 pb-10 pl-6 relative left-0 shadow-xl backdrop-blur-none" style={{ boxShadow: '0 25px 50px -12px rgba(2, 2, 2, 0.8), 0 0 30px rgba(196, 164, 112, 0.1)' }}>
            <div className="flex flex-col lg:flex-row gap-x-12 gap-y-12 lg:items-stretch">
              <div className="lg:flex-[3]">
                <p className="text-[11px] sm:text-xs uppercase font-light text-[#c4a470] tracking-widest mr-0 mb-3 ml-0">Vår Process</p>
                <h2 className="sm:text-5xl text-3xl font-light text-gray-200 tracking-tight font-playfair bg-gray-200/0 mb-6">Mer än reaktiv hjälp</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 flex bg-[#C4A470]/10 w-8 h-8 rounded-full items-center justify-center">
                      <span className="text-[#C4A470] font-semibold text-sm">01</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-300 font-light">De flesta företag söker juridisk hjälp först när ett problem uppstått. Men de mest framgångsrika organisationerna arbetar proaktivt – de identifierar risker innan de blir verklighet och bygger strukturer som förebygger konflikter.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 flex bg-[#C4A470]/10 w-8 h-8 rounded-full items-center justify-center">
                      <span className="text-sm font-semibold text-[#C4A470]">02</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-300 font-light">Med löpande juridisk konsultation får du en jurist som känner till er verksamhet, era avtal och era utmaningar. Det betyder att vi kan ge snabbare och mer träffsäkra svar.</p>
                    </div>
                  </div>

                  <h2 className="sm:text-5xl text-3xl font-light text-gray-200 tracking-tight font-playfair bg-gray-200/0 mb-6 mt-4">Skräddarsytt stöd för er vardag</h2>

                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 flex bg-[#C4A470]/10 w-8 h-8 rounded-full items-center justify-center">
                      <span className="text-[#C4A470] font-semibold text-sm">01</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-300 font-light">Vår konsultverksamhet anpassas helt efter era behov.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 flex bg-[#C4A470]/10 w-8 h-8 rounded-full items-center justify-center">
                      <span className="text-sm font-semibold text-[#C4A470]">02</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-300 font-light">Avtalsgranskning och avtalsförhandling är ofta centralt. Vi hjälper er att granska inkommande avtal, identifiera riskklausuler och föreslå ändringar.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 flex bg-[#C4A470]/10 w-8 h-8 rounded-full items-center justify-center">
                      <span className="text-sm font-semibold text-[#C4A470]">03</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-300 font-light">Affärsjuridisk rådgivning omfattar det mesta som rör er kommersiella verksamhet. Arbetsrättslig vägledning är viktigt för organisationer med anställda.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 flex bg-[#C4A470]/10 w-8 h-8 rounded-full items-center justify-center">
                      <span className="text-sm font-semibold text-[#C4A470]">04</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-300 font-light">Löpande bollplank är kanske det värdefullaste – möjligheten att lyfta luren och snabbt få svar på en fråga.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative lg:flex-[2] lg:min-h-0">
                <div className="flex bg-[url(https://images.unsplash.com/photo-1502700807168-484a3e7889d0?w=1600&q=80)] bg-cover border-[#c4a470] border rounded-none lg:h-full ring-[#c4a470]/0 pt-8 pr-8 pb-8 pl-8 items-end justify-start h-[400px]"></div>
              </div>
            </div>
          </div>

          {/* Card 2: Är konsultverksamhet rätt för er? */}
          <div className="overflow-hidden sm:px-10 lg:px-14 lg:py-14 bg-[#0C122B] rounded-none ring-gray-200 ring-1 mt-10 mb-10 pt-10 pr-6 pb-10 pl-6 relative left-0 shadow-xl" style={{ boxShadow: '0 25px 50px -12px rgba(2, 2, 2, 0.8), 0 0 30px rgba(196, 164, 112, 0.1)' }}>
            <div className="flex flex-col lg:flex-row gap-12 text-[#c4a470] lg:items-stretch">

              <div className="relative lg:flex-[2] lg:min-h-0 order-2 lg:order-1">
                <div className="flex bg-[url(https://images.unsplash.com/photo-1447023029226-ef8f6b52e3ea?w=1600&q=80)] bg-cover border-[#c4a470] border ring-0 rounded-none pt-8 pr-8 pb-8 pl-8 items-start justify-end h-[400px] lg:h-full"></div>
              </div>

              <div className="lg:flex-[3] order-1 lg:order-2">
                <p className="text-[11px] sm:text-xs uppercase font-light text-[#c4a470] tracking-widest mb-3">Vår Process</p>
                <h2 className="sm:text-5xl text-3xl font-light text-gray-200 tracking-tight font-playfair mb-6">Är konsultverksamhet rätt för er?</h2>

                <div className="space-y-6">
                  <div className="flex gap-4 gap-x-4 gap-y-4 items-start">
                    <div className="flex-shrink-0 flex bg-[#C4A470]/10 w-8 h-8 rounded-full items-center justify-center">
                      <span className="text-[#C4A470] font-semibold text-sm">01</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-300 font-light">Vårt koncept passar särskilt bra för små och medelstora företag som regelbundet stöter på juridiska frågor men inte har tillräcklig volym för att motivera en heltidsanställd jurist.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <p className="text-[11px] uppercase sm:text-xs font-light text-[#c4a470] tracking-widest mb-3">Vår Process</p>
                  <h2 className="sm:text-5xl text-3xl font-light text-gray-200 tracking-tight font-playfair mb-6">Flexibelt samarbete på era villkor</h2>

                  <div className="space-y-6">
                    <div className="flex gap-4 gap-x-4 gap-y-4 items-start">
                      <div className="flex-shrink-0 flex bg-[#C4A470]/10 w-8 h-8 rounded-full items-center justify-center">
                        <span className="text-[#C4A470] font-semibold text-sm">01</span>
                      </div>
                      <div>
                        <p className="text-sm text-gray-300 font-light">Vi tror på flexibilitet. Ni behöver inte binda er till en fast månadsavgift eller ett visst antal timmar – vi arbetar på det sätt som passar er bäst.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Rättsområden */}
      <section className="lg:py-32 bg-[#F9F8F6] pt-24 pb-24" id="rattsomraden">
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
              <div className="w-12 h-12 border border-[#EBE5DA] flex items-center justify-center text-[#C4A470] mb-6 group-hover:border-[#C4A470] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 stroke-[1.5]">
                  <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                  <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                  <path d="M10 9H8"></path>
                  <path d="M16 13H8"></path>
                  <path d="M16 17H8"></path>
                </svg>
              </div>
              <h3 className="font-serif text-xl text-[#1a1a1a] mb-4">Juridisk rådgivning</h3>
              <p className="text-xs text-gray-500 font-light leading-relaxed mb-6">Allmänna juridiska frågor, avtal, genomgång av handlingar.</p>
              <div className="mt-auto">
                <span className="inline-flex items-center text-[10px] uppercase group-hover:text-[#1a1a1a] transition-colors font-medium text-[#C4A470] tracking-[0.15em]">
                  Läs mer <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </span>
              </div>
            </Link>

            {/* Card 2 */}
            <Link href="/tvister" className="flex flex-col group hover:-translate-y-1 transition-transform duration-300 bg-white h-full pt-10 pr-10 pb-10 pl-10 items-start">
              <div className="w-12 h-12 border border-[#EBE5DA] flex items-center justify-center text-[#C4A470] mb-6 group-hover:border-[#C4A470] transition-colors">
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
                  Läs mer <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </span>
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="/konsulttjanster" className="flex flex-col group hover:-translate-y-1 transition-transform duration-300 bg-white h-full pt-10 pr-10 pb-10 pl-10 items-start">
              <div className="w-12 h-12 border border-[#EBE5DA] flex items-center justify-center text-[#C4A470] mb-6 group-hover:border-[#C4A470] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 stroke-[1.5]">
                  <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                </svg>
              </div>
              <h3 className="text-xl text-[#1a1a1a] font-serif mb-4">Konsulttjänster</h3>
              <p className="text-xs text-gray-500 font-light leading-relaxed mb-6">Löpande stöd till företag och organisationer i vardagen.</p>
              <div className="mt-auto">
                <span className="inline-flex items-center text-[10px] uppercase group-hover:text-[#1a1a1a] transition-colors cursor-pointer font-medium text-[#C4A470] tracking-[0.15em]">
                  Läs mer <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </span>
              </div>
            </Link>

            {/* Card 4 */}
            <Link href="/foretagsoverlatelser" className="flex flex-col group hover:-translate-y-1 transition-transform duration-300 cursor-pointer bg-white h-full pt-10 pr-10 pb-10 pl-10 items-start">
              <div className="flex group-hover:border-[#C4A470] transition-colors text-[#C4A470] w-12 h-12 border-[#EBE5DA] border mb-6 items-center justify-center">
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
                  Läs mer <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </span>
              </div>
            </Link>

          </div>

          {/* Footer Text */}
          <div className="mt-20 text-center">
            <p className="text-sm italic text-gray-400 font-serif cursor-pointer">Kontakta oss gärna om du är osäker på om ditt ärende faller inom våra områden</p>
          </div>

        </div>
      </section>

      {/* SECTION 4: Rättshjälp & Arvode */}
      <section className="lg:py-32 text-white bg-[#0C122B] pt-24 pb-24" id="prislista">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">

            {/* Left Column */}
            <div className="">
              <h2 className="lg:text-5xl uppercase leading-tight text-4xl tracking-widest font-playfair mb-4">
                Rättshjälp
                <span className="italic font-normal text-[#C4A470] font-playfair"> &amp;</span> arvode
              </h2>
              <div className="w-12 h-px bg-[#C4A470] mb-12"></div>

              {/* Offer Card */}
              <div className="px-12 py-12 relative" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.10)', boxShadow: '0 20px 50px rgba(0,0,0,0.35)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
                <span className="absolute top-8 right-8 text-[10px] tracking-[0.2em] uppercase text-gray-500 font-medium">Erbjudande</span>

                <div className="w-12 h-12 border border-white/20 flex items-center justify-center text-[#C4A470] mb-8">
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

                <a href="/kontakt" className="inline-flex items-center text-[10px] font-bold tracking-[0.15em] uppercase text-white hover:text-[#C4A470] transition-colors group">
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
                  <div className="w-11 h-11 border border-white/10 flex items-center justify-center text-white/50 italic font-serif text-lg group-hover:border-[#C4A470]/50 group-hover:text-[#C4A470] transition-colors duration-300">1</div>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-2xl text-white tracking-tight font-playfair mb-3">Timarvode &amp; fakturering</h3>
                  <p className="text-sm text-gray-400 font-light leading-relaxed mb-4 max-w-lg">
                    Vi debiterar per timme och fakturerar normalt när ärendet är avslutat. I vissa fall kan vi be om ett löpande förskott till vårt klientmedelskonto. Detta dras sedan av från det slutliga arvodet när uppdraget avslutas.
                  </p>
                  <Link href="/prislista" className="hover:text-white transition-colors underline-offset-4 hover:underline text-xs text-[#C4A470]">Se fullständig prislista</Link>
                </div>
              </div>

              <div className="w-full h-px bg-white/5"></div>

              {/* Item 2 */}
              <div className="flex gap-8 group">
                <div className="flex-shrink-0 pt-1">
                  <div className="w-11 h-11 border border-white/10 flex items-center justify-center text-white/50 group-hover:border-[#C4A470]/50 group-hover:text-[#C4A470] transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 stroke-[1.5]">
                      <path d="M12.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v9.34"></path>
                      <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                      <path d="M10.378 12.622a1 1 0 0 1 3 3.003L8.36 20.637a2 2 0 0 1-.854.506l-2.867.837a.5.5 0 0 1-.62-.62l.836-2.869a2 2 0 0 1 .506-.853z"></path>
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-2xl text-white tracking-tight font-playfair mb-3">Fasta priser</h3>
                  <p className="text-sm text-gray-400 font-light leading-relaxed max-w-lg">
                    Vid upprättande av exempelvis testamente, äktenskapsförord eller samboavtal tillämpar vi ofta fasta priser för att ge dig trygghet och överskådlighet. Kontakta oss för aktuella prisuppgifter.
                  </p>
                </div>
              </div>

              <div className="w-full h-px bg-white/5"></div>

              {/* Item 3 */}
              <div className="flex gap-8 group">
                <div className="flex-shrink-0 pt-1">
                  <div className="w-11 h-11 border border-white/10 flex items-center justify-center text-white/50 group-hover:border-[#C4A470]/50 group-hover:text-[#C4A470] transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 stroke-[1.5]">
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-2xl text-white tracking-tight font-playfair mb-3">Rättsskydd &amp; försäkring</h3>
                  <p className="text-sm text-gray-400 font-light leading-relaxed max-w-lg">
                    I många ärenden har du rätt till ersättning genom rättsskydd i din hemförsäkring eller företagsförsäkring. Vi hjälper dig att kontakta försäkringsbolaget och utreda om du kan använda rättsskyddet.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Call to Action Section - Unique to this page */}
      <section className="bg-white py-24 lg:py-32 relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-black tracking-tight font-playfair mb-8">
            Behöver ditt företag löpande juridiskt stöd?
          </h2>
          <div className="w-16 h-px bg-[#C4A470] mx-auto mb-10"></div>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
            Kontakta oss för en kostnadsfri konsultation där vi diskuterar hur vi kan bli er externa juridiska avdelning och ge er trygghet i vardagen.
          </p>
        </div>
      </section>

    </>
  )
}
