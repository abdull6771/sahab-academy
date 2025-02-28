
import React from "react";
import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Users } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-24 lg:pt-32 pb-16 md:pb-20 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-3 py-1 rounded-full bg-maroon/10 text-maroon font-medium text-sm tracking-wide">
              Excellence in Education
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
              Welcome to <span className="text-maroon">SAHAB</span> Academy Nursery & Primary School
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              Providing quality education in Babura Local Government, Jigawa State, Nigeria. 
              Nurturing young minds across Nursery, Primary, and Secondary sections.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-maroon hover:bg-maroon-dark text-white">
                Enroll Now
              </Button>
              <Button variant="outline" className="border-maroon text-maroon hover:bg-maroon/5">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-maroon-dark to-maroon-light opacity-30 blur-xl"></div>
            <div className="relative w-full h-[350px] md:h-[450px] bg-cream rounded-2xl overflow-hidden glass-card">
              {/* This would be an image in a real implementation */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <BookOpen className="w-16 h-16 text-maroon mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-gray-800">Shaping Future Leaders</h3>
                  <p className="text-gray-600 mt-2 px-8">Quality education in a nurturing environment</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 md:mt-20">
          {[
            {
              icon: <GraduationCap className="h-8 w-8 text-maroon" />,
              title: "Qualified Teachers",
              description: "Our dedicated staff ensures the highest standards of education."
            },
            {
              icon: <BookOpen className="h-8 w-8 text-maroon" />,
              title: "Quality Curriculum",
              description: "Comprehensive learning that prepares students for the future."
            },
            {
              icon: <Users className="h-8 w-8 text-maroon" />,
              title: "Supportive Environment",
              description: "Creating a nurturing space where every child can thrive."
            }
          ].map((feature, index) => (
            <div 
              key={index} 
              className="p-6 rounded-xl glass-card transition-all duration-300 hover:shadow-lg animate-slide-up"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="bg-maroon/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
