import Container from '@/components/website/Container';
import SectionHeading from '@/components/website/SectionHeading';
import RevealOnView from '@/components/website/motion/RevealOnView';
import {
    SOLUTIONS_INDUSTRIES,
    SOLUTIONS_INDUSTRIES_SECTION,
    SOLUTIONS_INDUSTRY_FILTERS,
    type IndustryFilterId,
} from '@/data/solutions';
import { featureAccentSolidStyles } from '@/lib/feature-accents';
import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';
import { useMemo, useState } from 'react';

const CARD_STAGGER_MS = 60;

function resolveModuleHref(href: string): string {
    if (href === '/modules/manufacturing') return route('modules.show', { slug: 'manufacturing' });
    if (href === '/modules/trucking-distribution') return route('modules.show', { slug: 'trucking-distribution' });
    if (href === '/modules/inventory') return route('modules.show', { slug: 'inventory' });
    if (href === '/modules/procurement') return route('modules.show', { slug: 'procurement' });
    if (href === '/modules/sales-crm') return route('modules.show', { slug: 'sales-crm' });
    if (href === '/modules/finance') return route('modules.show', { slug: 'finance' });
    return href;
}

export default function SolutionsIndustriesSection() {
    const [activeFilter, setActiveFilter] = useState<IndustryFilterId>('all');

    const visibleIndustries = useMemo(() => {
        if (activeFilter === 'all') {
            return SOLUTIONS_INDUSTRIES;
        }
        return SOLUTIONS_INDUSTRIES.filter((item) => item.filterId === activeFilter);
    }, [activeFilter]);

    return (
        <section className="bg-white py-10 sm:py-12 lg:py-14">
            <Container>
                <RevealOnView>
                    <SectionHeading
                        eyebrow={SOLUTIONS_INDUSTRIES_SECTION.eyebrow}
                        title={SOLUTIONS_INDUSTRIES_SECTION.title}
                        description={SOLUTIONS_INDUSTRIES_SECTION.description}
                        eyebrowTone="primary"
                        descriptionClassName="mx-auto max-w-2xl text-sm leading-relaxed sm:text-base"
                    />
                </RevealOnView>

                <RevealOnView delayMs={60} className="mt-6 sm:mt-8">
                    <div
                        className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                        role="tablist"
                        aria-label="Filter industries"
                    >
                        {SOLUTIONS_INDUSTRY_FILTERS.map((filter) => {
                            const Icon = filter.icon;
                            const isActive = activeFilter === filter.id;

                            return (
                                <button
                                    key={filter.id}
                                    type="button"
                                    role="tab"
                                    aria-selected={isActive}
                                    onClick={() => setActiveFilter(filter.id)}
                                    className={cn(
                                        'inline-flex shrink-0 items-center gap-2 rounded-full border px-3 py-2 text-xs font-semibold transition-colors sm:px-4 sm:text-[13px]',
                                        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary',
                                        isActive
                                            ? 'border-brand-primary bg-brand-primary text-white shadow-sm'
                                            : 'border-slate-200 bg-white text-brand-navy hover:border-brand-primary/30 hover:bg-slate-50',
                                    )}
                                >
                                    <Icon className="h-4 w-4 shrink-0" strokeWidth={2.25} aria-hidden />
                                    <span className="whitespace-nowrap">{filter.label}</span>
                                </button>
                            );
                        })}
                    </div>
                </RevealOnView>

                <ul className="mt-6 grid list-none gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
                    {visibleIndustries.map((industry, index) => {
                        const Icon = industry.icon;

                        return (
                            <RevealOnView key={industry.id} as="li" delayMs={(index % 6) * CARD_STAGGER_MS}>
                                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_4px_20px_rgba(30,64,120,0.07)]">
                                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                                        <img
                                            src={industry.image}
                                            alt={industry.imageAlt}
                                            className="h-full w-full object-cover"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    </div>
                                    <div className="flex flex-1 flex-col p-4 sm:p-5">
                                        <span
                                            className={cn(
                                                'inline-flex h-10 w-10 items-center justify-center rounded-lg text-white shadow-sm',
                                                featureAccentSolidStyles[industry.accent],
                                            )}
                                        >
                                            <Icon className="h-5 w-5" strokeWidth={2.25} aria-hidden />
                                        </span>
                                        <h3 className="text-brand-navy mt-3 text-base font-bold sm:text-lg">{industry.title}</h3>
                                        <p className="text-muted-foreground mt-2 flex-1 text-sm leading-relaxed">
                                            {industry.description}
                                        </p>
                                        <Link
                                            href={resolveModuleHref(industry.href)}
                                            className={cn(
                                                'group text-brand-primary mt-4 inline-flex items-center gap-1.5 text-sm font-semibold',
                                                'transition-colors hover:text-brand-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary',
                                            )}
                                        >
                                            Learn More
                                            <ArrowRight
                                                className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1 motion-reduce:transform-none"
                                                aria-hidden
                                            />
                                        </Link>
                                    </div>
                                </article>
                            </RevealOnView>
                        );
                    })}
                </ul>
            </Container>
        </section>
    );
}
