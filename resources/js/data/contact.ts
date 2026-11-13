import type { LucideIcon } from 'lucide-react';
import { Calendar, FileText, LifeBuoy, MessageCircle } from 'lucide-react';

/** Contact page — comp layout; contact fields sourced from `FOOTER_CONTACT` where applicable. */

export type ContactAccent = 'green' | 'blue' | 'purple' | 'orange';

export const CONTACT_HERO = {
    eyebrow: 'CONTACT US',
    titleLine1: "Let's Talk About Your",
    titleAccent: 'Business Needs.',
    description:
        'Have questions about TechBridge ERP? Our team is here to help. Get in touch with us for a personalized demo, pricing information, or any other inquiries.',
    heroBackgroundImage: '/images/marketing/pricing/hero-background.jpg',
    heroPhotograph: '/images/marketing/contact/hero-photograph.jpg',
    heroPhotographAlt: 'Professional wearing a headset, smiling while ready to assist customers',
    floatingCardLines: ["We're here to", 'help you', 'grow.'] as const,
} as const;

export type ContactHeroPill = {
    title: string;
    subtitle: string;
    accent: ContactAccent;
};

export const CONTACT_HERO_PILLS: ContactHeroPill[] = [
    { title: 'Quick Response', subtitle: 'We typically reply within 24 hours', accent: 'green' },
    { title: 'Expert Support', subtitle: 'Speak with our ERP specialists', accent: 'blue' },
    { title: 'Personalized Guidance', subtitle: 'Get the right solution for your business', accent: 'purple' },
];

export const CONTACT_ACCENT_BG: Record<ContactAccent, string> = {
    green: 'bg-brand-green',
    blue: 'bg-brand-primary',
    purple: 'bg-violet-600',
    orange: 'bg-orange-500',
};

export const CONTACT_INFO_HEADING = 'Our Contact Information' as const;

export const CONTACT_FORM = {
    title: 'Send Us a Message',
    subtitle: "Fill out the form below and we'll get back to you as soon as possible.",
    messageMaxLength: 500,
    subjectOptions: [
        'General Inquiry',
        'Request a Demo',
        'Pricing Question',
        'Technical Support',
        'Partnership Opportunity',
        'Other',
    ] as const,
    submitLabel: 'Send Message',
    unavailableNotice:
        'Online contact submissions are not connected yet. Please email or call using the details on this page.',
} as const;

export const CONTACT_LOCATION = {
    heading: 'Our Location',
    officePhotograph: '/images/marketing/about/hero-office.jpg',
    officePhotographAlt:
        'TechBridge Solutions office reception — illustrative; TODO: verify location photography before production',
    directionsLabel: 'Get Directions',
    mapTitle: 'TechBridge office on map',
} as const;

export type ContactAlternative = {
    title: string;
    description: string;
    ctaLabel: string;
    href: string;
    accent: ContactAccent;
    icon: LucideIcon;
};

export const CONTACT_ALTERNATIVES = {
    heading: 'Other Ways to Reach Us',
    items: [
        {
            title: 'Live Chat',
            description: 'Chat with our team during business hours.',
            ctaLabel: 'Start Chat',
            href: '#contact-form',
            accent: 'green',
            icon: MessageCircle,
        },
        {
            title: 'Book a Demo',
            description: 'Schedule a personalized demo at your convenience.',
            ctaLabel: 'Book a Demo',
            href: '/book-demo',
            accent: 'blue',
            icon: Calendar,
        },
        {
            title: 'Support Portal',
            description: 'Submit a support ticket or track existing requests.',
            ctaLabel: 'Go to Support',
            href: '/faqs',
            accent: 'purple',
            icon: LifeBuoy,
        },
        {
            title: 'Request a Quote',
            description: 'Get a customized quote for your business needs.',
            ctaLabel: 'Request a Quote',
            href: '/request-quote',
            accent: 'orange',
            icon: FileText,
        },
    ] satisfies ContactAlternative[],
} as const;

export const CONTACT_BOTTOM_CTA = {
    title: 'Ready to See TechBridge ERP in Action?',
    description: 'Schedule a personalized demo to explore modules that fit your business.',
    ctaLabel: 'Book a Demo',
} as const;
