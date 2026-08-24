export type AcademicSection = {
  slug: "nursery" | "primary" | "secondary";
  title: string;
  overline: string;
  headline: string;
  whoFor: string;
  approach: string;
  description: string;
  features: string[];
  facilities: string[];
  image: string;
  imageAlt: string;
  heroImage: string;
};

export const academics: AcademicSection[] = [
  {
    slug: "nursery",
    title: "Nursery",
    overline: "Early years",
    headline: "A calm start to school.",
    whoFor:
      "Young children taking their first steps into school life in Babura — learning to listen, play, speak, and belong.",
    approach:
      "The nursery is child-centred. Days are structured enough to feel safe, and gentle enough for small children to explore. Teachers attend to literacy and number through song, story, and guided play, and they watch social and emotional growth as closely as letters and counting.",
    description: "A foundation for lifelong learning in a nurturing environment.",
    features: [
      "Child-centred approach to learning",
      "Development of basic literacy and numeracy skills",
      "Focus on social and emotional development",
      "Safe and stimulating environment",
    ],
    facilities: [
      "Classrooms scaled for young children",
      "Access to the playing ground",
      "A watchful, familiar staff",
    ],
    image: "/images/campus/playground.jpg",
    imageAlt: "Outdoor playing ground at Sahab Academy",
    heroImage: "/images/campus/playground.jpg",
  },
  {
    slug: "primary",
    title: "Primary",
    overline: "The middle years",
    headline: "Knowledge, habits, and character.",
    whoFor:
      "Children ready for a fuller school day — reading, writing, number, and the beginnings of independent work.",
    approach:
      "Primary builds a strong foundation in the core subjects while making room for curiosity. Pupils practise careful thinking, take part in character-building activities, and follow a balance of academic and co-curricular work so that school is more than a list of subjects.",
    description: "Building knowledge and character through comprehensive education.",
    features: [
      "Strong foundation in core subjects",
      "Development of critical thinking skills",
      "Character building activities",
      "Balanced academic and co-curricular programmes",
    ],
    facilities: [
      "Classrooms for focused study",
      "School library for reading and research",
      "Playing ground for recreation and physical education",
    ],
    image: "/images/campus/classrooms.jpg",
    imageAlt: "A classroom at Sahab Academy",
    heroImage: "/images/campus/classrooms.jpg",
  },
  {
    slug: "secondary",
    title: "Secondary",
    overline: "Senior years",
    headline: "Depth, guidance, and what comes next.",
    whoFor:
      "Adolescents preparing for further study — including the Nigerian universities our alumni now attend.",
    approach:
      "Secondary follows a comprehensive curriculum aligned with national standards, taught by specialised subject teachers. Pupils receive career guidance and counselling, and they take on leadership — in the prefect system and in the daily life of the school.",
    description: "Preparing students for higher education and future success.",
    features: [
      "Comprehensive curriculum aligned with national standards",
      "Specialised subject teachers",
      "Career guidance and counselling",
      "Leadership development opportunities",
    ],
    facilities: [
      "Science laboratory",
      "School library",
      "Prefect and leadership responsibilities",
    ],
    image: "/images/campus/science_lab.jpg",
    imageAlt: "Science laboratory at Sahab Academy",
    heroImage: "/images/campus/science_lab.jpg",
  },
];

export function getAcademic(slug: string) {
  return academics.find((s) => s.slug === slug);
}
