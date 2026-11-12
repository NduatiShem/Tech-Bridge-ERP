import Breadcrumb from '@/components/website/Breadcrumb';
import ButtonWithArrow from '@/components/website/ButtonWithArrow';
import Container from '@/components/website/Container';
import SecondaryButton from '@/components/website/SecondaryButton';
import { featureAccentStyles } from '@/lib/feature-accents';
import { cn } from '@/lib/utils';
import type { ModulePageContent } from '@/types/module-page';
import type { CSSProperties } from 'react';

type ModuleHeroProps = {
    content: Pick<
        ModulePageContent,
        | 'badgeLabel'
        | 'heroTitle'
        | 'heroTitleAccent'
        | 'heroDescription'
        | 'heroBackgroundImage'
        | 'heroImage'
        | 'heroImageAlt'
        | 'trustIndicators'
    >;
    breadcrumbItems: { label: string; href?: string }[];
};

export default function ModuleHero({ content, breadcrumbItems }: ModuleHeroProps) {
    return (
        <section className="relative overflow-x-clip bg-brand-surface">
            <div
                className="pointer-events-none absolute inset-0 bg-brand-surface bg-cover bg-[center_top] bg-no-repeat lg:bg-[right_center]"
                style={{ backgroundImage: `url('${content.heroBackgroundImage}')` } as CSSProperties}
                aria-hidden
            />
            <Container className="relative z-10 pt-6 pb-10 sm:pt-8 sm:pb-12 lg:pt-10 lg:pb-6">
                <Breadcrumb items={breadcrumbItems} className="mb-5 text-brand-primary/80 lg:mb-6" />

                <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.1fr)] lg:gap-x-8 lg:gap-y-8 xl:gap-x-10">
                    <div className="relative z-10 min-w-0 max-w-xl lg:max-w-none">
                        <p className="bg-brand-green inline-flex w-fit rounded-full px-4 py-1.5 text-[11px] font-bold tracking-[0.14em] text-white uppercase">
                            {content.badgeLabel}
                        </p>
                        <h1 className="text-brand-navy mt-5 text-[2rem] leading-[1.12] font-bold tracking-tight text-balance sm:text-[2.5rem] lg:text-[2.65rem] xl:text-[2.85rem]">
                            {content.heroTitle}{' '}
                            <span className="text-brand-green">{content.heroTitleAccent}</span>
                        </h1>
                        <p className="text-muted-foreground mt-4 text-[0.98rem] leading-[1.72] sm:text-base">
                            {content.heroDescription}
                        </p>

                        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                            <ButtonWithArrow href={route('book-demo')}>Book a Demo</ButtonWithArrow>
                            <SecondaryButton
                                href={route('modules.index')}
                                className="border-gray-300 bg-white text-brand-navy shadow-none hover:border-gray-400 hover:bg-white"
                            >
                                Explore All Modules
                            </SecondaryButton>
                        </div>

                        <ul className="mt-10 flex flex-col gap-6 sm:flex-row sm:gap-6 lg:mt-12 lg:gap-8 xl:mt-14">
                            {content.trustIndicators.map((item) => {
                                const Icon = item.icon;
                                const accent = featureAccentStyles[item.accent ?? 'blue'];
                                return (
                                    <li key={`${item.titleBold}-${item.titleRegular}`} className="flex min-w-0 flex-col gap-2.5">
                                        <span
                                            className={cn(
                                                'inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full',
                                                accent.icon,
                                            )}
                                        >
                                            <Icon className="h-5 w-5" aria-hidden />
                                        </span>
                                        <div className="text-brand-navy leading-snug">
                                            <p className="text-sm font-bold">{item.titleBold}</p>
                                            <p className="text-sm font-normal">{item.titleRegular}</p>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    <div className="relative z-0 flex min-w-0 items-end justify-center lg:justify-end">
                        <img
                            src={content.heroImage}
                            alt={content.heroImageAlt}
                            className="h-auto w-full max-w-md object-contain object-bottom sm:max-w-xl lg:ml-auto lg:w-[min(100%,40rem)] lg:max-w-none xl:w-[min(100%,44rem)] 2xl:w-[min(100%,48rem)]"
                            loading="eager"
                            decoding="async"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
}
