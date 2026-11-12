import PrimaryButton from '@/components/website/PrimaryButton';
import { FOOTER_CONTACT } from '@/data/footer';
import { SUPPORT_FORM } from '@/data/faqs-support';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import type { FormEvent } from 'react';
import { useId, useState } from 'react';

type FormState = {
    fullName: string;
    email: string;
    subject: string;
    message: string;
};

const INITIAL: FormState = {
    fullName: '',
    email: '',
    subject: SUPPORT_FORM.subjectOptions[0],
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

export default function SupportContactForm() {
    const [form, setForm] = useState<FormState>(INITIAL);
    const [notice, setNotice] = useState<string | null>(null);
    const noticeId = useId();
    const mailto = FOOTER_CONTACT.email.toLowerCase();

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setNotice(SUPPORT_FORM.unavailableNotice);
    }

    const fieldClass =
        'w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 shadow-sm placeholder:text-slate-400 focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-brand-primary';

    return (
        <div className="rounded-xl border border-slate-100 bg-white p-3.5 shadow-[0_2px_12px_rgba(15,23,42,0.05)] sm:p-4">
            <h3 className="text-brand-navy text-base font-bold">{SUPPORT_FORM.title}</h3>
            <p className="text-muted-foreground mt-1 text-xs sm:text-sm">{SUPPORT_FORM.subtitle}</p>

            <form className="mt-3.5 space-y-3" onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div>
                        <label htmlFor="support-full-name" className="text-brand-navy mb-1 block text-xs font-semibold">
                            Full Name
                            <RequiredMark />
                        </label>
                        <input
                            id="support-full-name"
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
                        <label htmlFor="support-email" className="text-brand-navy mb-1 block text-xs font-semibold">
                            Email Address
                            <RequiredMark />
                        </label>
                        <input
                            id="support-email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            value={form.email}
                            onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                            className={fieldClass}
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="support-subject" className="text-brand-navy mb-1 block text-xs font-semibold">
                        Subject
                    </label>
                    <select
                        id="support-subject"
                        name="subject"
                        value={form.subject}
                        onChange={(e) => setForm((prev) => ({ ...prev, subject: e.target.value }))}
                        className={cn(fieldClass, 'pr-9')}
                    >
                        {SUPPORT_FORM.subjectOptions.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="support-message" className="text-brand-navy mb-1 block text-xs font-semibold">
                        Message
                        <RequiredMark />
                    </label>
                    <textarea
                        id="support-message"
                        name="message"
                        rows={4}
                        required
                        value={form.message}
                        onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                        className={cn(fieldClass, 'min-h-[5.5rem] resize-y')}
                    />
                </div>

                {notice ? (
                    <p id={noticeId} role="status" className="text-sm leading-relaxed text-amber-800">
                        {notice}{' '}
                        <a href={`mailto:${mailto}`} className="text-brand-primary font-semibold underline">
                            {FOOTER_CONTACT.email}
                        </a>
                    </p>
                ) : null}

                <PrimaryButton type="submit" className="w-full gap-2">
                    {SUPPORT_FORM.submitLabel}
                    <ArrowRight className="h-4 w-4" aria-hidden />
                </PrimaryButton>
            </form>

            <p className="text-muted-foreground sr-only">
                Prefer email? Contact {FOOTER_CONTACT.email}
            </p>
        </div>
    );
}
