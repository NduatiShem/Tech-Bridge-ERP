# PROJECT.md — TechBridge ERP Corporate Website

## Purpose
Build a standalone public marketing website for TechBridge Solutions LLC and its ERP product. This is **not** the ERP application or a multi-tenancy implementation.

## Status
- Stage: **Phase 1 foundation complete**
- Approved technical direction: Laravel 12 + React + TypeScript + Inertia.js + Tailwind CSS v4 + Vite
- Development status: Shared marketing layout, homepage structure, and navigation in place
- Design status: Brand logos from `Logos/` copied to `public/images/`; homepage uses structure placeholders pending approved mockups/screenshots

## Target audience
Business owners, finance teams, HR leaders, procurement teams, operations managers, and decision-makers evaluating ERP software.

## Website goals
- Explain TechBridge ERP and its benefits.
- Showcase the nine modules and industry use cases.
- Encourage demo requests and quotation enquiries.
- Provide trustworthy company information, educational resources, and contact methods.
- Deliver a fast, accessible, mobile-friendly experience.

## Pages
| Page / group | Status |
|---|---|
| Home | **Structure implemented** (Phase 1) |
| All Modules | **Overview implemented** (grid + CTA; mockup polish pending) |
| HR & Payroll | **Mockup sections complete** — confirm David Omondi testimonial; replace HR hero/screenshot assets |
| Inventory | **Mockup sections complete** — confirm HealthPlus testimonial; replace hero/screenshot assets |
| Procurement | **Mockup sections complete** — verify testimonial; replace hero/screenshot assets |
| Sales & CRM | **Mockup sections complete** — verify MediForm testimonial; replace hero/screenshot assets |
| Finance | **Mockup sections complete** — verify testimonial; replace hero/screenshot assets |
| Manufacturing | **Mockup sections complete** — confirm HealthPlus testimonial sign-off before production |
| Asset Management | **Mockup sections complete** — verify CareWell testimonial; replace hero/screenshot assets |
| Reports & Analytics | **Mockup sections complete** — verify MediFarm testimonial; replace hero/screenshot assets |
| Trucking & Distribution | **Mockup sections complete** — verify HealthyPlus testimonial; replace hero/screenshot assets |
| Solutions & Industries | Route + placeholder only |
| Why TechBridge | Route + placeholder only |
| Pricing & Plans | **Mockup implemented** — verify dollar amounts & plan limits before production |
| About Us | Route + placeholder only |
| Contact Us | Route + placeholder only |
| Book a Demo | Route + placeholder only |
| Request a Quote | Route + placeholder only |
| Resources & Blog | Route + placeholder only |
| Blog Article | Not started |
| FAQs & Support | Route + placeholder only |
| Case Studies | Route + placeholder only |
| Privacy Policy | Route + placeholder only |
| Terms of Service | Route + placeholder only |

## Implementation milestones
- [x] M1: Scaffold Laravel/React/TypeScript/Inertia/Tailwind project (pre-existing starter kit)
- [x] M2: Establish design tokens, fonts, logo, shared layout, header, footer
- [x] M3: Implement responsive homepage **structure** from approved reference (content placeholders where assets are missing)
- [x] M4: Implement All Modules and nine module pages
- [ ] M5: Implement marketing, company, resources, and legal pages
- [ ] M6: Implement demo, quote, and contact forms with validation and notifications
- [ ] M7: SEO, accessibility, SSR assessment, testing, and performance
- [ ] M8: Production deployment and acceptance testing

## Initial content and asset dependencies
- [x] Original TechBridge logo in appropriate formats (`public/images/logo-*.png` from repo `Logos/`)
- [ ] Approved homepage and page mockups (structure implemented; visual fidelity pending)
- [ ] Real product screenshots, with sensitive data redacted
- [ ] Verified business contact information
- [ ] Approved module copy and feature lists
- [ ] Verified pricing or decision to use 'Request a Quote'
- [ ] Approved partner/customer logos and testimonials (if used)
- [ ] Legal review of Privacy Policy and Terms of Service
- [ ] Deployment domain and hosting decision

