import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Music, Ambulance as Dance, Palette, Theater, Camera, Gamepad, BookOpen, Telescope, Heart, Loader, Calendar, ChevronLeft, ChevronRight, Magnet } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from '../assets/text 49.svg';
import date from '../assets/dates/Group 2.svg';
import month from '../assets/dates/February 2025.svg';
import prizepool from '../assets/Frame 11.svg';
import Artists from '../components/Artists';
import Navbar from '../components/Navbar';
import Explore from '../components/Explore';


const categories = [
  { id: 'music', name: 'Music', icon: Music, description: 'From classical to contemporary, showcase your musical talent' },
  { id: 'dance', name: 'Dance', icon: Dance, description: 'Express yourself through movement and rhythm' },
  { id: 'arts', name: 'Arts', icon: Palette, description: 'Let your creativity flow through visual arts' },
  { id: 'drama', name: 'Drama', icon: Theater, description: 'Bring stories to life on stage' },
  { id: 'fashion', name: 'Fashion', icon: Camera, description: 'Walk the ramp and showcase your style' },
  { id: 'gaming', name: 'Gaming', icon: Gamepad, description: 'Compete in exciting gaming tournaments' },
  { id: 'literary', name: 'Literary', icon: BookOpen, description: 'Express yourself through words' },
  { id: 'photography', name: 'Photography', icon: Camera, description: 'Capture moments that tell stories' },
  { id: 'astronomy', name: 'Astronomy', icon: Telescope, description: 'Explore the wonders of the night sky' },

];

const festSchedule = [
  {
    day: 1,
    date: "15th February",
    events: [
      { time: "9:00 AM", name: "Opening Ceremony", category: "Main Event" },
      { time: "9:00 AM", name: "Mega Mela", category: "Main Event" },
      { time: "9:00 AM", name: "Rockmania", category: "Main Event" },
      { time: "9:00 AM", name: "Nrityakala", category: "Main Event" },
      { time: "9:00 AM", name: "Dastayein", category: "Main Event" },
      { time: "9:00 AM", name: "BGMI", category: "Main Event" },
      { time: "9:00 AM", name: "Tekken", category: "Main Event" },
      { time: "9:00 AM", name: "VPL", category: "Main Event" },
      { time: "9:00 AM", name: "FIFA", category: "Main Event" },
      { time: "9:00 AM", name: "Stellar Vision", category: "Main Event" },
      { time: "9:00 AM", name: "Pixel Perfect", category: "Main Event" },
      { time: "9:00 AM", name: "Impromptu Frames", category: "Main Event" },
      { time: "11:00 AM", name: "Page to Picture", category: "Photography" },
      { time: "2:00 PM", name: "Chandrakala", category: "Dance" },
      { time: "4:00 PM", name: "Beat Brawl", category: "Photography" },
      { time: "7:00 PM", name: "Bars Mayhem", category: "Astronomy" },
      { time: "7:00 PM", name: "Kala Sangam", category: "Astronomy" },
      { time: "9:00 AM", name: "Prom", category: "Main Event" },
      { time: "9:00 AM", name: "DJ Night", category: "Main Event" },
    ]
  },
  {
    day: 2,
    date: "16th February",
    events: [
      { time: "10:00 AM", name: "Mega Mela", category: "Arts" },
      { time: "10:00 AM", name: "Mr. and Ms. Uphoria", category: "Arts" },
      { time: "10:00 AM", name: "Reverb", category: "Arts" },
      { time: "10:00 AM", name: "Aaroh", category: "Arts" },
      { time: "10:00 AM", name: "Mridang", category: "Arts" },
      { time: "10:00 AM", name: "Supernova", category: "Arts" },
      { time: "10:00 AM", name: "Aagaz", category: "Arts" },
      { time: "10:00 AM", name: "Rang Manch", category: "Arts" },
      { time: "10:00 AM", name: "Improv Leela", category: "Arts" },
      { time: "10:00 AM", name: "BGMI", category: "Arts" },
      { time: "9:00 AM", name: "Tekken", category: "Main Event" },
      { time: "9:00 AM", name: "VPL", category: "Main Event" },
      { time: "9:00 AM", name: "FIFA", category: "Main Event" },
      { time: "10:00 AM", name: "Popcorn & Playoffs", category: "Arts" },
      { time: "10:00 AM", name: "Quick Fire Quible", category: "Arts" },
      { time: "10:00 AM", name: "Bardic Battles", category: "Arts" },
      { time: "12:00 PM", name: "Mehfil E Alfaz", category: "Gaming" },
      { time: "3:00 PM", name: "Opinionated", category: "Fashion" },
      { time: "5:00 PM", name: "Poetry Slam", category: "Literary" },
      { time: "8:00 PM", name: "Bollywood Artist Night", category: "Drama" },
    ]
  },
  {
    day: 3,
    date: "17th February",
    events: [
      { time: "10:00 AM", name: "Groove Wars", category: "Music" },
      { time: "10:00 AM", name: "Portraits Unplugged", category: "Music" },
      { time: "10:00 AM", name: "Rang Manch", category: "Music" },
      { time: "10:00 AM", name: "Beat Blitz", category: "Music" },
      { time: "10:00 AM", name: "Freestyle Frenzy", category: "Music" },
      { time: "10:00 AM", name: "Doodling", category: "Music" },
      { time: "10:00 AM", name: "Fusion Frames", category: "Music" },
      { time: "10:00 AM", name: "Mandala Art Competition", category: "Music" },
      { time: "10:00 AM", name: "Isharo Isharo Mein", category: "Music" },
      { time: "10:00 AM", name: "Sketching Competition", category: "Music" },
      { time: "10:00 AM", name: "Musical", category: "Music" },
      { time: "1:00 PM", name: "Artist Night", category: "Dance" },
    ]
  }
];

