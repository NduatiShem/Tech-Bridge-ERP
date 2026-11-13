import Container from '@/components/website/Container';
import RevealOnView from '@/components/website/motion/RevealOnView';
import SectionHeading from '@/components/website/SectionHeading';
import { REQUEST_QUOTE_TESTIMONIALS } from '@/data/request-quote';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useId, useState } from 'react';

const CARD_STAGGER_MS = 90;

type TestimonialItem = (typeof REQUEST_QUOTE_TESTIMONIALS.items)[number];

function initials(name: string) {
    return name
        .split(/\s+/)
        .map((part) => part[0])
        .join('')
        .slice(0, 2)
        .toUpperCase();
}

function TestimonialCard({ item, className }: { item: TestimonialItem; className?: string }) {
    return (
        <article
            className={cn(
                'flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_3px_16px_rgba(15,23,42,0.06)]',
                className,
            )}
        >
            <blockquote className="text-muted-foreground flex-1 text-sm leading-relaxed">“{item.quote}”</blockquote>
            <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
                <span
                    className="bg-brand-primary/10 text-brand-primary flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold"
                    aria-hidden
                >
                    {initials(item.name)}
                </span>
                <div className="min-w-0">
                    <p className="text-brand-navy text-sm font-bold">{item.name}</p>
                    <p className="text-muted-foreground text-xs">
                        {item.role}
                        {item.company ? (
                            <>
                                <span aria-hidden> · </span>
                                <span className="text-amber-800/90">{item.company}</span>
                            </>
                        ) : null}
                    </p>
                </div>
            </div>
        </article>
    );
}

function RequestQuoteTestimonialsMobileCarousel() {
    const items = REQUEST_QUOTE_TESTIMONIALS.items;
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselId = useId();
    const active = items[activeIndex];

    const goTo = useCallback(
        (index: number) => {
            if (index < 0 || index >= items.length) {
                return;
            }
            setActiveIndex(index);
        },
        [items.length],
    );

    if (!active) {
        return null;
    }

    const atStart = activeIndex <= 0;
    const atEnd = activeIndex >= items.length - 1;

    return (
        <div className="relative mt-8 sm:hidden">
            <div className="pointer-events-none absolute top-1/2 left-0 z-20 -translate-y-1/2">
                <button
                    type="button"
                    className={cn(
                        'pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200/90 bg-white text-brand-primary shadow-[0_4px_14px_-6px_rgba(23,36,59,0.28)] transition hover:bg-gray-50',
                        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary',
                        atStart && 'cursor-not-allowed opacity-40',
                    )}
                    disabled={atStart || items.length <= 1}
                    aria-controls={carouselId}
                    aria-label="Show previous testimonial"
                    onClick={() => goTo(activeIndex - 1)}
                >
                    <ChevronLeft className="h-5 w-5" aria-hidden />
                </button>
            </div>

            <div className="pointer-events-none absolute top-1/2 right-0 z-20 -translate-y-1/2">
                <button
                    type="button"
                    className={cn(
                        'pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200/90 bg-white text-brand-primary shadow-[0_4px_14px_-6px_rgba(23,36,59,0.28)] transition hover:bg-gray-50',
                        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary',
                        atEnd && 'cursor-not-allowed opacity-40',
                    )}
                    disabled={atEnd || items.length <= 1}
                    aria-controls={carouselId}
                    aria-label="Show next testimonial"
                    onClick={() => goTo(activeIndex + 1)}
                >
                    <ChevronRight className="h-5 w-5" aria-hidden />
                </button>
            </div>

            <div id={carouselId} className="px-11" aria-live="polite" aria-roledescription="carousel">
                <TestimonialCard key={active.name} item={active} />
            </div>

            <div className="mt-4 flex items-center justify-center gap-2" role="tablist" aria-label="Testimonial slides">
                {items.map((item, index) => (
                    <button
                        key={item.name}
                        type="button"
                        role="tab"
                        aria-selected={index === activeIndex}
                        aria-label={`Show testimonial from ${item.name}`}
                        className={cn(
                            'h-2.5 w-2.5 rounded-full transition-colors',
                            'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary',
                            index === activeIndex ? 'bg-brand-green' : 'bg-brand-primary/25',
                        )}
                        onClick={() => goTo(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default function RequestQuoteTestimonials() {
    return (
        <section className="border-t border-slate-100 bg-brand-surface py-10 sm:py-12 lg:py-14">
            <Container>
                <RevealOnView>
                    <SectionHeading
                        title={REQUEST_QUOTE_TESTIMONIALS.heading}
                        description={REQUEST_QUOTE_TESTIMONIALS.description}
                        descriptionClassName="mt-3 text-sm text-amber-800/90 sm:text-base"
                        className="mx-auto max-w-2xl text-center"
                    />
                </RevealOnView>

                <RequestQuoteTestimonialsMobileCarousel />

                <ul className="mt-8 hidden gap-4 sm:mt-10 sm:grid sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
                    {REQUEST_QUOTE_TESTIMONIALS.items.map((item, index) => (
                        <RevealOnView
                            key={item.name}
                            as="li"
                            className="h-full"
                            delayMs={index * CARD_STAGGER_MS}
                        >
                            <TestimonialCard item={item} className="sm:p-6" />
                        </RevealOnView>
                    ))}
                </ul>
            </Container>
        </section>
    );
}
