import React from 'react';
import { BedDouble, DoorOpen, Sofa, Hammer } from 'lucide-react';

const services = [
  {
    icon: <BedDouble className="w-10 h-10 text-gold-400" />,
    title: "Bedrooms",
    description: "Complete bedroom sets crafted to your exact dimensions and style — from minimalist modern to classic elegance. We design and build every piece to fit your space perfectly."
  },
  {
    icon: <DoorOpen className="w-10 h-10 text-gold-400" />,
    title: "Wardrobes",
    description: "Custom built-in and freestanding wardrobes with smart storage solutions. Choose your layout, finish, and hardware for a wardrobe that works as beautifully as it looks."
  },
  {
    icon: <Hammer className="w-10 h-10 text-gold-400" />,
    title: "Custom Furniture",
    description: "Have a unique vision? We bring it to life. From dining rooms and sideboards to TV units and shelving — fully bespoke pieces tailored to your home and taste."
  },
  {
    icon: <Sofa className="w-10 h-10 text-gold-400" />,
    title: "Sofas",
    description: "Handcrafted sofas designed around your comfort and aesthetic. Select your fabric, color, size, and configuration for a piece that defines your living space."
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold-400 font-bold tracking-widest uppercase text-sm mb-2 block">What We Offer</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-900">
            Our Services
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto font-light">
            Every piece we create is built from scratch, designed around your space, and delivered with full installation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col"
            >
              <div className="flex justify-center mb-5">
                <div className="p-4 bg-gray-50 rounded-lg">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-dark-900 mb-3 text-center">{service.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed text-center">{service.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