const LoadingScreen = () => (
  <div className="fixed inset-0 bg-gradient-to-br from-pink-500 to-purple-900 z-50 flex items-center justify-center">
    <div className="relative">
      <Heart className="h-24 w-24 text-white animate-pulse" />
      <div className="absolute inset-0 flex items-center justify-center">
        <Loader className="h-12 w-12 text-white animate-spin" />
      </div>
    </div>
  </div>
);

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    setTimeout(() => setLoading(false), 2000);
  }, []);

  const scrollCategories = (direction: 'left' | 'right') => {
    const container = document.getElementById('categories-container');
    if (container) {
      const scrollAmount = container.clientWidth;
      const newPosition = direction === 'left'
        ? Math.max(0, scrollPosition - scrollAmount)
        : Math.min((categories.length - 3) * (scrollAmount / 3), scrollPosition + scrollAmount);

      container.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
      setScrollPosition(newPosition);
    }
  };

  if (loading) return <LoadingScreen />;

  return (

    <div className="overflow-hidden">
      <Navbar />
      {/* Floating Hearts Background */}
      <div className="fixed inset-0 pointer-events-none ">
        {[...Array(100)].map((_, i) => (
          <Heart
            key={i}
            className={`absolute text-pink-500/20 animate-float-${i % 3}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 2 + 1}rem`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-4 text-center mt-32">
        <div data-aos="fade-up">
          {/* Uncomment if the heart animation is needed */}
          {/* <div className="flex justify-center mb-6">
      <Heart className="h-20 w-20 text-white animate-heartbeat" />
    </div> */}

          <div className='ml-7'>
            <img src={logo} alt="Uphoria Logo" height={700} width={700} />
          </div>

          <div className="mt-6">
            <Explore />
          </div>

          <p className="mt-6 max-w-3xl font-colombo text-xl animate-gradient-text">
            A melange of social and cultural activities filled with an adrenaline rush of participants across colleges, the magnum opus event of Bennett University rightfully stands up to its namesake, <strong>UPHORIA</strong>.
          </p>
          <div className='ml-7'>
            <img src={prizepool} alt="Prize Pool" height={700} width={700} />
          </div>
        </div>
        <div className='flex flex-col items-center justify-center mt-10'>
          <img src={date} alt="Dates" height={600} width={600} />
          <img src={month} alt="Month" height={400} width={400} />
        </div>
      </section>


      {/* Festival Timeline Section */}
      {/* <section id="schedule" className="py-20 bg-gradient-to-b from-pink-900 to-purple-900 relative"> */}
      <section id="schedule" className="py-20 mt-20" >
        {/* <div className="absolute left-1/2 top-[20vh] bottom-0 w-1 bg-gradient-to-b from-pink-500/20 to-purple-500/20">
          <div className="timeline-progress absolute top-0 w-full bg-gradient-to-b from-pink-500 to-purple-500" style={{ height: '0%' }} />
        </div> */}

        <div className="container mx-auto px-4">
          <h2 className="text-6xl font-bold font-colombo text-center mb-20 text-pink-100" data-aos="fade-up">
            Uphoria Timeline
          </h2>

          <div className="relative space-y-24">
            {festSchedule.map((day, index) => (
              <div
                key={day.day}
                className={`group relative block ${index % 2 === 0 ? 'ml-auto pl-8' : 'mr-auto pr-8'} w-full md:w-[calc(50%-2rem)]`}
                data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
              >
                <div className="absolute top-0 -translate-y-1/2 w-8 h-8">
                  <div className="absolute w-4 h-4 bg-pink-500 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform" />
                  <div className="absolute w-8 h-8 bg-pink-500/30 rounded-full animate-ping" />
                </div>

                <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-pink-500/30">
                  <div className="flex justify-center items-center space-x-4 mb-4 text-center">
                    <Calendar className="h-8 w-8 text-pink-400" />
                    <div>
                      <h3 className="text-2xl font-bold text-pink-100 font-colombo ">Day {day.day}</h3>
                      <p className="text-pink-200">{day.date}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {day.events.map((event, eventIndex) => (
                      <div
                        key={eventIndex}
                        className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors"
                        data-aos="fade-up"
                        data-aos-delay={eventIndex * 100}
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-pink-400 font-semibold">{event.time}</span>
                          <span className="text-sm text-pink-300">{event.category}</span>
                        </div>
                        <p className="text-lg font-semibold text-white mt-1">{event.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Categories Section */}
      {/* <section id="events" className="py-20 bg-gradient-to-b from-purple-900 to-pink-900"> */}
      <section id="events" className="py-20 ">

        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold font-colombo text-center mb-12 text-pink-100" data-aos="fade-up">
            Event Categories
          </h2>

          <div className="relative max-w-6xl mx-auto" data-aos="fade-up">
            <button
              onClick={() => scrollCategories('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-pink-500/20 hover:bg-pink-500/40 p-2 rounded-full backdrop-blur-sm transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={() => scrollCategories('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-pink-500/20 hover:bg-pink-500/40 p-2 rounded-full backdrop-blur-sm transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            <div
              id="categories-container"
              className="overflow-x-scroll overflow-y-hidden hide-scrollbar relative"
            >
              <div className="flex gap-6 w-max px-4">
                {categories.map((category, index) => (
                  <Link
                    key={category.id}
                    to={`/category/${category.id}`}
                    className="w-[calc(33.333%-1rem)] min-w-[300px] group"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-lg border border-pink-500/30 h-full transform hover:scale-105 transition-all hover:bg-white/20">
                      <div className="absolute -inset-[2px] bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-50 transition-opacity blur-sm"></div>
                      <div className="relative">
                        <div className="flex items-center space-x-4 mb-4">
                          <category.icon className="h-10 w-10 text-pink-400" />
                          <h3 className="text-2xl font-semibold text-pink-100">{category.name}</h3>
                        </div>
                        <p className="text-pink-200/80 mb-4">{category.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-pink-400 text-sm">Click to explore events</span>
                          <Heart className="h-6 w-6 text-pink-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Artists />
      {/* <ScrollCards /> */}
    </div>
  );
};

export default Home;