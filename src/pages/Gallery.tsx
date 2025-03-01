
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const Gallery = () => {
  // Animation variants for images
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16 container-custom">
        <h1 className="text-3xl md:text-4xl font-bold text-maroon text-center mb-2">
          Our School Gallery
        </h1>
        <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
          Explore our vibrant school community through these snapshots of our campus,
          students, and events that make Sahab Academy special.
        </p>

        <Tabs defaultValue="school" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="school">School Campus</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="prefects">School Prefects</TabsTrigger>
            <TabsTrigger value="facilities">Facilities</TabsTrigger>
          </TabsList>

          <TabsContent value="school">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <motion.div key={`school-${item}`} variants={itemVariants} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src={`https://source.unsplash.com/featured/?school,building,classroom,library,${item}`}
                    alt={`School campus image ${item}`}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="students">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <motion.div key={`student-${item}`} variants={itemVariants} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src={`https://source.unsplash.com/featured/?student,education,learning,children,${item}`}
                    alt={`Students image ${item}`}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="prefects">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {[
                { name: "Aisha Muhammad", role: "Head Girl", id: 1 },
                { name: "Ibrahim Yusuf", role: "Head Boy", id: 2 },
                { name: "Fatima Ahmed", role: "Assistant Head Girl", id: 3 },
                { name: "Usman Abdullahi", role: "Assistant Head Boy", id: 4 },
                { name: "Amina Hassan", role: "Library Prefect", id: 5 },
                { name: "Yusuf Suleiman", role: "Sports Prefect", id: 6 },
              ].map((prefect) => (
                <motion.div key={`prefect-${prefect.id}`} variants={itemVariants} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src={`https://source.unsplash.com/featured/?student,portrait,uniform,${prefect.id}`}
                    alt={`${prefect.name} - ${prefect.role}`}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-4 bg-white">
                    <h3 className="font-bold text-maroon">{prefect.name}</h3>
                    <p className="text-gray-600">{prefect.role}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="facilities">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {[
                { name: "School Library", description: "Our well-stocked library provides a quiet space for research and reading.", id: 1 },
                { name: "Computer Lab", description: "Modern computer facilities to develop essential digital skills.", id: 2 },
                { name: "Staff Room", description: "A dedicated space for our committed teachers and staff.", id: 3 },
                { name: "Student Playing Ground", description: "Spacious outdoor area for recreation and physical education.", id: 4 },
              ].map((facility) => (
                <motion.div key={`facility-${facility.id}`} variants={itemVariants} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src={`https://source.unsplash.com/featured/?school,${facility.name.toLowerCase().replace(' ', '')},education,${facility.id}`}
                    alt={facility.name}
                    className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-5 bg-white">
                    <h3 className="font-bold text-maroon text-xl mb-2">{facility.name}</h3>
                    <p className="text-gray-600">{facility.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Gallery;
