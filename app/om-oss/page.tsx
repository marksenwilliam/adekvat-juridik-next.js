'use client';

export default function OmOssPage() {
  return (
    <>
      {/* SECTION 1: Hero */}
      <section className="md:pl-6 bg-[#0c122b] pt-32 pr-6 pb-32 pl-6 relative overflow-hidden">
        {/* Subtle purple/blue glow */}
        <div className="pointer-events-none absolute -z-10 inset-0">
          <div className="absolute -top-10 -left-10 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl"></div>
          <div className="absolute bottom-0 right-1/3 h-64 w-64 rounded-full bg-fuchsia-400/10 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-10 items-center">
            {/* Visual (Left) */}
            <div className="border-gradient before:rounded-none bg-gradient-to-br from-indigo-500/10 via-fuchsia-500/5 to-blue-300/10 rounded-none pt-2 pr-2 pb-2 pl-2 relative z-10">
              <div className="overflow-hidden rounded-none bg-black/30 ring-1 ring-white/10">
                <img src="/assets/Bild 5.jpg" alt="AI-powered design workspace" className="aspect-video w-full object-cover" />
              </div>
            </div>

            {/* Copy (Right) */}
            <div className="relative isolate">

              {/* Logo behind text */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 -z-10 pointer-events-none">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/993d51c5-c52c-48fe-9e05-82911667c3ff_800w.png" className="opacity-50 object-contain w-[400px] md:w-[600px] translate-x-[40%]" alt="Watermark Logo" />
              </div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 text-sm text-indigo-200/80">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500/15 ring-1 ring-white/10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-[14px] h-[14px]" style={{ color: 'rgb(196, 164, 112)' }}>
                      <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                      <path d="M20 2v4"></path>
                      <path d="M22 4h-4"></path>
                      <circle cx="4" cy="20" r="2"></circle>
                    </svg>
                  </span>
                  <span>Om oss</span>
                </div>

                <h1 className="sm:text-5xl md:text-6xl text-4xl font-semibold text-gray-200 tracking-tight font-playfair bg-gray-200/0 mt-4">Adekvat Juridik</h1>

                <p className="leading-relaxed md:text-lg text-base text-gray-50/70 max-w-2xl mt-5">Adekvat Juridik hjälper enskilda personer och företag att hantera juridiska problem, konflikter och avtal på ett effektivt och begripligt sätt. Med över 40 års erfarenhet och specialistkompetens inom flera rättsområden erbjuder vi:</p>

                <div className="mt-8"></div>

                {/* Feature cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 gap-x-4 gap-y-4">
                  <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 border-gradient before:rounded-2xl bg-black/40 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                      <h3 className="leading-none text-xl font-semibold text-white tracking-tight font-playfair">Tydliga råd</h3>
                    </div>
                    <p className="text-sm text-neutral-400 mt-3">Vi förklarar juridiken på ett språk du förstår – utan krångel eller onödig jargong.</p>
                  </div>

                  <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 border-gradient before:rounded-2xl bg-black/40 backdrop-blur-sm">
                    <div className="flex gap-3 gap-x-3 gap-y-3 items-center">
                      <h3 className="leading-none text-xl font-semibold text-white tracking-tight font-playfair">Raka besked</h3>
                    </div>
                    <p className="text-sm text-neutral-400 mt-3">Du får alltid veta var du står. Vi är ärliga om både möjligheter och risker.</p>
                  </div>

                  <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 border-gradient before:rounded-2xl bg-black/40 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                      <h3 className="leading-none text-xl font-semibold text-white tracking-tight font-playfair">Ett personligt engagemang</h3>
                    </div>
                    <p className="text-sm text-neutral-400 mt-3">Ditt ärende är unikt. Vi tar oss tid att förstå din situation och dina behov.</p>
                  </div>
                </div>

                <p className="md:text-lg leading-relaxed text-base text-white/70 max-w-2xl mt-5">Hos oss möter du kunniga jurister som finns vid din sida från första kontakt till avslutat ärende – oavsett om det gäller en tvist, ett avtal eller framtidsplanering.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
