import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Kontakta Oss - Boka Kostnadsfri Konsultation',
    description: 'Kontakta Adekvat Juridik för juridisk rådgivning. Boka din kostnadsfria konsultation idag. Vi svarar vanligtvis inom 24 timmar.',
    alternates: {
        canonical: 'https://www.adekvatjuridik.se/kontakt',
    },
    openGraph: {
        title: 'Kontakta Oss | Adekvat Juridik',
        description: 'Boka din kostnadsfria konsultation idag.',
    },
};

export default function KontaktLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // ContactPage Schema for SEO
    const contactPageSchema = {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Kontakta Adekvat Juridik',
        description: 'Kontakta Adekvat Juridik för juridisk rådgivning. Boka din kostnadsfria konsultation idag.',
        url: 'https://www.adekvatjuridik.se/kontakt',
        mainEntity: {
            '@type': 'LegalService',
            name: 'Adekvat Juridik',
            url: 'https://www.adekvatjuridik.se',
            telephone: '+46-123-456-78',
            email: 'info@adekvatjuridik.se',
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
            />
            {children}
        </>
    );
}
