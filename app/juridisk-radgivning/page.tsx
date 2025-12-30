import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import AnimatedCTAButton from '@/components/AnimatedCTAButton';

export const metadata: Metadata = {
  title: 'Juridisk Rådgivning - Experthjälp för Dig',
  description: 'Skräddarsydda juridiska lösningar för privatpersoner och företag. Över 40 års erfarenhet. Få klarhet i komplexa juridiska frågor. Kostnadsfri konsultation.',
  openGraph: {
    title: 'Juridisk Rådgivning | Adekvat Juridik',
    description: 'Skräddarsydda juridiska lösningar för privatpersoner och företag.',
  },
};

export default function JuridiskRadgivningPage() {
  const breadcrumbs = [
    { label: 'Hem', href: '/' },
    { label: 'Rättsområden', href: '/#rattsomraden' },
    { label: 'Juridisk Rådgivning', href: '/juridisk-radgivning' },
  ];

  return (
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
              Juridisk <br />
              <span>rådgivning</span> – <br />
              <span className="font-light text-[#C4A470]">Klarhet i komplexa frågor</span>
            </h1>

            <p className="text-[#C4A470] font-serif text-lg lg:text-xl mb-8">
              Skräddarsydda juridiska lösningar för privatpersoner och företag
            </p>

            <div className="space-y-6 text-gray-400 font-light leading-relaxed max-w-xl">
              <p>
                Juridiska frågor dyker sällan upp vid bekväma tillfällen. Kanske står du inför ett viktigt avtal som behöver granskas innan du skriver under. Kanske har du fått ett brev från en myndighet eller motpart som du inte riktigt förstår innebörden av.
              </p>
              <p>
                Oavsett vad det gäller finns vi här för att ge dig de svar du behöver – på ett språk du faktiskt förstår. Med över 40 års samlad erfarenhet har vi hjälpt tusentals klienter att navigera genom juridiska utmaningar.
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
                src="/assets/Bild 2.jpg"
                alt="Legal Statue"
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
                Rådgivning som täcker dina behov
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
                      Vår juridiska rådgivning spänner över ett brett spektrum av frågor. Vi anpassar alltid vår hjälp efter just din situation, oavsett om du är privatperson eller företagare.
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
                      För privatpersoner hjälper vi ofta med frågor som rör familjerätt, arvsrätt, samboavtal, fastighetsaffärer och bostadsköp, samt granskning av avtal innan du skriver under.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-20">
                <h2 className="text-4xl lg:text-5xl font-playfair text-white mb-12">
                  För företag och organisationer
                </h2>

                <div className="space-y-10">
                  {[
                    "För företag och organisationer bistår vi med avtalsgranskning och avtalsförhandling, arbetsrättsliga frågor, bolagsrättsliga spörsmål samt genomgång av villkor och policyer.",
                    "Genom att ta hjälp av en erfaren jurist tidigt i processen kan du undvika kostsamma misstag och fatta välgrundade beslut baserade på fakta snarare än antaganden.",
                    "Det kan vara frestande att försöka lösa juridiska frågor på egen hand. Men juridik handlar sällan om generella svar – det handlar om just din specifika situation.",
                    "När du kontaktar Adekvat Juridik börjar vi alltid med att lyssna. Detta första möte är kostnadsfritt och ger dig möjlighet att bedöma om vi är rätt match för ditt ärende."
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
                  src="/assets/statue.jpg"
                  alt="Interior Library"
                  className="w-full h-full object-cover [transform:scaleX(-1)] shadow-2xl brightness-[0.8]"
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
                src="https://images.unsplash.com/photo-1654588834754-33346e3ee095?w=1600&q=80"
                alt="Table and Books"
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
                Förebygg problem innan de uppstår
              </h2>
              <div className="flex gap-6">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-[#C4A470]/10 flex items-center justify-center text-[#C4A470] text-xs font-serif font-bold">
                    01
                  </div>
                </div>
                <p className="text-gray-400 font-light leading-relaxed max-w-lg">
                  Det kan vara frestande att försöka lösa juridiska frågor på egen hand. Internet är fullt av information, men juridik handlar sällan om generella svar – det handlar om just din specifika situation.
                </p>
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#C4A470] mb-4 font-medium">Vårt arbetssätt</p>
              <h2 className="text-4xl lg:text-5xl font-playfair text-white mb-8">
                Tydlighet från första kontakt
              </h2>
              <div className="flex gap-6">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-[#C4A470]/10 flex items-center justify-center text-[#C4A470] text-xs font-serif font-bold">
                    01
                  </div>
                </div>
                <p className="text-gray-400 font-light leading-relaxed max-w-lg">
                  Genom att ta hjälp av en erfaren jurist tidigt i processen kan du undvika kostsamma misstag, fatta välgrundade beslut baserade på fakta, och spara både tid och pengar på lång sikt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
