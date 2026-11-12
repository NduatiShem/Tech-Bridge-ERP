/** Pricing page content — values from approved mockup; TODO: verify with business before production. */

export type PricingPlanId = 'starter' | 'professional' | 'business' | 'enterprise';

export type PricingPlanTheme = 'starter' | 'professional' | 'business' | 'enterprise';

export type PricingPlan = {
    id: PricingPlanId;
    name: string;
    price: string;
    priceSuffix?: string;
    /** Short line under plan name (comp). */
    description: string;
    /** Tinted panel copy below price (comp). */
    panelSummary: string;
    features: string[];
    theme: PricingPlanTheme;
    highlighted?: boolean;
    badge?: string;
    ctaLabel: string;
    ctaHref: 'book-demo' | 'request-quote' | 'contact';
};

export type PricingComparisonRow = {
    feature: string;
    starter: string;
    professional: string;
    business: string;
    enterprise: string;
};

export type PricingFaqItem = {
    question: string;
    /** Brief summary — always visible on the card (comp). */
    shortAnswer: string;
    /** Shown when the card is expanded. */
    fullAnswer: string;
};

export const PRICING_HERO = {
    eyebrow: 'Pricing & Plans',
    title: 'Flexible Plans for Businesses of',
    titleAccent: 'All Sizes.',
    description:
        'Choose a plan that fits your business needs. Get a powerful, modular ERP system with the flexibility to start small and scale as you grow.',
    /** Curved green/blue hero backdrop (comp) */
    heroBackgroundImage: '/images/marketing/pricing/hero-background.jpg',
    /** Approved landscape photograph (woman + tablet) */
    heroPhotograph: '/images/marketing/pricing/hero-photograph.jpg',
    heroPersonImageAlt: 'Professional holding a tablet while reviewing ERP plans',
    highlights: ['Modular pricing', 'No hidden fees', 'Scales with your growth', 'Dedicated support'],
};

export type PricingBenefitAccent = 'green' | 'blue' | 'purple' | 'orange';

export type PricingBenefit = {
    /** Single label — wraps to two lines naturally in the overlay bar (per comp). */
    title: string;
    accent: PricingBenefitAccent;
};

export const PRICING_PLANS_SECTION = {
    eyebrow: 'Our Plans',
    title: 'Simple, Transparent Pricing',
    description:
        'All plans include core features, regular updates and dedicated support. Choose the plan that works for you.',
};

export const PRICING_COMPARISON_SECTION = {
    title: 'Plan Comparison',
    description: 'Compare features across our plans to find the right fit for your business.',
};

export const PRICING_FAQ_SECTION = {
    title: 'Frequently Asked Questions',
    description: 'Find answers to common questions about our pricing and plans.',
};

export const PRICING_BOTTOM_CTA = {
    title: 'Ready to Find the Right Plan for Your Business?',
    description: 'Book a personalized demo and let our team recommend the best plan for your needs.',
};

/** Hero overlay feature bar — two-line labels per approved comp (no body copy). */
export const PRICING_BENEFITS: PricingBenefit[] = [
    { title: 'All Modules in One Platform', accent: 'green' },
    { title: 'Flexible & Scalable Plans', accent: 'blue' },
    { title: 'Expert Support & Training', accent: 'purple' },
    { title: 'Secure & Reliable Infrastructure', accent: 'orange' },
];

