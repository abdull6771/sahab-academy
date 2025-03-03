import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Gallery = () => {
  // Animation variants for images
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };
  // Alumni Data with Local Images

  const alumni = [
    {
      name: "Abdullahi Ahmad",
      university: "Ahmadu Bello University Zaria",
      study: "Computer Science",
      graduationYear: "2024",
      image: "/images/alumni/Abdullahi_Ahmad.jpeg",
      id: 1,
    },
    {
      name: "Jamilu Idris",
      university: "Sule Lamido University Kafin Hausa",
      study: "Bsc. Chemistry",
      graduationYear: "2022",
      image: "/images/alumni/zainab_umar.jpeg",
      id: 2,
    },
    {
      name: "Ibrahim Habibu Tanko",
      university: "Federal University Dutse",
      study: "Bsc. Computer Science",
      graduationYear: "2023",
      image: "/images/alumni/mohammed_abdullah.jpeg",
      id: 3,
    },
    {
      name: "Aisha Mustapha",
      university: "Jigawa State College of Nursing and Midwifery Birnin Kudu",
      study: "Nursing",
      graduationYear: "2018",
      image: "/images/alumni/halima_yusuf.jpeg",
      id: 4,
    },
    {
      name: "Aisha Shafiu",
      university: "Bayero University Kano",
      study: "Bachelor of Medicine and Surgery",
      graduationYear: "2024",
      image: "/images/alumni/suleiman_ahmad.jpeg",
      id: 5,
    },
    {
      name: "Abba Aliyu Haruna",
      university: "Federal University Dutse",
      study: "Bsc. BioTechnology",
      graduationYear: "2021",
      image: "/images/alumni/aisha_bello.jpeg",
      id: 6,
    },
    {
      name: "Umma Salma Sani",
      university: "Northwest University Kano",
      study: "Bsc. Anatomy",
      graduationYear: "2024",
      image: "/images/alumni/aisha_bello.jpeg",
      id: 7,
    },
    {
      name: "Isah Aminu",
      university: "Ahmadu Bello University Zaria",
      study: "BEng. Building",
      graduationYear: "202",
      image: "/images/alumni/aisha_bello.jpeg",
      id: 8,
    },
    {
      name: "Khalipha Hamisu",
      university: "Sule Lamido University Kafin Hausa",
      study: "Bsc. Computer Science",
      graduationYear: "2022",
      image: "/images/alumni/aisha_bello.jpeg",
      id: 9,
    },
  ];

  // Prefects Data with Local Images
  const prefects = [
    {
      name: "Aisha Muhammad",
      role: "Head Girl",
      id: 1,
      image: "/images/prefects/head_girl.jpg",
    },
    {
      name: "Ibrahim Yusuf",
      role: "Head Boy",
      id: 2,
      image: "/images/prefects/head_boy.jpg",
    },
    {
      name: "Fatima Ahmed",
      role: "Assistant Head Girl",
      id: 3,
      image: "/images/prefects/assistant_head_girl.jpg",
    },
    {
      name: "Usman Abdullahi",
      role: "Assistant Head Boy",
      id: 4,
      image: "/images/prefects/assistant_head_boy.jpg",
    },
    {
      name: "Amina Hassan",
      role: "Library Prefect",
      id: 5,
      image: "/images/prefects/library_prefect.jpg",
    },
    {
      name: "Yusuf Suleiman",
      role: "Sports Prefect",
      id: 6,
      image: "/images/prefects/sports_prefect.jpg",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-16 container-custom">
        <div className="mb-6">
          <Link to="/">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft size={16} />
              Back to Home
            </Button>
          </Link>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-maroon text-center mb-2">
          Our School Gallery
        </h1>
        <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
          Explore our vibrant school community through these snapshots of our
          campus, students, and events that make Sahab Academy special.
        </p>

        <Tabs defaultValue="school" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="school">School Campus</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="prefects">School Prefects</TabsTrigger>
            <TabsTrigger value="facilities">Facilities</TabsTrigger>
            <TabsTrigger value="alumni">Alumni</TabsTrigger>
          </TabsList>

          {/* School Campus Section */}
          <TabsContent value="school">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {[
                {
                  name: "Main Building",
                  id: 1,
                  image: "/images/campus/main_building.jpg",
                },
                {
                  name: "School Entrance",
                  id: 2,
                  image: "/images/campus/entrance.jpg",
                },
                {
                  name: "Classrooms",
                  id: 3,
                  image: "/images/campus/classrooms.jpg",
                },
                { name: "Library", id: 4, image: "/images/campus/library.jpg" },
                {
                  name: "Playground",
                  id: 5,
                  image: "/images/campus/playground.jpg",
                },
                {
                  name: "Science Lab",
                  id: 6,
                  image: "/images/campus/science_lab.jpg",
                },
              ].map((campus) => (
                <motion.div
                  key={`campus-${campus.id}`}
                  variants={itemVariants}
                  className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={campus.image}
                    alt={campus.name}
                    width={400}
                    height={300}
                    className="w-[400px] h-[300px] object-cover hover:scale-105 transition-transform duration-500 rounded-lg"
                  />
                  <div className="p-4 bg-white">
                    <h3 className="font-bold text-maroon">{campus.name}</h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          {/* Students Section */}
          <TabsContent value="students">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {[
                {
                  name: "Aliyu Musa",
                  id: 1,
                  image: "/images/students/aliyu.jpg",
                },
                {
                  name: "Zainab Umar",
                  id: 2,
                  image: "/images/students/zainab.jpg",
                },
                {
                  name: "Abdullahi Ismail",
                  id: 3,
                  image: "/images/students/abdullahi.jpg",
                },
                {
                  name: "Maryam Sani",
                  id: 4,
                  image: "/images/students/maryam.jpg",
                },
                {
                  name: "Khalid Ibrahim",
                  id: 5,
                  image: "/images/students/khalid.jpg",
                },
                {
                  name: "Hauwa Bello",
                  id: 6,
                  image: "/images/students/hauwa.jpg",
                },
              ].map((student) => (
                <motion.div
                  key={`student-${student.id}`}
                  variants={itemVariants}
                  className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={student.image}
                    alt={student.name}
                    width={300}
                    height={400}
                    className="w-[300px] h-[400px] object-cover hover:scale-105 transition-transform duration-500 rounded-lg"
                  />
                  <div className="p-4 bg-white">
                    <h3 className="font-bold text-maroon">{student.name}</h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          {/* School Prefects Section with Local Images */}
          <TabsContent value="prefects">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {prefects.map((prefect) => (
                <motion.div
                  key={`prefect-${prefect.id}`}
                  variants={itemVariants}
                  className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  {/* <img
                    src={prefect.image} // Local image path
                    alt={`${prefect.name} - ${prefect.role}`}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  /> */}
                  <img
                    src={prefect.image} // Local image path
                    alt={`${prefect.name} - ${prefect.role}`}
                    width={300} // Set explicit width
                    height={400} // Set explicit height
                    className="w-[300px] h-[400px] object-cover hover:scale-105 transition-transform duration-500 rounded-lg"
                  />

                  <div className="p-4 bg-white">
                    <h3 className="font-bold text-maroon">{prefect.name}</h3>
                    <p className="text-gray-600">{prefect.role}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          {/* School Facilities Section */}
          <TabsContent value="facilities">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {[
                {
                  name: "School Library",
                  description:
                    "Our well-stocked library provides a quiet space for research and reading.",
                  id: 1,
                },
                {
                  name: "Computer Lab",
                  description:
                    "Modern computer facilities to develop essential digital skills.",
                  id: 2,
                },
                {
                  name: "Staff Room",
                  description:
                    "A dedicated space for our committed teachers and staff.",
                  id: 3,
                },
                {
                  name: "Student Playing Ground",
                  description:
                    "Spacious outdoor area for recreation and physical education.",
                  id: 4,
                },
              ].map((facility) => (
                <motion.div
                  key={`facility-${facility.id}`}
                  variants={itemVariants}
                  className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={`https://source.unsplash.com/featured/?school,${facility.name
                      .toLowerCase()
                      .replace(" ", "")},education,${facility.id}`}
                    alt={facility.name}
                    className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-5 bg-white">
                    <h3 className="font-bold text-maroon text-xl mb-2">
                      {facility.name}
                    </h3>
                    <p className="text-gray-600">{facility.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            {/* { <TabsContent value="alumni"> */}
          </TabsContent>
          <TabsContent value="alumni">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {alumni.map((alumnus) => (
                <motion.div
                  key={`alumni-${alumnus.id}`}
                  variants={itemVariants}
                  className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={alumnus.image}
                    alt={alumnus.name}
                    width={300}
                    height={400}
                    className="w-[300px] h-[400px] object-cover hover:scale-105 transition-transform duration-500 rounded-lg"
                  />
                  <div className="p-5 bg-white">
                    <h3 className="font-bold text-maroon text-xl mb-1">
                      {alumnus.name}
                    </h3>
                    <p className="text-gray-600">{alumnus.university}</p>
                    <p className="text-gray-600">{alumnus.study}</p>
                    <p className="text-gray-500">
                      Class of {alumnus.graduationYear}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          {/* <TabsContent value="alumni">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {[
                {
                  name: "Abdullahi Ibrahim",
                  university: "Oxford University",
                  study: "Computer Science",
                  graduationYear: "2018",
                  id: 1,
                },
                {
                  name: "Zainab Umar",
                  university: "Harvard University",
                  study: "Medicine",
                  graduationYear: "2017",
                  id: 2,
                },
                {
                  name: "Mohammed Abdullah",
                  university: "Stanford University",
                  study: "Business Administration",
                  graduationYear: "2019",
                  id: 3,
                },
                {
                  name: "Halima Yusuf",
                  university: "MIT",
                  study: "Electrical Engineering",
                  graduationYear: "2018",
                  id: 4,
                },
                {
                  name: "Suleiman Ahmad",
                  university: "Cambridge University",
                  study: "International Relations",
                  graduationYear: "2020",
                  id: 5,
                },
                {
                  name: "Aisha Bello",
                  university: "Yale University",
                  study: "Law",
                  graduationYear: "2019",
                  id: 6,
                },
              ].map((alumni) => (
                <motion.div
                  key={`alumni-${alumni.id}`}
                  variants={itemVariants}
                  className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={`https://source.unsplash.com/featured/?graduate,student,professional,${alumni.id}`}
                    alt={`${alumni.name}`}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-5 bg-white">
                    <h3 className="font-bold text-maroon text-xl mb-1">
                      {alumni.name}
                    </h3>
                    <div className="flex items-center mb-1">
                      <span className="text-gray-700 font-medium">
                        University:
                      </span>
                      <span className="text-gray-600 ml-2">
                        {alumni.university}
                      </span>
                    </div>
                    <div className="flex items-center mb-1">
                      <span className="text-gray-700 font-medium">
                        Field of Study:
                      </span>
                      <span className="text-gray-600 ml-2">{alumni.study}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-700 font-medium">
                        Class of:
                      </span>
                      <span className="text-gray-600 ml-2">
                        {alumni.graduationYear}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent> */}
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Gallery;
