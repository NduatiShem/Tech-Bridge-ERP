import type { LucideIcon } from 'lucide-react';
import { Building2, Cpu, Eye, FileCheck, Shield, User, Users } from 'lucide-react';

/**
 * Privacy Policy — marketing layout copy.
 * TODO: verify — legal review required before production publication.
 */

export const PRIVACY_HERO = {
    eyebrow: 'LEGAL',
    titleBefore: 'Privacy',
    titleAccent: 'Policy',
    description:
        'This Privacy Policy explains how TechBridge Solutions LLC collects, uses, shares, and protects information when you visit our websites, request demos, or use TechBridge ERP services.',
    lastUpdated: 'October 15, 2026',
    heroBackgroundImage: '/images/marketing/pricing/hero-background.jpg',
    heroPhotograph: '/images/marketing/terms/hero-photograph.jpg',
    heroPhotographAlt:
        'Professional at a laptop with illustrative privacy and security icons — TODO: export approved Privacy hero asset',
    floatingCardLines: ['Secure Data.', 'Stronger Businesses.'] as const,
} as const;

export type PrivacyCollectCategory = {
    title: string;
    description: string;
    icon: LucideIcon;
    iconClassName: string;
    surfaceClassName: string;
};

export type PrivacyBlock =
    | { type: 'paragraph'; text: string }
    | { type: 'bullets'; items: string[] }
    | { type: 'checks'; items: string[] }
    | { type: 'collect-categories'; items: PrivacyCollectCategory[] };

export type PrivacySection = {
    id: string;
    number: number;
    title: string;
    teaser: string;
    body: PrivacyBlock[];
    defaultOpen?: boolean;
};

export const PRIVACY_ON_PAGE_LABEL = 'On This Page';

const COLLECT_CATEGORIES: PrivacyCollectCategory[] = [
    {
        title: 'Personal Information',
        description: 'Name, email, phone, job title, and account credentials you provide to us.',
        icon: User,
        iconClassName: 'bg-brand-green',
        surfaceClassName: 'border-emerald-100/90 bg-[#F3FBF5]',
    },
    {
        title: 'Business Information',
        description: 'Company name, industry, billing details, and configuration data entered in the ERP.',
        icon: Building2,
        iconClassName: 'bg-brand-primary',
        surfaceClassName: 'border-sky-100/90 bg-[#F2F7FC]',
    },
    {
        title: 'Technical Information',
        description: 'IP address, device type, browser, logs, cookies, and usage analytics.',
        icon: Cpu,
        iconClassName: 'bg-violet-600',
        surfaceClassName: 'border-violet-100/90 bg-[#F6F3FB]',
    },
];

