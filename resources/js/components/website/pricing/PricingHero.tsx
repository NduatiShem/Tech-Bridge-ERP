import Breadcrumb from '@/components/website/Breadcrumb';
import ButtonWithArrow from '@/components/website/ButtonWithArrow';
import Container from '@/components/website/Container';
import HeroPhotograph from '@/components/website/marketing/HeroPhotograph';
import SecondaryButton from '@/components/website/SecondaryButton';
import { PRICING_BENEFITS, PRICING_HERO, type PricingBenefitAccent } from '@/data/pricing';
import { pricingHeroAnimate, pricingMotionDelayStyle } from '@/lib/pricing-motion';
import { cn } from '@/lib/utils';
import { Check, Cog, Headphones, Shield, SlidersHorizontal } from 'lucide-react';
import type { LucideIcon } from 'react';
import type { CSSProperties } from 'react';

/** Desktop: higher X pulls subject left in frame so face clears the Invest card on the right. */
const DESKTOP_PHOTO_POSITION = '68% 32%';

/** Mobile / tablet: anchor face + tablet on the right for overlap with Invest card. */
const MOBILE_PHOTO_POSITION = '56% 24%';

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
                'max-lg:max-w-[12rem] max-lg:rounded-xl max-lg:shadow-[0_12px_32px_-12px_rgba(23,36,59,0.28)]',
                className,
            )}
            style={style}
        >
            <div className="bg-brand-navy px-4 py-5 max-lg:px-3 max-lg:py-3.5 sm:px-5 sm:py-6">
                <p className="text-lg leading-[1.25] font-bold text-white max-lg:text-[0.95rem] max-lg:leading-snug sm:text-[1.15rem]">
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
            <ul className="space-y-2.5 bg-white px-4 py-4 max-lg:space-y-2 max-lg:px-3 max-lg:py-3 sm:px-5 sm:py-5">
                {PRICING_HERO.highlights.map((item) => (
                    <li key={item} className="text-brand-navy flex items-center gap-2 text-sm font-medium max-lg:gap-1.5 max-lg:text-xs">
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

export default function PricingHero() {
    const breadcrumbs = [{ label: 'Home', href: route('home') }, { label: 'Pricing & Plans' }];
    return (
        <section className="relative isolate overflow-hidden bg-[#EFF7FF]">
            <div
                className="pointer-events-none absolute inset-0 bg-[#EFF7FF] bg-cover bg-[center_top] bg-no-repeat lg:bg-[right_center]"
                style={{ backgroundImage: `url('${PRICING_HERO.heroBackgroundImage}')` } as CSSProperties}
                aria-hidden
            />

            <Container className="relative z-10 pt-6 pb-3 sm:pt-8 sm:pb-4 lg:pt-11 lg:pb-6 xl:pb-8">
                <Breadcrumb items={breadcrumbs} className="text-muted-foreground mb-3 max-lg:mb-2.5 lg:mb-6" />

                <div
                    className="
                        relative grid gap-0
                        max-lg:min-h-[21.5rem] max-lg:pb-1
                        sm:max-lg:min-h-[23rem]
                        md:max-lg:min-h-[24.5rem]
                        lg:min-h-[27rem]
                        lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]
                        lg:items-stretch
                        lg:gap-6
                        xl:min-h-[29rem]
                        xl:gap-8
                    "
                >
                    {/* Mobile / tablet — masked photo only (Invest card hidden below lg) */}
                    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden lg:hidden">
                        <div
                            className={cn(
                                'absolute inset-y-0 left-[30%] right-0 sm:left-[24%] md:left-[18%]',
                                pricingHeroAnimate('fade-right'),
                            )}
                            style={pricingMotionDelayStyle(220)}
                        >
                            <HeroPhotograph
                                src={PRICING_HERO.heroPhotograph}
                                alt={PRICING_HERO.heroPersonImageAlt}
                                className="h-full w-full"
                                masked
                                objectPosition={MOBILE_PHOTO_POSITION}
                            />
                        </div>
                    </div>

                    <div className="relative z-10 order-1 min-w-0 text-left lg:max-w-xl lg:self-center">
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
                                'text-brand-navy mt-3 max-w-[17.5rem] text-[1.65rem] leading-[1.12] font-bold tracking-tight sm:max-w-none sm:text-[1.85rem] md:text-3xl lg:mt-5 lg:max-w-none lg:text-[2.75rem] lg:leading-[1.12]',
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
                                'text-muted-foreground mt-2.5 max-w-[19rem] text-sm leading-snug sm:mt-3 sm:max-w-md sm:text-base sm:leading-relaxed lg:mt-5 lg:max-w-lg lg:text-lg',
                                pricingHeroAnimate('fade-up'),
                            )}
                            style={pricingMotionDelayStyle(180)}
                        >
                            {PRICING_HERO.description}
                        </p>
                        <div
                            className={cn(
                                'mt-4 flex flex-row flex-wrap items-center gap-2 max-lg:relative max-lg:z-20 lg:mt-8 lg:gap-3',
                                pricingHeroAnimate('fade-up'),
                            )}
                            style={pricingMotionDelayStyle(270)}
                        >
                            <ButtonWithArrow
                                href={route('book-demo')}
                                nudgeArrowOnHover
                                className="max-lg:min-h-10 max-lg:shrink-0 max-lg:px-3.5 max-lg:py-2 max-lg:text-xs"
                            >
                                Book a Demo
                            </ButtonWithArrow>
                            <SecondaryButton
                                href={route('contact')}
                                className="border-gray-300 bg-white text-brand-navy shadow-none hover:border-gray-400 hover:bg-white max-lg:min-h-10 max-lg:shrink-0 max-lg:px-3 max-lg:py-2 max-lg:text-xs"
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
                            <HeroPhotograph
                                src={PRICING_HERO.heroPhotograph}
                                alt={PRICING_HERO.heroPersonImageAlt}
                                className="h-full w-full"
                                masked
                                objectPosition={DESKTOP_PHOTO_POSITION}
                            />
                        </div>
                        <BenefitsCard
                            className={cn(
                                'pointer-events-auto absolute top-6 right-0 z-30 xl:top-8 xl:-right-1',
                                pricingHeroAnimate('fade-in'),
                            )}
                            style={pricingMotionDelayStyle(420)}
                        />
                    </div>
                </div>
            </Container>

            <div className="relative z-20 max-lg:-mt-1 lg:-mt-6" role="region" aria-label="Key pricing benefits">
                <Container className="max-lg:px-3 sm:max-lg:px-4">
                    <ul
                        className={cn(
                            'grid list-none grid-cols-4 gap-0 rounded-t-2xl rounded-b-md bg-white/95 px-2 py-3 backdrop-blur-sm',
                            'shadow-[0_2px_18px_-10px_rgba(23,36,59,0.14)] sm:px-3 sm:py-3.5 lg:rounded-md lg:px-6 lg:py-5',
                        )}
                    >
                        {PRICING_BENEFITS.map((benefit, index) => {
                            const Icon = STRIP_ICONS[index] ?? Cog;
                            const isLast = index === PRICING_BENEFITS.length - 1;
                            return (
                                <li
                                    key={benefit.title}
                                    className={cn(
                                        'flex min-w-0 flex-col items-center gap-1 px-1 text-center sm:gap-1.5 lg:flex-row lg:items-center lg:gap-3 lg:px-0 lg:text-left',
                                        !isLast && 'border-r border-gray-200/85 lg:pr-5',
                                        !isLast && 'lg:mr-5',
                                    )}
                                >
                                    <span
                                        className={cn(
                                            'inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full sm:h-8 sm:w-8 lg:h-10 lg:w-10',
                                            STRIP_ICON_RING[benefit.accent],
                                        )}
                                    >
                                        <Icon
                                            className="h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-[1.15rem] lg:w-[1.15rem]"
                                            strokeWidth={2}
                                            aria-hidden
                                        />
                                    </span>
                                    <p className="text-brand-navy text-[0.625rem] leading-tight font-semibold sm:text-[0.6875rem] lg:text-[0.8125rem] lg:leading-snug">
                                        {benefit.title}
                                    </p>
                                </li>
                            );
                        })}
                    </ul>
                </Container>
            </div>

            <div className="h-3 sm:h-4 lg:h-8" aria-hidden />
        </section>
    );
}
