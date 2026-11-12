import Breadcrumb from '@/components/website/Breadcrumb';
import Container from '@/components/website/Container';
import HeroPhotograph from '@/components/website/marketing/HeroPhotograph';
import PrimaryButton from '@/components/website/PrimaryButton';
import { FAQS_SUPPORT_HERO } from '@/data/faqs-support';
import { pricingHeroAnimate, pricingMotionDelayStyle } from '@/lib/pricing-motion';
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';
import type { ComponentPropsWithoutRef, CSSProperties, FormEvent } from 'react';

const DESKTOP_PHOTO_POSITION = '62% 34%';
const MOBILE_PHOTO_POSITION = '74% 32%';

type FaqsSupportHeroProps = {
    searchQuery: string;
    onSearchQueryChange: (value: string) => void;
    onSubmitSearch: () => void;
};

function SupportTodayCard({
    className,
    style,
    ...rest
}: { className?: string; style?: CSSProperties } & ComponentPropsWithoutRef<'aside'>) {
    return (
        <aside
            {...rest}
            className={cn(
                'w-[13.75rem] overflow-hidden rounded-2xl shadow-[0_16px_40px_-12px_rgba(23,36,59,0.38)]',
                className,
            )}
            style={style}
        >
            <div className="bg-brand-navy px-5 py-6">
                <p className="text-[1.05rem] leading-[1.28] font-bold text-white xl:text-[1.12rem]">
                    {FAQS_SUPPORT_HERO.supportCardLines.map((line) => (
                        <span key={line} className="block">
                            {line}
                        </span>
                    ))}
                </p>
                <span className="bg-brand-green mt-4 block h-1 w-10 rounded-full" aria-hidden />
            </div>
        </aside>
    );
}

function FaqSearchForm({
    searchQuery,
    onSearchQueryChange,
    onSubmit,
    variant,
    className,
    style,
}: {
    searchQuery: string;
    onSearchQueryChange: (value: string) => void;
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
    variant: 'stacked' | 'inline';
    className?: string;
    style?: CSSProperties;
}) {
    const inputId = 'faqs-hero-search';

    if (variant === 'stacked') {
        return (
            <form
                onSubmit={onSubmit}
                className={cn('w-full min-w-0', className)}
                style={style}
                role="search"
                aria-label="Search FAQs"
            >
                <h2 className="sr-only">Search FAQs</h2>
                <div className="flex w-full min-w-0 flex-col gap-2.5">
                    <label htmlFor={inputId} className="sr-only">
                        Search FAQs
                    </label>
                    <div
                        className={cn(
                            'border-brand-primary/12 flex w-full min-w-0 items-center gap-2 rounded-xl border bg-white',
                            'px-3 py-2.5 shadow-[0_2px_12px_rgba(15,23,42,0.06)]',
                            'min-h-11',
                        )}
                    >
                        <Search className="text-muted-foreground h-5 w-5 shrink-0" aria-hidden />
                        <input
                            id={inputId}
                            type="search"
                            value={searchQuery}
                            onChange={(e) => onSearchQueryChange(e.target.value)}
                            placeholder={FAQS_SUPPORT_HERO.searchPlaceholder}
                            className="placeholder:text-muted-foreground min-w-0 flex-1 border-0 bg-transparent text-sm text-slate-800 focus-visible:outline-none"
                        />
                    </div>
                    <PrimaryButton
                        type="submit"
                        className="flex h-11 min-h-11 w-full justify-center rounded-xl px-6 text-sm font-semibold"
                    >
                        Search
                    </PrimaryButton>
                </div>
            </form>
        );
    }

    return (
        <form
            onSubmit={onSubmit}
            className={cn('w-full min-w-0 max-w-full', className)}
            style={style}
            role="search"
            aria-label="Search FAQs"
        >
            <h2 className="sr-only">Search FAQs</h2>
            {/*
             * Mockup: one white pill — icon + field + navy button inside the same rounded container
             * (not a separate button row or an input that bleeds under the hero photo).
             */}
            <div
                className={cn(
                    'border-brand-primary/12 box-border flex w-full max-w-full min-w-0 items-center gap-2',
                    'overflow-hidden rounded-xl border bg-white p-1.5',
                    'shadow-[0_2px_12px_rgba(15,23,42,0.06)]',
                    'min-h-[3.25rem] lg:min-h-14',
                )}
            >
                <label htmlFor={`${inputId}-inline`} className="sr-only">
                    Search FAQs
                </label>
                <Search className="text-muted-foreground ml-1 h-5 w-5 shrink-0 lg:ml-1.5" aria-hidden />
                <input
                    id={`${inputId}-inline`}
                    type="search"
                    value={searchQuery}
                    onChange={(e) => onSearchQueryChange(e.target.value)}
                    placeholder={FAQS_SUPPORT_HERO.searchPlaceholder}
                    className="placeholder:text-muted-foreground min-h-10 min-w-0 flex-1 border-0 bg-transparent py-2 text-sm text-slate-800 focus-visible:outline-none lg:text-[0.9375rem]"
                />
                <PrimaryButton
                    type="submit"
                    className="!min-h-10 h-10 shrink-0 rounded-lg px-4 text-sm font-semibold lg:!min-h-11 lg:h-11 lg:px-6"
                >
                    Search
                </PrimaryButton>
            </div>
        </form>
    );
}