export const PRIVACY_SECTIONS: PrivacySection[] = [
    {
        id: 'introduction',
        number: 1,
        title: 'Introduction',
        teaser: 'Who this policy applies to and how we approach privacy.',
        body: [
            {
                type: 'paragraph',
                text: 'TechBridge Solutions LLC ("TechBridge", "we", "us", or "our") respects your privacy. This Privacy Policy describes our practices for personal and business information collected through our websites, sales and support channels, and cloud ERP services.',
            },
            {
                type: 'paragraph',
                text: 'This policy should be read together with our Terms of Service. If you do not agree with this policy, please discontinue use of our services and contact us with any questions.',
            },
        ],
    },
    {
        id: 'information-we-collect',
        number: 2,
        title: 'Information We Collect',
        teaser: 'Categories of data we may collect from you and your organization.',
        defaultOpen: true,
        body: [
            {
                type: 'paragraph',
                text: 'We collect information that you provide directly, that is generated when you use our services, and that we receive from authorized integrations or service providers.',
            },
            { type: 'collect-categories', items: COLLECT_CATEGORIES },
        ],
    },
    {
        id: 'how-we-use',
        number: 3,
        title: 'How We Use Your Information',
        teaser: 'Purposes for processing the data we collect.',
        defaultOpen: true,
        body: [
            {
                type: 'paragraph',
                text: 'We use information to deliver and improve TechBridge ERP, respond to enquiries, provide customer support, and meet legal obligations.',
            },
            {
                type: 'checks',
                items: [
                    'Provide, maintain, and secure the services you request',
                    'Communicate about demos, quotes, onboarding, and support',
                    'Personalize product guidance and training resources',
                    'Monitor performance, troubleshoot, and prevent abuse or fraud',
                    'Comply with law, enforce agreements, and protect our rights',
                ],
            },
        ],
    },
    {
        id: 'legal-basis',
        number: 4,
        title: 'Legal Basis for Processing',
        teaser: 'Why we are permitted to use your information.',
        body: [
            {
                type: 'paragraph',
                text: 'Where applicable privacy laws require a legal basis, we rely on one or more of the following, depending on context and region.',
            },
            {
                type: 'checks',
                items: [
                    'Performance of a contract or steps taken before entering a contract',
                    'Legitimate interests in operating, securing, and improving our services',
                    'Consent, where required for marketing or optional cookies',
                    'Legal obligations, including tax, audit, and regulatory requirements',
                ],
            },
        ],
    },
    {
        id: 'sharing',
        number: 5,
        title: 'Information Sharing and Disclosure',
        teaser: 'When we share data and with whom.',
        body: [
            {
                type: 'paragraph',
                text: 'We do not sell your personal information. We may share information with trusted providers who assist us in hosting, analytics, communications, and professional services, subject to appropriate safeguards.',
            },
            {
                type: 'bullets',
                items: [
                    'Infrastructure, security, and support vendors under confidentiality obligations',
                    'Professional advisers where reasonably necessary',
                    'Authorities when required by law or to protect rights and safety',
                    'A successor entity in connection with a merger, acquisition, or asset sale',
                ],
            },
        ],
    },
    {
        id: 'retention',
        number: 6,
        title: 'Data Retention',
        teaser: 'How long we keep information.',
        body: [
            {
                type: 'paragraph',
                text: 'We retain information for as long as needed to provide services, fulfil the purposes described in this policy, comply with law, resolve disputes, and enforce agreements.',
            },
            {
                type: 'paragraph',
                text: 'Retention periods may vary by data type and customer agreement. Enterprise contracts may specify export and deletion schedules.',
            },
        ],
    },
    {
        id: 'security',
        number: 7,
        title: 'Security Measures',
        teaser: 'How we help protect your information.',
        body: [
            {
                type: 'paragraph',
                text: 'We implement administrative, technical, and organizational measures designed to protect information against unauthorized access, loss, or misuse. No online service can guarantee absolute security.',
            },
            {
                type: 'bullets',
                items: [
                    'Access controls and role-based permissions within the ERP',
                    'Encryption in transit for modern browser and API connections',
                    'Monitoring, logging, and incident response practices',
                    'Staff training on confidentiality and acceptable use',
                ],
            },
        ],
    },
    {
        id: 'your-rights',
        number: 8,
        title: 'Your Rights and Choices',
        teaser: 'Options you may have regarding your data.',
        body: [
            {
                type: 'paragraph',
                text: 'Depending on your location, you may have rights to access, correct, delete, restrict, or object to certain processing, and to withdraw consent where processing is consent-based.',
            },
            {
                type: 'paragraph',
                text: 'To exercise rights, contact us using the details on this page. We may need to verify your identity before fulfilling a request.',
            },
        ],
    },
    {
        id: 'cookies',
        number: 9,
        title: 'Cookies and Tracking',
        teaser: 'Cookies and similar technologies on our websites.',
        body: [
            {
                type: 'paragraph',
                text: 'We use cookies and similar technologies to operate our websites, remember preferences, measure traffic, and improve content. You can manage cookies through your browser settings.',
            },
            {
                type: 'paragraph',
                text: 'Where required, we will present choices for non-essential cookies before they are placed.',
            },
        ],
    },
    {
        id: 'international',
        number: 10,
        title: 'International Data Transfers',
        teaser: 'Processing across borders.',
        body: [
            {
                type: 'paragraph',
                text: 'TechBridge may process and store information in countries other than where you are located. When we transfer data internationally, we use appropriate safeguards as required by applicable law.',
            },
        ],
    },
    {
        id: 'children',
        number: 11,
        title: "Children's Privacy",
        teaser: 'Services are not directed to children.',
        body: [
            {
                type: 'paragraph',
                text: 'Our services are intended for business use and are not directed to children under the age required by local law. We do not knowingly collect personal information from children.',
            },
        ],
    },
    {
        id: 'third-party',
        number: 12,
        title: 'Third-Party Links and Services',
        teaser: 'Links and integrations outside TechBridge.',
        body: [
            {
                type: 'paragraph',
                text: 'Our websites and ERP may link to or integrate with third-party services. Their privacy practices are governed by their own policies, not this one.',
            },
        ],
    },
    {
        id: 'updates',
        number: 13,
        title: 'Changes to This Policy',
        teaser: 'How we communicate updates.',
        body: [
            {
                type: 'paragraph',
                text: 'We may update this Privacy Policy from time to time. Material changes will be reflected by updating the "Last updated" date on this page. Continued use after changes become effective constitutes acknowledgment of the updated policy.',
            },
        ],
    },
    {
        id: 'contact',
        number: 14,
        title: 'Contact Information',
        teaser: 'How to reach us about privacy.',
        body: [
            {
                type: 'paragraph',
                text: 'For privacy questions, data requests, or concerns about our practices, contact us via the Contact page or using the email and phone details in the sidebar on this page.',
            },
        ],
    },
];

export const PRIVACY_HIGHLIGHTS = {
    heading: 'Your Privacy Matters',
    items: [
        'We collect only what we need to deliver our services',
        'You can contact us about your data and privacy choices',
        'Security practices are designed to protect your information',
        'We do not sell personal information',
        'Policy updates are published with a clear last-revised date',
    ],
} as const;

export const PRIVACY_PROMO = {
    title: 'Secure Data. Stronger Businesses.',
    image: '/images/marketing/terms/promo-banner.jpg',
    imageAlt: 'Laptop in a bright office — illustrative privacy banner image',
} as const;

export const PRIVACY_CLARIFICATION = {
    heading: 'Have Questions?',
    subtitle: 'Reach our team for privacy enquiries, data requests, or enterprise agreements.',
} as const;

export type PrivacyCommitmentItem = {
    title: string;
    description: string;
    icon: LucideIcon;
    iconClassName: string;
};

export const PRIVACY_COMMITMENT = {
    heading: 'Our Commitment to Your Privacy',
    description: 'We design our products and policies to respect your data and build long-term trust with our customers.',
    items: [
        {
            title: 'Data Protection',
            description: 'Security-minded practices across our platform and operations.',
            icon: Shield,
            iconClassName: 'bg-brand-green',
        },
        {
            title: 'Transparency',
            description: 'Clear explanations of what we collect and why.',
            icon: Eye,
            iconClassName: 'bg-brand-primary',
        },
        {
            title: 'Your Control',
            description: 'Meaningful choices about your account and communication preferences.',
            icon: Users,
            iconClassName: 'bg-violet-600',
        },
        {
            title: 'Regulatory Compliance',
            description: 'Policies aligned with applicable privacy and data protection laws.',
            icon: FileCheck,
            iconClassName: 'bg-orange-500',
        },
    ] satisfies PrivacyCommitmentItem[],
} as const;
