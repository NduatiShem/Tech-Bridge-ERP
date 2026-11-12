import Container from '@/components/website/Container';
import { FAQ_CATEGORIES, FAQ_CATEGORY_STYLES } from '@/data/faqs-support';
import { cn } from '@/lib/utils';

type FaqsCategoryGridProps = {
    onSelectCategory: (categoryId: string) => void;
};

export default function FaqsCategoryGrid({ onSelectCategory }: FaqsCategoryGridProps) {
    return (
        <section className="border-y border-slate-100 bg-white py-8 sm:py-10 lg:py-11">
            <Container>
                <div className="text-center">
                    <h2 className="text-brand-navy text-xl font-bold tracking-tight sm:text-2xl lg:text-[1.75rem] lg:leading-tight">
                        Browse FAQs by Category
                    </h2>
                    <p className="text-muted-foreground mx-auto mt-2 max-w-2xl text-xs leading-relaxed sm:text-sm lg:mt-2.5 lg:text-base">
                        Choose a category to find relevant questions and answers.
                    </p>
                </div>

                <ul className="mt-5 grid grid-cols-4 gap-2 min-[375px]:gap-2.5 sm:mt-6 sm:gap-4 lg:mt-7 lg:grid-cols-8 lg:gap-5">
                    {FAQ_CATEGORIES.map((category) => {
                        const Icon = category.icon;
                        const styles = FAQ_CATEGORY_STYLES[category.accent];

                        return (
                            <li key={category.id} className="min-w-0">
                                <button
                                    type="button"
                                    onClick={() => onSelectCategory(category.id)}
                                    className={cn(
                                        'group flex h-full w-full min-w-0 flex-col items-center justify-start',
                                        'min-h-[6.875rem] rounded-2xl border border-slate-200/90 bg-white',
                                        'px-1 py-2.5 text-center min-[375px]:px-1.5 sm:min-h-[8.25rem] sm:px-2.5 sm:py-4',
                                        'lg:min-h-[10.5rem] lg:px-3 lg:py-5',
                                        'shadow-[0_3px_12px_rgba(30,64,120,0.06)]',
                                        'transition-[transform,box-shadow,border-color] duration-200',
                                        'hover:border-brand-primary/25 hover:shadow-[0_8px_20px_rgba(30,64,120,0.1)]',
                                        'hover:-translate-y-0.5 lg:hover:-translate-y-1',
                                        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary',
                                        'motion-reduce:transform-none motion-reduce:transition-none',
                                    )}
                                >
                                    <span
                                        className={cn(
                                            'flex h-8 w-8 shrink-0 items-center justify-center rounded-full',
                                            'min-[375px]:h-9 min-[375px]:w-9 sm:h-10 sm:w-10 lg:h-16 lg:w-16',
                                            styles.iconBg,
                                        )}
                                    >
                                        <Icon
                                            className="h-4 w-4 text-white min-[375px]:h-[1.125rem] min-[375px]:w-[1.125rem] sm:h-5 sm:w-5 lg:h-7 lg:w-7"
                                            strokeWidth={2.25}
                                            aria-hidden
                                        />
                                    </span>

                                    <span className="text-brand-navy mt-2 line-clamp-3 w-full text-[9px] leading-snug font-bold min-[375px]:text-[10px] sm:mt-2.5 sm:min-h-[2.25rem] sm:text-[11px] lg:mt-3 lg:min-h-[2.5rem] lg:text-sm">
                                        {category.label}
                                    </span>

                                    <span className="text-muted-foreground mt-auto pt-1 text-[8px] leading-tight min-[375px]:text-[9px] sm:text-[10px] lg:text-xs">
                                        {category.questionCount} questions
                                    </span>
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </Container>
        </section>
    );
}
