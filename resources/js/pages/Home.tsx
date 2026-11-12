import CallToAction from '@/components/website/CallToAction';
import Container from '@/components/website/Container';
import ModuleCard from '@/components/website/ModuleCard';
import PrimaryButton from '@/components/website/PrimaryButton';
import SecondaryButton from '@/components/website/SecondaryButton';
import SectionHeading from '@/components/website/SectionHeading';
import { ERP_MODULES } from '@/data/modules';
import WebsiteLayout from '@/layouts/WebsiteLayout';
import { CheckCircle2, Layers, Shield, Sparkles } from 'lucide-react';

const BENEFITS = [
    { title: 'Modular by design', description: 'Activate the modules you need today and expand as your operations grow.' },
    { title: 'Unified data', description: 'Reduce duplicate entry with shared records across finance, inventory, and sales.' },
    { title: 'Operational visibility', description: 'Monitor workflows and performance with dashboards tailored to each team.' },
    { title: 'Implementation support', description: 'Structured rollout guidance from discovery through go-live. TODO: verify services copy.' },
] as const;

const INDUSTRIES = [
    'Manufacturing',
    'Distribution',
    'Retail',
    'Professional services',
    'Construction',
    'Healthcare operations',
] as const;

const WHY_POINTS = [
    {
        icon: Layers,
        title: 'Connected modules',
        description: 'Nine integrated modules designed to work together without fragile custom integrations.',
    },
    {
        icon: Shield,
        title: 'Governance ready',
        description: 'Role-based access and audit-friendly workflows to support accountable operations.',
    },
    {
        icon: Sparkles,
        title: 'Modern experience',
        description: 'A clean, responsive interface that teams can adopt quickly with focused training.',
    },
] as const;

const PARTNER_SLOT_COUNT = 6;

