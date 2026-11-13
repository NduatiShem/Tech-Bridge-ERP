import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type PrimaryButtonProps = {
    children: ReactNode;
    href?: string;
    className?: string;
    type?: 'button' | 'submit';
    disabled?: boolean;
    onClick?: () => void;
} & Omit<ComponentPropsWithoutRef<'button'>, 'type' | 'onClick' | 'className' | 'children'>;

export default function PrimaryButton({ children, href, className, type = 'button', disabled, onClick, ...rest }: PrimaryButtonProps) {
    const classes = cn(
        'inline-flex min-h-11 items-center justify-center rounded-lg bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm',
        'transition-[color,background-color,box-shadow,transform] duration-200 ease-out',
        'hover:bg-brand-primary/90 motion-safe:hover:-translate-y-px motion-safe:hover:shadow-md',
        'motion-reduce:transition-none motion-reduce:hover:transform-none',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary',
        'disabled:pointer-events-none disabled:opacity-50',
        className,
    );

    if (href) {
        return (
            <Link href={href} className={classes} onClick={onClick}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} className={classes} disabled={disabled} onClick={onClick} {...rest}>
            {children}
        </button>
    );
}
