import Container from '@/components/website/Container';
import SectionHeading from '@/components/website/SectionHeading';
import { cn } from '@/lib/utils';
import type { ModuleTestimonialItem } from '@/types/module-page';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useCallback, useState } from 'react';

type ModuleTestimonialProps = {
    eyebrow: string;
    title: string;
    testimonials: ModuleTestimonialItem[];
    /** Pagination dots to show (mockup shows 4 slots before additional quotes are approved). */
    paginationDots?: number;
};

export default function ModuleTestimonial({ eyebrow, title, testimonials, paginationDots }: ModuleTestimonialProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const slideCount = testimonials.length;
    const dotCount = paginationDots ?? slideCount;
    const active = testimonials[activeIndex] ?? testimonials[0];
    const rating = active?.rating ?? 5;

    const goTo = useCallback(
        (index: number) => {
            if (index < 0 || index >= slideCount) {
                return;
            }
            setActiveIndex(index);
        },
        [slideCount],
    );

    const goPrev = () => goTo(activeIndex - 1);
    const goNext = () => goTo(activeIndex + 1);

    if (!active) {
        return null;
    }

    return (
        <section className="section-spacing bg-white">
            <Container>
                <SectionHeading eyebrow={eyebrow} title={title} eyebrowTone="primary" />
                <div className="mt-10 sm:mt-12">
                    <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-center sm:gap-4 lg:gap-6">
                        <button
                            type="button"
                            onClick={goPrev}
                            disabled={activeIndex === 0 || slideCount <= 1}
                            className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary transition hover:bg-brand-primary/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary disabled:cursor-not-allowed disabled:opacity-40 sm:inline-flex"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="h-5 w-5" aria-hidden />
                        </button>

                        <figure className="w-full min-w-0 max-w-4xl rounded-2xl bg-white px-6 py-8 shadow-[0_8px_40px_-8px_rgba(23,36,59,0.15)] sm:px-10 sm:py-10 lg:grid lg:grid-cols-[1.35fr_1fr] lg:items-center lg:gap-10 lg:px-12">
                            <blockquote className="relative text-left">
                                <span
                                    className="text-brand-primary/20 pointer-events-none absolute -top-2 -left-1 font-serif text-7xl leading-none select-none sm:text-8xl"
                                    aria-hidden
                                >
                                    &ldquo;
                                </span>
                                <p className="text-muted-foreground relative z-10 text-base leading-relaxed sm:text-lg">
                                    {active.quote}
                                </p>
                            </blockquote>
                            <figcaption className="mt-8 border-border text-left lg:mt-0 lg:border-l lg:pl-10">
                                <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <Star
                                            key={index}
                                            className={cn(
                                                'h-5 w-5',
                                                index < rating ? 'fill-amber-400 text-amber-400' : 'text-border fill-transparent',
                                            )}
                                            aria-hidden
                                        />
                                    ))}
                                </div>
                                <p className="text-brand-navy mt-4 text-base font-bold sm:text-lg">{active.authorName}</p>
                                <p className="text-muted-foreground mt-1 text-sm sm:text-base">{active.authorRole}</p>
                            </figcaption>
                        </figure>

                        <button
                            type="button"
                            onClick={goNext}
                            disabled={activeIndex >= slideCount - 1 || slideCount <= 1}
                            className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary transition hover:bg-brand-primary/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary disabled:cursor-not-allowed disabled:opacity-40 sm:inline-flex"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="h-5 w-5" aria-hidden />
                        </button>
                    </div>

                    <div className="mt-4 flex justify-center gap-4 sm:hidden">
                        <button
                            type="button"
                            onClick={goPrev}
                            disabled={activeIndex === 0 || slideCount <= 1}
                            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary disabled:cursor-not-allowed disabled:opacity-40"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="h-5 w-5" aria-hidden />
                        </button>
                        <button
                            type="button"
                            onClick={goNext}
                            disabled={activeIndex >= slideCount - 1 || slideCount <= 1}
                            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary disabled:cursor-not-allowed disabled:opacity-40"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="h-5 w-5" aria-hidden />
                        </button>
                    </div>

                    <div className="mt-8 flex items-center justify-center gap-2" role="tablist" aria-label="Testimonial slides">
                        {Array.from({ length: dotCount }).map((_, index) => {
                            const hasSlide = index < slideCount;
                            const isActive = index === activeIndex;
                            return (
                                <button
                                    key={index}
                                    type="button"
                                    role="tab"
                                    aria-selected={isActive}
                                    aria-label={hasSlide ? `Show testimonial ${index + 1}` : `Testimonial ${index + 1} (not yet available)`}
                                    disabled={!hasSlide}
                                    onClick={() => goTo(index)}
                                    className={cn(
                                        'h-2.5 rounded-full transition-all',
                                        isActive
                                            ? 'w-8 bg-brand-green'
                                            : cn(
                                                  'w-2.5',
                                                  hasSlide
                                                      ? 'bg-brand-primary/20 hover:bg-brand-primary/35'
                                                      : 'cursor-not-allowed bg-border',
                                              ),
                                    )}
                                />
                            );
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
}
