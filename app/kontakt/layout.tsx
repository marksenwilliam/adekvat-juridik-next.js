import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Kontakta Oss - Boka Kostnadsfri Konsultation',
    description: 'Kontakta Adekvat Juridik för juridisk rådgivning. Boka din kostnadsfria konsultation idag. Vi svarar vanligtvis inom 24 timmar.',
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
    return children;
}
