import { KNOWLEDGE_BASE } from '@/data/faqs-support';
import { cn } from '@/lib/utils';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Link } from '@inertiajs/react';

const TAG_STYLES = {
    green: 'bg-emerald-50 text-brand-green',
    blue: 'bg-blue-50 text-brand-primary',
    purple: 'bg-violet-50 text-violet-600',
} as const;

export default function KnowledgeBaseSection() {
    return (
        <section className="mt-4" aria-labelledby="knowledge-base-heading">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                    <div className="flex items-center gap-2.5">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet-500 sm:h-10 sm:w-10">
                            <BookOpen className="h-4 w-4 text-white sm:h-5 sm:w-5" strokeWidth={2.25} aria-hidden />
                        </span>
                        <h2 id="knowledge-base-heading" className="text-brand-navy text-base font-bold sm:text-lg">
                            {KNOWLEDGE_BASE.title}
                        </h2>
                    </div>
                    <p className="text-muted-foreground mt-1.5 pl-11 text-xs leading-relaxed sm:text-sm">{KNOWLEDGE_BASE.subtitle}</p>
                </div>
                <Link
                    href={route('resources')}
                    className={cn(
                        'text-brand-primary inline-flex shrink-0 items-center gap-1 text-sm font-semibold',
                        'hover:text-brand-primary/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary',
                    )}
                >
                    {KNOWLEDGE_BASE.viewAllLabel}
                    <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
            </div>

            <ul
                className={cn(
                    'mt-4 flex gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-3',
                    '[&::-webkit-scrollbar]:hidden',
                )}
            >
                {KNOWLEDGE_BASE.articles.map((article) => (
                    <li key={article.title} className="w-[min(78vw,16.5rem)] shrink-0 snap-start sm:w-auto sm:shrink">
                        <Link
                            href={route(article.hrefRoute)}
                            className={cn(
                                'group flex h-full flex-col overflow-hidden rounded-xl border border-slate-100 bg-white',
                                'shadow-[0_2px_12px_rgba(15,23,42,0.05)]',
                                'transition-shadow hover:shadow-[0_6px_18px_rgba(15,23,42,0.08)]',
                                'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary',
                            )}
                        >
                            <div className="bg-brand-surface aspect-video overflow-hidden">
                                <img
                                    src={article.image}
                                    alt={article.imageAlt}
                                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transform-none"
                                    loading="lazy"
                                />
                            </div>
                            <div className="flex flex-1 flex-col px-3 py-3">
                                <span
                                    className={cn(
                                        'inline-block w-fit rounded px-1.5 py-0.5 text-[9px] font-bold tracking-wide uppercase sm:text-[10px]',
                                        TAG_STYLES[article.tagAccent],
                                    )}
                                >
                                    {article.tag}
                                </span>
                                <p className="text-brand-navy mt-2 text-sm leading-snug font-semibold">{article.title}</p>
                                <p className="text-muted-foreground mt-1.5 line-clamp-3 text-xs leading-relaxed sm:text-[13px]">
                                    {article.description}
                                </p>
                                <span className="text-brand-primary mt-auto inline-flex items-center gap-1 pt-2 text-xs font-semibold sm:text-sm">
                                    {article.linkLabel}
                                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transform-none" aria-hidden />
                                </span>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}
