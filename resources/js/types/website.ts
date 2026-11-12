import type { LucideIcon } from 'lucide-react';

export type ErpModule = {
    slug: string;
    title: string;
    summary: string;
    icon: LucideIcon;
    keyFeatures: string[];
};

export type NavLink = {
    label: string;
    href: string;
    routeName?: string;
};

export type WebsitePageProps = {
    title?: string;
    description?: string;
};
