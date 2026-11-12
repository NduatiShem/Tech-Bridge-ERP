import type { FaqItem } from '@/data/faqs-support';
import { cn } from '@/lib/utils';
import { ChevronDown, Package, Settings } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useId, useState } from 'react';

type FaqsAccordionGroupProps = {
    id: string;
    title: string;
    categoryId: string;
    items: FaqItem[];
    defaultOpenIndex?: number;
};

const GROUP_STYLES: Record<string, { iconBg: string; Icon: LucideIcon }> = {
    general: { iconBg: 'bg-blue-500', Icon: Settings },
    implementation: { iconBg: 'bg-emerald-500', Icon: Package },
};

export default function FaqsAccordionGroup({
    id,
    title,
    categoryId,
    items,
    defaultOpenIndex,
}: FaqsAccordionGroupProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex ?? null);
    const headingId = useId();
    const groupStyle = GROUP_STYLES[categoryId] ?? GROUP_STYLES.general;
    const GroupIcon = groupStyle.Icon;

    if (items.length === 0) {
        return null;
    }

    return (
        <section id={id} aria-labelledby={headingId} className="scroll-mt-28">
            <div className="overflow-hidden rounded-[14px] border border-slate-200/90 bg-white shadow-[0_3px_14px_rgba(30,64,120,0.06)]">
                <div className="flex items-center gap-2.5 border-b border-slate-100 px-3 py-2.5 sm:px-4 sm:py-3">
                    <span
                        className={cn(
                            'flex h-9 w-9 shrink-0 items-center justify-center rounded-full sm:h-10 sm:w-10',
                            groupStyle.iconBg,
                        )}
                    >
                        <GroupIcon className="h-4 w-4 text-white sm:h-[1.125rem] sm:w-[1.125rem]" strokeWidth={2.25} aria-hidden />
                    </span>
                    <h2 id={headingId} className="text-brand-navy text-base font-bold tracking-tight sm:text-lg">
                        {title}
                    </h2>
                </div>

                <ul className="divide-y divide-slate-100">
                    {items.map((item, index) => {
                        const isOpen = openIndex === index;
                        const panelId = `${id}-panel-${index}`;

                        return (
                            <li key={item.question}>
                                <h3>
                                    <button
                                        type="button"
                                        id={`${panelId}-trigger`}
                                        className={cn(
                                            'flex min-h-11 w-full items-center justify-between gap-3 px-3 py-2.5 text-left sm:px-4 sm:py-3',
                                            'transition-colors duration-200 motion-reduce:transition-none',
                                            isOpen ? 'bg-[#EFF7FF]' : 'bg-white hover:bg-slate-50/80',
                                            'focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand-primary',
                                        )}
                                        aria-expanded={isOpen}
                                        aria-controls={panelId}
                                        onClick={() => setOpenIndex(isOpen ? null : index)}
                                    >
                                        <span className="text-brand-navy text-sm font-semibold sm:text-[15px]">{item.question}</span>
                                        <ChevronDown
                                            className={cn(
                                                'text-brand-primary h-4 w-4 shrink-0 transition-transform duration-200 motion-reduce:transition-none sm:h-5 sm:w-5',
                                                isOpen && 'rotate-180',
                                            )}
                                            aria-hidden
                                        />
                                    </button>
                                </h3>
                                <div
                                    id={panelId}
                                    role="region"
                                    aria-labelledby={`${panelId}-trigger`}
                                    className={cn(
                                        'grid transition-[grid-template-rows,opacity] duration-200 ease-out motion-reduce:transition-none',
                                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                                    )}
                                    aria-hidden={!isOpen}
                                >
                                    <div className="overflow-hidden">
                                        <p className="text-muted-foreground border-t border-slate-100 bg-white px-3 pt-2 pb-3 text-sm leading-relaxed sm:px-4 sm:pb-3.5">
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}
