import ButtonWithArrow from '@/components/website/ButtonWithArrow';
import Container from '@/components/website/Container';
import RevealOnView from '@/components/website/motion/RevealOnView';
import { cn } from '@/lib/utils';
import { Cog } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const BOTTOM_CTA_BACKGROUND = '/images/marketing/manufacturing/bottom-cta-background.jpg';

type ModuleBottomCtaProps = {
    title: string;
    description: string;
    icon?: LucideIcon;
    ctaLabel?: string;
    ctaHref?: string;
    /** One-time fade-in when the band enters the viewport (Pricing page). */
    enableEntranceMotion?: boolean;
};

export default function ModuleBottomCta({
    title,
    description,
    icon: Icon = Cog,
    ctaLabel = 'Book a Demo',
    ctaHref,
    enableEntranceMotion = false,
}: ModuleBottomCtaProps) {
    const href = ctaHref ?? route('book-demo');
    const row = (
        <div
            className={cn(
                'flex items-center gap-2.5 sm:gap-3',
                'max-[374px]:flex-col max-[374px]:items-stretch max-[374px]:gap-3',
                'md:flex-row md:items-center md:justify-between md:gap-6 lg:gap-10',
            )}
        >
            <div className="flex min-w-0 flex-1 items-center gap-2.5 sm:gap-3 md:gap-5 lg:gap-6">
                <div className="flex shrink-0 items-center gap-2.5 sm:gap-3">
                    <Icon
                        className="h-8 w-8 shrink-0 text-white sm:h-9 sm:w-9 md:h-12 md:w-12 lg:h-[3.25rem] lg:w-[3.25rem]"
                        strokeWidth={1.75}
                        aria-hidden
                    />
                    <div className="h-10 w-px shrink-0 bg-white/30 sm:h-11 md:hidden" aria-hidden />
                </div>
                <div className="min-w-0 flex-1 text-left">
                    <h2
                        className={cn(
                            'font-bold tracking-tight text-white',
                            'text-[15px] leading-[1.2] sm:text-base',
                            'md:text-xl lg:text-[1.65rem] xl:whitespace-nowrap xl:text-[1.75rem]',
                        )}
                    >
                        {title}
                    </h2>
                    <p
                        className={cn(
                            'mt-0.5 leading-snug text-white/82',
                            'text-[11px] sm:text-xs',
                            'md:mt-1.5 md:text-[0.9375rem] md:text-white/88 lg:max-w-none',
                        )}
                    >
                        {description}
                    </p>
                </div>
            </div>

            <ButtonWithArrow
                href={href}
                variant="green"
                nudgeArrowOnHover={enableEntranceMotion}
                className={cn(
                    'min-h-9 w-auto shrink-0 rounded-lg px-3 py-2 text-xs font-bold whitespace-nowrap shadow-md',
                    'max-[374px]:w-full max-[374px]:justify-center',
                    'bg-gradient-to-r from-brand-green to-green-600 hover:from-brand-green/95 hover:to-green-600/95',
                    '[&_svg]:ml-1.5 [&_svg]:h-3.5 [&_svg]:w-3.5',
                    'md:w-auto md:rounded-xl md:px-6 md:py-3.5 md:text-base md:font-semibold',
                    'md:[&_svg]:ml-2 md:[&_svg]:h-4 md:[&_svg]:w-4',
                )}
            >
                {ctaLabel}
            </ButtonWithArrow>
        </div>
    );

    const inner = (
        <div
            className={cn(
                'rounded-2xl bg-gradient-to-r from-brand-navy via-brand-primary to-brand-primary px-3.5 py-3.5 sm:px-4 sm:py-4',
                'shadow-[0_6px_24px_-8px_rgba(23,36,59,0.35)]',
                'md:rounded-none md:bg-transparent md:p-0 md:shadow-none',
            )}
        >
            {row}
        </div>
    );

    return (
        <section className="relative overflow-hidden py-5 sm:py-6 md:py-10 lg:py-12">
            <div
                className="pointer-events-none absolute inset-0 hidden bg-brand-navy bg-cover bg-center md:block"
                style={{ backgroundImage: `url('${BOTTOM_CTA_BACKGROUND}')` }}
                aria-hidden
            />
            <Container className="relative">
                {enableEntranceMotion ? <RevealOnView variant="fade-in">{inner}</RevealOnView> : inner}
            </Container>
        </section>
    );
}
