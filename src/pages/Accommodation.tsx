import React from 'react';
import { Heart, Calendar, MapPin, AlertCircle, ExternalLink } from 'lucide-react';
import { div } from 'framer-motion/client';
import Navbar from '../components/Navbar';

const accommodationEvents = [
  { day: 1, date: "15th February", unstopLink: "https://unstop.com/p/accomodation-day-1-uphoria-2025-bennett-university-bu-greater-noida-1369745" , artist: "Prom Night & DJ Night"},
  { day: 2, date: "16th February", unstopLink: "https://unstop.com/p/accomodation-day-2-uphoria-2025-bennett-university-bu-greater-noida-1369767" , artist: "Bollywood Artist Night"},
  { day: 3, date: "17th February", unstopLink: "https://unstop.com/p/accommodation-day-3-uphoria-2025-bennett-university-bu-greater-noida-1369772" , artist: "Bollywood Artist Night"}
];

const Accommodation = () => {
  return (
    <div className='overflow-hidden'>
      {/* <Navbar/> */}
    <div className="min-h-screen pt-7 pb-12 px-4 sm:px-6 md:px-8">
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

      <div className="container mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-6 font-colombo">
          Accommodation
        </h1>

        <div className="max-w-5xl mx-auto">
          {/* Horizontal Scrollable Info Cards */}
          <div className="overflow-x-auto">
            <div className="flex space-x-4 sm:grid sm:grid-cols-3 snap-x snap-mandatory">
              {[
                {
                  icon: <MapPin className="h-8 w-8 text-pink-400 mb-4" />,
                  title: "Location",
                  text: "Bennett University Campus Hostels, with 24/7 security and amenities",
                },
                {
                  icon: <Calendar className="h-8 w-8 text-pink-400 mb-4" />,
                  title: "Duration",
                  text: "15th - 17th February",
                },
                {
                  icon: <AlertCircle className="h-8 w-8 text-pink-400 mb-4" />,
                  title: "Price",
                  text: "₹900 per day including meals and basic amenities",
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-pink-500/30 min-w-[90%] sm:min-w-0 snap-start"
                >
                  {item.icon}
                  <h3 className="text-lg sm:text-xl font-semibold text-pink-100 mb-2">{item.title}</h3>
                  <p className="text-pink-200">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Day-wise Registration Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {accommodationEvents.map((event) => (
              <div
                key={event.day}
                className="group relative bg-white/10 backdrop-blur-md rounded-lg p-6 border border-pink-500/30 overflow-hidden"
                data-aos="fade-up"
              >
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-pink-100">Day {event.day}</h3>
                    <Calendar className="h-6 w-6 text-pink-400" />
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-pink-200">{event.date}</p>
                    <div className="flex flex-col space-y-2">
                      <span className="text-pink-200 text-sm">Includes:</span>
                      <ul className="text-pink-200/80 text-sm list-disc list-inside">
                        <li>Accommodation</li>
                        <li>Breakfast & Dinner</li>
                        <li>{event.artist}</li>
                      </ul>
                    </div>
                    
                    <a
                      href={event.unstopLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity group"
                    >
                      <span>Register on Unstop</span>
                      <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div className="mt-12 bg-white/10 backdrop-blur-md rounded-lg p-6 border border-pink-500/30">
            <h3 className="text-lg sm:text-xl font-semibold text-pink-100 mb-4">Important Notes</h3>
            <ul className="list-disc list-inside space-y-2 text-pink-200">
              <li>Registration is separate for each day</li>
              <li>Limited slots available on first-come-first-serve basis</li>
              <li>Valid college ID is mandatory at check-in</li>
              <li>Cancellation policy applies as per Unstop guidelines</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Accommodation;