## Architecture decisions
1. Public website in one Laravel + Inertia + React application.
2. React + TypeScript for frontend; Tailwind CSS for styling.
3. Shared components under `resources/js/components/website/` and `resources/js/layouts/WebsiteLayout.tsx`.
4. Typed ERP module catalog in `resources/js/data/modules.ts`; navigation link data in `resources/js/data/navigation.ts`.
5. Marketing routes in `routes/website.php`; stub pages use `Placeholder.tsx` until full page implementation.
6. Brand design tokens in `resources/css/app.css` (`brand-primary`, `brand-green`, `brand-navy`, `brand-surface`).
7. Typography: **Inter** via Bunny Fonts (replaces starter-kit Instrument Sans on public pages).
8. Header modules menu: Headless UI `Popover` (desktop) and expandable list in `MobileNavigation`.
9. Backend/database only for genuine dynamic features.
10. Admin CMS deferred until explicitly approved.
11. No direct ERP database integration.
12. Starter-kit auth/dashboard pages retained unchanged under `resources/js/pages/auth/` and `dashboard.tsx`.

## Development log
| Date | Change | Verification |
|---|---|---|
| 2026-11-07 | Created initial AI project instructions and project scope | Documentation only |
| 2026-11-11 | Phase 1: design tokens, website layout, header/footer, Home page structure, marketing routes | `npm run build` OK; `php artisan test` 27 passed; homepage verified in browser (mobile menu) |
| 2026-11-11 | Manufacturing module page from approved mockup; reusable `components/website/modules/*`; product screenshot assets in `public/images/manufacturing/` | Build OK; tests 29 passed |
| 2026-11-11 | Manufacturing **Key Features** section aligned to approved mockup (4×2 grid, mockup copy, solid icon tiles, no “Learn more”) | `npm run build` OK; `ManufacturingModulePageTest` passed; browser check at 1440px (embedded preview width limited) |
| 2026-11-11 | Manufacturing **How it works** — 5-step row, mockup copy/icons, solid tiles, inter-step arrows | `npm run build` OK; manufacturing feature test passed; DOM verified in browser |
| 2026-11-11 | Manufacturing **Real system screenshots** — approved desktop/mobile PNG, mockup copy, two-column layout | Asset: `public/images/marketing/manufacturing/screenshots-desktop-mobile.png`; build + tests OK |
| 2026-11-11 | Manufacturing **integrations** — eyebrow, horizontal link cards, solid tiles, mockup copy | `npm run build` OK; manufacturing tests passed |
| 2026-11-11 | Manufacturing **testimonial** carousel — mockup layout, HealthPlus quote (verify approval), 4-dot chrome | Build + tests OK |
| 2026-11-11 | Manufacturing **bottom CTA** banner — gradient, cog, mockup copy, green demo button | Build + tests OK |
| 2026-11-11 | **Footer** mockup — single `Footer` via `WebsiteLayout`; 5 columns; contact/social in `data/footer.ts` | Verify email, phone, social URLs before production |
| 2026-11-11 | **Manufacturing UI/UX audit** — spacing token, typography, a11y touch/focus, testimonial mobile, footer logo | `npm run build` OK; `php artisan test` 29 passed; browser screenshots 375/1440 |
| 2026-11-11 | **Manufacturing audit (cont.)** — fixed duplicate document title; `APP_NAME` defaults; tablet 768 capture; workflow type scale | `npm run build` OK; 30 tests passed; `manufacturing-audit-768.png` |
| 2026-11-11 | Manufacturing polish — alternating section backgrounds; Key Features `bg-brand-white`; bottom CTA wave JPG + single-row layout | `bottom-cta-background.jpg`; build OK |
| 2026-11-11 | Brand logos — `public/images/logos/`, `data/brand.ts`, footer wordmark + header light logo from approved `Logos/` | Header, footer, mobile nav wired |
| 2026-11-11 | **All Modules** overview at `/modules` — `modules/Index.tsx`, 9-card grid, book-demo CTA | `ModulesIndexPageTest`; build OK |
| 2026-11-11 | **HR & Payroll** module page — shared section components, `data/module-pages/hr-payroll.ts`, route `/modules/hr-payroll` | `HrPayrollModulePageTest`; hero/screenshots placeholder pending export |
| 2026-11-11 | **Inventory** module page — `data/module-pages/inventory.ts`, `/modules/inventory` | `InventoryModulePageTest`; assets TODO per `marketing/inventory/README.md` |
| 2026-11-11 | **Inventory copy refresh** — aligned features, workflow, screenshots text to updated comp v2 | Build OK |
| 2026-11-11 | **Procurement** module page — `data/module-pages/procurement.ts`, `/modules/procurement` | `ProcurementModulePageTest` |
| 2026-11-11 | **Finance** module page — `data/module-pages/finance.ts`, `/modules/finance` | `FinanceModulePageTest` |
| 2026-11-11 | **Pricing & Plans** — `Pricing.tsx`, `data/pricing.ts`, tiers, comparison table, FAQ | `PricingPageTest`; ref in `design-references/Pricing/` |
| 2026-11-12 | **Asset Management** module page — `data/module-pages/asset-management.ts`, `/modules/asset-management` | `AssetManagementModulePageTest`; comp in `design-references/modules/` |
| 2026-11-12 | **Sales & CRM** module page — `data/module-pages/sales-crm.ts`, `/modules/sales-crm` | `SalesCrmModulePageTest`; comp in `design-references/modules/` |
| 2026-11-12 | **Reports & Analytics** — `data/module-pages/reports-analytics.ts`, `/modules/reports-analytics` | `ReportsAnalyticsModulePageTest`; 7-module integration grid |
| 2026-11-12 | **Trucking & Distribution** — `data/module-pages/trucking-distribution.ts`, `/modules/trucking-distribution` | `TruckingDistributionModulePageTest`; **M4 complete** (9/9 modules) |
| 2026-11-12 | **Pricing page QA** — hero (breadcrumbs, person + navy card), themed plan cards, 2-col FAQ, bottom CTA aligned to comp | Awaiting `hero-person.png` export |
| 2026-11-12 | **Pricing hero rebuild** — removed duplicate full-bleed comp bg + composite; `PricingHero` matches `03-marketing-pages/pricing.png` structure | QA at 1440px; export hi-res `hero-photograph.png` from design |

