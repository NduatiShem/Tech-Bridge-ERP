import type { LucideIcon } from 'lucide-react';
import { Handshake, Lock, ShieldCheck, Users } from 'lucide-react';

/**
 * Terms of Service — marketing layout copy.
 * TODO: verify — legal review required before production publication.
 */

export const TERMS_HERO = {
    eyebrow: 'LEGAL',
    titleLine1: 'Terms of',
    titleAccent: 'Service',
    description:
        'These terms govern your access to and use of TechBridge ERP websites, products, and related services. Please read them carefully before using our platform.',
    lastUpdated: 'October 15, 2026',
    heroBackgroundImage: '/images/marketing/pricing/hero-background.jpg',
    heroPhotograph: '/images/marketing/terms/hero-photograph.jpg',
    heroPhotographAlt:
        'Professional at a laptop with illustrative holographic icons for contracts, agreements, and compliance',
    floatingCardLines: ['Trusted Solutions.', 'Clear Terms.'] as const,
} as const;

export type TermsBlock = {
    type: 'paragraph' | 'bullets';
    text?: string;
    items?: string[];
};

export type TermsSection = {
    id: string;
    number: number;
    title: string;
    teaser: string;
    body: TermsBlock[];
    defaultOpen?: boolean;
};

export const TERMS_ON_PAGE_LABEL = 'On This Page';

