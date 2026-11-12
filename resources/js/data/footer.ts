import type { LucideIcon } from 'lucide-react';
import { Facebook, Linkedin, Twitter, Youtube } from 'lucide-react';

/** Shared footer contact details — update here for desktop and mobile footers. */
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
    location:
        'Level 15, 18 & 20, Burjuman Business Tower, Al Mankhool, Sheikh Khalifa Bin Zayed Road',
    postalAddress: 'PO Box: 296360, Dubai, UAE',
    legalEntity: 'Keath Edge HNR LLC-FZ',
    email: 'Info@techbridgeonline.com',
    phone: '+971 58 977 2395',
    hours: 'Mon - Fri, 8:00 AM - 5:00 PM',
    mapUrl: 'https://www.google.com/maps?q=25.234007,55.308876',
    coordinates: { lat: 25.234007, lng: 55.308876 },
} as const;
