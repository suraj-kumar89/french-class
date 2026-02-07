'use client';

export type SegmentItem = {
  text: string;
};

export default function useSegmentation() {
  const UI = {
    // keep typography consistent with LearnMode
    primary: '#242325',
    secondary: '#47464A',
    tertiary: '#4A3CF3',

    // caption pill
    captionBg: '#FBFCF2',
    captionBorder: '#E0DFE3',

    // success/check accent (green)
    success: '#4A3CF3', // tweak if you need closer to your design
    successBg: '#EAF8F1',

    // CTA (same family as header/salebanner vibe)
    ctaBg: '#D3E373',
    ctaText: '#38400D',
  };

  const image = {
    src: 'https://media.onlinefrenchskool.com/assets/image5.svg', // place in /public or update path
    alt: 'Smiling learner studying in a cozy setting',
  };

  const items: SegmentItem[] = [
    { text: 'For beginners who want to start learning French with proper structure and guidance.' },
    { text: 'For learners aiming to speak French confidently for work, travel, or global opportunities.' },
    { text: 'For students preparing for DELF, TEF, or TCF with a clear study plan and regular practice.' },
    { text: 'For professionals or PR aspirants who need focused speaking, writing, and listening improvement.' },
    { text: ' For anyone who wants consistent progress through live classes, feedback, and communication practice' },
  ];

  const cta = {
    label: 'Book Free Trial Class →',
    href: '/contact_us',
  };

  return { UI, image, items, cta };
}
