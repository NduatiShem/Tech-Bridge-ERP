import ModuleBottomCta from '@/components/website/modules/ModuleBottomCta';
import ModuleFeatureGrid from '@/components/website/modules/ModuleFeatureGrid';
import ModuleHero from '@/components/website/modules/ModuleHero';
import ModuleIntegrations from '@/components/website/modules/ModuleIntegrations';
import ModuleScreenshotSection from '@/components/website/modules/ModuleScreenshotSection';
import ModuleTestimonial from '@/components/website/modules/ModuleTestimonial';
import ModuleWorkflow from '@/components/website/modules/ModuleWorkflow';
import { inventoryPageContent } from '@/data/module-pages/inventory';
import WebsiteLayout from '@/layouts/WebsiteLayout';

const content = inventoryPageContent;

export default function Inventory() {
    const breadcrumbs = [
        { label: 'Home', href: route('home') },
        { label: 'Modules', href: route('modules.index') },
        { label: 'Inventory' },
    ];

    return (
        <WebsiteLayout
            title="Inventory Module"
            description="Real-time stock visibility, multi-warehouse management, and integrated inventory control in TechBridge ERP."
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
