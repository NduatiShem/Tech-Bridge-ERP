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
                className="bg-brand-green inline-flex h-4 w-4 items-center justify-center rounded-full sm:h-[18px] sm:w-[18px]"
                role="img"
                aria-label="Included"
            >
                <Check
                    className="h-2.5 w-2.5 text-white sm:h-3 sm:w-3"
                    strokeWidth={2.75}
                    aria-hidden
                />
            </span>
        );
    }

    if (value === 'no') {
        return (
            <span className="inline-flex items-center justify-center text-gray-400" role="img" aria-label="Not included">
                <Minus className="h-3 w-3 stroke-[1.5] sm:h-3.5 sm:w-3.5" aria-hidden />
            </span>
        );
    }

    return (
        <span className="text-brand-navy block text-[9px] leading-tight font-normal break-words sm:text-[10px] md:text-xs lg:text-[13px]">
            {value}
        </span>
    );
}

export default function PricingComparisonSection() {
    return (
        <section className="overflow-x-hidden bg-white py-10 sm:py-12 lg:py-16">
            <Container>
                <div className="mb-5 text-center sm:mb-7">
                    <h2 className="text-brand-navy text-[1.35rem] font-bold tracking-tight sm:text-[30px]">
                        {PRICING_COMPARISON_SECTION.title}
                    </h2>
                    <p className="text-muted-foreground mx-auto mt-1.5 max-w-2xl text-xs leading-snug sm:text-sm sm:leading-relaxed">
                        {PRICING_COMPARISON_SECTION.description}
                    </p>
                </div>

                <RevealOnView
                    variant="fade-up"
                    className="w-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
                >
                    <table className="w-full table-fixed border-collapse text-[9px] leading-tight sm:text-[10px] md:text-xs lg:text-sm">
                        <colgroup>
                            <col className="w-[26%]" />
                            <col className="w-[18.5%]" />
                            <col className="w-[18.5%]" />
                            <col className="w-[18.5%]" />
                            <col className="w-[18.5%]" />
                        </colgroup>
                        <thead>
                            <tr>
                                <th
                                    scope="col"
                                    className="text-brand-navy border-b border-gray-200 bg-[#F0F6FD] px-1 py-2 text-left font-semibold sm:px-3 sm:py-3 lg:px-4"
                                >
                                    Features
                                </th>
                                {PLAN_HEADERS.map((plan) => {
                                    const isBusiness = plan.key === 'business';

                                    return (
                                        <th
                                            key={plan.key}
                                            scope="col"
                                            className={cn(
                                                'border-b px-0.5 py-2 text-center font-semibold sm:px-3 sm:py-3 lg:px-4',
                                                isBusiness
                                                    ? 'bg-brand-green rounded-t-md border-x border-brand-green text-white'
                                                    : 'text-brand-navy border-gray-200 bg-[#F0F6FD]',
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
                                                'text-brand-navy border-r border-gray-200/90 px-1 py-1.5 text-left text-[9px] leading-tight font-normal break-words sm:px-3 sm:py-2.5 sm:text-[10px] md:text-xs lg:px-4 lg:py-2.5 lg:text-sm',
                                                !isLast && 'border-b border-gray-200/90',
                                            )}
                                        >
                                            {row.feature}
                                        </th>

                                        {PLAN_HEADERS.map((plan, planIndex) => {
                                            const isBusiness = plan.key === 'business';
                                            const isLastPlan = planIndex === PLAN_HEADERS.length - 1;

                                            return (
                                                <td
                                                    key={plan.key}
                                                    className={cn(
                                                        'px-0.5 py-1.5 text-center align-middle sm:px-3 sm:py-2.5 lg:px-4 lg:py-4',
                                                        !isLast && 'border-b border-gray-200/90',
                                                        !isBusiness && !isLastPlan && 'border-r border-gray-200/80',
                                                        isBusiness &&
                                                            'border-brand-green/70 bg-[#EEF9F0] border-x',
                                                        isBusiness && isLast && 'border-b border-brand-green/80',
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
