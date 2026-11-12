import Container from '@/components/website/Container';
import { LOGO_HEADER } from '@/data/brand';
import MobileNavigation from '@/components/website/MobileNavigation';
import PrimaryButton from '@/components/website/PrimaryButton';
import { ERP_MODULES } from '@/data/modules';
import { MAIN_NAV_LINKS } from '@/data/navigation';
import { isActivePath, navHref } from '@/lib/navigation';
import { cn } from '@/lib/utils';
import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react';
import { Link, usePage } from '@inertiajs/react';
import { ChevronDown, Menu as MenuIcon, Search } from 'lucide-react';
import { Fragment, useEffect, useState } from 'react';

export default function Header() {
    const { url } = usePage();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 4);
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const modulesActive = isActivePath(url, '/modules');

    return (
        <>
            <header
                className={cn(
                    'sticky top-0 z-40 border-b border-transparent bg-white/95 backdrop-blur transition-shadow duration-200',
                    scrolled && 'border-border shadow-sm',
                )}
            >
                <Container>
                    <div className="flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]">
                        <Link href={route('home')} className="shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary">
                            <img src={LOGO_HEADER} alt="TechBridge Solutions" className="h-9 w-auto sm:h-10" width={180} height={40} />
                        </Link>

                        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
                            {MAIN_NAV_LINKS.slice(0, 1).map((link) => {
                                const href = navHref(link);
                                const active = isActivePath(url, href);
                                return (
                                    <NavLink key={link.label} href={href} active={active}>
                                        {link.label}
                                    </NavLink>
                                );
                            })}

                            <ModulesDropdown active={modulesActive} />

                            {MAIN_NAV_LINKS.slice(1).map((link) => {
                                const href = navHref(link);
                                const active = isActivePath(url, href);
                                return (
                                    <NavLink key={link.label} href={href} active={active}>
                                        {link.label}
                                    </NavLink>
                                );
                            })}
                        </nav>

                        <div className="flex items-center gap-2">
                            <Link
                                href={route('resources')}
                                className="text-brand-navy hidden h-10 w-10 items-center justify-center rounded-lg border border-transparent hover:bg-brand-surface lg:inline-flex"
                                aria-label="Search resources"
                            >
                                <Search className="h-5 w-5" aria-hidden />
                            </Link>
                            <PrimaryButton href={route('book-demo')} className="hidden sm:inline-flex">
                                Book a Demo
                            </PrimaryButton>
                            <button
                                type="button"
                                className="text-brand-navy inline-flex items-center justify-center rounded-lg border border-border p-2 lg:hidden"
                                onClick={() => setMobileOpen(true)}
                                aria-expanded={mobileOpen}
                                aria-controls="mobile-navigation"
                            >
                                <span className="sr-only">Open menu</span>
                                <MenuIcon className="h-5 w-5" aria-hidden />
                            </button>
                        </div>
                    </div>
                </Container>
            </header>

            <MobileNavigation open={mobileOpen} onClose={() => setMobileOpen(false)} />
        </>
    );
}

function NavLink({ href, active, children }: { href: string; active: boolean; children: string }) {
    return (
        <Link
            href={href}
            className={cn(
                'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                active ? 'bg-brand-surface text-brand-primary' : 'text-brand-navy hover:bg-brand-surface/80',
            )}
        >
            {children}
        </Link>
    );
}

function ModulesDropdown({ active }: { active: boolean }) {
    return (
        <Popover className="relative">
            <PopoverButton
                className={cn(
                    'inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary',
                    active ? 'bg-brand-surface text-brand-primary' : 'text-brand-navy hover:bg-brand-surface/80',
                )}
            >
                Modules
                <ChevronDown className="h-4 w-4" aria-hidden />
            </PopoverButton>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-150"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
            >
                <PopoverPanel className="absolute left-0 z-50 mt-2 w-[min(100vw-2rem,22rem)] rounded-xl border border-border bg-white p-3 shadow-lg sm:w-[28rem]">
                    <div className="mb-2 px-2">
                        <Link href={route('modules.index')} className="text-brand-primary text-sm font-semibold hover:underline">
                            View all modules
                        </Link>
                    </div>
                    <ul className="grid gap-1 sm:grid-cols-2">
                        {ERP_MODULES.map((module) => (
                            <li key={module.slug}>
                                <Link
                                    href={route('modules.show', { slug: module.slug })}
                                    className="hover:bg-brand-surface block rounded-lg px-3 py-2 text-sm text-brand-navy transition-colors"
                                >
                                    <span className="font-medium">{module.title}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </PopoverPanel>
            </Transition>
        </Popover>
    );
}
