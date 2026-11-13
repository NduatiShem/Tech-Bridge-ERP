import TermsCommitmentSection from '@/components/website/terms/TermsCommitmentSection';
import TermsContentSection from '@/components/website/terms/TermsContentSection';
import TermsHero from '@/components/website/terms/TermsHero';
import WebsiteLayout from '@/layouts/WebsiteLayout';

export default function TermsOfService() {
    return (
        <WebsiteLayout
            title="Terms of Service"
            description="Read the TechBridge Solutions Terms of Service for website use, ERP subscriptions, acceptable use, billing, and legal contact information."
        >
            <TermsHero />
            <TermsContentSection />
            <TermsCommitmentSection />
        </WebsiteLayout>
    );
}
