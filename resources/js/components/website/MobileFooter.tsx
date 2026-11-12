import { LOGO_FOOTER_DARK } from '@/data/brand';
import FooterContactDetails from '@/components/website/FooterContactDetails';
import { FOOTER_BRAND, FOOTER_SOCIAL_LINKS } from '@/data/footer';
import { FOOTER_MODULE_LINKS, FOOTER_QUICK_LINKS, FOOTER_RESOURCES_LINKS } from '@/data/navigation';
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion';
import { navHref } from '@/lib/navigation';
import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { ChevronDown } from 'lucide-react';
import { useCallback, useId, useState } from 'react';

type AccordionSection = 'quick' | 'modules' | 'resources' | 'contact';

const ACCORDION_ITEMS: { id: AccordionSection; title: string }[] = [
    { id: 'quick', title: 'Quick Links' },
    { id: 'modules', title: 'Our Modules' },
    { id: 'resources', title: 'Resources' },
    { id: 'contact', title: 'Contact Us' },
];

export default function MobileFooter() {
    const year = new Date().getFullYear();
    const [openSection, setOpenSection] = useState<AccordionSection | null>(null);
    const reducedMotion = usePrefersReducedMotion();
    const baseId = useId();

    const toggleSection = useCallback((id: AccordionSection) => {
        setOpenSection((current) => (current === id ? null : id));
    }, []);

    return (
        <div className="relative overflow-x-hidden px-5 pt-10 pb-12 sm:px-6">
            <Link
                href={route('home')}
                className="inline-block rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
                <img
                    src={LOGO_FOOTER_DARK}
                    alt="TechBridge Solutions LLC"
                    className="h-auto w-full max-w-[12.75rem] sm:max-w-[13.25rem]"
                    width={320}
                    height={120}
                    loading="lazy"
                />
            </Link>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/75">{FOOTER_BRAND.description}</p>

            <div className="mt-5 flex flex-wrap gap-2.5">
                {FOOTER_SOCIAL_LINKS.map(({ label, icon: Icon, href }) =>
                    href ? (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#1e3254] text-white transition hover:bg-[#243a61] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                            aria-label={label}
                        >
                            <Icon className="h-4 w-4" aria-hidden />
                        </a>
                    ) : (
                        <span
                            key={label}
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#1e3254] text-white/70"
                            title={`${label} — TODO: verify URL`}
                            aria-label={`${label} (link not yet configured)`}
                        >
                            <Icon className="h-4 w-4" aria-hidden />
                        </span>
                    ),
                )}
            </div>

            <nav className="mt-6 border-t border-white/10" aria-label="Footer navigation">
                {ACCORDION_ITEMS.map(({ id, title }) => {
                    const isOpen = openSection === id;
                    const panelId = `${baseId}-${id}`;

                    return (
                        <div key={id} className="border-b border-white/10">
                            <button
                                type="button"
                                id={`${baseId}-label-${id}`}
                                className="flex min-h-12 w-full items-center justify-between gap-3 py-4 text-left font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white"
                                aria-expanded={isOpen}
                                aria-controls={panelId}
                                onClick={() => toggleSection(id)}
                            >
                                <span>{title}</span>
                                <ChevronDown
                                    className={cn(
                                        'h-5 w-5 shrink-0 text-white/80',
                                        !reducedMotion && 'transition-transform duration-200 ease-out',
                                        isOpen && 'rotate-180',
                                    )}
                                    aria-hidden
                                />
                            </button>
                            <div
                                id={panelId}
                                role="region"
                                aria-labelledby={`${baseId}-label-${id}`}
                                aria-hidden={!isOpen}
                                className={cn(
                                    'grid overflow-hidden',
                                    reducedMotion ? 'duration-0' : 'transition-[grid-template-rows] duration-200 ease-out',
                                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                                )}
                            >
                                <div className="min-h-0 overflow-hidden">
                                    {isOpen ? (
                                    <ul className="space-y-3 pb-4 pt-0">
                                        {id === 'quick' &&
                                            FOOTER_QUICK_LINKS.map((link) => (
                                                <li key={link.label}>
                                                    <Link
                                                        href={navHref(link)}
                                                        className="text-sm text-white/75 transition-colors hover:text-white"
                                                    >
                                                        {link.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        {id === 'modules' &&
                                            FOOTER_MODULE_LINKS.map((module) => (
                                                <li key={module.slug}>
                                                    <Link
                                                        href={route('modules.show', { slug: module.slug })}
                                                        className="text-sm text-white/75 transition-colors hover:text-white"
                                                    >
                                                        {module.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        {id === 'resources' &&
                                            FOOTER_RESOURCES_LINKS.map((link) => (
                                                <li key={link.label}>
                                                    <Link
                                                        href={navHref(link)}
                                                        className="text-sm text-white/75 transition-colors hover:text-white"
                                                    >
                                                        {link.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        {id === 'contact' ? (
                                            <FooterContactDetails linkClassName="hover:text-white" />
                                        ) : null}
                                    </ul>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </nav>

            <div className="mt-7 border-t border-white/10 pt-6 text-[0.8125rem] leading-relaxed text-white/60">
                <p>© {year} TechBridge Solutions LLC. All rights reserved.</p>
                <p className="mt-2 text-white/70">{FOOTER_BRAND.tagline}</p>
            </div>

            <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-5 overflow-hidden" aria-hidden>
                <svg
                    className="h-full w-full text-brand-primary/25"
                    viewBox="0 0 400 24"
                    preserveAspectRatio="none"
                    role="presentation"
                >
                    <path
                        fill="currentColor"
                        d="M0,12 C80,24 160,0 240,12 C320,24 360,8 400,14 L400,24 L0,24 Z"
                    />
                </svg>
            </div>
        </div>
    );
}
