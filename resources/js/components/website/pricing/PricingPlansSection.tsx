import Container from '@/components/website/Container';
import RevealOnView from '@/components/website/motion/RevealOnView';
import PricingPlanCard from '@/components/website/pricing/PricingPlanCard';
import { PRICING_PLANS, PRICING_PLANS_SECTION } from '@/data/pricing';

const CARD_STAGGER_MS = 90;

export default function PricingPlansSection() {
    return (
        <section id="plans" className="relative z-20 bg-brand-white py-14 sm:py-16 lg:py-[4.5rem]">
            <Container>
                <p className="text-brand-primary text-center text-xs font-bold tracking-[0.16em] uppercase">
                    {PRICING_PLANS_SECTION.eyebrow}
                </p>
                <h2 className="text-brand-navy mx-auto mt-3 max-w-3xl text-center text-[1.65rem] font-bold tracking-tight sm:text-3xl">
                    {PRICING_PLANS_SECTION.title}
                </h2>
                <p className="text-muted-foreground mx-auto mt-3 max-w-[40rem] text-center text-sm leading-relaxed sm:text-base">
                    {PRICING_PLANS_SECTION.description}
                </p>

                <ul className="mt-10 grid list-none gap-4 sm:mt-12 md:grid-cols-2 md:gap-5 lg:mt-14 lg:grid-cols-4 lg:items-stretch lg:gap-4 xl:gap-5">
                    {PRICING_PLANS.map((plan, index) => (
                        <li key={plan.id} className="flex min-h-0 flex-col pt-4">
                            <RevealOnView className="h-full" delayMs={index * CARD_STAGGER_MS}>
                                <PricingPlanCard plan={plan} />
                            </RevealOnView>
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    );
}
