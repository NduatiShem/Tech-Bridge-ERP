import Container from '@/components/website/Container';
import SectionHeading from '@/components/website/SectionHeading';
import { featureAccentSolidStyles } from '@/lib/feature-accents';
import { cn } from '@/lib/utils';
import type { ModuleIntegration } from '@/types/module-page';
import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';

type ModuleIntegrationsProps = {
    eyebrow: string;
    title: string;
    integrations: ModuleIntegration[];
};

export default function ModuleIntegrations({ eyebrow, title, integrations }: ModuleIntegrationsProps) {
    return (
        <section className="bg-brand-surface section-spacing">
            <Container>
                <SectionHeading eyebrow={eyebrow} title={title} eyebrowTone="primary" />
                <ul className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                    {integrations.map((item) => {
                        const Icon = item.icon;
                        return (
                            <li key={item.title}>
                                <Link
                                    href={route('modules.show', { slug: item.moduleSlug })}
                                    className="group relative flex h-full items-start gap-4 rounded-2xl bg-white p-5 shadow-[0_8px_30px_-6px_rgba(23,36,59,0.14)] transition-shadow hover:shadow-[0_12px_36px_-6px_rgba(23,36,59,0.18)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary sm:p-6"
                                >
                                    <ArrowRight
                                        className="text-brand-primary pointer-events-none absolute top-5 right-5 h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5"
                                        strokeWidth={2}
                                        aria-hidden
                                    />
                                    <span
                                        className={cn(
                                            'inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl',
                                            featureAccentSolidStyles[item.accent],
                                        )}
                                    >
                                        <Icon className="h-[1.35rem] w-[1.35rem] text-white" strokeWidth={2} aria-hidden />
                                    </span>
                                    <div className="min-w-0 flex-1 pr-6">
                                    <h3 className="text-brand-navy text-base leading-snug font-bold">{item.title}</h3>
                                    <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{item.description}</p>
                                    </div>
                                    <span className="sr-only">View {item.title} module</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </Container>
        </section>
    );
}
