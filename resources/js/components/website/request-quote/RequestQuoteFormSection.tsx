import Container from '@/components/website/Container';
import RevealOnView from '@/components/website/motion/RevealOnView';
import RequestQuoteForm from '@/components/website/request-quote/RequestQuoteForm';
import RequestQuoteSidebar from '@/components/website/request-quote/RequestQuoteSidebar';

export default function RequestQuoteFormSection() {
    return (
        <section className="border-t border-slate-100 bg-brand-surface/50 py-10 sm:py-12 lg:py-14">
            <Container>
                <div className="grid gap-8 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)] lg:items-start lg:gap-10">
                    <RevealOnView>
                        <RequestQuoteForm />
                    </RevealOnView>
                    <RevealOnView delayMs={100} variant="fade-in">
                        <RequestQuoteSidebar />
                    </RevealOnView>
                </div>
            </Container>
        </section>
    );
}
