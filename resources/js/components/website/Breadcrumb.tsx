import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';

export type BreadcrumbItem = {
    label: string;
    href?: string;
};

type BreadcrumbProps = {
    items: BreadcrumbItem[];
    className?: string;
};

export default function Breadcrumb({ items, className }: BreadcrumbProps) {
    return (
        <nav aria-label="Breadcrumb" className={cn('text-muted-foreground text-sm', className)}>
            <ol className="flex flex-wrap items-center gap-1">
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;
                    return (
                        <li key={`${item.label}-${index}`} className="flex items-center gap-1">
                            {item.href && !isLast ? (
                                <Link
                                    href={item.href}
                                    className="rounded-sm hover:text-brand-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary transition-colors"
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <span className={cn(isLast && 'text-brand-navy font-medium')}>{item.label}</span>
                            )}
                            {!isLast ? <ChevronRight className="h-3.5 w-3.5 opacity-60" aria-hidden /> : null}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
