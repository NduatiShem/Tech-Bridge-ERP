import ButtonWithArrow from '@/components/website/ButtonWithArrow';
import Container from '@/components/website/Container';
import RevealOnView from '@/components/website/motion/RevealOnView';
import { Cog } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const BOTTOM_CTA_BACKGROUND = '/images/marketing/manufacturing/bottom-cta-background.jpg';

type ModuleBottomCtaProps = {
    title: string;
    description: string;
    icon?: LucideIcon;
    /** One-time fade-in when the band enters the viewport (Pricing page). */
    enableEntranceMotion?: boolean;
};

export default function ModuleBottomCta({
    title,
    description,
    icon: Icon = Cog,
    enableEntranceMotion = false,
}: ModuleBottomCtaProps) {
    const row = (
        <div className="flex flex-col items-stretch gap-6 md:flex-row md:items-center md:justify-between md:gap-6 lg:gap-10">
            <div className="flex min-w-0 flex-1 items-center gap-4 md:gap-5 lg:gap-6">
                <Icon className="h-11 w-11 shrink-0 text-white md:h-12 md:w-12 lg:h-[3.25rem] lg:w-[3.25rem]" strokeWidth={1.75} aria-hidden />
                <div className="min-w-0 text-left">
                    <h2 className="text-lg leading-tight font-bold tracking-tight text-white sm:text-xl lg:text-[1.65rem] xl:whitespace-nowrap xl:text-[1.75rem]">
                        {title}
                    </h2>
                    <p className="text-white/88 mt-1 text-sm leading-snug sm:text-[0.9375rem] lg:mt-1.5 lg:max-w-none">
                        {description}
                    </p>
                </div>
            </div>
            <ButtonWithArrow
                href={route('book-demo')}
                variant="green"
                nudgeArrowOnHover={enableEntranceMotion}
                className="w-full shrink-0 rounded-xl bg-gradient-to-r from-brand-green to-green-600 px-6 py-3.5 text-base font-semibold shadow-md hover:from-brand-green/95 hover:to-green-600/95 md:w-auto"
            >
                Book a Demo
            </ButtonWithArrow>
        </div>
    );

    return (
        <section className="relative overflow-hidden py-10 sm:py-11 lg:py-12">
            <div
                className="pointer-events-none absolute inset-0 bg-brand-navy bg-cover bg-center"
                style={{ backgroundImage: `url('${BOTTOM_CTA_BACKGROUND}')` }}
                aria-hidden
            />
            <Container className="relative">
                {enableEntranceMotion ? (
                    <RevealOnView variant="fade-in">{row}</RevealOnView>
                ) : (
                    row
                )}
            </Container>
        </section>
    );
}
