import React from 'react';
import { useParams } from 'react-router-dom';
import { Heart } from 'lucide-react';

const eventData = {
  music: [
    { name: 'Spitfire',
       prize: '₹100,000', description: 'Show your rap skills',
       link: "https://unstop.com/p/spitfire-rap-uphoria-2025-bennett-university-bu-greater-noida-1368348" },
    { name: 'Rockmania',
       prize: '₹50,000', description: 'Showcase your band\'s talent', 
       link: "https://unstop.com/p/rockmania-battle-of-bands-uphoria-2025-bennett-university-bu-greater-noida-1368337" },
    { name: 'Beatforge',
       prize: '₹75,000', description: 'Let your voice shine ',
       link: "https://unstop.com/p/beatforge-beatboxing-uphoria-2025-bennett-university-bu-greater-noida-1368299" },
    { name: 'Mridang',
       prize: '₹75,000', description: 'Let your voice shine ',
       link: "https://unstop.com/p/mridang-solo-instrumental-uphoria-2025-bennett-university-bu-greater-noida-1368248" },
    { name: 'Reverb',
       prize: '₹75,000', description: 'Let your voice shine ',
       link: "https://unstop.com/p/reverb-western-solo-singing-uphoria-2025-bennett-university-bu-greater-noida-1368319" },
    { name: 'Aaroh',
       prize: '₹75,000', description: 'Let your voice shine ',
       link: "https://unstop.com/p/aaroh-indian-solo-singing-uphoria-2025-bennett-university-bu-greater-noida-1368230" },
  ],
  dance: [
    { name: 'Chandrakala',
       prize: '₹150,000', description: 'Choreograph your way to victory',
       link: "https://unstop.com/p/chandrakala-solo-classical-dance-uphoria-2025-bennett-university-bu-greater-noida-1367948" },
    { name: 'Nrityakala',
       prize: '₹50,000', description: 'Dance your heart out',
       link: "https://unstop.com/p/nrityakala-clasical-group-dance-uphoria-2025-bennett-university-bu-greater-noida-1367947" },
    { name: 'Groove Wars',
       prize: '₹75,000', description: 'Show your street style',
       link: "https://unstop.com/p/groove-wars-uphoria-2025-bennett-university-bu-greater-noida-1367866" },
    { name: 'Beat Blitz',
       prize: '₹75,000', description: 'Show your street style',
       link: "https://unstop.com/p/beat-blitz-uphoria-2025-bennett-university-bu-greater-noida-1367850" },
    { name: 'Freestyle Frenzy',
       prize: '₹75,000', description: 'Show your street style',
       link: "https://unstop.com/p/freestyle-frenzy-uphoria-2025-bennett-university-bu-greater-noida-1367872" },
    { name: 'Kalaa Sangam',
       prize: '₹75,000', description: 'Show your street style',
       link: "https://unstop.com/p/kalaa-sangam-duet-classical-dance-uphoria-2025-bennett-university-bu-greater-noida-1368650" },
  ],
  drama: [
    { name: 'Mime',
       prize: '₹150,000', description: 'Choreograph your way to victory',
       link: "https://unstop.com/p/mime-uphoria-2025-bennett-university-bu-greater-noida-1367925" },
    { name: 'Improvleela',
       prize: '₹50,000', description: 'Dance your heart out',
       link: "https://unstop.com/p/improvleela-uphoria-2025-bennett-university-bu-greater-noida-1367922" },
    { name: 'Aagaz',
       prize: '₹75,000', description: 'Show your street style',
       link: "https://unstop.com/p/aagaz-uphoria-2025-bennett-university-bu-greater-noida-1367876" },
    { name: 'Abhinay',
       prize: '₹75,000', description: 'Show your street style',
       link: "https://unstop.com/p/abhinay-uphoria-2025-bennett-university-bu-greater-noida-1367916" },
    { name: 'Rangmanch',
       prize: '₹75,000', description: 'Show your street style',
       link: "https://unstop.com/p/rangmanch-uphoria-2025-bennett-university-bu-greater-noida-1367918" },
  ],
  arts: [
    { name: 'Mandala Art',
       prize: '₹150,000', description: 'Choreograph your way to victory',
       link: "https://unstop.com/p/mandala-art-bennett-university-bu-greater-noida-1368448" },
    { name: 'Portraits Unplugged',
       prize: '₹50,000', description: 'Dance your heart out' ,
       link: "https://unstop.com/p/portraits-unplugged-portrait-bennett-university-bu-greater-noida-1368456"},
    { name: 'Sketching',
       prize: '₹75,000', description: 'Show your street style',
       link: "https://unstop.com/p/sketching-bennett-university-bu-greater-noida-1368463" },
    { name: 'Doodling',
       prize: '₹75,000', description: 'Show your street style',
       link: "https://unstop.com/p/doodling-uphoria-2025-bennett-university-bu-greater-noida-1368414" },
    { name: 'Fusion Frames',
       prize: '₹75,000', description: 'Show your street style',
       link: "https://unstop.com/p/fusion-frames-canvas-painting-bennett-university-bu-greater-noida-1368430" },
  ],
  fashion: [
    { name: 'Supernova',
       prize: '₹150,000', description: 'Choreograph your way to victory',
       link: "https://unstop.com/p/supernova-uphoria-2025-bennett-university-bu-greater-noida-1367938" },
    { name: 'Mr. and Mrs. Uphoria',
       prize: '₹50,000', description: 'Dance your heart out',
       link: "https://unstop.com/p/mr-and-ms-uphoria-uphoria-2025-bennett-university-bu-greater-noida-1367945" },
  ],
  gaming: [
    { name: 'BGMI',
       prize: '₹150,000', description: 'Choreograph your way to victory',
       link: "https://unstop.com/events/bgmi-uphoria-2025-bennett-university-bu-greater-noida-1367748" },
    { name: 'Tekken',
       prize: '₹50,000', description: 'Dance your heart out',
       link: "https://unstop.com/events/tekken-uphoria-2025-bennett-university-bu-greater-noida-1367935" },
    { name: 'VPL',
       prize: '₹75,000', description: 'Show your street style',
       link: "https://unstop.com/events/vpl-uphoria-2025-bennett-university-bu-greater-noida-1367933" },
    { name: 'FIFA',
       prize: '₹75,000', description: 'Show your street style',
       link: "https://unstop.com/events/fifa-uphoria-2025-bennett-university-bu-greater-noida-1367929" },
  ],
  literary: [
    { name: 'Playoff and Popcorns',
       prize: '₹150,000', description: 'Choreograph your way to victory',
       link: "https://unstop.com/events/playoff-and-popcorns-sports-and-entertainment-quiz-uphoria-2025-bennett-university-bu-greater-noida-1368658" },
    { name: 'JAM(Eng)',
       prize: '₹50,000', description: 'Dance your heart out',
       link: "https://unstop.com/events/just-a-minute-english-uphoria-2025-bennett-university-bu-greater-noida-1368362" },
    { name: 'Opinionated 2.0',
       prize: '₹75,000', description: 'Show your street style',
       link: "https://unstop.com/events/opinionated-debate-uphoria-2025-bennett-university-bu-greater-noida-1368663" },
    { name: 'Poetry(Hindi)',
       prize: '₹75,000', description: 'Show your street style',
       link: "https://unstop.com/events/poetry-hindi-uphoria-2025-bennett-university-bu-greater-noida-1368389" },
    { name: 'Poetry(Eng)',
       prize: '₹75,000', description: 'Show your street style',
       link: "https://unstop.com/events/poetry-english-uphoria-2025-bennett-university-bu-greater-noida-1368372" },
    { name: 'Once Upon A Spotlight',
       prize: '₹75,000', description: 'Show your street style',
       link: "https://unstop.com/events/once-upon-a-spotlight-story-telling-uphoria-2025-bennett-university-bu-greater-noida-1369875" },
  ],
  photography: [
    { name: 'Pixel Perfect',
       prize: '₹150,000', description: 'Choreograph your way to victory',
       link: "https://unstop.com/events/pixel-perfect-offline-graphic-designing-uphoria-2025-bennett-university-bu-greater-noida-1367873" },
    { name: 'Impromptu Frames',
       prize: '₹50,000', description: 'Dance your heart out',
       link: "https://unstop.com/events/impromptu-frames-uphoria-2025-bennett-university-bu-greater-noida-1367857" },
    { name: 'Page To Picture',
       prize: '₹75,000', description: 'Show your street style',
       link: "https://unstop.com/events/page-to-picture-uphoria-2025-bennett-university-bu-greater-noida-1367870"},
  ],
  astronomy: [
    { name: 'Stellar Vision',
       prize: '₹150,000', description: 'Choreograph your way to victory',
       link: "https://unstop.com/events/stellar-vision-uphoria-2025-bennett-university-bu-greater-noida-1367697" },
  ],

  // Add more categories as needed
};

const EventCategory = () => {
  const { categoryId } = useParams();
  const events = eventData[categoryId as keyof typeof eventData] || [];

  return (
    <div className=" min-h-screen ">
      {/* Parallax Header */}
      <div className="relative h-[20vh] flex items-center justify-center overflow-hidden">
        
        <h1 className="relative z-10 text-4xl md:text-6xl font-bold font-colombo text-center capitalize text-pink-100">
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
              <h3 className="text-xl font-bold font-colombo mb-2 text-pink-100">{event.name}</h3>
              <p className="text-pink-400 font-semibold mb-2">Prize: {event.prize}</p>
              <p className="text-pink-200/80">{event.description}</p>
              <a href={event.link} target="_blank" rel="noopener noreferrer">

              
              <button className="mt-4 w-full bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors">
                Register Now
              </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventCategory;