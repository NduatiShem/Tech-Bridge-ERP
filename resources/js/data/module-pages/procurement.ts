import type { ModulePageContent } from '@/types/module-page';
import {
    BarChart3,
    Building2,
    CircleCheck,
    ClipboardList,
    FileText,
    Landmark,
    PackageCheck,
    ShoppingCart,
    Truck,
    Users,
    Warehouse,
    Wrench,
} from 'lucide-react';

export const procurementPageContent: ModulePageContent = {
    slug: 'procurement',
    badgeLabel: 'Procurement Module',
    heroTitle: 'Streamline Your',
    heroTitleAccent: 'Procurement Process.',
    heroDescription:
        'TechBridge Procurement helps you manage purchase requests, supplier relationships and approvals in one integrated platform. Control spending, improve compliance and connect purchasing with inventory and finance.',
    heroBackgroundImage: '/images/marketing/procurement/hero-background.jpg',
    heroImage: '/images/marketing/procurement/hero-laptop.png',
    heroImageAlt: 'TechBridge ERP procurement dashboard on laptop',
    trustIndicators: [
        {
            titleBold: 'Controlled',
            titleRegular: 'Purchase Requests',
            icon: FileText,
            accent: 'blue',
        },
        {
            titleBold: 'Trusted',
            titleRegular: 'Supplier Management',
            icon: Building2,
            accent: 'blue',
        },
        {
            titleBold: 'Clear',
            titleRegular: 'Approval Workflows',
            icon: CircleCheck,
            accent: 'blue',
        },
    ],
    featuresEyebrow: 'Key Features',
    featuresTitle: 'Everything You Need for Efficient Procurement',
    featuresDescription:
        'From requisition to goods receipt — tools to run purchasing with visibility and control.',
    features: [
        {
            title: 'Purchase Requests',
            description: 'Submit and track requests with configurable approval workflows.',
            icon: ClipboardList,
            accent: 'blue',
        },
        {
            title: 'Purchase Orders',
            description: 'Generate and manage POs with supplier quotations and terms.',
            icon: FileText,
            accent: 'green',
        },
        {
            title: 'Supplier Management',
            description: 'Maintain supplier records, ratings and contract details.',
            icon: Building2,
            accent: 'purple',
        },
        {
            title: 'Goods Receiving',
            description: 'Record and track received goods against purchase orders.',
            icon: PackageCheck,
            accent: 'orange',
        },
        {
            title: 'Request Approvals',
            description: 'Multi-level approvals with notifications and audit history.',
            icon: CircleCheck,
            accent: 'pink',
        },
        {
            title: 'Procurement Analytics',
            description: 'KPIs for spend, supplier performance and cycle times.',
            icon: BarChart3,
            accent: 'teal',
        },
        {
            title: 'Inventory Integration',
            description: 'Automatic stock updates when goods are received.',
            icon: Warehouse,
            accent: 'indigo',
        },
        {
            title: 'Reports & Compliance',
            description: 'Audit logs and detailed procurement reporting.',
            icon: FileText,
            accent: 'lime',
        },
    ],
    workflowEyebrow: 'How it works',
    workflowTitle: 'From Request to Receipt',
    workflowDescription: 'A structured procurement flow from employee request through to reporting.',
    workflowSteps: [
        {
            title: 'Create Request',
            description: 'Employees submit purchase needs for approval.',
            icon: ClipboardList,
            accent: 'blue',
        },
        {
            title: 'Manager Approval',
            description: 'Reviewers approve or reject with comments.',
            icon: Users,
            accent: 'green',
        },
        {
            title: 'Create Purchase Order',
            description: 'Convert approved requests into POs.',
            icon: ShoppingCart,
            accent: 'purple',
        },
        {
            title: 'Receive Goods',
            description: 'Confirm delivery and update inventory.',
            icon: Truck,
            accent: 'orange',
        },
        {
            title: 'Track & Report',
            description: 'Monitor spend and supplier performance.',
            icon: BarChart3,
            accent: 'pink',
        },
    ],
    screenshotEyebrow: 'Real system screenshots',
    screenshotTitle: 'Purchase Requests, Orders and Suppliers in One Place',
    screenshotDescription:
        'TechBridge Procurement provides clear views for requests, purchase orders and supplier management so buyers and approvers stay aligned.',
    screenshotBullets: [
        'Dashboard visibility into pending and approved requests',
        'Purchase order tracking with status at a glance',
        'Supplier records linked to orders and receipts',
        'Integrated with inventory and finance modules',
    ],
    screenshotImages: [
        {
            src: '/images/marketing/procurement/screenshots-desktop-mobile.png',
            alt: 'TechBridge Procurement screens — illustrative until procurement screenshots are exported',
            className: 'h-auto w-full max-w-[36rem] object-contain xl:max-w-[40rem]',
        },
    ],
    integrationsEyebrow: 'Works seamlessly with other modules',
    integrationsTitle: 'Fully Integrated Across Your Business Operations',
    integrations: [
        {
            title: 'Inventory',
            description: 'Update stock when goods are received.',
            icon: Warehouse,
            accent: 'orange',
            moduleSlug: 'inventory',
        },
        {
            title: 'Finance',
            description: 'Connect POs and receipts to payables.',
            icon: Landmark,
            accent: 'blue',
            moduleSlug: 'finance',
        },
        {
            title: 'Asset Management',
            description: 'Procure and capitalize equipment and assets.',
            icon: Wrench,
            accent: 'purple',
            moduleSlug: 'asset-management',
        },
        {
            title: 'Reports & Analytics',
            description: 'Unified spend and operational reporting.',
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
                'Approvals and PO tracking used to live in spreadsheets. TechBridge Procurement gave us one place to manage requests, suppliers and receiving.',
            authorName: 'Grace Otieno',
            authorRole: 'Procurement Manager',
            rating: 5,
        },
    ],
    testimonialPaginationDots: 4,
    bottomCtaTitle: 'Ready to Streamline Your Procurement?',
    bottomCtaDescription:
        'Book a personalized demo and see how TechBridge Procurement can work for your business.',
};
