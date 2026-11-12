import PrimaryButton from '@/components/website/PrimaryButton';
import { LOGO_HEADER } from '@/data/brand';
import { ERP_MODULES } from '@/data/modules';
import { MAIN_NAV_LINKS } from '@/data/navigation';
import { isActivePath, navHref } from '@/lib/navigation';
import { cn } from '@/lib/utils';
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';
import { Link, usePage } from '@inertiajs/react';
import { ChevronDown, X } from 'lucide-react';
import { Fragment, useState } from 'react';

type MobileNavigationProps = {
    open: boolean;
    onClose: () => void;
};

export default function MobileNavigation({ open, onClose }: MobileNavigationProps) {
    const { url } = usePage();
    const [modulesOpen, setModulesOpen] = useState(false);

    const closeAndNavigate = () => {
        setModulesOpen(false);
        onClose();
    };

    return (
        <Transition show={open} as={Fragment}>
            <Dialog onClose={onClose} className="relative z-50 lg:hidden">
                <TransitionChild
                    as={Fragment}
                    enter="ease-out duration-200"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-brand-navy/40" aria-hidden="true" />
                </TransitionChild>

                <div className="fixed inset-0 flex justify-end">
                    <TransitionChild
                        as={Fragment}
                        enter="transform transition ease-out duration-200"
                        enterFrom="translate-x-full"
                        enterTo="translate-x-0"
                        leave="transform transition ease-in duration-150"
                        leaveFrom="translate-x-0"
                        leaveTo="translate-x-full"
                    >
                        <DialogPanel className="flex h-full w-full max-w-sm flex-col bg-white shadow-xl">
                            <div className="flex items-center justify-between border-b border-border px-4 py-4">
                                <img src={LOGO_HEADER} alt="TechBridge Solutions" className="h-8 w-auto" width={160} height={32} />
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="text-brand-navy rounded-md p-2 hover:bg-brand-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
                                >
                                    <span className="sr-only">Close menu</span>
                                    <X className="h-5 w-5" aria-hidden />
                                </button>
                            </div>

                            <nav className="flex-1 overflow-y-auto px-4 py-6" aria-label="Mobile">
                                <ul className="space-y-1">
                                    {MAIN_NAV_LINKS.map((link) => {
                                        const href = navHref(link);
                                        const active = isActivePath(url, href);
                                        return (
                                            <li key={link.label}>
                                                <Link
                                                    href={href}
                                                    onClick={closeAndNavigate}
                                                    className={cn(
                                                        'block rounded-lg px-3 py-2.5 text-base font-medium',
                                                        active ? 'bg-brand-surface text-brand-primary' : 'text-brand-navy hover:bg-brand-surface',
                                                    )}
                                                >
                                                    {link.label}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>

                                <div className="mt-4 border-t border-border pt-4">
                                    <button
                                        type="button"
                                        className="text-brand-navy flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-base font-medium hover:bg-brand-surface"
                                        aria-expanded={modulesOpen}
                                        onClick={() => setModulesOpen((value) => !value)}
                                    >
                                        Modules
                                        <ChevronDown className={cn('h-4 w-4 transition-transform', modulesOpen && 'rotate-180')} aria-hidden />
                                    </button>
                                    {modulesOpen ? (
                                        <ul className="mt-1 space-y-1 pl-2">
                                            <li>
                                                <Link
                                                    href={route('modules.index')}
                                                    onClick={closeAndNavigate}
                                                    className="text-muted-foreground block rounded-lg px-3 py-2 text-sm font-medium hover:bg-brand-surface hover:text-brand-primary"
                                                >
                                                    All Modules
                                                </Link>
                                            </li>
                                            {ERP_MODULES.map((module) => (
                                                <li key={module.slug}>
                                                    <Link
                                                        href={route('modules.show', { slug: module.slug })}
                                                        onClick={closeAndNavigate}
                                                        className="text-muted-foreground block rounded-lg px-3 py-2 text-sm hover:bg-brand-surface hover:text-brand-primary"
                                                    >
                                                        {module.title}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : null}
                                </div>
                            </nav>

                            <div className="border-t border-border p-4">
                                <PrimaryButton href={route('book-demo')} className="w-full" onClick={closeAndNavigate}>
                                    Book a Demo
                                </PrimaryButton>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </Dialog>
        </Transition>
    );
}
