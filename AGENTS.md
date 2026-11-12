# AGENTS.md — TechBridge ERP Website AI Instructions

> This file is the persistent source of development rules for AI coding assistants working in this repository. Read it before making changes.

## 1. Project identity and boundaries
- Project: **TechBridge ERP Corporate Website** for **TechBridge Solutions LLC**.
- Purpose: public marketing, product discovery, enquiries, demo booking, quote requests, and educational content.
- **Not in scope:** ERP modules as operational software, dashboards for employees, multi-tenant provisioning, billing engines, or tenant databases.
- Do not integrate directly with an ERP production database. Any future integration requires a separately approved API design.

## 2. Approved technical direction
- Backend: Laravel 12, PHP 8.3+.
- Frontend: React + TypeScript (`.tsx`) with Inertia.js.
- Styling: Tailwind CSS v4, mobile-first.
- Bundler: Vite.
- Database: MySQL for dynamic website data only.
- Icons: Lucide React.
- Favor existing dependencies and starter-kit conventions. Do not introduce a second framework or an SPA-only routing layer without approval.

## 3. Development workflow (mandatory)
1. Read `AGENTS.md` and `PROJECT.md` before beginning a task.
2. Inspect relevant existing files and conventions before editing.
3. State a brief plan for nontrivial work.
4. Make the smallest cohesive change that satisfies the request.
5. Add or update tests when behavior changes.
6. Run relevant checks (e.g., PHP tests, TypeScript, lint, build); accurately report what ran and what failed.
7. Update the status and decisions in `PROJECT.md` after completing a milestone.
8. Ask for approval before destructive database operations, major architectural changes, new paid services, or production deployment.

## 4. Design system
- Use the **original supplied TechBridge logo**; never redraw or alter it without approval.
- Proposed palette (verify against original logo): primary blue `#26358B`, green `#22A447`, dark navy `#17243B`, pale background `#F3F7FC`.
- Typeface: Inter or Plus Jakarta Sans; choose one and apply consistently.
- Style: polished B2B SaaS marketing site; white/light backgrounds, generous whitespace, rounded cards, restrained shadows, clear calls to action.
- Avoid admin-dashboard layouts and excessive motion.
- Use design tokens rather than scattering raw hex values throughout components.
- Responsive targets: mobile, tablet, desktop, wide desktop; ensure menus, tables, images, and forms work on narrow screens.
- Follow accessibility best practices: semantic headings, visible focus states, keyboard navigation, accessible form labels, contrast, reduced-motion support, and alt text.

## 5. Content and accuracy
- Do not invent facts: pricing, client names/logos, partners, reviews, testimonials, office locations, phone numbers, emails, statistics, awards, or compliance certifications.
- If content is missing, mark it as `TODO: verify` and flag it in the handoff.
- Approved mockups guide appearance, not factual accuracy.
- Actual ERP screenshots must be provided or clearly identified as illustrative placeholders.
- Legal text is draft content until professionally reviewed.
- Do not use fake success metrics or customer quotes in production pages.

## 6. Pages in scope
- Home
- All Modules and 9 detail pages: HR & Payroll; Inventory; Procurement; Sales & CRM; Finance; Manufacturing; Asset Management; Reports & Analytics; Trucking & Distribution
- Solutions & Industries; Why TechBridge; Pricing & Plans
- About Us; Contact Us; Book a Demo; Request a Quote
- Resources & Blog; Blog Article; FAQs & Support; Case Studies
- Privacy Policy; Terms of Service

## 7. Frontend conventions
- Prefer functional React components and strict TypeScript types; avoid `any` except when justified.
- Keep page components in `resources/js/pages/`, shared UI in `resources/js/components/`, layout in `resources/js/layouts/`, content in `resources/js/data/`, and types in `resources/js/types/`.
- Reuse shared Header, Footer, Button, Container, SectionHeading, ModuleCard, CTA, Breadcrumb, and FormField components.
- Define the nine modules in one typed data source, including slug, title, summary, icon, and key features.
- Avoid duplicating navigation links, module details, and footer groups across pages.
- Keep animations subtle and optional; respect `prefers-reduced-motion`.

## 8. Laravel and form conventions
- Use Laravel routes/controllers/form requests for server-side behavior.
- Use named routes and predictable, human-readable slugs.
- Validate all form inputs server-side; escape user content; use CSRF protection, throttling, spam mitigation, and appropriate success/error messages.
- Do not commit `.env`, credentials, API keys, or sensitive enquiry data.
- Use migrations for database schema and mail/notification classes for notifications.
- Introduce database tables only when required by a working feature.
- Do not implement a CMS/admin panel until explicitly requested.

## 9. SEO, performance, and quality
- Public pages must have meaningful unique titles and descriptions.
- Plan SSR with Inertia where supported; verify deployment requirements before enabling it in production.
- Provide canonical URLs, Open Graph metadata, sitemap, robots rules, and structured data when appropriate.
- Optimize images and avoid unnecessary JavaScript and third-party packages.
- Test forms, navigation, responsive behavior, accessibility basics, and important public routes.
- Do not claim functionality is complete if only a static visual has been built.

## 10. Communication and project tracking
- Report: completed work, files changed, tests executed, known gaps, and next action.
- Keep `PROJECT.md` up to date with milestones and unresolved decisions.
- If a reference design or asset is unavailable, request it rather than inventing its contents.
- Prioritize the latest explicit user request if it conflicts with this file; document intentional changes to the rules.
