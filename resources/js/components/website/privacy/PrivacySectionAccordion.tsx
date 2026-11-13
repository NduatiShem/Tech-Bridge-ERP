import type { PrivacyBlock, PrivacySection } from '@/data/privacy-policy';
import { cn } from '@/lib/utils';
import { Check, ChevronDown } from 'lucide-react';
import { useId } from 'react';

type PrivacySectionAccordionProps = {
    section: PrivacySection;
    open: boolean;
    onOpenChange: (open: boolean) => void;
};

function PrivacyBlockContent({ block }: { block: PrivacyBlock }) {
    if (block.type === 'paragraph' && block.text) {
        return <p>{block.text}</p>;
    }

    if (block.type === 'bullets' && block.items?.length) {
        return (
            <ul className="list-disc space-y-1.5 pl-5 marker:text-brand-primary">
                {block.items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        );
    }

    if (block.type === 'checks' && block.items?.length) {
        return (
            <ul className="space-y-2">
                {block.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                        <Check className="text-brand-green mt-0.5 h-4 w-4 shrink-0" strokeWidth={2.5} aria-hidden />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        );
    }

    if (block.type === 'collect-categories' && block.items?.length) {
        return (
            <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-3">
                {block.items.map((category) => {
                    const Icon = category.icon;

                    return (
                        <div
                            key={category.title}
                            className={cn('rounded-xl border p-3 shadow-sm sm:p-3.5', category.surfaceClassName)}
                        >
                            <span
                                className={cn(
                                    'flex h-10 w-10 items-center justify-center rounded-lg text-white shadow-sm',
                                    category.iconClassName,
                                )}
                            >
                                <Icon className="h-[1.125rem] w-[1.125rem]" strokeWidth={2.25} aria-hidden />
                            </span>
                            <p className="text-brand-navy mt-2.5 text-sm font-bold">{category.title}</p>
                            <p className="text-muted-foreground mt-1 text-xs leading-relaxed sm:text-[13px]">
                                {category.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        );
    }

    return null;
}

export default function PrivacySectionAccordion({ section, open, onOpenChange }: PrivacySectionAccordionProps) {
    const panelId = useId();
    const triggerId = `${panelId}-trigger`;

    return (
        <article id={section.id} className="scroll-mt-28">
            <div
                className={cn(
                    'overflow-hidden rounded-[14px] border border-slate-200/90 bg-white shadow-[0_3px_14px_rgba(30,64,120,0.06)]',
                    open && 'shadow-[0_6px_22px_rgba(30,64,120,0.09)]',
                )}
            >
                <h2 className="sr-only">
                    {section.number}. {section.title}
                </h2>
                <button
                    type="button"
                    id={triggerId}
                    className={cn(
                        'flex min-h-12 w-full items-start justify-between gap-3 px-3 py-3 text-left sm:px-4 sm:py-3.5',
                        'transition-colors duration-200 motion-reduce:transition-none',
                        open ? 'bg-[#EFF7FF]' : 'bg-white hover:bg-slate-50/80',
                        'focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand-primary',
                    )}
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => onOpenChange(!open)}
                >
                    <span
                        className="bg-brand-primary mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white shadow-sm sm:h-10 sm:w-10"
                        aria-hidden
                    >
                        {section.number}
                    </span>
                    <span className="min-w-0 flex-1">
                        <span className="text-brand-navy block text-base font-bold tracking-tight sm:text-[1.05rem]">
                            {section.title}
                        </span>
                        {!open ? (
                            <span className="text-muted-foreground mt-0.5 block text-xs leading-snug sm:text-[13px]">
                                {section.teaser}
                            </span>
                        ) : null}
                    </span>
                    <ChevronDown
                        className={cn(
                            'text-brand-primary mt-1 h-5 w-5 shrink-0 transition-transform duration-200 motion-reduce:transition-none',
                            open && 'rotate-180',
                        )}
                        aria-hidden
                    />
                </button>

                <div
                    id={panelId}
                    role="region"
                    aria-labelledby={triggerId}
                    className={cn(
                        'grid transition-[grid-template-rows,opacity] duration-200 ease-out motion-reduce:transition-none',
                        open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                    )}
                    aria-hidden={!open}
                >
                    <div className="overflow-hidden">
                        <div className="text-muted-foreground space-y-3 border-t border-slate-100 bg-[#F8FAFD] px-3 py-3 text-sm leading-relaxed sm:px-4 sm:py-4 sm:text-[15px] sm:leading-relaxed">
                            {section.body.map((block, index) => (
                                <PrivacyBlockContent key={`${section.id}-block-${index}`} block={block} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