## Outstanding information and assets
- Set `APP_NAME` / `VITE_APP_NAME` to **TechBridge Solutions** in deployment `.env` (quoted if the name contains spaces).
- ERP dashboard/product screenshots for homepage hero and preview sections.
- Verified contact email, phone, office, and social profile URLs for footer.
- Approved partner logos.
- Confirm brand hex values against official logo artwork.

## Next action
**Milestone M4 complete:** All nine module detail pages + `/modules` overview. **M5 (in progress):** Pricing live; remaining marketing, company, resources, and legal pages still placeholders.

## Design reference workflow
Before each new page: store mockups under `public/images/` or project assets, map section order to shared components (`ModuleHero`, `ModuleFeatureGrid`, etc.), and keep header/footer/button tokens aligned with `resources/css/app.css` brand colors.

Approved Manufacturing full-page reference: `design-references/modules/TechBridge Manufacturing SaaS Landing Page.png`

## Manufacturing page — UI/UX audit (2026-11-11)

### A. Issues identified (pre-refinement)
| Area | Finding |
|------|---------|
| Layout | `max-w-7xl` (1280px) left excess gutter on 1440px+ vs comp; hero text column over-constrained |
| Typography | Mixed `text-[13px]` / `text-[15px]` on cards vs standard `text-sm` / `text-base`; section H2 slightly large on mobile |
| Spacing | Section vertical padding varied per component; card type scale inconsistent |
| Colors / branding | Footer used `logo-dark.png` on navy (low contrast); decorative arrows on feature cards implied click affordance |
| Images | Approved assets in use; hero background positioning could clip swoosh on some widths |
| Mobile | Testimonial carousel crushed card width when arrows flanked content on narrow viewports |
| Accessibility | Breadcrumb/footer links missing focus rings; social icons below 44px touch target |
| Interactions | Feature cards non-interactive but showed arrow affordance; testimonial dots 2–4 disabled (by design until more quotes) |
| Performance | Hero `loading="eager"` appropriate; below-fold images lazy; no extra JS libraries added |
| Content / trust | Testimonial + footer contact from mockup — verify legal approval before production (`AGENTS.md`) |

