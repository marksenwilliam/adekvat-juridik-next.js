# SEO IMPLEMENTATION - EXECUTION PLAN
## Adekvat Juridik Website Optimization

---

## 📊 CURRENT STATE ANALYSIS

### ✅ What Works:
- All 8 main pages exist (homepage, om-oss, 4 service pages, prislista, kontakt)
- Internal navigation structure is solid
- Basic footer and header components exist
- Contact form functional with Resend API

### ❌ Critical Issues Found:
1. **No metadata exports** on any page (titles, descriptions, OG tags)
2. **Missing H1 tags** on 3 pages (om-oss, prislista, kontakt)
3. **11 background images** without alt text (accessibility issue)
4. **2 broken footer links** (Integritetspolicy & Cookies → both point to "#")
5. **No Privacy Policy page** (GDPR requirement)
6. **No Cookie Policy page** (GDPR requirement)
7. **No Cookie Consent Banner** (GDPR requirement)
8. **No canonical URLs** (duplicate content risk)
9. **No breadcrumbs** (UX and SEO benefit)

---

## 🎯 EXECUTION PLAN

### PHASE 1: GDPR COMPLIANCE (CRITICAL - LEGAL REQUIREMENT)
**Priority: HIGHEST**
**Time Estimate: 2-3 hours**

#### Task 1.1: Create Privacy Policy Page
**File:** `app/integritetspolicy/page.tsx`

**Implementation:**
- Comprehensive GDPR-compliant privacy policy in Swedish
- Sections:
  - Introduction
  - Data Controller Information (Adekvat Juridik contact details)
  - What personal data we collect
  - Purpose of data processing
  - Legal basis for processing (GDPR Article 6)
  - Data retention periods
  - Your rights under GDPR (access, rectification, erasure, portability, objection)
  - Cookies and tracking
  - Third-party services (Resend for email)
  - Contact information for data requests
  - Last updated date
