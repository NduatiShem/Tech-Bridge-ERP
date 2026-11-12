import type { ModulePageContent } from '@/types/module-page';
import {
    ArrowLeftRight,
    Archive,
    BarChart3,
    ClipboardList,
    History,
    Landmark,
    QrCode,
    ShieldCheck,
    ShoppingCart,
    Timer,
    UserCheck,
    Users,
    Wrench,
} from 'lucide-react';

export const assetManagementPageContent: ModulePageContent = {
    slug: 'asset-management',
    badgeLabel: 'Assets Management Module',
    heroTitle: 'Track Your Assets. Maximize Value.',
    heroTitleAccent: 'Stay in Control.',
    heroDescription:
        'TechBridge Assets Management helps you register, track, assign and maintain company assets from purchase through disposal. Give operations and finance shared visibility into what you own, where it is and who is accountable.',
    heroBackgroundImage: '/images/marketing/asset-management/hero-background.jpg',
    heroImage: '/images/marketing/asset-management/hero-laptop.png',
    heroImageAlt: 'TechBridge ERP assets dashboard on laptop',
    trustIndicators: [
        {
            titleBold: 'Complete Asset',
            titleRegular: 'Lifecycle',
            icon: History,
            accent: 'blue',
        },
        {
            titleBold: 'Real-time',
            titleRegular: 'Tracking',
            icon: Timer,
            accent: 'blue',
        },
        {
            titleBold: 'Secure &',
            titleRegular: 'Accountable',
            icon: ShieldCheck,
            accent: 'blue',
        },
    ],
    featuresEyebrow: 'Key Features',
    featuresTitle: 'Everything You Need to Manage Your Assets',
    featuresDescription:
        'Register, tag, assign and maintain equipment and property with tools built for accountability across teams.',
    features: [
        {
            title: 'Asset Registration',
            description: 'Record asset details, purchase information and warranty terms in one registry.',
            icon: ClipboardList,
            accent: 'blue',
        },
        {
            title: 'Asset Tagging',
            description: 'Generate QR codes and barcodes for fast identification in the field.',
            icon: QrCode,
            accent: 'green',
        },
        {
            title: 'Assignment & Tracking',
            description: 'Assign assets to employees or departments with clear custody records.',
            icon: UserCheck,
            accent: 'purple',
        },
        {
            title: 'Maintenance Management',
            description: 'Schedule service, track warranties and log maintenance history.',
            icon: Wrench,
            accent: 'orange',
        },
        {
            title: 'Asset Transfers',
            description: 'Move assets between locations or custodians with approval trails.',
            icon: ArrowLeftRight,
            accent: 'pink',
        },
        {
            title: 'Asset Lifecycle',
            description: 'Full audit history from acquisition through retirement.',
            icon: History,
            accent: 'teal',
        },
        {
            title: 'Reports & Analytics',
            description: 'Utilization, cost and depreciation insights for finance and operations.',
            icon: BarChart3,
            accent: 'indigo',
        },
        {
            title: 'Disposal Management',
            description: 'Process write-offs and end-of-life disposal with documented approvals.',
            icon: Archive,
            accent: 'lime',
        },
    ],
    workflowEyebrow: 'How it works',
    workflowTitle: 'From Purchase to Disposal',
    workflowDescription: 'A clear path from registering new assets to retiring them responsibly.',
    workflowSteps: [
        {
            title: 'Register Asset',
            description: 'Capture purchase details and classification.',
            icon: ClipboardList,
            accent: 'blue',
        },
        {
            title: 'Tag and Assign',
            description: 'Label assets and assign to owners or sites.',
            icon: QrCode,
            accent: 'green',
        },
        {
            title: 'Track & Maintain',
            description: 'Monitor location, condition and service schedules.',
            icon: Wrench,
            accent: 'purple',
        },
        {
            title: 'Manage Lifecycle',
            description: 'Transfers, audits and value adjustments over time.',
            icon: History,
            accent: 'orange',
        },
        {
            title: 'Dispose or Reassign',
            description: 'Retire, sell or reassign assets with full history.',
            icon: Archive,
            accent: 'pink',
        },
    ],
    screenshotEyebrow: 'Real system screenshots',
    screenshotTitle: 'A Smarter Way to Manage Your Company Assets',
    screenshotDescription:
        'See assets, assignments and status on desktop, tablet and mobile — with QR and barcode support built in.',
    screenshotBullets: [
        'Access from desktop, tablet or mobile',
        'QR code and barcode support',
        'Real-time asset tracking and history',
        'Role-based access and permissions',
        'Integrated with procurement, finance and reports',
    ],
    screenshotImages: [
        {
            src: '/images/marketing/asset-management/screenshots-desktop-mobile.png',
            alt: 'TechBridge Assets screens — illustrative until asset management screenshots are exported',
            className: 'h-auto w-full max-w-[36rem] object-contain xl:max-w-[40rem]',
        },
    ],
    integrationsEyebrow: 'Works seamlessly with other modules',
    integrationsTitle: 'Fully Integrated Across Your Business Operations',
    integrations: [
        {
            title: 'Procurement',
            description: 'Link purchased equipment to asset records automatically.',
            icon: ShoppingCart,
            accent: 'pink',
            moduleSlug: 'procurement',
        },
        {
            title: 'HR & Payroll',
            description: 'Assign assets to employees with HR data in sync.',
            icon: Users,
            accent: 'blue',
            moduleSlug: 'hr-payroll',
        },
        {
            title: 'Finance',
            description: 'Depreciation, asset value and cost tracking.',
            icon: Landmark,
            accent: 'orange',
            moduleSlug: 'finance',
        },
        {
            title: 'Reports & Analytics',
            description: 'Utilization and lifecycle reporting across the business.',
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
                'QR tagging made physical audits practical for the first time. We always know which clinic has which device and when it is due for service.',
            authorName: 'Sarah Kiptum',
            authorRole: 'Operations Manager, CareWell Clinic',
            rating: 5,
        },
    ],
    testimonialPaginationDots: 4,
    bottomCtaTitle: 'Ready to Take Control of Your Assets?',
    bottomCtaDescription:
        'Book a personalized demo and see how TechBridge Assets Management can work for your business.',
};
