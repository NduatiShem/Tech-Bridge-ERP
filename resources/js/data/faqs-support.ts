import type { LucideIcon } from 'lucide-react';
import {
    Building2,
    CreditCard,
    Headphones,
    Package,
    Settings,
    Shield,
    SlidersHorizontal,
    Workflow,
} from 'lucide-react';

/** FAQs & Support page — copy from approved comp; TODO: verify support SLAs before production. */

export type FaqCategoryAccent =
    | 'blue'
    | 'green'
    | 'purple'
    | 'orange'
    | 'rose'
    | 'teal'
    | 'lime'
    | 'fuchsia';

export type FaqCategory = {
    id: string;
    label: string;
    questionCount: number;
    icon: LucideIcon;
    accent: FaqCategoryAccent;
};

export type FaqItem = {
    question: string;
    answer: string;
};

export type FaqSection = {
    id: string;
    title: string;
    categoryId: string;
    items: FaqItem[];
    /** First item expanded on load when no search filter is active */
    defaultOpenIndex?: number;
};

export type KnowledgeBaseArticle = {
    title: string;
    description: string;
    tag: string;
    tagAccent: 'green' | 'blue' | 'purple';
    image: string;
    imageAlt: string;
    hrefRoute: 'documentation' | 'resources';
    linkLabel: string;
};

export const FAQS_SUPPORT_HERO = {
    eyebrow: 'FAQs & Support',
    titleLine1: "We're Here to Help.",
    titleLine2Lead: 'Get the ',
    titleAccent: 'Answers',
    titleLine2Tail: ' You Need.',
    description:
        'Find quick answers to common questions about TechBridge ERP — from implementation and modules to security, billing, and day-to-day support.',
    searchPlaceholder: 'Search FAQs (e.g. implementation, pricing, inventory)…',
    heroBackgroundImage: '/images/marketing/pricing/hero-background.jpg',
    heroPhotograph: '/images/marketing/faqs-support/hero-photograph.jpg',
    heroPhotographAlt: 'Support specialist with headset assisting a customer at her desk',
    supportCardLines: ['Support', 'Today.', 'A Better', 'Tomorrow.'] as const,
} as const;

export const FAQ_CATEGORIES: FaqCategory[] = [
    { id: 'general', label: 'General', questionCount: 12, icon: Settings, accent: 'blue' },
    { id: 'implementation', label: 'Implementation', questionCount: 8, icon: Package, accent: 'green' },
    { id: 'modules', label: 'Modules & Features', questionCount: 15, icon: SlidersHorizontal, accent: 'purple' },
    { id: 'pricing', label: 'Pricing & Billing', questionCount: 10, icon: CreditCard, accent: 'orange' },
    { id: 'security', label: 'Security & Compliance', questionCount: 8, icon: Shield, accent: 'rose' },
    { id: 'support', label: 'Support & Training', questionCount: 9, icon: Headphones, accent: 'teal' },
    { id: 'integrations', label: 'Integrations', questionCount: 6, icon: Workflow, accent: 'lime' },
    { id: 'account', label: 'Account & Users', questionCount: 7, icon: Building2, accent: 'fuchsia' },
];

export const FAQ_SECTIONS: FaqSection[] = [
    {
        id: 'general-questions',
        title: 'General Questions',
        categoryId: 'general',
        defaultOpenIndex: 0,
        items: [
            {
                question: 'What is TechBridge ERP?',
                answer:
                    'TechBridge ERP is a modular business platform that connects finance, HR, inventory, procurement, sales, manufacturing, assets, analytics, and distribution workflows in one place. Teams work from shared data with role-based access, audit-friendly processes, and reporting built for growing organizations.',
            },
            {
                question: 'Who is TechBridge ERP designed for?',
                answer:
                    'TechBridge serves small and mid-sized businesses that need structured operations without a patchwork of spreadsheets. It suits finance, HR, operations, procurement, and commercial teams that want one system that can start focused and expand by module.',
            },
            {
                question: 'Is TechBridge ERP cloud-based or on-premise?',
                answer:
                    'Deployment options depend on your environment and compliance needs. Cloud hosting is typical for faster rollout; dedicated or hybrid setups can be discussed during discovery. TODO: verify official deployment options before production.',
            },
            {
                question: 'Can I migrate data from my current system?',
                answer:
                    'Yes — migration scope is planned during implementation. We map master data, opening balances, and historical records where required, with validation before go-live.',
            },
            {
                question: 'How long does implementation typically take?',
                answer:
                    'Timelines vary by module count, data migration, and integrations. A focused rollout can be measured in weeks; multi-module programs often span a few months. Your project plan defines milestones and owners.',
            },
        ],
    },
    {
        id: 'implementation-questions',
        title: 'Implementation Questions',
        categoryId: 'implementation',
        items: [
            {
                question: 'What does a typical implementation include?',
                answer:
                    'Discovery, solution design, configuration, data migration, user acceptance testing, training, and go-live support. Deliverables and roles are documented in your statement of work.',
            },
            {
                question: 'Do you offer on-site training?',
                answer:
                    'Training blends live sessions, documentation, and optional on-site workshops depending on team size and location. TODO: verify training packages before production.',
            },
            {
                question: 'How are user roles and permissions configured?',
                answer:
                    'Administrators define roles aligned to your org chart. Permissions control module access, approvals, and sensitive data. Changes are auditable.',
            },
            {
                question: 'Can we start with a single module?',
                answer:
                    'Yes. Many customers begin with finance, inventory, or HR and add modules as processes mature. Licensing is modular.',
            },
            {
                question: 'What support is available during go-live?',
                answer:
                    'Hypercare covers the first weeks after launch with prioritized tickets and check-ins. Severity-based response targets apply per your support agreement.',
            },
        ],
    },
];

