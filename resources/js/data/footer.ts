import type { LucideIcon } from 'lucide-react';
import { Facebook, Linkedin, Twitter, Youtube } from 'lucide-react';

/** Approved marketing footer mockup — verify URLs and phone before production. */
export const FOOTER_BRAND = {
    description:
        'TechBridge Solutions LLC provides modern ERP solutions to help businesses manage their people, processes and operations efficiently and securely.',
    tagline: 'Bridging Businesses with Technology.',
} as const;

export type FooterSocialLink = {
    label: string;
    icon: LucideIcon;
    /** Omit until marketing provides verified profile URLs. */
    href?: string;
};

export const FOOTER_SOCIAL_LINKS: FooterSocialLink[] = [
    { label: 'LinkedIn', icon: Linkedin },
    { label: 'Facebook', icon: Facebook },
    { label: 'X', icon: Twitter },
    { label: 'YouTube', icon: Youtube },
];

export const FOOTER_CONTACT = {
    location: 'Nairobi, Kenya',
    email: 'info@techbridge.co.ke',
    phone: '+254 700 123 456',
    hours: 'Mon - Fri, 8:00 AM - 5:00 PM',
} as const;
