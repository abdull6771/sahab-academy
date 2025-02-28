
import React from "react";
import { BookOpen, GraduationCap, MapPin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-cream">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <div className="inline-block px-3 py-1 rounded-full bg-maroon/10 text-maroon font-medium text-sm tracking-wide mb-4">
            About Our School
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            A Center of Excellence in Education
          </h2>
          <p className="text-lg text-gray-600">
            SAHAB Academy is committed to providing high-quality education that nurtures both 
            academic excellence and character development in a safe, supportive environment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative animate-slide-right">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-maroon to-maroon-light opacity-30 blur-xl"></div>
            <div className="relative h-[400px] rounded-2xl glass-card overflow-hidden">
              {/* This would be an image in a real implementation */}
              <div className="w-full h-full flex items-center justify-center p-8 bg-white/90">
                <div className="text-center">
                  <div className="maroon-gradient inline-flex p-4 rounded-full mb-4">
                    <BookOpen className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Vision</h3>
                  <p className="text-gray-600">
                    To be a leading educational institution that empowers students with knowledge, 
                    skills, and values to excel in a rapidly changing world.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h3>
              <p className="text-gray-600">
                Founded with a vision to provide quality education to the children of Babura 
                Local Government and beyond, SAHAB Academy has grown to become one of the most 
                respected educational institutions in Jigawa State. Our commitment to excellence 
                has made us a trusted choice for parents seeking quality education for their children.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: <MapPin className="h-6 w-6 text-maroon" />,
                  title: "Location",
                  description: "Babura Local Government, Jigawa State, Nigeria"
                },
                {
                  icon: <GraduationCap className="h-6 w-6 text-maroon" />,
                  title: "Levels",
                  description: "Nursery, Primary, and Secondary Sections"
                }
              ].map((item, index) => (
                <div key={index} className="flex space-x-4">
                  <div className="bg-maroon/10 w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
