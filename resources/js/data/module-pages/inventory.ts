import type { ModulePageContent } from '@/types/module-page';
import {
    ArrowLeftRight,
    BarChart3,
    Box,
    Boxes,
    CircleCheck,
    ClipboardCheck,
    Factory,
    Package,
    PackageCheck,
    ShoppingCart,
    SlidersHorizontal,
    Timer,
    Warehouse,
} from 'lucide-react';

export const inventoryPageContent: ModulePageContent = {
    slug: 'inventory',
    badgeLabel: 'Inventory Module',
    heroTitle: 'Complete Inventory Control for Smarter',
    heroTitleAccent: 'Business Operations.',
    heroDescription:
        'TechBridge Inventory gives you real-time visibility across warehouses and locations. Track products, stock levels, batches, expiry and movements in one integrated platform — so your teams always know what is on hand.',
    heroBackgroundImage: '/images/marketing/inventory/hero-background.jpg',
    heroImage: '/images/marketing/inventory/hero-laptop.png',
    heroImageAlt: 'TechBridge ERP inventory dashboard on laptop',
    trustIndicators: [
        {
            titleBold: 'Real-time',
            titleRegular: 'Stock Visibility',
            icon: Box,
            accent: 'blue',
        },
        {
            titleBold: 'Multi-Warehouse',
            titleRegular: 'Management',
            icon: Warehouse,
            accent: 'blue',
        },
        {
            titleBold: 'Accurate & Reliable',
            titleRegular: 'Inventory Data',
            icon: CircleCheck,
            accent: 'blue',
        },
    ],
    featuresEyebrow: 'Key Features',
    featuresTitle: 'Everything You Need for Efficient Inventory Management',
    featuresDescription:
        'A complete set of tools to manage products, warehouses, stock movements and reporting in one place.',
    features: [
        {
            title: 'Stock Management',
            description: 'Track stock levels, batches, expiry and movements in real time.',
            icon: Box,
            accent: 'blue',
        },
        {
            title: 'Multi-Warehouse',
            description: 'Manage multiple locations with stock transfer and tracking.',
            icon: Warehouse,
            accent: 'green',
        },
        {
            title: 'Stock Take',
            description: 'Plan and conduct audits with variance reports.',
            icon: ClipboardCheck,
            accent: 'purple',
        },
        {
            title: 'Stock Adjustments',
            description: 'Record and approve adjustments with a full audit trail.',
            icon: SlidersHorizontal,
            accent: 'orange',
        },
        {
            title: 'Batch & Expiry Tracking',
            description: 'Automatic warnings for expiring stock and batch traceability.',
            icon: Timer,
            accent: 'pink',
        },
        {
            title: 'Product Management',
            description: 'Manage categories, units of measure and minimum stock levels.',
            icon: Package,
            accent: 'teal',
        },
        {
            title: 'Stock Movements',
            description: 'Complete history of receipts, issues and transfers.',
            icon: ArrowLeftRight,
            accent: 'indigo',
        },
        {
            title: 'Reports & Analytics',
            description: 'Real-time valuation and movement analysis.',
            icon: BarChart3,
            accent: 'lime',
        },
    ],
    workflowEyebrow: 'How it works',
    workflowTitle: 'From Receipt to Reporting',
    workflowDescription: 'A clear inventory workflow your warehouse and operations teams can follow every day.',
    workflowSteps: [
        {
            title: 'Receive Stock',
            description: 'Record incoming stock with batch and expiry details.',
            icon: PackageCheck,
            accent: 'blue',
        },
        {
            title: 'Manage Stock',
            description: 'Track levels across all warehouses.',
            icon: Boxes,
            accent: 'green',
        },
        {
            title: 'Issue or Transfer',
            description: 'Move stock to operations or between warehouses.',
            icon: ArrowLeftRight,
            accent: 'purple',
        },
        {
            title: 'Conduct Stock Take',
            description: 'Verify physical stock against system records.',
            icon: ClipboardCheck,
            accent: 'orange',
        },
        {
            title: 'Monitor & Report',
            description: 'Use inventory insights for better decisions.',
            icon: BarChart3,
            accent: 'pink',
        },
    ],
    screenshotEyebrow: 'Real system screenshots',
    screenshotTitle: 'Manage Your Inventory on the Go',
    screenshotDescription:
        'Browse products, check stock status and run warehouse tasks from desktop or mobile — with the same live data your dashboard uses.',
    screenshotBullets: [
        'Products list with categories, min. stock and status at a glance',
        'Search, filter and manage items from a clear table view',
        'Mobile shortcuts for stock overview, transfers and adjustments',
        'Real-time updates across warehouses and devices',
    ],
    screenshotImages: [
        {
            src: '/images/marketing/inventory/screenshots-desktop-mobile.png',
            alt: 'TechBridge Inventory on desktop and mobile — illustrative until inventory screenshots are exported',
            className: 'h-auto w-full max-w-[36rem] object-contain xl:max-w-[40rem]',
        },
    ],
    integrationsEyebrow: 'Works seamlessly with other modules',
    integrationsTitle: 'Fully Integrated Across Your Business Operations',
    integrations: [
        {
            title: 'Procurement',
            description: 'Link supplier orders to inbound stock receipts.',
            icon: ShoppingCart,
            accent: 'pink',
            moduleSlug: 'procurement',
        },
        {
            title: 'Manufacturing',
            description: 'Track raw material consumption and finished goods.',
            icon: Factory,
            accent: 'blue',
            moduleSlug: 'manufacturing',
        },
        {
            title: 'Sales & CRM',
            description: 'Allocate and fulfill stock against customer demand.',
            icon: Package,
            accent: 'orange',
            moduleSlug: 'sales-crm',
        },
        {
            title: 'Reports & Analytics',
            description: 'Unified inventory and business reporting.',
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
                'We finally have real-time visibility into stock across our warehouses. TechBridge Inventory helped us reduce stock-outs and plan replenishment with confidence.',
            authorName: 'Mary Wanjiku',
            authorRole: 'Operations Manager, HealthPlus Ltd',
            rating: 5,
        },
    ],
    testimonialPaginationDots: 4,
    bottomCtaTitle: 'Ready to Take Control of Your Inventory?',
    bottomCtaDescription:
        'Book a personalized demo and see how TechBridge Inventory can work for your business.',
};
