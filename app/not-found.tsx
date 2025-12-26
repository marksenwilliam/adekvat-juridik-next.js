import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0C122B] flex items-center justify-center px-6 py-32">
      <div className="max-w-2xl w-full text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <Image
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/993d51c5-c52c-48fe-9e05-82911667c3ff_800w.png"
            alt="Adekvat Juridik logotyp - juridisk rådgivning och experttjänster"
            width={120}
            height={120}
            className="opacity-50"
          />
        </div>

        {/* 404 Error */}
        <h1 className="text-8xl md:text-9xl font-playfair text-white mb-4 font-bold">404</h1>
        <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 font-playfair">Sidan kunde inte hittas</h2>

        <p className="text-gray-400 mb-8 leading-relaxed max-w-lg mx-auto">
          Vi kunde tyvärr inte hitta sidan du söker. Den kan ha flyttats, tagits bort eller så kan adressen vara felskriven.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#C4A470] text-black text-xs uppercase font-bold tracking-widest hover:bg-[#B39460] transition-colors rounded-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            Tillbaka till startsidan
          </Link>

          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white text-xs uppercase font-bold tracking-widest hover:bg-white/5 transition-colors rounded-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            Kontakta oss
          </Link>
        </div>

        {/* Popular Pages */}
        <div className="pt-12 border-t border-white/10">
          <p className="text-sm text-gray-500 mb-6 uppercase tracking-widest">Populära sidor:</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/juridisk-radgivning"
              className="text-sm text-[#C4A470] hover:text-white transition-colors hover:underline underline-offset-4"
            >
              Juridisk Rådgivning
            </Link>
            <span className="text-gray-600">·</span>
            <Link
              href="/tvister"
              className="text-sm text-[#C4A470] hover:text-white transition-colors hover:underline underline-offset-4"
            >
              Tvister
            </Link>
            <span className="text-gray-600">·</span>
            <Link
              href="/konsulttjanster"
              className="text-sm text-[#C4A470] hover:text-white transition-colors hover:underline underline-offset-4"
            >
              Konsulttjänster
            </Link>
            <span className="text-gray-600">·</span>
            <Link
              href="/foretagsoverlatelser"
              className="text-sm text-[#C4A470] hover:text-white transition-colors hover:underline underline-offset-4"
            >
              Företagsöverlåtelser
            </Link>
            <span className="text-gray-600">·</span>
            <Link
              href="/prislista"
              className="text-sm text-[#C4A470] hover:text-white transition-colors hover:underline underline-offset-4"
            >
              Prislista
            </Link>
            <span className="text-gray-600">·</span>
            <Link
              href="/om-oss"
              className="text-sm text-[#C4A470] hover:text-white transition-colors hover:underline underline-offset-4"
            >
              Om Oss
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
