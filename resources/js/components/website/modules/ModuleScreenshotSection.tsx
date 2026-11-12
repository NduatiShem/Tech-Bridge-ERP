import ButtonWithArrow from '@/components/website/ButtonWithArrow';
import Container from '@/components/website/Container';
import SectionHeading from '@/components/website/SectionHeading';
import { Check } from 'lucide-react';

type ModuleScreenshotSectionProps = {
    eyebrow: string;
    title: string;
    description: string;
    bullets: string[];
    images: { src: string; alt: string; className?: string }[];
};

export default function ModuleScreenshotSection({
    eyebrow,
    title,
    description,
    bullets,
    images,
}: ModuleScreenshotSectionProps) {
    const primaryImage = images[0];

    return (
        <section className="section-spacing overflow-hidden bg-white">
            <Container>
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-20">
                    <div className="relative flex justify-center lg:justify-start">
                        {primaryImage ? (
                            <img
                                src={primaryImage.src}
                                alt={primaryImage.alt}
                                className={
                                    primaryImage.className ??
                                    'h-auto w-full max-w-[36rem] object-contain xl:max-w-[40rem]'
                                }
                                loading="lazy"
                                width={1024}
                                height={640}
                            />
                        ) : null}
                    </div>

                    <div className="lg:pl-2">
                        <SectionHeading
                            eyebrow={eyebrow}
                            title={title}
                            description={description}
                            align="left"
                            eyebrowTone="primary"
                            descriptionClassName="text-base leading-relaxed sm:text-lg"
                            className="max-w-xl"
                        />
                        <ul className="mt-6 space-y-3.5 sm:mt-8">
                            {bullets.map((bullet) => (
                                <li key={bullet} className="flex items-start gap-3 text-sm sm:text-base">
                                    <span className="bg-brand-green/15 text-brand-green mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                                        <Check className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden />
                                    </span>
                                    <span className="text-brand-navy leading-snug">{bullet}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 sm:mt-10">
                            <ButtonWithArrow href={route('book-demo')}>See Module in Action</ButtonWithArrow>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
