import Container from '@/components/website/Container';
import SectionHeading from '@/components/website/SectionHeading';
import RevealOnView from '@/components/website/motion/RevealOnView';
import { SOLUTIONS_APPROACH_SECTION, SOLUTIONS_APPROACH_STEPS } from '@/data/solutions';
import { featureAccentSolidStyles } from '@/lib/feature-accents';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { Fragment } from 'react';

const STEP_STAGGER_MS = 55;

export default function SolutionsApproachSection() {
    return (
        <section className="bg-white py-10 sm:py-12 lg:py-14">
            <Container>
                <RevealOnView>
                    <SectionHeading
                        eyebrow={SOLUTIONS_APPROACH_SECTION.eyebrow}
                        title={SOLUTIONS_APPROACH_SECTION.title}
                        description={SOLUTIONS_APPROACH_SECTION.description}
                        eyebrowTone="primary"
                        descriptionClassName="mx-auto max-w-2xl text-sm leading-relaxed sm:text-base"
                    />
                </RevealOnView>

                <ol className="mt-8 flex list-none flex-col items-center gap-8 sm:mt-10 lg:flex-row lg:items-start lg:justify-center lg:gap-0">
                    {SOLUTIONS_APPROACH_STEPS.map((step, index) => {
                        const Icon = step.icon;
                        const isLast = index === SOLUTIONS_APPROACH_STEPS.length - 1;

                        return (
                            <Fragment key={step.title}>
                                <RevealOnView
                                    as="li"
                                    delayMs={index * STEP_STAGGER_MS}
                                    className="flex w-full max-w-[16rem] flex-col items-center text-center lg:w-auto lg:max-w-[11.5rem] lg:flex-1"
                                >
                                    <span
                                        className={cn(
                                            'inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-white shadow-md',
                                            featureAccentSolidStyles[step.accent],
                                        )}
                                    >
                                        <Icon className="h-7 w-7" strokeWidth={2.15} aria-hidden />
                                    </span>
                                    <h3 className="text-brand-navy mt-4 text-sm font-bold sm:text-base">
                                        {index + 1}. {step.title}
                                    </h3>
                                    <p className="text-muted-foreground mt-2 text-xs leading-relaxed sm:text-sm">
                                        {step.description}
                                    </p>
                                </RevealOnView>
                                {!isLast ? (
                                    <li className="hidden list-none items-center self-start pt-8 lg:flex lg:w-8 lg:justify-center xl:w-10" aria-hidden>
                                        <ArrowRight className="text-brand-primary h-4 w-4" strokeWidth={2} />
                                    </li>
                                ) : null}
                            </Fragment>
                        );
                    })}
                </ol>
            </Container>
        </section>
    );
}
