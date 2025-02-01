import React, { useState } from 'react';
import { Heart, Instagram, Spotify } from 'lucide-react';

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
        image: 'https://images.unsplash.com/photo-1618436917352-cd3d11ea4d15',
        instagram: 'https://www.instagram.com',
        spotify: 'https://open.spotify.com',
        desc: 'description of artist',
        day: 1
    },
    {
        name: 'Luna',
        image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7',
        instagram: 'https://www.instagram.com',
        spotify: 'https://open.spotify.com',
        desc: 'description of artist',
        day: 1
    },
    {
        name: 'The Groove',
        image: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1',
        instagram: 'https://www.instagram.com',
        spotify: 'https://open.spotify.com',
        desc: 'description of artist',
        day: 2
    },
    {
        name: 'DJ Nova',
        image: 'https://images.unsplash.com/photo-1571266028243-e4733b0f0bb1',
        instagram: 'https://www.instagram.com',
        spotify: 'https://open.spotify.com',
        desc: 'description of artist',
        day: 2
    },
    {
        name: 'Rhythm Kings',
        image: 'https://images.unsplash.com/photo-1501612780327-45045538702b',
        instagram: 'https://www.instagram.com',
        spotify: 'https://open.spotify.com',
        desc: 'description of artist',
        day: 3
    },
    {
        name: 'Echo',
        image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f',
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
                {/* Title */}
                <h1 className="text-6xl font-bold text-center mb-12 font-colombo">
                    Artists
                </h1>

                {/* Day Filter */}
                <div className="flex justify-center mb-16">
                    <div className="bg-white/10 backdrop-blur-md rounded-full p-1 border border-pink-500/30">
                        {[1, 2, 3].map((day) => (
                            <button
                                key={day}
                                onClick={() => setSelectedDay(day)}
                                className={`px-8 py-2 rounded-full transition-all ${selectedDay === day
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                        {artists
                            .filter((artist) => artist.day === selectedDay)
                            .map((artist, index) => (
                                <div
                                    key={index}
                                    className="relative group h-[60vh] w-[30vw] rounded-2xl overflow-hidden aspect-square"
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
                                        <div className="absolute inset-0 p-6 flex flex-col justify-around">
                                            <div>
                                                <h3 className="text-3xl font-bold text-white mb-2 font-colombo">{artist.name}</h3>
                                                <h4 className="text-xl text-white mb-2">{artist.desc}</h4>
                                            </div>
                                            <div className="space-y-2 text-pink-200">
                                                <h3 className="text-xl font-bold text-white mb-2 font-colombo">Follow on</h3>
                                                <p className="flex items-center gap-2">
                                                    <a href={artist.instagram} target='_blank' className='cursor-pointer'>Instagram</a>
                                                    <Instagram className="h-6 w-6" />
                                                </p>
                                                <p className="flex items-center gap-2">
                                                    <a href={artist.spotify} target='_blank' className='cursor-pointer'>Spotify</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Decorative Frame */}
                                    <div className="absolute inset-0 border-4 border-pink-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute inset-[2px] border border-pink-400/20"></div>
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