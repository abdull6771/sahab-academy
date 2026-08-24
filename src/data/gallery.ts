export type GalleryCategory = "campus" | "students" | "prefects" | "facilities";

export type GalleryItem = {
  id: string;
  title: string;
  caption: string;
  src?: string;
  category: GalleryCategory;
  aspect: "landscape" | "portrait";
};

export const prefects = [
  {
    id: "prefect-1",
    name: "Aisha Muhammad",
    role: "Head Girl",
    image: "/images/prefects/head_girl.jpg",
  },
  {
    id: "prefect-2",
    name: "Ibrahim Yusuf",
    role: "Head Boy",
    image: "/images/prefects/head_boy.jpg",
  },
  {
    id: "prefect-3",
    name: "Fatima Ahmed",
    role: "Assistant Head Girl",
    image: "/images/prefects/assistant_head_girl.jpg",
  },
  {
    id: "prefect-4",
    name: "Usman Abdullahi",
    role: "Assistant Head Boy",
    image: "/images/prefects/assistant_head_boy.jpg",
  },
  {
    id: "prefect-5",
    name: "Amina Hassan",
    role: "Library Prefect",
    image: "/images/prefects/library_prefect.jpg",
  },
  {
    id: "prefect-6",
    name: "Yusuf Suleiman",
    role: "Sports Prefect",
    image: "/images/prefects/sports_prefect.jpg",
  },
] as const;

export const campusImages: GalleryItem[] = [
  {
    id: "campus-1",
    title: "Main building",
    caption: "The main school building on the Babura campus.",
    src: "/images/campus/main_building.jpg",
    category: "campus",
    aspect: "landscape",
  },
  {
    id: "campus-2",
    title: "School entrance",
    caption: "Arrival at Sahab Academy.",
    src: "/images/campus/entrance.jpg",
    category: "campus",
    aspect: "landscape",
  },
  {
    id: "campus-3",
    title: "Classrooms",
    caption: "Rooms prepared for daily teaching.",
    src: "/images/campus/classrooms.jpg",
    category: "campus",
    aspect: "landscape",
  },
  {
    id: "campus-4",
    title: "Library",
    caption: "The school library — a quiet place to read and study.",
    src: "/images/campus/library.jpg",
    category: "campus",
    aspect: "landscape",
  },
  {
    id: "campus-5",
    title: "Playing ground",
    caption: "Outdoor space for recreation and physical education.",
    src: "/images/campus/playground.jpg",
    category: "campus",
    aspect: "landscape",
  },
  {
    id: "campus-6",
    title: "Science laboratory",
    caption: "Practical science on campus.",
    src: "/images/campus/science_lab.jpg",
    category: "campus",
    aspect: "landscape",
  },
];

export const studentImages: GalleryItem[] = [
  {
    id: "student-1",
    title: "Aliyu Musa",
    caption: "A pupil of Sahab Academy.",
    src: "/images/students/aliyu.jpg",
    category: "students",
    aspect: "portrait",
  },
  {
    id: "student-2",
    title: "Zainab Umar",
    caption: "A pupil of Sahab Academy.",
    src: "/images/students/zainab.jpg",
    category: "students",
    aspect: "portrait",
  },
  {
    id: "student-3",
    title: "Abdullahi Ismail",
    caption: "A pupil of Sahab Academy.",
    src: "/images/students/abdullahi.jpg",
    category: "students",
    aspect: "portrait",
  },
  {
    id: "student-4",
    title: "Maryam Sani",
    caption: "A pupil of Sahab Academy.",
    src: "/images/students/maryam.jpg",
    category: "students",
    aspect: "portrait",
  },
  {
    id: "student-5",
    title: "Khalid Ibrahim",
    caption: "A pupil of Sahab Academy.",
    src: "/images/students/khalid.jpg",
    category: "students",
    aspect: "portrait",
  },
  {
    id: "student-6",
    title: "Hauwa Bello",
    caption: "A pupil of Sahab Academy.",
    src: "/images/students/hauwa.jpg",
    category: "students",
    aspect: "portrait",
  },
];

export const prefectImages: GalleryItem[] = prefects.map((p) => ({
  id: p.id,
  title: p.name,
  caption: `${p.role}, Sahab Academy.`,
  src: p.image,
  category: "prefects" as const,
  aspect: "portrait" as const,
}));

export const facilities: GalleryItem[] = [
  {
    id: "facility-1",
    title: "School Library",
    caption: "A quiet space for research and reading.",
    src: "/images/campus/library.jpg",
    category: "facilities",
    aspect: "landscape",
  },
  {
    id: "facility-2",
    title: "Computer Lab",
    caption: "A room for digital skills and supervised computer work.",
    category: "facilities",
    aspect: "landscape",
  },
  {
    id: "facility-3",
    title: "Staff Room",
    caption: "A dedicated space for teachers and staff.",
    category: "facilities",
    aspect: "landscape",
  },
  {
    id: "facility-4",
    title: "Playing Ground",
    caption: "Spacious outdoor area for recreation and physical education.",
    src: "/images/campus/playground.jpg",
    category: "facilities",
    aspect: "landscape",
  },
];

export const galleryItems: GalleryItem[] = [
  ...campusImages,
  ...studentImages,
  ...prefectImages,
  ...facilities,
];

export const galleryFilters: { id: "all" | GalleryCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "campus", label: "Campus" },
  { id: "students", label: "Students" },
  { id: "prefects", label: "Prefects" },
  { id: "facilities", label: "Facilities" },
];
