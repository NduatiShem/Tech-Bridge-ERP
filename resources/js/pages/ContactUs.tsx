import ContactHero from '@/components/website/contact/ContactHero';
import PricingFaqSection from '@/components/website/pricing/PricingFaqSection';
import ContactInfoSection from '@/components/website/contact/ContactInfoSection';
import ModuleBottomCta from '@/components/website/modules/ModuleBottomCta';
import { CONTACT_BOTTOM_CTA } from '@/data/contact';
import WebsiteLayout from '@/layouts/WebsiteLayout';
import { Calendar } from 'lucide-react';

export default function ContactUs() {
    return (
        <WebsiteLayout
            title="Contact Us"
            description="Contact TechBridge Solutions for demos, pricing, and support. Reach our team by phone, email, or the message form on this page."
        >
            <ContactHero />
            <ContactInfoSection />
            <PricingFaqSection />

            <ModuleBottomCta
                title={CONTACT_BOTTOM_CTA.title}
                description={CONTACT_BOTTOM_CTA.description}
                icon={Calendar}
                ctaLabel={CONTACT_BOTTOM_CTA.ctaLabel}
                enableEntranceMotion
            />
        </WebsiteLayout>
    );
}
