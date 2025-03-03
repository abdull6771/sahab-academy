import React from "react";

const Welcome = () => {
  return (
    <section id="welcome" className="section-padding bg-maroon">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-slide-right">
            <div className="space-y-6 text-white">
              <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-white font-medium text-sm tracking-wide">
                Proprietor's Welcome
              </div>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                A Message from Hajiya Halima Halima Isyaku
              </h2>
              <div className="w-20 h-1 bg-white/30 rounded-full"></div>
              <blockquote className="text-white/90 text-lg italic">
                "Welcome to SAHAB Academy, where we are committed to nurturing
                the potential of every child. Our vision is to create a learning
                environment that fosters academic excellence, character
                development, and a love for lifelong learning. At SAHAB Academy,
                we believe that every child deserves the best education
                possible, and we work tirelessly to provide that. We invite you
                to join our community and experience the difference that quality
                education can make in your child's life."
              </blockquote>
              <p className="font-semibold text-white">
                Hajiya Halima Halima Isyaku
              </p>
              <p className="text-white/80 -mt-4">Proprietor, SAHAB Academy</p>
            </div>
          </div>

          <div
            className="order-1 lg:order-2 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-white/20 opacity-70 blur-xl"></div>
              <div className="relative h-[350px] md:h-[450px] bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 flex items-center justify-center">
                <img
                  src="/images/alumni/hajiya.jpg"
                  alt="Hajiya Halima Halima Isyaku"
                  className="w-1000 h-full object-contain rounded-2xl"

                  // className="w-[600px] h-[800px] object-cover hover:scale-105 transition-transform duration-500 rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
