import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import AnimatedCTAButton from '@/components/AnimatedCTAButton';

export const metadata: Metadata = {
  title: 'Konsulttjänster för Företag - Expertstöd',
  description: 'Strategisk juridisk rådgivning för företag. Vi fungerar som din externa partner och bollplank. Flexibelt stöd till en bråkdel av kostnaden. Kostnadsfri konsultation.',
  openGraph: {
    title: 'Konsulttjänster för Företag | Adekvat Juridik',
    description: 'Strategisk juridisk rådgivning för företag.',
  },
};

export default function KonsulttjansterPage() {
  const breadcrumbs = [
    { label: 'Hem', href: '/' },
    { label: 'Rättsområden', href: '/#rattsomraden' },
    { label: 'Juridisk konsultation', href: '/konsulttjanster' },
  ];

  return (
    <div className="bg-[#050A18] min-h-screen text-gray-200 selection:bg-[#C4A470] selection:text-white overflow-x-hidden">

      {/* Navbar Placeholder/Breadcrumbs (for structure) */}
      <div className="pt-32 px-6 lg:px-12 max-w-[1400px] mx-auto">
        <Breadcrumbs items={breadcrumbs} renderNav={true} />
      </div>

      {/* SECTION 1: Hero */}
      <section className="relative w-full px-6 lg:px-12 py-12 lg:py-20">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">

          {/* Left Content */}
          <div className="flex flex-col z-10">
            <h1 className="text-5xl sm:text-6xl lg:text-6xl font-medium font-playfair leading-[1.1] mb-8 text-white">
              Konsulttjänster – <br />
              <span>Expertstöd</span> <br />
              <span className="font-light text-[#C4A470]">för din verksamhet</span>
            </h1>

            <p className="text-[#C4A470] font-serif text-lg lg:text-xl mb-8">
              Strategisk rådgivning som ger dig trygghet att växa
            </p>

            <div className="space-y-6 text-gray-400 font-light leading-relaxed max-w-xl">
              <p>
                Att driva företag innebär ständiga beslut. Vissa är enkla, andra kan vara avgörande för verksamhetens framtid. Det är i de avgörande ögonblicken som rätt kompetens gör skillnad.
              </p>
              <p>
                Våra konsulttjänster är utformade för att ge dig exakt det stöd du behöver, när du behöver det. Vi fungerar som din externa partner, bollplank och specialistfunktion – till en bråkdel av kostnaden för att anställa.
              </p>
            </div>

            <div className="mt-12">
              <AnimatedCTAButton href="/kontakt">
                Boka kostnadsfri konsultation
              </AnimatedCTAButton>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative z-10 aspect-video w-full max-w-none mx-auto lg:ml-auto">
              <div className="absolute inset-0 bg-neutral-800 animate-pulse" /> {/* Placeholder while loading */}
              <img
                src="/assets/Bild 4.jpg"
                alt="Statue and Books"
                className="w-full h-full object-cover relative z-10 shadow-2xl"
              />

              {/* Golden L-Shape Decoration Bottom-Left */}
              <div className="absolute -bottom-8 -left-8 w-24 h-24 border-l border-b border-[#C4A470] z-20 hidden lg:block"></div>

              {/* Golden Frame Outline (Optional/Thin) */}
              <div className="absolute top-4 -right-4 w-full h-full border border-[#C4A470]/30 z-0 hidden lg:block"></div>
            </div>
          </div>

        </div>
      </section>


      {/* SECTION 2: Process / Mer än reaktiv hjälp */}
      <section className="relative w-full px-6 lg:px-12 py-20 lg:py-32 bg-[#0B1121]">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-[#C4A470] mb-4 font-medium">Vår Process</p>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Left Column: Content */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-playfair text-white mb-12">
                Mer än reaktiv hjälp
              </h2>

              <div className="space-y-12">
                {/* Item 01 */}
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#C4A470] text-xs font-serif font-bold group-hover:bg-[#C4A470] group-hover:text-[#050A18] transition-all duration-300">
                      01
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-400 font-light leading-relaxed">
                      De flesta företag söker juridisk hjälp först när ett problem uppstått. Men de mest framgångsrika organisationerna arbetar proaktivt – de identifierar risker innan de blir verklighet och bygger strukturer som förebygger konflikter.
                    </p>
                  </div>
                </div>

                {/* Item 02 */}
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#C4A470] text-xs font-serif font-bold group-hover:bg-[#C4A470] group-hover:text-[#050A18] transition-all duration-300">
                      02
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-400 font-light leading-relaxed">
                      Med löpande juridisk konsultation får du en jurist som känner till er verksamhet, era avtal och era utmaningar. Det betyder att vi kan ge snabbare och mer träffsäkra svar.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-20">
                <h2 className="text-4xl lg:text-5xl font-playfair text-white mb-12">
                  Skräddarsytt stöd för er vardag
                </h2>

                <div className="space-y-10">
                  {[
                    "Vår konsultverksamhet anpassas helt efter era behov.",
                    "Avtalsgranskning och avtalsförhandling är ofta centralt. Vi hjälper er att granska inkommande avtal, identifiera riskklausuler och föreslå ändringar.",
                    "Affärsjuridisk rådgivning omfattar det mesta som rör er kommersiella verksamhet. Arbetsrättslig vägledning är viktigt för organisationer med anställda.",
                    "Löpande bollplank är kanske det värdefullaste – möjligheten att lyfta luren och snabbt få svar på en fråga."
                  ].map((text, idx) => (
                    <div key={idx} className="flex gap-6 group">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#C4A470] text-xs font-serif font-bold group-hover:bg-[#C4A470] group-hover:text-[#050A18] transition-all duration-300">
                          0{idx + 1}
                        </div>
                      </div>
                      <div>
                        <p className="text-gray-400 font-light leading-relaxed">{text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="relative h-full min-h-[500px] lg:min-h-0">
              <div className="sticky top-12 w-full h-full lg:h-[80vh] min-h-[600px] relative">
                <div className="absolute inset-4 border border-[#C4A470]/30 z-20 pointer-events-none"></div>
                <img
                  src="https://images.unsplash.com/photo-1502700807168-484a3e7889d0?w=1600&q=80"
                  alt="Interior Architecture"
                  className="w-full h-full object-cover shadow-2xl brightness-[0.8]"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: Är konsultverksamhet rätt för er? */}
      <section className="relative w-full px-6 lg:px-12 py-20 lg:py-32">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square w-full max-w-xl mx-auto relative">
              <img
                src="https://images.unsplash.com/photo-1447023029226-ef8f6b52e3ea?w=1600&q=80"
                alt="Bookshelf"
                className="w-full h-full object-cover shadow-2xl relative z-10"
              />
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 border-t border-l border-[#C4A470]/50 z-20 hidden lg:block"></div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <div className="mb-16">
              <p className="text-xs uppercase tracking-[0.2em] text-[#C4A470] mb-4 font-medium">Vår Process</p>
              <h2 className="text-4xl lg:text-5xl font-playfair text-white mb-8">
                Är konsultverksamhet rätt för er?
              </h2>
              <div className="flex gap-6">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-[#C4A470]/10 flex items-center justify-center text-[#C4A470] text-xs font-serif font-bold">
                    01
                  </div>
                </div>
                <p className="text-gray-400 font-light leading-relaxed max-w-lg">
                  Vårt koncept passar särskilt bra för små och medelstora företag som regelbundet stöter på juridiska frågor men inte har tillräcklig volym för att motivera en heltidsanställd jurist.
                </p>
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#C4A470] mb-4 font-medium">Vår Process</p>
              <h2 className="text-4xl lg:text-5xl font-playfair text-white mb-8">
                Flexibelt samarbete på era villkor
              </h2>
              <div className="flex gap-6">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-[#C4A470]/10 flex items-center justify-center text-[#C4A470] text-xs font-serif font-bold">
                    01
                  </div>
                </div>
                <p className="text-gray-400 font-light leading-relaxed max-w-lg">
                  Vi tror på flexibilitet. Ni behöver inte binda er till en fast månadsavgift eller ett visst antal timmar – vi arbetar på det sätt som passar er bäst.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
