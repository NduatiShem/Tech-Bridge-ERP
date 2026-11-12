import Container from '@/components/website/Container';
import MobileFooter from '@/components/website/MobileFooter';
import { LOGO_FOOTER_DARK } from '@/data/brand';
import { FOOTER_BRAND, FOOTER_SOCIAL_LINKS } from '@/data/footer';
import { FOOTER_MODULE_LINKS, FOOTER_QUICK_LINKS, FOOTER_RESOURCES_LINKS } from '@/data/navigation';
import { navHref } from '@/lib/navigation';
import { Link } from '@inertiajs/react';
import FooterContactDetails from '@/components/website/FooterContactDetails';
import type { ReactNode } from 'react';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-brand-navy text-white">
            <div className="lg:hidden">
                <MobileFooter />
            </div>

            <div className="hidden lg:block">
                <Container className="py-14 lg:py-16">
                    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-8">
                        <div className="sm:col-span-2 lg:col-span-3 xl:col-span-1">
                            <Link href={route('home')} className="inline-block rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                                <img
                                    src={LOGO_FOOTER_DARK}
                                    alt="TechBridge Solutions LLC"
                                    className="h-auto w-full max-w-[13.5rem] sm:max-w-[15rem]"
                                    width={320}
                                    height={120}
                                    loading="lazy"
                                />
                            </Link>
                            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/75">{FOOTER_BRAND.description}</p>
                            <div className="mt-6 flex flex-wrap gap-2.5">
                                {FOOTER_SOCIAL_LINKS.map(({ label, icon: Icon, href }) =>
                                    href ? (
                                        <a
                                            key={label}
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/90 transition hover:bg-white/10 hover:text-white"
                                            aria-label={label}
                                        >
                                            <Icon className="h-4 w-4" aria-hidden />
                                        </a>
                                    ) : (
                                        <span
                                            key={label}
                                            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70"
                                            title={`${label} — TODO: verify URL`}
                                            aria-label={`${label} (link not yet configured)`}
                                        >
                                            <Icon className="h-4 w-4" aria-hidden />
                                        </span>
                                    ),
                                )}
                            </div>
                        </div>

                        <FooterColumn title="Quick Links">
                            {FOOTER_QUICK_LINKS.map((link) => (
                                <FooterLink key={link.label} href={navHref(link)} label={link.label} />
                            ))}
                        </FooterColumn>

                        <FooterColumn title="Our Modules">
                            {FOOTER_MODULE_LINKS.map((module) => (
                                <FooterLink key={module.slug} href={route('modules.show', { slug: module.slug })} label={module.label} />
                            ))}
                        </FooterColumn>

                        <FooterColumn title="Resources">
                            {FOOTER_RESOURCES_LINKS.map((link) => (
                                <FooterLink key={link.label} href={navHref(link)} label={link.label} />
                            ))}
                        </FooterColumn>

                        <div className="sm:col-span-2 lg:col-span-1">
                            <h2 className="text-sm font-bold tracking-wide text-white">Contact Us</h2>
                            <ul className="mt-4 space-y-4">
                                <FooterContactDetails
                                    itemClassName="flex gap-3 text-sm text-white/75"
                                    linkClassName="transition hover:text-white"
                                />
                            </ul>
                        </div>
                    </div>

                    <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
                        <p>© {year} TechBridge Solutions LLC. All rights reserved.</p>
                        <p className="text-white/70">{FOOTER_BRAND.tagline}</p>
                    </div>
                </Container>
            </div>
        </footer>
    );
}

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
    return (
        <div>
            <h2 className="text-sm font-bold tracking-wide text-white">{title}</h2>
            <ul className="mt-4 space-y-2.5">{children}</ul>
        </div>
    );
}

function FooterLink({ href, label }: { href: string; label: string }) {
    return (
        <li>
            <Link
                href={href}
                className="rounded-sm text-sm text-white/75 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
                {label}
            </Link>
        </li>
    );
}
