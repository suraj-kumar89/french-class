'use client';

export type LearnModeItem = {
  id: 'solo' | 'squad';
  title: string;
  lead: string;         // the small sentence above the bullets
  bullets: string[];
  image: string;        // /public path
  alt: string;
};

export default function useLearnMode() {
  const UI = {
    brand: '#38400D',
    primary: '#242325',
    secondary: '#022850',
    tertiary: '#6B6A70',
    captionBg: '#F0EFF1',
    captionBorder: '#E0DFE3',
  };

  const items: LearnModeItem[] = [
    {
      id: 'solo',
      title: 'TEF Superintensive',
      lead: 'For learners who want rapid progress through full-time, immersive training.',
      bullets: [
        'Achieve CLB 7+ within 3 months through an intensive 5-day-a-week schedule',
        '3 hours of expert-led classes daily, plus Saturday mock and doubt-clearing sessions',
        'Additional weekday communication classes for fluency and confidence',
        'Comprehensive 440-hour program combining classroom and guided self-study',
        'Regular mock tests and feedback to track performance and mastery',
      ],
      image: 'https://media.onlinefrenchskool.com/LearningMode.png', // put an image in public
      alt: 'Tutor guiding a student in a one-on-one session',
    },
    {
      id: 'squad',
      title: 'TEF Fast Track',
      lead: 'Best for learners balancing studies or work, who prefer a steady pace and group learning.',
      bullets: [
        'Achieve CLB 7+ within 6–7 months through a structured weekly plan',
        'Interactive live sessions with certified French trainers',
        'Small-group learning encouraging collaboration and peer discussion',
        'Speaking and listening practice through real-life scenarios and group activities',
        'Weekly mock reviews and progress tracking to ensure consistent growth'
      ],
      image: 'https://media.onlinefrenchskool.com/assets/image6.svg', // put an image in public
      alt: 'Small study group working together with a tutor',
    },
  ];

  return { UI, items };
}
