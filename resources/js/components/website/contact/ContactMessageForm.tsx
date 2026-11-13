import PrimaryButton from '@/components/website/PrimaryButton';
import { CONTACT_FORM } from '@/data/contact';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import type { FormEvent } from 'react';
import { useId, useState } from 'react';

type FormState = {
    fullName: string;
    companyName: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
};

const INITIAL: FormState = {
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    subject: CONTACT_FORM.subjectOptions[0],
    message: '',
};

function RequiredMark() {
    return (
        <span className="text-red-500" aria-hidden>
            {' '}
            *
        </span>
    );
}

export default function ContactMessageForm() {
    const [form, setForm] = useState<FormState>(INITIAL);
    const [notice, setNotice] = useState<string | null>(null);
    const noticeId = useId();

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setNotice(CONTACT_FORM.unavailableNotice);
    }

    const fieldClass =
        'w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 shadow-sm placeholder:text-slate-400 focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-brand-primary';

    const messageLength = form.message.length;
    const messageMax = CONTACT_FORM.messageMaxLength;

    return (
        <div
            id="contact-form"
            className="scroll-mt-24 rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_4px_24px_rgba(15,23,42,0.06)] sm:p-5 lg:p-6"
        >
            <h2 className="text-brand-navy text-lg font-bold tracking-tight sm:text-xl">{CONTACT_FORM.title}</h2>
            <p className="text-muted-foreground mt-1.5 text-sm">{CONTACT_FORM.subtitle}</p>

            <form className="mt-4 space-y-3.5 sm:mt-5" onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5">
                    <div>
                        <label htmlFor="contact-full-name" className="text-brand-navy mb-1 block text-xs font-semibold">
                            Full Name
                            <RequiredMark />
                        </label>
                        <input
                            id="contact-full-name"
                            name="fullName"
                            type="text"
                            autoComplete="name"
                            required
                            value={form.fullName}
                            onChange={(e) => setForm((prev) => ({ ...prev, fullName: e.target.value }))}
                            className={fieldClass}
                        />
                    </div>
                    <div>
                        <label htmlFor="contact-company" className="text-brand-navy mb-1 block text-xs font-semibold">
                            Company Name
                        </label>
                        <input
                            id="contact-company"
                            name="companyName"
                            type="text"
                            autoComplete="organization"
                            value={form.companyName}
                            onChange={(e) => setForm((prev) => ({ ...prev, companyName: e.target.value }))}
                            className={fieldClass}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5">
                    <div>
                        <label htmlFor="contact-email" className="text-brand-navy mb-1 block text-xs font-semibold">
                            Email Address
                            <RequiredMark />
                        </label>
                        <input
                            id="contact-email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            value={form.email}
                            onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                            className={fieldClass}
                        />
                    </div>
                    <div>
                        <label htmlFor="contact-phone" className="text-brand-navy mb-1 block text-xs font-semibold">
                            Phone Number
                        </label>
                        <input
                            id="contact-phone"
                            name="phone"
                            type="tel"
                            autoComplete="tel"
                            value={form.phone}
                            onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
                            className={fieldClass}
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="contact-subject" className="text-brand-navy mb-1 block text-xs font-semibold">
                        Subject
                    </label>
                    <select
                        id="contact-subject"
                        name="subject"
                        value={form.subject}
                        onChange={(e) => setForm((prev) => ({ ...prev, subject: e.target.value }))}
                        className={cn(fieldClass, 'pr-9')}
                    >
                        {CONTACT_FORM.subjectOptions.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <div className="mb-1 flex items-center justify-between gap-2">
                        <label htmlFor="contact-message" className="text-brand-navy text-xs font-semibold">
                            Message
                            <RequiredMark />
                        </label>
                        <span className="text-muted-foreground text-[11px]" aria-live="polite">
                            {messageLength}/{messageMax}
                        </span>
                    </div>
                    <textarea
                        id="contact-message"
                        name="message"
                        rows={5}
                        required
                        maxLength={messageMax}
                        value={form.message}
                        onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                        className={cn(fieldClass, 'min-h-[7.5rem] resize-y')}
                    />
                </div>

                {notice ? (
                    <p id={noticeId} className="rounded-lg border border-amber-200/80 bg-amber-50 px-3 py-2 text-sm text-amber-950" role="status">
                        {notice}
                    </p>
                ) : null}

                <PrimaryButton
                    type="submit"
                    className={cn(
                        'group flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold',
                        'transition-[transform,box-shadow,colors] duration-200 ease-out',
                        'motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_8px_22px_rgba(38,53,139,0.28)]',
                        'motion-reduce:hover:transform-none motion-reduce:transition-none',
                    )}
                >
                    {CONTACT_FORM.submitLabel}
                    <ArrowRight
                        className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1 motion-reduce:transform-none"
                        aria-hidden
                    />
                </PrimaryButton>
            </form>
        </div>
    );
}
