import Breadcrumb from '@/components/website/Breadcrumb';
import ButtonWithArrow from '@/components/website/ButtonWithArrow';
import Container from '@/components/website/Container';
import SecondaryButton from '@/components/website/SecondaryButton';
import { PRICING_BENEFITS, PRICING_HERO, type PricingBenefitAccent } from '@/data/pricing';
import { pricingHeroAnimate, pricingMotionDelayStyle } from '@/lib/pricing-motion';
import { cn } from '@/lib/utils';
import { Check, Cog, Headphones, Shield, SlidersHorizontal } from 'lucide-react';
import type { LucideIcon } from 'react';
import type { CSSProperties } from 'react';

/** Fade subject into hero + swoosh — wide soft left edge (comp). */
const HERO_PHOTO_MASK: CSSProperties = {
    WebkitMaskImage: `
        linear-gradient(to right,
            transparent 0%,
            rgba(0,0,0,0.35) 12%,
            black 30%,
            black 100%
        ),
        linear-gradient(to bottom,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
        )
    `,
    maskImage: `
        linear-gradient(to right,
            transparent 0%,
            rgba(0,0,0,0.35) 12%,
            black 30%,
            black 100%
        ),
        linear-gradient(to bottom,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
        )
    `,
    WebkitMaskComposite: 'source-in',
    maskComposite: 'intersect',
};

/** Desktop: higher X pulls subject left in frame so face clears the Invest card on the right. */
const DESKTOP_PHOTO_POSITION = '68% 32%';

const STRIP_ICONS: LucideIcon[] = [Cog, SlidersHorizontal, Headphones, Shield];

const STRIP_ICON_RING: Record<PricingBenefitAccent, string> = {
    green: 'bg-brand-green text-white',
    blue: 'bg-brand-primary text-white',
    purple: 'bg-violet-600 text-white',
    orange: 'bg-orange-500 text-white',
};

