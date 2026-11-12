import type { ModulePageContent } from '@/types/module-page';
import {
    BarChart3,
    Box,
    CircleCheck,
    Cog,
    Cuboid,
    FileText,
    FlaskConical,
    Layers,
    Package,
    Settings2,
    ShieldCheck,
    ShoppingCart,
    Users,
} from 'lucide-react';

export const manufacturingPageContent: ModulePageContent = {
    slug: 'manufacturing',
    badgeLabel: 'Manufacturing Module',
    heroTitle: 'Turn Your Production into',
    heroTitleAccent: 'Greater Possibilities.',
    heroDescription:
        'TechBridge Manufacturing helps you plan, manage and track production, manage formulas, batches, packaging and output — all in one integrated platform. Improve efficiency, reduce waste and maintain consistent quality across your production process.',
    heroBackgroundImage: '/images/marketing/manufacturing/hero-background.jpg',
    heroImage: '/images/marketing/manufacturing/hero-laptop.png',
    heroImageAlt: 'TechBridge ERP Production Dashboard on laptop',
    trustIndicators: [
        {
            titleBold: 'End-to-End',
            titleRegular: 'Production Control',
            icon: Cog,
            accent: 'green',
        },
        {
            titleBold: 'Real-time',
            titleRegular: 'Production Tracking',
            icon: Layers,
            accent: 'blue',
        },
        {
            titleBold: 'Quality & Compliance',
            titleRegular: 'Assurance',
            icon: ShieldCheck,
            accent: 'blue',
        },
    ],
    featuresEyebrow: 'Key Features',
    featuresTitle: 'Everything You Need for Efficient Manufacturing',
    featuresDescription:
        'A complete set of tools to manage your production process from formulation to finished goods.',
    features: [
        {
            title: 'Production Planning',
            description: 'Plan production runs, manage schedules and allocate resources effectively.',
            icon: Box,
            accent: 'blue',
        },
        {
            title: 'Formulas & Recipes',
            description: 'Manage product formulas, BOMs and version control.',
            icon: FlaskConical,
            accent: 'green',
        },
        {
            title: 'Batch Management',
            description: 'Create, track and monitor batches from raw materials to finished products.',
            icon: Layers,
            accent: 'purple',
        },
        {
            title: 'Packaging Management',
            description: 'Plan and track packaging processes and materials usage.',
            icon: Package,
            accent: 'orange',
        },
        {
            title: 'Quality Control',
            description: 'Record quality checks and ensure product standards are met.',
            icon: CircleCheck,
            accent: 'pink',
        },
        {
            title: 'Production Orders',
            description: 'Create and manage production orders with full workflow tracking.',
            icon: Cuboid,
            accent: 'teal',
        },
        {
            title: 'Production Reports',
            description: 'Track production performance, efficiency and yield analysis.',
            icon: BarChart3,
            accent: 'indigo',
        },
        {
            title: 'Maintenance & Downtime',
            description: 'Track equipment usage, maintenance schedules and production downtime.',
            icon: Cog,
            accent: 'lime',
        },
    ],
    workflowEyebrow: 'How it works',
    workflowTitle: 'From Planning to Finished Product',
    workflowDescription: 'A streamlined manufacturing process to keep your production on track.',
    workflowSteps: [
        {
            title: 'Plan Production',
            description: 'Create production plan and allocate resources.',
            icon: FileText,
            accent: 'blue',
        },
        {
            title: 'Prepare Materials',
            description: 'Verify raw materials and BOM requirements.',
            icon: FlaskConical,
            accent: 'green',
        },
        {
            title: 'Run Production',
            description: 'Execute production and monitor progress.',
            icon: Settings2,
            accent: 'purple',
        },
        {
            title: 'Quality Check',
            description: 'Conduct quality control and approve output.',
            icon: CircleCheck,
            accent: 'orange',
        },
        {
            title: 'Package & Release',
            description: 'Complete packaging and move to inventory.',
            icon: Package,
            accent: 'pink',
        },
    ],
    screenshotEyebrow: 'Real system screenshots',
    screenshotTitle: 'A User-Friendly Interface for Your Production Team',
    screenshotDescription:
        'TechBridge Manufacturing provides a clean, intuitive interface that makes it easy to manage production, track batches and maintain product quality.',
    screenshotBullets: [
        'Access from desktop, tablet or mobile',
        'Real-time production data and status',
        'Role-based access and permissions',
        'Integrated with inventory and procurement',
    ],
    screenshotImages: [
        {
            src: '/images/marketing/manufacturing/screenshots-desktop-mobile.png',
            alt: 'TechBridge Manufacturing batches view on desktop and manufacturing menu on mobile',
            className: 'h-auto w-full max-w-[36rem] object-contain xl:max-w-[40rem]',
        },
    ],
    integrationsEyebrow: 'Works seamlessly with other modules',
    integrationsTitle: 'Fully Integrated Across Your Business Operations',
    integrations: [
        {
            title: 'Procurement',
            description: 'Raw material purchasing and supplier management.',
            icon: ShoppingCart,
            accent: 'pink',
            moduleSlug: 'procurement',
        },
        {
            title: 'Inventory',
            description: 'Raw material and finished goods stock tracking.',
            icon: Box,
            accent: 'orange',
            moduleSlug: 'inventory',
        },
        {
            title: 'Finance',
            description: 'Production costs and costing analysis.',
            icon: Users,
            accent: 'blue',
            moduleSlug: 'finance',
        },
        {
            title: 'Reports & Analytics',
            description: 'Unified reporting across all modules.',
            icon: BarChart3,
            accent: 'green',
            moduleSlug: 'reports-analytics',
        },
    ],
    testimonialEyebrow: 'What our clients say',
    testimonialTitle: 'Trusted by Businesses Like Yours',
    testimonials: [
        {
            quote:
                'TechBridge Manufacturing has improved our production planning and reduced waste. We now have better control and visibility across our entire production process.',
            authorName: 'Dr. John Mwangi',
            authorRole: 'Operations Manager, HealthPlus Ltd',
            rating: 5,
        },
    ],
    testimonialPaginationDots: 4,
    bottomCtaTitle: 'Ready to Optimize Your Production Process?',
    bottomCtaDescription:
        'Book a personalized demo and see how TechBridge Manufacturing can work for your business.',
};
