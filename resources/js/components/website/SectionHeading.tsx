import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type SectionHeadingProps = {
    eyebrow?: string;
    title: string;
    description?: string | ReactNode;
    align?: 'left' | 'center';
    /** Module pages use primary blue eyebrow per approved mockups. */
    eyebrowTone?: 'green' | 'primary';
    descriptionClassName?: string;
    className?: string;
};

export default function SectionHeading({
    eyebrow,
    title,
    description,
    align = 'center',
    eyebrowTone = 'green',
    descriptionClassName,
    className,
}: SectionHeadingProps) {
    return (
        <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center', className)}>
            {eyebrow ? (
                <p
                    className={cn(
                        'mb-3 text-xs font-bold tracking-[0.14em] uppercase sm:text-sm',
                        eyebrowTone === 'primary' ? 'text-brand-primary' : 'text-brand-green',
                    )}
                >
                    {eyebrow}
                </p>
            ) : null}
            <h2 className="text-brand-navy text-2xl font-bold tracking-tight text-balance sm:text-3xl lg:text-4xl">{title}</h2>
            {description ? (
                <p
                    className={cn(
                        'text-muted-foreground mt-4 text-base leading-relaxed text-pretty sm:text-lg',
                        descriptionClassName,
                    )}
                >
                    {description}
                </p>
            ) : null}
        </div>
    );
}
