import { BookOpen, FlaskConical, Trees } from "lucide-react";

export const facilityCategoryIds = [
  "all",
  "classrooms",
  "science",
  "ict",
  "library",
  "recreation",
  "campus",
  "administration",
] as const;

export type FacilityCategoryId = (typeof facilityCategoryIds)[number];

export const facilityCategories: { id: FacilityCategoryId; label: string }[] = [
  { id: "all", label: "All" },
  { id: "classrooms", label: "Classrooms" },
  { id: "science", label: "Science laboratory" },
  { id: "ict", label: "Computer lab" },
  { id: "library", label: "Library" },
  { id: "recreation", label: "Playground" },
  { id: "campus", label: "Campus buildings" },
  { id: "administration", label: "Administration" },
];

export type CampusFacility = {
  id: string;
  name: string;
  category: Exclude<FacilityCategoryId, "all">;
  categoryLabel: string;
  description: string;
  features: string[];
  image?: string;
  imageAlt: string;
  usedBy: string[];
};

export const campusFacilities: CampusFacility[] = [
  {
    id: "classrooms",
    name: "Classrooms",
    category: "classrooms",
    categoryLabel: "Classrooms",
    description:
      "Rooms prepared for daily teaching — from nursery rooms scaled for young children to focused primary and secondary study.",
    features: [
      "Daily teaching across nursery, primary, and secondary",
      "Nursery rooms scaled for young children",
      "Primary rooms prepared for focused study",
    ],
    image: "/images/campus/classrooms.jpg",
    imageAlt: "A classroom at Sahab Academy",
    usedBy: ["Nursery", "Primary", "Secondary"],
  },
  {
    id: "library",
    name: "School library",
    category: "library",
    categoryLabel: "Library",
    description:
      "A quiet place to read and study, used for reading and simple research, with a library prefect among the student leaders.",
    features: [
      "Quiet reading and study",
      "Used by primary and secondary pupils",
      "Student leadership through the library prefect",
    ],
    image: "/images/campus/library.jpg",
    imageAlt: "The school library at Sahab Academy",
    usedBy: ["Primary", "Secondary"],
  },
  {
    id: "science-laboratory",
    name: "Science laboratory",
    category: "science",
    categoryLabel: "Science laboratory",
    description:
      "Practical science on the Babura campus — a room secondary pupils use for work beyond the textbook.",
    features: [
      "Practical science for secondary study",
      "Part of the senior academic programme",
    ],
    image: "/images/campus/science_lab.jpg",
    imageAlt: "Science laboratory at Sahab Academy",
    usedBy: ["Secondary"],
  },
  {
    id: "playing-ground",
    name: "Playing ground",
    category: "recreation",
    categoryLabel: "Playground",
    description:
      "Outdoor space for recreation, movement, and physical education — used from the nursery years through the rest of the school.",
    features: [
      "Recreation and physical education",
      "Access for nursery children",
      "Student leadership through the sports prefect",
    ],
    image: "/images/campus/playground.jpg",
    imageAlt: "Playing ground at Sahab Academy",
    usedBy: ["Nursery", "Primary", "Secondary"],
  },
  {
    id: "computer-lab",
    name: "Computer lab",
    category: "ict",
    categoryLabel: "Computer lab",
    description: "A room for digital skills and supervised computer work.",
    features: ["Digital skills under staff supervision"],
    imageAlt: "Computer lab at Sahab Academy",
    usedBy: ["The school"],
  },
  {
    id: "main-building",
    name: "Main building",
    category: "campus",
    categoryLabel: "Campus buildings",
    description:
      "The principal school building on the Babura campus — the face of Sahab Academy for families arriving at the grounds.",
    features: ["The school’s principal building", "Shared by all three sections"],
    image: "/images/campus/main_building.jpg",
    imageAlt: "The main building of Sahab Academy in Babura",
    usedBy: ["The whole school"],
  },
  {
    id: "entrance",
    name: "School entrance",
    category: "campus",
    categoryLabel: "Campus buildings",
    description:
      "Arrival at Sahab Academy — the gate and approach families use when they visit Babura.",
    features: ["Arrival for families and visitors", "The public face of the campus"],
    image: "/images/campus/entrance.jpg",
    imageAlt: "Entrance to Sahab Academy",
    usedBy: ["The whole school"],
  },
  {
    id: "staff-room",
    name: "Staff room",
    category: "administration",
    categoryLabel: "Administration",
    description: "A dedicated space for teachers and staff.",
    features: ["A room for teachers and staff"],
    imageAlt: "Staff room at Sahab Academy",
    usedBy: ["Teachers"],
  },
];

export const photographedFacilities = campusFacilities.filter((f) => f.image);

export const facilityMosaicSpan: Record<string, string> = {
  classrooms: "lg:col-span-2 lg:row-span-2",
  "playing-ground": "lg:col-span-2",
  "main-building": "lg:col-span-2",
};

export const facilityStats = [
  { value: 3, label: "Sections sharing one campus" },
  { value: photographedFacilities.length, label: "Spaces photographed here" },
  { value: 2, label: "Laboratories · science and computer" },
  { value: 1, label: "Library on the grounds" },
] as const;

export const facilityWhy = [
  {
    title: "Rooms that change with age",
    text: "Nursery rooms are scaled for small children. Primary needs focused study. Secondary needs subject depth. The campus holds all three under one name.",
    icon: BookOpen,
  },
  {
    title: "Quiet study and practical work",
    text: "The library supports reading and research. The science laboratory is where senior pupils do practical work. Both belong to the academic day.",
    icon: FlaskConical,
  },
  {
    title: "Grounds for a full school day",
    text: "The playing ground is for recreation and physical education. Prefects help keep daily life orderly. The campus is a working school.",
    icon: Trees,
  },
] as const;
