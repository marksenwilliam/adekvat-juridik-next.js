import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Integritetspolicy | Adekvat Juridik",
  description: "Läs om hur Adekvat Juridik behandlar dina personuppgifter enligt GDPR. Information om dataskydd, användarrättigheter och våra rutiner för integritet.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://adekvatjuridik.se/integritetspolicy",
  },
};

export default function IntegritetspolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#0C122B] pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Link href="/" className="text-sm text-[#C4A470] hover:text-white transition-colors uppercase tracking-widest">
              ← Tillbaka till startsidan
            </Link>
          </div>
          <h1 className="text-5xl lg:text-6xl font-playfair text-white mb-6">Integritetspolicy</h1>
          <p className="text-gray-400 text-lg">
            Senast uppdaterad: {new Date().toLocaleDateString('sv-SE', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto prose prose-lg">

          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-3xl font-playfair text-[#1a1a1a] mb-4">1. Introduktion</h2>
            <p className="text-gray-700 leading-relaxed">
              Adekvat Juridik värnar om din integritet och är engagerade i att skydda dina personuppgifter.
              Denna integritetspolicy förklarar hur vi samlar in, använder, lagrar och skyddar dina personuppgifter
              i enlighet med Dataskyddsförordningen (GDPR) och annan tillämplig lagstiftning.
            </p>
          </div>

          {/* Data Controller */}
          <div className="mb-12">
            <h2 className="text-3xl font-playfair text-[#1a1a1a] mb-4">2. Personuppgiftsansvarig</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Personuppgiftsansvarig för behandlingen av dina personuppgifter är:
            </p>
            <div className="bg-gray-50 p-6 rounded-sm border border-gray-200">
              <p className="text-gray-700 mb-2"><strong>Adekvat Juridik</strong></p>
              <p className="text-gray-700 mb-2">E-post: info@adekvatjuridik.se</p>
              <p className="text-gray-700">Organisationsnummer: [Kommer att läggas till]</p>
            </div>
          </div>

          {/* What Data We Collect */}
          <div className="mb-12">
            <h2 className="text-3xl font-playfair text-[#1a1a1a] mb-4">3. Vilka personuppgifter samlar vi in?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Vi kan komma att samla in följande typer av personuppgifter:
            </p>

            <h3 className="text-2xl font-semibold text-[#1a1a1a] mt-6 mb-3">3.1 Information du ger oss direkt</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Kontaktuppgifter:</strong> Namn, e-postadress, telefonnummer</li>
              <li><strong>Ärendeuppgifter:</strong> Information relaterad till juridiska ärenden och konsultationer</li>
              <li><strong>Kommunikation:</strong> Meddelanden och korrespondens med oss via kontaktformulär, e-post eller telefon</li>
            </ul>

            <h3 className="text-2xl font-semibold text-[#1a1a1a] mt-6 mb-3">3.2 Information som samlas in automatiskt</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Teknisk information:</strong> IP-adress, webbläsartyp, operativsystem</li>
              <li><strong>Användningsdata:</strong> Sidvisningar, klickbeteende, tid på webbplatsen (via Google Analytics, om samtycke ges)</li>
              <li><strong>Cookies:</strong> Se vår <Link href="/cookies" className="text-[#C4A470] hover:underline">cookiepolicy</Link> för mer information</li>
            </ul>
          </div>

          {/* Purpose of Processing */}
          <div className="mb-12">
            <h2 className="text-3xl font-playfair text-[#1a1a1a] mb-4">4. Ändamål med behandlingen</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Vi behandlar dina personuppgifter för följande ändamål:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Tillhandahålla juridiska tjänster:</strong> För att kunna utföra våra juridiska uppdrag och konsultationer</li>
              <li><strong>Kommunikation:</strong> För att besvara dina förfrågningar och hålla kontakt angående ärenden</li>
              <li><strong>Avtalshantering:</strong> För att ingå och fullgöra avtal med klienter</li>
              <li><strong>Marknadsföring:</strong> För att skicka nyhetsbrev och information om våra tjänster (endast med ditt samtycke)</li>
              <li><strong>Förbättra webbplatsen:</strong> För att analysera användning och förbättra användarupplevelsen (med samtycke)</li>
              <li><strong>Rättsliga skyldigheter:</strong> För att uppfylla lagkrav, t.ex. bokföringslagen och penningtvättslagen</li>
            </ul>
          </div>

          {/* Legal Basis */}
          <div className="mb-12">
            <h2 className="text-3xl font-playfair text-[#1a1a1a] mb-4">5. Rättslig grund för behandling</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Vi behandlar dina personuppgifter baserat på följande rättsliga grunder enligt GDPR:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Fullgörande av avtal (Art. 6.1.b):</strong> När behandlingen är nödvändig för att fullgöra vårt avtal med dig</li>
              <li><strong>Rättslig förpliktelse (Art. 6.1.c):</strong> När vi är skyldiga enligt lag att behandla uppgifterna</li>
              <li><strong>Berättigat intresse (Art. 6.1.f):</strong> För att utveckla och förbättra våra tjänster</li>
              <li><strong>Samtycke (Art. 6.1.a):</strong> När du har gett ditt uttryckliga samtycke, t.ex. för marknadsföring eller cookies</li>
            </ul>
          </div>

          {/* Data Retention */}
          <div className="mb-12">
            <h2 className="text-3xl font-playfair text-[#1a1a1a] mb-4">6. Lagringstid</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Vi lagrar dina personuppgifter endast så länge som det är nödvändigt för de ändamål som anges i denna policy:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Klientuppgifter:</strong> 10 år efter avslutat ärende (enligt advokatens arkiveringsskyldighet och bokföringslagen)</li>
              <li><strong>Kontaktförfrågningar:</strong> 2 år från senaste kontakt</li>
              <li><strong>Marknadsföringssamtycke:</strong> Tills du återkallar ditt samtycke</li>
              <li><strong>Cookies och analysdata:</strong> Se vår <Link href="/cookies" className="text-[#C4A470] hover:underline">cookiepolicy</Link></li>
            </ul>
          </div>

          {/* Sharing Data */}
          <div className="mb-12">
            <h2 className="text-3xl font-playfair text-[#1a1a1a] mb-4">7. Delning av personuppgifter</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Vi delar inte dina personuppgifter med tredje part utan ditt samtycke, förutom i följande fall:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Tjänsteleverantörer:</strong> Vi använder Resend för e-posthantering. Resend agerar som personuppgiftsbiträde och behandlar uppgifter enligt våra instruktioner.</li>
              <li><strong>Rättsliga krav:</strong> Om det krävs enligt lag, domstolsbeslut eller myndighetsbegäran</li>
              <li><strong>Professionell sekretesskydd:</strong> Advokaters tystnadsplikt enligt Rättegångsbalken gäller för alla klientuppgifter</li>
            </ul>
          </div>

          {/* Your Rights */}
          <div className="mb-12">
            <h2 className="text-3xl font-playfair text-[#1a1a1a] mb-4">8. Dina rättigheter enligt GDPR</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Du har följande rättigheter gällande dina personuppgifter:
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-[#1a1a1a] mb-2">8.1 Rätt till tillgång (Art. 15)</h3>
                <p className="text-gray-700">Du har rätt att få information om vilka personuppgifter vi behandlar om dig.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#1a1a1a] mb-2">8.2 Rätt till rättelse (Art. 16)</h3>
                <p className="text-gray-700">Du har rätt att få felaktiga uppgifter rättade.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#1a1a1a] mb-2">8.3 Rätt till radering (Art. 17)</h3>
                <p className="text-gray-700">Du har rätt att få dina uppgifter raderade under vissa förutsättningar (förbehåll för lagkrav om arkivering).</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#1a1a1a] mb-2">8.4 Rätt till begränsning (Art. 18)</h3>
                <p className="text-gray-700">Du har rätt att begära att behandlingen av dina uppgifter begränsas.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#1a1a1a] mb-2">8.5 Rätt till dataportabilitet (Art. 20)</h3>
                <p className="text-gray-700">Du har rätt att få ut dina uppgifter i ett strukturerat, allmänt använt format.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#1a1a1a] mb-2">8.6 Rätt att göra invändningar (Art. 21)</h3>
                <p className="text-gray-700">Du har rätt att invända mot behandling som baseras på berättigat intresse.</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#1a1a1a] mb-2">8.7 Rätt att återkalla samtycke</h3>
                <p className="text-gray-700">Du kan när som helst återkalla ditt samtycke för marknadsföring eller cookies.</p>
              </div>
            </div>

            <div className="bg-[#C4A470]/10 p-6 rounded-sm border border-[#C4A470]/20 mt-6">
              <p className="text-gray-700">
                <strong>För att utöva dina rättigheter, kontakta oss på:</strong> info@adekvatjuridik.se
              </p>
            </div>
          </div>

          {/* Security */}
          <div className="mb-12">
            <h2 className="text-3xl font-playfair text-[#1a1a1a] mb-4">9. Säkerhet</h2>
            <p className="text-gray-700 leading-relaxed">
              Vi vidtar lämpliga tekniska och organisatoriska åtgärder för att skydda dina personuppgifter mot obehörig
              åtkomst, förlust, missbruk eller ändring. Detta inkluderar:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
              <li>Kryptering av känslig data (HTTPS/SSL)</li>
              <li>Begränsad åtkomst till personuppgifter</li>
              <li>Regelbundna säkerhetsöversyner</li>
              <li>Säkra backup-rutiner</li>
            </ul>
          </div>

          {/* Third-party Services */}
          <div className="mb-12">
            <h2 className="text-3xl font-playfair text-[#1a1a1a] mb-4">10. Tredjepartstjänster</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Vi använder följande tredjepartstjänster som kan behandla personuppgifter:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Resend:</strong> E-postleverans för kontaktformulär</li>
              <li><strong>Google Analytics:</strong> Webbanalys (endast med ditt samtycke via cookie-banner)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Dessa tjänster har egna integritetspolicies och agerar som personuppgiftsbiträden.
            </p>
          </div>

          {/* Cookies */}
          <div className="mb-12">
            <h2 className="text-3xl font-playfair text-[#1a1a1a] mb-4">11. Cookies</h2>
            <p className="text-gray-700 leading-relaxed">
              Vi använder cookies för att förbättra din upplevelse på vår webbplats. För detaljerad information om
              vilka cookies vi använder och hur du kan hantera dem, läs vår{' '}
              <Link href="/cookies" className="text-[#C4A470] hover:underline font-medium">
                cookiepolicy
              </Link>.
            </p>
          </div>

          {/* Children's Privacy */}
          <div className="mb-12">
            <h2 className="text-3xl font-playfair text-[#1a1a1a] mb-4">12. Barns integritet</h2>
            <p className="text-gray-700 leading-relaxed">
              Våra tjänster riktar sig inte till personer under 18 år. Vi samlar inte medvetet in personuppgifter
              från barn utan vårdnadshavares samtycke.
            </p>
          </div>

          {/* Changes to Policy */}
          <div className="mb-12">
            <h2 className="text-3xl font-playfair text-[#1a1a1a] mb-4">13. Ändringar i integritetspolicyn</h2>
            <p className="text-gray-700 leading-relaxed">
              Vi kan komma att uppdatera denna integritetspolicy från tid till annan. Väsentliga ändringar kommer
              att meddelas via vår webbplats. Vi rekommenderar att du regelbundet läser igenom policyn för att
              hålla dig informerad.
            </p>
          </div>

          {/* Complaints */}
          <div className="mb-12">
            <h2 className="text-3xl font-playfair text-[#1a1a1a] mb-4">14. Klagomål</h2>
            <p className="text-gray-700 leading-relaxed">
              Om du anser att vi behandlar dina personuppgifter på ett felaktigt sätt har du rätt att lämna in
              ett klagomål till tillsynsmyndigheten:
            </p>
            <div className="bg-gray-50 p-6 rounded-sm border border-gray-200 mt-4">
              <p className="text-gray-700 mb-2"><strong>Integritetsskyddsmyndigheten (IMY)</strong></p>
              <p className="text-gray-700 mb-2">Box 8114, 104 20 Stockholm</p>
              <p className="text-gray-700 mb-2">Telefon: 08-657 61 00</p>
              <p className="text-gray-700">E-post: imy@imy.se</p>
              <p className="text-gray-700 mt-2">Webbplats: <a href="https://www.imy.se" target="_blank" rel="noopener noreferrer" className="text-[#C4A470] hover:underline">www.imy.se</a></p>
            </div>
          </div>

          {/* Contact */}
          <div className="mb-12">
            <h2 className="text-3xl font-playfair text-[#1a1a1a] mb-4">15. Kontakta oss</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Om du har frågor om denna integritetspolicy eller vill utöva dina rättigheter, kontakta oss:
            </p>
            <div className="bg-[#0C122B] text-white p-8 rounded-sm">
              <p className="mb-2"><strong>Adekvat Juridik</strong></p>
              <p className="mb-2">E-post: info@adekvatjuridik.se</p>
              <p className="text-gray-400 text-sm mt-4">Vi strävar efter att besvara alla förfrågningar inom 30 dagar.</p>
            </div>
          </div>

          {/* Back to home */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <Link
              href="/"
              className="inline-flex items-center text-[#C4A470] hover:text-[#1a1a1a] transition-colors font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path>
              </svg>
              Tillbaka till startsidan
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
