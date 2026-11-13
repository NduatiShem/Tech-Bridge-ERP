import type { FeatureAccent } from '@/types/module-page';
import type { LucideIcon } from 'lucide-react';
import {
    BarChart3,
    Briefcase,
    Factory,
    GraduationCap,
    HandHeart,
    HeartPulse,
    LayoutGrid,
    Search,
    Settings,
    ShoppingBag,
    Truck,
    Users,
    Wrench,
} from 'lucide-react';

export const SOLUTIONS_HERO = {
    eyebrow: 'INDUSTRY SOLUTIONS',
    titleLine1: 'Tailored ERP Solutions for',
    titleAccent: 'Every Industry.',
    description:
        'From manufacturing floors to healthcare networks, TechBridge ERP adapts to the workflows, compliance needs, and growth goals of your sector.',
    heroBackgroundImage: '/images/marketing/pricing/hero-background.jpg',
    heroPhotograph: '/images/marketing/solutions/hero-photograph.jpg',
    heroPhotographAlt: 'Business professional reviewing insights on a tablet in a modern office',
    exploreModulesLabel: 'Explore Our Modules',
    floatingCardLines: ['Industry Focused.', 'Built for Real Business Challenges.'] as const,
} as const;

export type SolutionsHeroPill = {
    title: string;
    subtitle: string;
    accent: FeatureAccent;
};

export const SOLUTIONS_HERO_PILLS: SolutionsHeroPill[] = [
    { title: 'Streamline Operations', subtitle: 'Connect teams and processes', accent: 'green' },
    { title: 'Improve Efficiency', subtitle: 'Automate what slows you down', accent: 'purple' },
    { title: 'Drive Growth', subtitle: 'Scale with confidence', accent: 'blue' },
];

export const SOLUTIONS_INDUSTRIES_SECTION = {
    eyebrow: 'Industries',
    title: 'Industries We Serve',
    description:
        'Explore how TechBridge ERP supports sector-specific operations, compliance, and reporting — starting with the industries below.',
} as const;

export type IndustryFilterId =
    | 'all'
    | 'manufacturing'
    | 'distribution'
    | 'retail'
    | 'healthcare'
    | 'professional-services';

export type IndustryFilter = {
    id: IndustryFilterId;
    label: string;
    icon: LucideIcon;
};

export const SOLUTIONS_INDUSTRY_FILTERS: IndustryFilter[] = [
    { id: 'all', label: 'All Industries', icon: LayoutGrid },
    { id: 'manufacturing', label: 'Manufacturing', icon: Factory },
    { id: 'distribution', label: 'Distribution & Wholesale', icon: Truck },
    { id: 'retail', label: 'Retail & FMCG', icon: ShoppingBag },
    { id: 'healthcare', label: 'Healthcare', icon: HeartPulse },
    { id: 'professional-services', label: 'Professional Services', icon: Briefcase },
];

export type IndustryCard = {
    id: string;
    filterId: IndustryFilterId | 'ngo';
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    icon: LucideIcon;
    accent: FeatureAccent;
    href: string;
};

export const SOLUTIONS_INDUSTRIES: IndustryCard[] = [
    {
        id: 'manufacturing',
        filterId: 'manufacturing',
        title: 'Manufacturing',
        description: 'Production planning, shop-floor visibility, quality control, and inventory tied to demand.',
        image: '/images/marketing/solutions/industry-manufacturing.jpg',
        imageAlt: 'Manufacturing team collaborating — illustrative; TODO: verify industry photo',
        icon: Factory,
        accent: 'orange',
        href: '/modules/manufacturing',
    },
    {
        id: 'distribution',
        filterId: 'distribution',
        title: 'Distribution & Wholesale',
        description: 'Warehouse operations, order fulfilment, route planning, and distributor margin visibility.',
        image: '/images/marketing/solutions/industry-distribution.jpg',
        imageAlt: 'Distribution operations — illustrative placeholder',
        icon: Truck,
        accent: 'blue',
        href: '/modules/trucking-distribution',
    },
    {
        id: 'retail',
        filterId: 'retail',
        title: 'Retail & FMCG',
        description: 'Multi-location inventory, pricing, promotions, and fast-moving stock replenishment.',
        image: '/images/marketing/solutions/industry-retail.jpg',
        imageAlt: 'Retail workspace — illustrative placeholder',
        icon: ShoppingBag,
        accent: 'green',
        href: '/modules/inventory',
    },
    {
        id: 'healthcare',
        filterId: 'healthcare',
        title: 'Healthcare & Pharmaceuticals',
        description: 'Procurement controls, batch traceability, and finance visibility for regulated environments.',
        image: '/images/marketing/solutions/industry-healthcare.jpg',
        imageAlt: 'Healthcare professional — illustrative placeholder',
        icon: HeartPulse,
        accent: 'purple',
        href: '/modules/procurement',
    },
    {
        id: 'professional-services',
        filterId: 'professional-services',
        title: 'Professional Services',
        description: 'Project delivery, time tracking, billing, and CRM workflows for client-facing teams.',
        image: '/images/marketing/solutions/industry-professional.jpg',
        imageAlt: 'Consulting team — illustrative placeholder',
        icon: Briefcase,
        accent: 'teal',
        href: '/modules/sales-crm',
    },
    {
        id: 'ngo',
        filterId: 'ngo',
        title: 'NGOs & Non-Profits',
        description: 'Grant tracking, donor reporting, procurement transparency, and multi-program accounting.',
        image: '/images/marketing/solutions/industry-ngo.jpg',
        imageAlt: 'Community program — illustrative placeholder',
        icon: HandHeart,
        accent: 'indigo',
        href: '/modules/finance',
    },
];

