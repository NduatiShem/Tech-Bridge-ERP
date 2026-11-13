import ButtonWithArrow from '@/components/website/ButtonWithArrow';
import Container from '@/components/website/Container';
import ContactAlternativesBlock from '@/components/website/contact/ContactAlternativesBlock';
import ContactMessageForm from '@/components/website/contact/ContactMessageForm';
import RevealOnView from '@/components/website/motion/RevealOnView';
import { CONTACT_INFO_HEADING, CONTACT_LOCATION } from '@/data/contact';
import { FOOTER_CONTACT } from '@/data/footer';
import { cn } from '@/lib/utils';
import { Globe, Mail, MapPin, Phone } from 'lucide-react';
import type { ReactNode } from 'react';

const phoneTel = FOOTER_CONTACT.phone.replace(/\s/g, '');
const mailto = FOOTER_CONTACT.email.toLowerCase();
const websiteHost = mailto.split('@')[1] ?? 'techbridgeonline.com';

/** Matches `ContactMessageForm` panel styling. */
const CONTACT_PANEL_CLASS =
    'rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_4px_24px_rgba(15,23,42,0.06)] sm:p-5 lg:p-6';

type InfoRowProps = {
    icon: typeof Phone;
    iconBg: string;
    label: string;
    children: ReactNode;
};

function InfoRow({ icon: Icon, iconBg, label, children }: InfoRowProps) {
    return (
        <li className="flex gap-3 sm:gap-4">
            <span className={cn('flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white sm:h-12 sm:w-12', iconBg)}>
                <Icon className="h-5 w-5" strokeWidth={2.25} aria-hidden />
            </span>
            <div className="min-w-0 pt-0.5">
                <p className="text-brand-navy text-sm font-bold">{label}</p>
                <div className="text-muted-foreground mt-1 text-sm leading-relaxed">{children}</div>
            </div>
        </li>
    );
}

function ContactLocationBlock() {
    const { lat, lng } = FOOTER_CONTACT.coordinates;
    const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${lng - 0.012}%2C${lat - 0.012}%2C${lng + 0.012}%2C${lat + 0.012}&layer=mapnik&marker=${lat}%2C${lng}`;

    return (
        <div className="mt-8 border-t border-slate-100 pt-8">
            <h2 className="text-brand-navy text-lg font-bold tracking-tight">{CONTACT_LOCATION.heading}</h2>

            <div className="mt-4 overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm">
                <img
                    src={CONTACT_LOCATION.officePhotograph}
                    alt={CONTACT_LOCATION.officePhotographAlt}
                    className="aspect-[16/10] w-full object-cover"
                    loading="lazy"
                    decoding="async"
                />
                <div className="flex flex-col gap-3 border-t border-slate-100 p-3.5 sm:flex-row sm:items-center sm:justify-between sm:p-4">
                    <div className="min-w-0">
                        <p className="text-brand-navy text-sm font-semibold">TechBridge Solutions LLC</p>
                        <p className="text-muted-foreground mt-1 text-sm leading-snug">
                            {FOOTER_CONTACT.location}
                            <span className="mt-0.5 block">{FOOTER_CONTACT.postalAddress}</span>
                        </p>
                    </div>
                    <ButtonWithArrow
                        href={FOOTER_CONTACT.mapUrl}
                        nudgeArrowOnHover
                        className="shrink-0 self-start motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_8px_22px_rgba(38,53,139,0.28)] motion-reduce:hover:transform-none sm:self-center"
                    >
                        {CONTACT_LOCATION.directionsLabel}
                    </ButtonWithArrow>
                </div>
            </div>

            <div className="mt-3 overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
                <iframe
                    title={CONTACT_LOCATION.mapTitle}
                    src={mapSrc}
                    className="h-44 w-full border-0 sm:h-52"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </div>
    );
}

export default function ContactInfoSection() {
    return (
        <section className="border-t border-slate-100 bg-[#F8FBFF] py-10 sm:py-12 lg:py-14">
            <Container>
                <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-10 xl:gap-12">
                    <div className="min-w-0">
                        <RevealOnView>
                            <div className={CONTACT_PANEL_CLASS}>
                                <h2 className="text-brand-navy text-lg font-bold tracking-tight sm:text-xl">
                                    {CONTACT_INFO_HEADING}
                                </h2>
                                <ul className="mt-5 space-y-5 sm:mt-6 sm:space-y-6" role="list">
                                    <InfoRow icon={Phone} iconBg="bg-brand-green" label="Phone">
                                        <a href={`tel:${phoneTel}`} className="text-brand-primary font-medium hover:underline">
                                            {FOOTER_CONTACT.phone}
                                        </a>
                                        <span className="mt-0.5 block text-xs">{FOOTER_CONTACT.hours}</span>
                                    </InfoRow>
                                    <InfoRow icon={Mail} iconBg="bg-brand-primary" label="Email">
                                        <a href={`mailto:${mailto}`} className="text-brand-primary font-medium hover:underline">
                                            {FOOTER_CONTACT.email}
                                        </a>
                                    </InfoRow>
                                    <InfoRow icon={MapPin} iconBg="bg-orange-500" label="Address">
                                        <a
                                            href={FOOTER_CONTACT.mapUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-brand-primary transition"
                                        >
                                            {FOOTER_CONTACT.location}
                                        </a>
                                        <span className="mt-0.5 block">{FOOTER_CONTACT.postalAddress}</span>
                                        <span className="mt-0.5 block text-xs text-slate-500">{FOOTER_CONTACT.legalEntity}</span>
                                    </InfoRow>
                                    <InfoRow icon={Globe} iconBg="bg-violet-600" label="Website">
                                        <a
                                            href={`https://${websiteHost}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-brand-primary font-medium hover:underline"
                                        >
                                            {websiteHost}
                                        </a>
                                    </InfoRow>
                                </ul>
                            </div>
                        </RevealOnView>

                        <RevealOnView delayMs={60}>
                            <ContactLocationBlock />
                        </RevealOnView>
                    </div>

                    <RevealOnView as="div" className="flex min-w-0 flex-col gap-0" delayMs={40} variant="fade-up">
                        <ContactMessageForm />
                        <ContactAlternativesBlock />
                    </RevealOnView>
                </div>
            </Container>
        </section>
    );
}
