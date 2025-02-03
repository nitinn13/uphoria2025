import React, { useState } from 'react';
import { Heart, Instagram} from 'lucide-react';
import rsoon from '../assets/artsist/rsoon.png';
import akash from '../assets/artsist/akash.jpg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaSpotify } from "react-icons/fa";



interface Artist {
    name: string;
    image: string;
    instagram: string;
    spotify: string;
    desc: string,
    day: number;
}

const artists: Artist[] = [
    {
        name: 'Akash',
        image: akash,
        instagram: 'https://www.instagram.com/akashlife',
        spotify: 'https://open.spotify.com',
        desc: 'description of artist',
        day: 1
    },
    {
        name: 'Revealing Soon',
        image: rsoon,
        instagram: 'https://www.instagram.com',
        spotify: 'https://open.spotify.com',
        desc: 'description of artist',
        day: 1
    },
    {
        name: 'Revealing Soon',
        image: rsoon,
        instagram: 'https://www.instagram.com',
        spotify: 'https://open.spotify.com',
        desc: 'description of artist',
        day: 2
    },
    {
        name: 'Revealing Soon',
        image: rsoon,
        instagram: 'https://www.instagram.com',
        spotify: 'https://open.spotify.com',
        desc: 'description of artist',
        day: 3
    }

];

const Artists = () => {
    const [selectedDay, setSelectedDay] = useState<number>(1);

    return (
        // <div className="min-h-screen bg-gradient-to-b from-pink-900 via-purple-900 to-pink-900 pt-20 pb-12">
        <div className="min-h-screen pt-20 pb-12">
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
                {/* Title */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8 font-colombo">
                    Artists
                </h1>

                {/* Day Filter */}
                <div className="flex justify-center mb-10">
                    <div className="bg-white/10 backdrop-blur-md rounded-full p-1 border border-pink-500/30">
                        {[1, 2, 3].map((day) => (
                            <button
                                key={day}
                                onClick={() => setSelectedDay(day)}
                                className={`px-6 py-2 sm:px-8 sm:py-3 rounded-full transition-all text-sm sm:text-base md:text-lg ${selectedDay === day
                                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
                                    : 'text-pink-200 hover:text-white'
                                    }`}
                            >
                                Day {day}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Artists Grid */}
                <div className="flex justify-center">
                    
                    <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
                        {artists
                            .filter((artist) => artist.day === selectedDay)
                            .map((artist, index) => (
                                <div
                                    key={index}
                                    className="relative group 
                   h-[40vh] sm:h-[45vh] md:h-[60vh] 
                   w-[90%] sm:w-[50%] md:w-[30vw] 
                   max-w-[400px] 
                   rounded-2xl overflow-hidden aspect-square"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    {/* Artist Image */}
                                    <img
                                        src={artist.image}
                                        alt={artist.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-pink-900/90 via-purple-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-around">
                                            <div>
                                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 font-colombo">
                                                    {artist.name}
                                                </h3>
                                                <h4 className="text-sm sm:text-base md:text-lg text-white mb-2">
                                                    {artist.desc}
                                                </h4>
                                            </div>
                                            <div className="space-y-2 text-pink-200">
                                                <h3 className="text-base sm:text-lg font-bold text-white mb-2 font-colombo">
                                                    Follow on
                                                </h3>
                                                <p className="flex items-center gap-2">
                                                    <a
                                                        href={artist.instagram}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-2 cursor-pointer"
                                                    >
                                                        Instagram
                                                        <Instagram className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                                                    </a>
                                                </p>
                                                <p className="flex items-center gap-2">
                                                    <a
                                                        href={artist.spotify}
                                                        target="_blank"
                                                        className="cursor-pointer"
                                                    >
                                                        Spotify
                                                        {/* <FontAwesomeIcon icon="fa-brands fa-spotify" /> */}
                                                        
                                                    </a>
                                                    <FaSpotify className="h-5 w-5 text-white" />
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Decorative Frame */}
                                    <div className="absolute inset-0 border-2 sm:border-4 border-pink-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute inset-[1px] sm:inset-[2px] border border-pink-400/20"></div>
                                    </div>
                                </div>
                            ))}
                    </div>


                </div>
            </div>
        </div>

    );
};

export default Artists;