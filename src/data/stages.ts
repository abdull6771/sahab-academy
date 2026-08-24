import { academics } from "./academics";
import { prefects, studentImages } from "./gallery";

const primary = academics.find((s) => s.slug === "primary");
const secondary = academics.find((s) => s.slug === "secondary");

if (!primary || !secondary) {
  throw new Error("Primary or secondary academic data is missing.");
}

export type StageTheme = "primary" | "secondary";

export type StageSubject = {
  id: string;
  title: string;
  text: string;
};

export type StageStep = {
  n: string;
  title: string;
  text: string;
};

export type StagePageData = {
  slug: StageTheme;
  title: string;
  overline: string;
  headline: string;
  lede: string;
  whoFor: string;
  approach: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
  heroImage: string;
  nav: { id: string; label: string; href: string }[];
  stats: { value: string; label: string }[];
  subjects: StageSubject[];
  journeyTitle: string;
  journeyLede: string;
  journey: StageStep[];
  facilities: { title: string; text: string; src?: string; alt: string }[];
  showPrefects: boolean;
  showAlumni: boolean;
};

const sharedNav = (slug: StageTheme) => [
  { id: "overview", label: "Overview", href: "#overview" },
  { id: "subjects", label: "Learning", href: "#subjects" },
  { id: "journey", label: "Progression", href: "#journey" },
  { id: "records", label: "School records", href: "#records" },
  { id: "life", label: "School life", href: "#life" },
  { id: "campus", label: "Campus", href: "#campus" },
  {
    id: "other",
    label: slug === "primary" ? "Secondary" : "Primary",
    href: slug === "primary" ? "/academics/secondary" : "/academics/primary",
  },
];

export const primaryPage: StagePageData = {
  slug: "primary",
  title: primary.title,
  overline: primary.overline,
  headline: primary.headline,
  lede: "Reading, writing, number, and the first habits of independent work — in a school day that still leaves room for character and play.",
  whoFor: primary.whoFor,
  approach: primary.approach,
  description: primary.description,
  features: primary.features,
  image: primary.image,
  imageAlt: primary.imageAlt,
  heroImage: primary.heroImage,
  nav: sharedNav("primary"),
  stats: [
    { value: "Core subjects", label: "Reading, writing, and number" },
    { value: "Character", label: "Habits taught beside the timetable" },
    { value: "Co-curricular", label: "A balanced week, not only desks" },
    { value: "Library", label: "Quiet space to read and research" },
  ],
  subjects: [
    {
      id: "core",
      title: "Core subjects",
      text: "A strong foundation in reading, writing, and number — the centre of the primary day.",
    },
    {
      id: "thinking",
      title: "Critical thinking",
      text: "Pupils practise careful work and the beginnings of independent study.",
    },
    {
      id: "character",
      title: "Character",
      text: "Character-building activities sit beside academic work, not after it.",
    },
    {
      id: "co",
      title: "Co-curricular",
      text: "A balanced programme so school is more than a list of subjects.",
    },
  ],
  journeyTitle: "How primary builds",
  journeyLede:
    "This is the shape of the section — not a live mark book. Teachers hold each child’s work in school.",
  journey: [
    {
      n: "01",
      title: "Foundation",
      text: "Core subjects first: reading, writing, and number, taught with care.",
    },
    {
      n: "02",
      title: "Independent habits",
      text: "Pupils begin to work on their own, and to think about the work, not only finish it.",
    },
    {
      n: "03",
      title: "Character",
      text: "Manners, responsibility, and character-building activities run through the week.",
    },
    {
      n: "04",
      title: "A balanced week",
      text: "Academic and co-curricular programmes together, so the day is full but not only desks.",
    },
  ],
  facilities: [
    {
      title: primary.facilities[0],
      text: "Rooms prepared for focused primary teaching.",
      src: "/images/campus/classrooms.jpg",
      alt: "A classroom at Sahab Academy",
    },
    {
      title: primary.facilities[1],
      text: "A quiet place for reading and simple research.",
      src: "/images/campus/library.jpg",
      alt: "The school library",
    },
    {
      title: primary.facilities[2],
      text: "Recreation and physical education on the grounds.",
      src: "/images/campus/playground.jpg",
      alt: "Playing ground at Sahab Academy",
    },
  ],
  showPrefects: false,
  showAlumni: false,
};

export const secondaryPage: StagePageData = {
  slug: "secondary",
  title: secondary.title,
  overline: secondary.overline,
  headline: secondary.headline,
  lede: "Subject depth, specialised teachers, and honest guidance toward further study in Nigerian institutions.",
  whoFor: secondary.whoFor,
  approach: secondary.approach,
  description: secondary.description,
  features: secondary.features,
  image: secondary.image,
  imageAlt: secondary.imageAlt,
  heroImage: secondary.heroImage,
  nav: sharedNav("secondary"),
  stats: [
    { value: "National standards", label: "A comprehensive senior curriculum" },
    { value: "Subject teachers", label: "Specialised teaching in greater depth" },
    { value: "Guidance", label: "Career counselling for what comes next" },
    { value: "Leadership", label: "Prefects and daily responsibility" },
  ],
  subjects: [
    {
      id: "curriculum",
      title: "National curriculum",
      text: "A comprehensive curriculum aligned with national standards — the frame for senior study.",
    },
    {
      id: "specialist",
      title: "Specialised teaching",
      text: "Subject teachers take pupils deeper than a single general classroom can.",
    },
    {
      id: "science",
      title: "Science and the library",
      text: "The science laboratory and library support practical work and quiet study.",
    },
    {
      id: "guidance",
      title: "Career guidance",
      text: "Counselling as pupils look toward further study, including Nigerian universities our alumni attend.",
    },
    {
      id: "lead",
      title: "Leadership",
      text: "The prefect system and the ordinary duties of senior school life.",
    },
  ],
  journeyTitle: "Toward what comes next",
  journeyLede:
    "A path through secondary — curriculum, teachers, guidance, leadership. Individual results stay with the office.",
  journey: [
    {
      n: "01",
      title: "Depth",
      text: "Pupils follow a comprehensive curriculum aligned with national standards.",
    },
    {
      n: "02",
      title: "Specialists",
      text: "Specialised subject teachers take the work beyond a single classroom teacher.",
    },
    {
      n: "03",
      title: "Guidance",
      text: "Career guidance and counselling as families think about the next institution.",
    },
    {
      n: "04",
      title: "Leadership",
      text: "Prefect roles and daily responsibility prepare pupils to leave with more than marks.",
    },
  ],
  facilities: [
    {
      title: secondary.facilities[0],
      text: "Practical science on the Babura campus.",
      src: "/images/campus/science_lab.jpg",
      alt: "Science laboratory at Sahab Academy",
    },
    {
      title: secondary.facilities[1],
      text: "Quiet reading and research for senior pupils.",
      src: "/images/campus/library.jpg",
      alt: "The school library",
    },
    {
      title: secondary.facilities[2],
      text: "Student leadership through the prefect system.",
      src: "/images/prefects/head_boy.jpg",
      alt: "Student leadership at Sahab Academy",
    },
  ],
  showPrefects: true,
  showAlumni: true,
};

export const stagePupils = studentImages.map((s) => ({
  id: s.id,
  name: s.title,
  caption: s.caption,
  src: s.src,
}));

export const stagePrefects = prefects;
