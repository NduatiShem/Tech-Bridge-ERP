import ButtonWithArrow from '@/components/website/ButtonWithArrow';
import Container from '@/components/website/Container';
import RevealOnView from '@/components/website/motion/RevealOnView';
import { ABOUT_STORY } from '@/data/about';

export default function AboutStorySection() {
    return (
        <section className="bg-white py-10 sm:py-12 lg:py-14">
            <Container>
                <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12">
                    <RevealOnView variant="fade-right">
                        <div className="overflow-hidden rounded-2xl bg-slate-100 shadow-[0_4px_20px_rgba(15,23,42,0.08)]">
                            <img
                                src={ABOUT_STORY.image}
                                alt={ABOUT_STORY.imageAlt}
                                className="aspect-[4/3] w-full object-cover object-[50%_58%] sm:object-[50%_55%]"
                                loading="lazy"
                            />
                        </div>
                    </RevealOnView>

                    <RevealOnView delayMs={120}>
                        <div>
                        <p className="text-brand-primary text-xs font-bold tracking-[0.12em] uppercase sm:text-sm">
                            {ABOUT_STORY.heading}
                        </p>
                        <h2 className="text-brand-navy mt-2 text-2xl font-bold tracking-tight sm:text-[1.65rem] lg:text-3xl">
                            {ABOUT_STORY.subheading}
                        </h2>
                        <div className="text-muted-foreground mt-4 space-y-3 text-sm leading-relaxed sm:text-base">
                            {ABOUT_STORY.paragraphs.map((paragraph) => (
                                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                            ))}
                        </div>
                        <div className="mt-6">
                            <ButtonWithArrow href={route(ABOUT_STORY.ctaHref)} nudgeArrowOnHover>
                                {ABOUT_STORY.ctaLabel}
                            </ButtonWithArrow>
                        </div>
                        </div>
                    </RevealOnView>
                </div>
            </Container>
        </section>
    );
}
