import type { FeatureAccent } from '@/types/module-page';

/** Solid icon tiles — approved manufacturing key-features mockup */
export const featureAccentSolidStyles: Record<FeatureAccent, string> = {
    blue: 'bg-brand-primary',
    green: 'bg-brand-green',
    purple: 'bg-violet-600',
    orange: 'bg-orange-500',
    pink: 'bg-pink-600',
    teal: 'bg-teal-600',
    indigo: 'bg-indigo-600',
    lime: 'bg-green-700',
};

export const featureAccentStyles: Record<FeatureAccent, { icon: string; ring: string }> = {
    blue: { icon: 'bg-blue-100 text-blue-700', ring: 'border-blue-100' },
    green: { icon: 'bg-emerald-100 text-emerald-700', ring: 'border-emerald-100' },
    purple: { icon: 'bg-purple-100 text-purple-700', ring: 'border-purple-100' },
    orange: { icon: 'bg-orange-100 text-orange-700', ring: 'border-orange-100' },
    pink: { icon: 'bg-pink-100 text-pink-700', ring: 'border-pink-100' },
    teal: { icon: 'bg-teal-100 text-teal-700', ring: 'border-teal-100' },
    indigo: { icon: 'bg-indigo-100 text-indigo-700', ring: 'border-indigo-100' },
    lime: { icon: 'bg-lime-100 text-lime-800', ring: 'border-lime-100' },
};
