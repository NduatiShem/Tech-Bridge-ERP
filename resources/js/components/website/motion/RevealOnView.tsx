import { useRevealOnce } from '@/hooks/use-reveal-once';
import { pricingMotionDelayStyle, pricingScrollReveal, type PricingMotionVariant } from '@/lib/pricing-motion';
import { cn } from '@/lib/utils';
import { createElement, type ComponentPropsWithoutRef, type ElementType, type ReactNode } from 'react';

type RevealOnViewProps<T extends ElementType> = {
    as?: T;
    children: ReactNode;
    className?: string;
    delayMs?: number;
    variant?: PricingMotionVariant;
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'children' | 'className' | 'style'>;

export default function RevealOnView<T extends ElementType = 'div'>({
    as,
    children,
    className,
    delayMs = 0,
    variant = 'fade-up',
    ...rest
}: RevealOnViewProps<T>) {
    const Tag = as ?? 'div';
    const { ref, revealed } = useRevealOnce();

    return createElement(
        Tag,
        {
            ref,
            className: cn(pricingScrollReveal(revealed, variant), className),
            style: pricingMotionDelayStyle(delayMs),
            ...rest,
        },
        children,
    );
}
