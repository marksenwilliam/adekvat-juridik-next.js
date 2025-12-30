import Link from 'next/link';
import Image from 'next/image';
import { articles, Article } from '@/data/articles';

interface RelatedArticlesProps {
    category: string;
}

export default function RelatedArticles({ category }: RelatedArticlesProps) {
    const relatedArticles = articles.filter((article) => article.category === category);

    if (relatedArticles.length === 0) {
        return null;
    }

    return (
        <section className="relative w-full px-6 lg:px-12 py-20 lg:py-32 bg-[#050A18]">
            <div className="max-w-[1400px] mx-auto">
                <p className="text-xs uppercase tracking-[0.2em] text-[#C4A470] mb-4 font-medium">Fördjupa dig</p>
                <h2 className="text-4xl lg:text-5xl font-playfair text-white mb-12">
                    Relevant läsning
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {relatedArticles.map((article) => (
                        <Link
                            key={article.id}
                            href={`/artiklar/${article.slug}`}
                            className="group flex flex-col md:flex-row gap-6 bg-[#0B1121] border border-white/5 hover:border-[#C4A470]/50 transition-all duration-300 overflow-hidden"
                        >
                            {/* Image */}
                            <div className="relative w-full md:w-48 h-48 md:h-auto flex-shrink-0 overflow-hidden">
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

                            {/* Content */}
                            <div className="flex flex-col justify-center p-6 md:py-6 md:pr-6 md:pl-0">
                                <p className="text-[#C4A470] text-xs uppercase tracking-widest font-bold mb-2">
                                    {article.category}
                                </p>
                                <h3 className="text-xl font-playfair text-white mb-3 leading-tight group-hover:text-[#C4A470] transition-colors">
                                    {article.title}
                                </h3>
                                <p className="text-gray-400 font-light text-sm leading-relaxed line-clamp-2">
                                    {article.excerpt}
                                </p>
                                <div className="mt-4 flex items-center text-xs font-bold uppercase tracking-widest text-white group-hover:text-[#C4A470] transition-colors">
                                    Läs artikeln
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 w-4 h-4">
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
