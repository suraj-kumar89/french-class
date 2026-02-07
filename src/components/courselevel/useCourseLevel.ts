export const COLORS = {
  textPrimary: "#242325",
  textSecondary: "#47464A",
  tertiary: "#6B6A70",

  // backgrounds
  blueLite: "#EDF3C6",   // Beginner
  lavender: "#D5E47A",   // Intermediate
  purple: "#97A257",     // Advanced
};

export type CourseTier = {
  tier: "Beginner" | "Intermediate" | "Advanced";
  label: string;        // A1 & A2, etc
  description: string;
  bg: string;
  lightText?: boolean;  // Advanced uses light text on purple
};

export const LEVELS: CourseTier[] = [
  {
    tier: "Beginner",
    label: "Foundation \n Level",
    description:
      "Build a strong foundation in French grammar, pronunciation, and vocabulary. Learn to listen, speak, read, and write confidently for everyday conversations.",
    bg: COLORS.blueLite,
  },
  {
    tier: "Intermediate",
    label: "Skill \n Enhancement",
    description:
      "Improve fluency, strengthen comprehension, and practise advanced listening, reading, writing, and speaking through structured, guided exercises and real-life scenarios.",
    bg: COLORS.lavender,
  },
  {
    tier: "Advanced",
    label: "Advanced & Exam \n Preparation",
    description:
      "Refine your language skills with advanced practice, mock tests, and personalised evaluations. Includes focused preparation for DELF, TEF, and TCF with clear performance tracking.",
    bg: COLORS.purple,
    lightText: true,
  },
];

export default function useCourseLevel() {
  return { COLORS, items: LEVELS };
}
