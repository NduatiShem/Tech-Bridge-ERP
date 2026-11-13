import Breadcrumb from '@/components/website/Breadcrumb';
import Container from '@/components/website/Container';
import HeroPhotograph from '@/components/website/marketing/HeroPhotograph';
import RevealOnView from '@/components/website/motion/RevealOnView';
import {
    REQUEST_QUOTE_ACCENT_BG,
    REQUEST_QUOTE_HERO,
    REQUEST_QUOTE_HERO_PILLS,
} from '@/data/request-quote';
import { pricingHeroAnimate, pricingMotionDelayStyle } from '@/lib/pricing-motion';
import { cn } from '@/lib/utils';
import { BadgeDollarSign, Headphones, SlidersHorizontal, Timer } from 'lucide-react';
import type { CSSProperties } from 'react';

/** About-style framing; focal point slightly right so couple clears copy (About uses center center). */
const DESKTOP_PHOTO_POSITION = '64% center';
const MOBILE_PHOTO_POSITION = '58% center';
const PILL_ICONS = [SlidersHorizontal, BadgeDollarSign, Headphones, Timer];
const PILL_STAGGER_MS = 70;

function SolutionCard({ className, style }: { className?: string; style?: CSSProperties }) {
    return (
        <aside
            className={cn(
                'overflow-hidden rounded-2xl shadow-[0_16px_40px_-12px_rgba(34,164,71,0.35)]',
                className,
            )}
            style={style}
        >
            <div className="bg-brand-green px-4 py-5 sm:px-5 sm:py-6">
                <p className="text-[1rem] leading-[1.3] font-bold text-white sm:text-[1.05rem]">
                    {REQUEST_QUOTE_HERO.floatingCardLines.map((line) => (
                        <span key={line} className="block">
                            {line}
                        </span>
                    ))}
                </p>
                <span className="mt-3 block h-1 w-10 rounded-full bg-white/90" aria-hidden />
            </div>
        </aside>
    );
}

function HeroPills() {
    return (
        <ul
            className="relative z-20 mt-5 grid list-none grid-cols-2 gap-2 sm:mt-6 sm:gap-3 lg:mt-7 lg:max-w-[40rem] lg:grid-cols-4 lg:gap-2.5"
            role="list"
        >
            {REQUEST_QUOTE_HERO_PILLS.map((pill, index) => {
                const Icon = PILL_ICONS[index] ?? SlidersHorizontal;

                return (
                    <RevealOnView
                        key={pill.title}
                        as="li"
                        className={cn(
                            'flex min-w-0 items-center gap-2 rounded-xl border border-slate-100 bg-white px-2 py-3 shadow-lg',
                            'sm:gap-3 sm:px-3 lg:min-h-[4.25rem] lg:px-3.5',
                        )}
                        delayMs={240 + index * PILL_STAGGER_MS}
                        variant="fade-in"
                    >
                        <span
                            className={cn(
                                'flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white sm:h-9 sm:w-9',
                                REQUEST_QUOTE_ACCENT_BG[pill.accent],
                            )}
                        >
                            <Icon className="h-4 w-4 sm:h-[1.05rem] sm:w-[1.05rem]" strokeWidth={2.25} aria-hidden />
                        </span>
                        <p className="text-brand-navy text-[10px] leading-tight font-semibold sm:text-[11px] lg:text-xs">
                            {pill.title}
                        </p>
                    </RevealOnView>
                );
            })}
        </ul>
    );
}

export default function RequestQuoteHero() {
    const breadcrumbs = [{ label: 'Home', href: route('home') }, { label: 'Request a Quote' }];

    return (
        <section className="relative isolate overflow-hidden bg-[#EFF7FF]">
            <div
                className="pointer-events-none absolute inset-0 bg-[#EFF7FF] bg-cover bg-[center_top] bg-no-repeat opacity-50 lg:bg-[right_center] lg:opacity-45"
                style={{ backgroundImage: `url('${REQUEST_QUOTE_HERO.heroBackgroundImage}')` } as CSSProperties}
                aria-hidden
            />

            <Container className="relative z-10 pt-6 pb-6 sm:pt-8 sm:pb-8 lg:pt-9 lg:pb-10">
                <Breadcrumb items={breadcrumbs} className="text-muted-foreground mb-3 sm:mb-4 lg:mb-5" />

                <div className="relative max-lg:pb-4 sm:max-lg:pb-5 lg:min-h-[21rem] xl:min-h-[23rem]">
                    <div
                        className={cn(
                            'pointer-events-none absolute z-[1] lg:hidden',
                            'top-0 right-0 bottom-0 sm:-bottom-3',
                            'left-[28%] sm:left-[24%] md:left-[20%]',
                            pricingHeroAnimate('fade-right'),
                        )}
                        style={pricingMotionDelayStyle(220)}
                    >
                        <HeroPhotograph
                            src={REQUEST_QUOTE_HERO.heroPhotograph}
                            alt={REQUEST_QUOTE_HERO.heroPhotographAlt}
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
                            {REQUEST_QUOTE_HERO.eyebrow}
                        </p>

                        <h1
                            className={cn(
                                'text-brand-navy mt-3 max-w-[16.75rem] font-bold tracking-tight',
                                'text-[1.65rem] leading-[1.14] sm:max-w-none sm:text-[2rem] sm:leading-[1.12]',
                                'lg:mt-4 lg:max-w-none lg:text-[2.65rem] lg:leading-[1.1] xl:text-[2.85rem]',
                                pricingHeroAnimate('fade-up'),
                            )}
                            style={pricingMotionDelayStyle(90)}
                        >
                            <span className="block">{REQUEST_QUOTE_HERO.titleLine1}</span>
                            <span className="text-brand-green mt-0.5 block">{REQUEST_QUOTE_HERO.titleAccent}</span>
                        </h1>

                        <p
                            className={cn(
                                'text-muted-foreground mt-3 max-w-[16.25rem] text-sm leading-relaxed',
                                'sm:mt-3.5 sm:max-w-md sm:text-base max-lg:text-brand-navy/80',
                                'lg:max-w-lg',
                                pricingHeroAnimate('fade-up'),
                            )}
                            style={pricingMotionDelayStyle(180)}
                        >
                            {REQUEST_QUOTE_HERO.description}
                        </p>

                        <HeroPills />
                    </div>

                    <div
                        className={cn(
                            'absolute z-[1] hidden lg:block',
                            'top-[-1rem] bottom-[-2rem]',
                            'left-[40%] -right-6 xl:left-[38%]',
                            pricingHeroAnimate('fade-right'),
                        )}
                        style={pricingMotionDelayStyle(220)}
                    >
                        <HeroPhotograph
                            src={REQUEST_QUOTE_HERO.heroPhotograph}
                            alt={REQUEST_QUOTE_HERO.heroPhotographAlt}
                            className="h-full w-full"
                            masked
                            maskProfile="about"
                            objectPosition={DESKTOP_PHOTO_POSITION}
                        />
                        <SolutionCard
                            className={cn(
                                'pointer-events-auto absolute top-[35%] -right-12 z-30 w-[11.5rem] xl:-right-16 xl:w-[12rem]',
                                pricingHeroAnimate('fade-in'),
                            )}
                            style={pricingMotionDelayStyle(420)}
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
}
