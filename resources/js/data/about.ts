import type { LucideIcon } from 'lucide-react';
import {
    BarChart3,
    Eye,
    Gem,
    Handshake,
    Headphones,
    Lightbulb,
    Puzzle,
    Target,
    Users,
    UsersRound,
    Wrench,
} from 'lucide-react';

/** About Us page — copy from approved comp; TODO: verify stats and regional claims before production. */

export type AboutAccent = 'blue' | 'green' | 'purple' | 'orange';

export const ABOUT_HERO = {
    eyebrow: 'ABOUT TECHBRIDGE',
    titleLine1: 'Bridging Businesses with',
    titleAccent: 'Technology.',
    description:
        'TechBridge Solutions LLC provides modern ERP solutions to help businesses manage their people, processes, and operations efficiently and securely.',
    heroBackgroundImage: '/images/marketing/pricing/hero-background.jpg',
    heroPhotograph: '/images/marketing/about/hero-office.jpg',
    heroPhotographAlt:
        'TechBridge Solutions reception area with wall logo, modern seating, and open office beyond',
    floatingCardLines: ['Modern Solutions', 'for a Smarter', 'Tomorrow.'] as const,
    exploreModulesLabel: 'Explore Our Modules',
} as const;

export type AboutHeroPill = {
    title: string;
    accent: AboutAccent;
};

export const ABOUT_HERO_PILLS: AboutHeroPill[] = [
    { title: 'People Empowered', accent: 'blue' },
    { title: 'Operations Simplified', accent: 'green' },
    { title: 'Businesses Transformed', accent: 'purple' },
];

export const ABOUT_MVV = {
    heading: 'Our Mission, Vision and Values',
    description:
        'We build ERP software that connects teams, data, and workflows — so growing organizations can run with clarity and confidence.',
    mission: {
        title: 'Our Mission',
        body: 'To empower businesses with innovative and reliable ERP solutions that streamline operations, improve efficiency and drive sustainable growth.',
        accent: 'blue' as const,
    },
    vision: {
        title: 'Our Vision',
        body: 'To be a leading provider of business management solutions in Africa and beyond, recognized for innovation, customer success and operational excellence.',
        accent: 'green' as const,
    },
    values: {
        title: 'Our Values',
        items: [
            'Customer success first',
            'Innovation and continuous improvement',
            'Integrity and transparency',
            'Reliability and accountability',
            'People and teamwork',
        ],
        accent: 'purple' as const,
    },
};

export type AboutStat = {
    value: string;
    label: string;
};

/** Approved comp figures — TODO: verify before production. */
export const ABOUT_STATS: AboutStat[] = [
    { value: '100+', label: 'Businesses Trust Us' },
    { value: '10+', label: 'Industries Served' },
    { value: '9', label: 'Integrated Modules' },
    { value: '99.9%', label: 'System Reliability' },
];

export const ABOUT_STORY = {
    heading: 'Our Story',
    subheading: 'A Passion for Solving Real Business Challenges',
    paragraphs: [
        'TechBridge began with a simple observation: many growing businesses juggle disconnected tools, spreadsheets, and manual handoffs that slow teams down and hide the truth in the numbers.',
        'We set out to bridge that gap — bringing finance, HR, inventory, procurement, sales, and operations into one modular ERP platform teams can adopt at their own pace.',
        'Today we partner with organizations that want practical software, clear implementation paths, and support that stays with them after go-live.',
    ],
    image: '/images/marketing/about/story-team.jpg',
    imageAlt:
        'Four TechBridge colleagues reviewing a laptop together in a bright, modern office',
    ctaLabel: 'Our Journey',
    ctaHref: '#our-journey',
};

export type AboutJourneyMilestone = {
    year: string;
    title: string;
    description: string;
    accent: AboutAccent;
};

/** Timeline copy from approved comp — TODO: verify dates and client-count claims before production. */
export const ABOUT_JOURNEY = {
    heading: 'Our Journey',
    description: 'Key milestones in our growth and evolution.',
    items: [
        {
            year: '2020',
            title: 'Company Founded',
            description: 'Started with a vision to bridge businesses with technology.',
            accent: 'green',
        },
        {
            year: '2021',
            title: 'First ERP Release',
            description: 'Launched our initial ERP modules for SMEs.',
            accent: 'blue',
        },
        {
            year: '2022',
            title: 'Industry Expansion',
            description:
                'Expanded to multiple industries including manufacturing, distribution, and retail.',
            accent: 'purple',
        },
        {
            year: '2023',
            title: 'Growing Client Base',
            description: 'Reached 100+ businesses using TechBridge ERP. TODO: verify',
            accent: 'orange',
        },
        {
            year: '2024',
            title: 'Enhanced Platform',
            description: 'Introduced new modules and advanced reporting capabilities.',
            accent: 'blue',
        },
        {
            year: '2025',
            title: 'Continued Innovation',
            description: 'Focused on AI insights, mobile access, and greater scalability.',
            accent: 'green',
        },
    ] satisfies AboutJourneyMilestone[],
};

export type AboutWhyChooseItem = {
    title: string;
    description: string;
    accent: AboutAccent;
    icon: LucideIcon;
};

export const ABOUT_WHY_CHOOSE = {
    heading: 'Why Choose TechBridge?',
    description: 'A complete ERP platform, proven delivery, and people who know your workflows.',
    items: [
        {
            title: 'Industry Experience',
            description: 'Solutions shaped by real finance, HR, operations, and commercial workflows.',
            accent: 'green',
            icon: UsersRound,
        },
        {
            title: 'Complete Solution',
            description: 'Nine integrated modules you can deploy together or phase in over time.',
            accent: 'blue',
            icon: Puzzle,
        },
        {
            title: 'Proven Results',
            description: 'Structured reporting and shared data that help leaders act on facts, not guesswork.',
            accent: 'purple',
            icon: BarChart3,
        },
        {
            title: 'Dedicated Support',
            description: 'Guidance from discovery through training, go-live, and ongoing customer care.',
            accent: 'orange',
            icon: Headphones,
        },
    ] satisfies AboutWhyChooseItem[],
};

export type AboutLeadershipCard = {
    title: string;
    description: string;
    icon: LucideIcon;
};

export const ABOUT_LEADERSHIP = {
    heading: 'Our Leadership',
    description: 'A dedicated team with the expertise and vision to drive your success.',
    cards: [
        {
            title: 'Experienced Team',
            description: 'Specialists across ERP delivery, solution design, and customer success.',
            icon: Users,
        },
        {
            title: 'Customer Focused',
            description: 'Roadmaps and configurations aligned to how your organization actually works.',
            icon: Lightbulb,
        },
        {
            title: 'Continuous Innovation',
            description: 'Ongoing improvements to modules, security, and reporting capabilities.',
            icon: Wrench,
        },
        {
            title: 'Long-Term Partnership',
            description: 'Relationships built on transparency, accountability, and shared outcomes.',
            icon: Handshake,
        },
    ] satisfies AboutLeadershipCard[],
};

export const ABOUT_BOTTOM_CTA = {
    title: "Let's Build a Smarter, More Efficient Business Together",
    description: 'See how TechBridge ERP fits your teams, modules, and growth plans.',
} as const;

export const ABOUT_MVV_ICONS = {
    mission: Target,
    vision: Eye,
    values: Gem,
} as const;

export const ABOUT_ACCENT_BG: Record<AboutAccent, string> = {
    blue: 'bg-brand-primary',
    green: 'bg-brand-green',
    purple: 'bg-violet-600',
    orange: 'bg-orange-500',
};
