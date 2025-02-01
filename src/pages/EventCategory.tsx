import React from 'react';
import { useParams } from 'react-router-dom';
import { Heart } from 'lucide-react';

const eventData = {
  music: [
    { name: 'Spitfire', prize: '₹100,000', description: 'Show your rap skills' },
    { name: 'Rockmania', prize: '₹50,000', description: 'Showcase your band\'s talent' },
    { name: 'Beatforge', prize: '₹75,000', description: 'Let your voice shine ' },
    { name: 'Mridang', prize: '₹75,000', description: 'Let your voice shine ' },
    { name: 'Reverb', prize: '₹75,000', description: 'Let your voice shine ' },
    { name: 'Aaroh', prize: '₹75,000', description: 'Let your voice shine ' },
  ],
  dance: [
    { name: 'Chandrakala', prize: '₹150,000', description: 'Choreograph your way to victory' },
    { name: 'Nrityakala', prize: '₹50,000', description: 'Dance your heart out' },
    { name: 'Groove Wars', prize: '₹75,000', description: 'Show your street style' },
    { name: 'Beat Blitz', prize: '₹75,000', description: 'Show your street style' },
    { name: 'Freestyle Frenzy', prize: '₹75,000', description: 'Show your street style' },
    { name: 'Kalaa Sangam', prize: '₹75,000', description: 'Show your street style' },
  ],
  drama: [
    { name: 'Mime', prize: '₹150,000', description: 'Choreograph your way to victory' },
    { name: 'Improvleela', prize: '₹50,000', description: 'Dance your heart out' },
    { name: 'Aagaz', prize: '₹75,000', description: 'Show your street style' },
    { name: 'Abhinay', prize: '₹75,000', description: 'Show your street style' },
    { name: 'Rangmanch', prize: '₹75,000', description: 'Show your street style' },
  ],
  arts: [
    { name: 'Mandala Art', prize: '₹150,000', description: 'Choreograph your way to victory' },
    { name: 'Portraits Unplugged', prize: '₹50,000', description: 'Dance your heart out' },
    { name: 'Sketching', prize: '₹75,000', description: 'Show your street style' },
    { name: 'Doodling', prize: '₹75,000', description: 'Show your street style' },
    { name: 'Fusion Frames', prize: '₹75,000', description: 'Show your street style' },
  ],
  fashion: [
    { name: 'Supernova', prize: '₹150,000', description: 'Choreograph your way to victory' },
    { name: 'Mr. and Mrs. Uphoria', prize: '₹50,000', description: 'Dance your heart out' },
  ],
  gaming: [
    { name: 'BGMI', prize: '₹150,000', description: 'Choreograph your way to victory' },
    { name: 'Tekken', prize: '₹50,000', description: 'Dance your heart out' },
    { name: 'VPL', prize: '₹75,000', description: 'Show your street style' },
    { name: 'FIFA', prize: '₹75,000', description: 'Show your street style' },
  ],
  literary: [
    { name: 'Playoff and Popcorns', prize: '₹150,000', description: 'Choreograph your way to victory' },
    { name: 'JAM(Eng)', prize: '₹50,000', description: 'Dance your heart out' },
    { name: 'Opinionated', prize: '₹75,000', description: 'Show your street style' },
    { name: 'Poetry(Hindi)', prize: '₹75,000', description: 'Show your street style' },
    { name: 'Poetry(Eng)', prize: '₹75,000', description: 'Show your street style' },
    { name: 'Once Upon A Spotlight', prize: '₹75,000', description: 'Show your street style' },
  ],
  photography: [
    { name: 'Pixel Perfect', prize: '₹150,000', description: 'Choreograph your way to victory' },
    { name: 'Impromptu Frames', prize: '₹50,000', description: 'Dance your heart out' },
    { name: 'Page To Picture', prize: '₹75,000', description: 'Show your street style' },
  ],
  astronomy: [
    { name: 'Stellar Vision', prize: '₹150,000', description: 'Choreograph your way to victory' },
  ],

  // Add more categories as needed
};

const EventCategory = () => {
  const { categoryId } = useParams();
  const events = eventData[categoryId as keyof typeof eventData] || [];

  return (
    <div className=" min-h-screen bg-gradient-to-b from-pink-900 to-purple-900">
      {/* Parallax Header */}
      <div className="relative h-[20vh] flex items-center justify-center overflow-hidden">
        
        <h1 className="relative z-10 text-4xl md:text-6xl font-bold text-center capitalize text-pink-100">
          {categoryId} Events
        </h1>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="relative bg-white/10 backdrop-blur-md rounded-lg p-6 transform hover:scale-105 transition-all border border-pink-500/30"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Heart className="absolute top-4 right-4 h-5 w-5 text-pink-400" />
              <h3 className="text-xl font-bold mb-2 text-pink-100">{event.name}</h3>
              <p className="text-pink-400 font-semibold mb-2">Prize: {event.prize}</p>
              <p className="text-pink-200/80">{event.description}</p>
              <button className="mt-4 w-full bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors">
                Register Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventCategory;