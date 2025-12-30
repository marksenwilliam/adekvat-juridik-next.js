'use client';

import { useState, FormEvent } from 'react';

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Contact Section */}
      <section className="lg:pt-32 text-[#1a1a1a] bg-[#0c122b] border-slate-950 border-t pt-24 pb-8">
        <div className="max-w-[1200px] mr-auto ml-auto pr-6 pl-6">

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="lg:text-5xl text-4xl text-gray-200 tracking-tight font-playfair mb-4">Kontakta oss</h1>
            <div className="w-12 h-px bg-[#C4A470] mx-auto mb-8"></div>
            <p className="leading-relaxed text-sm font-light text-gray-200 max-w-lg mr-auto ml-auto">Vi ser fram emot att höra från dig. Kontakta oss för en kostnadsfri konsultation.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 mb-20 gap-x-12 gap-y-12">

            {/* Left Column: Form & Info */}
            <div className="flex flex-col">

              {/* Form */}
              <form className="space-y-4 mb-12" onSubmit={handleSubmit}>
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
                    Ett fel uppstod. Vänligen försök igen.
                  </div>
                )}

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
                    <h4 className="text-lg text-gray-200 tracking-tight font-playfair mb-1">Telefon</h4>
                    <p className="text-sm font-light text-gray-300">+46 (0)123-456 78</p>
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
                    <h4 className="text-lg text-gray-200 tracking-tight font-playfair mb-1">E-post</h4>
                    <a href="mailto:info@adekvat-juridik.se" className="hover:text-[#C4A470] transition-colors text-sm font-light text-gray-300">info@adekvat-juridik.se</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Logo */}
            <div className="hidden md:flex min-h-[300px] lg:min-h-[400px] justify-center lg:-translate-y-16 h-full items-center">
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/adf00919-6189-4dee-9f65-484d675b6568_800w.png" alt="Adekvat Juridik Monogram" className="md:h-80 lg:h-96 mix-blend-multiply w-auto h-72 object-contain" />
            </div>
          </div>


        </div>
      </section>
    </>
  )
}
