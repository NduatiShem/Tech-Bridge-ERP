import Container from '@/components/website/Container';
import SectionHeading from '@/components/website/SectionHeading';
import RevealOnView from '@/components/website/motion/RevealOnView';
import { SOLUTIONS_SUCCESS_SECTION, SOLUTIONS_SUCCESS_STORIES } from '@/data/solutions';
import { featureAccentStyles } from '@/lib/feature-accents';
import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';

const STORY_STAGGER_MS = 70;

export default function SolutionsSuccessStoriesSection() {
    return (
        <section className="bg-[#EFF7FF] py-10 sm:py-12 lg:py-14">
            <Container>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <RevealOnView className="min-w-0">
                        <SectionHeading
                            align="left"
                            eyebrow={SOLUTIONS_SUCCESS_SECTION.eyebrow}
                            title={SOLUTIONS_SUCCESS_SECTION.title}
                            eyebrowTone="primary"
                            className="text-left"
                        />
                    </RevealOnView>
                    <RevealOnView delayMs={50}>
                        <Link
                            href={route('case-studies')}
                            className="text-brand-primary inline-flex items-center gap-1 text-sm font-semibold hover:underline"
                        >
                            {SOLUTIONS_SUCCESS_SECTION.viewAllLabel}
                            <ArrowRight className="h-4 w-4" aria-hidden />
                        </Link>
                    </RevealOnView>
                </div>

                <ul className="mt-6 grid list-none gap-4 sm:mt-8 lg:grid-cols-3 lg:gap-5">
                    {SOLUTIONS_SUCCESS_STORIES.map((story, index) => {
                        const tagStyles = featureAccentStyles[story.tagAccent];

                        return (
                            <RevealOnView key={story.id} as="li" delayMs={index * STORY_STAGGER_MS}>
                                <article className="flex h-full gap-3 rounded-2xl border border-white/90 bg-white p-3 shadow-[0_4px_18px_rgba(30,64,120,0.06)] sm:gap-4 sm:p-4">
                                    <img
                                        src={story.image}
                                        alt={story.imageAlt}
                                        className="h-20 w-20 shrink-0 rounded-xl object-cover sm:h-[5.5rem] sm:w-[5.5rem]"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    <div className="min-w-0 flex-1">
                                        <p
                                            className={cn(
                                                'inline-flex rounded-full px-2 py-0.5 text-[10px] font-bold tracking-wide uppercase',
                                                tagStyles.icon,
                                            )}
                                        >
                                            {story.tag}
                                        </p>
                                        <h3 className="text-brand-navy mt-2 text-sm font-bold leading-snug sm:text-[15px]">
                                            {story.title}
                                        </h3>
                                        <Link
                                            href={route('case-studies')}
                                            className="group text-brand-primary mt-2 inline-flex items-center gap-1 text-xs font-semibold sm:text-sm"
                                        >
                                            Read Case Study
                                            <ArrowRight
                                                className="h-3.5 w-3.5 transition-transform duration-200 ease-out group-hover:translate-x-1 motion-reduce:transform-none"
                                                aria-hidden
                                            />
                                        </Link>
                                    </div>
                                </article>
                            </RevealOnView>
                        );
                    })}
                </ul>
            </Container>
        </section>
    );
}
