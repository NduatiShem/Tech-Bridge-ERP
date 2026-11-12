import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import type { ReactNode } from 'react';

type SecondaryButtonProps = {
    children: ReactNode;
    href?: string;
    className?: string;
    type?: 'button' | 'submit';
    onClick?: () => void;
};

export default function SecondaryButton({ children, href, className, type = 'button', onClick }: SecondaryButtonProps) {
    const classes = cn(
        'inline-flex items-center justify-center rounded-lg border border-brand-primary/20 bg-white px-5 py-2.5 text-sm font-semibold text-brand-primary shadow-sm transition-colors',
        'hover:border-brand-primary/40 hover:bg-brand-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary',
        className,
    );

    if (href) {
        return (
            <Link href={href} className={classes}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} className={classes} onClick={onClick}>
            {children}
        </button>
    );
}
