import Container from '@/components/website/Container';
import SectionHeading from '@/components/website/SectionHeading';
import { featureAccentSolidStyles } from '@/lib/feature-accents';
import { cn } from '@/lib/utils';
import type { WorkflowStep } from '@/types/module-page';
import { ArrowRight } from 'lucide-react';
import { Fragment } from 'react';

type ModuleWorkflowProps = {
    eyebrow: string;
    title: string;
    description: string;
    steps: WorkflowStep[];
};

export default function ModuleWorkflow({ eyebrow, title, description, steps }: ModuleWorkflowProps) {
    return (
        <section className="bg-brand-surface section-spacing">
            <Container>
                <SectionHeading
                    eyebrow={eyebrow}
                    title={title}
                    description={description}
                    eyebrowTone="primary"
                    descriptionClassName="mx-auto max-w-2xl text-base leading-relaxed sm:text-[1.0625rem]"
                />
                <ol className="mt-10 flex list-none flex-col items-center gap-10 sm:mt-12 lg:flex-row lg:items-start lg:justify-center lg:gap-0">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        const isLast = index === steps.length - 1;
                        return (
                            <Fragment key={step.title}>
                                <li className="flex w-full max-w-[16rem] flex-col items-center text-center lg:w-auto lg:max-w-[11.5rem] lg:flex-1">
                                    <span
                                        className={cn(
                                            'inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl shadow-sm',
                                            featureAccentSolidStyles[step.accent],
                                        )}
                                    >
                                        <Icon className="h-7 w-7 text-white" strokeWidth={2} aria-hidden />
                                    </span>
                                    <h3 className="text-brand-navy mt-5 text-sm font-bold sm:text-base">
                                        {index + 1}. {step.title}
                                    </h3>
                                    <p className="text-muted-foreground mt-2 text-xs leading-relaxed sm:text-sm">{step.description}</p>
                                </li>
                                {!isLast ? (
                                    <li
                                        className="hidden shrink-0 list-none items-center self-start pt-8 lg:flex lg:w-8 lg:justify-center xl:w-10"
                                        aria-hidden
                                    >
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
