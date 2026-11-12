import Breadcrumb from '@/components/website/Breadcrumb';
import CallToAction from '@/components/website/CallToAction';
import Container from '@/components/website/Container';
import ModuleCard from '@/components/website/ModuleCard';
import SectionHeading from '@/components/website/SectionHeading';
import { ERP_MODULES } from '@/data/modules';
import WebsiteLayout from '@/layouts/WebsiteLayout';

export default function ModulesIndex() {
    const breadcrumbs = [
        { label: 'Home', href: route('home') },
        { label: 'Modules' },
    ];

    return (
        <WebsiteLayout
            title="All Modules"
            description="Explore all nine TechBridge ERP modules—HR, inventory, procurement, sales, finance, manufacturing, assets, analytics, and distribution."
        >
            <section className="bg-brand-surface border-b border-border/60">
                <Container className="py-8 sm:py-10 lg:py-12">
                    <Breadcrumb items={breadcrumbs} className="mb-6" />
                    <p className="text-brand-primary text-xs font-bold tracking-[0.14em] uppercase sm:text-sm">TechBridge ERP</p>
                    <h1 className="text-brand-navy mt-3 max-w-3xl text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.5rem]">
                        All modules for your growing business
                    </h1>
                    <p className="text-muted-foreground mt-4 max-w-2xl text-base leading-relaxed sm:text-lg">
                        Activate the capabilities you need today and expand as your operations grow. Each module connects on one platform—no
                        fragile integrations between disconnected tools.
                    </p>
                </Container>
            </section>

            <section className="section-spacing bg-brand-white">
                <Container>
                    <SectionHeading
                        eyebrow="Nine modules"
                        title="One connected platform"
                        description="Select a module to learn how TechBridge supports your teams. Manufacturing includes a full product overview; additional module pages are being added."
                        eyebrowTone="primary"
                    />
                    <ul className="mt-10 grid list-none gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
                        {ERP_MODULES.map((module) => (
                            <li key={module.slug}>
                                <ModuleCard module={module} />
                            </li>
                        ))}
                    </ul>
                </Container>
            </section>

            <CallToAction
                title="Not sure which modules you need?"
                description="Book a demo and we will walk through the modules that fit your industry and operational priorities."
                primaryLabel="Book a Demo"
                primaryHref={route('book-demo')}
                secondaryLabel="Contact Us"
                secondaryHref={route('contact')}
            />
        </WebsiteLayout>
    );
}
