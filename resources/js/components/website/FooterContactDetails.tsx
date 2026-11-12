import { FOOTER_CONTACT } from '@/data/footer';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';

const phoneTel = FOOTER_CONTACT.phone.replace(/\s/g, '');
const mailto = FOOTER_CONTACT.email.toLowerCase();

type FooterContactDetailsProps = {
    itemClassName?: string;
    linkClassName?: string;
};

export default function FooterContactDetails({
    itemClassName = 'flex gap-3 text-sm text-white/75',
    linkClassName = 'transition hover:text-white',
}: FooterContactDetailsProps) {
    return (
        <>
            <li className={itemClassName}>
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" aria-hidden />
                <span>
                    <a
                        href={FOOTER_CONTACT.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={linkClassName}
                    >
                        {FOOTER_CONTACT.location}
                    </a>
                    <span className="mt-1 block">{FOOTER_CONTACT.postalAddress}</span>
                    <span className="mt-1 block text-xs text-white/55">{FOOTER_CONTACT.legalEntity}</span>
                </span>
            </li>
            <li className={itemClassName}>
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" aria-hidden />
                <a href={`mailto:${mailto}`} className={linkClassName}>
                    {FOOTER_CONTACT.email}
                </a>
            </li>
            <li className={itemClassName}>
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" aria-hidden />
                <a href={`tel:${phoneTel}`} className={linkClassName}>
                    {FOOTER_CONTACT.phone}
                </a>
            </li>
            <li className={itemClassName}>
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" aria-hidden />
                <span>{FOOTER_CONTACT.hours}</span>
            </li>
        </>
    );
}
