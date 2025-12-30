export interface Article {
  id: string;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  category: string;
  image?: string;
}

export const articles: Article[] = [
  {
    id: '1',
    slug: 'due-diligence-foretagskop',
    title: 'Due diligence – vad du måste granska innan du köper ett företag',
    date: '2025-12-18',
    category: 'Företagsöverlåtelser',
    excerpt: 'Att köpa ett företag är en av de största affärsbesluten du kan fatta. Due diligence är processen som hjälper dig upptäcka risker innan det är för sent.',
    content: `
<p>Att köpa ett företag är en av de största affärsbesluten du kan fatta. Oavsett om det handlar om ett mindre aktiebolag eller en etablerad verksamhet med anställda, finns det risker som inte syns i balansräkningen. Due diligence är processen som hjälper dig upptäcka dem innan det är för sent.</p>

<h2>Vad är due diligence?</h2>

<p>Due diligence betyder ungefär "skälig aktsamhet" och innebär en systematisk genomgång av företaget du vill köpa. Syftet är att verifiera den information säljaren har presenterat – och att identifiera risker som kan påverka priset eller villkoren.</p>

<p>En due diligence omfattar vanligtvis flera områden: finansiell, juridisk, skattemässig och ibland operationell granskning. Djupet beror på företagets storlek och komplexitet.</p>

<h2>Viktiga områden att granska</h2>

<p><strong>Finansiell due diligence</strong> handlar om att förstå företagets verkliga ekonomiska ställning. Stämmer redovisningen? Finns det skulder som inte syns direkt? Hur ser kassaflödet ut över tid?</p>

<p><strong>Juridisk due diligence</strong> granskar avtal med kunder, leverantörer och anställda. Finns det pågående tvister? Är viktiga avtal uppsägningsbara vid ägarbyte? Äger företaget verkligen sina immateriella tillgångar?</p>

<p><strong>Skattemässig due diligence</strong> undersöker om företaget har hanterat skatter korrekt. Dolda skatteskulder kan bli köparens problem efter tillträdet.</p>

<h2>Vanliga fallgropar</h2>

<p>Många köpare förlitar sig på säljarens uppgifter utan att verifiera dem. Andra underskattar vikten av att granska anställningsavtal och kundkontrakt – avtal som kan innehålla klausuler som förändrar förutsättningarna vid ett ägarbyte.</p>

<p>En annan vanlig miss är att inte avsätta tillräckligt med tid. Due diligence tar ofta längre tid än förväntat, särskilt om dokumentationen är bristfällig.</p>

<h2>Hur en juridisk rådgivare kan hjälpa</h2>

<p>En erfaren rådgivare vet var riskerna brukar gömma sig. De kan strukturera granskningen effektivt, ställa rätt frågor till säljaren och hjälpa dig förstå vad eventuella fynd betyder i praktiken.</p>

<p>Lika viktigt är att due diligence-resultaten sedan används i avtalsförhandlingen. Upptäckta risker kan leda till prisavdrag, garantier från säljaren eller villkor som skyddar dig efter tillträdet.</p>

<p>Att investera i en ordentlig due diligence kostar en bråkdel av vad en dålig affär kan kosta dig i efterhand.</p>
    `,
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80'
  },
  {
    id: '2',
    slug: 'inkramsforvav-eller-aktieforvav',
    title: 'Inkråmsförvärv eller aktieförvärv – vilket passar din situation?',
    date: '2025-12-05',
    category: 'Företagsöverlåtelser',
    excerpt: 'När du köper ett företag finns två grundläggande sätt att strukturera affären. Valet påverkar allt från skatt till ansvar för historiska förpliktelser.',
    content: `
<p>När du köper ett företag finns det två grundläggande sätt att strukturera affären: du kan köpa aktierna i bolaget, eller du kan köpa verksamheten – det som kallas inkråmet. Valet påverkar allt från skatt till ansvar för historiska förpliktelser.</p>

<h2>Vad är skillnaden?</h2>

<p>Vid ett <strong>aktieförvärv</strong> köper du bolaget som det är. Du blir ägare till ett befintligt aktiebolag med dess tillgångar, avtal, skulder och historia. Bolaget fortsätter som tidigare, men med dig som ny ägare.</p>

<p>Vid ett <strong>inkråmsförvärv</strong> köper du utvalda delar av verksamheten – exempelvis inventarier, kundavtal, varumärke och goodwill. Säljaren behåller själva bolaget, som sedan kan avvecklas eller användas till annat.</p>

<h2>Fördelar och nackdelar</h2>

<p><strong>Aktieförvärv</strong> är ofta enklare administrativt. Avtal med kunder och leverantörer följer med automatiskt, och verksamheten kan fortsätta utan avbrott. Nackdelen är att du också tar över bolagets historik – inklusive eventuella dolda skulder eller risker du inte kände till.</p>

<p><strong>Inkråmsförvärv</strong> ger dig större kontroll över vad du faktiskt köper. Du kan välja bort tillgångar eller avtal du inte vill ha, och du slipper ansvar för bolagets förflutna. Nackdelen är att avtal ofta måste omförhandlas eller överföras, vilket kan vara tidskrävande.</p>

<h2>Skattemässiga konsekvenser</h2>

<p>Här skiljer sig perspektiven åt mellan köpare och säljare.</p>

<p>För säljaren är aktieförsäljning ofta mer fördelaktigt skattemässigt, särskilt om säljaren är ett holdingbolag. Inkråmsförsäljning kan däremot leda till högre beskattning.</p>

<p>För köparen kan inkråmsförvärv ge möjlighet till avskrivningar på förvärvade tillgångar, vilket minskar skatten över tid.</p>

<p>Dessa motstridiga intressen gör att förhandlingen om transaktionsstruktur ofta blir central i affären.</p>

<h2>Vad avgör valet?</h2>

<p>Det finns inget svar som alltid är rätt. Valet beror på företagets situation, vilka risker som finns i bolaget, skattekonsekvenser för båda parter och hur viktigt det är att avtal följer med automatiskt.</p>

<h2>När du behöver rådgivning</h2>

<p>Att välja fel struktur kan bli dyrt – antingen genom oväntade skattekostnader eller genom att du tar över risker du inte förutsåg. En juridisk rådgivare hjälper dig förstå konsekvenserna av respektive alternativ och förhandla en struktur som passar just din situation.</p>
    `,
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80'
  },
  {
    id: '3',
    slug: 'tvist-forsta-stegen',
    title: 'En tvist har uppstått – de första stegen du bör ta',
    date: '2026-01-03',
    category: 'Tvister',
    excerpt: 'Du har hamnat i en konflikt och situationen känns kaotisk. Här är de första stegen du bör ta när en tvist uppstår.',
    content: `
<p>Du har hamnat i en konflikt. Kanske har en affärspartner brutit ett avtal, en kund vägrar betala, eller en leverantör inte levererat som utlovat. Situationen känns kaotisk och du vet inte riktigt var du ska börja. Här är vad du bör göra.</p>

<h2>Stanna upp och dokumentera</h2>

<p>Det första steget är att inte agera i affekt. Skriv inte ett argt mejl eller ring och hota med advokat. Ta istället ett steg tillbaka och börja dokumentera.</p>

<p>Samla allt som är relevant: avtal, mejlkonversationer, fakturor, anteckningar från möten och telefonsamtal. Ju mer dokumentation du har, desto starkare står du om tvisten eskalerar.</p>

<p>Skriv också ner din egen version av händelseförloppet medan det fortfarande är färskt i minnet.</p>

<h2>Förstå vad du vill uppnå</h2>

<p>Innan du går vidare behöver du vara tydlig med vad du faktiskt vill. Vill du ha betalt? Vill du att motparten fullföljer ett avtal? Vill du avsluta en affärsrelation med så lite skada som möjligt?</p>

<p>Olika mål kräver olika strategier. Om du vill bevara en affärsrelation är tonen i kommunikationen viktig. Om du bara vill ha ersättning för en skada kan du vara mer direkt.</p>

<h2>Kommunicera skriftligt</h2>

<p>När du väl tar kontakt med motparten, gör det skriftligt. Mejl eller brev skapar ett spår som kan bli viktigt senare. Var saklig och undvik anklagelser – beskriv vad som hänt och vad du förväntar dig.</p>

<p>Sätt gärna en rimlig tidsfrist för svar. Det visar att du tar situationen på allvar utan att vara aggressiv.</p>

<h2>Var uppmärksam på tidsfrister</h2>

<p>Vissa typer av krav har lagstadgade tidsfrister. Fakturor kan preskriberas, reklamationsfrister kan löpa ut och vissa avtal har specifika klausuler om hur tvister ska hanteras.</p>

<p>Väntar du för länge kan du förlora rätten att driva ditt krav – oavsett hur rätt du har i sak.</p>

<h2>När du bör ta in hjälp</h2>

<p>Om motparten inte svarar, om beloppen är betydande eller om situationen är juridiskt komplex är det dags att ta in en rådgivare. Det behöver inte betyda domstol – ofta handlar det om att få hjälp att förstå dina alternativ och kommunicera mer effektivt.</p>

<p>En tidig konsultation kan spara både tid och pengar genom att undvika misstag som är svåra att reparera senare.</p>
    `,
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80'
  },
  {
    id: '4',
    slug: 'forhandling-medling-domstol',
    title: 'Förhandling, medling eller domstol – vilket passar din tvist?',
    date: '2025-12-22',
    category: 'Tvister',
    excerpt: 'När en tvist inte går att lösa genom vanlig dialog finns flera vägar framåt. Här går vi igenom de vanligaste alternativen och när de passar.',
    content: `
<p>När en tvist inte går att lösa genom vanlig dialog finns det flera vägar framåt. Många tänker direkt på domstol, men det finns alternativ som ofta är både snabbare och billigare. Här går vi igenom de vanligaste alternativen.</p>

<h2>Förhandling mellan parterna</h2>

<p>Det första steget är nästan alltid att försöka förhandla direkt. Ibland räcker ett strukturerat möte eller en tydlig skriftlig kommunikation för att komma framåt. Fördelen är att ni behåller kontrollen över lösningen och kan hitta en kompromiss som fungerar för båda parter.</p>

<p>Nackdelen är att förhandling kräver att båda parter är villiga att delta konstruktivt. Om motparten vägrar svara eller är orimlig i sina krav kommer ni inte långt.</p>

<h2>Medling – en neutral part hjälper er framåt</h2>

<p>Vid medling anlitar parterna en oberoende medlare som hjälper till att strukturera samtalet och hitta en lösning. Medlaren fattar inga beslut utan fungerar som en facilitator.</p>

<p>Medling är frivilligt, konfidentiellt och betydligt billigare än domstol. Det passar särskilt bra när parterna vill bevara en relation – eller åtminstone avsluta den utan onödig konflikt.</p>

<h2>Skiljeförfarande – snabbare men bindande</h2>

<p>I vissa avtal finns skiljedomsklausuler som innebär att tvister ska avgöras av en skiljenämnd istället för allmän domstol. En skiljedom är snabbare, konfidentiell och bindande – den kan inte överklagas på samma sätt som en dom.</p>

<p>Nackdelen är att skiljeförfaranden kan vara kostsamma, särskilt vid mindre tvister. Men för kommersiella avtal där diskretion är viktigt kan det vara rätt väg.</p>

<h2>Allmän domstol – när inget annat fungerar</h2>

<p>Om förhandling och alternativa metoder inte leder någonstans återstår domstol. Det är den mest formella vägen och ofta den längsta. En tvist kan ta ett till två år att avgöra, ibland längre om domen överklagas.</p>

<p>Domstolsprocesser är offentliga, vilket betyder att affärshemligheter kan komma ut. De är också kostsamma – förlorar du målet kan du behöva betala motpartens rättegångskostnader.</p>

<h2>Hur väljer du rätt väg?</h2>

<p>Det beror på tvistens art, beloppen som står på spel, relationen till motparten och vad som står i eventuella avtal. Finns det en skiljeklausul är du ofta bunden av den. Är beloppen små kan medling vara mest ekonomiskt.</p>

<p>En juridisk rådgivare hjälper dig utvärdera alternativen och välja den strategi som ger bäst förutsättningar i just din situation.</p>
    `,
    image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800&q=80'
  }
];
