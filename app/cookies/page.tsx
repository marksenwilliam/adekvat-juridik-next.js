import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Cookiepolicy | Adekvat Juridik",
  description: "Information om hur Adekvat Juridik använder cookies på vår webbplats. Läs om olika typer av cookies och hur du kan hantera dina cookie-inställningar.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://adekvatjuridik.se/cookies",
  },
};

export default function CookiesPage() {
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
          <h1 className="text-5xl lg:text-6xl font-playfair text-white mb-6">Cookiepolicy</h1>
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
            <h2 className="text-3xl font-playfair text-[#1a1a1a] mb-4">1. Vad är cookies?</h2>
            <p className="text-gray-700 leading-relaxed">
              Cookies är små textfiler som lagras på din dator, surfplatta eller mobiltelefon när du besöker en webbplats.
              Cookies gör det möjligt för webbplatsen att komma ihåg dina handlingar och preferenser (såsom språk,
              teckenstorlek och andra visningsinställningar) under en viss tid, så att du inte behöver ange dem på nytt
              varje gång du återvänder till webbplatsen eller surfar mellan olika sidor.
            </p>
          </div>

          {/* Why We Use Cookies */}
          <div className="mb-12">
            <h2 className="text-3xl font-playfair text-[#1a1a1a] mb-4">2. Varför använder vi cookies?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Vi använder cookies för att:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Förbättra din användarupplevelse på webbplatsen</li>
              <li>Komma ihåg dina preferenser och inställningar</li>
              <li>Analysera hur besökare använder vår webbplats för att kunna förbättra den</li>
              <li>Säkerställa att webbplatsen fungerar korrekt</li>
              <li>Lagra ditt samtycke till användning av cookies</li>
            </ul>
          </div>

          {/* Types of Cookies */}
          <div className="mb-12">
            <h2 className="text-3xl font-playfair text-[#1a1a1a] mb-4">3. Typer av cookies vi använder</h2>

            <div className="space-y-8">
              {/* Essential Cookies */}
              <div>
                <h3 className="text-2xl font-semibold text-[#1a1a1a] mb-3">3.1 Nödvändiga cookies</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dessa cookies är nödvändiga för att webbplatsen ska fungera korrekt och kan inte stängas av i våra system.
                  De sätts vanligtvis endast som svar på åtgärder du utför som utgör en begäran om tjänster, såsom att
                  ställa in dina sekretessinställningar, logga in eller fylla i formulär.
                </p>
                <div className="bg-gray-50 p-4 rounded border border-gray-200">
                  <p className="text-sm text-gray-600"><strong>Samtycke krävs:</strong> Nej (tekniskt nödvändiga)</p>
                  <p className="text-sm text-gray-600 mt-1"><strong>Giltighetstid:</strong> Session eller upp till 1 år</p>
                </div>
              </div>

              {/* Functional Cookies */}
              <div>
                <h3 className="text-2xl font-semibold text-[#1a1a1a] mb-3">3.2 Funktionella cookies</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dessa cookies gör det möjligt för webbplatsen att tillhandahålla förbättrad funktionalitet och
                  personalisering. De kan sättas av oss eller av tredjepartsleverantörer vars tjänster vi har lagt
                  till på våra sidor.
                </p>
                <div className="bg-gray-50 p-4 rounded border border-gray-200">
                  <p className="text-sm text-gray-600"><strong>Exempel:</strong> Språkpreferenser, cookie-samtycke</p>
                  <p className="text-sm text-gray-600 mt-1"><strong>Samtycke krävs:</strong> Nej</p>
                  <p className="text-sm text-gray-600 mt-1"><strong>Giltighetstid:</strong> Upp till 1 år</p>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div>
                <h3 className="text-2xl font-semibold text-[#1a1a1a] mb-3">3.3 Analytiska cookies</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dessa cookies hjälper oss att förstå hur besökare interagerar med webbplatsen genom att samla in
                  och rapportera information anonymt. Vi använder Google Analytics för att analysera användningen av
                  vår webbplats.
                </p>
                <div className="bg-[#C4A470]/10 p-4 rounded border border-[#C4A470]/30">
                  <p className="text-sm text-gray-700"><strong>Tjänst:</strong> Google Analytics</p>
                  <p className="text-sm text-gray-700 mt-1"><strong>Samtycke krävs:</strong> Ja</p>
                  <p className="text-sm text-gray-700 mt-1"><strong>Giltighetstid:</strong> Upp till 2 år</p>
                  <p className="text-sm text-gray-700 mt-2"><strong>Information som samlas in:</strong> Sidvisningar, klick, tid på sidan, geografisk plats (land/stad), webbläsartyp, enhet</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cookie Table */}
          <div className="mb-12">
            <h2 className="text-3xl font-playfair text-[#1a1a1a] mb-4">4. Detaljerad cookie-tabell</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Här är en fullständig lista över de cookies vi använder på vår webbplats:
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead className="bg-[#0C122B] text-white">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold">Cookie-namn</th>
                    <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold">Typ</th>
                    <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold">Ändamål</th>
                    <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold">Giltighetstid</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-gray-700">
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-3 font-mono text-xs">adekvat-juridik-cookie-consent</td>
                    <td className="border border-gray-300 px-4 py-3">Nödvändig</td>
                    <td className="border border-gray-300 px-4 py-3">Lagrar ditt samtycke till cookie-användning</td>
                    <td className="border border-gray-300 px-4 py-3">365 dagar</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-mono text-xs">_ga</td>
                    <td className="border border-gray-300 px-4 py-3">Analytisk</td>
                    <td className="border border-gray-300 px-4 py-3">Google Analytics - Används för att skilja användare åt</td>
                    <td className="border border-gray-300 px-4 py-3">2 år</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-gray-300 px-4 py-3 font-mono text-xs">_ga_*</td>
                    <td className="border border-gray-300 px-4 py-3">Analytisk</td>
                    <td className="border border-gray-300 px-4 py-3">Google Analytics - Används för att bevara sessionstillstånd</td>
                    <td className="border border-gray-300 px-4 py-3">2 år</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-mono text-xs">_gid</td>
                    <td className="border border-gray-300 px-4 py-3">Analytisk</td>
                    <td className="border border-gray-300 px-4 py-3">Google Analytics - Används för att skilja användare åt</td>
                    <td className="border border-gray-300 px-4 py-3">24 timmar</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Third-party Cookies */}
          <div className="mb-12">
            <h2 className="text-3xl font-playfair text-[#1a1a1a] mb-4">5. Tredjepartscookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Vissa cookies sätts av tredjepartstjänster som visas på våra sidor:
            </p>

            <div className="bg-gray-50 p-6 rounded-sm border border-gray-200">
              <h4 className="text-lg font-semibold text-[#1a1a1a] mb-3">Google Analytics</h4>
              <p className="text-gray-700 mb-2">
                Vi använder Google Analytics för att analysera hur besökare använder vår webbplats. Google Analytics
                sätter cookies för att samla in information anonymt och rapportera webbplatstrender utan att identifiera
                enskilda besökare.
              </p>
              <p className="text-gray-700 mt-3">
                <strong>Läs mer:</strong>{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C4A470] hover:underline"
                >
                  Googles integritetspolicy
                </a>
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Opt-out:</strong>{' '}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C4A470] hover:underline"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>
              </p>
            </div>
          </div>

          {/* Managing Cookies */}
          <div className="mb-12">
            <h2 className="text-3xl font-playfair text-[#1a1a1a] mb-4">6. Hur du hanterar cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Du har flera alternativ för att hantera cookies:
            </p>

            <div className="space-y-6">
              {/* Cookie Banner */}
              <div>
                <h3 className="text-2xl font-semibold text-[#1a1a1a] mb-3">6.1 Via vår cookie-banner</h3>
                <p className="text-gray-700 leading-relaxed">
                  När du besöker vår webbplats för första gången visas en cookie-banner där du kan välja att
                  acceptera eller avvisa icke-nödvändiga cookies. Du kan när som helst ändra dina inställningar
                  genom att rensa dina cookies i webbläsaren och besöka webbplatsen igen.
                </p>
              </div>

              {/* Browser Settings */}
              <div>
                <h3 className="text-2xl font-semibold text-[#1a1a1a] mb-3">6.2 Via webbläsarinställningar</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  De flesta webbläsare låter dig kontrollera cookies genom inställningarna. Du kan:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Blockera alla cookies</li>
                  <li>Tillåta endast cookies från webbplatser du besöker</li>
                  <li>Radera cookies när du stänger webbläsaren</li>
                  <li>Få en varning innan en cookie lagras</li>
                </ul>

                <div className="mt-6 space-y-3">
                  <p className="text-gray-700 font-medium">Instruktioner för olika webbläsare:</p>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <strong>Google Chrome:</strong>{' '}
                      <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#C4A470] hover:underline">
                        support.google.com/chrome/answer/95647
                      </a>
                    </li>
                    <li>
                      <strong>Mozilla Firefox:</strong>{' '}
                      <a href="https://support.mozilla.org/sv/kb/cookies" target="_blank" rel="noopener noreferrer" className="text-[#C4A470] hover:underline">
                        support.mozilla.org/sv/kb/cookies
                      </a>
                    </li>
                    <li>
                      <strong>Safari:</strong>{' '}
                      <a href="https://support.apple.com/sv-se/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#C4A470] hover:underline">
                        support.apple.com/sv-se/guide/safari
                      </a>
                    </li>
                    <li>
                      <strong>Microsoft Edge:</strong>{' '}
                      <a href="https://support.microsoft.com/sv-se/windows/hantera-cookies-i-microsoft-edge-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="text-[#C4A470] hover:underline">
                        support.microsoft.com/sv-se/windows
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
                  <p className="text-sm text-gray-700">
                    <strong>Observera:</strong> Om du blockerar cookies kan vissa delar av webbplatsen sluta fungera korrekt.
                  </p>
                </div>
              </div>

              {/* Delete Cookies */}
              <div>
                <h3 className="text-2xl font-semibold text-[#1a1a1a] mb-3">6.3 Radera befintliga cookies</h3>
                <p className="text-gray-700 leading-relaxed">
                  Du kan när som helst radera cookies som redan har lagrats på din enhet genom webbläsarens inställningar.
                  Detta tar bort alla cookies från alla webbplatser du har besökt.
                </p>
              </div>
            </div>
          </div>

          {/* Do Not Track */}
          <div className="mb-12">
            <h2 className="text-3xl font-playfair text-[#1a1a1a] mb-4">7. Do Not Track (DNT)</h2>
            <p className="text-gray-700 leading-relaxed">
              Vissa webbläsare har en "Do Not Track"-funktion som skickar en signal till webbplatser som du inte vill
              bli spårad. Vi respekterar denna inställning och samlar inte in analytiska cookies om DNT är aktiverat.
            </p>
          </div>

          {/* Updates */}
          <div className="mb-12">
            <h2 className="text-3xl font-playfair text-[#1a1a1a] mb-4">8. Ändringar i cookiepolicyn</h2>
            <p className="text-gray-700 leading-relaxed">
              Vi kan komma att uppdatera denna cookiepolicy från tid till annan för att återspegla ändringar i vår
              användning av cookies eller av juridiska skäl. Vi rekommenderar att du regelbundet läser igenom denna
              policy för att hålla dig informerad om hur vi använder cookies.
            </p>
          </div>

          {/* More Information */}
          <div className="mb-12">
            <h2 className="text-3xl font-playfair text-[#1a1a1a] mb-4">9. Mer information om cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Om du vill lära dig mer om cookies och hur de fungerar, besök:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <a href="https://www.pts.se/sv/bransch/regler/lagar/lag-om-elektronisk-kommunikation/cookies/" target="_blank" rel="noopener noreferrer" className="text-[#C4A470] hover:underline">
                  PTS - Om cookies
                </a>
              </li>
              <li>
                <a href="https://www.imy.se/verksamhet/dataskydd/det-har-galler-enligt-gdpr/cookies/" target="_blank" rel="noopener noreferrer" className="text-[#C4A470] hover:underline">
                  Integritetsskyddsmyndigheten - Cookies
                </a>
              </li>
              <li>
                <a href="https://www.allaboutcookies.org/" target="_blank" rel="noopener noreferrer" className="text-[#C4A470] hover:underline">
                  All About Cookies (engelska)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="mb-12">
            <h2 className="text-3xl font-playfair text-[#1a1a1a] mb-4">10. Kontakta oss</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Om du har frågor om vår användning av cookies eller denna cookiepolicy, kontakta oss:
            </p>
            <div className="bg-[#0C122B] text-white p-8 rounded-sm">
              <p className="mb-2"><strong>Adekvat Juridik</strong></p>
              <p className="mb-2">E-post: info@adekvatjuridik.se</p>
              <p className="text-gray-400 text-sm mt-4">
                Läs även vår{' '}
                <Link href="/integritetspolicy" className="text-[#C4A470] hover:underline">
                  integritetspolicy
                </Link>{' '}
                för mer information om hur vi behandlar personuppgifter.
              </p>
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
