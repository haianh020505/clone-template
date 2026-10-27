# CustomGPT.ai Homepage — Page Brief

**Source:** https://customgpt.ai/
**Cloned to:** `src/app/page.tsx` (route `/`)
**Captured:** 2026-10-28

## Section Order

| # | Section | Source Class / ID | Local Component |
|---|---------|-------------------|-----------------|
| 1 | Sticky header | `cgpt-header` | `Header.tsx` |
| 2 | Hero — centered title + dashboard video | `cgpt-hero` | `HeroSection.tsx` |
| 3 | Logo marquee — 10 logos | `cgpt-marquee` | `MarqueeSection.tsx` |
| 4 | AI Solutions — split head, 2-col features, callout | `#sec-01` | `AISolutionsSection.tsx` |
| 5 | Testimonials — 2-slide carousel | `#sec-02` | `TestimonialsSection.tsx` |
| 6 | Launch Steps — 2 steps + image | `#sec-03` | `StepsSection.tsx` |
| 7 | Pricing — 3 plan cards | `#sec-04` | `PricingSection.tsx` |
| 8 | Security — badges + icon cards | `#sec-05` | `SecuritySection.tsx` |
| 9 | FAQ — 12 items | `#sec-07` | `FAQSection.tsx` |
| 10 | CTA Banner — dark bg + 2 buttons | `#closing-cta` | `CTABanner.tsx` |
| 11 | Footer — 4-col nav, social, legal | `cgpt-footer` | `Footer.tsx` |

## Typography
- **Font:** Inter Variable (self-hosted woff2)
- **Headings:** 500 weight, display sizes 40–56px desktop, 20–24px mobile
- **Body:** 16–18px, line-height 1.5–1.625
- **Mono accents:** SF Mono / Fira Code (badges)

## Colors
- **Ink (primary text):** `#16152a`
- **Ink soft (secondary):** `#555`
- **Surface (white bg):** `#fff`
- **Surface soft (light gray bg):** `#fafafa`
- **Surface tinted (purple tint bg):** `#f3f0ff`
- **Accent (purple):** `#6c5ce7`
- **Brand 200 (light purple):** `#ede9fe`
- **Rule (borders):** `#e8e8e8`

## Key Interactions
- **Header:** Sticky with blur backdrop, mobile hamburger drawer
- **Marquee:** Infinite horizontal scroll, pauses on hover
- **Testimonials:** 2-slide carousel with prev/next arrows
- **FAQ:** Native `<details>` accordion with CSS-animated +/× icon
- **CTA button shimmer:** Diagonal gradient animation on hero button

## Asset Map
| Asset | Source URL | Local Path |
|-------|-----------|------------|
| Inter font | `customgpt.ai/.../inter-variable-latin.woff2` | `public/sites/customgpt-ai/fonts/` |
| Hero poster | `uploads/2026/09/home-hero-ribbon-poster.webp` | `public/sites/customgpt-ai/images/hero-poster.webp` |
| Dashboard poster | `uploads/2026/10/home-dashboard-animation-v2-poster.webp` | `public/sites/customgpt-ai/images/dashboard-poster.webp` |
| Accuracy image | `uploads/2026/09/home-accuracy-northwind-v2.webp` | `public/sites/customgpt-ai/images/accuracy-northwind.webp` |
| Content security | `uploads/2026/09/content-security.webp` | `public/sites/customgpt-ai/images/content-security.webp` |
| Deployment callout | `uploads/2026/09/callout-deployment-1024x1009.webp` | `public/sites/customgpt-ai/images/callout-deployment.webp` |
| Steps image | `uploads/2026/09/home-steps-refund-policy.webp` | `public/sites/customgpt-ai/images/steps-refund-policy.webp` |
| CTA poster | `assets/video/footer-cta-poster.jpg` | `public/sites/customgpt-ai/images/cta-poster.jpg` |
| SOC2 badge | `uploads/2026/09/badge-soc2-160-300x300.webp` | `public/sites/customgpt-ai/badges/soc2.webp` |
| GDPR badge | `uploads/2026/09/badge-gdpr-160-300x300.webp` | `public/sites/customgpt-ai/badges/gdpr.webp` |
| 10 client logos | `uploads/2026/09/*.webp` | `public/sites/customgpt-ai/logos/` |
| 2 testimonial avatars | `uploads/2026/09/cs-photo-*.webp` | `public/sites/customgpt-ai/images/avatar-*.webp` |
| 2 testimonial company logos | `uploads/2026/09/*.webp` | `public/sites/customgpt-ai/logos/` |
| Footer badges | `assets/footer/soc2.webp`, `gdpr.webp` | `public/sites/customgpt-ai/badges/footer-*.webp` |

## Remaining Gaps
- **Video backgrounds:** Source uses `.webm` video for hero ribbon and dashboard animation; clone uses static poster images
- **Mega menu dropdowns:** Desktop header has multi-column mega menus for Solutions/Resources; simplified to direct links
- **Cookie consent banner:** Not cloned (third-party CookieYes widget)
- **Chat widget:** Source embeds CustomGPT AI assistant floating bubble; not included
- **Mobile hero poster:** Source swaps to a mobile-specific video poster; clone uses single poster
