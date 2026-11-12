import Container from '@/components/website/Container';
import FaqsAccordionGroup from '@/components/website/faqs-support/FaqsAccordionGroup';
import KnowledgeBaseSection from '@/components/website/faqs-support/KnowledgeBaseSection';
import SupportContactForm from '@/components/website/faqs-support/SupportContactForm';
import SupportSidebar from '@/components/website/faqs-support/SupportSidebar';
import { FAQ_SECTIONS } from '@/data/faqs-support';
import type { FaqItem, FaqSection } from '@/data/faqs-support';
import { useMemo } from 'react';

type FaqsContentSectionProps = {
    searchQuery: string;
    activeCategoryId: string | null;
};

const DEFAULT_CATEGORY_IDS = ['general', 'implementation'] as const;

function filterItems(items: FaqItem[], query: string): FaqItem[] {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
        return items;
    }
    return items.filter(
        (item) =>
            item.question.toLowerCase().includes(normalized) || item.answer.toLowerCase().includes(normalized),
    );
}

function sectionMatchesCategory(section: FaqSection, categoryId: string | null, hasSearch: boolean): boolean {
    if (hasSearch) {
        return true;
    }
    if (!categoryId) {
        return DEFAULT_CATEGORY_IDS.includes(section.categoryId as (typeof DEFAULT_CATEGORY_IDS)[number]);
    }
    return section.categoryId === categoryId;
}

export default function FaqsContentSection({ searchQuery, activeCategoryId }: FaqsContentSectionProps) {
    const hasSearch = searchQuery.trim().length > 0;

    const visibleSections = useMemo(() => {
        return FAQ_SECTIONS.map((section) => {
            if (!sectionMatchesCategory(section, activeCategoryId, hasSearch)) {
                return null;
            }
            const items = filterItems(section.items, searchQuery);
            if (items.length === 0) {
                return null;
            }
            return {
                ...section,
                items,
                defaultOpenIndex: hasSearch ? 0 : section.defaultOpenIndex,
            };
        }).filter(Boolean) as Array<FaqSection & { items: FaqItem[] }>;
    }, [activeCategoryId, hasSearch, searchQuery]);

    const emptyMessage = hasSearch
        ? 'No FAQs match your search yet. Try another keyword or browse a category above.'
        : activeCategoryId
          ? 'Detailed FAQs for this category are being prepared. Try General or Implementation, or contact our team.'
          : 'No FAQs are available to display right now.';

    return (
        <section id="faqs-main-content" className="bg-brand-surface/40 py-8 sm:py-10 lg:py-11">
            <Container>
                <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-6">
                    <div className="min-w-0 space-y-4">
                        {visibleSections.length > 0 ? (
                            visibleSections.map((section) => (
                                <FaqsAccordionGroup
                                    key={section.id}
                                    id={section.id}
                                    title={section.title}
                                    categoryId={section.categoryId}
                                    items={section.items}
                                    defaultOpenIndex={section.defaultOpenIndex}
                                />
                            ))
                        ) : (
                            <p className="text-muted-foreground rounded-[14px] border border-dashed border-slate-200 bg-white px-4 py-6 text-center text-sm sm:px-5">
                                {emptyMessage}
                            </p>
                        )}

                        <KnowledgeBaseSection />
                    </div>

                    <div className="min-w-0 space-y-4">
                        <SupportSidebar />
                        <SupportContactForm />
                    </div>
                </div>
            </Container>
        </section>
    );
}
