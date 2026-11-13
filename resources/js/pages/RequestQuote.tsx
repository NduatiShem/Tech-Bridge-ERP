import ModuleBottomCta from '@/components/website/modules/ModuleBottomCta';
import RequestQuoteFormSection from '@/components/website/request-quote/RequestQuoteFormSection';
import RequestQuoteHero from '@/components/website/request-quote/RequestQuoteHero';
import RequestQuoteHowItWorks from '@/components/website/request-quote/RequestQuoteHowItWorks';
import RequestQuoteTestimonials from '@/components/website/request-quote/RequestQuoteTestimonials';
import { REQUEST_QUOTE_BOTTOM_CTA } from '@/data/request-quote';
import WebsiteLayout from '@/layouts/WebsiteLayout';
import { FileText } from 'lucide-react';

export default function RequestQuote() {
    return (
        <WebsiteLayout
            title="Request a Quote"
            description="Request a tailored TechBridge ERP quote. Share your modules, business size, and requirements for transparent pricing and expert consultation."
        >
            <RequestQuoteHero />
            <RequestQuoteFormSection />
            <RequestQuoteHowItWorks />
            <RequestQuoteTestimonials />

            <ModuleBottomCta
                title={REQUEST_QUOTE_BOTTOM_CTA.title}
                description={REQUEST_QUOTE_BOTTOM_CTA.description}
                icon={FileText}
                ctaLabel={REQUEST_QUOTE_BOTTOM_CTA.ctaLabel}
                ctaHref="#request-quote-form"
                enableEntranceMotion
            />
        </WebsiteLayout>
    );
}
