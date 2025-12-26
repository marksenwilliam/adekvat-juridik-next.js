'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  useEffect(() => {
    const header = document.getElementById('main-header');

    const handleScroll = () => {
      if (window.scrollY > 20) {
        header?.classList.remove('bg-transparent');
        header?.classList.add('bg-zinc-700/40');
      } else {
        header?.classList.add('bg-transparent');
        header?.classList.remove('bg-zinc-700/40');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  useEffect(() => {
    const mobileMenuTrigger = document.getElementById('mobile-menu-trigger');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuPanel = document.getElementById('mobile-menu-panel');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const mobileMenuBackdrop = document.getElementById('mobile-menu-backdrop');

    const openMobileMenu = () => {
      mobileMenu?.classList.remove('opacity-0', 'invisible', 'pointer-events-none');
      mobileMenu?.classList.add('opacity-100', 'visible', 'pointer-events-auto');
      mobileMenuPanel?.classList.remove('translate-x-full');
      document.body.style.overflow = 'hidden';
    };

    const closeMobileMenu = () => {
      mobileMenu?.classList.add('opacity-0', 'invisible', 'pointer-events-none');
      mobileMenu?.classList.remove('opacity-100', 'visible', 'pointer-events-auto');
      mobileMenuPanel?.classList.add('translate-x-full');
      document.body.style.overflow = '';
    };

    mobileMenuTrigger?.addEventListener('click', openMobileMenu);
    mobileMenuClose?.addEventListener('click', closeMobileMenu);
    mobileMenuBackdrop?.addEventListener('click', closeMobileMenu);

    return () => {
      mobileMenuTrigger?.removeEventListener('click', openMobileMenu);
      mobileMenuClose?.removeEventListener('click', closeMobileMenu);
      mobileMenuBackdrop?.removeEventListener('click', closeMobileMenu);
    };
  }, []);

  return (
    <>
      {/* Navigation */}
      <header className="fixed transition-all duration-300 backdrop-blur-[2px] z-50 w-full border-white/5 border-b top-0" id="main-header">
        <div className="lg:px-12 flex h-24 max-w-[1400px] mr-auto ml-auto pr-6 pl-6 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 w-[200px]">
            <Link href="/" className="font-serif text-2xl tracking-tight leading-[0.85] text-white inline-flex flex-col items-start group">
              <Image
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/688b4ed2-0a20-4d21-8680-e661bedf8646_320w.png"
                alt="Adekvat Juridik"
                width={150}
                height={48}
                className="block cursor-pointer w-auto h-12 object-contain pt-0 pl-2 scale-150"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex flex-1 space-x-8 items-center justify-center">
            <Link href="/" className="text-[11px] hover:text-white transition-colors uppercase font-medium text-gray-100 tracking-widest">Hem</Link>
            <Link href="/om-oss" className="text-[11px] hover:text-white transition-colors uppercase font-medium text-gray-100 tracking-widest">Om Oss</Link>
            <Link href="/juridisk-radgivning" className="text-[11px] hover:text-white transition-colors uppercase font-medium text-gray-100 tracking-widest">Juridisk Rådgivning</Link>
            <Link href="/tvister" className="text-[11px] hover:text-white transition-colors uppercase font-medium text-gray-100 tracking-widest">Tvister</Link>
            <Link href="/konsulttjanster" className="text-[11px] hover:text-white transition-colors uppercase font-medium text-gray-100 tracking-widest">Konsulttjänster</Link>
            <Link href="/foretagsoverlatelser" className="text-[11px] hover:text-white transition-colors uppercase font-medium text-gray-100 tracking-widest">Företagsöverlåtelser</Link>
            <Link href="/prislista" className="text-[11px] hover:text-white transition-colors uppercase font-medium text-gray-100 tracking-widest">Prislista</Link>
            <Link href="/kontakt" className="text-[11px] hover:text-white transition-colors uppercase font-medium text-gray-100 tracking-widest">Kontakt</Link>
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center justify-end w-[200px]">
            <Link href="/kontakt" className="inline-flex items-center justify-center text-[11px] hover:bg-gray-200 transition-colors uppercase font-semibold text-black tracking-widest bg-white rounded-sm pt-3 pr-6 pb-3 pl-6">
              Boka konsultation
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden text-white cursor-pointer ml-auto" id="mobile-menu-trigger">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 stroke-[1.5]">
              <path d="M4 5h16"></path>
              <path d="M4 12h16"></path>
              <path d="M4 19h16"></path>
            </svg>
          </div>
        </div>
      </header>

      {/* Mobile Menu (Tablet & Mobile Only) */}
      <div id="mobile-menu" className="lg:hidden fixed inset-0 z-[99999] pointer-events-none opacity-0 invisible transition-all duration-300">
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" id="mobile-menu-backdrop"></div>

        {/* Menu Panel */}
        <div className="absolute top-0 right-0 h-full w-[280px] bg-[#0a0a0a] border-l border-white/10 transform translate-x-full transition-transform duration-300" id="mobile-menu-panel">
          {/* Close Button */}
          <div className="flex justify-end p-6">
            <div className="text-white cursor-pointer" id="mobile-menu-close">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 stroke-[1.5]">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col px-6 space-y-1">
            <Link href="/" className="text-[11px] uppercase tracking-widest font-medium text-gray-300 hover:text-white transition-colors py-4 border-b border-white/5">Hem</Link>
            <Link href="/om-oss" className="text-[11px] uppercase tracking-widest font-medium text-gray-300 hover:text-white transition-colors py-4 border-b border-white/5">Om Oss</Link>
            <Link href="/juridisk-radgivning" className="text-[11px] uppercase tracking-widest font-medium text-gray-300 hover:text-white transition-colors py-4 border-b border-white/5">Juridisk Rådgivning</Link>
            <Link href="/tvister" className="text-[11px] uppercase tracking-widest font-medium text-gray-300 hover:text-white transition-colors py-4 border-b border-white/5">Tvister</Link>
            <Link href="/konsulttjanster" className="text-[11px] uppercase tracking-widest font-medium text-gray-300 hover:text-white transition-colors py-4 border-b border-white/5">Konsulttjänster</Link>
            <Link href="/foretagsoverlatelser" className="text-[11px] uppercase tracking-widest font-medium text-gray-300 hover:text-white transition-colors py-4 border-b border-white/5">Företagsöverlåtelser</Link>
            <Link href="/prislista" className="text-[11px] uppercase tracking-widest font-medium text-gray-300 hover:text-white transition-colors py-4 border-b border-white/5">Prislista</Link>
            <Link href="/kontakt" className="text-[11px] uppercase tracking-widest font-medium text-gray-300 hover:text-white transition-colors py-4 border-b border-white/5">Kontakt</Link>
          </nav>

          {/* CTA Button */}
          <div className="px-6 mt-8">
            <Link href="/kontakt" className="block text-center text-[11px] uppercase font-semibold text-black tracking-widest bg-white hover:bg-gray-200 transition-colors rounded-sm py-4">
              Boka konsultation
            </Link>
          </div>

          {/* Logo */}
          <div className="px-6 mt-auto pt-12 pb-8">
            <Link href="/">
              <Image
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/adf00919-6189-4dee-9f65-484d675b6568_800w.png"
                alt="Adekvat Juridik"
                width={800}
                height={200}
                className="object-cover w-full h-auto"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
