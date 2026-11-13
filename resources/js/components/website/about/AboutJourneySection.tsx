import Container from '@/components/website/Container';
import RevealOnView from '@/components/website/motion/RevealOnView';
import SectionHeading from '@/components/website/SectionHeading';
import {
    ABOUT_ACCENT_BG,
    ABOUT_JOURNEY,
    type AboutAccent,
    type AboutJourneyMilestone,
} from '@/data/about';
import { cn } from '@/lib/utils';

const ACCENT_TEXT: Record<AboutAccent, string> = {
    green: 'text-brand-green',
    blue: 'text-brand-primary',
    purple: 'text-violet-600',
    orange: 'text-orange-500',
};

const ITEM_STAGGER_MS = 70;

const DESKTOP_COL_START = [
    'col-start-1',
    'col-start-2',
    'col-start-3',
    'col-start-4',
    'col-start-5',
    'col-start-6',
] as const;

function JourneyMilestoneContent({
    milestone,
    className,
}: {
    milestone: AboutJourneyMilestone;
    className?: string;
}) {
    return (
        <div className={cn('min-w-0 text-center', className)}>
            <p className={cn('text-lg font-bold tracking-tight sm:text-xl', ACCENT_TEXT[milestone.accent])}>
                {milestone.year}
            </p>
            <h3 className="text-brand-navy mt-2 text-sm font-bold sm:text-base">{milestone.title}</h3>
            <p className="text-muted-foreground mt-1.5 text-xs leading-snug sm:text-sm sm:leading-relaxed">
                {milestone.description}
            </p>
        </div>
    );
}

function JourneyNode({ accent, className }: { accent: AboutAccent; className?: string }) {
    return (
        <span
            className={cn(
                'relative z-10 block h-4 w-4 shrink-0 rounded-full border-[3px] border-white shadow-sm ring-1 ring-slate-200/80',
                ABOUT_ACCENT_BG[accent],
                className,
            )}
            aria-hidden
        />
    );
}

export default function AboutJourneySection() {
    const items = ABOUT_JOURNEY.items;

    return (
        <section
            id="our-journey"
            className="scroll-mt-20 border-t border-slate-100 bg-white py-10 sm:py-12 lg:py-14"
        >
            <Container>
                <RevealOnView>
                    <SectionHeading
                        title={ABOUT_JOURNEY.heading}
                        description={ABOUT_JOURNEY.description}
                        descriptionClassName="mt-3 text-sm sm:text-base"
                        className="mx-auto max-w-2xl text-center"
                    />
                </RevealOnView>

                {/* Mobile + tablet: two milestones per row */}
                <ol className="mt-8 grid list-none grid-cols-2 gap-x-3 gap-y-8 sm:mt-10 sm:gap-x-5 sm:gap-y-10 lg:hidden">
                    {items.map((milestone, index) => (
                        <RevealOnView
                            key={milestone.year}
                            as="li"
                            className="relative flex flex-col items-center px-0.5"
                            delayMs={index * ITEM_STAGGER_MS}
                        >
                            <JourneyNode accent={milestone.accent} className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                            <JourneyMilestoneContent milestone={milestone} className="mt-3" />
                        </RevealOnView>
                    ))}
                </ol>

                {/* Desktop: line + dots in the same grid row so nodes sit on the axis */}
                <ol
                    className="mt-10 hidden list-none lg:mt-12 lg:grid lg:grid-cols-6 lg:grid-rows-[auto_1.25rem_auto] lg:gap-x-3 lg:gap-y-5"
                    aria-label="Company milestones by year"
                >
                    <li className="pointer-events-none col-span-6 row-start-2 list-none" aria-hidden>
                        <div className="flex h-5 w-full items-center px-[3%]">
                            <div className="h-0.5 w-full bg-gradient-to-r from-brand-green via-brand-primary to-brand-green" />
                        </div>
                    </li>

                    {items.map((milestone, index) => (
                        <li key={milestone.year} className="contents">
                            <RevealOnView
                                as="div"
                                className={cn('row-start-1 min-w-0 px-1 text-center', DESKTOP_COL_START[index])}
                                delayMs={index * ITEM_STAGGER_MS}
                            >
                                <p
                                    className={cn(
                                        'text-xl font-bold tracking-tight xl:text-[1.35rem]',
                                        ACCENT_TEXT[milestone.accent],
                                    )}
                                >
                                    {milestone.year}
                                </p>
                            </RevealOnView>
                            <div
                                className={cn(
                                    'row-start-2 z-10 flex h-5 items-center justify-center px-1',
                                    DESKTOP_COL_START[index],
                                )}
                            >
                                <JourneyNode accent={milestone.accent} className="h-4 w-4" />
                            </div>
                            <RevealOnView
                                as="div"
                                className={cn('row-start-3 min-w-0 px-1 text-center', DESKTOP_COL_START[index])}
                                delayMs={index * ITEM_STAGGER_MS}
                            >
                                <h3 className="text-brand-navy text-sm font-bold xl:text-base">{milestone.title}</h3>
                                <p className="text-muted-foreground mt-2 text-xs leading-relaxed xl:text-sm">
                                    {milestone.description}
                                </p>
                            </RevealOnView>
                        </li>
                    ))}
                </ol>
            </Container>
        </section>
    );
}
