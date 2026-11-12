import Container from '@/components/website/Container';
import SectionHeading from '@/components/website/SectionHeading';
import { featureAccentSolidStyles } from '@/lib/feature-accents';
import { cn } from '@/lib/utils';
import type { ModuleFeatureItem } from '@/types/module-page';
import { ArrowRight } from 'lucide-react';

type ModuleFeatureGridProps = {
    eyebrow: string;
    title: string;
    description: string;
    features: ModuleFeatureItem[];
};

export default function ModuleFeatureGrid({ eyebrow, title, description, features }: ModuleFeatureGridProps) {
    return (
        <section id="features" className="section-spacing bg-brand-white">
            <Container>
                <SectionHeading
                    eyebrow={eyebrow}
                    title={title}
                    description={description}
                    eyebrowTone="primary"
                    descriptionClassName="mx-auto max-w-[42rem] text-base leading-relaxed sm:text-[1.0625rem]"
                />
                <ul className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-7">
                    {features.map((feature) => {
                        const Icon = feature.icon;
                        return (
                            <li
                                key={feature.title}
                                className="relative flex h-full items-start gap-4 rounded-2xl bg-brand-white p-5 shadow-[0_8px_30px_-6px_rgba(23,36,59,0.14)] ring-1 ring-black/[0.04] sm:p-6"
                            >
                                <ArrowRight
                                    className="text-brand-primary pointer-events-none absolute top-5 right-5 h-4 w-4 shrink-0"
                                    strokeWidth={2}
                                    aria-hidden
                                />
                                <span
                                    className={cn(
                                        'inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl',
                                        featureAccentSolidStyles[feature.accent],
                                    )}
                                >
                                    <Icon className="h-[1.35rem] w-[1.35rem] text-white" strokeWidth={2} aria-hidden />
                                </span>
                                <div className="min-w-0 flex-1 pr-6">
                                    <h3 className="text-brand-navy text-base leading-snug font-bold">{feature.title}</h3>
                                    <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{feature.description}</p>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </Container>
        </section>
    );
}
