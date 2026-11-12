import PricingPlanCard from '@/components/website/pricing/PricingPlanCard';
import { PRICING_PLANS } from '@/data/pricing';
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useId, useLayoutEffect, useRef, useState } from 'react';

const DEFAULT_ACTIVE_INDEX = Math.max(
    0,
    PRICING_PLANS.findIndex((plan) => plan.id === 'business'),
);

type PricingPlansCarouselProps = {
    className?: string;
};

export default function PricingPlansCarousel({ className }: PricingPlansCarouselProps) {
    const scrollerRef = useRef<HTMLUListElement>(null);
    const slideRefs = useRef<(HTMLLIElement | null)[]>([]);
    const [activeIndex, setActiveIndex] = useState(DEFAULT_ACTIVE_INDEX);
    const [isPositioned, setIsPositioned] = useState(false);
    const reducedMotion = usePrefersReducedMotion();
    const carouselId = useId();

    const scrollToIndex = useCallback(
        (index: number, behavior: ScrollBehavior = reducedMotion ? 'auto' : 'smooth') => {
            const scroller = scrollerRef.current;
            const slide = slideRefs.current[index];
            if (!scroller || !slide) {
                return;
            }

            const maxScroll = scroller.scrollWidth - scroller.clientWidth;
            const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
            const offset = slideCenter - scroller.clientWidth / 2;

            scroller.scrollTo({
                left: Math.min(maxScroll, Math.max(0, offset)),
                behavior,
            });
            setActiveIndex(index);
        },
        [reducedMotion],
    );

    const syncActiveFromScroll = useCallback(() => {
        const scroller = scrollerRef.current;
        if (!scroller) {
            return;
        }
        const center = scroller.scrollLeft + scroller.clientWidth / 2;
        let nextIndex = 0;
        let smallestDistance = Number.POSITIVE_INFINITY;

        slideRefs.current.forEach((slide, index) => {
            if (!slide) {
                return;
            }
            const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
            const distance = Math.abs(center - slideCenter);
            if (distance < smallestDistance) {
                smallestDistance = distance;
                nextIndex = index;
            }
        });

        setActiveIndex(nextIndex);
    }, []);

    useLayoutEffect(() => {
        const positionDefault = () => scrollToIndex(DEFAULT_ACTIVE_INDEX, 'auto');
        positionDefault();
        const frame = window.requestAnimationFrame(positionDefault);
        setIsPositioned(true);
        return () => window.cancelAnimationFrame(frame);
    }, [scrollToIndex]);

    useLayoutEffect(() => {
        const onResize = () => scrollToIndex(activeIndex, 'auto');
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, [activeIndex, scrollToIndex]);

    useLayoutEffect(() => {
        const scroller = scrollerRef.current;
        if (!scroller) {
            return;
        }

        const onScroll = () => {
            window.requestAnimationFrame(syncActiveFromScroll);
        };

        scroller.addEventListener('scroll', onScroll, { passive: true });
        return () => scroller.removeEventListener('scroll', onScroll);
    }, [syncActiveFromScroll]);

    const atStart = activeIndex <= 0;
    const atEnd = activeIndex >= PRICING_PLANS.length - 1;

    return (
        <div className={cn('relative', className)}>
            <div className="relative">
                <div className="pointer-events-none absolute top-1/2 left-0 z-30 -translate-y-1/2">
                    <button
                        type="button"
                        className={cn(
                            'pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200/90 bg-white text-brand-primary shadow-[0_4px_14px_-6px_rgba(23,36,59,0.28)] transition hover:bg-gray-50',
                            'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary',
                            atStart && 'cursor-not-allowed opacity-40',
                        )}
                        disabled={atStart}
                        aria-controls={carouselId}
                        aria-label="Show previous pricing plan"
                        onClick={() => scrollToIndex(activeIndex - 1)}
                    >
                        <ChevronLeft className="h-5 w-5" aria-hidden />
                    </button>
                </div>

                <div className="pointer-events-none absolute top-1/2 right-0 z-30 -translate-y-1/2">
                    <button
                        type="button"
                        className={cn(
                            'pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200/90 bg-white text-brand-primary shadow-[0_4px_14px_-6px_rgba(23,36,59,0.28)] transition hover:bg-gray-50',
                            'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary',
                            atEnd && 'cursor-not-allowed opacity-40',
                        )}
                        disabled={atEnd}
                        aria-controls={carouselId}
                        aria-label="Show next pricing plan"
                        onClick={() => scrollToIndex(activeIndex + 1)}
                    >
                        <ChevronRight className="h-5 w-5" aria-hidden />
                    </button>
                </div>

                <ul
                    ref={scrollerRef}
                    id={carouselId}
                    className={cn(
                        'flex list-none snap-x snap-mandatory gap-2.5 overflow-x-auto overflow-y-visible overscroll-x-contain px-8 py-1',
                        '[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden',
                        !isPositioned && 'invisible',
                    )}
                    aria-roledescription="carousel"
                    aria-label="Pricing plans"
                >
                    {PRICING_PLANS.map((plan, index) => {
                        const isActive = index === activeIndex;
                        return (
                            <li
                                key={plan.id}
                                ref={(node) => {
                                    slideRefs.current[index] = node;
                                }}
                                className={cn(
                                    'flex w-[min(66vw,18rem)] shrink-0 snap-center flex-col',
                                    'transition-[transform,opacity] duration-300 ease-out motion-reduce:transition-none',
                                    isActive ? 'z-10 scale-100 opacity-100' : 'scale-[0.91] opacity-[0.78]',
                                )}
                                aria-current={isActive ? 'true' : undefined}
                            >
                                <PricingPlanCard
                                    plan={plan}
                                    density="compact"
                                    isCarouselActive={isActive}
                                    layoutClassName="h-full"
                                />
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div
                className="mt-3 flex items-center justify-center gap-2"
                role="tablist"
                aria-label="Choose pricing plan"
            >
                {PRICING_PLANS.map((plan, index) => (
                    <button
                        key={plan.id}
                        type="button"
                        role="tab"
                        aria-selected={index === activeIndex}
                        aria-label={`Show ${plan.name} plan`}
                        className={cn(
                            'h-2.5 w-2.5 rounded-full transition-colors',
                            'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary',
                            index === activeIndex ? 'bg-brand-green' : 'bg-brand-primary/25',
                        )}
                        onClick={() => scrollToIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
}
