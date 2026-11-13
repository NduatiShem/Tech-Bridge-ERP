import Breadcrumb from '@/components/website/Breadcrumb';
import ButtonWithArrow from '@/components/website/ButtonWithArrow';
import Container from '@/components/website/Container';
import HeroPhotograph from '@/components/website/marketing/HeroPhotograph';
import RevealOnView from '@/components/website/motion/RevealOnView';
import SecondaryButton from '@/components/website/SecondaryButton';
import { ABOUT_ACCENT_BG, ABOUT_HERO, ABOUT_HERO_PILLS } from '@/data/about';
import { pricingHeroAnimate, pricingMotionDelayStyle } from '@/lib/pricing-motion';
import { cn } from '@/lib/utils';
import { LineChart, Settings, Users } from 'lucide-react';
import type { CSSProperties } from 'react';

const DESKTOP_PHOTO_POSITION = 'center center';
const MOBILE_PHOTO_POSITION = '52% center';
const PILL_ICONS = [Users, Settings, LineChart];
const PILL_STAGGER_MS = 70;

function SmarterTomorrowCard({ className, style }: { className?: string; style?: CSSProperties }) {
    return (
        <aside
            className={cn(
                'overflow-hidden rounded-2xl shadow-[0_16px_40px_-12px_rgba(23,36,59,0.38)]',
                className,
            )}
            style={style}
        >
            <div className="bg-brand-navy px-4 py-5">
                <p className="text-[0.98rem] leading-[1.28] font-bold text-white">
                    {ABOUT_HERO.floatingCardLines.map((line) => (
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

export default function AboutHero() {
    const breadcrumbs = [{ label: 'Home', href: route('home') }, { label: 'About Us' }];

    return (
        <section className="relative isolate overflow-hidden bg-[#EFF7FF]">
            <div
                className="pointer-events-none absolute inset-0 bg-[#EFF7FF] bg-cover bg-[center_top] bg-no-repeat opacity-50 lg:bg-[right_center] lg:opacity-40"
                style={{ backgroundImage: `url('${ABOUT_HERO.heroBackgroundImage}')` } as CSSProperties}
                aria-hidden
            />

            <Container className="relative z-10 pt-6 pb-2 sm:pt-8 sm:pb-3 lg:pt-9 lg:pb-1">
                <Breadcrumb items={breadcrumbs} className="text-muted-foreground mb-3 sm:mb-4 lg:mb-5" />

                <div className="relative max-lg:pb-4 sm:max-lg:pb-5 lg:min-h-[19rem] xl:min-h-[21rem]">
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
                            src={ABOUT_HERO.heroPhotograph}
                            alt={ABOUT_HERO.heroPhotographAlt}
                            className="h-full w-full"
                            masked
                            maskProfile="about-mobile"
                            objectPosition={MOBILE_PHOTO_POSITION}
                        />
                    </div>

                    <div className="relative z-20 w-full min-w-0 max-w-full pr-[38%] sm:pr-[36%] md:pr-[34%] lg:w-[53%] lg:max-w-[39rem] lg:pr-0">
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
                            {ABOUT_HERO.eyebrow}
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
                            <span className="block">{ABOUT_HERO.titleLine1}</span>
                            <span className="text-brand-green mt-0.5 block">{ABOUT_HERO.titleAccent}</span>
                        </h1>

                        <p
                            className={cn(
                                'text-muted-foreground mt-3 max-w-[16.25rem] text-sm leading-relaxed',
                                'sm:mt-3.5 sm:max-w-md sm:text-base',
                                'max-lg:text-brand-navy/80',
                                'lg:max-w-lg',
                                pricingHeroAnimate('fade-up'),
                            )}
                            style={pricingMotionDelayStyle(180)}
                        >
                            {ABOUT_HERO.description}
                        </p>

                        <div
                            className={cn(
                                'mt-4 flex flex-row flex-nowrap items-center gap-1.5 max-lg:relative max-lg:z-20 sm:mt-5 sm:gap-2 lg:flex-wrap lg:gap-3',
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
                                href={route('modules.index')}
                                className="border-gray-300 bg-white text-brand-navy shadow-none hover:border-gray-400 hover:bg-white max-lg:min-h-10 max-lg:shrink-0 max-lg:px-3 max-lg:py-2 max-lg:text-xs"
                            >
                                {ABOUT_HERO.exploreModulesLabel}
                            </SecondaryButton>
                        </div>
                    </div>

                    <div
                        className={cn(
                            'absolute z-[1] hidden lg:block',
                            'top-[-1rem] bottom-[-2rem]',
                            'left-[38%] -right-6 xl:left-[36%]',
                            pricingHeroAnimate('fade-right'),
                        )}
                        style={pricingMotionDelayStyle(220)}
                    >
                        <HeroPhotograph
                            src={ABOUT_HERO.heroPhotograph}
                            alt={ABOUT_HERO.heroPhotographAlt}
                            className="h-full w-full"
                            masked
                            maskProfile="about"
                            objectPosition={DESKTOP_PHOTO_POSITION}
                        />
                        <SmarterTomorrowCard
                            className={cn(
                                'pointer-events-auto absolute top-[35%] -right-12 z-30 w-[11.5rem] xl:-right-16 xl:w-[12rem]',
                                pricingHeroAnimate('fade-in'),
                            )}
                            style={pricingMotionDelayStyle(420)}
                        />
                    </div>
                </div>
            </Container>

            <div
                className="relative z-20 mt-3 max-lg:mt-4 sm:max-lg:mt-5 lg:-mt-10 xl:-mt-12"
                role="region"
                aria-label="About highlights"
            >
                <Container>
                    <ul className="grid list-none grid-cols-3 gap-2 sm:gap-3 lg:ml-auto lg:w-[64%] lg:gap-3">
                        {ABOUT_HERO_PILLS.map((pill, index) => {
                            const Icon = PILL_ICONS[index] ?? Users;

                            return (
                                <RevealOnView
                                    key={pill.title}
                                    as="li"
                                    className={cn(
                                        'flex min-w-0 items-center gap-2 rounded-xl border border-slate-100 bg-white px-2 py-3 shadow-lg',
                                        'sm:gap-3 sm:px-4 lg:min-h-[4.5rem]',
                                    )}
                                    delayMs={320 + index * PILL_STAGGER_MS}
                                    variant="fade-in"
                                >
                                    <span
                                        className={cn(
                                            'flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white sm:h-10 sm:w-10',
                                            ABOUT_ACCENT_BG[pill.accent],
                                        )}
                                    >
                                        <Icon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2.25} aria-hidden />
                                    </span>
                                    <p className="text-brand-navy text-[10px] leading-tight font-semibold sm:text-xs lg:text-sm">
                                        {pill.title}
                                    </p>
                                </RevealOnView>
                            );
                        })}
                    </ul>
                </Container>
            </div>

            <div className="h-3 sm:h-4 lg:h-6" aria-hidden />
        </section>
    );
}
