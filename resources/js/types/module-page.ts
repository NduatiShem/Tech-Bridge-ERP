import type { LucideIcon } from 'lucide-react';

export type ModuleFeatureItem = {
    title: string;
    description: string;
    icon: LucideIcon;
    accent: FeatureAccent;
};

export type FeatureAccent = 'blue' | 'green' | 'purple' | 'orange' | 'pink' | 'teal' | 'indigo' | 'lime';

export type WorkflowStep = {
    title: string;
    description: string;
    icon: LucideIcon;
    accent: FeatureAccent;
};

export type ModuleIntegration = {
    title: string;
    description: string;
    icon: LucideIcon;
    accent: FeatureAccent;
    moduleSlug: string;
};

export type ModuleTestimonialItem = {
    quote: string;
    authorName: string;
    authorRole: string;
    rating?: number;
};

export type TrustIndicator = {
    /** First line — bold in hero (matches approved mockup). */
    titleBold: string;
    /** Second line — regular weight beneath icon. */
    titleRegular: string;
    icon: LucideIcon;
    accent?: FeatureAccent;
};

export type ModulePageContent = {
    slug: string;
    badgeLabel: string;
    heroTitle: string;
    heroTitleAccent: string;
    heroDescription: string;
    /** Approved hero background (full-bleed section art). */
    heroBackgroundImage: string;
    /** Approved hero visual (e.g. laptop composite PNG) — used as-is, no CSS frame. */
    heroImage: string;
    heroImageAlt: string;
    trustIndicators: TrustIndicator[];
    featuresEyebrow: string;
    featuresTitle: string;
    featuresDescription: string;
    features: ModuleFeatureItem[];
    workflowEyebrow: string;
    workflowTitle: string;
    workflowDescription: string;
    workflowSteps: WorkflowStep[];
    screenshotEyebrow: string;
    screenshotTitle: string;
    screenshotDescription: string;
    screenshotBullets: string[];
    screenshotImages: { src: string; alt: string; className?: string }[];
    integrationsEyebrow: string;
    integrationsTitle: string;
    integrations: ModuleIntegration[];
    testimonialEyebrow: string;
    testimonialTitle: string;
    testimonials: ModuleTestimonialItem[];
    /** Dot count for carousel chrome when additional quotes are not yet published. */
    testimonialPaginationDots?: number;
    bottomCtaTitle: string;
    bottomCtaDescription: string;
};
