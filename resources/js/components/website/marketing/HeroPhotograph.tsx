import { cn } from '@/lib/utils';
import type { CSSProperties } from 'react';

/** Fade subject into hero + swoosh — wide soft left edge (pricing comp). */
export const HERO_PHOTO_MASK: CSSProperties = {
    WebkitMaskImage: `
        linear-gradient(to right,
            transparent 0%,
            rgba(0,0,0,0.35) 12%,
            black 30%,
            black 100%
        ),
        linear-gradient(to bottom,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
        )
    `,
    maskImage: `
        linear-gradient(to right,
            transparent 0%,
            rgba(0,0,0,0.35) 12%,
            black 30%,
            black 100%
        ),
        linear-gradient(to bottom,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
        )
    `,
    WebkitMaskComposite: 'source-in',
    maskComposite: 'intersect',
};

/**
 * FAQs support hero — fade left into copy, right into decorative swoosh, bottom into hero floor.
 * Applied on the <img> only (see HeroPhotograph), not the support card or section.
 */
export const SUPPORT_HERO_PHOTO_MASK: CSSProperties = {
    WebkitMaskImage: `
        linear-gradient(
            to right,
            transparent 0%,
            black 18%,
            black 80%,
            transparent 100%
        ),
        linear-gradient(
            to bottom,
            transparent 0%,
            black 12%,
            black 68%,
            transparent 100%
        )
    `,
    maskImage: `
        linear-gradient(
            to right,
            transparent 0%,
            black 18%,
            black 80%,
            transparent 100%
        ),
        linear-gradient(
            to bottom,
            transparent 0%,
            black 12%,
            black 68%,
            transparent 100%
        )
    `,
    WebkitMaskComposite: 'source-in',
    maskComposite: 'intersect',
};

/** Mobile FAQs hero — preserve face/headset; fade bottom into search, left into copy. */
export const SUPPORT_MOBILE_HERO_PHOTO_MASK: CSSProperties = {
    WebkitMaskImage: `
        linear-gradient(
            to right,
            transparent 0%,
            rgba(0,0,0,0.4) 14%,
            black 28%,
            black 92%,
            transparent 100%
        ),
        linear-gradient(
            to bottom,
            black 0%,
            black 78%,
            rgba(0,0,0,0.45) 92%,
            transparent 100%
        )
    `,
    maskImage: `
        linear-gradient(
            to right,
            transparent 0%,
            rgba(0,0,0,0.4) 14%,
            black 28%,
            black 92%,
            transparent 100%
        ),
        linear-gradient(
            to bottom,
            black 0%,
            black 78%,
            rgba(0,0,0,0.45) 92%,
            transparent 100%
        )
    `,
    WebkitMaskComposite: 'source-in',
    maskComposite: 'intersect',
};

/**
 * About hero — office interior: soft left into copy/swoosh, gentle top/bottom/right fades (no hard crop).
 */
export const ABOUT_HERO_PHOTO_MASK: CSSProperties = {
    WebkitMaskImage: `
        linear-gradient(
            to right,
            transparent 0%,
            rgba(0,0,0,0.1) 6%,
            rgba(0,0,0,0.4) 13%,
            rgba(0,0,0,0.78) 20%,
            black 30%,
            black 54%,
            rgba(0,0,0,0.88) 62%,
            rgba(0,0,0,0.65) 72%,
            rgba(0,0,0,0.38) 82%,
            rgba(0,0,0,0.16) 92%,
            transparent 100%
        ),
        linear-gradient(
            to bottom,
            transparent 0%,
            rgba(0,0,0,0.08) 5%,
            rgba(0,0,0,0.35) 11%,
            rgba(0,0,0,0.72) 18%,
            black 26%,
            black 72%,
            rgba(0,0,0,0.72) 82%,
            rgba(0,0,0,0.35) 91%,
            rgba(0,0,0,0.12) 97%,
            transparent 100%
        ),
        radial-gradient(
            ellipse 55% 42% at 100% 0%,
            transparent 0%,
            rgba(0,0,0,0.25) 32%,
            rgba(0,0,0,0.65) 55%,
            black 78%
        ),
        radial-gradient(
            ellipse 55% 42% at 100% 100%,
            transparent 0%,
            rgba(0,0,0,0.25) 32%,
            rgba(0,0,0,0.65) 55%,
            black 78%
        )
    `,
    maskImage: `
        linear-gradient(
            to right,
            transparent 0%,
            rgba(0,0,0,0.1) 6%,
            rgba(0,0,0,0.4) 13%,
            rgba(0,0,0,0.78) 20%,
            black 30%,
            black 54%,
            rgba(0,0,0,0.88) 62%,
            rgba(0,0,0,0.65) 72%,
            rgba(0,0,0,0.38) 82%,
            rgba(0,0,0,0.16) 92%,
            transparent 100%
        ),
        linear-gradient(
            to bottom,
            transparent 0%,
            rgba(0,0,0,0.08) 5%,
            rgba(0,0,0,0.35) 11%,
            rgba(0,0,0,0.72) 18%,
            black 26%,
            black 72%,
            rgba(0,0,0,0.72) 82%,
            rgba(0,0,0,0.35) 91%,
            rgba(0,0,0,0.12) 97%,
            transparent 100%
        ),
        radial-gradient(
            ellipse 55% 42% at 100% 0%,
            transparent 0%,
            rgba(0,0,0,0.25) 32%,
            rgba(0,0,0,0.65) 55%,
            black 78%
        ),
        radial-gradient(
            ellipse 55% 42% at 100% 100%,
            transparent 0%,
            rgba(0,0,0,0.25) 32%,
            rgba(0,0,0,0.65) 55%,
            black 78%
        )
    `,
    WebkitMaskComposite: 'source-in, source-in, source-in',
    maskComposite: 'intersect, intersect, intersect',
};

