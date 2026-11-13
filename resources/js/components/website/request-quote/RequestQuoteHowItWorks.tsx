import Container from '@/components/website/Container';
import RevealOnView from '@/components/website/motion/RevealOnView';
import SectionHeading from '@/components/website/SectionHeading';
import { REQUEST_QUOTE_ACCENT_BG, REQUEST_QUOTE_HOW_IT_WORKS } from '@/data/request-quote';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';

const STEP_STAGGER_MS = 80;

export default function RequestQuoteHowItWorks() {
    return (
        <section className="bg-white py-10 sm:py-12 lg:py-14">
            <Container>
                <RevealOnView>
                    <SectionHeading
                        title={REQUEST_QUOTE_HOW_IT_WORKS.heading}
                        description={REQUEST_QUOTE_HOW_IT_WORKS.description}
                        descriptionClassName="mt-3 text-sm sm:text-base"
                        className="mx-auto max-w-2xl text-center"
                    />
                </RevealOnView>

                <ol className="mt-8 grid grid-cols-2 gap-x-3 gap-y-6 sm:mt-10 sm:gap-x-4 sm:gap-y-8 lg:grid-cols-4 lg:gap-4">
                    {REQUEST_QUOTE_HOW_IT_WORKS.steps.map((step, index) => {
                        const Icon = step.icon;
                        const isLast = index === REQUEST_QUOTE_HOW_IT_WORKS.steps.length - 1;

                        return (
                            <RevealOnView
                                key={step.title}
                                as="li"
                                className="relative flex flex-col items-center text-center"
                                delayMs={index * STEP_STAGGER_MS}
                            >
                                {!isLast ? (
                                    <ChevronRight
                                        className="text-brand-primary absolute top-6 -right-3 hidden h-5 w-5 lg:block xl:-right-4"
                                        aria-hidden
                                    />
                                ) : null}
                                <div className="relative">
                                    <span
                                        className={cn(
                                            'flex h-12 w-12 items-center justify-center rounded-full text-white shadow-md sm:h-14 sm:w-14',
                                            REQUEST_QUOTE_ACCENT_BG[step.accent],
                                        )}
                                    >
                                        <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2} aria-hidden />
                                    </span>
                                    <span className="bg-brand-navy absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold text-white ring-2 ring-white sm:h-6 sm:w-6 sm:text-[11px]">
                                        {index + 1}
                                    </span>
                                </div>
                                <h3 className="text-brand-navy mt-2.5 text-sm font-bold sm:mt-3 sm:text-base">{step.title}</h3>
                                <p className="text-muted-foreground mt-1 max-w-none px-0.5 text-xs leading-snug sm:mt-1.5 sm:max-w-[14rem] sm:px-0 sm:text-sm sm:leading-relaxed">
                                    {step.description}
                                </p>
                            </RevealOnView>
                        );
                    })}
                </ol>
            </Container>
        </section>
    );
}
