import type { LucideIcon } from 'lucide-react';
import {
    BadgeDollarSign,
    ClipboardList,
    FileText,
    Handshake,
    Mail,
    MapPin,
    MessageSquare,
    Phone,
    Settings2,
    SlidersHorizontal,
    Sparkles,
    Timer,
} from 'lucide-react';

export type RequestQuoteAccent = 'green' | 'blue' | 'purple' | 'orange';

export const REQUEST_QUOTE_HERO = {
    eyebrow: 'Request a Quote',
    titleLine1: 'Get a Tailored Quote for Your',
    titleAccent: 'Business Needs.',
    description:
        'Tell us about your requirements and our team will provide a customized quote based on your business size, industry and the modules you need.',
    heroBackgroundImage: '/images/marketing/pricing/hero-background.jpg',
    heroPhotograph: '/images/marketing/request-quote/hero-photograph.jpg',
    heroPhotographAlt:
        'Two professionals in business attire reviewing information together on a tablet in a modern office',
    floatingCardLines: ["Let's Find the Right", 'Solution for Your', 'Business.'] as const,
} as const;

export type RequestQuoteHeroPill = {
    title: string;
    accent: RequestQuoteAccent;
};

export const REQUEST_QUOTE_HERO_PILLS: RequestQuoteHeroPill[] = [
    { title: 'Customized to Your Needs', accent: 'purple' },
    { title: 'Transparent Pricing', accent: 'green' },
    { title: 'Expert Consultation', accent: 'blue' },
    { title: 'Quick Response', accent: 'orange' },
];

export const REQUEST_QUOTE_FORM = {
    title: 'Request a Quote',
    subtitle: 'Fill out the form below and our team will get back to you with a customized quotation.',
    unavailableNotice:
        'Online quote submission is not configured yet. Please email us directly or call during business hours.',
    submitLabel: 'Submit Request',
    modulesHeading: 'Modules of Interest',
    modulesHint: 'Select all modules you would like included in your quote.',
    additionalLabel: 'Additional Requirements',
    otherModuleLabel: 'Other (Please specify)',
} as const;

export const REQUEST_QUOTE_INDUSTRIES = [
    'Manufacturing',
    'Retail & distribution',
    'Healthcare',
    'Professional services',
    'Logistics & transportation',
    'Construction',
    'Other',
] as const;

export const REQUEST_QUOTE_BUSINESS_SIZES = [
    '1–10 employees',
    '11–50 employees',
    '51–200 employees',
    '201–500 employees',
    '500+ employees',
] as const;

/** Checkbox labels aligned to comp — map to ERP modules where applicable. */
export const REQUEST_QUOTE_MODULE_OPTIONS = [
    { id: 'hr-payroll', label: 'HR & Payroll' },
    { id: 'inventory-procurement', label: 'Inventory & Procurement' },
    { id: 'sales-crm', label: 'Sales & CRM' },
    { id: 'finance', label: 'Finance & Accounting' },
    { id: 'manufacturing', label: 'Manufacturing' },
    { id: 'trucking-distribution', label: 'Distribution & Logistics' },
    { id: 'reports-analytics', label: 'Reports & Analytics' },
    { id: 'asset-management', label: 'Asset Management' },
    { id: 'other', label: 'Other (Please specify)' },
] as const;

export type RequestQuoteSidebarItem = {
    title: string;
    description: string;
    accent: RequestQuoteAccent;
    icon: LucideIcon;
};

export const REQUEST_QUOTE_WHY_ITEMS: RequestQuoteSidebarItem[] = [
    {
        title: 'Customized Solution',
        description: 'Pricing and scope aligned to the modules and workflows you actually need.',
        accent: 'green',
        icon: SlidersHorizontal,
    },
    {
        title: 'Transparent Pricing',
        description: 'Clear line items for licenses, implementation, and optional services.',
        accent: 'blue',
        icon: BadgeDollarSign,
    },
    {
        title: 'Expert Guidance',
        description: 'Specialists help you phase modules and plan a realistic rollout.',
        accent: 'purple',
        icon: Sparkles,
    },
    {
        title: 'Quick Response',
        description: 'We aim to respond within one business day with next steps.',
        accent: 'orange',
        icon: Timer,
    },
];

export const REQUEST_QUOTE_DIRECT = {
    heading: 'Prefer to Talk to Us Directly?',
    callLabel: 'Call Us',
    emailLabel: 'Email Us',
    visitLabel: 'Visit Our Office',
} as const;

export const REQUEST_QUOTE_HOW_IT_WORKS = {
    heading: 'How It Works',
    description: 'A straightforward path from enquiry to a quote you can act on.',
    steps: [
        {
            title: 'Submit Your Request',
            description: 'Share your company profile, modules of interest, and any special requirements.',
            accent: 'green' as const,
            icon: FileText,
        },
        {
            title: 'We Review',
            description: 'Our team assesses scope, deployment options, and any integration needs.',
            accent: 'blue' as const,
            icon: MessageSquare,
        },
        {
            title: 'Receive Your Quote',
            description: 'Get a detailed proposal with licensing, services, and estimated timelines.',
            accent: 'purple' as const,
            icon: ClipboardList,
        },
        {
            title: 'Discuss & Proceed',
            description: 'Walk through the quote with us and plan demo, contract, and kickoff.',
            accent: 'orange' as const,
            icon: Handshake,
        },
    ],
};

/** TODO: verify client names, companies, and quotes before production. */
export const REQUEST_QUOTE_TESTIMONIALS = {
    heading: 'What Our Clients Say',
    description: 'Bussiness accross the world trust TechBride ERP to power their growth.',
    items: [
        {
            quote:
                'TechBridge helped us consolidate HR, payroll, and inventory into one system. Implementation was structured and support stayed engaged after go-live.',
            name: 'David Omondi',
            role: 'HR Director',
            company: 'Manufacturing Solutions Ltd.',
        },
        {
            quote:
                'We needed clearer financial reporting across branches. The Finance module and dashboards gave leadership a single view without manual spreadsheets.',
            name: 'Sarah Johnson',
            role: 'Finance Manager',
            company: 'RetailCo Inc.',
        },
        {
            quote:
                'From first demo to rollout, the team listened to how our warehouse and sales teams work. The quote matched the plan we eventually deployed.',
            name: 'Mark Thompson',
            role: 'Operations Head',
            company: 'Logistics Pro Ltd.',
        },
    ],
};

export const REQUEST_QUOTE_BOTTOM_CTA = {
    title: 'Ready to Get Your Custom Quote?',
    description: 'Take the first step towards a more efficient and scalable business.',
    ctaLabel: 'Request a Quote',
} as const;

export const REQUEST_QUOTE_ACCENT_BG: Record<RequestQuoteAccent, string> = {
    green: 'bg-brand-green',
    blue: 'bg-brand-primary',
    purple: 'bg-violet-600',
    orange: 'bg-orange-500',
};

export const REQUEST_QUOTE_SIDEBAR_ICONS = {
    call: Phone,
    email: Mail,
    visit: MapPin,
    form: Settings2,
} as const;
