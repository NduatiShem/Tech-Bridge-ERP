import { cn } from '@/lib/utils';
import type { ErpModule } from '@/types/website';
import { Link } from '@inertiajs/react';

type ModuleCardProps = {
    module: ErpModule;
    className?: string;
};

export default function ModuleCard({ module, className }: ModuleCardProps) {
    const Icon = module.icon;

    return (
        <Link
            href={route('modules.show', { slug: module.slug })}
            className={cn(
                'group flex h-full flex-col rounded-xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary',
                className,
            )}
        >
            <div className="bg-brand-surface text-brand-primary mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg transition-colors group-hover:bg-brand-primary group-hover:text-white">
                <Icon className="h-6 w-6" aria-hidden />
            </div>
            <h3 className="text-brand-navy text-lg font-semibold">{module.title}</h3>
            <p className="text-muted-foreground mt-2 flex-1 text-sm leading-relaxed">{module.summary}</p>
            <span className="text-brand-primary mt-4 text-sm font-medium group-hover:underline">Learn more</span>
        </Link>
    );
}
