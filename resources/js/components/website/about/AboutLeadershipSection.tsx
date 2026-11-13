import Container from '@/components/website/Container';
import RevealOnView from '@/components/website/motion/RevealOnView';
import SectionHeading from '@/components/website/SectionHeading';
import { ABOUT_LEADERSHIP } from '@/data/about';

const CARD_STAGGER_MS = 80;

export default function AboutLeadershipSection() {
    return (
        <section className="bg-white py-10 sm:py-12 lg:py-14">
            <Container>
                <RevealOnView>
                    <SectionHeading
                        title={ABOUT_LEADERSHIP.heading}
                        description={ABOUT_LEADERSHIP.description}
                        descriptionClassName="mt-3 text-sm sm:text-base"
                        className="max-w-2xl"
                    />
                </RevealOnView>

                <ul className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
                    {ABOUT_LEADERSHIP.cards.map((card, index) => {
                        const Icon = card.icon;
                        return (
                            <RevealOnView
                                key={card.title}
                                as="li"
                                className="flex h-full gap-3 rounded-xl border border-slate-100 bg-slate-50/40 p-4 shadow-[0_2px_12px_rgba(15,23,42,0.05)] transition-shadow duration-300 motion-safe:hover:shadow-[0_8px_24px_rgba(15,23,42,0.08)] sm:bg-white sm:p-4"
                                delayMs={index * CARD_STAGGER_MS}
                            >
                                <span className="bg-brand-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white">
                                    <Icon className="h-5 w-5" strokeWidth={2.25} aria-hidden />
                                </span>
                                <div className="min-w-0">
                                    <h3 className="text-brand-navy text-sm font-bold">{card.title}</h3>
                                    <p className="text-muted-foreground mt-1 text-xs leading-relaxed sm:text-[13px]">
                                        {card.description}
                                    </p>
                                </div>
                            </RevealOnView>
                        );
                    })}
                </ul>
            </Container>
        </section>
    );
}
