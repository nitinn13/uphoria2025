import React from 'react';
import { Heart, ExternalLink } from 'lucide-react';
import campa from '../assets/sponsors/CAMPA.png';
import ganna from '../assets/sponsors/GAANA.png';
import gaming from '../assets/sponsors/GAMING PARTNER.png';
import pulse from '../assets/sponsors/PULSE.png';
import safar from '../assets/sponsors/SAFAR.png';
import secret from '../assets/sponsors/SECRET TEMPTATION.png';
import sk from '../assets/sponsors/SK.png';
import unstop from '../assets/sponsors/UNSTOP.png';

interface Sponsor {
  name: string;
  image: string;
  website: string;
}

const sponsors: Sponsor[] = [
  {
    name: 'Campa',
    image: campa,
    website: 'https://example.com'
  },
  {
    name: 'Ganna',
    image: ganna,
    website: 'https://example.com'
  },
  {
    name: 'Gaming',
    image: gaming,
    website: 'https://example.com'
  },
  {
    name: 'Pulse',
    image: pulse,
    website: 'https://example.com'
  },
  {
    name: 'Safar',
    image: safar,
    website: 'https://example.com'
  },
  {
    name: 'Secret',
    image: secret,
    website: 'https://example.com'
  },
  {
    name: 'SK',
    image: sk,
    website: 'https://example.com'
  },
  {
    name: 'Unstop',
    image: unstop,
    website: 'https://example.com'
  }
];

const Sponsors = () => {
  return (
    <div className="min-h-screen  pt-20 pb-12">
      {/* Floating Hearts Background */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <Heart
            key={i}
            className={`absolute text-pink-500/10 animate-float-${i % 3}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 2 + 1}rem`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-20" data-aos="fade-up">
          <h1 className="text-6xl font-bold mb-6 font-colombo">
            Our Sponsors
          </h1>
          <p className="text-xl text-pink-200 max-w-2xl mx-auto">
            Meet the amazing partners who help make Uphoria possible. Their support drives our passion for creating unforgettable experiences.
          </p>
        </div>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Card Container */}
              <div className="relative bg-white/5 backdrop-blur-md rounded-xl overflow-hidden">
                {/* Animated Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                
                {/* Image Container */}
                <div className="aspect-square">
                  <img
                    src={sponsor.image}
                    alt={sponsor.name}
                    className="w-full h-full  transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-900/90 via-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    {/* <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      <h3 className="text-2xl font-bold text-white mb-2">{sponsor.name}</h3>
                      <a
                        href={sponsor.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-pink-200 hover:text-white transition-colors"
                      >
                        <span>Visit Website</span>
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;