export default function FaqsSupportHero({ searchQuery, onSearchQueryChange, onSubmitSearch }: FaqsSupportHeroProps) {
    const breadcrumbs = [
        { label: 'Home', href: route('home') },
        { label: 'Support', href: route('faqs') },
        { label: 'FAQs' },
    ];

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        onSubmitSearch();
    }

    return (
        <section className="relative isolate overflow-hidden bg-[#EFF7FF]">
            <div
                className="pointer-events-none absolute inset-0 bg-[#EFF7FF] bg-cover bg-[center_top] bg-no-repeat lg:bg-[right_center]"
                style={{ backgroundImage: `url('${FAQS_SUPPORT_HERO.heroBackgroundImage}')` } as CSSProperties}
                aria-hidden
            />

            <Container className="relative z-10 pt-6 pb-4 sm:pt-8 sm:pb-5 lg:pt-11 lg:pb-8">
                <Breadcrumb items={breadcrumbs} className="text-muted-foreground relative z-20 mb-3 sm:mb-4 lg:mb-6" />

                <div className="relative min-h-[23.5rem] sm:min-h-[25rem] md:min-h-[26.5rem] lg:min-h-[29rem] xl:min-h-[31rem]">
                    {/*
                     * Mobile / tablet (< lg): integrated hero — subject on the right, copy + search on the left
                     * (matches comp — not a short clipped band between text and search).
                     */}
                    <div
                        className={cn(
                            'pointer-events-none absolute inset-y-0 z-[1] lg:hidden',
                            'left-[34%] -right-4 sm:left-[32%] sm:-right-5 md:left-[30%]',
                            pricingHeroAnimate('fade-right'),
                        )}
                        style={pricingMotionDelayStyle(220)}
                        aria-hidden
                    >
                        <HeroPhotograph
                            src={FAQS_SUPPORT_HERO.heroPhotograph}
                            alt=""
                            className="h-full w-full"
                            masked
                            maskProfile="support-mobile"
                            objectPosition={MOBILE_PHOTO_POSITION}
                        />
                    </div>

                    <div className="relative z-20 w-full min-w-0 max-w-full pr-[38%] sm:pr-[36%] md:pr-[34%] lg:w-[52%] lg:max-w-[38rem] lg:pr-0">
                        <p
                            className={cn(
                                'bg-brand-green inline-flex w-fit rounded-full px-4 py-1.5 text-[11px] font-bold tracking-[0.14em] text-white uppercase',
                                pricingHeroAnimate('fade-up'),
                            )}
                            style={pricingMotionDelayStyle(0)}
                        >
                            {FAQS_SUPPORT_HERO.eyebrow}
                        </p>

                        <h1
                            className={cn(
                                'text-brand-navy mt-3 max-w-[19.5rem] font-bold tracking-tight',
                                'text-[1.65rem] leading-[1.14] sm:max-w-[22rem] sm:text-[2rem] sm:leading-[1.12]',
                                'md:max-w-[24rem] md:text-[2.35rem]',
                                'lg:mt-5 lg:max-w-none lg:text-[2.85rem] lg:leading-[1.12] xl:text-[3.15rem]',
                                pricingHeroAnimate('fade-up'),
                            )}
                            style={pricingMotionDelayStyle(90)}
                        >
                            <span className="block">{FAQS_SUPPORT_HERO.titleLine1}</span>
                            <span className="mt-0.5 block lg:mt-1">
                                {FAQS_SUPPORT_HERO.titleLine2Lead}
                                <span className="text-brand-green">{FAQS_SUPPORT_HERO.titleAccent}</span>
                                {FAQS_SUPPORT_HERO.titleLine2Tail}
                            </span>
                        </h1>

                        <p
                            className={cn(
                                'text-muted-foreground mt-3 max-w-[18.5rem] text-sm leading-relaxed',
                                'sm:mt-4 sm:max-w-md sm:text-base md:max-w-lg',
                                'lg:mt-5 lg:max-w-lg lg:text-lg',
                                pricingHeroAnimate('fade-up'),
                            )}
                            style={pricingMotionDelayStyle(180)}
                        >
                            {FAQS_SUPPORT_HERO.description}
                        </p>

                    </div>

                    <div
                        className={cn(
                            'relative z-20 mt-6 w-full min-w-0 max-w-full',
                            'pr-[38%] sm:mt-8 sm:pr-[36%] md:pr-[34%]',
                            'lg:mt-8 lg:max-w-2xl lg:pr-0',
                            pricingHeroAnimate('fade-up'),
                        )}
                        style={pricingMotionDelayStyle(270)}
                    >
                        <FaqSearchForm
                            searchQuery={searchQuery}
                            onSearchQueryChange={onSearchQueryChange}
                            onSubmit={handleSubmit}
                            variant="stacked"
                            className="w-full min-w-0 max-w-[18.5rem] sm:max-w-none lg:hidden"
                        />

                        <FaqSearchForm
                            searchQuery={searchQuery}
                            onSearchQueryChange={onSearchQueryChange}
                            onSubmit={handleSubmit}
                            variant="inline"
                            className="hidden lg:block"
                        />
                    </div>

                    <div
                        className={cn(
                            'absolute inset-y-0 z-[1] hidden lg:block',
                            'left-[44%] -right-6 xl:left-[42%] xl:-right-10',
                            pricingHeroAnimate('fade-right'),
                        )}
                        style={pricingMotionDelayStyle(220)}
                    >
                        <div className="pointer-events-none relative h-full w-full">
                            <HeroPhotograph
                                src={FAQS_SUPPORT_HERO.heroPhotograph}
                                alt={FAQS_SUPPORT_HERO.heroPhotographAlt}
                                className="h-full w-full"
                                masked
                                maskProfile="support"
                                objectPosition={DESKTOP_PHOTO_POSITION}
                            />
                        </div>

                        <SupportTodayCard
                            data-placement="support-card-swoosh"
                            className={cn(
                                'pointer-events-auto absolute z-50',
                                'top-[49%] translate-y-0 xl:top-[51%] 2xl:top-[52%]',
                                'left-auto right-0 translate-x-1 xl:translate-x-3 2xl:translate-x-4',
                                pricingHeroAnimate('fade-in'),
                            )}
                            style={pricingMotionDelayStyle(420)}
                        />
                    </div>
                </div>
            </Container>

            <div className="h-3 sm:h-4 lg:h-6" aria-hidden />
        </section>
    );
}
