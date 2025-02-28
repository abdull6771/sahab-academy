
import React from "react";
import { BookOpen, GraduationCap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const SectionCard = ({ 
  title, 
  description, 
  icon, 
  features, 
  delay 
}: { 
  title: string; 
  description: string; 
  icon: React.ReactNode; 
  features: string[];
  delay: number;
}) => {
  return (
    <div 
      className="rounded-xl overflow-hidden glass-card hover:shadow-lg transition-all duration-300 animate-slide-up"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="p-6">
        <div className="bg-maroon/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-2xl font-semibold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="bg-maroon/10 p-1 rounded-full mr-3 mt-1">
                <svg className="h-3 w-3 text-maroon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-600 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        <Button variant="outline" className="w-full border-maroon text-maroon hover:bg-maroon/5">
          Learn More
        </Button>
      </div>
    </div>
  );
};

const Sections = () => {
  const sections = [
    {
      title: "Nursery Section",
      description: "A foundation for lifelong learning in a nurturing environment.",
      icon: <Users className="h-8 w-8 text-maroon" />,
      features: [
        "Child-centered approach to learning",
        "Development of basic literacy and numeracy skills",
        "Focus on social and emotional development",
        "Safe and stimulating environment"
      ]
    },
    {
      title: "Primary Section",
      description: "Building knowledge and character through comprehensive education.",
      icon: <BookOpen className="h-8 w-8 text-maroon" />,
      features: [
        "Strong foundation in core subjects",
        "Development of critical thinking skills",
        "Character building activities",
        "Balanced academic and co-curricular programs"
      ]
    },
    {
      title: "Secondary Section",
      description: "Preparing students for higher education and future success.",
      icon: <GraduationCap className="h-8 w-8 text-maroon" />,
      features: [
        "Comprehensive curriculum aligned with national standards",
        "Specialized subject teachers",
        "Career guidance and counseling",
        "Leadership development opportunities"
      ]
    }
  ];

  return (
    <section id="sections" className="section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <div className="inline-block px-3 py-1 rounded-full bg-maroon/10 text-maroon font-medium text-sm tracking-wide mb-4">
            Our Educational Offerings
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Comprehensive Education at All Levels
          </h2>
          <p className="text-lg text-gray-600">
            SAHAB Academy provides quality education from nursery through secondary levels, 
            ensuring continuous growth and development for all our students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <SectionCard
              key={index}
              title={section.title}
              description={section.description}
              icon={section.icon}
              features={section.features}
              delay={0.1 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sections;
