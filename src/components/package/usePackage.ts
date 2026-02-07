export type Plan = {
  id: "one" | "two" | "three" | "super6";
  title: string;
  description: string; // 👈 paragraph under heading
  perks: string[];
  bg: string;
  lightText?: boolean;
  badge?: string; // 👈 badge text per card
};

export default function usePackage() {
  const UI = {
    captionBg: "#FBFCF2",
    captionBorder: "#E0DFE3",
    captionText: "#4A3CF3",

    brand: "#984DDD",
    primary: "#D3E373",

    neutralPrimary: "#242325",
    neutralSecondary: "#47464A",

    btnTextOnPrimary: "#E4F1FE",
    btnTextOnWhite: "#FFFFFF",
  };

  const plans: Plan[] = [
    {
      id: "one",
      title: "Fast Track \n Programme",
      description:
        "For Learners who wants steady French Progress with limited daily time.",
      bg: "#FFFFFF",
      lightText: true,
      badge: "Duration: 6–9 months",
      perks: [
        "Daily classes: 1–2 hours(level based)",
        "Daily communication practice",
        "Assignments & mock tests included",
      ],
    },
    {
      id: "two",
      title: "Intensive \n Programme",
      description:
        "For Learners who wants fast french progress with consistency.",
      bg: "#FFFFFF",
      lightText: true,
      badge: "Duration: 7 months",
      perks: [
        "Daily classes: 2 hours (Mon–Fri)",
        "Saturday doubt clearing sessions",
        "Assignments, mock tests & feedback",
      ],
    },
    {
      id: "three",
      title: "Super-Intensive \n Programme",
      description:
        "For learners with aggressive timelines and high commitment.",
      bg: "#111827",
      badge: "Duration: 3–4 months",
      perks: [
        "Daily classes: 3 hours (Mon–Fri)",
        "Saturday doubt clearing sessions",
        "Intensive practice with mock tests",
      ],
    },
    {
      id: "super6",
      title: "Regular \n Programme",
      description:
        "For learners who prefer related long term French learning pace.",
      bg: "#FFFFFF",
      lightText: true,
      badge: "Duration: 10–12 months",
      perks: [
        "Daily classes: 1 hour (Mon–Fri)",
        "Saturday doubt clearing sessions",
        "Structured lessons with practice tasks",
      ],
    },
  ];

  return { UI, plans };
}
