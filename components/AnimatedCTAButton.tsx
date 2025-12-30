'use client';

import Link from 'next/link';

interface AnimatedCTAButtonProps {
    href: string;
    children: React.ReactNode;
}

export default function AnimatedCTAButton({ href, children }: AnimatedCTAButtonProps) {
    return (
        <Link
            href={href}
            className="group cursor-pointer border-none inline-flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4A470]/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 transition-all duration-300 text-xs font-medium text-white tracking-[0.15em] uppercase bg-[#050A18] rounded-none py-4 px-10 relative items-center justify-center"
        >
            {/* Left Edge Line */}
            <div
                className="pointer-events-none absolute left-[-2px] top-[-40px] bottom-[-40px] w-[2px]"
                style={{
                    background: 'linear-gradient(rgba(196,164,112,0), rgba(196,164,112,0.2) 40px, rgba(196,164,112,0.667) 40px, rgb(196,164,112), rgba(196,164,112,0.667) calc(100% - 40px), rgba(196,164,112,0.2) calc(100% - 40px), rgba(196,164,112,0))',
                    zIndex: 0
                }}
            >
                <div className="absolute inset-0 blur-[4px]" style={{ background: 'inherit' }} />
                <div className="absolute inset-0 blur-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'inherit' }} />
            </div>

            {/* Right Edge Line */}
            <div
                className="pointer-events-none absolute right-[-2px] top-[-40px] bottom-[-40px] w-[2px]"
                style={{
                    background: 'linear-gradient(rgba(196,164,112,0), rgba(196,164,112,0.2) 40px, rgba(196,164,112,0.667) 40px, rgb(196,164,112), rgba(196,164,112,0.667) calc(100% - 40px), rgba(196,164,112,0.2) calc(100% - 40px), rgba(196,164,112,0))',
                    zIndex: 0
                }}
            >
                <div className="absolute inset-0 blur-[4px]" style={{ background: 'inherit' }} />
                <div className="absolute inset-0 blur-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'inherit' }} />
            </div>

            {/* Top Edge Line */}
            <div
                className="pointer-events-none absolute top-[-2px] left-[-40px] right-[-40px] h-[2px]"
                style={{
                    background: 'linear-gradient(90deg, rgba(196,164,112,0), rgba(196,164,112,0.2) 40px, rgba(196,164,112,0.667) 40px, rgb(196,164,112), rgba(196,164,112,0.667) calc(100% - 40px), rgba(196,164,112,0.2) calc(100% - 40px), rgba(196,164,112,0))',
                    zIndex: 0
                }}
            >
                <div className="absolute inset-0 blur-[4px]" style={{ background: 'inherit' }} />
                <div className="absolute inset-0 blur-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'inherit' }} />
            </div>

            {/* Bottom Edge Line */}
            <div
                className="pointer-events-none absolute bottom-[-2px] left-[-40px] right-[-40px] h-[2px]"
                style={{
                    background: 'linear-gradient(90deg, rgba(196,164,112,0), rgba(196,164,112,0.2) 40px, rgba(196,164,112,0.667) 40px, rgb(196,164,112), rgba(196,164,112,0.667) calc(100% - 40px), rgba(196,164,112,0.2) calc(100% - 40px), rgba(196,164,112,0))',
                    zIndex: 0
                }}
            >
                <div className="absolute inset-0 blur-[4px]" style={{ background: 'inherit' }} />
                <div className="absolute inset-0 blur-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'inherit' }} />
            </div>

            {/* Hover Overlay */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                style={{
                    background: 'radial-gradient(circle, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 20%, rgba(17,17,17,0.667) 50%) 0% 0% / 3px 3px, radial-gradient(100% 100%, rgb(196,164,112), rgba(196,164,112,0)) 0% 0% / auto',
                    zIndex: 0
                }}
            />

            {/* Radial Glow on Hover */}
            <div
                className="absolute inset-[-20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[20px] -z-10"
                style={{ background: 'radial-gradient(circle, rgba(196,164,112,0.3), transparent 60%)' }}
            />

            {/* Content */}
            <span className="relative z-10 flex items-center gap-3">
                {children}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                </svg>
            </span>
        </Link>
    );
}
