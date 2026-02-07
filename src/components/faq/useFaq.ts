export type FaqItem = { id: string; q: string; a: string };

export default function useFaq() {
const items: FaqItem[] = [
  {
    id: "q1",
    q: "Do you provide study material and mock tests?",
    a: "Yes. Every student receives digital study material, assignments, and mock tests designed around the official TEF exam format. You’ll also get model answers and expert feedback for each section.",
  },
  {
    id: "q2",
    q: "Are the classes live or recorded?",
    a: "We offer both. Live sessions are interactive, and recordings are shared after every class so you can revise anytime.",
  },
  {
    id: "q3",
    q: "Will I get a certificate after completing the course?",
    a: "Yes, upon successful completion, you’ll receive a course completion certificate.",
  },
  {
    id: "q4",
    q: "Can I switch from Regular to Super-Intensive later?",
    a: "Absolutely. You can upgrade your plan anytime if you wish to progress faster.",
  },
  {
    id: "q5",
    q: "Do you offer free demo classes?",
    a: "Yes, you can attend a free trial class before enrolling in a full programme.",
  },
  {
    id: "q6",
    q: "What if I miss a class?",
    a: "Recordings and notes will be provided so you can catch up without losing track.",
  },
];


  // UI tokens (aligned with the rest of your site)
  const UI = {
    brand: "#38400D",
    primary: "#022850",
    secondary: "#47464A",
    tertiary: "#6B6A70",
    divider: "#E0DFE3",
    cardBg: "#EDF3C6", // subtle translucent neutral
    // cardBorder: "#E0DFE3",
    captionBg: "#FBFCF2",
    captionBorder: "#E0DFE3",
    captionText: "#4A3CF3",
  };

  return { items, UI };
}
