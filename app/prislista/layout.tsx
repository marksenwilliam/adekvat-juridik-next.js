import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Prislista - Transparenta Juridiska Priser',
    description: 'Se våra fasta priser för juridiska tjänster. Transparenta priser för avtal, tvister, familjerätt, arvsrätt och företagsjuridik. Inga dolda avgifter.',
    openGraph: {
        title: 'Prislista | Adekvat Juridik',
        description: 'Transparenta priser för juridiska tjänster.',
    },
};

export default function PrislistaLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
