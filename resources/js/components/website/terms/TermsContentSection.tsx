import Container from '@/components/website/Container';
import TermsOnThisPage from '@/components/website/terms/TermsOnThisPage';
import TermsSectionAccordion from '@/components/website/terms/TermsSectionAccordion';
import TermsSidebar from '@/components/website/terms/TermsSidebar';
import RevealOnView from '@/components/website/motion/RevealOnView';
import { TERMS_SECTIONS } from '@/data/terms-of-service';
import { cn } from '@/lib/utils';
import { useCallback, useEffect, useMemo, useState } from 'react';

/** Stagger accordion entrances without long delays on lower sections (cycles 0–3). */
const TERMS_ACCORDION_STAGGER_MS = 55;

function buildInitialOpenState(): Record<string, boolean> {
    return TERMS_SECTIONS.reduce<Record<string, boolean>>((acc, section) => {
        acc[section.id] = section.defaultOpen ?? false;
        return acc;
    }, {});
}

export default function TermsContentSection() {
    const [openState, setOpenState] = useState<Record<string, boolean>>(buildInitialOpenState);
    const [activeSectionId, setActiveSectionId] = useState(TERMS_SECTIONS[0]?.id ?? 'introduction');

    const sectionIds = useMemo(() => TERMS_SECTIONS.map((section) => section.id), []);

    useEffect(() => {
        const elements = sectionIds
            .map((id) => document.getElementById(id))
            .filter((el): el is HTMLElement => Boolean(el));

        if (elements.length === 0) {
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

                const top = visible[0];
                if (top?.target?.id) {
                    setActiveSectionId(top.target.id);
                }
            },
            { rootMargin: '-30% 0px -55% 0px', threshold: [0.12, 0.35, 0.6] },
        );

        elements.forEach((element) => observer.observe(element));

        return () => observer.disconnect();
    }, [sectionIds]);

    const handleNavigate = useCallback((sectionId: string) => {
        setActiveSectionId(sectionId);
        setOpenState((current) => ({ ...current, [sectionId]: true }));

        const target = document.getElementById(sectionId);
        target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, []);

    const handleOpenChange = useCallback((sectionId: string, open: boolean) => {
        setOpenState((current) => ({ ...current, [sectionId]: open }));
    }, []);

    return (
        <section className="bg-brand-surface/40 py-8 sm:py-10 lg:py-11">
            <Container>
                <div className="grid items-start gap-6 xl:grid-cols-[minmax(0,12.5rem)_minmax(0,1fr)_minmax(0,17.5rem)] xl:gap-7">
                    <RevealOnView
                        className={cn(
                            'hidden min-w-0 xl:block xl:sticky xl:top-28 xl:max-h-[calc(100vh-8rem)] xl:overflow-y-auto xl:pr-1',
                        )}
                        variant="fade-up"
                    >
                        <TermsOnThisPage activeSectionId={activeSectionId} onSelect={handleNavigate} />
                    </RevealOnView>

                    <div className="min-w-0 space-y-3 sm:space-y-3.5">
                        <RevealOnView className="xl:hidden">
                            <label htmlFor="terms-section-jump" className="text-brand-navy text-sm font-bold">
                                Jump to section
                            </label>
                            <select
                                id="terms-section-jump"
                                className="border-brand-primary/15 mt-2 w-full rounded-lg border bg-white px-3 py-2.5 text-sm text-slate-800 shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
                                value={activeSectionId}
                                onChange={(event) => handleNavigate(event.target.value)}
                            >
                                {TERMS_SECTIONS.map((section) => (
                                    <option key={section.id} value={section.id}>
                                        {section.number}. {section.title}
                                    </option>
                                ))}
                            </select>
                        </RevealOnView>

                        {TERMS_SECTIONS.map((section, index) => (
                            <RevealOnView
                                key={section.id}
                                className="h-fit self-start"
                                delayMs={(index % 4) * TERMS_ACCORDION_STAGGER_MS}
                            >
                                <TermsSectionAccordion
                                    section={section}
                                    open={openState[section.id] ?? false}
                                    onOpenChange={(open) => handleOpenChange(section.id, open)}
                                />
                            </RevealOnView>
                        ))}
                    </div>

                    <div className="min-w-0 xl:sticky xl:top-28">
                        <TermsSidebar />
                    </div>
                </div>
            </Container>
        </section>
    );
}
