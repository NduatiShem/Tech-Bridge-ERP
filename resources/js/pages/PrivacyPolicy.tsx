import PrivacyCommitmentSection from '@/components/website/privacy/PrivacyCommitmentSection';
import PrivacyContentSection from '@/components/website/privacy/PrivacyContentSection';
import PrivacyHero from '@/components/website/privacy/PrivacyHero';
import WebsiteLayout from '@/layouts/WebsiteLayout';

export default function PrivacyPolicy() {
    return (
        <WebsiteLayout
            title="Privacy Policy"
            description="Learn how TechBridge Solutions collects, uses, protects, and shares information when you use our website and ERP services."
        >
            <PrivacyHero />
            <PrivacyContentSection />
            <PrivacyCommitmentSection />
        </WebsiteLayout>
    );
}
