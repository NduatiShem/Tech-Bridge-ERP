import ButtonWithArrow from '@/components/website/ButtonWithArrow';
import type { PricingPlan, PricingPlanTheme } from '@/data/pricing';
import { cn } from '@/lib/utils';
import { ArrowRight, Building2, Check } from 'lucide-react';
import { Link } from '@inertiajs/react';

type PlanVisual = {
    iconBg: string;
    cardBorder: string;
    panel: string;
    outlineCta: string;
};

const PLAN_VISUAL: Record<PricingPlanTheme, PlanVisual> = {
    starter: {
        iconBg: 'bg-sky-500',
        cardBorder: 'border-gray-200',
        panel: 'bg-[#EFF7FF] text-brand-navy',
        outlineCta:
            'border-sky-400 text-sky-600 hover:border-sky-500 hover:bg-sky-50 focus-visible:outline-sky-500',
    },
    professional: {
        iconBg: 'bg-brand-primary',
        cardBorder: 'border-gray-200',
        panel: 'bg-[#EFF7FF] text-brand-navy',
        outlineCta:
            'border-gray-300 text-brand-navy hover:border-gray-400 hover:bg-gray-50 focus-visible:outline-brand-primary',
    },
    business: {
        iconBg: 'bg-brand-green',
        cardBorder: 'border-brand-green',
        panel: 'bg-brand-green/10 text-brand-navy',
        outlineCta: '',
    },
    enterprise: {
        iconBg: 'bg-violet-600',
        cardBorder: 'border-gray-200',
        panel: 'bg-violet-50 text-brand-navy',
        outlineCta:
            'border-violet-400 text-violet-700 hover:border-violet-500 hover:bg-violet-50 focus-visible:outline-violet-600',
    },
};

function planCtaHref(plan: PricingPlan): string {
    switch (plan.ctaHref) {
        case 'request-quote':
            return route('request-quote');
        case 'contact':
            return route('contact');
        default:
            return route('book-demo');
    }
}

function PlanOutlineCta({ href, label, className }: { href: string; label: string; className: string }) {
    return (
        <Link
            href={href}
            className={cn(
                'inline-flex min-h-11 w-full items-center justify-center rounded-lg border bg-white px-4 py-2.5 text-sm font-semibold transition-colors',
                'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
                className,
            )}
        >
            {label}
            <ArrowRight className="ml-2 h-4 w-4 shrink-0" aria-hidden />
        </Link>
    );
}

export default function PricingPlanCard({ plan }: { plan: PricingPlan }) {
    const visual = PLAN_VISUAL[plan.theme];
    const href = planCtaHref(plan);
    const isBusiness = plan.theme === 'business';

    return (
        <article
            className={cn(
                'relative flex h-full w-full flex-col rounded-2xl border bg-white p-5 shadow-sm sm:p-6',
                'motion-reduce:hover:translate-y-0 transition-[transform,box-shadow] duration-200 ease-out',
                'hover:-translate-y-1 focus-within:-translate-y-1',
                visual.cardBorder,
                isBusiness
                    ? 'border-2 shadow-[0_10px_36px_-12px_rgba(34,164,71,0.28)] hover:shadow-[0_14px_40px_-10px_rgba(34,164,71,0.35)]'
                    : 'shadow-[0_4px_24px_-12px_rgba(23,36,59,0.1)] hover:shadow-[0_12px_32px_-12px_rgba(23,36,59,0.16)]',
            )}
        >
                {plan.badge ? (
                    <span className="bg-brand-green absolute top-0 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-md px-3.5 py-1.5 text-[10px] font-bold tracking-[0.14em] whitespace-nowrap text-white uppercase">
                        {plan.badge}
                    </span>
                ) : null}

                <span
                    className={cn(
                        'inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl',
                        visual.iconBg,
                        plan.badge && 'mt-2',
                    )}
                    aria-hidden
                >
                    <Building2 className="h-[1.35rem] w-[1.35rem] text-white" strokeWidth={1.75} />
                </span>

                <h3 className="text-brand-navy mt-4 text-lg font-bold tracking-tight">{plan.name}</h3>
                <p className="text-muted-foreground mt-1 text-sm leading-snug">{plan.description}</p>

                <div className="mt-5">
                    <p className="text-brand-navy text-[1.75rem] leading-none font-bold tracking-tight sm:text-[2rem]">
                        {plan.price}
                    </p>
                    {plan.priceSuffix ? (
                        <p className="text-muted-foreground mt-1.5 text-sm leading-snug">{plan.priceSuffix}</p>
                    ) : null}
                </div>

                <p
                    className={cn(
                        'mt-4 w-full rounded-lg px-3 py-2.5 text-center text-xs leading-snug font-medium sm:text-sm',
                        visual.panel,
                    )}
                >
                    {plan.panelSummary}
                </p>

                <ul className="mt-5 flex flex-1 flex-col gap-2.5">
                    {plan.features.map((feature) => (
                        <li key={feature} className="text-brand-navy flex items-start gap-2.5 text-sm leading-snug">
                            <span className="bg-brand-green mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full">
                                <Check className="h-3 w-3 text-white" strokeWidth={3} aria-hidden />
                            </span>
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>

                <div className="mt-auto pt-5">
                    {isBusiness ? (
                        <ButtonWithArrow href={href} variant="green" className="w-full justify-center shadow-none">
                            {plan.ctaLabel}
                        </ButtonWithArrow>
                    ) : (
                        <PlanOutlineCta href={href} label={plan.ctaLabel} className={visual.outlineCta} />
                    )}
                </div>
        </article>
    );
}
