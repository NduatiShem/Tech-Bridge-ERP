import Container from '@/components/website/Container';
import RevealOnView from '@/components/website/motion/RevealOnView';
import { PRICING_FAQS, PRICING_FAQ_SECTION, type PricingFaqItem } from '@/data/pricing';
import { cn } from '@/lib/utils';
import { ArrowRight, Minus, Plus } from 'lucide-react';
import { useId, useState } from 'react';

const FAQ_STAGGER_MS = 80;

function FaqCard({ faq }: { faq: PricingFaqItem }) {
    const [expanded, setExpanded] = useState(false);
    const fullAnswerId = useId();

    return (
        <article
            className={cn(
                'group relative h-fit self-start rounded-xl border border-[#E8EEF7] bg-white shadow-[0_3px_18px_rgba(15,23,42,0.045)] transition-shadow duration-200',
                'hover:shadow-[0_6px_24px_rgba(15,23,42,0.08)]',
                expanded && 'shadow-[0_6px_24px_rgba(15,23,42,0.08)]',
            )}
        >
            <div className="flex items-start gap-4 px-5 py-4 text-left sm:gap-5 sm:px-6 sm:py-5">
                <ArrowRight
                    className={cn(
                        'text-brand-primary mt-1 h-5 w-5 shrink-0 transition-transform duration-200 motion-reduce:transition-none',
                        expanded && 'rotate-90',
                    )}
                    strokeWidth={2.5}
                    aria-hidden
                />

                <div className="min-w-0 flex-1">
                    <h3 className="text-brand-navy text-[15px] leading-snug font-bold sm:text-base">{faq.question}</h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-[#66759B] sm:text-sm">{faq.shortAnswer}</p>

                    <div
                        id={fullAnswerId}
                        className={cn(
                            'grid transition-[grid-template-rows,opacity] duration-[280ms] ease-out motion-reduce:transition-none',
                            expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                        )}
                        aria-hidden={!expanded}
                    >
                        <div className="overflow-hidden">
                            <div className="mt-4 border-t border-[#E8EEF7] pt-4">
                                <p className="text-[13px] leading-relaxed text-slate-600 sm:text-sm sm:leading-6">
                                    {faq.fullAnswer}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <button
                    type="button"
                    onClick={() => setExpanded((open) => !open)}
                    aria-expanded={expanded}
                    aria-controls={fullAnswerId}
                    className={cn(
                        'flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EAF5FF] text-brand-primary',
                        'transition-colors hover:bg-[#DCEEFF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary',
                    )}
                >
                    <span className="sr-only">{expanded ? 'Collapse full answer' : 'Expand full answer'}</span>
                    {expanded ? (
                        <Minus className="h-5 w-5" strokeWidth={2.5} aria-hidden />
                    ) : (
                        <Plus className="h-5 w-5" strokeWidth={2.5} aria-hidden />
                    )}
                </button>
            </div>
        </article>
    );
}

export default function PricingFaqSection() {
    return (
        <section className="bg-white py-12 sm:py-14 lg:py-16">
            <Container>
                <div className="mb-7 text-center sm:mb-9">
                    <h2 className="text-brand-navy text-[26px] font-bold tracking-tight sm:text-[30px]">
                        {PRICING_FAQ_SECTION.title}
                    </h2>
                    <p className="text-muted-foreground mx-auto mt-2 max-w-2xl text-sm leading-relaxed sm:text-base">
                        {PRICING_FAQ_SECTION.description}
                    </p>
                </div>

                <div className="grid w-full grid-cols-1 items-start gap-4 md:grid-cols-2 md:gap-5 lg:gap-x-6 lg:gap-y-5">
                    {PRICING_FAQS.map((faq, index) => (
                        <RevealOnView key={faq.question} className="h-fit self-start" delayMs={index * FAQ_STAGGER_MS}>
                            <FaqCard faq={faq} />
                        </RevealOnView>
                    ))}
                </div>
            </Container>
        </section>
    );
}
