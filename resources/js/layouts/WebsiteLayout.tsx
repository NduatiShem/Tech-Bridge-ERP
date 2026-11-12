import Footer from '@/components/website/Footer';
import Header from '@/components/website/Header';
import { Head } from '@inertiajs/react';
import type { ReactNode } from 'react';

type WebsiteLayoutProps = {
    children: ReactNode;
    title?: string;
    description?: string;
};

const DEFAULT_TITLE = 'TechBridge ERP';
const DEFAULT_DESCRIPTION =
    'Modular ERP software for growing businesses. Explore finance, HR, inventory, sales, and more on one connected platform.';

export default function WebsiteLayout({ children, title, description = DEFAULT_DESCRIPTION }: WebsiteLayoutProps) {
    return (
        <>
            <Head title={title ?? DEFAULT_TITLE}>
                <meta name="description" content={description} />
            </Head>
            <div className="flex min-h-screen flex-col overflow-x-clip bg-white">
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
            </div>
        </>
    );
}