export default function Home() {
    return (
        <WebsiteLayout
            title="Home"
            description="Discover TechBridge ERP — modular enterprise software for finance, HR, inventory, sales, manufacturing, and more."
        >
            {/* Hero */}
            <section className="relative overflow-hidden bg-brand-surface">
                <Container className="grid gap-12 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
                    <div>
                        <p className="text-brand-green text-sm font-semibold tracking-wide uppercase">TechBridge ERP</p>
                        <h1 className="text-brand-navy mt-4 text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-[3.25rem] lg:leading-tight">
                            Run your business on one modular ERP platform
                        </h1>
                        <p className="text-muted-foreground mt-6 max-w-xl text-lg leading-relaxed">
                            Connect finance, people, inventory, and customer operations with software built for growing organizations that need
                            clarity—not complexity.
                        </p>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                            <PrimaryButton href={route('book-demo')}>Book a Demo</PrimaryButton>
                            <SecondaryButton href={route('modules.index')}>Explore Modules</SecondaryButton>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="rounded-2xl border border-brand-primary/10 bg-white p-4 shadow-lg shadow-brand-primary/5">
                            <div
                                className="flex aspect-[4/3] flex-col items-center justify-center rounded-xl border border-dashed border-brand-primary/25 bg-linear-to-br from-brand-surface to-white p-8 text-center"
                                role="img"
                                aria-label="Illustrative ERP dashboard placeholder"
                            >
                                <p className="text-brand-primary text-sm font-semibold tracking-wide uppercase">Dashboard preview</p>
                                <p className="text-muted-foreground mt-3 max-w-sm text-sm leading-relaxed">
                                    TODO: Replace with an approved, redacted TechBridge ERP product screenshot.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* ERP dashboard preview */}
            <section className="py-16 sm:py-20">
                <Container>
                    <SectionHeading
                        eyebrow="Platform overview"
                        title="See your operations in one place"
                        description="A single workspace for leadership and functional teams—designed for day-to-day execution and long-range planning."
                    />
                    <div className="mt-12 rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-10">
                        <div className="grid gap-6 md:grid-cols-3">
                            {['Executive summary', 'Operations snapshot', 'Financial health'].map((label) => (
                                <div key={label} className="rounded-xl bg-brand-surface p-6">
                                    <p className="text-brand-navy text-sm font-semibold">{label}</p>
                                    <div className="mt-4 space-y-3">
                                        <div className="h-2 rounded bg-brand-primary/15" />
                                        <div className="h-2 w-4/5 rounded bg-brand-primary/10" />
                                        <div className="h-2 w-3/5 rounded bg-brand-green/20" />
                                    </div>
                                    <p className="text-muted-foreground mt-4 text-xs">Illustrative layout placeholder</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* ERP modules overview */}
            <section className="bg-brand-surface py-16 sm:py-20">
                <Container>
                    <SectionHeading
                        eyebrow="Modules"
                        title="Nine modules. One connected platform."
                        description="Choose the capabilities your teams need—from HR and payroll to trucking and distribution."
                    />
                    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {ERP_MODULES.map((module) => (
                            <ModuleCard key={module.slug} module={module} />
                        ))}
                    </div>
                    <div className="mt-10 text-center">
                        <SecondaryButton href={route('modules.index')}>View all modules</SecondaryButton>
                    </div>
                </Container>
            </section>

            {/* Why Choose TechBridge */}
            <section className="py-16 sm:py-20">
                <Container>
                    <SectionHeading
                        eyebrow="Why TechBridge"
                        title="Built for teams that outgrow spreadsheets"
                        description="TechBridge ERP brings structure to growing operations without forcing a one-size-fits-all suite."
                    />
                    <div className="mt-12 grid gap-6 md:grid-cols-3">
                        {WHY_POINTS.map(({ icon: Icon, title, description }) => (
                            <div key={title} className="rounded-xl border border-border bg-white p-6 shadow-sm">
                                <div className="bg-brand-surface text-brand-primary inline-flex h-11 w-11 items-center justify-center rounded-lg">
                                    <Icon className="h-5 w-5" aria-hidden />
                                </div>
                                <h3 className="text-brand-navy mt-4 text-lg font-semibold">{title}</h3>
                                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{description}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Industry solutions */}
            <section className="bg-brand-surface py-16 sm:py-20">
                <Container>
                    <SectionHeading
                        eyebrow="Solutions"
                        title="Industry-aligned ERP workflows"
                        description="Configure modules and processes for the way your sector operates. Full industry pages arrive in a later milestone."
                    />
                    <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {INDUSTRIES.map((industry) => (
                            <li
                                key={industry}
                                className="flex items-center gap-3 rounded-xl border border-border bg-white px-5 py-4 shadow-sm"
                            >
                                <CheckCircle2 className="text-brand-green h-5 w-5 shrink-0" aria-hidden />
                                <span className="text-brand-navy font-medium">{industry}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-10 text-center">
                        <SecondaryButton href={route('solutions')}>Explore solutions</SecondaryButton>
                    </div>
                </Container>
            </section>

            {/* Key benefits */}
            <section className="py-16 sm:py-20">
                <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
                    <SectionHeading
                        align="left"
                        eyebrow="Benefits"
                        title="Clarity for every department"
                        description="Give finance, operations, and customer teams a shared source of truth—without rebuilding your stack from scratch."
                    />
                    <ul className="space-y-4">
                        {BENEFITS.map((benefit) => (
                            <li key={benefit.title} className="rounded-xl border border-border bg-white p-5 shadow-sm">
                                <h3 className="text-brand-navy font-semibold">{benefit.title}</h3>
                                <p className="text-muted-foreground mt-1 text-sm leading-relaxed">{benefit.description}</p>
                            </li>
                        ))}
                    </ul>
                </Container>
            </section>

            {/* Our Partners */}
            <section className="bg-brand-surface py-16 sm:py-20">
                <Container>
                    <SectionHeading
                        eyebrow="Partners"
                        title="Our partners"
                        description="Partner logos and endorsements will appear here once approved assets are available."
                    />
                    <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                        {Array.from({ length: PARTNER_SLOT_COUNT }).map((_, index) => (
                            <div
                                key={index}
                                className="flex aspect-[3/2] items-center justify-center rounded-lg border border-dashed border-brand-primary/20 bg-white px-3 text-center"
                            >
                                <span className="text-muted-foreground text-xs font-medium">Partner logo placeholder</span>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Book a Demo CTA */}
            <CallToAction
                title="Ready to see TechBridge ERP in action?"
                description="Schedule a guided walkthrough with our team and explore the modules that matter most to your business."
                primaryLabel="Book a Demo"
                primaryHref={route('book-demo')}
                secondaryLabel="Request a Quote"
                secondaryHref={route('request-quote')}
            />
        </WebsiteLayout>
    );
}
