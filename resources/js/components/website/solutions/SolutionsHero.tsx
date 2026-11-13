import Breadcrumb from '@/components/website/Breadcrumb';
import ButtonWithArrow from '@/components/website/ButtonWithArrow';
import Container from '@/components/website/Container';
import HeroPhotograph from '@/components/website/marketing/HeroPhotograph';
import RevealOnView from '@/components/website/motion/RevealOnView';
import SecondaryButton from '@/components/website/SecondaryButton';
import {
    SOLUTIONS_HERO,
    SOLUTIONS_HERO_PILL_ICONS,
    SOLUTIONS_HERO_PILLS,
} from '@/data/solutions';
import { featureAccentSolidStyles } from '@/lib/feature-accents';
import { pricingHeroAnimate, pricingMotionDelayStyle } from '@/lib/pricing-motion';
import { cn } from '@/lib/utils';
import type { CSSProperties } from 'react';

const DESKTOP_PHOTO_POSITION = '58% 36%';
const MOBILE_PHOTO_POSITION = '62% 38%';
const PILL_STAGGER_MS = 70;

function IndustryFocusCard({ className, style }: { className?: string; style?: CSSProperties }) {
    return (
        <aside
            className={cn(
                'overflow-hidden rounded-2xl shadow-[0_16px_40px_-12px_rgba(23,36,59,0.38)]',
                className,
            )}
            style={style}
        >
            <div className="bg-brand-navy px-4 py-5 sm:px-5 sm:py-6">
                <p className="text-[1rem] leading-[1.3] font-bold text-white sm:text-[1.05rem]">
                    {SOLUTIONS_HERO.floatingCardLines.map((line) => (
                        <span key={line} className="block">
                            {line}
                        </span>
                    ))}
                </p>
                <span className="bg-brand-green mt-3 block h-1 w-10 rounded-full" aria-hidden />
            </div>
        </aside>
    );
}

