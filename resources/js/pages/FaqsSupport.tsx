import FaqsCategoryGrid from '@/components/website/faqs-support/FaqsCategoryGrid';
import FaqsContentSection from '@/components/website/faqs-support/FaqsContentSection';
import FaqsSupportHero from '@/components/website/faqs-support/FaqsSupportHero';
import ModuleBottomCta from '@/components/website/modules/ModuleBottomCta';
import { FAQS_SUPPORT_BOTTOM_CTA } from '@/data/faqs-support';
import WebsiteLayout from '@/layouts/WebsiteLayout';
import { Headphones } from 'lucide-react';
import { useCallback, useState } from 'react';

const CATEGORY_SECTION_ANCHORS: Partial<Record<string, string>> = {
    general: 'general-questions',
    implementation: 'implementation-questions',
};

export default function FaqsSupport() {
    const [searchQuery, setSearchQuery] = useState('');
    const [submittedQuery, setSubmittedQuery] = useState('');
    const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);

    const handleSubmitSearch = useCallback(() => {
        setSubmittedQuery(searchQuery);
        setActiveCategoryId(null);
    }, [searchQuery]);

    const handleSelectCategory = useCallback((categoryId: string) => {
        setActiveCategoryId((current) => (current === categoryId ? null : categoryId));
        setSubmittedQuery('');
        setSearchQuery('');

        const anchorId = CATEGORY_SECTION_ANCHORS[categoryId];
        if (anchorId) {
            document.getElementById(anchorId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            document.getElementById('faqs-main-content')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, []);

    const effectiveQuery = submittedQuery;

    return (
        <WebsiteLayout
            title="FAQs & Support"
            description="Answers about TechBridge ERP implementation, modules, security, billing, and customer support."
        >
            <FaqsSupportHero
                searchQuery={searchQuery}
                onSearchQueryChange={setSearchQuery}
                onSubmitSearch={handleSubmitSearch}
            />

            <FaqsCategoryGrid onSelectCategory={handleSelectCategory} />

            <FaqsContentSection searchQuery={effectiveQuery} activeCategoryId={activeCategoryId} />

            <ModuleBottomCta
                title={FAQS_SUPPORT_BOTTOM_CTA.title}
                description={FAQS_SUPPORT_BOTTOM_CTA.description}
                icon={Headphones}
                ctaLabel={FAQS_SUPPORT_BOTTOM_CTA.ctaLabel}
                ctaHref={route('contact')}
                enableEntranceMotion
            />
        </WebsiteLayout>
    );
}