function BenefitsCard({ className, style }: { className?: string; style?: CSSProperties }) {
    return (
        <aside
            className={cn(
                'w-full max-w-sm overflow-hidden rounded-2xl shadow-[0_16px_44px_-14px_rgba(23,36,59,0.32)] sm:max-w-[14.5rem]',
                className,
            )}
            style={style}
        >
            <div className="bg-brand-navy px-4 py-5 sm:px-5 sm:py-6">
                <p className="text-lg leading-[1.25] font-bold text-white sm:text-[1.15rem]">
                    Invest in a
                    <br />
                    Smarter Way
                    <br />
                    to Manage
                    <br />
                    Your Business.
                </p>
                <span className="bg-brand-green mt-3 block h-1 w-10 rounded-full" aria-hidden />
            </div>
            <ul className="space-y-3 bg-white px-4 py-5 sm:px-5">
                {PRICING_HERO.highlights.map((item) => (
                    <li key={item} className="text-brand-navy flex items-center gap-2.5 text-sm font-medium">
                        <span className="bg-brand-green inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full">
                            <Check className="h-3 w-3 text-white" strokeWidth={3} aria-hidden />
                        </span>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </aside>
    );
}

type HeroPhotographProps = {
    className?: string;
    style?: CSSProperties;
    objectPosition?: string;
    masked?: boolean;
};

function HeroPhotograph({ className, style, objectPosition, masked }: HeroPhotographProps) {
    const imgStyle: CSSProperties = {
        objectPosition: objectPosition ?? DESKTOP_PHOTO_POSITION,
        ...(masked ? HERO_PHOTO_MASK : {}),
    };

    return (
        <figure
            className={cn('relative h-full w-full', className)}
            style={style}
            aria-label={PRICING_HERO.heroPersonImageAlt}
        >
            <img
                src={PRICING_HERO.heroPhotograph}
                alt=""
                role="presentation"
                className="h-full w-full object-cover"
                style={imgStyle}
                decoding="async"
                fetchPriority="high"
            />
            {!masked ? (
                <div
                    className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#EFF7FF] via-[#EFF7FF]/70 to-transparent"
                    aria-hidden
                />
            ) : null}
        </figure>
    );
}

export default function PricingHero() {
    const breadcrumbs = [{ label: 'Home', href: route('home') }, { label: 'Pricing & Plans' }];
    return (
        <section className="relative isolate overflow-hidden bg-[#EFF7FF]">
            <div
                className="pointer-events-none absolute inset-0 bg-[#EFF7FF] bg-cover bg-[center_top] bg-no-repeat lg:bg-[right_center]"
                style={{ backgroundImage: `url('${PRICING_HERO.heroBackgroundImage}')` } as CSSProperties}
                aria-hidden
            />

            <Container className="relative z-10 pt-8 pb-6 sm:pt-10 sm:pb-8 lg:pt-11 lg:pb-6 xl:pb-8">
                <Breadcrumb items={breadcrumbs} className="text-muted-foreground mb-5 lg:mb-6" />

                <div
                        className="
                            relative grid gap-8
                            lg:min-h-[27rem]
                            lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]
                            lg:items-stretch
                            lg:gap-6
                            xl:min-h-[29rem]
                            xl:gap-8
                        "
                    >
                    <div className="order-1 min-w-0 text-left lg:max-w-xl lg:self-center">
                        <p
                            className={cn(
                                'bg-brand-green inline-flex w-fit rounded-full px-4 py-1.5 text-[11px] font-bold tracking-[0.14em] text-white uppercase',
                                pricingHeroAnimate('fade-up'),
                            )}
                            style={pricingMotionDelayStyle(0)}
                        >
                            {PRICING_HERO.eyebrow}
                        </p>
                        <h1
                            className={cn(
                                'text-brand-navy mt-5 text-[2rem] leading-[1.15] font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]',
                                pricingHeroAnimate('fade-up'),
                            )}
                            style={pricingMotionDelayStyle(90)}
                        >
                            Flexible Plans for
                            <br />
                            Businesses of <span className="text-brand-green">All Sizes.</span>
                        </h1>
                        <p
                            className={cn(
                                'text-muted-foreground mt-5 max-w-lg text-base leading-relaxed sm:text-lg',
                                pricingHeroAnimate('fade-up'),
                            )}
                            style={pricingMotionDelayStyle(180)}
                        >
                            {PRICING_HERO.description}
                        </p>
                        <div
                            className={cn(
                                'mt-8 flex flex-col gap-3 sm:flex-row sm:items-center',
                                pricingHeroAnimate('fade-up'),
                            )}
                            style={pricingMotionDelayStyle(270)}
                        >
                            <ButtonWithArrow href={route('book-demo')} nudgeArrowOnHover>
                                Book a Demo
                            </ButtonWithArrow>
                            <SecondaryButton
                                href={route('contact')}
                                className="border-gray-300 bg-white text-brand-navy shadow-none hover:border-gray-400 hover:bg-white"
                            >
                                Talk to Our Team
                            </SecondaryButton>
                        </div>
                    </div>

                    {/* Desktop hero visual — photo + Invest card share one positioned stack */}
                    <div className="relative order-2 hidden min-h-[27rem] lg:block xl:min-h-[29rem]">
                        <div
                            className={cn(
                                'pointer-events-none absolute inset-y-0 -left-14 right-28 -translate-x-2 xl:-left-20 xl:right-32 xl:-translate-x-4',
                                pricingHeroAnimate('fade-right'),
                            )}
                            style={pricingMotionDelayStyle(220)}
                        >
                            <HeroPhotograph className="h-full w-full" masked objectPosition={DESKTOP_PHOTO_POSITION} />
                        </div>
                        <BenefitsCard
                            className={cn(
                                'pointer-events-auto absolute top-6 right-0 z-30 xl:top-8 xl:-right-1',
                                pricingHeroAnimate('fade-in'),
                            )}
                            style={pricingMotionDelayStyle(420)}
                        />
                    </div>

                    <div
                        className={cn(
                            'order-2 lg:hidden',
                            pricingHeroAnimate('fade-right'),
                        )}
                        style={pricingMotionDelayStyle(180)}
                    >
                        <HeroPhotograph className="h-56 w-full overflow-hidden sm:h-72" objectPosition="48% 38%" />
                    </div>

                    <div
                        className={cn('order-3 lg:hidden', pricingHeroAnimate('fade-in'))}
                        style={pricingMotionDelayStyle(320)}
                    >
                        <BenefitsCard className="mx-auto mt-6 max-w-sm" />
                    </div>
                </div>
            </Container>

            <div className="relative z-20 -mt-4 lg:-mt-6" role="region" aria-label="Key pricing benefits">
                <Container>
                    <ul
                        className={cn(
                            'grid list-none gap-4 rounded-md bg-white/95 px-5 py-4 backdrop-blur-sm sm:grid-cols-2 sm:px-6 sm:py-5',
                            'shadow-[0_2px_18px_-10px_rgba(23,36,59,0.14)] lg:grid-cols-4 lg:gap-0',
                        )}
                    >
                        {PRICING_BENEFITS.map((benefit, index) => {
                            const Icon = STRIP_ICONS[index] ?? Cog;
                            const isLast = index === PRICING_BENEFITS.length - 1;
                            return (
                                <li
                                    key={benefit.title}
                                    className={cn(
                                        'flex items-center gap-2.5 sm:gap-3',
                                        !isLast && 'lg:border-r lg:border-gray-200/90 lg:pr-5',
                                        !isLast && 'lg:mr-5',
                                    )}
                                >
                                    <span
                                        className={cn(
                                            'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full sm:h-10 sm:w-10',
                                            STRIP_ICON_RING[benefit.accent],
                                        )}
                                    >
                                        <Icon className="h-[1.05rem] w-[1.05rem] sm:h-[1.15rem] sm:w-[1.15rem]" strokeWidth={2} aria-hidden />
                                    </span>
                                    <p className="text-brand-navy text-xs leading-snug font-semibold sm:text-[0.8125rem]">{benefit.title}</p>
                                </li>
                            );
                        })}
                    </ul>
                </Container>
            </div>

            <div className="h-5 sm:h-6 lg:h-8" aria-hidden />
        </section>
    );
}
