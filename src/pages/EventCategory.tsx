import React from 'react';
import { useParams } from 'react-router-dom';
import { Heart } from 'lucide-react';

const eventData = {
  music: [
    { name: 'Bars Mayhem',
       prize: '₹100,000', description: 'Spit fire, drop beats, and own the stage!',
       link: "https://unstop.com/p/spitfire-rap-uphoria-2025-bennett-university-bu-greater-noida-1368348" },
    { name: 'Rockmania',
       prize: '₹50,000', description: 'Guitar clash, drums roar—only the best band will soar!', 
       link: "https://unstop.com/p/rockmania-battle-of-bands-uphoria-2025-bennett-university-bu-greater-noida-1368337" },
    { name: 'Beatbrawl',
       prize: '₹75,000', description: 'No instruments, just pure vocal magic!',
       link: "https://unstop.com/p/beatforge-beatboxing-uphoria-2025-bennett-university-bu-greater-noida-1368299" },
    { name: 'Mridang',
       prize: '₹75,000', description: 'Let your instrument speak louder than words!',
       link: "https://unstop.com/p/mridang-solo-instrumental-uphoria-2025-bennett-university-bu-greater-noida-1368248" },
    { name: 'Reverb',
       prize: '₹75,000', description: 'From pop to rock, own the stage with your melody!',
       link: "https://unstop.com/p/reverb-western-solo-singing-uphoria-2025-bennett-university-bu-greater-noida-1368319" },
    { name: 'Aaroh',
       prize: '₹75,000', description: 'Timeless melodies, soulful renditions—make tradition come alive!',
       link: "https://unstop.com/p/aaroh-indian-solo-singing-uphoria-2025-bennett-university-bu-greater-noida-1368230" },
  ],
  dance: [
    { name: 'Chandrakala',
       prize: '₹150,000', description: 'Celebrate culture through mesmerizing classical and folk performances!',
       link: "https://unstop.com/p/chandrakala-solo-classical-dance-uphoria-2025-bennett-university-bu-greater-noida-1367948" },
    { name: 'Nrityakala',
       prize: '₹50,000', description: 'Celebrate India vibrant culture through rhythm and grace!',
       link: "https://unstop.com/p/nrityakala-clasical-group-dance-uphoria-2025-bennett-university-bu-greater-noida-1367947" },
    { name: 'Groove Wars',
       prize: '₹75,000', description: 'Sync, groove, and ignite the stage with pure energy!',
       link: "https://unstop.com/p/groove-wars-uphoria-2025-bennett-university-bu-greater-noida-1367866" },
    { name: 'Beat Blitz',
       prize: '₹75,000', description: 'From hip-hop to jazz, every move tells a story—who will captivate the stage?',
       link: "https://unstop.com/p/beat-blitz-uphoria-2025-bennett-university-bu-greater-noida-1367850" },
    { name: 'Freestyle Frenzy',
       prize: '₹75,000', description: 'Dance with heart, battle with spirit, and claim the crown!',
       link: "https://unstop.com/p/freestyle-frenzy-uphoria-2025-bennett-university-bu-greater-noida-1367872" },
    { name: 'Kalaa Sangam',
       prize: '₹75,000', description: 'Two styles, one performance—where creativity and grace collide!',
       link: "https://unstop.com/p/kalaa-sangam-duet-classical-dance-uphoria-2025-bennett-university-bu-greater-noida-1368650" },
  ],
  drama: [
    { name: 'Mime',
       prize: '₹150,000', description: 'Speak Volumes Without Saying a Word!',
       link: "https://unstop.com/p/mime-uphoria-2025-bennett-university-bu-greater-noida-1367925" },
    { name: 'Improvleela',
       prize: '₹50,000', description: 'Where Every Second Sparks a New Story!',
       link: "https://unstop.com/p/improvleela-uphoria-2025-bennett-university-bu-greater-noida-1367922" },
    { name: 'Aagaz',
       prize: '₹75,000', description: 'Echoing Social Change, One Act at a Time!',
       link: "https://unstop.com/p/aagaz-uphoria-2025-bennett-university-bu-greater-noida-1367876" },
    { name: 'Abhinay',
       prize: '₹75,000', description: 'The Art of One, The Power of Many!',
       link: "https://unstop.com/p/abhinay-uphoria-2025-bennett-university-bu-greater-noida-1367916" },
    { name: 'Rangmanch',
       prize: '₹75,000', description: 'Theatre Redefined—Original or Classic, Only the Best Survive!',
       link: "https://unstop.com/p/rangmanch-uphoria-2025-bennett-university-bu-greater-noida-1367918" },
  ],
  arts: [
    { name: 'Mandala Art',
       prize: '₹150,000', description: "Spin Your Imagination into Stunning Symmetry—It’s Mandala Magic!",
       link: "https://unstop.com/p/mandala-art-bennett-university-bu-greater-noida-1368448" },
    { name: 'Portraits Unplugged',
       prize: '₹50,000', description: 'Not Just a Pretty Face—Sketching Emotion, Depth, and Character!' ,
       link: "https://unstop.com/p/portraits-unplugged-portrait-bennett-university-bu-greater-noida-1368456"},
    { name: 'Sketching',
       prize: '₹75,000', description: 'Where Every Line Tells a Story—Sketch, Shade, and Stun!',
       link: "https://unstop.com/p/sketching-bennett-university-bu-greater-noida-1368463" },
    { name: 'Doodling',
       prize: '₹75,000', description: 'Ink Outside the Box—Because Great Stories Start with a Doodle!',
       link: "https://unstop.com/p/doodling-uphoria-2025-bennett-university-bu-greater-noida-1368414" },
    { name: 'Fusion Frames',
       prize: '₹75,000', description: "Collage Your Creativity—Because One Medium Just Isn’t Enough!",
       link: "https://unstop.com/p/fusion-frames-canvas-painting-bennett-university-bu-greater-noida-1368430" },
  ],
  fashion: [
    { name: 'Supernova',
       prize: '₹150,000', description: 'Lights, runway, fashion—time to own the spotlight!',
       link: "https://unstop.com/p/supernova-uphoria-2025-bennett-university-bu-greater-noida-1367938" },
    { name: 'Mr. and Mrs. Uphoria',
       prize: '₹50,000', description: 'Charm, confidence, and charisma—who will take the crown?',
       link: "https://unstop.com/p/mr-and-ms-uphoria-uphoria-2025-bennett-university-bu-greater-noida-1367945" },
  ],
  gaming: [
    { name: 'BGMI',
       prize: '₹150,000', description: 'Squad up, drop in, and fight for glory!',
       link: "https://unstop.com/events/bgmi-uphoria-2025-bennett-university-bu-greater-noida-1367748" },
    { name: 'Tekken',
       prize: '₹50,000', description: 'Unleash your combos and claim victory in the ultimate showdown!',
       link: "https://unstop.com/events/tekken-uphoria-2025-bennett-university-bu-greater-noida-1367935" },
    { name: 'VPL',
       prize: '₹75,000', description: 'Lock, load, and dominate the battlefield!',
       link: "https://unstop.com/events/vpl-uphoria-2025-bennett-university-bu-greater-noida-1367933" },
    { name: 'FIFA',
       prize: '₹75,000', description: 'Unleash your football gaming skills and rule the pitch!',
       link: "https://unstop.com/events/fifa-uphoria-2025-bennett-university-bu-greater-noida-1367929" },
  ],
  literary: [
    { name: 'Playoff and Popcorns',
       prize: '₹150,000', description: 'Lights, Quiz, Action! Dive into Popcorn and Playoff!',
       link: "https://unstop.com/events/playoff-and-popcorns-sports-and-entertainment-quiz-uphoria-2025-bennett-university-bu-greater-noida-1368658" },
    { name: 'Just A Minute',
       prize: '₹50,000', description: 'Blink and you will miss it—Just-a-Minute where every second counts!',
       link: "https://unstop.com/events/just-a-minute-english-uphoria-2025-bennett-university-bu-greater-noida-1368362" },
    { name: 'Opinionated 2.0',
       prize: '₹75,000', description: 'Unfiltered. Unscripted. Unstoppable—welcome to Opinionated!',
       link: "https://unstop.com/events/opinionated-debate-uphoria-2025-bennett-university-bu-greater-noida-1368663" },
    { name: 'Poetry(Hindi)',
       prize: '₹75,000', description: '',
       link: "https://unstop.com/events/poetry-hindi-uphoria-2025-bennett-university-bu-greater-noida-1368389" },
    { name: 'Poetry(Eng)',
       prize: '₹75,000', description: 'Poetry that roars—step into the world!',
       link: "https://unstop.com/events/poetry-english-uphoria-2025-bennett-university-bu-greater-noida-1368372" },
    { name: 'Once Upon A Spotlight',
       prize: '₹75,000', description: '',
       link: "https://unstop.com/events/once-upon-a-spotlight-story-telling-uphoria-2025-bennett-university-bu-greater-noida-1369875" },
  ],
  photography: [
    { name: 'Pixel Perfect',
       prize: '₹150,000', description: 'Turning Ideas into Stunning Visuals!',
       link: "https://unstop.com/events/pixel-perfect-offline-graphic-designing-uphoria-2025-bennett-university-bu-greater-noida-1367873" },
    { name: 'Impromptu Frames',
       prize: '₹50,000', description: 'Three Days, Infinite Frames—Your Shot to Shine!',
       link: "https://unstop.com/events/impromptu-frames-uphoria-2025-bennett-university-bu-greater-noida-1367857" },
    { name: 'Page To Picture',
       prize: '₹75,000', description: 'Reimagining Stories Through the Lens of Creativity!',
       link: "https://unstop.com/events/page-to-picture-uphoria-2025-bennett-university-bu-greater-noida-1367870"},
  ],
  astronomy: [
    { name: 'Stellar Vision',
       prize: '₹150,000', description: 'Reach for the stars, Reimagine the cosmos—StellarVision is where visionaries unite!',
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