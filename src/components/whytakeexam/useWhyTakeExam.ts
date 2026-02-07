'use client';

export type SegmentItem = {
  text: string;
};

export default function useWhyTakeExam() {
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
    src: 'https://media.onlinefrenchskool.com/exam.png', // place in /public or update path
    alt: 'Smiling learner studying in a cozy setting',
  };

  const items: SegmentItem[] = [
    { text: 'Boost Your CRS Score: Improve your Express Entry points by up to 50–70 points with a CLB 7 in French.' },
    { text: 'Open Doors to Canadian Provinces: Qualify for Francophone Immigration Programs and Provincial Nominee Programs (PNPs).' },
    { text: 'Stand Out in the PR Pool: Bilingual applicants are highly preferred by IRCC.' },
    { text: 'Career Growth in Canada: French proficiency opens professional opportunities in both private and government sectors.' },
    { text : 'Personal Confidence & Global Skill: Learning French gives you an edge beyond immigration — it’s a valuable life skill.'},
  ];

  const cta = {
    label: 'Book Free Trial Class →',
    href: '/contact_us',
  };

  return { UI, image, items, cta };
}
