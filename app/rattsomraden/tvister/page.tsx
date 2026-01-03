import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedArticles from '@/components/RelatedArticles';
import AnimatedCTAButton from '@/components/AnimatedCTAButton';

export const metadata: Metadata = {
  title: 'Tvistlösning & Juridisk Representation',
  description: 'Erfaren juridisk representation vid tvister. Vi hjälper dig genom hela processen - från första kravbrev till slutlig dom. Kostnadsfri första konsultation.',
  alternates: {
    canonical: 'https://www.adekvatjuridik.se/rattsomraden/tvister',
  },
  openGraph: {
    title: 'Tvistlösning & Juridisk Representation | Adekvat Juridik',
    description: 'Erfaren juridisk representation vid tvister. Vi hjälper dig genom hela processen.',
  },
};

export default function TvisterPage() {
  const breadcrumbs = [
    { label: 'Hem', href: '/' },
    { label: 'Rättsområden', href: '/rattsomraden' },
    { label: 'Tvister', href: '/rattsomraden/tvister' },
  ];

  // FAQ Schema for rich snippets
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Vad kostar det att anlita en jurist vid en tvist?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Kostnaden varierar beroende på tvistens komplexitet. Vi erbjuder en kostnadsfri första konsultation där vi bedömer ärendet och ger en uppskattning. Många har även rättsskydd via sin hemförsäkring som täcker delar av kostnaderna.'
        }
      },
      {
        '@type': 'Question',
        name: 'Hur lång tid tar en tvisteprocess?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Tidsramen varierar kraftigt. En enklare förhandling kan lösas på några veckor, medan en domstolsprocess kan ta 1-2 år. Vi arbetar alltid för att nå en lösning så effektivt som möjligt.'
        }
      },
      {
        '@type': 'Question',
        name: 'Kan jag använda mitt rättsskydd?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ja, de flesta hemförsäkringar inkluderar rättsskydd som täcker en stor del av advokatkostnaderna vid tvister. Vi hjälper dig att ansöka om rättsskydd hos ditt försäkringsbolag.'
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
      { '@type': 'ListItem', position: 3, name: 'Tvister', item: 'https://www.adekvatjuridik.se/tvister' }
    ]
  };

  // Service Schema for SEO
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Tvistlösning & Juridisk Representation',
    description: 'Erfaren juridisk representation vid tvister. Vi hjälper dig genom hela processen - från första kravbrev till slutlig dom.',
    provider: {
      '@type': 'LegalService',
      name: 'Adekvat Juridik',
      url: 'https://www.adekvatjuridik.se',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Sweden',
    },
    serviceType: 'Tvistlösning',
    url: 'https://www.adekvatjuridik.se/rattsomraden/tvister',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
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
                Tvistlösning – <br />
                <span className="font-light text-[#C4A470]">Vi står vid din sida</span>
              </h1>

              <p className="text-[#C4A470] font-serif text-lg lg:text-xl mb-8">
                Erfaren juridisk representation när konflikten är ett faktum
              </p>

              <div className="space-y-6 text-gray-400 font-light leading-relaxed max-w-xl">
                <p>
                  Ingen vill hamna i en tvist. Men ibland går det inte att undvika – avtal bryts, överenskommelser tolkas olika, och situationer som borde ha löst sig smidigt fastnar i låsta positioner.
                </p>
                <p>
                  När det händer behöver du någon som kan föra din talan, skydda dina rättigheter och arbeta målmedvetet mot en lösning. På Adekvat Juridik har vi omfattande erfarenhet av att hantera konflikter – från första kravbrev till slutlig dom om det krävs.
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
                  src="/assets/Bild 3.jpg"
                  alt="Gavel and Books"
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
            <p className="text-xs uppercase tracking-[0.2em] text-[#C4A470] mb-4 font-medium">Våra tjänster</p>

            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

              {/* Left Content */}
              <div>
                <h2 className="text-4xl lg:text-5xl font-playfair text-white mb-12">
                  Konfliktlösning inom flera områden
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
                        Tvister kan uppstå i nästan alla sammanhang. Vi har bred kompetens av att hantera många typer av konflikter där människor och organisationer interagerar.
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
                        Kommersiella tvister: Tvister mellan företag är ofta komplexa. Det kan handla om avtalsbrott, försenade leveranser, kvalitetsproblem eller samarbeten som havererat.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 group">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#C4A470] text-xs font-serif font-bold group-hover:bg-[#C4A470] group-hover:text-[#050A18] transition-all duration-300">
                        03
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-400 font-light leading-relaxed">
                        Fordringstvist: När någon är skyldig dig pengar och vägrar betala behövs ofta professionell hjälp. Vi säkerställer att du får betalt för det du har rätt till.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative flex items-center justify-center">
                <div className="w-full max-w-lg">
                  <img
                    src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600&q=80"
                    alt="Conflict Resolution"
                    className="w-full object-cover shadow-2xl aspect-[4/5]"
                  />
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 border-b border-r border-[#C4A470]/50 z-20 hidden lg:block"></div>
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
                  src="https://images.unsplash.com/photo-1649653084130-06638e40ca25?w=1600&q=80"
                  alt="Detailed Books"
                  className="w-full h-full object-cover shadow-2xl relative z-10"
                />
                <div className="absolute -top-6 -left-6 w-32 h-32 border-t border-l border-[#C4A470]/50 z-20 hidden lg:block"></div>
              </div>
            </div>

            {/* Right Content */}
            <div className="order-1 lg:order-2">
              <div className="mb-16">
                <p className="text-xs uppercase tracking-[0.2em] text-[#C4A470] mb-4 font-medium">Vår Process</p>
                <h2 className="text-4xl lg:text-5xl font-playfair text-white mb-8">
                  Strategiskt arbete i varje steg
                </h2>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-[#C4A470]/10 flex items-center justify-center text-[#C4A470] text-xs font-serif font-bold">
                      01
                    </div>
                  </div>
                  <p className="text-gray-400 font-light leading-relaxed max-w-lg">
                    Utredning och analys är alltid första steget. Vi går igenom alla relevanta fakta, dokument och omständigheter. Vad har hänt? Vad säger avtalet eller lagen? Baserat på detta gör vi en realistisk bedömning.
                  </p>
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#C4A470] mb-4 font-medium">Kostnader</p>
                <h2 className="text-4xl lg:text-5xl font-playfair text-white mb-8">
                  Rättsskydd och kostnadsmedvetenhet
                </h2>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-[#C4A470]/10 flex items-center justify-center text-[#C4A470] text-xs font-serif font-bold">
                      01
                    </div>
                  </div>
                  <p className="text-gray-400 font-light leading-relaxed max-w-lg">
                    Inför varje ärende gör vi en uppskattning av den förväntade tidsåtgången och kostnaden. Vi håller dig löpande informerad om hur ärendet utvecklas. Du ska aldrig behöva oroa dig för oväntade fakturor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles Section */}
        <RelatedArticles category="Tvister" />

      </div>
    </>
  );
}
