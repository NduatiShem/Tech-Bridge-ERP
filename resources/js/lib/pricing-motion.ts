import { cn } from '@/lib/utils';

export type PricingMotionVariant = 'fade-up' | 'fade-right' | 'fade-in';

const heroClassByVariant: Record<PricingMotionVariant, string> = {
    'fade-up': 'pricing-animate-fade-up',
    'fade-right': 'pricing-animate-fade-right',
    'fade-in': 'pricing-animate-fade-in',
};

const pendingClassByVariant: Record<PricingMotionVariant, string> = {
    'fade-up': 'pricing-reveal-pending',
    'fade-right': 'pricing-reveal-pending-right',
    'fade-in': 'pricing-reveal-pending',
};

/** Hero / first paint — CSS keyframe runs on mount (no React state toggle). */
export function pricingHeroAnimate(variant: PricingMotionVariant = 'fade-up', className?: string) {
    return cn(heroClassByVariant[variant], className);
}

/** Scroll reveal — pending until `revealed`, then keyframe runs. */
export function pricingScrollReveal(
    revealed: boolean,
    variant: PricingMotionVariant = 'fade-up',
    className?: string,
) {
    return cn(pendingClassByVariant[variant], revealed && 'pricing-reveal-go', className);
}

export function pricingMotionDelayStyle(delayMs: number): { animationDelay?: string } | undefined {
    if (delayMs <= 0) {
        return undefined;
    }
    return { animationDelay: `${delayMs}ms` };
}