### B. Corrections implemented
- Wider marketing `Container` (`max-w-[90rem]`) + hero column uses available width (prior session).
- `@utility section-spacing` for consistent section rhythm across all module blocks.
- `SectionHeading` responsive H2: `text-2xl → lg:text-4xl`.
- Unified feature/integration card typography to `text-base` / `text-sm`.
- `pointer-events-none` on decorative arrows (feature + integration cards).
- Footer: `logo-light.png` on navy, social buttons `h-11 w-11`, link focus styles.
- Breadcrumb link focus styles; `overflow-x-clip` on `WebsiteLayout`; `PrimaryButton` `min-h-11`.
- Testimonial: mobile controls below card; side arrows from `sm+`.
- `prefers-reduced-motion` scroll behavior baseline in CSS.
- **Follow-up (2026-11-11):** Single Inertia title format (`Page | TechBridge Solutions`); `WebsiteLayout` uses `<Head title>` only; `config/app.php` + `.env.example` default app name; workflow step titles `sm:text-base`.

**Files touched:** `app.css`, `WebsiteLayout.tsx`, `SectionHeading.tsx`, `Breadcrumb.tsx`, `Footer.tsx`, `PrimaryButton.tsx`, all `modules/*` section components; plus `app.tsx`, `app.blade.php`, `config/app.php`, `ModuleWorkflow.tsx`, `ManufacturingModulePageTest.php`.

### C. Visual verification
Browser automation (Cursor IDE browser; CDP viewport emulation):
| Viewport | Screenshot (local temp) |
|----------|-------------------------|
| 1440×900 | `page-2026-11-11T14-35-46-212Z.png` under `%LOCALAPPDATA%\Temp\cursor\screenshots\` |
| 768×1024 | `manufacturing-audit-768.png` (same folder; `scrollWidth` ≤ viewport — no horizontal overflow) |
| 375×812 | Captured same session (mobile menu + stacked hero) — re-check in your browser at true width |

**Note:** Embedded preview panel width may differ from emulated metrics; confirm at **1440 / 768 / 375** in Chrome/Edge with hard refresh after `npm run build`.

### D. Remaining issues
- Footer wordmark PNG has opaque black matte; transparent export recommended for seamless navy footer.
- Testimonial pagination shows 4 dots with only one slide (mockup chrome; add quotes or reduce dots when content-ready).
- Social footer icons non-linked until URLs provided in `data/footer.ts`.
- Pixel-diff vs full-page PNG not automated (no Playwright in repo); manual side-by-side recommended.
- Homepage and other routes not in scope for this audit.

### E. Quality scores (post-refinement, inspected + tested)
| Area | Score | Notes |
|------|-------|-------|
| Layout & alignment | 8/10 | Wider container; section order matches comp |
| Typography | 8/10 | Hierarchy consistent; one H1 per page |
| Spacing & rhythm | 9/10 | `section-spacing` tokenized |
| Colors & branding | 8/10 | Tokens used; CTA/footer gradients approximate |
| Images & assets | 9/10 | Approved PNGs, correct alts |
| Mobile responsiveness | 8/10 | Grids stack; workflow 5-col from `lg` only |
| Accessibility | 8/10 | Focus improved; document title corrected; full WCAG pass not run |
| Interactions | 8/10 | All CTAs routed; non-links clarified |
| Performance | 8/10 | Lean bundle; lazy images |
| **Overall** | **8/10** | Production-candidate pending content sign-off + manual comp overlay at 1440px |
