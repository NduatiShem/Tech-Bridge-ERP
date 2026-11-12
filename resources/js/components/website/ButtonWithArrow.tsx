import PrimaryButton from '@/components/website/PrimaryButton';
import SecondaryButton from '@/components/website/SecondaryButton';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';

type ButtonWithArrowProps = {
    children: ReactNode;
    href: string;
    variant?: 'primary' | 'secondary' | 'green';
    className?: string;
    /** Shifts the arrow 4px on hover (pricing CTA). */
    nudgeArrowOnHover?: boolean;
};

export default function ButtonWithArrow({
    children,
    href,
    variant = 'primary',
    className,
    nudgeArrowOnHover = false,
}: ButtonWithArrowProps) {
    const arrowClass = cn(
        'ml-2 h-4 w-4',
        nudgeArrowOnHover &&
            'transition-transform duration-200 ease-out group-hover:translate-x-1 motion-reduce:transform-none',
    );

    const content = (
        <>
            {children}
            <ArrowRight className={arrowClass} aria-hidden />
        </>
    );

    if (variant === 'secondary') {
        return (
            <SecondaryButton href={href} className={cn('gap-0', nudgeArrowOnHover && 'group', className)}>
                {content}
            </SecondaryButton>
        );
    }

    return (
        <PrimaryButton
            href={href}
            className={cn(
                'group gap-0',
                variant === 'green' && 'bg-brand-green hover:bg-brand-green/90 focus-visible:outline-brand-green',
                className,
            )}
        >
            {content}
        </PrimaryButton>
    );
}
