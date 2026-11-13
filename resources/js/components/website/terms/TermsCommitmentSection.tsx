import Container from '@/components/website/Container';
import RevealOnView from '@/components/website/motion/RevealOnView';
import { TERMS_COMMITMENT } from '@/data/terms-of-service';
import { cn } from '@/lib/utils';

const COMMITMENT_CARD_STAGGER_MS = 60;

export default function TermsCommitmentSection() {
    return (
        <section className="bg-[#EFF7FF] py-10 sm:py-12 lg:py-14">
            <Container>
                <RevealOnView className="mx-auto max-w-3xl text-center">
                    <h2 className="text-brand-navy text-xl font-bold tracking-tight sm:text-2xl">{TERMS_COMMITMENT.heading}</h2>
                    <p className="text-brand-primary/75 mt-2 text-sm leading-relaxed sm:text-[15px]">
                        {TERMS_COMMITMENT.description}
                    </p>
                </RevealOnView>

                <ul className="mt-7 grid list-none gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4 lg:mt-9 lg:grid-cols-4 lg:gap-4">
                    {TERMS_COMMITMENT.items.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <li key={item.title}>
                                <RevealOnView
                                    delayMs={40 + index * COMMITMENT_CARD_STAGGER_MS}
                                    className={cn(
                                        'flex h-full items-start gap-3 rounded-2xl border border-white/90 bg-white px-4 py-4 shadow-[0_4px_18px_rgba(30,64,120,0.06)]',
                                        'sm:gap-3.5 sm:px-4 sm:py-4.5',
                                    )}
                                >
                                    <span
                                        className={cn(
                                            'flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white shadow-sm sm:h-12 sm:w-12',
                                            item.iconClassName,
                                        )}
                                    >
                                        <Icon className="h-5 w-5 sm:h-[1.35rem] sm:w-[1.35rem]" strokeWidth={2.15} aria-hidden />
                                    </span>
                                    <div className="min-w-0 pt-0.5">
                                        <h3 className="text-brand-navy text-sm font-bold leading-snug sm:text-[15px]">{item.title}</h3>
                                        <p className="text-brand-primary/70 mt-1 text-xs leading-relaxed sm:text-[13px]">
                                            {item.description}
                                        </p>
                                    </div>
                                </RevealOnView>
                            </li>
                        );
                    })}
                </ul>
            </Container>
        </section>
    );
}
