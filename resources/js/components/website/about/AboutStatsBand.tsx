import Container from '@/components/website/Container';
import RevealOnView from '@/components/website/motion/RevealOnView';
import { ABOUT_STATS } from '@/data/about';
import { Building2, Factory, Layers, ShieldCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const STAT_ICONS: LucideIcon[] = [Building2, Factory, Layers, ShieldCheck];
const STAT_STAGGER_MS = 60;

export default function AboutStatsBand() {
    return (
        <section className="border-y border-slate-100 bg-[#EAF2FB] py-6 sm:py-8" aria-label="TechBridge at a glance">
            <Container>
                <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
                    {ABOUT_STATS.map((stat, index) => {
                        const Icon = STAT_ICONS[index] ?? Building2;
                        return (
                            <RevealOnView
                                key={stat.label}
                                as="li"
                                className="flex min-w-0 items-center gap-3"
                                delayMs={index * STAT_STAGGER_MS}
                                variant="fade-in"
                            >
                                <span className="bg-brand-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white sm:h-11 sm:w-11">
                                    <Icon className="h-5 w-5" strokeWidth={2.25} aria-hidden />
                                </span>
                                <div className="min-w-0">
                                    <p className="text-brand-primary text-xl font-bold tracking-tight sm:text-2xl">{stat.value}</p>
                                    <p className="text-brand-navy text-xs leading-snug font-medium sm:text-sm">{stat.label}</p>
                                </div>
                            </RevealOnView>
                        );
                    })}
                </ul>
            </Container>
        </section>
    );
}
