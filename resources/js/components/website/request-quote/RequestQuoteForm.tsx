import PrimaryButton from '@/components/website/PrimaryButton';
import {
    REQUEST_QUOTE_BUSINESS_SIZES,
    REQUEST_QUOTE_FORM,
    REQUEST_QUOTE_INDUSTRIES,
    REQUEST_QUOTE_MODULE_OPTIONS,
    REQUEST_QUOTE_SIDEBAR_ICONS,
} from '@/data/request-quote';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import type { FormEvent } from 'react';
import { useId, useState } from 'react';

type FormState = {
    fullName: string;
    companyName: string;
    email: string;
    phone: string;
    industry: string;
    businessSize: string;
    modules: string[];
    additional: string;
};

const INITIAL: FormState = {
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    industry: REQUEST_QUOTE_INDUSTRIES[0],
    businessSize: REQUEST_QUOTE_BUSINESS_SIZES[1],
    modules: [],
    additional: '',
};

const fieldClass =
    'w-full min-w-0 rounded-lg border border-slate-200 bg-white px-2.5 py-2 text-sm text-slate-800 shadow-sm placeholder:text-slate-400 focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-brand-primary sm:px-3 sm:py-2.5';

function RequiredMark() {
    return (
        <span className="text-red-500" aria-hidden>
            {' '}
            *
        </span>
    );
}

export default function RequestQuoteForm() {
    const [form, setForm] = useState<FormState>(INITIAL);
    const [notice, setNotice] = useState<string | null>(null);
    const noticeId = useId();
    const FormIcon = REQUEST_QUOTE_SIDEBAR_ICONS.form;

    function toggleModule(id: string) {
        setForm((prev) => ({
            ...prev,
            modules: prev.modules.includes(id) ? prev.modules.filter((m) => m !== id) : [...prev.modules, id],
        }));
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setNotice(REQUEST_QUOTE_FORM.unavailableNotice);
    }

    return (
        <div
            id="request-quote-form"
            className="rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_4px_24px_rgba(15,23,42,0.06)] sm:p-6 lg:p-7"
        >
            <div className="flex items-start gap-3">
                <span className="bg-brand-green flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white">
                    <FormIcon className="h-5 w-5" strokeWidth={2.25} aria-hidden />
                </span>
                <div className="min-w-0">
                    <h2 className="text-brand-navy text-lg font-bold sm:text-xl">{REQUEST_QUOTE_FORM.title}</h2>
                    <p className="text-muted-foreground mt-1 text-sm leading-relaxed">{REQUEST_QUOTE_FORM.subtitle}</p>
                </div>
            </div>

            <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-2 gap-x-3 gap-y-4 sm:gap-x-4">
                    <div>
                        <label htmlFor="quote-full-name" className="text-brand-navy mb-1 block text-xs font-semibold">
                            Full Name
                            <RequiredMark />
                        </label>
                        <input
                            id="quote-full-name"
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
                        <label htmlFor="quote-company" className="text-brand-navy mb-1 block text-xs font-semibold">
                            Company Name
                            <RequiredMark />
                        </label>
                        <input
                            id="quote-company"
                            name="companyName"
                            type="text"
                            autoComplete="organization"
                            required
                            value={form.companyName}
                            onChange={(e) => setForm((prev) => ({ ...prev, companyName: e.target.value }))}
                            className={fieldClass}
                        />
                    </div>
                    <div>
                        <label htmlFor="quote-email" className="text-brand-navy mb-1 block text-xs font-semibold">
                            Email Address
                            <RequiredMark />
                        </label>
                        <input
                            id="quote-email"
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
                        <label htmlFor="quote-phone" className="text-brand-navy mb-1 block text-xs font-semibold">
                            Phone Number
                            <RequiredMark />
                        </label>
                        <input
                            id="quote-phone"
                            name="phone"
                            type="tel"
                            autoComplete="tel"
                            required
                            placeholder="+971 58 000 0000"
                            value={form.phone}
                            onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
                            className={fieldClass}
                        />
                    </div>
                    <div>
                        <label htmlFor="quote-industry" className="text-brand-navy mb-1 block text-xs font-semibold">
                            Industry
                        </label>
                        <select
                            id="quote-industry"
                            name="industry"
                            value={form.industry}
                            onChange={(e) => setForm((prev) => ({ ...prev, industry: e.target.value }))}
                            className={cn(fieldClass, 'text-brand-navy')}
                        >
                            {REQUEST_QUOTE_INDUSTRIES.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="quote-size" className="text-brand-navy mb-1 block text-xs font-semibold">
                            Business Size
                        </label>
                        <select
                            id="quote-size"
                            name="businessSize"
                            value={form.businessSize}
                            onChange={(e) => setForm((prev) => ({ ...prev, businessSize: e.target.value }))}
                            className={cn(fieldClass, 'text-brand-navy')}
                        >
                            {REQUEST_QUOTE_BUSINESS_SIZES.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <fieldset>
                    <legend className="text-brand-navy text-sm font-bold">{REQUEST_QUOTE_FORM.modulesHeading}</legend>
                    <p className="text-muted-foreground mt-0.5 text-xs sm:text-sm">{REQUEST_QUOTE_FORM.modulesHint}</p>
                    <ul className="mt-3 grid grid-cols-2 gap-2 lg:grid-cols-3">
                        {REQUEST_QUOTE_MODULE_OPTIONS.map((option) => {
                            const checked = form.modules.includes(option.id);
                            return (
                                <li key={option.id}>
                                    <label
                                        className={cn(
                                            'flex cursor-pointer items-start gap-2 rounded-lg border px-3 py-2.5 text-sm transition-colors',
                                            checked
                                                ? 'border-brand-primary/40 bg-brand-surface text-brand-navy'
                                                : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300',
                                        )}
                                    >
                                        <input
                                            type="checkbox"
                                            className="mt-0.5 h-4 w-4 rounded border-slate-300 text-brand-primary focus-visible:outline-brand-primary"
                                            checked={checked}
                                            onChange={() => toggleModule(option.id)}
                                        />
                                        <span className="text-xs leading-snug sm:text-sm">{option.label}</span>
                                    </label>
                                </li>
                            );
                        })}
                    </ul>
                </fieldset>

                <div>
                    <label htmlFor="quote-additional" className="text-brand-navy mb-1 block text-xs font-semibold">
                        {REQUEST_QUOTE_FORM.additionalLabel}
                    </label>
                    <textarea
                        id="quote-additional"
                        name="additional"
                        rows={4}
                        value={form.additional}
                        onChange={(e) => setForm((prev) => ({ ...prev, additional: e.target.value }))}
                        className={cn(fieldClass, 'resize-y min-h-[6rem]')}
                        placeholder="Tell us about integrations, timelines, or specific workflows..."
                    />
                </div>

                {notice ? (
                    <p id={noticeId} role="status" className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-900">
                        {notice}
                    </p>
                ) : null}

                <PrimaryButton type="submit" className="w-full gap-2 sm:w-auto sm:min-w-[12rem]">
                    {REQUEST_QUOTE_FORM.submitLabel}
                    <ArrowRight className="h-4 w-4" aria-hidden />
                </PrimaryButton>
            </form>
        </div>
    );
}
