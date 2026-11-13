import { FOOTER_CONTACT } from '@/data/footer';
import {
    REQUEST_QUOTE_ACCENT_BG,
    REQUEST_QUOTE_DIRECT,
    REQUEST_QUOTE_SIDEBAR_ICONS,
    REQUEST_QUOTE_WHY_ITEMS,
} from '@/data/request-quote';
import { cn } from '@/lib/utils';

export default function RequestQuoteSidebar() {
    const CallIcon = REQUEST_QUOTE_SIDEBAR_ICONS.call;
    const MailIcon = REQUEST_QUOTE_SIDEBAR_ICONS.email;
    const MapIcon = REQUEST_QUOTE_SIDEBAR_ICONS.visit;

    return (
        <div className="space-y-5 lg:space-y-6">
            <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_2px_12px_rgba(15,23,42,0.05)] sm:p-5">
                <h3 className="text-brand-navy text-base font-bold">Why Request a Quote?</h3>
                <ul className="mt-4 space-y-4">
                    {REQUEST_QUOTE_WHY_ITEMS.map((item) => {
                        const Icon = item.icon;
                        return (
                            <li key={item.title} className="flex gap-3">
                                <span
                                    className={cn(
                                        'flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white',
                                        REQUEST_QUOTE_ACCENT_BG[item.accent],
                                    )}
                                >
                                    <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
                                </span>
                                <div className="min-w-0">
                                    <p className="text-brand-navy text-sm font-bold">{item.title}</p>
                                    <p className="text-muted-foreground mt-0.5 text-xs leading-relaxed sm:text-sm">
                                        {item.description}
                                    </p>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_2px_12px_rgba(15,23,42,0.05)] sm:p-5">
                <h3 className="text-brand-navy text-base font-bold">{REQUEST_QUOTE_DIRECT.heading}</h3>
                <ul className="mt-4 space-y-4">
                    <li className="flex gap-3">
                        <span className="bg-brand-green flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white">
                            <CallIcon className="h-5 w-5" strokeWidth={2} aria-hidden />
                        </span>
                        <div>
                            <p className="text-brand-navy text-sm font-bold">{REQUEST_QUOTE_DIRECT.callLabel}</p>
                            <a href={`tel:${FOOTER_CONTACT.phone.replace(/\s/g, '')}`} className="text-brand-primary mt-0.5 text-sm font-medium hover:underline">
                                {FOOTER_CONTACT.phone}
                            </a>
                        </div>
                    </li>
                    <li className="flex gap-3">
                        <span className="bg-brand-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white">
                            <MailIcon className="h-5 w-5" strokeWidth={2} aria-hidden />
                        </span>
                        <div>
                            <p className="text-brand-navy text-sm font-bold">{REQUEST_QUOTE_DIRECT.emailLabel}</p>
                            <a href={`mailto:${FOOTER_CONTACT.email}`} className="text-brand-primary mt-0.5 text-sm font-medium hover:underline">
                                {FOOTER_CONTACT.email}
                            </a>
                        </div>
                    </li>
                    <li className="flex gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet-600 text-white">
                            <MapIcon className="h-5 w-5" strokeWidth={2} aria-hidden />
                        </span>
                        <div>
                            <p className="text-brand-navy text-sm font-bold">{REQUEST_QUOTE_DIRECT.visitLabel}</p>
                            <p className="text-muted-foreground mt-0.5 text-xs leading-relaxed sm:text-sm">{FOOTER_CONTACT.location}</p>
                            <a
                                href={FOOTER_CONTACT.mapUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-brand-primary mt-1 inline-block text-xs font-medium hover:underline"
                            >
                                Open in maps
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
