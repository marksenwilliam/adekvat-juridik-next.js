import Link from 'next/link';
import Image from 'next/image';
import { articles } from '@/data/articles';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function ArtiklarPage() {
    const breadcrumbs = [
        { label: 'Hem', href: '/' },
        { label: 'Artiklar', href: '/artiklar' },
    ];

    return (
        <div className="bg-[#050A18] min-h-screen text-gray-200 selection:bg-[#C4A470] selection:text-white overflow-x-hidden">

            {/* Navbar Placeholder/Breadcrumbs */}
            <div className="pt-32 px-6 lg:px-12 max-w-[1400px] mx-auto">
                <Breadcrumbs items={breadcrumbs} renderNav={true} />
            </div>

            {/* Hero Section */}
            <section className="relative w-full px-6 lg:px-12 py-12 lg:py-20">
                <div className="max-w-[1400px] mx-auto text-center">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium font-playfair leading-[1.1] mb-8 text-white">
                        Aktuellt & <br />
                        <span className="text-[#C4A470]">Artiklar</span>
                    </h1>
                    <p className="text-gray-400 font-serif text-lg lg:text-xl max-w-2xl mx-auto">
                        Här delar vi med oss av juridiska insikter, nyheter och uppdateringar som kan vara relevanta för dig och din verksamhet.
                    </p>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="w-full px-6 lg:px-12 py-12 lg:pb-32">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[...articles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map((article) => (
                        <Link key={article.id} href={`/artiklar/${article.slug}`} className="group block bg-[#0B1121] border border-white/5 hover:border-[#C4A470]/50 transition-all duration-300 overflow-hidden">
                            <div className="relative h-64 w-full overflow-hidden">
                                {article.image && (
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                )}
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                            </div>
                            <div className="p-8">
                                <p className="text-[#C4A470] text-xs uppercase tracking-widest font-bold mb-3">{article.date}</p>
                                <h2 className="text-2xl font-playfair text-white mb-4 leading-tight group-hover:text-[#C4A470] transition-colors">
                                    {article.title}
                                </h2>
                                <p className="text-gray-400 font-light text-sm line-clamp-3 leading-relaxed">
                                    {article.excerpt}
                                </p>
                                <div className="mt-6 flex items-center text-xs font-bold uppercase tracking-widest text-white group-hover:text-[#C4A470] transition-colors">
                                    Läs mer
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 w-4 h-4">
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

        </div>
    );
}
