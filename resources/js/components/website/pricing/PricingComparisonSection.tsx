import Container from '@/components/website/Container';
import RevealOnView from '@/components/website/motion/RevealOnView';
import { PRICING_COMPARISON, PRICING_COMPARISON_SECTION } from '@/data/pricing';
import { cn } from '@/lib/utils';
import { Check, Minus } from 'lucide-react';

const PLAN_HEADERS = [
    { label: 'Starter', key: 'starter' },
    { label: 'Professional', key: 'professional' },
    { label: 'Business', key: 'business' },
    { label: 'Enterprise', key: 'enterprise' },
] as const;

type PlanKey = (typeof PLAN_HEADERS)[number]['key'];

function ComparisonCell({ value }: { value: string }) {
    if (value === 'yes') {
        return (
            <span
                className="bg-brand-green inline-flex h-[18px] w-[18px] items-center justify-center rounded-full"
                role="img"
                aria-label="Included"
            >
                <Check className="h-3 w-3 text-white" strokeWidth={3} aria-hidden />
            </span>
        );
    }

    if (value === 'no') {
        return (
            <span className="inline-flex items-center justify-center text-gray-400" role="img" aria-label="Not included">
                <Minus className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden />
            </span>
        );
    }

    return <span className="text-brand-navy text-[13px] font-normal">{value}</span>;
}

export default function PricingComparisonSection() {
    return (
        <section className="bg-white py-12 sm:py-14 lg:py-16">
            <Container>
                <div className="mb-7 text-center">
                    <h2 className="text-brand-navy text-[26px] font-bold tracking-tight sm:text-[30px]">
                        {PRICING_COMPARISON_SECTION.title}
                    </h2>
                    <p className="text-muted-foreground mx-auto mt-1 max-w-2xl text-sm leading-relaxed">
                        {PRICING_COMPARISON_SECTION.description}
                    </p>
                </div>

                <RevealOnView
                    variant="fade-up"
                    className="w-full overflow-x-auto rounded-xl border border-[#E5EDF7] bg-white shadow-[0_4px_20px_rgba(15,23,42,0.035)]"
                >
                    <table className="w-full min-w-[760px] border-separate border-spacing-0 text-[13px]">
                        <thead>
                            <tr className="bg-[#F0F6FD]">
                                <th scope="col" className="text-brand-navy w-[25%] px-4 py-3 text-left font-semibold">
                                    Features
                                </th>
                                {PLAN_HEADERS.map((plan) => {
                                    const isBusiness = plan.key === 'business';

                                    return (
                                        <th
                                            key={plan.key}
                                            scope="col"
                                            className={cn(
                                                'w-[18.75%] px-3 py-3 text-center font-semibold',
                                                isBusiness ? 'bg-brand-green text-white' : 'text-brand-navy',
                                            )}
                                        >
                                            {plan.label}
                                        </th>
                                    );
                                })}
                            </tr>
                        </thead>

                        <tbody>
                            {PRICING_COMPARISON.map((row, index) => {
                                const isLast = index === PRICING_COMPARISON.length - 1;

                                return (
                                    <tr
                                        key={row.feature}
                                        className="motion-reduce:transition-none transition-colors duration-150 hover:bg-[#F5F9FD]/90"
                                    >
                                        <th
                                            scope="row"
                                            className={cn(
                                                'text-brand-navy px-4 py-2.5 text-left font-normal',
                                                !isLast && 'border-b border-[#E8EEF7]',
                                            )}
                                        >
                                            {row.feature}
                                        </th>

                                        {PLAN_HEADERS.map((plan) => {
                                            const isBusiness = plan.key === 'business';

                                            return (
                                                <td
                                                    key={plan.key}
                                                    className={cn(
                                                        'px-3 py-2.5 text-center align-middle',
                                                        !isLast && 'border-b border-[#E8EEF7]',
                                                        isBusiness && 'border-x border-brand-green/25 bg-green-50/60',
                                                        isBusiness && isLast && 'border-b border-brand-green/40',
                                                    )}
                                                >
                                                    <ComparisonCell value={row[plan.key as PlanKey]} />
                                                </td>
                                            );
                                        })}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </RevealOnView>
            </Container>
        </section>
    );
}