export const TERMS_SECTIONS: TermsSection[] = [
    {
        id: 'introduction',
        number: 1,
        title: 'Introduction',
        teaser: 'Overview of TechBridge Solutions LLC and the scope of these terms.',
        body: [
            {
                type: 'paragraph',
                text: 'Welcome to TechBridge Solutions LLC ("TechBridge", "we", "us", or "our"). These Terms of Service ("Terms") apply to your use of our websites, cloud ERP services, demos, documentation, and any related offerings we make available (collectively, the "Services").',
            },
            {
                type: 'paragraph',
                text: 'By accessing or using the Services, you acknowledge that you have read and understood these Terms. If you are using the Services on behalf of an organization, you represent that you have authority to bind that organization.',
            },
        ],
    },
    {
        id: 'acceptance',
        number: 2,
        title: 'Acceptance of Terms',
        teaser: 'How agreement is formed when you use our Services.',
        body: [
            {
                type: 'paragraph',
                text: 'Your use of the Services constitutes acceptance of these Terms and our Privacy Policy. If you do not agree, you must not access or use the Services.',
            },
            {
                type: 'paragraph',
                text: 'We may update these Terms from time to time. Material changes will be indicated by updating the "Last updated" date on this page. Continued use after changes become effective constitutes acceptance of the revised Terms.',
            },
        ],
    },
    {
        id: 'use-of-services',
        number: 3,
        title: 'Use of Our Services',
        teaser: 'Permitted use, license scope, and restrictions for TechBridge ERP.',
        defaultOpen: true,
        body: [
            {
                type: 'paragraph',
                text: 'Subject to these Terms and any order form or subscription plan you purchase, TechBridge grants you a limited, non-exclusive, non-transferable right to access and use the Services for your internal business operations.',
            },
            {
                type: 'bullets',
                items: [
                    'Use the Services only in compliance with applicable laws and regulations.',
                    'Do not reverse engineer, decompile, or attempt to extract source code except where permitted by law.',
                    'Do not interfere with or disrupt the integrity or performance of the Services.',
                    'Do not use the Services to store or transmit unlawful, infringing, or harmful content.',
                    'Do not resell, sublicense, or provide the Services to third parties except as expressly allowed in writing.',
                ],
            },
        ],
    },
    {
        id: 'accounts',
        number: 4,
        title: 'Accounts & Access',
        teaser: 'Registration, credentials, and administrative controls.',
        body: [
            {
                type: 'paragraph',
                text: 'Certain features require an account. You agree to provide accurate registration information and keep it current. You are responsible for maintaining the confidentiality of login credentials and for activity under your account.',
            },
            {
                type: 'paragraph',
                text: 'Organization administrators may manage user roles and permissions within the ERP. TechBridge may suspend or terminate accounts that violate these Terms or pose a security risk.',
            },
        ],
    },
    {
        id: 'fees',
        number: 5,
        title: 'Fees, Billing & Subscriptions',
        teaser: 'Plans, renewals, taxes, and payment obligations.',
        body: [
            {
                type: 'paragraph',
                text: 'Paid subscriptions are billed according to the pricing plan or quotation accepted at signup. Fees are exclusive of applicable taxes unless stated otherwise. Billing cycles, renewal terms, and cancellation windows are described on the Pricing page or in your order documentation.',
            },
            {
                type: 'paragraph',
                text: 'Late or failed payments may result in suspension of access. For custom enterprise agreements, payment terms in the signed contract prevail over general website copy.',
            },
        ],
    },
    {
        id: 'user-responsibilities',
        number: 6,
        title: 'User Responsibilities',
        teaser: 'Obligations for accurate data, acceptable use, and cooperation.',
        defaultOpen: true,
        body: [
            {
                type: 'paragraph',
                text: 'You are responsible for your users\' compliance with these Terms and for the accuracy of data entered into the Services.',
            },
            {
                type: 'bullets',
                items: [
                    'Maintain appropriate internal policies for ERP access and data entry.',
                    'Promptly notify TechBridge of unauthorized use or suspected security incidents.',
                    'Back up or export data where required for your compliance or business continuity plans.',
                    'Cooperate with reasonable security or abuse investigations.',
                    'Ensure that third-party integrations you enable comply with applicable law and your policies.',
                ],
            },
        ],
    },
    {
        id: 'intellectual-property',
        number: 7,
        title: 'Intellectual Property',
        teaser: 'Ownership of the platform, brand assets, and your business data.',
        body: [
            {
                type: 'paragraph',
                text: 'TechBridge and its licensors retain all rights in the Services, software, documentation, trademarks, and related materials. Except for the limited license granted above, no rights are transferred to you.',
            },
            {
                type: 'paragraph',
                text: 'You retain ownership of data you submit to the Services. You grant TechBridge a limited license to host, process, and display that data solely to provide and improve the Services, consistent with our Privacy Policy.',
            },
        ],
    },
    {
        id: 'privacy',
        number: 8,
        title: 'Privacy & Data Protection',
        teaser: 'How personal and business data is handled.',
        body: [
            {
                type: 'paragraph',
                text: 'Our collection and use of personal information is described in the Privacy Policy. You are responsible for providing any required notices to your users and obtaining consents for data you upload that relates to them.',
            },
            {
                type: 'paragraph',
                text: 'Where applicable, data processing terms or security schedules may be provided under separate agreement for enterprise customers.',
            },
        ],
    },
    {
        id: 'third-party',
        number: 9,
        title: 'Third-Party Services',
        teaser: 'Integrations, links, and external tools.',
        body: [
            {
                type: 'paragraph',
                text: 'The Services may interoperate with third-party applications or contain links to external sites. TechBridge does not control third-party services and is not responsible for their content, policies, or availability.',
            },
            {
                type: 'paragraph',
                text: 'Your use of third-party services is governed by their terms. Enable integrations only when you have reviewed and accepted those terms.',
            },
        ],
    },
    {
        id: 'availability',
        number: 10,
        title: 'Service Availability & Changes',
        teaser: 'Maintenance, updates, and feature evolution.',
        body: [
            {
                type: 'paragraph',
                text: 'We strive to keep the Services available and secure. Planned maintenance, upgrades, or events beyond our reasonable control may cause temporary interruption.',
            },
            {
                type: 'paragraph',
                text: 'We may add, modify, or retire features to improve the platform. Material reductions in core subscribed functionality will be handled in line with your plan or contract.',
            },
        ],
    },
    {
        id: 'termination',
        number: 11,
        title: 'Termination',
        teaser: 'Ending access and data retention expectations.',
        body: [
            {
                type: 'paragraph',
                text: 'You may stop using the Services according to your subscription terms. We may suspend or terminate access for breach, non-payment, legal requirement, or prolonged inactivity as described in your agreement.',
            },
            {
                type: 'paragraph',
                text: 'Upon termination, your right to access the Services ends. Export and deletion timelines for customer data are defined in your order or data processing documentation.',
            },
        ],
    },
    {
        id: 'disclaimers',
        number: 12,
        title: 'Disclaimers',
        teaser: 'Warranty limitations for the Services.',
        body: [
            {
                type: 'paragraph',
                text: 'The Services are provided on an "as is" and "as available" basis to the maximum extent permitted by law. TechBridge disclaims all warranties not expressly stated in a written agreement signed by both parties.',
            },
        ],
    },
    {
        id: 'liability',
        number: 13,
        title: 'Limitation of Liability & Indemnity',
        teaser: 'Caps on damages and your indemnification obligations.',
        body: [
            {
                type: 'paragraph',
                text: 'To the fullest extent permitted by law, TechBridge will not be liable for indirect, incidental, special, consequential, or punitive damages, or for lost profits, revenues, or data arising from use of the Services.',
            },
            {
                type: 'paragraph',
                text: 'You agree to indemnify TechBridge against claims arising from your misuse of the Services, violation of these Terms, or infringement of third-party rights by content you provide.',
            },
        ],
    },
    {
        id: 'governing-law',
        number: 14,
        title: 'Governing Law & Contact',
        teaser: 'Applicable law and how to reach us with legal questions.',
        body: [
            {
                type: 'paragraph',
                text: 'These Terms are governed by the laws applicable to TechBridge Solutions LLC and its operating entity, without regard to conflict-of-law principles. Dispute resolution procedures in a signed enterprise agreement, if any, will prevail.',
            },
            {
                type: 'paragraph',
                text: 'Questions about these Terms may be directed to our team using the contact details on this page or the Contact Us page.',
            },
        ],
    },
];

