import React, { useEffect, useState, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Music, Drum as Dance, Palette, Theater, Clapperboard, Camera, Gamepad, BookOpen, Telescope, Heart, Loader, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from '../assets/text 49.svg';
import date from '../assets/dates/Group 2.svg';
import month from '../assets/dates/February 2025.svg';
import prizepool from '../assets/Frame 11.svg';
import Navbar from '../components/Navbar';
import Explore from '../components/Explore';
import LeftFlowersParallax from '../components/Flower';
import RightFlowersParallax from '../components/FlowerRotated';
import Timeline from '../components/Timeline';

// Move Artists to lazy loading only
const Artists = lazy(() => import('../components/Artists'));

const categories = [
  { id: 'music', name: 'Music', icon: Music, description: 'From classical to contemporary, showcase your musical talent' },
  { id: 'dance', name: 'Dance', icon: Dance, description: 'Express yourself through movement and rhythm' },
  { id: 'arts', name: 'Arts', icon: Palette, description: 'Let your creativity flow through visual arts' },
  { id: 'drama', name: 'Drama', icon: Theater, description: 'Bring stories to life on stage' },
  { id: 'fashion', name: 'Fashion', icon: Clapperboard, description: 'Walk the ramp and showcase your style' },
  { id: 'gaming', name: 'Gaming', icon: Gamepad, description: 'Compete in exciting gaming tournaments' },
  { id: 'literary', name: 'Literary', icon: BookOpen, description: 'Express yourself through words' },
  { id: 'photography', name: 'Photography', icon: Camera, description: 'Capture moments that tell stories' },
  { id: 'astronomy', name: 'Astronomy', icon: Telescope, description: 'Explore the wonders of the night sky' },
];


// Memoized components
const TimelineEvent = React.memo(({ event, eventIndex }) => (
  <div
    className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors"
    data-aos="fade-up"
    data-aos-delay={eventIndex * 50}
  >
    <div className="flex justify-between items-center">
      <span className="text-pink-400 font-semibold">{event.time}</span>
      <span className="text-sm text-pink-300">{event.category}</span>
    </div>
    <p className="text-lg font-semibold text-white mt-1">{event.name}</p>
  </div>
));

const CategoryCard = React.memo(({ category, index }) => (
  <Link
    to={`/category/${category.id}`}
    className="w-[calc(33.333%-1rem)] min-w-[300px] group"
    data-aos="fade-up"
    data-aos-delay={index * 50}
  >
    <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-lg border border-pink-500/30 h-full transform hover:scale-105 transition-all hover:bg-white/20">
      <div className="absolute -inset-[2px] bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-50 transition-opacity blur-sm" />
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
));

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
    // Initialize AOS with optimized settings
    AOS.init({
      duration: 600,
      once: true,
      disable: window.innerWidth < 768,
    });

    // Reduce initial loading time
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const scrollCategories = (direction) => {
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
      <LeftFlowersParallax />
      <RightFlowersParallax />
      

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-4 text-center mt-32">
        <div data-aos="fade-up" className="space-y-14">
          <div className="ml-7">
            <img src={logo} alt="Uphoria Logo" height={700} width={700} />
          </div>
          <div className="mt-6">
            <Explore />
          </div>
          <p className="max-w-3xl font-colombo text-xl animate-gradient-text pt-32">
            A melange of social and cultural activities filled with an adrenaline rush of participants across colleges, the magnum opus event of Bennett University rightfully stands up to its namesake, <strong>UPHORIA</strong>.
          </p>
          <div className="ml-7">
            <img src={prizepool} alt="Prize Pool" height={700} width={700} />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-10">
          <img src={date} alt="Dates" height={600} width={600} />
          <img src={month} alt="Month" height={400} width={400} />
        </div>
      </section>
      <Timeline />
      

      {/* Categories Section */}
      <section id="events" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold font-colombo text-center mb-12 text-pink-100" data-aos="fade-up">
            Event Categories
          </h2>
          <div className="relative max-w-6xl mx-auto" data-aos="fade-up">
            <button
              onClick={() => scrollCategories('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-pink-500/20 hover:bg-pink-500/40 p-2 rounded-full backdrop-blur-sm transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={() => scrollCategories('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-pink-500/20 hover:bg-pink-500/40 p-2 rounded-full backdrop-blur-sm transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
            <div id="categories-container" className="overflow-x-scroll overflow-y-hidden hide-scrollbar relative">
              <div className="flex gap-6 w-max px-4">
                {categories.map((category, index) => (
                  <CategoryCard key={category.id} category={category} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artists Section */}
      <Suspense fallback={<div>Loading artists...</div>}>
        <Artists />
      </Suspense>
    </div>
  );
};

export default Home;