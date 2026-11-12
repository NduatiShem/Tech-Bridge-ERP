import Container from '@/components/website/Container';
import PrimaryButton from '@/components/website/PrimaryButton';
import SecondaryButton from '@/components/website/SecondaryButton';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type CallToActionProps = {
    title: string;
    description: string | ReactNode;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel?: string;
    secondaryHref?: string;
    className?: string;
    variant?: 'default' | 'brand';
};

export default function CallToAction({
    title,
    description,
    primaryLabel,
    primaryHref,
    secondaryLabel,
    secondaryHref,
    className,
    variant = 'brand',
}: CallToActionProps) {
    return (
        <section className={cn(variant === 'brand' ? 'bg-brand-navy' : 'bg-brand-surface', className)}>
            <Container className="py-14 sm:py-20">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className={cn('text-3xl font-bold tracking-tight sm:text-4xl', variant === 'brand' ? 'text-white' : 'text-brand-navy')}>
                        {title}
                    </h2>
                    <p className={cn('mt-4 text-lg leading-relaxed', variant === 'brand' ? 'text-white/80' : 'text-muted-foreground')}>
                        {description}
                    </p>
                    <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <PrimaryButton
                            href={primaryHref}
                            className={cn(variant === 'brand' && 'bg-brand-green hover:bg-brand-green/90 focus-visible:outline-brand-green')}
                        >
                            {primaryLabel}
                        </PrimaryButton>
                        {secondaryLabel && secondaryHref ? (
                            <SecondaryButton
                                href={secondaryHref}
                                className={cn(variant === 'brand' && 'border-white/30 bg-transparent text-white hover:bg-white/10')}
                            >
                                {secondaryLabel}
                            </SecondaryButton>
                        ) : null}
                    </div>
                </div>
            </Container>
        </section>
    );
}
