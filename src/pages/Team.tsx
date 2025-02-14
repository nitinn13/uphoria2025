import React from 'react';
import { Heart, Github, Linkedin, Mail, ExternalLink, Users } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  category: 'core' | 'tech' | 'design' | 'events' | 'pr' | 'logistics';
}

const teamMembers: TeamMember[] = [
  {
    name: 'Aditya Kumar',
    role: 'Festival Coordinator',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5',
    category: 'core'
  },
  {
    name: 'Aditya Kumar',
    role: 'Festival Coordinator',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5',
    category: 'core'
  },
  {
    name: 'Aditya Kumar',
    role: 'Festival Coordinator',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5',
    category: 'core'
  },
  {
    name: 'Priya Singh',
    role: 'Technical Head',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    category: 'tech'
  },
  {
    name: 'Priya Singh',
    role: 'Technical Head',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    category: 'tech'
  },
  {
    name: 'Priya Singh',
    role: 'Technical Head',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    category: 'tech'
  },
  {
    name: 'Priya Singh',
    role: 'Technical Head',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    category: 'tech'
  },
  {
    name: 'Priya Singh',
    role: 'Technical Head',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    category: 'tech'
  },
  {
    name: 'Priya Singh',
    role: 'Technical Head',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    category: 'tech'
  },
  {
    name: 'Rahul Sharma',
    role: 'Design Lead',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7',
    category: 'design'
  },
];

const categories = [
  { id: 'core', name: 'Core Team', icon: Users },
  { id: 'tech', name: 'Tech Team', icon: Users },
  { id: 'design', name: 'Design Team', icon: Users },
  { id: 'events', name: 'Events Team', icon: Users },
  { id: 'pr', name: 'PR Team', icon: Users },
  { id: 'logistics', name: 'Logistics Team', icon: Users }
];

const Team = () => {
  return (
    <div className="min-h-screen pt-20 pb-12 text-white">
      {/* Floating Hearts Background */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(70)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-pink-500/10 animate-pulse"
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
        <div className="text-center mb-20">
          <h1 className="text-6xl font-bold mb-6 font-colombo">Meet Our Team</h1>
          <p className="text-xl text-pink-200 max-w-2xl mx-auto">
            The passionate individuals behind Uphoria who work tirelessly to make this festival an unforgettable experience.
          </p>
        </div>

        {categories.map((category) => {
          const categoryMembers = teamMembers.filter(member => member.category === category.id);
          if (categoryMembers.length === 0) return null;

          return (
            <div key={category.id} className="mb-8">
              {/* Category Header */}
              <div className="relative mb-12 flex justify-center items-center">
                <div className="border-t border-pink-500/30 flex-grow"></div>
                <div className="px-4 mx-2  flex items-center space-x-3">
                  <category.icon className="h-8 w-8 text-pink-400" />
                  <h2 className="text-3xl font-bold text-pink-100">{category.name}</h2>
                </div>
                <div className="border-t border-pink-500/30 flex-grow"></div>
              </div>

              {/* Team Members Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {categoryMembers.map((member, index) => (
                  <div key={index} className="relative bg-gray-900/50 backdrop-blur-lg border border-gray-700 shadow-md rounded-xl overflow-hidden w-64 transition-all duration-500 hover:shadow-pink-500/50 hover:-translate-y-1 hover:rotate-1">
                  {/* Image Container */}
                  <div className="relative h-56 w-full overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                    />
                
                    {/* Smooth Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-all duration-500"></div>
                  </div>
                
                  {/* Footer with Name & Role (Always Visible) */}
                  <div className="p-3 bg-gray-900/80 backdrop-blur-md text-center">
                    <h3 className="text-md font-semibold text-white">{member.name}</h3>
                    <p className="text-xs text-pink-300">{member.role}</p>
                
                    
                  </div>
                </div>
                
                ))}
              </div>
            </div>
          );
        })}

        
      </div>
    </div>
  );
};

export default Team;
