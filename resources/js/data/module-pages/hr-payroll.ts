import type { ModulePageContent } from '@/types/module-page';
import {
    BarChart3,
    CalendarClock,
    CalendarDays,
    CircleCheck,
    ClipboardList,
    FileSpreadsheet,
    Landmark,
    Receipt,
    Scale,
    ShoppingCart,
    UserPlus,
    Users,
    Wallet,
    Warehouse,
} from 'lucide-react';

export const hrPayrollPageContent: ModulePageContent = {
    slug: 'hr-payroll',
    badgeLabel: 'HR & Payroll Module',
    heroTitle: 'Manage Your People with',
    heroTitleAccent: 'Confidence.',
    heroDescription:
        'TechBridge HR & Payroll helps you manage employees, track attendance, process payroll and stay compliant — all in one integrated platform. Reduce manual work, improve accuracy and give your team a better experience.',
    heroBackgroundImage: '/images/marketing/hr-payroll/hero-background.jpg',
    heroImage: '/images/marketing/hr-payroll/hero-laptop.png',
    heroImageAlt: 'TechBridge ERP HR and payroll dashboard on laptop',
    trustIndicators: [
        {
            titleBold: 'Complete',
            titleRegular: 'Employee Records',
            icon: Users,
            accent: 'blue',
        },
        {
            titleBold: 'Automated',
            titleRegular: 'Payroll Processing',
            icon: Wallet,
            accent: 'blue',
        },
        {
            titleBold: 'Statutory',
            titleRegular: 'Compliance',
            icon: Scale,
            accent: 'blue',
        },
    ],
    featuresEyebrow: 'Key Features',
    featuresTitle: 'Everything You Need for Modern HR & Payroll Management',
    featuresDescription:
        'A complete set of tools to manage your workforce from onboarding to payslip delivery and reporting.',
    features: [
        {
            title: 'Employee Management',
            description: 'Maintain employee profiles, contracts, departments and employment history in one place.',
            icon: Users,
            accent: 'green',
        },
        {
            title: 'Attendance & Time',
            description: 'Track clock-ins, shifts and working hours with accurate time records.',
            icon: CalendarClock,
            accent: 'blue',
        },
        {
            title: 'Leave Management',
            description: 'Manage leave types, balances, requests and approvals with clear workflows.',
            icon: CalendarDays,
            accent: 'purple',
        },
        {
            title: 'Payroll Processing',
            description: 'Calculate salaries, deductions and net pay with configurable pay rules.',
            icon: Wallet,
            accent: 'orange',
        },
        {
            title: 'Payroll Periods',
            description: 'Open, process and close pay periods with audit-friendly controls.',
            icon: ClipboardList,
            accent: 'pink',
        },
        {
            title: 'Statutory Compliance',
            description: 'Support statutory deductions and reporting requirements for your jurisdiction.',
            icon: Scale,
            accent: 'teal',
        },
        {
            title: 'Payslips',
            description: 'Generate and distribute digital payslips securely to employees.',
            icon: Receipt,
            accent: 'indigo',
        },
        {
            title: 'Reports & Analytics',
            description: 'Headcount, payroll cost and attendance insights for HR and finance teams.',
            icon: BarChart3,
            accent: 'lime',
        },
    ],
    workflowEyebrow: 'How it works',
    workflowTitle: 'From Employee Onboarding to Payroll',
    workflowDescription: 'A streamlined HR and payroll flow your team can rely on every pay cycle.',
    workflowSteps: [
        {
            title: 'Onboard Employee',
            description: 'Capture employee details and assign roles.',
            icon: UserPlus,
            accent: 'blue',
        },
        {
            title: 'Track Attendance',
            description: 'Record time, shifts and absences.',
            icon: CalendarClock,
            accent: 'green',
        },
        {
            title: 'Process Payroll',
            description: 'Run calculations for the pay period.',
            icon: FileSpreadsheet,
            accent: 'purple',
        },
        {
            title: 'Approve & Disburse',
            description: 'Review totals and release payments.',
            icon: CircleCheck,
            accent: 'orange',
        },
        {
            title: 'Employee Self-Service',
            description: 'Employees access payslips and requests.',
            icon: Users,
            accent: 'pink',
        },
    ],
    screenshotEyebrow: 'Real system screenshots',
    screenshotTitle: 'Empower Your Employees',
    screenshotDescription:
        'TechBridge HR & Payroll provides intuitive desktop and mobile experiences so HR teams and employees stay connected.',
    screenshotBullets: [
        'Employee self-service portal on web and mobile',
        'Real-time attendance and leave balances',
        'Role-based access and approvals',
        'Integrated with finance and operations modules',
    ],
    screenshotImages: [
        {
            src: '/images/marketing/hr-payroll/screenshots-desktop-mobile.png',
            alt: 'TechBridge HR employee list on desktop and employee self-service on mobile — illustrative until HR screenshots are exported',
            className: 'h-auto w-full max-w-[36rem] object-contain xl:max-w-[40rem]',
        },
    ],
    integrationsEyebrow: 'Works seamlessly with other modules',
    integrationsTitle: 'Fully Integrated Across Your Business Operations',
    integrations: [
        {
            title: 'Finance',
            description: 'Post payroll journals and reconcile with your ledger.',
            icon: Landmark,
            accent: 'blue',
            moduleSlug: 'finance',
        },
        {
            title: 'Inventory',
            description: 'Align workforce data with operational teams where needed.',
            icon: Warehouse,
            accent: 'orange',
            moduleSlug: 'inventory',
        },
        {
            title: 'Procurement',
            description: 'Connect people processes with purchasing workflows.',
            icon: ShoppingCart,
            accent: 'pink',
            moduleSlug: 'procurement',
        },
        {
            title: 'Reports & Analytics',
            description: 'Unified reporting across HR, payroll and the business.',
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
                'Payroll used to take days of manual work. With TechBridge HR & Payroll we process faster, with fewer errors, and our employees can access payslips anytime.',
            authorName: 'David Omondi',
            authorRole: 'Finance Manager',
            rating: 5,
        },
    ],
    testimonialPaginationDots: 4,
    bottomCtaTitle: 'Ready to Streamline Your HR & Payroll?',
    bottomCtaDescription:
        'Book a personalized demo and see how TechBridge HR & Payroll can work for your business.',
};
