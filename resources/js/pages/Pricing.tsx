import ModuleBottomCta from '@/components/website/modules/ModuleBottomCta';
import PricingHero from '@/components/website/pricing/PricingHero';
import PricingComparisonSection from '@/components/website/pricing/PricingComparisonSection';
import PricingFaqSection from '@/components/website/pricing/PricingFaqSection';
import PricingPlansSection from '@/components/website/pricing/PricingPlansSection';
import { PRICING_BOTTOM_CTA } from '@/data/pricing';
import WebsiteLayout from '@/layouts/WebsiteLayout';
import { BarChart3 } from 'lucide-react';

export default function Pricing() {
    return (
        <WebsiteLayout
            title="Pricing & Plans"
            description="Flexible TechBridge ERP pricing for businesses of all sizes. Modular plans, transparent fees, and room to scale."
        >
            <PricingHero />

            <PricingPlansSection />

            <PricingComparisonSection />

            <PricingFaqSection />

            <ModuleBottomCta
                title={PRICING_BOTTOM_CTA.title}
                description={PRICING_BOTTOM_CTA.description}
                icon={BarChart3}
                enableEntranceMotion
            />
        </WebsiteLayout>
    );
}
