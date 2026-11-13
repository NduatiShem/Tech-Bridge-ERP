import AboutHero from '@/components/website/about/AboutHero';
import AboutJourneySection from '@/components/website/about/AboutJourneySection';
import AboutLeadershipSection from '@/components/website/about/AboutLeadershipSection';
import AboutMissionVisionValues from '@/components/website/about/AboutMissionVisionValues';
import AboutStatsBand from '@/components/website/about/AboutStatsBand';
import AboutStorySection from '@/components/website/about/AboutStorySection';
import AboutWhyChooseSection from '@/components/website/about/AboutWhyChooseSection';
import ModuleBottomCta from '@/components/website/modules/ModuleBottomCta';
import { ABOUT_BOTTOM_CTA } from '@/data/about';
import WebsiteLayout from '@/layouts/WebsiteLayout';
import { BarChart3 } from 'lucide-react';

export default function AboutUs() {
    return (
        <WebsiteLayout
            title="About Us"
            description="Learn about TechBridge Solutions LLC — our mission, team, and ERP platform built to bridge businesses with technology."
        >
            <AboutHero />
            <AboutMissionVisionValues />
            <AboutStatsBand />
            <AboutStorySection />
            <AboutJourneySection />
            <AboutWhyChooseSection />
            <AboutLeadershipSection />

            <ModuleBottomCta
                title={ABOUT_BOTTOM_CTA.title}
                description={ABOUT_BOTTOM_CTA.description}
                icon={BarChart3}
                enableEntranceMotion
            />
        </WebsiteLayout>
    );
}
