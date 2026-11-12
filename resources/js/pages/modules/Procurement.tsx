import ModuleBottomCta from '@/components/website/modules/ModuleBottomCta';
import ModuleFeatureGrid from '@/components/website/modules/ModuleFeatureGrid';
import ModuleHero from '@/components/website/modules/ModuleHero';
import ModuleIntegrations from '@/components/website/modules/ModuleIntegrations';
import ModuleScreenshotSection from '@/components/website/modules/ModuleScreenshotSection';
import ModuleTestimonial from '@/components/website/modules/ModuleTestimonial';
import ModuleWorkflow from '@/components/website/modules/ModuleWorkflow';
import { procurementPageContent } from '@/data/module-pages/procurement';
import WebsiteLayout from '@/layouts/WebsiteLayout';

const content = procurementPageContent;

export default function Procurement() {
    const breadcrumbs = [
        { label: 'Home', href: route('home') },
        { label: 'Modules', href: route('modules.index') },
        { label: 'Procurement' },
    ];

    return (
        <WebsiteLayout
            title="Procurement Module"
            description="Manage purchase requests, suppliers, purchase orders, and goods receiving with approvals in TechBridge ERP."
        >
            <ModuleHero content={content} breadcrumbItems={breadcrumbs} />
            <ModuleFeatureGrid
                eyebrow={content.featuresEyebrow}
                title={content.featuresTitle}
                description={content.featuresDescription}
                features={content.features}
            />
            <ModuleWorkflow
                eyebrow={content.workflowEyebrow}
                title={content.workflowTitle}
                description={content.workflowDescription}
                steps={content.workflowSteps}
            />
            <ModuleScreenshotSection
                eyebrow={content.screenshotEyebrow}
                title={content.screenshotTitle}
                description={content.screenshotDescription}
                bullets={content.screenshotBullets}
                images={content.screenshotImages}
            />
            <ModuleIntegrations
                eyebrow={content.integrationsEyebrow}
                title={content.integrationsTitle}
                integrations={content.integrations}
            />
            <ModuleTestimonial
                eyebrow={content.testimonialEyebrow}
                title={content.testimonialTitle}
                testimonials={content.testimonials}
                paginationDots={content.testimonialPaginationDots}
            />
            <ModuleBottomCta title={content.bottomCtaTitle} description={content.bottomCtaDescription} />
        </WebsiteLayout>
    );
}
