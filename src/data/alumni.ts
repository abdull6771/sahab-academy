export type Alumnus = {
  id: number;
  name: string;
  university: string;
  course: string;
  graduationYear: string;
  image?: string;
};

export const alumni: Alumnus[] = [
  {
    id: 1,
    name: "Abdullahi Ahmad",
    university: "Ahmadu Bello University Zaria",
    course: "Computer Science",
    graduationYear: "2024",
    image: "/images/alumni/Abdullahi_Ahmad.jpeg",
  },
  {
    id: 2,
    name: "Jamilu Idris",
    university: "Sule Lamido University Kafin Hausa",
    course: "Bsc. Chemistry",
    graduationYear: "2022",
    image: "/images/alumni/jamilu.jpeg",
  },
  {
    id: 3,
    name: "Ibrahim Habibu Tade",
    university: "Federal University Dutse",
    course: "Bsc. Computer Science",
    graduationYear: "2023",
    image: "/images/alumni/ibrahimh.jpeg",
  },
  {
    id: 4,
    name: "Aisha Mustapha",
    university: "Jigawa State College of Nursing and Midwifery Birnin Kudu",
    course: "Nursing",
    graduationYear: "2018",
    image: "/images/alumni/halima_yusuf.jpeg",
  },
  {
    id: 5,
    name: "Aisha Shafiu",
    university: "Bayero University Kano",
    course: "Bachelor of Medicine and Surgery",
    graduationYear: "2024",
    image: "/images/alumni/suleiman_ahmad.jpeg",
  },
  {
    id: 6,
    name: "Abba Aliyu Haruna",
    university: "Federal University Dutse",
    course: "Bsc. BioTechnology",
    graduationYear: "2021",
  },
  {
    id: 7,
    name: "Umma Salma Sani",
    university: "Northwest University Kano",
    course: "Bsc. Anatomy",
    graduationYear: "2024",
  },
  {
    id: 8,
    name: "Isah Aminu",
    university: "Ahmadu Bello University Zaria",
    course: "BEng. Building",
    graduationYear: "2024",
  },
  {
    id: 9,
    name: "Khalipha Hamisu",
    university: "Sule Lamido University Kafin Hausa",
    course: "Bsc. Computer Science",
    graduationYear: "2022",
  },
  {
    id: 10,
    name: "Khadijah Ahmad",
    university: "Jigawa State College of Remedial and Advanced Studies Babura",
    course: "ND Public Health",
    graduationYear: "2025",
    image: "/images/alumni/khadija_ahmad.jpeg",
  },
];

const placeFromUniversity: [string, string][] = [
  ["Zaria", "Zaria"],
  ["Kafin Hausa", "Kafin Hausa"],
  ["Dutse", "Dutse"],
  ["Birnin Kudu", "Birnin Kudu"],
  ["Kano", "Kano"],
  ["Babura", "Babura"],
];

export function alumniPlace(university: string) {
  return placeFromUniversity.find(([needle]) => university.includes(needle))?.[1] ?? university;
}

export const alumniYears = [...new Set(alumni.map((a) => a.graduationYear))].sort();
export const alumniCourses = [...new Set(alumni.map((a) => a.course))].sort((a, b) =>
  a.localeCompare(b)
);
export const alumniPlaces = [...new Set(alumni.map((a) => alumniPlace(a.university)))].sort();
export const alumniUniversities = [...new Set(alumni.map((a) => a.university))].sort((a, b) =>
  a.localeCompare(b)
);

export const alumniStats = {
  listed: alumni.length,
  institutions: alumniUniversities.length,
  fields: alumniCourses.length,
  firstYear: alumniYears[0] ?? "",
  latestYear: alumniYears[alumniYears.length - 1] ?? "",
};

/** Destinations to feature — real people from the list, not invented awards. */
export const spotlightIds = [5, 4, 1] as const;
