import React from 'react';
import { Award, Truck, PenTool, Clock } from 'lucide-react';

const features = [
  {
    icon: <Award className="w-8 h-8 text-gold-400" />,
    title: "Premium Materials",
    description: "We work with top-tier materials to ensure exceptional craftsmanship and durability."
  },
  {
    icon: <PenTool className="w-8 h-8 text-gold-400" />,
    title: "Tailor-Made Design",
    description: "Every piece is carefully crafted to match your specific preferences and dimensions."
  },
  {
    icon: <Truck className="w-8 h-8 text-gold-400" />,
    title: "Delivery & Install",
    description: "We offer delivery and professional installation across Kosovo and neighboring countries."
  },
  {
    icon: <Clock className="w-8 h-8 text-gold-400" />,
    title: "7+ Years Experience",
    description: "A dedicated team of professionals transforming ideas into elegant reality since 2016."
  }
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div>
            <span className="text-gold-400 font-bold tracking-widest uppercase text-sm mb-2 block">Who We Are</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-900 mb-6">
              About Mansory Mobilje
            </h2>
            <div className="prose prose-lg text-gray-600 mb-8">
              <p className="mb-4">
                Mansory Mobilje is a custom furniture manufacturer based in Ferizaj, Kosovo, specializing in the design, production, and installation of high-quality, tailor-made furniture for residential and commercial spaces.
              </p>
              <p className="mb-4">
                We create a wide range of solutions, including bedrooms, wardrobes, custom-designed sofas, dining rooms, and sideboards. From the initial concept to final delivery, we ensure transparent communication and the highest standards of quality.
              </p>
              <p>
                All you need to do is choose your preferred design, colors, and materials—our experienced team will take care of everything else.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-gray-50 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-dark-900">{feature.title}</h4>
                    <p className="text-sm text-gray-500 mt-1">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gold-100 rounded-tl-3xl -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-full h-24 bg-gray-50 -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2027&auto=format&fit=crop" 
              alt="Workshop Craftsman" 
              className="rounded-lg shadow-2xl w-full h-[600px] object-cover"
            />
            <div className="absolute bottom-10 left-[-20px] bg-white p-6 shadow-xl rounded-r-lg border-l-4 border-gold-400 max-w-xs hidden md:block">
              <p className="font-serif italic text-xl text-dark-900">"Transforming ideas into functional and elegant furniture."</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};