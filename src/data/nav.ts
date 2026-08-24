export type NavChild = {
  label: string;
  href: string;
  description?: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Story", href: "/about#story", description: "How the school serves Babura" },
      { label: "Leadership", href: "/about#leadership", description: "The proprietor and the school’s direction" },
      { label: "Vision & Mission", href: "/about#vision", description: "What we work toward each day" },
    ],
  },
  {
    label: "Academics",
    href: "/academics/primary",
    children: [
      { label: "Nursery", href: "/academics/nursery", description: "First years of school" },
      { label: "Primary", href: "/academics/primary", description: "Core learning and character" },
      { label: "Secondary", href: "/academics/secondary", description: "Depth, guidance, and next steps" },
    ],
  },
  { label: "Admissions", href: "/admissions" },
  {
    label: "Campus Life",
    href: "/campus",
    children: [
      { label: "Facilities", href: "/campus#facilities", description: "Classrooms, library, lab, and grounds" },
      { label: "Gallery", href: "/campus#gallery", description: "Photographs of school life" },
    ],
  },
  { label: "Alumni", href: "/alumni" },
  { label: "Contact", href: "/contact" },
];

export const footerExplore = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Admissions", href: "/admissions" },
  { label: "Campus Life", href: "/campus" },
  { label: "Alumni", href: "/alumni" },
  { label: "Contact", href: "/contact" },
];

export const footerAcademics = [
  { label: "Nursery", href: "/academics/nursery" },
  { label: "Primary", href: "/academics/primary" },
  { label: "Secondary", href: "/academics/secondary" },
  { label: "Apply now", href: "/admissions" },
];

export const applyHref = "/admissions#enquire";
