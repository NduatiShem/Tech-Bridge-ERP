import type { ModulePageContent } from '@/types/module-page';
import {
    BarChart3,
    CircleCheck,
    Headphones,
    Landmark,
    Phone,
    ShoppingCart,
    Target,
    TrendingUp,
    Truck,
    UserPlus,
    Users,
    Warehouse,
} from 'lucide-react';

export const salesCrmPageContent: ModulePageContent = {
    slug: 'sales-crm',
    badgeLabel: 'Sales & CRM Module',
    heroTitle: 'Build Stronger Customer Relationships.',
    heroTitleAccent: 'Drive More Sales.',
    heroDescription:
        'TechBridge Sales & CRM helps you manage customers, track sales activities and grow revenue in one integrated platform. Give sales teams pipeline visibility, leaders performance insight and customers a consistent experience.',
    heroBackgroundImage: '/images/marketing/sales-crm/hero-background.jpg',
    heroImage: '/images/marketing/sales-crm/hero-laptop.png',
    heroImageAlt: 'TechBridge ERP sales dashboard on laptop',
    trustIndicators: [
        {
            titleBold: '360° Customer',
            titleRegular: 'View',
            icon: Users,
            accent: 'green',
        },
        {
            titleBold: 'Sales Performance',
            titleRegular: 'Tracking',
            icon: TrendingUp,
            accent: 'blue',
        },
        {
            titleBold: 'Stronger Customer',
            titleRegular: 'Relationships',
            icon: CircleCheck,
            accent: 'purple',
        },
    ],
    featuresEyebrow: 'Key Features',
    featuresTitle: 'Everything You Need to Manage Sales and Customers',
    featuresDescription:
        'From first lead through order fulfillment and support — tools your commercial team can rely on every day.',
    features: [
        {
            title: 'Lead Management',
            description: 'Capture and qualify leads with clear ownership and follow-up.',
            icon: UserPlus,
            accent: 'green',
        },
        {
            title: 'Customer Management',
            description: 'Central customer profiles with contacts, history and documents.',
            icon: Users,
            accent: 'blue',
        },
        {
            title: 'Opportunity Management',
            description: 'Track deals through stages with value and probability.',
            icon: Target,
            accent: 'purple',
        },
        {
            title: 'Sales Orders',
            description: 'Convert wins into orders linked to inventory and fulfillment.',
            icon: ShoppingCart,
            accent: 'orange',
        },
        {
            title: 'Sales Calls & Activities',
            description: 'Log calls, visits and tasks so nothing falls through the cracks.',
            icon: Phone,
            accent: 'pink',
        },
        {
            title: 'Sales Targets & Performance',
            description: 'Set targets and compare actuals by rep, team or period.',
            icon: TrendingUp,
            accent: 'teal',
        },
        {
            title: 'Reports & Analytics',
            description: 'Pipeline, conversion and revenue reports for leadership.',
            icon: BarChart3,
            accent: 'indigo',
        },
        {
            title: 'Customer Support',
            description: 'Connect post-sale issues to the account record your team knows.',
            icon: Headphones,
            accent: 'lime',
        },
    ],
    workflowEyebrow: 'How it works',
    workflowTitle: 'From Lead to Loyal Customer',
    workflowDescription: 'A repeatable flow that turns interest into revenue and long-term relationships.',
    workflowSteps: [
        {
            title: 'Capture Leads',
            description: 'Import or enter leads and assign owners.',
            icon: UserPlus,
            accent: 'blue',
        },
        {
            title: 'Manage Opportunities',
            description: 'Qualify and progress deals through your pipeline.',
            icon: Target,
            accent: 'green',
        },
        {
            title: 'Convert to Sales',
            description: 'Close opportunities and create sales orders.',
            icon: ShoppingCart,
            accent: 'purple',
        },
        {
            title: 'Deliver & Support',
            description: 'Fulfill orders and support customers after the sale.',
            icon: Truck,
            accent: 'orange',
        },
        {
            title: 'Analyze & Grow',
            description: 'Review performance and refine your go-to-market.',
            icon: TrendingUp,
            accent: 'pink',
        },
    ],
    screenshotEyebrow: 'Access anytime, anywhere',
    screenshotTitle: 'A Modern and Mobile-Friendly Sales Solution',
    screenshotDescription:
        'Sales teams stay productive on desktop, tablet and phone with data that stays in sync across devices.',
    screenshotBullets: [
        'Customer and pipeline views optimized for mobile',
        'Real-time sync between field and office',
        'Role-based access for reps and managers',
        'Integrated with inventory, finance and reports',
    ],
    screenshotImages: [
        {
            src: '/images/marketing/sales-crm/screenshots-desktop-mobile.png',
            alt: 'TechBridge Sales & CRM screens — illustrative until sales screenshots are exported',
            className: 'h-auto w-full max-w-[36rem] object-contain xl:max-w-[40rem]',
        },
    ],
    integrationsEyebrow: 'Works seamlessly with other modules',
    integrationsTitle: 'Fully Integrated Across Your Business Operations',
    integrations: [
        {
            title: 'Inventory',
            description: 'Stock availability and allocation on sales orders.',
            icon: Warehouse,
            accent: 'orange',
            moduleSlug: 'inventory',
        },
        {
            title: 'Procurement',
            description: 'Supply workflows when demand exceeds on-hand stock.',
            icon: ShoppingCart,
            accent: 'pink',
            moduleSlug: 'procurement',
        },
        {
            title: 'Finance',
            description: 'Invoicing, collections and revenue recognition.',
            icon: Landmark,
            accent: 'blue',
            moduleSlug: 'finance',
        },
        {
            title: 'Reports & Analytics',
            description: 'Unified sales and operational dashboards.',
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
                'Our pipeline finally lives in one place. Reps know their next step, managers see forecast accuracy improve and leadership trusts the numbers.',
            authorName: 'Dr. Jane Wanjiru',
            authorRole: 'Managing Director, MediForm Ltd',
            rating: 5,
        },
    ],
    testimonialPaginationDots: 4,
    bottomCtaTitle: 'Ready to Grow Your Sales?',
    bottomCtaDescription:
        'Book a personalized demo and see how TechBridge Sales & CRM can work for your business.',
};
