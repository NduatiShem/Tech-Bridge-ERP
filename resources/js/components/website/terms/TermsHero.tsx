import Breadcrumb from '@/components/website/Breadcrumb';
import Container from '@/components/website/Container';
import HeroPhotograph from '@/components/website/marketing/HeroPhotograph';
import { TERMS_HERO } from '@/data/terms-of-service';
import { pricingHeroAnimate, pricingMotionDelayStyle } from '@/lib/pricing-motion';
import { cn } from '@/lib/utils';
import type { CSSProperties } from 'react';

/** Wide hero — keep laptop and holographic icons in the masked lane. */
const DESKTOP_PHOTO_POSITION = '52% 42%';
const MOBILE_PHOTO_POSITION = '68% 40%';

function LegalCard({ className, style }: { className?: string; style?: CSSProperties }) {
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
                    {TERMS_HERO.floatingCardLines.map((line) => (
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

export default function TermsHero() {
    const breadcrumbs = [{ label: 'Home', href: route('home') }, { label: 'Terms of Service' }];

    return (
        <section className="relative isolate overflow-hidden bg-[#EFF7FF]">
            <div
                className="pointer-events-none absolute inset-0 bg-[#EFF7FF] bg-cover bg-[center_top] bg-no-repeat opacity-50 lg:bg-[right_center] lg:opacity-45"
                style={{ backgroundImage: `url('${TERMS_HERO.heroBackgroundImage}')` } as CSSProperties}
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
                            src={TERMS_HERO.heroPhotograph}
                            alt={TERMS_HERO.heroPhotographAlt}
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
                            {TERMS_HERO.eyebrow}
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
                            <span className="lg:whitespace-nowrap">
                                {TERMS_HERO.titleLine1}{' '}
                                <span className="text-brand-green">{TERMS_HERO.titleAccent}</span>
                            </span>
                        </h1>

                        <p
                            className={cn(
                                'text-muted-foreground mt-3 max-w-xl text-sm leading-relaxed sm:text-[15px] lg:mt-4 lg:text-base lg:leading-relaxed',
                                pricingHeroAnimate('fade-up'),
                            )}
                            style={pricingMotionDelayStyle(160)}
                        >
                            {TERMS_HERO.description}
                        </p>

                        <p
                            className={cn(
                                'text-muted-foreground/90 mt-3 text-xs sm:text-[13px]',
                                pricingHeroAnimate('fade-up'),
                            )}
                            style={pricingMotionDelayStyle(200)}
                        >
                            Last updated:{' '}
                            <time dateTime="2026-10-15" className="font-medium text-slate-600">
                                {TERMS_HERO.lastUpdated}
                            </time>
                        </p>
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
                                src={TERMS_HERO.heroPhotograph}
                                alt={TERMS_HERO.heroPhotographAlt}
                                className="h-full w-full"
                                masked
                                maskProfile="about"
                                objectPosition={DESKTOP_PHOTO_POSITION}
                            />
                        </div>

                        <LegalCard
                            className={cn(
                                'pointer-events-auto absolute right-3 top-[32%] z-30',
                                'w-[11.5rem] xl:right-5 xl:w-[12rem]',
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
