# SEO IMPLEMENTATION GUIDE - ADEKVAT JURIDIK

## ✅ COMPLETED

1. **Sitemap** - Created `app/sitemap.ts` with all pages
2. **robots.txt** - Created `app/robots.ts`
3. **Meta Tags** - Updated `app/layout.tsx` with comprehensive metadata
4. **Structured Data** - Added LocalBusiness/LegalService JSON-LD schema
5. **Open Graph & Twitter Cards** - Added social media meta tags

## 🔨 REMAINING CRITICAL TASKS

### 1. Cookie Consent Banner (GDPR Compliance)
**Priority: CRITICAL**

Create `components/CookieConsent.tsx`:
- Must appear on first visit
- Store consent in localStorage
- Block tracking scripts until consent given
- Links to cookie policy page

**Libraries to use:**
```bash
npm install react-cookie-consent
```

### 2. Create Missing Pages

#### A. Prislista Page (`app/prislista/page.tsx`)
- Currently linked but doesn't exist
- Should list all services with pricing
- Add metadata for SEO

#### B. Privacy Policy (`app/integritetspolicy/page.tsx`)
- GDPR requirement
- Data collection disclosure
- Contact information for data requests
- Rights under GDPR

#### C. Cookie Policy (`app/cookies/page.tsx`)
- What cookies are used
- Purpose of each cookie
- How to opt-out
- Third-party cookies disclosure

#### D. 404 Page (`app/not-found.tsx`)
- Custom error page
- Links to main sections
- Search functionality

### 3. Fix All Image Alt Text
**Impact: Accessibility & SEO**

Current missing alt texts:
- Homepage hero image
- Service page images
- Footer logo

### 4. Add Page-Specific Metadata

Each service page needs custom metadata in their `page.tsx`:

**Example for `/juridisk-radgivning/page.tsx`:**
```typescript
export const metadata: Metadata = {
  title: "Juridisk Rådgivning | Adekvat Juridik",
  description: "Erfaren juridisk rådgivning för privatpersoner och företag. Vi hjälper med avtal, familjerätt, arvsrätt, fastighetsaffärer och mer. Boka kostnadsfri konsultation.",
  keywords: ["juridisk rådgivning", "juridisk hjälp", "avtalsgranskning", "familjerätt", "arvsrätt"],
  openGraph: {
    title: "Juridisk Rådgivning | Adekvat Juridik",
    description: "Erfaren juridisk rådgivning för privatpersoner och företag.",
    url: 'https://adekvatjuridik.se/juridisk-radgivning',
  },
};
```

Apply similar pattern to:
- `/tvister/page.tsx`
- `/konsulttjanster/page.tsx`
- `/foretagsoverlatelser/page.tsx`
- `/kontakt/page.tsx`

### 5. Add Breadcrumbs
**Impact: UX & SEO**

Create `components/Breadcrumbs.tsx` and add to all service pages.

### 6. Optimize Heading Structure

**Current Issues:**
- Some pages have multiple H1 tags
- Inconsistent hierarchy

**Fix:**
- ONE H1 per page (main title)
- Use H2 for major sections
- H3 for subsections
- Never skip levels (H1 → H3)

### 7. Internal Linking Strategy

**Add contextual links between pages:**
- From homepage to service pages ✅ (already done)
- From service pages to other related services
- From service pages back to homepage
- Footer links to all main pages ✅ (already done)

### 8. Performance Optimization

**Images:**
- Use Next.js Image component everywhere (some already done)
- Add `priority` to hero images
- Implement lazy loading for below-fold images
- Use WebP format

**Loading:**
```typescript
<Image
  src="..."
  alt="..."
  priority // For above-fold images
  loading="lazy" // For below-fold images
/>
```

### 9. Add Canonical URLs

In each page's metadata:
```typescript
export const metadata: Metadata = {
  alternates: {
    canonical: 'https://adekvatjuridik.se/juridisk-radgivning',
  },
};
```

### 10. Mobile Optimization

- Test responsive design on all devices
- Ensure tap targets are 44x44px minimum
- Check mobile page speed with Google PageSpeed Insights

## 📊 SEO CHECKLIST

### Technical SEO
- [x] Sitemap.xml generated
- [x] robots.txt configured
- [x] Meta titles on all pages
- [x] Meta descriptions on all pages
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] Structured Data (JSON-LD)
- [ ] Canonical URLs
- [ ] SSL certificate (HTTPS)
- [ ] Mobile responsive
- [ ] Page speed optimized
- [ ] XML sitemap submitted to Google Search Console
- [ ] Google Search Console verified

