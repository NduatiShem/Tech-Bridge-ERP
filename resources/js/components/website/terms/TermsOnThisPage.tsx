import { TERMS_ON_PAGE_LABEL, TERMS_SECTIONS } from '@/data/terms-of-service';
import { cn } from '@/lib/utils';

type TermsOnThisPageProps = {
    activeSectionId: string;
    onSelect: (sectionId: string) => void;
    className?: string;
};

export default function TermsOnThisPage({ activeSectionId, onSelect, className }: TermsOnThisPageProps) {
    return (
        <nav aria-label={TERMS_ON_PAGE_LABEL} className={cn('min-w-0', className)}>
            <p className="text-brand-navy text-sm font-bold sm:text-[15px]">{TERMS_ON_PAGE_LABEL}</p>
            <ol className="mt-3 space-y-0.5">
                {TERMS_SECTIONS.map((section) => {
                    const isActive = section.id === activeSectionId;

                    return (
                        <li key={section.id}>
                            <button
                                type="button"
                                onClick={() => onSelect(section.id)}
                                className={cn(
                                    'flex w-full items-start gap-2 rounded-lg border-l-[3px] py-1.5 pr-2 text-left text-xs transition-colors sm:text-[13px]',
                                    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary',
                                    isActive
                                        ? 'border-brand-primary bg-[#EAF5FF] pl-2.5 font-semibold text-brand-primary'
                                        : 'text-muted-foreground hover:text-brand-navy border-transparent pl-2 hover:bg-slate-50',
                                )}
                                aria-current={isActive ? 'location' : undefined}
                            >
                                <span className="text-brand-primary/80 w-5 shrink-0 font-bold tabular-nums">{section.number}.</span>
                                <span className="min-w-0 leading-snug">{section.title}</span>
                            </button>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
