import { CONTACT_ACCENT_BG, CONTACT_ALTERNATIVES, type ContactAccent } from '@/data/contact';
import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';

function resolveHref(href: string): string {
    if (href.startsWith('#')) {
        return href;
    }
    if (href === '/book-demo') {
        return route('book-demo');
    }
    if (href === '/faqs') {
        return route('faqs');
    }
    if (href === '/request-quote') {
        return route('request-quote');
    }
    return href;
}

const CARD_SURFACE: Record<ContactAccent, string> = {
    green: 'border-emerald-100/90 bg-[#F3FBF5]',
    blue: 'border-sky-100/90 bg-[#F2F7FC]',
    purple: 'border-violet-100/90 bg-[#F6F3FB]',
    orange: 'border-orange-100/90 bg-[#FFF8F3]',
};

const OUTLINE_BTN: Record<ContactAccent, string> = {
    green: 'border-brand-green text-brand-green hover:bg-brand-green/5 focus-visible:outline-brand-green',
    blue: 'border-brand-primary text-brand-primary hover:bg-brand-primary/5 focus-visible:outline-brand-primary',
    purple: 'border-violet-600 text-violet-700 hover:bg-violet-50 focus-visible:outline-violet-600',
    orange: 'border-orange-500 text-orange-600 hover:bg-orange-50 focus-visible:outline-orange-500',
};

const CTA_HOVER_MOTION =
    'group transition-[color,background-color,box-shadow,transform] duration-200 ease-out motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-md motion-reduce:transition-none motion-reduce:hover:transform-none';

export default function ContactAlternativesBlock({ className }: { className?: string }) {
    return (
        <div className={cn('mt-8 border-t border-slate-100 pt-8', className)}>
            <h2 className="text-brand-navy text-lg font-bold tracking-tight sm:text-xl">{CONTACT_ALTERNATIVES.heading}</h2>

            <ul className="mt-4 grid list-none grid-cols-2 gap-2.5 sm:mt-5 sm:gap-3.5">
                {CONTACT_ALTERNATIVES.items.map((item) => {
                    const Icon = item.icon;

                    return (
                        <li
                            key={item.title}
                            className={cn(
                                'flex min-h-full min-w-0 flex-col rounded-xl border p-2.5 shadow-sm sm:p-4',
                                CARD_SURFACE[item.accent],
                            )}
                        >
                            <span
                                className={cn(
                                    'inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/90 text-white shadow-sm',
                                    CONTACT_ACCENT_BG[item.accent],
                                )}
                            >
                                <Icon className="h-[1.125rem] w-[1.125rem]" strokeWidth={2.25} aria-hidden />
                            </span>
                            <h3 className="text-brand-navy mt-3 text-sm font-bold sm:text-[15px]">{item.title}</h3>
                            <p className="text-muted-foreground mt-1.5 flex-1 text-xs leading-relaxed sm:text-sm">
                                {item.description}
                            </p>
                            <Link
                                href={resolveHref(item.href)}
                                className={cn(
                                    'mt-3.5 inline-flex w-full items-center justify-center gap-2 rounded-lg border bg-white px-3 py-2 text-xs font-semibold sm:text-sm',
                                    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
                                    CTA_HOVER_MOTION,
                                    OUTLINE_BTN[item.accent],
                                )}
                            >
                                {item.ctaLabel}
                                <ArrowRight
                                    className="h-4 w-4 shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-1 motion-reduce:transform-none"
                                    aria-hidden
                                />
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