### On-Page SEO
- [ ] Unique H1 on every page
- [ ] Proper heading hierarchy (H1-H6)
- [ ] Alt text on all images
- [ ] Internal linking structure
- [ ] Keyword optimization
- [ ] Content quality and length
- [ ] Breadcrumb navigation

### Local SEO
- [x] LocalBusiness schema
- [ ] Google My Business listing
- [ ] NAP consistency (Name, Address, Phone)
- [ ] Local keywords in content
- [ ] City/region targeting

### UX & Engagement
- [ ] Cookie consent banner
- [ ] Privacy policy page
- [ ] Cookie policy page
- [ ] 404 error page
- [ ] Contact form working
- [ ] Fast page load times
- [ ] Mobile-friendly design

### Content SEO
- [ ] Keyword research for each page
- [ ] Long-form content on service pages
- [ ] FAQ sections
- [ ] Blog/articles (future)
- [ ] Case studies (future)

## 🎯 KEYWORD STRATEGY

### Primary Keywords (Homepage)
- juridisk rådgivning Sverige
- advokat Sverige
- jurist Sverige
- juridisk hjälp

### Service-Specific Keywords

**Juridisk Rådgivning:**
- juridisk rådgivning privatperson
- avtalsgranskning
- familjerätt
- arvsrätt Sverige

**Tvister:**
- tvistlösning
- processr adelträtt
- civilrättsliga tvister
- kommersiella tvister

**Konsulttjänster:**
- juridisk konsult företag
- företagsjuridik
- löpande juridisk rådgivning

**Företagsöverlåtelser:**
- företagsöverlåtelse juridik
- köp och försäljning företag
- företagsaffärer advokat

### Long-Tail Keywords
- "advokat för fastighetsköp"
- "juridisk hjälp med arv"
- "vad kostar en advokat i Sverige"
- "gratis juridisk konsultation"

## 📞 GOOGLE SEARCH CONSOLE SETUP

1. Verify ownership:
   - Add verification meta tag to `layout.tsx` (placeholder already added)
   - Or upload HTML file to `/public`

2. Submit sitemap:
   - URL: `https://adekvatjuridik.se/sitemap.xml`

3. Monitor:
   - Index coverage
   - Search performance
   - Mobile usability
   - Core Web Vitals

## 🍪 COOKIE COMPLIANCE

### Required Cookies
- **Essential:** Session, CSRF protection
- **Functional:** Language preference
- **Analytics:** Google Analytics (requires consent)
- **Marketing:** (if applicable)

### Implementation
1. Cookie banner on first visit
2. Store consent in localStorage
3. Load tracking scripts only after consent
4. Provide opt-out mechanism
5. Link to cookie policy

## 📈 ANALYTICS SETUP

**Google Analytics 4:**
```typescript
// Add to app/layout.tsx <head>
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

**Only load after cookie consent!**

## 🎨 CONTENT RECOMMENDATIONS

### Homepage
- Add more descriptive content about services
- Include customer testimonials/reviews
- Add FAQ section
- Mention specific locations served

### Service Pages
- Expand content to 1000+ words each
- Add process/steps sections
- Include pricing information
- Add case studies or examples
- FAQ for each service

### Blog (Future)
- Legal tips and advice
- Case law updates
- Common legal questions
- Industry news

## 🔍 CRAWLABILITY

**Ensure:**
- No duplicate content
- No broken links
- Proper URL structure
- Fast server response
- No redirect chains
- No soft 404s

## ✨ QUICK WINS

1. Add real phone number and address
2. Create Google My Business listing
3. Get listed in Swedish legal directories
4. Add FAQ schema to relevant pages
5. Optimize all images (compress, WebP)
6. Add more internal links
7. Create blog with 5-10 articles

## 📝 NOTES

- Replace placeholder phone: "+46 (0)123-456 78" with real number
- Replace placeholder email with actual email if different
- Add actual business address for better local SEO
- Consider adding office photos
- Add lawyer/staff profiles with schema markup
- Get client reviews/testimonials

## 🚀 NEXT STEPS

1. Implement cookie consent banner
2. Create missing pages (prislista, privacy, cookies, 404)
3. Add page-specific metadata to all pages
4. Fix all image alt texts
5. Add breadcrumbs to service pages
6. Submit sitemap to Google Search Console
7. Set up Google Analytics (with consent)
8. Create Google My Business listing
9. Start content marketing strategy

---

**Priority Order:**
1. Cookie consent (legal requirement)
2. Privacy & cookie policy pages (legal requirement)
3. Missing page (prislista)
4. Page metadata
5. Image optimization
6. Google Search Console submission
