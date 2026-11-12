import { useCallback, useLayoutEffect, useState } from 'react';
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';

type UseRevealOnceOptions = {
    threshold?: number;
    rootMargin?: string;
};

/**
 * Fires once when the element enters the viewport. Respects reduced motion (immediate visible).
 */
export function useRevealOnce(options: UseRevealOnceOptions = {}) {
    const { threshold = 0.05, rootMargin = '0px 0px 10% 0px' } = options;
    const reducedMotion = usePrefersReducedMotion();
    const [revealed, setRevealed] = useState(() => reducedMotion);
    const [target, setTarget] = useState<HTMLElement | null>(null);

    const ref = useCallback((node: HTMLElement | null) => {
        setTarget(node);
    }, []);

    useLayoutEffect(() => {
        if (reducedMotion) {
            setRevealed(true);
            return;
        }

        if (!target) {
            return;
        }

        const reveal = () => {
            requestAnimationFrame(() => {
                requestAnimationFrame(() => setRevealed(true));
            });
        };

        const rect = target.getBoundingClientRect();
        const inView = rect.top < window.innerHeight * 1.05 && rect.bottom > 0;
        if (inView) {
            reveal();
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry?.isIntersecting) {
                    return;
                }
                reveal();
                observer.disconnect();
            },
            { threshold, rootMargin },
        );

        observer.observe(target);
        return () => observer.disconnect();
    }, [reducedMotion, threshold, rootMargin, target]);

    return { ref, revealed };
}