export const KNOWLEDGE_BASE = {
    title: 'Knowledge Base',
    subtitle: 'Explore our guides, tutorials and resources.',
    viewAllLabel: 'View All Articles',
    articles: [
        {
            title: 'Getting Started with TechBridge ERP',
            description:
                'Set up your workspace, invite users, and learn the core navigation patterns before your first module go-live.',
            tag: 'GUIDE',
            tagAccent: 'green',
            image: '/images/marketing/inventory/hero-laptop.png',
            imageAlt: 'Team member reviewing operations on a laptop in a warehouse',
            hrefRoute: 'documentation',
            linkLabel: 'Read Guide',
        },
        {
            title: 'Managing Inventory Efficiently',
            description:
                'Track stock levels, warehouses, and movements with dashboards and alerts that keep replenishment on schedule.',
            tag: 'TUTORIAL',
            tagAccent: 'blue',
            image: '/images/marketing/procurement/hero-laptop.png',
            imageAlt: 'Inventory and procurement metrics on an ERP screen',
            hrefRoute: 'documentation',
            linkLabel: 'Read Tutorial',
        },
        {
            title: 'User Roles and Permissions',
            description:
                'Define roles aligned to your org chart and control who can view, approve, or change sensitive records.',
            tag: 'BEST PRACTICES',
            tagAccent: 'purple',
            image: '/images/marketing/hr-payroll/hero-laptop.png',
            imageAlt: 'Business team discussing access and permissions',
            hrefRoute: 'documentation',
            linkLabel: 'Read Article',
        },
    ] satisfies KnowledgeBaseArticle[],
} as const;

export const SUPPORT_CHANNELS = {
    heading: 'Need More Help?',
    subtitle: 'Our support team is ready to assist you through your preferred channel.',
    commitmentHeading: 'Support Commitment',
    call: {
        title: 'Call Us',
        description: 'Speak with our team during business hours.',
    },
    email: {
        title: 'Email Support',
        description: 'We aim to respond within 24 hours.',
    },
    chat: {
        title: 'Live Chat',
        description: 'Quick answers for active customers.',
        note: 'Available from your customer portal. TODO: verify live chat availability.',
    },
    demo: {
        title: 'Book a Demo',
        description: 'See how TechBridge fits your workflows.',
        linkLabel: 'Schedule a Demo',
    },
    commitment:
        'Our support team is committed to helping you succeed — with clear response goals and knowledgeable specialists.',
} as const;

export const SUPPORT_FORM = {
    title: 'Still Have Questions?',
    subtitle: 'Send us a message and our team will get back to you.',
    subjectOptions: [
        'General inquiry',
        'Technical support',
        'Billing question',
        'Implementation',
        'Partnership',
    ],
    submitLabel: 'Send Message',
    unavailableNotice:
        'Online message delivery is not configured yet. Please email us directly or call during business hours.',
} as const;

export const FAQS_SUPPORT_BOTTOM_CTA = {
    title: "Can't Find What You're Looking For?",
    description: 'Our team is here to help you get clear answers and the right next step.',
    ctaLabel: 'Contact Support',
} as const;

/** Solid icon circle fills — white icons are applied in `FaqsCategoryGrid`. */
export const FAQ_CATEGORY_STYLES: Record<FaqCategoryAccent, { iconBg: string }> = {
    blue: { iconBg: 'bg-blue-500' },
    green: { iconBg: 'bg-emerald-500' },
    purple: { iconBg: 'bg-violet-500' },
    orange: { iconBg: 'bg-orange-500' },
    rose: { iconBg: 'bg-rose-500' },
    teal: { iconBg: 'bg-sky-500' },
    lime: { iconBg: 'bg-green-500' },
    fuchsia: { iconBg: 'bg-fuchsia-500' },
};
