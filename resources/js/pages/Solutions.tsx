import ModuleBottomCta from '@/components/website/modules/ModuleBottomCta';
import SolutionsApproachSection from '@/components/website/solutions/SolutionsApproachSection';
import SolutionsHero from '@/components/website/solutions/SolutionsHero';
import SolutionsIndustriesSection from '@/components/website/solutions/SolutionsIndustriesSection';
import SolutionsSuccessStoriesSection from '@/components/website/solutions/SolutionsSuccessStoriesSection';
import { SOLUTIONS_BOTTOM_CTA } from '@/data/solutions';
import WebsiteLayout from '@/layouts/WebsiteLayout';
import { TrendingUp } from 'lucide-react';

export default function Solutions() {
    return (
        <WebsiteLayout
            title="Solutions & Industries"
            description="Industry-specific ERP solutions from TechBridge — manufacturing, distribution, retail, healthcare, professional services, and more."
        >
            <SolutionsHero />
            <SolutionsIndustriesSection />
            <SolutionsSuccessStoriesSection />
            <SolutionsApproachSection />
            <ModuleBottomCta
                title={SOLUTIONS_BOTTOM_CTA.title}
                description={SOLUTIONS_BOTTOM_CTA.description}
                icon={TrendingUp}
                ctaLabel={SOLUTIONS_BOTTOM_CTA.ctaLabel}
                enableEntranceMotion
            />
        </WebsiteLayout>
    );
}