export default function SolutionsHero() {
    const breadcrumbs = [{ label: 'Home', href: route('home') }, { label: 'Solutions' }];

    return (
        <section className="relative isolate overflow-hidden bg-[#EFF7FF]">
            <div
                className="pointer-events-none absolute inset-0 bg-[#EFF7FF] bg-cover bg-[center_top] bg-no-repeat opacity-50 lg:bg-[right_center] lg:opacity-45"
                style={{ backgroundImage: `url('${SOLUTIONS_HERO.heroBackgroundImage}')` } as CSSProperties}
                aria-hidden
            />

            <Container className="relative z-10 pt-6 pb-2 sm:pt-8 sm:pb-3 lg:pt-8 lg:pb-5">
                <div className={pricingHeroAnimate('fade-up')} style={pricingMotionDelayStyle(0)}>
                    <Breadcrumb items={breadcrumbs} className="text-muted-foreground mb-3 sm:mb-4 lg:mb-5" />
                </div>

                <div className="relative max-lg:pb-2 sm:max-lg:pb-3 lg:min-h-[21rem] xl:min-h-[23rem]">
                    <div
                        className={cn(
                            'pointer-events-none absolute z-[1] lg:hidden',
                            'top-0 right-0 bottom-0 sm:-bottom-2',
                            'left-[30%] -right-4 sm:left-[28%] sm:-right-5 md:left-[26%]',
                            pricingHeroAnimate('fade-right'),
                        )}
                        style={pricingMotionDelayStyle(220)}
                        aria-hidden
                    >
                        <HeroPhotograph
                            src={SOLUTIONS_HERO.heroPhotograph}
                            alt={SOLUTIONS_HERO.heroPhotographAlt}
                            className="h-full w-full"
                            masked
                            maskProfile="about-mobile"
                            objectPosition={MOBILE_PHOTO_POSITION}
                        />
                    </div>

                    <div className="relative z-20 w-full min-w-0 max-w-full pr-[38%] sm:pr-[36%] md:pr-[34%] lg:w-[48%] lg:max-w-[36rem] lg:pr-0 xl:max-w-[38rem]">
                        <div
                            className="pointer-events-none absolute -inset-x-3 -inset-y-1 -z-10 max-w-[calc(100%-2rem)] rounded-r-2xl bg-gradient-to-r from-[#EFF7FF] via-[#EFF7FF]/97 to-[#EFF7FF]/55 lg:hidden"
                            aria-hidden
                        />

                        <p
                            className={cn(
                                'bg-brand-green inline-flex w-fit rounded-full px-4 py-1.5 text-[11px] font-bold tracking-[0.14em] text-white uppercase',
                                pricingHeroAnimate('fade-up'),
                            )}
                            style={pricingMotionDelayStyle(0)}
                        >
                            {SOLUTIONS_HERO.eyebrow}
                        </p>

                        <h1
                            className={cn(
                                'text-brand-navy mt-3 font-bold tracking-tight',
                                'text-[1.65rem] leading-[1.14] sm:text-[2rem] sm:leading-[1.12]',
                                'lg:mt-4 lg:text-[2.55rem] lg:leading-[1.1] xl:text-[2.75rem]',
                                pricingHeroAnimate('fade-up'),
                            )}
                            style={pricingMotionDelayStyle(90)}
                        >
                            <span className="block">{SOLUTIONS_HERO.titleLine1}</span>
                            <span className="text-brand-green mt-0.5 block">{SOLUTIONS_HERO.titleAccent}</span>
                        </h1>

                        <p
                            className={cn(
                                'text-muted-foreground mt-3 max-w-xl text-sm leading-relaxed sm:text-[15px] lg:mt-4 lg:text-base',
                                pricingHeroAnimate('fade-up'),
                            )}
                            style={pricingMotionDelayStyle(160)}
                        >
                            {SOLUTIONS_HERO.description}
                        </p>

                        <div
                            className={cn(
                                'mt-4 flex flex-col gap-2 sm:mt-5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3',
                                pricingHeroAnimate('fade-up'),
                            )}
                            style={pricingMotionDelayStyle(240)}
                        >
                            <ButtonWithArrow href={route('book-demo')} nudgeArrowOnHover className="w-full sm:w-auto">
                                Book a Demo
                            </ButtonWithArrow>
                            <SecondaryButton
                                href={route('modules.index')}
                                className="w-full border-gray-300 bg-white text-brand-navy shadow-sm hover:border-gray-400 sm:w-auto"
                            >
                                {SOLUTIONS_HERO.exploreModulesLabel}
                            </SecondaryButton>
                        </div>
                    </div>

                    <div
                        className={cn(
                            'absolute inset-y-0 z-[1] hidden lg:block',
                            'left-[43%] right-[-1rem] xl:left-[42%]',
                            pricingHeroAnimate('fade-right'),
                        )}
                        style={pricingMotionDelayStyle(220)}
                    >
                        <div className="pointer-events-none relative h-full w-full">
                            <HeroPhotograph
                                src={SOLUTIONS_HERO.heroPhotograph}
                                alt={SOLUTIONS_HERO.heroPhotographAlt}
                                className="h-full w-full"
                                masked
                                maskProfile="about"
                                objectPosition={DESKTOP_PHOTO_POSITION}
                            />
                        </div>

                        <IndustryFocusCard
                            className={cn(
                                'pointer-events-auto absolute right-3 top-[32%] z-30',
                                'w-[11.5rem] xl:right-5 xl:w-[12.5rem]',
                                pricingHeroAnimate('fade-in'),
                            )}
                            style={pricingMotionDelayStyle(420)}
                        />
                    </div>

                    <ul
                        className={cn(
                            'relative z-20 mt-5 grid list-none grid-cols-3 gap-1.5 sm:mt-6 sm:gap-2.5 lg:absolute lg:bottom-2 lg:left-[46%] lg:mt-0 lg:max-w-[34rem] lg:gap-3',
                            'max-lg:w-[calc(100%/0.62)] sm:max-lg:w-[calc(100%/0.64)] md:max-lg:w-[calc(100%/0.66)]',
                        )}
                        role="list"
                    >
                        {SOLUTIONS_HERO_PILLS.map((pill, index) => {
                            const Icon = SOLUTIONS_HERO_PILL_ICONS[index] ?? SOLUTIONS_HERO_PILL_ICONS[0];

                            return (
                                <RevealOnView
                                    key={pill.title}
                                    as="li"
                                    delayMs={280 + index * PILL_STAGGER_MS}
                                    className={cn(
                                        'flex min-w-0 flex-col items-center gap-1.5 rounded-xl border border-slate-100 bg-white px-1.5 py-2.5 text-center shadow-lg sm:flex-row sm:items-start sm:gap-2 sm:px-2.5 sm:py-3 sm:text-left md:gap-3 md:px-3 lg:min-h-[4.25rem]',
                                    )}
                                >
                                    <span
                                        className={cn(
                                            'flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white sm:h-8 sm:w-8 md:h-9 md:w-9',
                                            featureAccentSolidStyles[pill.accent],
                                        )}
                                    >
                                        <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-[1.05rem] md:w-[1.05rem]" strokeWidth={2.25} aria-hidden />
                                    </span>
                                    <div className="min-w-0 sm:pt-0.5">
                                        <p className="text-brand-navy text-[10px] font-bold leading-tight sm:text-[11px] md:text-xs">
                                            {pill.title}
                                        </p>
                                        <p className="text-muted-foreground mt-0.5 text-[9px] leading-snug sm:text-[10px] md:text-[11px]">
                                            {pill.subtitle}
                                        </p>
                                    </div>
                                </RevealOnView>
                            );
                        })}
                    </ul>
                </div>
            </Container>
        </section>
    );
}
