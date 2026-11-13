import Container from '@/components/website/Container';
import RevealOnView from '@/components/website/motion/RevealOnView';
import SectionHeading from '@/components/website/SectionHeading';
import { ABOUT_ACCENT_BG, ABOUT_WHY_CHOOSE } from '@/data/about';
import { cn } from '@/lib/utils';

const ITEM_STAGGER_MS = 75;

export default function AboutWhyChooseSection() {
    return (
        <section className="border-y border-slate-100/80 bg-brand-surface py-10 sm:py-12 lg:py-14">
            <Container>
                <RevealOnView>
                    <SectionHeading
                        title={ABOUT_WHY_CHOOSE.heading}
                        description={ABOUT_WHY_CHOOSE.description}
                        descriptionClassName="mt-3 text-sm sm:text-base"
                        className="max-w-2xl"
                    />
                </RevealOnView>

                <ul className="mt-8 grid grid-cols-2 gap-x-3 gap-y-7 sm:gap-x-6 sm:gap-y-8 lg:mt-10 lg:grid-cols-4 lg:gap-5">
                    {ABOUT_WHY_CHOOSE.items.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <RevealOnView
                                key={item.title}
                                as="li"
                                className="flex min-w-0 flex-col items-center px-0.5 text-center sm:px-0"
                                delayMs={index * ITEM_STAGGER_MS}
                            >
                                <span
                                    className={cn(
                                        'flex h-14 w-14 items-center justify-center rounded-full text-white shadow-[0_8px_24px_-8px_rgba(23,36,59,0.35)] sm:h-[4.25rem] sm:w-[4.25rem]',
                                        ABOUT_ACCENT_BG[item.accent],
                                    )}
                                >
                                    <Icon className="h-6 w-6 sm:h-8 sm:w-8" strokeWidth={2} aria-hidden />
                                </span>
                                <h3 className="text-brand-navy mt-3 text-sm font-bold sm:mt-4 sm:text-base">{item.title}</h3>
                                <p className="text-muted-foreground mt-1.5 max-w-[11.5rem] text-xs leading-snug sm:mt-2 sm:max-w-[14rem] sm:text-sm sm:leading-relaxed">
                                    {item.description}
                                </p>
                            </RevealOnView>
                        );
                    })}
                </ul>
            </Container>
        </section>
    );
}
