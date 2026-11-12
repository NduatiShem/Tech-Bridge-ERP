import type { ModulePageContent } from '@/types/module-page';
import {
    BarChart3,
    Banknote,
    BookOpen,
    CircleCheck,
    ClipboardList,
    FileText,
    Landmark,
    PieChart,
    Scale,
    ShoppingCart,
    Users,
    Wallet,
    Warehouse,
} from 'lucide-react';

export const financePageContent: ModulePageContent = {
    slug: 'finance',
    badgeLabel: 'Finance Module',
    heroTitle: 'Complete Financial Control for',
    heroTitleAccent: 'Your Business.',
    heroDescription:
        'TechBridge Finance helps you manage expenses, cash requests, approvals and budgets in one integrated platform. Gain visibility into spending, strengthen controls and keep financial workflows connected across your organization.',
    heroBackgroundImage: '/images/marketing/finance/hero-background.jpg',
    heroImage: '/images/marketing/finance/hero-laptop.png',
    heroImageAlt: 'TechBridge ERP finance dashboard on laptop',
    trustIndicators: [
        {
            titleBold: 'Expense',
            titleRegular: 'Management',
            icon: Wallet,
            accent: 'blue',
        },
        {
            titleBold: 'Cash Request',
            titleRegular: 'Workflows',
            icon: Banknote,
            accent: 'blue',
        },
        {
            titleBold: 'Budget',
            titleRegular: 'Visibility',
            icon: PieChart,
            accent: 'blue',
        },
    ],
    featuresEyebrow: 'Key Features',
    featuresTitle: 'Everything You Need for Modern Finance Operations',
    featuresDescription:
        'Tools to capture spending, approve requests, plan budgets and report with confidence.',
    features: [
        {
            title: 'Expenses Management',
            description: 'Capture and track expenses with a clear audit trail.',
            icon: Wallet,
            accent: 'blue',
        },
        {
            title: 'Cash Requests',
            description: 'Manage operational cash requests with approval workflows.',
            icon: Banknote,
            accent: 'green',
        },
        {
            title: 'Budgeting & Planning',
            description: 'Set budgets and monitor variances in real time.',
            icon: PieChart,
            accent: 'purple',
        },
        {
            title: 'Approvals & Workflow',
            description: 'Configurable approval levels for financial transactions.',
            icon: CircleCheck,
            accent: 'orange',
        },
        {
            title: 'General Ledger',
            description: 'Automatic posting and integration with operational modules.',
            icon: BookOpen,
            accent: 'pink',
        },
        {
            title: 'Accounts & Payments',
            description: 'Manage suppliers, payments and account balances.',
            icon: Landmark,
            accent: 'teal',
        },
        {
            title: 'Financial Reports',
            description: 'Profit and loss, balance sheet and custom financial reports.',
            icon: BarChart3,
            accent: 'indigo',
        },
        {
            title: 'Audit & Compliance',
            description: 'Track financial activity with detailed audit logs.',
            icon: Scale,
            accent: 'lime',
        },
    ],
    workflowEyebrow: 'How it works',
    workflowTitle: 'From Request to Reporting',
    workflowDescription: 'A controlled flow for expenses and cash requests your teams can trust.',
    workflowSteps: [
        {
            title: 'Submit Request',
            description: 'Employees submit expense or cash requests.',
            icon: ClipboardList,
            accent: 'blue',
        },
        {
            title: 'Manager Approval',
            description: 'Managers review and approve or reject.',
            icon: Users,
            accent: 'green',
        },
        {
            title: 'Finance Review',
            description: 'Finance verifies and processes the request.',
            icon: FileText,
            accent: 'purple',
        },
        {
            title: 'Disbursement',
            description: 'Approved amounts are released.',
            icon: Banknote,
            accent: 'orange',
        },
        {
            title: 'Record & Report',
            description: 'Transactions post to reports and the ledger.',
            icon: BarChart3,
            accent: 'pink',
        },
    ],
    screenshotEyebrow: 'Real system screenshots',
    screenshotTitle: 'Cash Requests, Expenses and Budgets in One View',
    screenshotDescription:
        'TechBridge Finance brings cash requests, expense analysis and budget utilization into clear screens finance teams use every day.',
    screenshotBullets: [
        'Cash request list with status, amount and requester',
        'Expense breakdowns by category and period',
        'Budget utilization against planned spend',
        'Integrated with procurement, HR and inventory costs',
    ],
    screenshotImages: [
        {
            src: '/images/marketing/finance/screenshots-desktop-mobile.png',
            alt: 'TechBridge Finance cash requests and reports — illustrative until finance screenshots are exported',
            className: 'h-auto w-full max-w-[36rem] object-contain xl:max-w-[40rem]',
        },
    ],
    integrationsEyebrow: 'Works seamlessly with other modules',
    integrationsTitle: 'Fully Integrated Across Your Business Operations',
    integrations: [
        {
            title: 'Procurement',
            description: 'Supplier payments linked to purchase activity.',
            icon: ShoppingCart,
            accent: 'pink',
            moduleSlug: 'procurement',
        },
        {
            title: 'Inventory',
            description: 'Stock valuation and cost management.',
            icon: Warehouse,
            accent: 'orange',
            moduleSlug: 'inventory',
        },
        {
            title: 'HR & Payroll',
            description: 'Employee expenses and payroll journals.',
            icon: Users,
            accent: 'blue',
            moduleSlug: 'hr-payroll',
        },
        {
            title: 'Reports & Analytics',
            description: 'Unified financial and operational reporting.',
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
                'Cash requests and expense approvals are finally in one system. Our finance team has better control and leadership gets clearer visibility into spend.',
            authorName: 'Peter Kimani',
            authorRole: 'Finance Director',
            rating: 5,
        },
    ],
    testimonialPaginationDots: 4,
    bottomCtaTitle: 'Ready to Take Control of Your Finances?',
    bottomCtaDescription:
        'Book a personalized demo and see how TechBridge Finance can work for your business.',
};
