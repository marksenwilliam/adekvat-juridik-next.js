'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect, FormEvent } from 'react';
import TurnstileWidget from '@/components/TurnstileWidget';

export default function Footer() {
  const pathname = usePathname();
  const isContactPage = pathname === '/kontakt';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  
  // Turnstile bot protection states
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [canSubmitWithoutTurnstile, setCanSubmitWithoutTurnstile] = useState(false);
  const [formLoadTime, setFormLoadTime] = useState<number>(0);

  // Record when form loads (for bot detection)
  useEffect(() => {
    setFormLoadTime(Date.now());
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage(null);

    // Check if Turnstile token is present (unless timeout/error occurred)
    if (!turnstileToken && !canSubmitWithoutTurnstile) {
      setErrorMessage('Vänligen verifiera att du inte är en robot.');
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          honeypot: (document.getElementById('footer-website') as HTMLInputElement)?.value || '',
          formLoadTime: formLoadTime,
          turnstileToken: turnstileToken || 'timeout-fallback',
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setTurnstileToken(null);
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.error || 'Ett fel uppstod. Vänligen försök igen.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setErrorMessage('Ett fel uppstod. Vänligen försök igen.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // if (isContactPage) {
  //   return null;
  // }

  return (
    <>
      {/* Contact Form Section */}
      {!isContactPage && (
        <section className="lg:pt-32 text-[#1a1a1a] bg-white border-gray-100 border-t pt-24 pb-24 relative z-10" id="kontakt">
          <div className="max-w-[1200px] mr-auto ml-auto pr-6 pl-6">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="lg:text-5xl text-4xl text-black tracking-tight font-playfair mb-4">Kontakta oss</h2>
              <div className="w-12 h-px bg-[#C4A470] mx-auto mb-8"></div>
              <p className="text-gray-500 font-light text-sm max-w-lg mx-auto leading-relaxed">
                Vi ser fram emot att höra från dig. Kontakta oss för en kostnadsfri konsultation.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 gap-x-12 gap-y-12">
              {/* Left Column: Form & Info */}
              <div className="flex flex-col">
                {/* Form */}
                <form className="space-y-4 mb-12" onSubmit={handleSubmit}>
                  {/* Honeypot field - hidden from real users, bots will fill it */}
                  <div className="absolute -left-[9999px] opacity-0" aria-hidden="true">
                    <label htmlFor="footer-website">Website</label>
                    <input
                      type="text"
                      id="footer-website"
                      name="footer-website"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Namn *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full border border-gray-200 px-5 py-4 text-sm text-gray-900 focus:outline-none focus:border-[#C4A470] focus:ring-1 focus:ring-[#C4A470] transition-all bg-white placeholder-gray-400 font-light rounded-sm"
                  />
                  <input
                    type="email"
                    placeholder="E-post *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="focus:outline-none focus:border-[#C4A470] focus:ring-1 focus:ring-[#C4A470] transition-all placeholder-gray-400 text-sm text-gray-900 font-light bg-white w-full border-gray-200 border rounded-sm pt-4 pr-5 pb-4 pl-5"
                  />
                  <input
                    type="tel"
                    placeholder="Telefon"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="focus:outline-none focus:border-[#C4A470] focus:ring-1 focus:ring-[#C4A470] transition-all placeholder-gray-400 text-sm text-gray-900 font-light bg-white w-full border-gray-200 border rounded-sm pt-4 pr-5 pb-4 pl-5"
                  />
                  <input
                    type="text"
                    placeholder="Ämne *"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="w-full border border-gray-200 px-5 py-4 text-sm text-gray-900 focus:outline-none focus:border-[#C4A470] focus:ring-1 focus:ring-[#C4A470] transition-all bg-white placeholder-gray-400 font-light rounded-sm"
                  />
                  <textarea
                    placeholder="Meddelande *"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="w-full border border-gray-200 px-5 py-4 text-sm text-gray-900 focus:outline-none focus:border-[#C4A470] focus:ring-1 focus:ring-[#C4A470] transition-all bg-white placeholder-gray-400 font-light rounded-sm resize-none"
                  ></textarea>

                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-sm text-sm">
                      Tack! Ditt meddelande har skickats.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-sm text-sm">
                      {errorMessage || 'Ett fel uppstod. Vänligen försök igen.'}
                    </div>
                  )}

                  {/* Turnstile Bot Protection */}
                  <TurnstileWidget
                    onVerify={(token) => setTurnstileToken(token)}
                    onExpire={() => setTurnstileToken(null)}
                    onError={() => setCanSubmitWithoutTurnstile(true)}
                    onTimeout={() => setCanSubmitWithoutTurnstile(true)}
                    theme="light"
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#C4A470] hover:bg-[#b39360] text-white font-medium uppercase tracking-widest text-[11px] py-4 transition-colors flex items-center justify-center gap-2 rounded-sm mt-2 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 stroke-[1.5]">
                      <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                      <path d="m21.854 2.147-10.94 10.939"></path>
                    </svg>
                    {isSubmitting ? 'Skickar...' : 'Skicka meddelande'}
                  </button>
                </form>

                {/* Contact Details */}
                <div className="space-y-8 pl-1">
                  {/* Phone */}
                  <div className="flex gap-5 group">
                    <div className="text-[#C4A470] mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 stroke-[1.5]">
                        <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg text-[#1a1a1a] tracking-tight font-playfair mb-1">Telefon</h4>
                      <p className="text-sm text-gray-500 font-light">+46 (0)123-456 78</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-5 group">
                    <div className="text-[#C4A470] mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 stroke-[1.5]">
                        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg text-[#1a1a1a] tracking-tight font-playfair mb-1">E-post</h4>
                      <a href="mailto:info@adekvat-juridik.se" className="text-sm text-gray-500 font-light hover:text-[#C4A470] transition-colors">
                        info@adekvat-juridik.se
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Logo */}
              <div className="hidden md:flex min-h-[300px] lg:min-h-[400px] justify-center lg:-translate-y-16 h-full items-center">
                <Image
                  src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/993d51c5-c52c-48fe-9e05-82911667c3ff_800w.png"
                  alt="Adekvat Juridik Monogram"
                  width={400}
                  height={400}
                  className="mix-blend-multiply w-auto h-72 md:h-80 lg:h-96 object-contain"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Footer */}
      <footer className="relative z-10 bg-[#050A18] text-white border-t border-white/5 pt-20 pb-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

            {/* Column 1: Brand */}
            <div className="space-y-6">
              <Link href="/" className="inline-block">
                <Image
                  src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/688b4ed2-0a20-4d21-8680-e661bedf8646_320w.png"
                  alt="Adekvat Juridik"
                  width={200}
                  height={60}
                  className="w-auto h-12 object-contain brightness-0 invert"
                />
              </Link>
              <p className="text-gray-300 font-light text-sm leading-relaxed max-w-xs">
                Juridisk expertis med personligt engagemang. Vi hjälper dig navigera rättsliga frågor med trygghet och klarhet.
              </p>
            </div>

            {/* Column 2: Snabblänkar */}
            <div>
              <h3 className="text-[#C4A470] text-xs uppercase tracking-[0.2em] font-bold mb-6">Snabblänkar</h3>
              <ul className="space-y-3">
                <li><Link href="/" className="text-sm text-gray-300 hover:text-[#C4A470] transition-colors">Hem</Link></li>
                <li><Link href="/om-oss" className="text-sm text-gray-300 hover:text-[#C4A470] transition-colors">Om oss</Link></li>
                <li><Link href="/prislista" className="text-sm text-gray-300 hover:text-[#C4A470] transition-colors">Prislista</Link></li>
                <li><Link href="/artiklar" className="text-sm text-gray-300 hover:text-[#C4A470] transition-colors">Artiklar</Link></li>
                <li><Link href="/kontakt" className="text-sm text-gray-300 hover:text-[#C4A470] transition-colors">Kontakt</Link></li>
              </ul>
            </div>

            {/* Column 3: Tjänster */}
            <div>
              <h3 className="text-[#C4A470] text-xs uppercase tracking-[0.2em] font-bold mb-6">Våra Tjänster</h3>
              <ul className="space-y-3">
                <li><Link href="/juridisk-radgivning" className="text-sm text-gray-300 hover:text-[#C4A470] transition-colors">Juridisk Rådgivning</Link></li>
                <li><Link href="/tvister" className="text-sm text-gray-300 hover:text-[#C4A470] transition-colors">Tvister</Link></li>
                <li><Link href="/foretagsoverlatelser" className="text-sm text-gray-300 hover:text-[#C4A470] transition-colors">Företagsöverlåtelser</Link></li>
                <li><Link href="/konsulttjanster" className="text-sm text-gray-300 hover:text-[#C4A470] transition-colors">Konsulttjänster</Link></li>
              </ul>
            </div>

            {/* Column 4: Kontakt (Compact) */}
            <div>
              <h3 className="text-[#C4A470] text-xs uppercase tracking-[0.2em] font-bold mb-6">Kontakt</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="text-[#C4A470] mt-1 w-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <span className="text-gray-300 text-sm font-light">+46 (0)123-456 78</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-[#C4A470] mt-1 w-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                    </svg>
                  </div>
                  <a href="mailto:info@adekvat-juridik.se" className="text-gray-300 text-sm font-light hover:text-[#C4A470] transition-colors">
                    info@adekvat-juridik.se
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-[11px] text-gray-400 uppercase tracking-widest font-medium">
            <p>
              © {new Date().getFullYear()} Adekvat Juridik. Alla rättigheter förbehållna.
            </p>
            <div className="flex gap-8 mt-4 md:mt-0">
              <Link href="/integritetspolicy" className="hover:text-white transition-colors">Integritetspolicy</Link>
              <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
