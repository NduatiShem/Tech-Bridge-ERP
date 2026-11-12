import { FOOTER_CONTACT } from '@/data/footer';
import { SUPPORT_CHANNELS } from '@/data/faqs-support';
import { cn } from '@/lib/utils';
import { ArrowRight, CalendarDays, Mail, MessageCircle, Phone, ShieldCheck } from 'lucide-react';
import { Link } from '@inertiajs/react';
import type { ReactNode } from 'react';

const phoneTel = FOOTER_CONTACT.phone.replace(/\s/g, '');
const mailto = FOOTER_CONTACT.email.toLowerCase();

function ChannelCard({
    title,
    description,
    icon: Icon,
    iconClassName,
    children,
}: {
    title: string;
    description: string;
    icon: typeof Phone;
    iconClassName: string;
    children?: ReactNode;
}) {
    return (
        <div className="h-full rounded-xl border border-slate-100 bg-white p-3 shadow-sm sm:p-3.5">
            <span className={cn('flex h-9 w-9 shrink-0 items-center justify-center rounded-full', iconClassName)}>
                <Icon className="h-4 w-4 text-white" strokeWidth={2.25} aria-hidden />
            </span>
            <p className="text-brand-navy mt-2 text-xs font-bold sm:text-[13px]">{title}</p>
            <p className="text-muted-foreground mt-0.5 text-[11px] leading-snug sm:text-xs">{description}</p>
            {children ? <div className="mt-1.5 text-xs sm:text-sm">{children}</div> : null}
        </div>
    );
}

export default function SupportSidebar() {
    return (
        <aside className="space-y-4" aria-labelledby="support-sidebar-heading">
            <div>
                <h2 id="support-sidebar-heading" className="text-brand-navy text-base font-bold sm:text-lg">
                    {SUPPORT_CHANNELS.heading}
                </h2>
                <p className="text-muted-foreground mt-1 text-xs leading-relaxed sm:text-sm">{SUPPORT_CHANNELS.subtitle}</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
                <ChannelCard
                    title={SUPPORT_CHANNELS.call.title}
                    description={SUPPORT_CHANNELS.call.description}
                    icon={Phone}
                    iconClassName="bg-green-600"
                >
                    <a href={`tel:${phoneTel}`} className="text-brand-navy text-xs font-semibold hover:text-brand-primary sm:text-sm">
                        {FOOTER_CONTACT.phone}
                    </a>
                    <p className="text-muted-foreground mt-0.5 text-[10px] sm:text-xs">{FOOTER_CONTACT.hours}</p>
                </ChannelCard>

                <ChannelCard
                    title={SUPPORT_CHANNELS.email.title}
                    description={SUPPORT_CHANNELS.email.description}
                    icon={Mail}
                    iconClassName="bg-blue-600"
                >
                    <a href={`mailto:${mailto}`} className="text-brand-primary text-xs font-semibold break-all hover:underline sm:text-sm">
                        {FOOTER_CONTACT.email}
                    </a>
                </ChannelCard>

                <ChannelCard
                    title={SUPPORT_CHANNELS.chat.title}
                    description={SUPPORT_CHANNELS.chat.description}
                    icon={MessageCircle}
                    iconClassName="bg-purple-600"
                >
                    <p className="text-muted-foreground text-[10px] leading-snug sm:text-xs">{SUPPORT_CHANNELS.chat.note}</p>
                </ChannelCard>

                <ChannelCard
                    title={SUPPORT_CHANNELS.demo.title}
                    description={SUPPORT_CHANNELS.demo.description}
                    icon={CalendarDays}
                    iconClassName="bg-orange-500"
                >
                    <Link
                        href={route('book-demo')}
                        className="text-brand-primary inline-flex items-center gap-1 text-xs font-semibold hover:underline sm:text-sm"
                    >
                        {SUPPORT_CHANNELS.demo.linkLabel}
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                    </Link>
                </ChannelCard>
            </div>

            <div className="flex gap-2.5 rounded-xl border border-emerald-100 bg-emerald-50/90 px-3 py-3 sm:px-3.5 sm:py-3.5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-600">
                    <ShieldCheck className="h-4 w-4 text-white" strokeWidth={2.25} aria-hidden />
                </span>
                <div className="min-w-0">
                    <p className="text-brand-navy text-xs font-bold sm:text-sm">{SUPPORT_CHANNELS.commitmentHeading}</p>
                    <p className="text-muted-foreground mt-0.5 text-[11px] leading-relaxed sm:text-xs">
                        {SUPPORT_CHANNELS.commitment}
                    </p>
                </div>
            </div>
        </aside>
    );
}