/** About hero — mobile/tablet: keep logo wall visible, fade left and bottom into copy/pills. */
export const ABOUT_MOBILE_HERO_PHOTO_MASK: CSSProperties = {
    WebkitMaskImage: `
        linear-gradient(
            to right,
            transparent 0%,
            rgba(0,0,0,0.22) 10%,
            rgba(0,0,0,0.65) 18%,
            black 26%,
            black 92%,
            rgba(0,0,0,0.35) 97%,
            transparent 100%
        ),
        linear-gradient(
            to bottom,
            transparent 0%,
            rgba(0,0,0,0.2) 5%,
            black 12%,
            black 78%,
            rgba(0,0,0,0.35) 92%,
            transparent 100%
        )
    `,
    maskImage: `
        linear-gradient(
            to right,
            transparent 0%,
            rgba(0,0,0,0.22) 10%,
            rgba(0,0,0,0.65) 18%,
            black 26%,
            black 92%,
            rgba(0,0,0,0.35) 97%,
            transparent 100%
        ),
        linear-gradient(
            to bottom,
            transparent 0%,
            rgba(0,0,0,0.2) 5%,
            black 12%,
            black 78%,
            rgba(0,0,0,0.35) 92%,
            transparent 100%
        )
    `,
    WebkitMaskComposite: 'source-in',
    maskComposite: 'intersect',
};

export type HeroPhotoMaskProfile = 'default' | 'support' | 'support-mobile' | 'about' | 'about-mobile';

const MASK_BY_PROFILE: Record<HeroPhotoMaskProfile, CSSProperties> = {
    default: HERO_PHOTO_MASK,
    support: SUPPORT_HERO_PHOTO_MASK,
    'support-mobile': SUPPORT_MOBILE_HERO_PHOTO_MASK,
    about: ABOUT_HERO_PHOTO_MASK,
    'about-mobile': ABOUT_MOBILE_HERO_PHOTO_MASK,
};

type HeroPhotographProps = {
    src: string;
    alt: string;
    className?: string;
    style?: CSSProperties;
    objectPosition?: string;
    masked?: boolean;
    maskProfile?: HeroPhotoMaskProfile;
};

export default function HeroPhotograph({
    src,
    alt,
    className,
    style,
    objectPosition = '68% 32%',
    masked = false,
    maskProfile = 'default',
}: HeroPhotographProps) {
    const maskStyle = masked ? MASK_BY_PROFILE[maskProfile] : undefined;
    const imgStyle: CSSProperties = {
        objectPosition,
    };

    return (
        <figure
            className={cn('relative h-full w-full', className)}
            style={{ ...style, ...maskStyle }}
            aria-label={alt}
        >
            <img
                src={src}
                alt=""
                role="presentation"
                className="h-full w-full object-cover"
                style={imgStyle}
                decoding="async"
                fetchPriority="high"
            />
            {!masked ? (
                <div
                    className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#EFF7FF] via-[#EFF7FF]/70 to-transparent"
                    aria-hidden
                />
            ) : null}
        </figure>
    );
}