export const SOLUTIONS_SUCCESS_SECTION = {
    eyebrow: 'Outcomes',
    title: 'Success Stories',
    viewAllLabel: 'View All Case Studies',
    viewAllHref: '/case-studies',
} as const;

export type SuccessStoryCard = {
    id: string;
    tag: string;
    tagAccent: FeatureAccent;
    title: string;
    image: string;
    imageAlt: string;
    href: string;
};

/** Headlines are illustrative until case studies are approved — TODO: verify metrics and client names. */
export const SOLUTIONS_SUCCESS_STORIES: SuccessStoryCard[] = [
    {
        id: 'distribution-inventory',
        tag: 'DISTRIBUTION',
        tagAccent: 'green',
        title: 'Improved inventory accuracy across regional depots',
        image: '/images/marketing/solutions/story-distribution.jpg',
        imageAlt: 'Distribution team — illustrative success story thumbnail',
        href: '/case-studies',
    },
    {
        id: 'healthcare-compliance',
        tag: 'HEALTHCARE',
        tagAccent: 'purple',
        title: 'Strengthened procurement controls for clinical supplies',
        image: '/images/marketing/solutions/story-healthcare.jpg',
        imageAlt: 'Healthcare setting — illustrative success story thumbnail',
        href: '/case-studies',
    },
    {
        id: 'manufacturing-planning',
        tag: 'MANUFACTURING',
        tagAccent: 'orange',
        title: 'Connected production planning with live inventory data',
        image: '/images/marketing/solutions/story-manufacturing.jpg',
        imageAlt: 'Manufacturing floor — illustrative success story thumbnail',
        href: '/case-studies',
    },
];

export const SOLUTIONS_APPROACH_SECTION = {
    eyebrow: 'Methodology',
    title: 'Our Approach',
    description:
        'We partner with your team through a structured rollout — from discovery to ongoing support — so ERP adoption fits how you operate.',
} as const;

export const SOLUTIONS_APPROACH_STEPS = [
    {
        title: 'Understand',
        description: 'Map processes, pain points, and goals with stakeholders.',
        icon: Search,
        accent: 'blue' as const,
    },
    {
        title: 'Configure',
        description: 'Align modules, roles, and workflows to your industry.',
        icon: Settings,
        accent: 'green' as const,
    },
    {
        title: 'Implement',
        description: 'Migrate data, integrate systems, and validate outcomes.',
        icon: Wrench,
        accent: 'purple' as const,
    },
    {
        title: 'Train',
        description: 'Enable teams with role-based learning and documentation.',
        icon: GraduationCap,
        accent: 'orange' as const,
    },
    {
        title: 'Support',
        description: 'Stay responsive after go-live with expert assistance.',
        icon: Users,
        accent: 'blue' as const,
    },
];

export const SOLUTIONS_BOTTOM_CTA = {
    title: 'Ready to Transform Your Business?',
    description: 'See how industry-ready ERP modules can streamline your operations.',
    ctaLabel: 'Book a Demo',
} as const;

export const SOLUTIONS_HERO_PILL_ICONS = [Settings, BarChart3, Users] as const;
