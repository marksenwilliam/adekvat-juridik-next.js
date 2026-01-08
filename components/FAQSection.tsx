'use client';

import { useState } from 'react';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSectionProps {
    faqs: FAQItem[];
    title?: string;
    subtitle?: string;
}

export default function FAQSection({
    faqs,
    title = "Vanliga frågor",
    subtitle = "Få svar på de vanligaste frågorna"
}: FAQSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="relative w-full px-6 lg:px-12 py-20 lg:py-32 bg-[#0B1121]">
            <div className="max-w-[1400px] mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#C4A470] mb-4 font-medium">
                        FAQ
                    </p>
                    <h2 className="text-4xl lg:text-5xl font-playfair text-white mb-6">
                        {title}
                    </h2>
                    <p className="text-gray-400 font-light max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-white/10 bg-white/[0.02] overflow-hidden transition-all duration-300 hover:border-[#C4A470]/30"
                        >
                            {/* Question Button */}
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 group"
                                aria-expanded={openIndex === index}
                            >
                                <span className="text-white font-medium leading-relaxed group-hover:text-[#C4A470] transition-colors duration-300">
                                    {faq.question}
                                </span>
                                <span
                                    className={`flex-shrink-0 w-8 h-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#C4A470] transition-all duration-300 ${openIndex === index
                                            ? 'bg-[#C4A470] text-[#050A18] rotate-180'
                                            : 'group-hover:bg-[#C4A470]/10'
                                        }`}
                                >
                                    <svg
                                        className="w-4 h-4 transition-transform duration-300"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </span>
                            </button>

                            {/* Answer Panel */}
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="px-6 pb-6 pt-0">
                                    <div className="border-t border-white/5 pt-4">
                                        <p className="text-gray-400 font-light leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