export const TERMS_HIGHLIGHTS = {
    heading: 'Key Highlights',
    items: [
        'Fair and transparent service terms',
        'Clear expectations for data and privacy',
        'Subscription and billing terms aligned to your plan',
        'Professional support and security practices',
        'Periodic updates with a visible last-revised date',
    ],
} as const;

export const TERMS_PROMO = {
    title: 'Trusted Solutions. Clear Terms.',
    image: '/images/marketing/terms/promo-banner.jpg',
    imageAlt: 'Laptop on a desk displaying a verified document icon in a bright office',
} as const;

export const TERMS_CLARIFICATION = {
    heading: 'Need Clarification?',
    subtitle: 'Our team can help you interpret these terms or discuss enterprise agreements.',
} as const;

export type TermsCommitmentItem = {
    title: string;
    description: string;
    icon: LucideIcon;
    iconClassName: string;
};

export const TERMS_COMMITMENT = {
    heading: 'Our Commitment',
    description: 'We operate with fairness, transparency and integrity in all our business relationships.',
    items: [
        {
            title: 'Transparency',
            description: 'Clear terms and honest communication',
            icon: ShieldCheck,
            iconClassName: 'bg-brand-green',
        },
        {
            title: 'Fair Use',
            description: 'Supporting a safe and productive platform',
            icon: Users,
            iconClassName: 'bg-brand-primary',
        },
        {
            title: 'Data Protection',
            description: 'Your information is handled responsibly',
            icon: Lock,
            iconClassName: 'bg-violet-600',
        },
        {
            title: 'Long-Term Partnership',
            description: 'Building trusted relationships with our clients',
            icon: Handshake,
            iconClassName: 'bg-orange-500',
        },
    ] satisfies TermsCommitmentItem[],
} as const;
