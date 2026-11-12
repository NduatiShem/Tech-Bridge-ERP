import Container from '@/components/website/Container';
import SecondaryButton from '@/components/website/SecondaryButton';
import WebsiteLayout from '@/layouts/WebsiteLayout';

type PlaceholderProps = {
    pageTitle: string;
};

export default function Placeholder({ pageTitle }: PlaceholderProps) {
    return (
        <WebsiteLayout title={pageTitle} description={`${pageTitle} — TechBridge ERP corporate website.`}>
            <section className="bg-brand-surface py-20 sm:py-28">
                <Container className="text-center">
                    <p className="text-brand-green text-sm font-semibold tracking-wide uppercase">Coming in a future milestone</p>
                    <h1 className="text-brand-navy mt-3 text-4xl font-bold tracking-tight">{pageTitle}</h1>
                    <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-lg">
                        This page is planned for a later phase of the TechBridge marketing website. Navigation and routing are in place for
                        development.
                    </p>
                    <div className="mt-8">
                        <SecondaryButton href={route('home')}>Back to home</SecondaryButton>
                    </div>
                </Container>
            </section>
        </WebsiteLayout>
    );
}
