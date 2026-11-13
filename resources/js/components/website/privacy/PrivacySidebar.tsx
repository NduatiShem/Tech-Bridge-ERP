import RevealOnView from '@/components/website/motion/RevealOnView';
import { FOOTER_CONTACT } from '@/data/footer';
import {
    PRIVACY_CLARIFICATION,
    PRIVACY_HIGHLIGHTS,
    PRIVACY_PROMO,
} from '@/data/privacy-policy';
import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { Check, Lock, Mail, MapPin, Phone } from 'lucide-react';

const phoneTel = FOOTER_CONTACT.phone.replace(/\s/g, '');
const mailto = FOOTER_CONTACT.email.toLowerCase();

const CONTACT_ROW_HOVER =
    'rounded-lg transition-colors duration-200 ease-out hover:bg-slate-50/90 motion-reduce:transition-none';

const SIDEBAR_BLOCK_STAGGER_MS = 70;

export default function PrivacySidebar() {
    return (
        <aside className="space-y-4" aria-labelledby="privacy-sidebar-heading">
            <h2 id="privacy-sidebar-heading" className="sr-only">
                Privacy resources and contact
            </h2>

            <RevealOnView delayMs={0} variant="fade-up">
                <div className="rounded-xl border border-emerald-100 bg-emerald-50/40 p-3.5 shadow-sm sm:p-4">
                    <div className="flex items-center gap-2">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-green text-white">
                            <Lock className="h-4 w-4" strokeWidth={2.25} aria-hidden />
                        </span>
                        <p className="text-brand-navy text-sm font-bold sm:text-[15px]">{PRIVACY_HIGHLIGHTS.heading}</p>
                    </div>
                    <ul className="mt-3 space-y-2">
                        {PRIVACY_HIGHLIGHTS.items.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-xs leading-snug text-slate-700 sm:text-[13px]">
                                <Check className="text-brand-green mt-0.5 h-4 w-4 shrink-0" strokeWidth={2.5} aria-hidden />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </RevealOnView>

            <RevealOnView delayMs={SIDEBAR_BLOCK_STAGGER_MS} variant="fade-up">
                <div className="relative overflow-hidden rounded-xl shadow-md">
                    <img
                        src={PRIVACY_PROMO.image}
                        alt={PRIVACY_PROMO.imageAlt}
                        className="h-36 w-full object-cover object-[center_38%] sm:h-40"
                        loading="lazy"
                        decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/45 to-transparent" />
                    <p className="absolute inset-x-0 bottom-0 px-4 pb-4 text-base font-bold text-white sm:text-lg">
                        {PRIVACY_PROMO.title}
                    </p>
                </div>
            </RevealOnView>

            <RevealOnView delayMs={SIDEBAR_BLOCK_STAGGER_MS * 2} variant="fade-up">
                <div className="rounded-xl border border-slate-200/90 bg-white p-3.5 shadow-[0_3px_14px_rgba(30,64,120,0.06)] sm:p-4">
                    <h3 className="text-brand-navy text-base font-bold sm:text-lg">{PRIVACY_CLARIFICATION.heading}</h3>
                    <p className="text-muted-foreground mt-1 text-xs leading-relaxed sm:text-sm">{PRIVACY_CLARIFICATION.subtitle}</p>

                    <ul className="mt-4 divide-y divide-slate-100">
                        <li>
                            <a
                                href={`mailto:${mailto}`}
                                className={cn(
                                    'group -mx-1 flex items-center gap-3 px-1 py-3',
                                    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary',
                                    CONTACT_ROW_HOVER,
                                )}
                            >
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-primary text-white">
                                    <Mail className="h-4 w-4" strokeWidth={2.25} aria-hidden />
                                </span>
                                <span className="min-w-0">
                                    <span className="text-brand-navy block text-xs font-bold sm:text-sm">Email Us</span>
                                    <span className="text-brand-primary mt-0.5 block text-xs font-semibold break-all sm:text-sm">
                                        {FOOTER_CONTACT.email}
                                    </span>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a
                                href={`tel:${phoneTel}`}
                                className={cn(
                                    'group -mx-1 flex items-center gap-3 px-1 py-3',
                                    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green',
                                    CONTACT_ROW_HOVER,
                                )}
                            >
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-green text-white">
                                    <Phone className="h-4 w-4" strokeWidth={2.25} aria-hidden />
                                </span>
                                <span className="min-w-0">
                                    <span className="text-brand-navy block text-xs font-bold sm:text-sm">Call Us</span>
                                    <span className="text-brand-navy mt-0.5 block text-xs font-semibold sm:text-sm">
                                        {FOOTER_CONTACT.phone}
                                    </span>
                                    <span className="text-muted-foreground mt-0.5 block text-[11px] sm:text-xs">{FOOTER_CONTACT.hours}</span>
                                </span>
                            </a>
                        </li>
                        <li>
                            <Link
                                href={route('contact')}
                                className={cn(
                                    'group -mx-1 flex items-center gap-3 px-1 py-3',
                                    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600',
                                    CONTACT_ROW_HOVER,
                                )}
                            >
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-600 text-white">
                                    <MapPin className="h-4 w-4" strokeWidth={2.25} aria-hidden />
                                </span>
                                <span className="min-w-0">
                                    <span className="text-brand-navy block text-xs font-bold sm:text-sm">Visit Us</span>
                                    <span className="text-muted-foreground mt-0.5 block text-xs leading-snug sm:text-sm">
                                        {FOOTER_CONTACT.location}
                                    </span>
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </RevealOnView>
        </aside>
    );
}
