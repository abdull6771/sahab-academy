import { academics } from "./academics";
import { studentImages } from "./gallery";

const nursery = academics.find((s) => s.slug === "nursery");

if (!nursery) {
  throw new Error("Nursery academic data is missing.");
}

export const nurseryPage = {
  ...nursery,
  audiences: [
    { id: "families", label: "For families", href: "#families" },
    { id: "teach", label: "How we teach", href: "#teach" },
    { id: "day", label: "A nursery day", href: "#day" },
    { id: "children", label: "Children", href: "#children" },
    { id: "campus", label: "Play & rooms", href: "#campus" },
  ],
  activities: [
    {
      id: "play",
      title: "Play and discovery",
      feature: nursery.features[0],
      detail:
        "Learning starts with the child. Teachers follow curiosity through guided play so small children feel safe enough to try.",
      tone: "peach" as const,
      icon: "sparkles",
    },
    {
      id: "letters",
      title: "Letters and numbers",
      feature: nursery.features[1],
      detail:
        "Basic literacy and numeracy grow through song, story, and counting games — not through long desks of drill.",
      tone: "sky" as const,
      icon: "book",
    },
    {
      id: "friends",
      title: "Friends and feelings",
      feature: nursery.features[2],
      detail:
        "Sharing, waiting, and speaking kindly are part of the work. Social and emotional growth is watched as closely as letters.",
      tone: "lilac" as const,
      icon: "heart",
    },
    {
      id: "safe",
      title: "A safe place to grow",
      feature: nursery.features[3],
      detail:
        "The rooms and grounds are stimulating and watchful. Familiar staff keep the day calm enough for young children.",
      tone: "leaf" as const,
      icon: "shield",
    },
  ],
  day: [
    {
      n: "1",
      title: "Welcome",
      text: "Children arrive to familiar faces and a calm start — so the day feels safe to enter.",
    },
    {
      n: "2",
      title: "Song, story, play",
      text: "Literacy and number come through story, song, and guided play, at a pace small children can hold.",
    },
    {
      n: "3",
      title: "Friends",
      text: "Time with others: taking turns, speaking, and learning how to belong in a group.",
    },
    {
      n: "4",
      title: "Rest and close",
      text: "The day ends as gently as it began, so children leave ready to return tomorrow.",
    },
  ],
  pupils: studentImages.map((s) => ({
    id: s.id,
    name: s.title,
    caption: s.caption,
    src: s.src,
  })),
  facilityCards: [
    {
      title: nursery.facilities[0],
      text: "Rooms meant for small children, not copied from the senior school.",
      src: "/images/campus/classrooms.jpg",
      alt: "A classroom at Sahab Academy",
    },
    {
      title: nursery.facilities[1],
      text: "Outdoor space for recreation, movement, and play.",
      src: "/images/campus/playground.jpg",
      alt: "Playing ground at Sahab Academy",
    },
    {
      title: nursery.facilities[2],
      text: "Teachers who know the children and keep the day familiar.",
      src: "/images/campus/entrance.jpg",
      alt: "Arrival at Sahab Academy",
    },
  ],
};
