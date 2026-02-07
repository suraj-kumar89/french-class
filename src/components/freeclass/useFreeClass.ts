export default function useFreeClass() {
  // Colors centralised so you can theme quickly
  const UI = {
    panelBg: '#EDF3C6',            // left purple panel
    title: '#022850',
    subtitle: '#47464A',
    // badge
    badgeText: '#4A3CF3',
    badgeBorder: '#4A3CF3',
    badgeBg: 'transparent',
    // CTA
    ctaBg: '#38400D',
    ctaText: '#D3E373',
  };

  const content = {
    badge: 'Free Trial Class',
    titleLine1: 'Try a Free French Class ',
    titleLine2: 'Before You Commit',
    subtitle:
      'Book a free trial class and experience how our live, structured, and interactive French classes work. Get a feel for our teaching style, speaking practice, and personalised guidance before choosing the right learning path for you.',
    cta: 'Book Free Trial Class',
    image:
      'https://media.onlinefrenchskool.com/assets/freeoffer.svg', // replace with your asset
    imageAlt: 'Learner taking an online French trial class',
  };

  // Wire to your router / modal / analytics
  const onCta = () => {
    // e.g., router.push('/book') or open modal
    // console.log('Book Free Trial Class');
  };

  return { UI, content, onCta };
}
