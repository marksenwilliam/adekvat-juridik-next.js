import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { articles } from '@/data/articles';
import Breadcrumbs from '@/components/Breadcrumbs';

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const article = articles.find((a) => a.slug === slug);

    if (!article) {
        return {
            title: 'Artikel ej hittad',
        };
    }

    return {
        title: article.title,
        description: article.excerpt,
        alternates: {
            canonical: `https://www.adekvatjuridik.se/artiklar/${article.slug}`,
        },
        openGraph: {
            title: `${article.title} | Adekvat Juridik`,
            description: article.excerpt,
            type: 'article',
            publishedTime: article.date,
            images: article.image ? [article.image] : [],
        },
    };
}

export async function generateStaticParams() {
    return articles.map((article) => ({
        slug: article.slug,
    }));
}

export default async function ArticlePage({ params }: PageProps) {
    const { slug } = await params;
    const article = articles.find((a) => a.slug === slug);

    if (!article) {
        notFound();
    }

    const breadcrumbs = [
        { label: 'Hem', href: '/' },
        { label: 'Artiklar', href: '/artiklar' },
        { label: article.title, href: `/artiklar/${article.slug}` },
    ];

    // BlogPosting Schema for SEO
    const blogPostingSchema = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: article.title,
        description: article.excerpt,
        image: article.image || 'https://www.adekvatjuridik.se/assets/Bild%201.jpg',
        datePublished: article.date,
        dateModified: article.date,
        author: {
            '@type': 'Organization',
            name: 'Adekvat Juridik',
            url: 'https://www.adekvatjuridik.se',
        },
        publisher: {
            '@type': 'Organization',
            name: 'Adekvat Juridik',
            url: 'https://www.adekvatjuridik.se',
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://www.adekvatjuridik.se/artiklar/${article.slug}`,
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
            />
            <div className="bg-[#050A18] min-h-screen text-gray-200 selection:bg-[#C4A470] selection:text-white overflow-x-hidden">

            {/* Navbar Placeholder/Breadcrumbs */}
            <div className="pt-32 px-6 lg:px-12 max-w-[1400px] mx-auto">
                <Breadcrumbs items={breadcrumbs} renderNav={true} />
            </div>

            <article className="max-w-4xl mx-auto px-6 py-12 lg:py-20">
                <header className="mb-12 text-center">
                    <p className="text-[#C4A470] text-sm uppercase tracking-widest font-bold mb-6">{article.date}</p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair text-white mb-8 leading-tight">
                        {article.title}
                    </h1>
                    <div className="w-24 h-px bg-[#C4A470] mx-auto"></div>
                </header>

                {article.image && (
                    <div className="relative w-full aspect-video mb-16 rounded-sm overflow-hidden border border-white/10 shadow-2xl">
                        <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                )}

                <div
                    className="prose prose-invert prose-lg mx-auto prose-headings:font-playfair prose-headings:text-white prose-p:text-gray-300 prose-p:font-light prose-p:leading-relaxed prose-a:text-[#C4A470] prose-li:text-gray-300"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                />

                <div className="mt-20 border-t border-white/10 pt-12 text-center">
                    <Link href="/artiklar" className="inline-flex items-center text-[#C4A470] hover:text-white transition-colors uppercase tracking-widest text-xs font-bold gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-180">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                        </svg>
                        Tillbaka till artiklar
                    </Link>
                </div>

            </article>

            </div>
        </>
    );
}
