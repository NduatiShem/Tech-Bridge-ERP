import Container from '@/components/website/Container';
import RevealOnView from '@/components/website/motion/RevealOnView';
import SectionHeading from '@/components/website/SectionHeading';
import { ABOUT_ACCENT_BG, ABOUT_MVV, ABOUT_MVV_ICONS } from '@/data/about';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

const CARD_STAGGER_MS = 90;

const mvvCardClass =
    'rounded-[14px] border border-slate-100 bg-white p-4 shadow-[0_3px_14px_rgba(30,64,120,0.06)] transition-shadow duration-300 motion-safe:hover:shadow-[0_6px_20px_rgba(30,64,120,0.09)] sm:p-5 lg:p-6';

export default function AboutMissionVisionValues() {
    const MissionIcon = ABOUT_MVV_ICONS.mission;
    const VisionIcon = ABOUT_MVV_ICONS.vision;
    const ValuesIcon = ABOUT_MVV_ICONS.values;

    const cards = [
        {
            key: 'mission',
            icon: MissionIcon,
            accent: ABOUT_MVV.mission.accent,
            title: ABOUT_MVV.mission.title,
            body: <p className="text-muted-foreground mt-1.5 text-sm leading-relaxed">{ABOUT_MVV.mission.body}</p>,
        },
        {
            key: 'vision',
            icon: VisionIcon,
            accent: ABOUT_MVV.vision.accent,
            title: ABOUT_MVV.vision.title,
            body: <p className="text-muted-foreground mt-1.5 text-sm leading-relaxed">{ABOUT_MVV.vision.body}</p>,
        },
        {
            key: 'values',
            icon: ValuesIcon,
            accent: ABOUT_MVV.values.accent,
            title: ABOUT_MVV.values.title,
            body: (
                <ul className="mt-1.5 space-y-1.5">
                    {ABOUT_MVV.values.items.map((item) => (
                        <li key={item} className="text-brand-navy flex items-start gap-2 text-sm leading-snug">
                            <span
                                className="bg-violet-600 mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-white"
                                aria-hidden
                            >
                                <Check className="h-2.5 w-2.5" strokeWidth={3} />
                            </span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            ),
        },
    ] as const;

    return (
        <section className="bg-white py-10 sm:py-12 lg:py-14">
            <Container>
                <RevealOnView>
                    <SectionHeading
                        title={ABOUT_MVV.heading}
                        description={ABOUT_MVV.description}
                        eyebrowTone="primary"
                        descriptionClassName="mt-3 text-sm sm:text-base"
                        className="max-w-2xl"
                    />
                </RevealOnView>

                <ul className="mt-8 grid gap-4 sm:mt-10 lg:grid-cols-3 lg:items-stretch lg:gap-5">
                    {cards.map((card, index) => {
                        const Icon = card.icon;
                        return (
                            <RevealOnView
                                key={card.key}
                                as="li"
                                className={cn('h-full', mvvCardClass)}
                                delayMs={index * CARD_STAGGER_MS}
                            >
                                <div className="flex h-full gap-3 sm:gap-3.5">
                                    <span
                                        className={cn(
                                            'flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white',
                                            ABOUT_ACCENT_BG[card.accent],
                                        )}
                                    >
                                        <Icon className="h-5 w-5" strokeWidth={2.25} aria-hidden />
                                    </span>
                                    <div className="min-w-0 flex-1">
                                        <h3 className="text-brand-navy text-base font-bold sm:text-lg">{card.title}</h3>
                                        {card.body}
                                    </div>
                                </div>
                            </RevealOnView>
                        );
                    })}
                </ul>
            </Container>
        </section>
    );
}
