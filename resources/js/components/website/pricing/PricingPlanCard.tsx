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
            'border-brand-primary/70 text-brand-primary hover:border-brand-primary hover:bg-[#EFF7FF] focus-visible:outline-brand-primary',
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

function PlanOutlineCta({
    href,
    label,
    className,
    compact,
}: {
    href: string;
    label: string;
    className: string;
    compact?: boolean;
}) {
    return (
        <Link
            href={href}
            className={cn(
                'inline-flex w-full items-center justify-center rounded-lg border bg-white font-semibold transition-colors',
                'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
                compact ? 'min-h-10 px-3 py-2 text-xs' : 'min-h-11 px-4 py-2.5 text-sm',
                className,
            )}
        >
            {label}
            <ArrowRight className={cn('ml-1.5 shrink-0', compact ? 'h-3.5 w-3.5' : 'ml-2 h-4 w-4')} aria-hidden />
        </Link>
    );
}

export default function PricingPlanCard({
    plan,
    layoutClassName,
    density = 'default',
    isCarouselActive = true,
}: {
    plan: PricingPlan;
    layoutClassName?: string;
    density?: 'default' | 'compact';
    isCarouselActive?: boolean;
}) {
    const visual = PLAN_VISUAL[plan.theme];
    const href = planCtaHref(plan);
    const isBusiness = plan.theme === 'business';
    const isCompact = density === 'compact';
    const useMutedChecks = isCompact && !isCarouselActive && !isBusiness;

    return (
        <article
            className={cn(
                'relative flex h-full w-full flex-col overflow-visible rounded-2xl border bg-white shadow-sm',
                isCompact ? 'p-4 pt-5' : 'p-5 sm:p-6',
                layoutClassName,
                'motion-reduce:hover:translate-y-0 transition-[transform,box-shadow] duration-200 ease-out',
                !isCompact && 'hover:-translate-y-1 focus-within:-translate-y-1',
                visual.cardBorder,
                isBusiness
                    ? cn(
                          'border-2',
                          isCarouselActive
                              ? 'shadow-[0_12px_36px_-10px_rgba(34,164,71,0.38)]'
                              : 'shadow-[0_8px_28px_-12px_rgba(34,164,71,0.28)]',
                      )
                    : isCompact && isCarouselActive
                      ? 'shadow-[0_6px_22px_-10px_rgba(23,36,59,0.14)]'
                      : 'shadow-[0_4px_24px_-12px_rgba(23,36,59,0.1)]',
                !isCompact &&
                    !isBusiness &&
                    'hover:shadow-[0_12px_32px_-12px_rgba(23,36,59,0.16)]',
                !isCompact &&
                    isBusiness &&
                    'hover:shadow-[0_14px_40px_-10px_rgba(34,164,71,0.35)]',
            )}
        >
            {plan.badge ? (
                <span
                    className={cn(
                        'bg-brand-green absolute top-0 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-md font-bold tracking-[0.14em] whitespace-nowrap text-white uppercase',
                        isCompact ? 'px-3 py-1 text-[9px]' : 'px-3.5 py-1.5 text-[10px]',
                    )}
                >
                    {plan.badge}
                </span>
            ) : null}

            <div className={cn('flex items-start gap-2.5', plan.badge && (isCompact ? 'mt-1' : 'mt-2'))}>
                <span
                    className={cn(
                        'inline-flex shrink-0 items-center justify-center rounded-xl',
                        visual.iconBg,
                        isCompact ? 'h-10 w-10 rounded-lg' : 'h-12 w-12',
                    )}
                    aria-hidden
                >
                    <Building2
                        className={cn('text-white', isCompact ? 'h-[1.1rem] w-[1.1rem]' : 'h-[1.35rem] w-[1.35rem]')}
                        strokeWidth={1.75}
                    />
                </span>
                <div className="min-w-0 flex-1">
                    <h3
                        className={cn(
                            'text-brand-navy font-bold tracking-tight',
                            isCompact ? 'text-base leading-tight' : 'text-lg',
                        )}
                    >
                        {plan.name}
                    </h3>
                    <p
                        className={cn(
                            'text-muted-foreground leading-snug',
                            isCompact ? 'mt-0.5 text-[11px]' : 'mt-1 text-sm',
                        )}
                    >
                        {plan.description}
                    </p>
                </div>
            </div>

            <div className={cn(isCompact ? 'mt-3' : 'mt-5')}>
                <p
                    className={cn(
                        'text-brand-navy leading-none font-bold tracking-tight',
                        isCompact ? 'text-[1.65rem]' : 'text-[1.75rem] sm:text-[2rem]',
                    )}
                >
                    {plan.price}
                </p>
                {plan.priceSuffix ? (
                    <p
                        className={cn(
                            'text-muted-foreground leading-snug',
                            isCompact ? 'mt-1 text-[11px]' : 'mt-1.5 text-sm',
                        )}
                    >
                        {plan.priceSuffix}
                    </p>
                ) : null}
            </div>

            <p
                className={cn(
                    'w-full rounded-lg text-center leading-snug font-medium',
                    visual.panel,
                    isCompact ? 'mt-2.5 px-2.5 py-2 text-[11px]' : 'mt-4 px-3 py-2.5 text-xs sm:text-sm',
                )}
            >
                {plan.panelSummary}
            </p>

            <ul className={cn('flex flex-1 flex-col', isCompact ? 'mt-3 gap-1.5' : 'mt-5 gap-2.5')}>
                {plan.features.map((feature) => (
                    <li
                        key={feature}
                        className={cn(
                            'text-brand-navy flex items-start leading-snug',
                            isCompact ? 'gap-2 text-xs' : 'gap-2.5 text-sm',
                        )}
                    >
                        <span
                            className={cn(
                                'mt-0.5 inline-flex shrink-0 items-center justify-center rounded-full',
                                isCompact ? 'h-4 w-4' : 'h-5 w-5',
                                useMutedChecks ? 'bg-gray-200' : 'bg-brand-green',
                            )}
                        >
                            <Check
                                className={cn(
                                    isCompact ? 'h-2.5 w-2.5' : 'h-3 w-3',
                                    useMutedChecks ? 'text-gray-500' : 'text-white',
                                )}
                                strokeWidth={3}
                                aria-hidden
                            />
                        </span>
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            <div className={cn('mt-auto', isCompact ? 'pt-3' : 'pt-5')}>
                {isBusiness ? (
                    <ButtonWithArrow
                        href={href}
                        variant="green"
                        className={cn(
                            'w-full justify-center shadow-none',
                            isCompact && 'min-h-10 px-3 py-2 text-xs',
                        )}
                    >
                        {plan.ctaLabel}
                    </ButtonWithArrow>
                ) : (
                    <PlanOutlineCta
                        href={href}
                        label={plan.ctaLabel}
                        className={visual.outlineCta}
                        compact={isCompact}
                    />
                )}
            </div>
        </article>
    );
}
