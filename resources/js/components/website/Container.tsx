import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type ContainerProps = {
    children: ReactNode;
    className?: string;
    as?: 'div' | 'section' | 'header' | 'footer' | 'main';
};

/** Marketing max width matches approved comps (~1440px artboard). */
const MARKETING_MAX_WIDTH = 'max-w-[90rem]';

export default function Container({ children, className, as: Component = 'div' }: ContainerProps) {
    return (
        <Component className={cn('mx-auto w-full', MARKETING_MAX_WIDTH, 'px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10', className)}>
            {children}
        </Component>
    );
}