export const PRICING_PLANS: PricingPlan[] = [
    {
        id: 'starter',
        name: 'Starter',
        price: '$50',
        priceSuffix: 'per user / month',
        description: 'Perfect for small businesses getting started.',
        panelSummary: 'Essential tools to manage your core operations.',
        features: [
            'Up to 5 users',
            'Any 2 modules',
            'Standard support',
            'Free updates',
            'Cloud hosting',
        ],
        theme: 'starter',
        ctaLabel: 'Get Started',
        ctaHref: 'book-demo',
    },
    {
        id: 'professional',
        name: 'Professional',
        price: '$80',
        priceSuffix: 'per user / month',
        description: 'Ideal for growing businesses that need more control.',
        panelSummary: 'Advanced features for increased efficiency.',
        features: [
            'Up to 25 users',
            'Any 5 modules',
            'Advanced reporting',
            'Priority support',
            'Free updates',
            'Cloud hosting',
        ],
        theme: 'professional',
        ctaLabel: 'Get Started',
        ctaHref: 'book-demo',
    },
    {
        id: 'business',
        name: 'Business',
        price: '$120',
        priceSuffix: 'per user / month',
        description: 'Best for established businesses with multiple departments.',
        panelSummary: 'Complete business management solution.',
        features: [
            'Unlimited users',
            'All 9 modules',
            'Advanced reporting & BI',
            'Dedicated account manager',
            'Priority support',
            'Free updates',
            'Cloud hosting',
        ],
        theme: 'business',
        highlighted: true,
        badge: 'MOST POPULAR',
        ctaLabel: 'Get Started',
        ctaHref: 'book-demo',
    },
    {
        id: 'enterprise',
        name: 'Enterprise',
        price: 'Custom',
        priceSuffix: 'Contact us for a quote',
        description: 'For large organizations with custom requirements.',
        panelSummary: 'Tailored solution for complex needs.',
        theme: 'enterprise',
        features: [
            'Unlimited users',
            'All modules + custom features',
            'Custom integrations',
            'Dedicated support team',
            'SLA & uptime guarantee',
            'On-premise or cloud hosting',
            'Training & implementation',
        ],
        ctaLabel: 'Contact Sales',
        ctaHref: 'contact',
    },
];

export const PRICING_COMPARISON: PricingComparisonRow[] = [
    {
        feature: 'Number of Users',
        starter: 'Up to 5',
        professional: 'Up to 25',
        business: 'Unlimited',
        enterprise: 'Unlimited',
    },
    {
        feature: 'Modules Included',
        starter: 'Any 2 modules',
        professional: 'Any 5 modules',
        business: 'All 9 modules',
        enterprise: 'All 9 modules + custom',
    },
    {
        feature: 'Core Features',
        starter: 'yes',
        professional: 'yes',
        business: 'yes',
        enterprise: 'yes',
    },
    {
        feature: 'Advanced Reporting',
        starter: 'no',
        professional: 'yes',
        business: 'yes',
        enterprise: 'yes',
    },
    {
        feature: 'Business Intelligence (BI)',
        starter: 'no',
        professional: 'no',
        business: 'yes',
        enterprise: 'yes',
    },
    {
        feature: 'Custom Integrations',
        starter: 'no',
        professional: 'no',
        business: 'yes',
        enterprise: 'yes',
    },
    {
        feature: 'Dedicated Account Manager',
        starter: 'no',
        professional: 'no',
        business: 'yes',
        enterprise: 'yes',
    },
    {
        feature: 'Training & Onboarding',
        starter: 'Self-service',
        professional: 'Standard',
        business: 'Priority',
        enterprise: 'Dedicated',
    },
    {
        feature: 'Support',
        starter: 'Standard',
        professional: 'Priority',
        business: 'Priority',
        enterprise: 'Dedicated (SLA)',
    },
    {
        feature: 'Hosting Options',
        starter: 'Cloud',
        professional: 'Cloud',
        business: 'Cloud',
        enterprise: 'Cloud or On-premise',
    },
];

/** Featured pricing FAQs — copy per approved comp; verify commercial terms before production. */
export const PRICING_FAQS: PricingFaqItem[] = [
    {
        question: 'Can I start with a few modules and add more later?',
        shortAnswer: 'Yes. Start with the modules you need and expand as your business grows.',
        fullAnswer:
            'You can request additional modules as your business requirements change. Your administrator can coordinate with TechBridge to confirm availability, pricing adjustments, and activation arrangements.',
    },
    {
        question: 'Do you offer a free demo?',
        shortAnswer: 'Yes. You can book a free, no-obligation demo to see how TechBridge works.',
        fullAnswer:
            'Demos are tailored to your industry and the modules you care about. Our team walks you through workflows, answers questions, and helps you compare plans—without pressure to commit.',
    },
    {
        question: 'Is there a contract commitment?',
        shortAnswer: 'We offer flexible monthly and yearly billing options.',
        fullAnswer:
            'Terms vary by plan and region. Monthly options suit teams that want flexibility; annual agreements may include preferred rates. Contact us for current standard terms or to discuss arrangements for your organization.',
    },
    {
        question: 'Do you provide implementation and training?',
        shortAnswer: 'We provide implementation support, user training and documentation.',
        fullAnswer:
            'Every plan includes access to help resources and guides. Higher tiers add structured onboarding, role-based training sessions, and dedicated assistance during go-live so your team adopts the system confidently.',
    },
];
