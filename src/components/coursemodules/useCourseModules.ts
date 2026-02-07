export type ModuleLevel = {
  id: "beginner" | "intermediate" | "advanced";
  heading: string;        // e.g., "Beginner (A1–A2)"
  title: string;          // short label for the row (Beginner / Intermediate / Advanced)
  description: string;
  image: string;          // path in /public (568×436 recommended)
  chips: string[];
  chipBg?: string; 
};

const LEVELS: ModuleLevel[] = [
  {
    id: "beginner",
    title: "Foundation Stage",
    heading: "Foundation Stage",
    description:
      "Master the fundamentals of French grammar, vocabulary, and pronunciation. Build confidence in listening, speaking, reading, and writing through real-life situations and guided beginner practice.",
    image: "https://media.onlinefrenchskool.com/assets/image1.svg",
    chips: ["Greetings", "Numbers", "Shopping", "Family", "Travel"],
    chipBg: "#70565633", 
  },
  {
    id: "intermediate",
    title: "Practice Stage",
    heading: "Practice Stage",
    description:
      "Strengthen fluency and accuracy across listening, reading, writing, and speaking. Practise structured writing, guided speaking, and comprehension through regular exercises, mock tests, and feedback.",
    image: "https://media.onlinefrenchskool.com/assets/image2.svg",
    chips: ["Work", "Study", "Hobbies", "Expressing Opinions", "French Culture"],
    chipBg: "#70565633", 
  },
  {
    id: "advanced",
    title: "Mastery Stage",
    heading: "Mastery Stage",
    description:
      "Refine advanced language skills with intensive practice, personalised evaluations, and performance tracking. Includes focused preparation for DELF, TEF, and TCF, along with strategies to improve fluency and confidence under pressure.",
    image: "https://media.onlinefrenchskool.com/assets/image3.svg",
    chips: ["Advanced Grammar", "Academic Writing", "Professional Communication"],
    chipBg: "#70565633", 
  },
];

export default function useCourseModules() {
  return {
    items: LEVELS,
    UI: {
      // colors pulled from your design tokens
      captionBorder: "#E0DFE3",
      captionBg: "#FBFCF2",
      captionText: "#4A3CF3",
      primaryText: "#242325",
      secondaryText: "#022850",
      brand: "#38400D",
      divider: "#D1D0D6",
    },
  };
}
