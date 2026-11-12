import type { NavLink } from '@/types/website';

/** Matches approved marketing header: Home, Modules, Solutions, Pricing, Resources, About */
export const MAIN_NAV_LINKS: NavLink[] = [
    { label: 'Home', href: '/', routeName: 'home' },
    { label: 'Solutions', href: '/solutions', routeName: 'solutions' },
    { label: 'Pricing', href: '/pricing', routeName: 'pricing' },
    { label: 'Resources', href: '/resources', routeName: 'resources' },
    { label: 'About Us', href: '/about', routeName: 'about' },
];

/** Approved footer mockup — Quick Links column. */
export const FOOTER_QUICK_LINKS: NavLink[] = [
    { label: 'Home', href: '/', routeName: 'home' },
    { label: 'Modules', href: '/modules', routeName: 'modules.index' },
    { label: 'Solutions', href: '/solutions', routeName: 'solutions' },
    { label: 'Pricing', href: '/pricing', routeName: 'pricing' },
    { label: 'About Us', href: '/about', routeName: 'about' },
    { label: 'Contact', href: '/contact', routeName: 'contact' },
];

/** Footer module labels match approved mockup (e.g. “Assets”). */
export const FOOTER_MODULE_LINKS: { label: string; slug: string }[] = [
    { label: 'HR & Payroll', slug: 'hr-payroll' },
    { label: 'Inventory', slug: 'inventory' },
    { label: 'Procurement', slug: 'procurement' },
    { label: 'Sales & CRM', slug: 'sales-crm' },
    { label: 'Finance', slug: 'finance' },
    { label: 'Manufacturing', slug: 'manufacturing' },
    { label: 'Assets', slug: 'asset-management' },
    { label: 'Reports & Analytics', slug: 'reports-analytics' },
];

export const FOOTER_RESOURCES_LINKS: NavLink[] = [
    { label: 'Blog', href: '/blog', routeName: 'blog' },
    { label: 'Documentation', href: '/documentation', routeName: 'documentation' },
    { label: 'FAQs', href: '/faqs', routeName: 'faqs' },
    { label: 'Case Studies', href: '/case-studies', routeName: 'case-studies' },
    { label: 'Support', href: '/faqs', routeName: 'faqs' },
    { label: 'Privacy Policy', href: '/privacy-policy', routeName: 'privacy-policy' },
    { label: 'Terms of Service', href: '/terms-of-service', routeName: 'terms-of-service' },
];