- **Metadata:** Title, description, robots noindex (privacy pages shouldn't be heavily indexed)

#### Task 1.2: Create Cookie Policy Page
**File:** `app/cookies/page.tsx`

**Implementation:**
- Detailed cookie policy in Swedish
- Sections:
  - What are cookies
  - Types of cookies we use:
    - Essential cookies (session management)
    - Functional cookies (user preferences)
    - Analytics cookies (if using Google Analytics - with consent)
  - Cookie table with Name, Purpose, Duration, Type
  - How to manage/delete cookies
  - Browser-specific instructions
  - Link to privacy policy
  - Last updated date
- **Metadata:** Title, description, robots noindex

#### Task 1.3: Update Footer Links
**File:** `components/Footer.tsx`

**Changes:**
```typescript
<Link href="/integritetspolicy">Integritetspolicy</Link>
<Link href="/cookies">Cookies</Link>
```

Replace current `#` placeholders with actual routes.

#### Task 1.4: Implement Cookie Consent Banner
**File:** `components/CookieConsent.tsx`

**Solution Recommendation:**
Use **`react-cookie-consent`** package - battle-tested, GDPR-compliant, highly customizable.

**Installation:**
```bash
npm install react-cookie-consent
```

**Why this solution:**
- ✅ GDPR compliant by default
- ✅ Stores consent in localStorage/cookies
- ✅ Customizable design to match brand
- ✅ Callback functions for tracking script loading
- ✅ Decline/Accept options
- ✅ 80k+ weekly downloads, actively maintained
- ✅ TypeScript support

**Alternative Solutions Considered:**
1. **CookieYes** - External service, requires account, monthly cost
2. **OneTrust** - Enterprise solution, overkill for law firm site
3. **Custom implementation** - Time-consuming, risk of non-compliance
4. **cookie-consent-react** - Less maintained, fewer features

**Implementation Approach:**
```typescript
import CookieConsent from "react-cookie-consent";

<CookieConsent
  location="bottom"
  buttonText="Acceptera alla"
  declineButtonText="Avvisa"
  enableDeclineButton
  cookieName="adekvat-juridik-cookie-consent"
  style={{
    background: "#0C122B",
    borderTop: "1px solid rgba(196, 164, 112, 0.2)"
  }}
  buttonStyle={{
    background: "#C4A470",
    color: "#000",
    fontSize: "11px",
    textTransform: "uppercase",
    fontWeight: "600",
    padding: "12px 24px"
  }}
  declineButtonStyle={{
    background: "transparent",
    border: "1px solid rgba(255,255,255,0.2)",
    color: "#fff",
    fontSize: "11px",
    textTransform: "uppercase",
    fontWeight: "600",
    padding: "12px 24px"
  }}
  expires={365}
  onAccept={() => {
    // Load analytics scripts here
    console.log("Cookies accepted");
  }}
  onDecline={() => {
    // Don't load tracking scripts
    console.log("Cookies declined");
  }}
>
  <span style={{ fontSize: "13px", color: "#fff" }}>
    Vi använder cookies för att förbättra din upplevelse på vår webbplats.
    Genom att fortsätta använda webbplatsen samtycker du till vår användning av cookies.
    {" "}
    <Link href="/cookies" style={{ color: "#C4A470", textDecoration: "underline" }}>
      Läs mer om cookies
    </Link>
  </span>
</CookieConsent>
```

**Integration:** Add to `app/layout.tsx` before closing `</body>` tag.

**Features:**
- ✅ Appears on first visit
- ✅ Styled to match brand (gold #C4A470, dark blue #0C122B)
- ✅ Accept/Decline buttons
- ✅ Link to cookie policy
- ✅ Stores consent for 365 days
- ✅ Callbacks for loading scripts conditionally

---

### PHASE 2: PAGE METADATA (HIGH PRIORITY - SEO CRITICAL)
**Priority: HIGH**
**Time Estimate: 1-2 hours**

Add metadata export to each page with Swedish keywords and descriptions.

#### Task 2.1: Homepage Metadata
**File:** `app/page.tsx`

```typescript
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Juridisk Rådgivning i Sverige | Adekvat Juridik",
  description: "Erfaren juridisk rådgivning med över 40 års erfarenhet. Specialister inom tvister, avtal, företagsöverlåtelser och konsulttjänster. Kostnadsfri första konsultation.",
  keywords: ["juridisk rådgivning", "advokat Sverige", "jurist", "juridisk hjälp", "tvister", "avtal", "företagsöverlåtelser"],
  openGraph: {
    title: "Juridisk Rådgivning i Sverige | Adekvat Juridik",
    description: "Erfaren juridisk rådgivning med över 40 års erfarenhet i Sverige.",
    url: "https://adekvatjuridik.se",
    type: "website",
    locale: "sv_SE",
  },
  alternates: {
    canonical: "https://adekvatjuridik.se",
  },
};
```

**Keywords targeted:** juridisk rådgivning, advokat Sverige, jurist, juridisk hjälp

#### Task 2.2: Om Oss Metadata
**File:** `app/om-oss/page.tsx`

```typescript
export const metadata: Metadata = {
  title: "Om Oss | Adekvat Juridik - 40 Års Juridisk Erfarenhet",
  description: "Lär känna Adekvat Juridik. Sedan 1984 har vi hjälpt privatpersoner och företag med juridisk rådgivning, tvister och avtal. Erfarna jurister som sätter dina intressen först.",
  keywords: ["om oss", "juridisk byrå", "erfarna jurister", "advokatbyrå Sverige", "juridisk expertis"],
  openGraph: {
    title: "Om Oss | Adekvat Juridik",
    description: "40 års juridisk erfarenhet. Personlig, engagerad och erfaren juridisk rådgivning.",
    url: "https://adekvatjuridik.se/om-oss",
    type: "website",
  },
  alternates: {
    canonical: "https://adekvatjuridik.se/om-oss",
  },
};
```

**Keywords targeted:** juridisk byrå, erfarna jurister, advokatbyrå Sverige

#### Task 2.3: Juridisk Rådgivning Metadata
**File:** `app/juridisk-radgivning/page.tsx`

```typescript
export const metadata: Metadata = {
  title: "Juridisk Rådgivning för Privatpersoner & Företag | Adekvat Juridik",
  description: "Professionell juridisk rådgivning inom avtalsrätt, familjerätt, arvsrätt och fastighetsaffärer. Vi hjälper dig att förstå dina rättigheter och skyldigheter. Kostnadsfri konsultation.",
  keywords: ["juridisk rådgivning", "avtalsgranskning", "familjerätt", "arvsrätt", "fastighetsaffärer", "juridisk hjälp privatperson", "juridisk konsultation"],
  openGraph: {
    title: "Juridisk Rådgivning | Adekvat Juridik",
    description: "Expert juridisk rådgivning inom avtalsrätt, familjerätt, arvsrätt och mer.",
    url: "https://adekvatjuridik.se/juridisk-radgivning",
    type: "website",
  },
  alternates: {
    canonical: "https://adekvatjuridik.se/juridisk-radgivning",
  },
};
```

**Keywords targeted:** juridisk rådgivning, avtalsgranskning, familjerätt, arvsrätt

#### Task 2.4: Tvister Metadata
**File:** `app/tvister/page.tsx`

```typescript
export const metadata: Metadata = {
  title: "Tvistlösning & Processföring | Erfarna Processjurister | Adekvat Juridik",
  description: "Experthjälp vid tvister och rättsprocesser. Vi representerar dig i domstol, medling och förhandling. Civilrättsliga och kommersiella tvister. Kontakta oss för rådgivning.",
  keywords: ["tvistlösning", "processföring", "civilrättslig tvist", "kommersiell tvist", "domstolsprocess", "medling", "rättegång", "processjurist"],
  openGraph: {
    title: "Tvistlösning & Processföring | Adekvat Juridik",
    description: "Erfarna processjurister som driver ditt ärende med precision och engagemang.",
    url: "https://adekvatjuridik.se/tvister",
    type: "website",
  },
  alternates: {
    canonical: "https://adekvatjuridik.se/tvister",
  },
};
```

**Keywords targeted:** tvistlösning, processföring, civilrättslig tvist, processjurist

#### Task 2.5: Konsulttjänster Metadata
**File:** `app/konsulttjanster/page.tsx`

```typescript
export const metadata: Metadata = {
  title: "Juridisk Konsult för Företag | Löpande Juridiskt Stöd | Adekvat Juridik",
  description: "Löpande juridiskt stöd för företag och organisationer. Företagsjuridik, avtal, arbetsrätt och compliance. Flexibla konsultavtal anpassade efter era behov.",
  keywords: ["juridisk konsult", "företagsjuridik", "löpande juridiskt stöd", "juridisk rådgivare företag", "företagsavtal", "arbetsrätt", "compliance"],
  openGraph: {
    title: "Juridisk Konsult för Företag | Adekvat Juridik",
    description: "Löpande juridiskt stöd för företag. Förebygg problem och få snabba svar på juridiska frågor.",
    url: "https://adekvatjuridik.se/konsulttjanster",
    type: "website",
  },
  alternates: {
    canonical: "https://adekvatjuridik.se/konsulttjanster",
  },
};
```

**Keywords targeted:** juridisk konsult, företagsjuridik, löpande juridiskt stöd

#### Task 2.6: Företagsöverlåtelser Metadata
**File:** `app/foretagsoverlatelser/page.tsx`

```typescript
export const metadata: Metadata = {
  title: "Företagsöverlåtelser | Köp & Försäljning av Företag | Adekvat Juridik",
  description: "Juridisk expertis vid köp och försäljning av företag. Due diligence, avtalsförhandling, värdering och transaktionsstöd. Skydda dina intressen i affären.",
  keywords: ["företagsöverlåtelse", "köp av företag", "försäljning av företag", "due diligence", "företagstransaktion", "företagsaffärer", "M&A juridik"],
  openGraph: {
    title: "Företagsöverlåtelser | Adekvat Juridik",
    description: "Expert rådgivning vid köp och försäljning av företag. Due diligence och förhandling.",
    url: "https://adekvatjuridik.se/foretagsoverlatelser",
    type: "website",
  },
  alternates: {
    canonical: "https://adekvatjuridik.se/foretagsoverlatelser",
  },
};
```

**Keywords targeted:** företagsöverlåtelse, köp av företag, due diligence, M&A

#### Task 2.7: Prislista Metadata
**File:** `app/prislista/page.tsx`

```typescript
export const metadata: Metadata = {
  title: "Prislista | Transparenta Priser för Juridiska Tjänster | Adekvat Juridik",
  description: "Se våra priser för juridiska tjänster. Timarvode, fasta priser och rättsskyddsinformation. Kostnadsfri första konsultation. Transparenta och tydliga priser.",
  keywords: ["advokat priser", "juridisk rådgivning pris", "timarvode jurist", "vad kostar en advokat", "rättsskydd", "juridiska tjänster pris"],
  openGraph: {
    title: "Prislista | Adekvat Juridik",
    description: "Transparenta priser för juridiska tjänster. Kostnadsfri första konsultation.",
    url: "https://adekvatjuridik.se/prislista",
    type: "website",
  },
  alternates: {
    canonical: "https://adekvatjuridik.se/prislista",
  },
};
```

**Keywords targeted:** advokat priser, vad kostar en advokat, timarvode jurist

#### Task 2.8: Kontakt Metadata
**File:** `app/kontakt/page.tsx`

```typescript
export const metadata: Metadata = {
  title: "Kontakta Oss | Boka Kostnadsfri Konsultation | Adekvat Juridik",
  description: "Kontakta Adekvat Juridik för juridisk rådgivning. Vi erbjuder kostnadsfri första konsultation. Ring, maila eller fyll i formuläret så kontaktar vi dig.",
  keywords: ["kontakt", "boka konsultation", "juridisk rådgivning kontakt", "advokat kontakt", "kostnadsfri konsultation"],
  openGraph: {
    title: "Kontakta Oss | Adekvat Juridik",
    description: "Boka din kostnadsfria konsultation idag. Vi hjälper dig med juridiska frågor.",
    url: "https://adekvatjuridik.se/kontakt",
    type: "website",
  },
  alternates: {
    canonical: "https://adekvatjuridik.se/kontakt",
  },
};
```

**Keywords targeted:** kontakt, boka konsultation, kostnadsfri konsultation

---

### PHASE 3: HEADING HIERARCHY FIXES (MEDIUM PRIORITY - SEO & ACCESSIBILITY)
**Priority: MEDIUM**
**Time Estimate: 1 hour**

Fix H1-H6 structure on all pages to follow proper semantic hierarchy.

#### Task 3.1: Fix om-oss/page.tsx
**Current Issue:** No H1, starts with H2

**Solution:**
```typescript
// Change line 44 from:
<h2 className="...">Adekvat Juridik</h2>

// To:
<h1 className="...">Adekvat Juridik</h1>
```

#### Task 3.2: Fix prislista/page.tsx
**Current Issue:** No H1, starts with H2

**Solution:**
```typescript
// Change line 136 from:
<h2 className="...">Prislista</h2>

// To:
<h1 className="...">Prislista</h1>

// AND change line 116 from:
<h2 className="...">Transparenta priser</h2>

// To:
<h2 className="...">Transparenta priser</h2> // Keep as H2 since new H1 exists
```

#### Task 3.3: Fix kontakt/page.tsx
**Current Issue:** No H1, starts with H2

**Solution:**
```typescript
// Change line 53 from:
<h2 className="...">Kontakta oss</h2>

// To:
<h1 className="...">Kontakta oss</h1>
```

#### Task 3.4: Verify All Pages Follow Hierarchy
**Rule:**
- ONE H1 per page (main page title)
- H2 for major sections
- H3 for subsections
- H4-H6 for nested content
- Never skip levels (e.g., H1 → H3)

**Pages to verify:**
- ✅ Homepage (already has H1)
- ⚠️ om-oss (fix H1)
- ✅ juridisk-radgivning (already has H1)
- ✅ tvister (already has H1)
- ✅ konsulttjanster (already has H1)
- ✅ foretagsoverlatelser (already has H1)
- ⚠️ prislista (fix H1)
- ⚠️ kontakt (fix H1)

---

### PHASE 4: IMAGE ALT TEXT (HIGH PRIORITY - ACCESSIBILITY & SEO)
**Priority: HIGH**
**Time Estimate: 1 hour**

#### Problem:
11 background images (CSS `background-image` property) have no alt text equivalent.

#### Solution Approach:
Since these are decorative CSS backgrounds, we have three options:

**Option A: Convert to `<img>` or Next.js `<Image>` component**
- Best for SEO and accessibility
- Allows descriptive alt text
- Can use Next.js image optimization

**Option B: Add ARIA labels to parent containers**
- Keeps CSS backgrounds
- Adds accessibility via `aria-label`
- Not as SEO-friendly as Option A

**Option C: Add visually hidden text**
- Keeps CSS backgrounds
- Adds screen-reader-only text
- SEO benefit unclear

**Recommended: Option A** - Convert critical backgrounds to `<Image>` component.

#### Task 4.1: Homepage - Hero Background
**File:** `app/page.tsx` (line 10-14)

**Current:**
```typescript
<div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" style={{
  backgroundImage: "url('https://...')",
}}>
```

**Change to:**
```typescript
<div className="fixed top-0 w-full h-screen -z-10 overflow-hidden">
  <Image
    src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/abbe90fd-9c3a-4dae-acd5-6a3d77c640af_3840w.jpg"
    alt="Professionell affärsman i elegant kostym - symbol för juridisk expertis och professionalitet"
    fill
    className="object-cover"
    priority
    quality={90}
  />
</div>
```

**Alt text reasoning:** Describes what blind users and search engines need to know - professional image conveying legal expertise.

#### Task 4.2: Service Pages - Background Images

**juridisk-radgivning/page.tsx (3 backgrounds)**

**Background 1 (line 50):**
```typescript
// Current: CSS background
// Change to:
<Image
  src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1600&q=80"
  alt="Närbildsfoto av lagböcker och juridiska dokument - representation av omfattande juridisk forskning och expertis"
  fill
  className="object-cover opacity-30"
  quality={85}
/>
```

**Background 2 (line 116):**
```typescript
<Image
  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600&q=80"
  alt="Moderna kontorslokaler med professionell arbetsmiljö - symbol för företagsjuridiska tjänster"
  fill
  className="object-cover opacity-20"
  quality={85}
/>
```

**Background 3 (line 123):**
```typescript
<Image
  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80"
  alt="Detalj av juridiska handlingar och avtal - illustration av noggrann avtalsrådgivning"
  fill
  className="object-cover opacity-20"
  quality={85}
/>
```

**Apply same pattern to:**
- `app/tvister/page.tsx` (3 backgrounds) - Use alt text describing dispute resolution, court proceedings, negotiation
- `app/konsulttjanster/page.tsx` (3 backgrounds) - Use alt text describing business consulting, corporate settings
- `app/foretagsoverlatelser/page.tsx` (3 backgrounds) - Use alt text describing business transactions, mergers, acquisitions

**General Alt Text Formula:**
"[What is shown in image] - [How it relates to the legal service]"

Examples:
- "Handskak i modern kontorsmiljö - symbol för framgångsrika företagsförhandlingar"
- "Domare klubba på skrivbord - representation av domstolsprocesser och tvistlösning"
- "Affärsmöte med dokumentgranskning - illustration av löpande juridiskt stöd för företag"

#### Task 4.3: Verify All Images Have Alt Text

**Checklist:**
- [ ] Homepage hero background
- [ ] Homepage section image (already has alt)
- [ ] om-oss hero image (already has alt)
- [ ] om-oss watermark logo (already has alt)
- [ ] juridisk-radgivning backgrounds (3)
- [ ] tvister backgrounds (3)
- [ ] konsulttjanster backgrounds (3)
- [ ] foretagsoverlatelser backgrounds (3)
- [ ] kontakt monogram (already has alt)
- [ ] Footer monogram (already has alt)

**Total:** 11 images need alt text addition.

---

### PHASE 5: BREADCRUMBS IMPLEMENTATION (OPTIONAL - UX & SEO BENEFIT)
**Priority: LOW-MEDIUM**
**Time Estimate: 1-2 hours**

#### What are Breadcrumbs?
Navigation trail showing user's location in site hierarchy.

**Example:**
```
Hem > Rättsområden > Juridisk Rådgivning
```

**Benefits:**
- ✅ Improved UX - users know where they are
- ✅ SEO benefit - internal linking structure
- ✅ Schema.org BreadcrumbList markup - rich snippets in Google
- ✅ Reduces bounce rate

#### Implementation Plan:

**Step 1: Create Breadcrumbs Component**
**File:** `components/Breadcrumbs.tsx`

```typescript
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  // Generate JSON-LD schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `https://adekvatjuridik.se${item.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex items-center space-x-2 text-sm text-gray-400">
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 && (
                <svg className="w-4 h-4 mx-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              )}
              {index === items.length - 1 ? (
                <span className="text-[#C4A470] font-medium">{item.label}</span>
              ) : (
                <Link href={item.href} className="hover:text-white transition-colors">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
```

**Step 2: Add to Service Pages**

**Example for juridisk-radgivning/page.tsx:**
```typescript
import Breadcrumbs from '@/components/Breadcrumbs';

export default function JuridiskRadgivningPage() {
  const breadcrumbs = [
    { label: 'Hem', href: '/' },
    { label: 'Rättsområden', href: '/#rattsomraden' },
    { label: 'Juridisk Rådgivning', href: '/juridisk-radgivning' },
  ];

  return (
    <>
      <section className="...">
        <div className="max-w-7xl mx-auto px-6 pt-32">
          <Breadcrumbs items={breadcrumbs} />
          {/* Rest of page content */}
        </div>
      </section>
    </>
  );
}
```

**Add breadcrumbs to:**
- juridisk-radgivning
- tvister
- konsulttjanster
- foretagsoverlatelser
- prislista
- kontakt
- om-oss

---

### PHASE 6: CANONICAL URLS (ALREADY DONE IN METADATA)
**Priority: COMPLETED**
**Status: ✅ Already implemented in Phase 2**

Canonical URLs prevent duplicate content issues by telling search engines which version of a URL is the "official" one.

**Example:**
```typescript
export const metadata: Metadata = {
  alternates: {
    canonical: "https://adekvatjuridik.se/juridisk-radgivning",
  },
};
```

This tells Google:
- Ignore `?utm_source=...` parameters
- Ignore `www.` vs non-www variations
- This is the primary URL to index

**Implementation:** Already included in all metadata exports in Phase 2.

---

### PHASE 7: REDIRECT NON-EXISTENT PAGES TO HOMEPAGE
**Priority: LOW**
**Time Estimate: 30 minutes**

**Current Status:** Next.js already handles non-existent routes with default 404.

**Enhancement Options:**

**Option A: Custom 404 Page (Recommended)**
**File:** `app/not-found.tsx`

```typescript
import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0C122B] flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <Image
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/993d51c5-c52c-48fe-9e05-82911667c3ff_800w.png"
            alt="Adekvat Juridik Logo"
            width={120}
            height={120}
            className="mx-auto opacity-50"
          />
        </div>

        <h1 className="text-6xl font-playfair text-white mb-4">404</h1>
        <h2 className="text-2xl text-gray-300 mb-6">Sidan kunde inte hittas</h2>

        <p className="text-gray-400 mb-8">
          Vi kunde tyvärr inte hitta sidan du söker. Den kan ha flyttats eller tagits bort.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#C4A470] text-black text-sm uppercase font-semibold tracking-widest hover:bg-[#B39460] transition-colors"
          >
            Tillbaka till startsidan
          </Link>

          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center px-6 py-3 border border-white/20 text-white text-sm uppercase font-semibold tracking-widest hover:bg-white/5 transition-colors"
          >
            Kontakta oss
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-sm text-gray-500 mb-4">Populära sidor:</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/juridisk-radgivning" className="text-sm text-[#C4A470] hover:underline">
              Juridisk Rådgivning
            </Link>
            <Link href="/tvister" className="text-sm text-[#C4A470] hover:underline">
              Tvister
            </Link>
            <Link href="/konsulttjanster" className="text-sm text-[#C4A470] hover:underline">
              Konsulttjänster
            </Link>
            <Link href="/foretagsoverlatelser" className="text-sm text-[#C4A470] hover:underline">
              Företagsöverlåtelser
            </Link>
            <Link href="/prislista" className="text-sm text-[#C4A470] hover:underline">
              Prislista
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
```

**Option B: Automatic Redirect (Not Recommended for SEO)**
Could use `next.config.js` redirects, but custom 404 is better for UX and doesn't lose SEO signals.

**Recommendation: Use Option A** - Custom 404 page with links to popular pages.

---

## 📋 IMPLEMENTATION CHECKLIST

### Phase 1: GDPR Compliance
- [ ] Create `app/integritetspolicy/page.tsx` (Privacy Policy)
- [ ] Create `app/cookies/page.tsx` (Cookie Policy)
- [ ] Update Footer.tsx links (remove `#` placeholders)
- [ ] Install `react-cookie-consent` package
- [ ] Create `components/CookieConsent.tsx`
- [ ] Add CookieConsent to `app/layout.tsx`
- [ ] Test cookie banner functionality
- [ ] Test accept/decline flows

### Phase 2: Page Metadata
- [ ] Add metadata to `app/page.tsx`
- [ ] Add metadata to `app/om-oss/page.tsx`
- [ ] Add metadata to `app/juridisk-radgivning/page.tsx`
- [ ] Add metadata to `app/tvister/page.tsx`
- [ ] Add metadata to `app/konsulttjanster/page.tsx`
- [ ] Add metadata to `app/foretagsoverlatelser/page.tsx`
- [ ] Add metadata to `app/prislista/page.tsx`
- [ ] Add metadata to `app/kontakt/page.tsx`
- [ ] Verify all canonical URLs
- [ ] Test Open Graph tags with validator

### Phase 3: Heading Hierarchy
- [ ] Fix `app/om-oss/page.tsx` (add H1)
- [ ] Fix `app/prislista/page.tsx` (add H1)
- [ ] Fix `app/kontakt/page.tsx` (add H1)
- [ ] Verify all pages have ONE H1
- [ ] Verify heading order (no skipped levels)

### Phase 4: Image Alt Text
- [ ] Homepage hero background → Image component
- [ ] juridisk-radgivning 3 backgrounds → Image components
- [ ] tvister 3 backgrounds → Image components
- [ ] konsulttjanster 3 backgrounds → Image components
- [ ] foretagsoverlatelser 3 backgrounds → Image components
- [ ] Write descriptive alt text for each image
- [ ] Verify all images have alt text

### Phase 5: Breadcrumbs (Optional)
- [ ] Create `components/Breadcrumbs.tsx`
- [ ] Add breadcrumbs to service pages
- [ ] Add JSON-LD schema for breadcrumbs
- [ ] Style breadcrumbs to match brand

### Phase 6: Canonical URLs
- [x] Already implemented in metadata (Phase 2)

### Phase 7: 404 Page
- [ ] Create `app/not-found.tsx`
- [ ] Add links to popular pages
- [ ] Style to match brand
- [ ] Test 404 page

---

## 🎯 PRIORITY EXECUTION ORDER

**Week 1 - CRITICAL (MUST DO IMMEDIATELY):**
1. ✅ Phase 1: GDPR Compliance (legal requirement)
2. ✅ Phase 2: Page Metadata (SEO critical)
3. ✅ Phase 3: Heading Hierarchy (quick win)

**Week 2 - HIGH PRIORITY:**
4. ✅ Phase 4: Image Alt Text (accessibility & SEO)
5. ✅ Phase 7: Custom 404 Page

**Week 3 - NICE TO HAVE:**
6. ⚪ Phase 5: Breadcrumbs (optional UX enhancement)

---

## 🛠️ TECHNICAL DETAILS

### Email Update
**File:** `app/layout.tsx` (line 79)
**Change:**
```typescript
email: 'info@adekvatjuridik.se', // Already correct
```

### Dependencies to Install
```bash
npm install react-cookie-consent
```

### Files to Create (9 new files)
1. `app/integritetspolicy/page.tsx`
2. `app/cookies/page.tsx`
3. `components/CookieConsent.tsx`
4. `components/Breadcrumbs.tsx` (optional)
5. `app/not-found.tsx`

### Files to Modify (12 existing files)
1. `app/page.tsx` - metadata, hero image alt
2. `app/om-oss/page.tsx` - metadata, H1 fix
3. `app/juridisk-radgivning/page.tsx` - metadata, image alts
4. `app/tvister/page.tsx` - metadata, image alts
5. `app/konsulttjanster/page.tsx` - metadata, image alts
6. `app/foretagsoverlatelser/page.tsx` - metadata, image alts
7. `app/prislista/page.tsx` - metadata, H1 fix
8. `app/kontakt/page.tsx` - metadata, H1 fix
9. `components/Footer.tsx` - update links
10. `app/layout.tsx` - add CookieConsent component

---

## 📊 EXPECTED RESULTS

### SEO Impact:
- ✅ All pages indexed with proper titles/descriptions
- ✅ Rich snippets in Google (breadcrumbs, business info)
- ✅ Improved click-through rates from search results
- ✅ Better keyword targeting per page
- ✅ No duplicate content issues (canonical URLs)

### Accessibility Impact:
- ✅ Screen readers can navigate site properly
- ✅ All images described for visually impaired
- ✅ Proper document outline (H1-H6)
- ✅ WCAG 2.1 AA compliance improved

### Legal Compliance:
- ✅ GDPR compliant (privacy policy, cookie consent)
- ✅ Transparent data processing disclosure
- ✅ User rights clearly communicated
- ✅ Cookie usage documented

### User Experience:
- ✅ Clear navigation breadcrumbs
- ✅ Helpful 404 page
- ✅ Transparent cookie usage
- ✅ Better page titles (browser tabs)

---

## 🚀 LAUNCH CHECKLIST

Before going live:
- [ ] Test all pages load correctly
- [ ] Test cookie banner appears on first visit
- [ ] Test accept/decline cookie flows
- [ ] Verify all links work (no 404s)
- [ ] Test contact form still works
- [ ] Validate metadata with tools:
  - Google Rich Results Test
  - Facebook Sharing Debugger
  - Twitter Card Validator
- [ ] Test mobile responsiveness
- [ ] Run Lighthouse audit (aim for 90+ SEO score)
- [ ] Submit sitemap to Google Search Console
- [ ] Verify structured data with Google's tool

---

## 📞 QUESTIONS & CLARIFICATIONS

**Before implementation, please confirm:**

1. **Cookie Consent Design**: Are you happy with the suggested styling (dark blue background #0C122B, gold buttons #C4A470)?

2. **Privacy Policy Content**: Should I include specific details about:
   - Physical office address?
   - Data Protection Officer contact?
   - Specific third-party services used (beyond Resend)?

3. **Breadcrumbs**: Do you want breadcrumbs implemented or skip this?

4. **Analytics**: Do you plan to use Google Analytics or other tracking? (This affects cookie policy)

5. **Social Media**: Do you have social media profiles to add to structured data?

6. **Business Hours**: Confirm opening hours (currently set to Mon-Fri 09:00-17:00 in structured data)

---

## 💰 ESTIMATED TIME INVESTMENT

- **Phase 1 (GDPR):** 2-3 hours
- **Phase 2 (Metadata):** 1-2 hours
- **Phase 3 (Headings):** 1 hour
- **Phase 4 (Alt Text):** 1-2 hours
- **Phase 5 (Breadcrumbs):** 1-2 hours (optional)
- **Phase 7 (404 Page):** 30 minutes
- **Testing & QA:** 1 hour

**Total:** 7-12 hours of development work

---

## ✅ READY TO PROCEED?

This execution plan provides:
- ✅ Complete analysis of current state
- ✅ Detailed implementation steps for each phase
- ✅ Code examples for all changes
- ✅ Prioritization (critical → optional)
- ✅ Technical specifications
- ✅ Testing checklist
- ✅ Expected results

Please review and approve, or let me know if you want any changes to the approach!
