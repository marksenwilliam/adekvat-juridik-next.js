import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedArticles from '@/components/RelatedArticles';
import AnimatedCTAButton from '@/components/AnimatedCTAButton';

export const metadata: Metadata = {
  title: 'Företagsöverlåtelser - Köp & Sälj Företag',
  description: 'Juridisk expertis vid företagsöverlåtelser, ägarskiften och förvärv. Vi guidar dig genom due diligence, avtalsförhandling och tillträde. Kostnadsfri konsultation.',
  openGraph: {
    title: 'Företagsöverlåtelser - Köp & Sälj Företag | Adekvat Juridik',
    description: 'Juridisk expertis vid företagsöverlåtelser, ägarskiften och förvärv.',
  },
};

export default function ForetagsoverlatelserPage() {
  const breadcrumbs = [
    { label: 'Hem', href: '/' },
    { label: 'Rättsområden', href: '/#rattsomraden' },
    { label: 'Företagsöverlåtelser', href: '/foretagsoverlatelser' },
  ];

  // FAQ Schema for rich snippets
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Vad är skillnaden mellan aktieförvärv och inkråmsförvärv?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Vid aktieförvärv köper du hela bolaget med tillgångar, skulder och historik. Vid inkråmsförvärv köper du endast utvalda tillgångar som inventarier, kundavtal och varumärke. Valet påverkar skatt, ansvar och avtalsöverföring.'
        }
      },
      {
        '@type': 'Question',
        name: 'Vad ingår i en due diligence?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Due diligence omfattar finansiell, juridisk och skattemässig granskning av företaget. Vi går igenom avtal, anställningsförhållanden, immateriella rättigheter, pågående tvister och skattesituationen för att identifiera risker.'
        }
      },
      {
        '@type': 'Question',
        name: 'Hur lång tid tar en företagsöverlåtelse?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Processen tar vanligtvis 2-6 månader beroende på företagets storlek och komplexitet. Fasen inkluderar sekretessavtal, letter of intent, due diligence, avtalsförhandling och tillträde.'
        }
      }
    ]
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Hem', item: 'https://www.adekvatjuridik.se' },
      { '@type': 'ListItem', position: 2, name: 'Rättsområden', item: 'https://www.adekvatjuridik.se/#rattsomraden' },
      { '@type': 'ListItem', position: 3, name: 'Företagsöverlåtelser', item: 'https://www.adekvatjuridik.se/foretagsoverlatelser' }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="bg-[#050A18] min-h-screen text-gray-200 selection:bg-[#C4A470] selection:text-white overflow-x-hidden">

        {/* Navbar Placeholder/Breadcrumbs */}
        <div className="pt-32 px-6 lg:px-12 max-w-[1400px] mx-auto">
          <Breadcrumbs items={breadcrumbs} renderNav={true} />
        </div>

        {/* SECTION 1: Hero */}
        <section className="relative w-full px-6 lg:px-12 py-12 lg:py-20">
          <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">

            {/* Left Content */}
            <div className="flex flex-col z-10">
              <h1 className="text-5xl sm:text-6xl lg:text-6xl font-medium font-playfair leading-[1.1] mb-8 text-white">
                Köp & sälj <br />
                <span>av företag</span> – <br />
                <span className="font-light text-[#C4A470]">Maximera värdet</span>
              </h1>

              <p className="text-[#C4A470] font-serif text-lg lg:text-xl mb-8">
                Juridisk expertis vid företagsöverlåtelser, ägarskiften och förvärv
              </p>

              <div className="space-y-6 text-gray-400 font-light leading-relaxed max-w-xl">
                <p>
                  Att köpa eller sälja ett företag är en av de mest betydelsefulla affärstransaktionerna du kan genomföra. Det handlar om stora värden, komplexa avtal och beslut som påverkar framtiden för alla inblandade.
                </p>
                <p>
                  På Adekvat Juridik har vi lång erfarenhet av att guida både köpare och säljare genom företagsöverlåtelser. Vi ser till att du förstår vad som händer i varje steg, att dina intressen skyddas och att affären genomförs på ett sätt som du kan känna dig trygg med.
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
              <div className="relative z-10 aspect-video w-full max-w-none mx-auto lg:ml-auto">
                <div className="absolute inset-0 bg-neutral-800 animate-pulse" />
                <img
                  src="/assets/Bild 1.jpg"
                  alt="Business Handshake"
                  className="w-full h-full object-cover relative z-10 shadow-2xl"
                />
                <div className="absolute -bottom-8 -left-8 w-24 h-24 border-l border-b border-[#C4A470] z-20 hidden lg:block"></div>
                <div className="absolute top-4 -right-4 w-full h-full border border-[#C4A470]/30 z-0 hidden lg:block"></div>
              </div>
            </div>
          </div>
        </section>


        {/* SECTION 2: Process */}
        <section className="relative w-full px-6 lg:px-12 py-20 lg:py-32 bg-[#0B1121]">
          <div className="max-w-[1400px] mx-auto">
            <p className="text-xs uppercase tracking-[0.2em] text-[#C4A470] mb-4 font-medium">För säljare</p>

            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

              {/* Left Content */}
              <div>
                <h2 className="text-4xl lg:text-5xl font-playfair text-white mb-12">
                  Sälja företag – maximera värdet
                </h2>

                <div className="space-y-12">
                  <div className="flex gap-6 group">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#C4A470] text-xs font-serif font-bold group-hover:bg-[#C4A470] group-hover:text-[#050A18] transition-all duration-300">
                        01
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-400 font-light leading-relaxed">
                        Att sälja ett företag du byggt upp under många år är ofta både en ekonomisk och emotionell resa. Vi hjälper dig att förbereda företaget för försäljning genom att identifiera och åtgärda potentiella problem.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 group">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#C4A470] text-xs font-serif font-bold group-hover:bg-[#C4A470] group-hover:text-[#050A18] transition-all duration-300">
                        02
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-400 font-light leading-relaxed">
                        Vi bistår i förhandlingarna för att säkerställa att villkoren är rimliga och att du inte bär mer risk än nödvändigt. Överlåtelseavtalet skyddar dig mot framtida krav och överraskningar.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-20">
                  <h2 className="text-4xl lg:text-5xl font-playfair text-white mb-12">
                    Bistånd i processen
                  </h2>

                  <div className="space-y-10">
                    {[
                      "Due diligence är processen där vi granskar målbolaget på djupet. Vi går igenom avtal, anställningsförhållanden, immateriella rättigheter och allt annat som kan påverka bolagets värde.",
                      "Vi hjälper dig att strukturera förvärvet på ett optimalt sätt – ska du köpa aktier eller inkråm? Hur ska köpeskillingen betalas? Vilka garantier behöver du från säljaren?",
                      "Varje företagsöverlåtelse är unik, men processen följer oftast en liknande struktur: Inledande fas, sekretessavtal, letter of intent, due diligence, avtalsförhandling och tillträde.",
                      "Vi ser till att du har kontroll över hela processen och att inga juridiska oklarheter hotar affären efter att den är avslutad."
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

              {/* Right Image */}
              <div className="relative h-full min-h-[500px] lg:min-h-0">
                <div className="sticky top-12 w-full h-full lg:h-[80vh] min-h-[600px] relative">
                  <div className="absolute inset-4 border border-[#C4A470]/30 z-20 pointer-events-none"></div>
                  <img
                    src="https://images.unsplash.com/photo-1502465771179-51f3535da42c?w=1600&q=80"
                    alt="Office Background"
                    className="w-full h-full object-cover shadow-2xl brightness-[0.8]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: Process Steps */}
        <section className="relative w-full px-6 lg:px-12 py-20 lg:py-32">
          <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Left Image */}
            <div className="relative order-2 lg:order-1">
              <div className="aspect-square w-full max-w-xl mx-auto relative">
                <img
                  src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1600&q=80"
                  alt="Signing Contracts"
                  className="w-full h-full object-cover shadow-2xl relative z-10"
                />
                <div className="absolute -top-6 -left-6 w-32 h-32 border-t border-l border-[#C4A470]/50 z-20 hidden lg:block"></div>
              </div>
            </div>

            {/* Right Content */}
            <div className="order-1 lg:order-2">
              <div className="mb-16">
                <p className="text-xs uppercase tracking-[0.2em] text-[#C4A470] mb-4 font-medium">För köpare</p>
                <h2 className="text-4xl lg:text-5xl font-playfair text-white mb-8">
                  Köpa företag – gör rätt affär
                </h2>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-[#C4A470]/10 flex items-center justify-center text-[#C4A470] text-xs font-serif font-bold">
                      01
                    </div>
                  </div>
                  <p className="text-gray-400 font-light leading-relaxed max-w-lg">
                    Due diligence är processen där vi granskar målbolaget på djupet. Vi går igenom avtal, anställningsförhållanden, immateriella rättigheter, pågående tvister och skattesituationen.
                  </p>
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#C4A470] mb-4 font-medium">Processen</p>
                <h2 className="text-4xl lg:text-5xl font-playfair text-white mb-8">
                  Vad du kan förvänta dig
                </h2>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-[#C4A470]/10 flex items-center justify-center text-[#C4A470] text-xs font-serif font-bold">
                      01
                    </div>
                  </div>
                  <p className="text-gray-400 font-light leading-relaxed max-w-lg">
                    Vi hjälper dig att strukturera förvärvet på ett optimalt sätt – ska du köpa aktier eller inkråm? Vill du ha garantier från säljaren? Vi säkerställer din långsiktiga trygghet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles Section */}
        <RelatedArticles category="Företagsöverlåtelser" />

      </div>
    </>
  );
}
