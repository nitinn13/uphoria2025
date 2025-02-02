import React from 'react'
import { Music, Ambulance as Dance, Palette, Theater, Camera, Gamepad, BookOpen, Telescope, Heart, Loader, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Timeline = () => {
    const festSchedule = [
        {
            day: 1,
            date: "15th February",
            events: [
                { time: "9:00 AM", name: "Opening Ceremony", category: "Main Event" },
                { time: "9:00 AM", name: "Mega Mela", category: "Main Event" },
                { time: "10:00 AM", name: "Rockmania", category: "Music" },
                { time: "10:00 AM", name: "Nrityakala", category: "Dance" },
                { time: "10:00 AM", name: "Dastayein", category: "Main Event" },
                { time: "10:00 AM", name: "BGMI", category: "Gaming" },
                { time: "10:00 AM", name: "Tekken", category: "Gaming" },
                { time: "10:00 AM", name: "VPL", category: "Gaming" },
                { time: "10:00 AM", name: "FIFA", category: "Gaming" },
                { time: "10:00 AM", name: "Stellar Vision", category: "Astronomy" },
                { time: "10:00 AM", name: "Pixel Perfect", category: "Photography" },
                { time: "11:00 AM", name: "Impromptu Frames", category: "Photography" },
                { time: "12:00 PM", name: "Page to Picture", category: "Photography" },
                { time: "14:00 PM", name: "Chandrakala", category: "Dance" },
                { time: "15:00 PM", name: "Beat Brawl", category: "Dance" },
                { time: "16:00 PM", name: "Bars Mayhem", category: "Music" },
                { time: "16:00 PM", name: "Kala Sangam", category: "Dance" },
                { time: "19:00 PM", name: "Prom", category: "Main Event" },
                { time: "21:00 PM", name: "DJ Night", category: "Main Event" },
            ]
        },
        {
            day: 2,
            date: "16th February",
            events: [
                { time: "10:00 AM", name: "Mega Mela", category: "Arts" },
                { time: "10:00 AM", name: "Mr. and Ms. Uphoria", category: "Fashion" },
                { time: "10:00 AM", name: "Reverb", category: "Dance" },
                { time: "10:00 AM", name: "Aaroh", category: "Arts" },
                { time: "10:00 AM", name: "Mridang", category: "Dance" },
                { time: "13:00 PM", name: "Supernova", category: "Arts" },
                { time: "10:00 AM", name: "Aagaz", category: "Arts" },
                { time: "10:00 AM", name: "Rang Manch", category: "Arts" },
                { time: "12:00 PM", name: "Improv Leela", category: "Arts" },
                { time: "10:00 AM", name: "BGMI", category: "Gaming" },
                { time: "10:00 AM", name: "Tekken", category: "Gaming" },
                { time: "10:00 AM", name: "VPL", category: "Gaming" },
                { time: "10:00 AM", name: "FIFA", category: "Gaming" },
                { time: "12:00 PM", name: "Popcorn & Playoffs", category: "Arts" },
                { time: "14:00 PM", name: "Quick Fire Quible", category: "Arts" },
                { time: "12:00 PM", name: "Bardic Battles", category: "Arts" },
                { time: "14:00 PM", name: "Mehfil E Alfaz", category: "Gaming" },
                { time: "10:00 AM", name: "Opinionated", category: "Literary" },
                { time: "5:00 PM", name: "Poetry Slam", category: "Literary" },
                { time: "21:00 PM", name: "Bollywood Artist Night", category: "Main Event" },
            ]
        },
        {
            day: 3,
            date: "17th February",
            events: [
                { time: "10:00 AM", name: "Groove Wars", category: "Music" },
                { time: "16:00 PM", name: "Portraits Unplugged", category: "Music" },
                { time: "10:00 AM", name: "Rang Manch", category: "Music" },
                { time: "14:00 PM", name: "Beat Blitz", category: "Music" },
                { time: "16:00 PM", name: "Freestyle Frenzy", category: "Music" },
                { time: "11:00 AM", name: "Doodling", category: "Arts" },
                { time: "13:00 PM", name: "Fusion Frames", category: "Photography" },
                { time: "15:00 PM", name: "Mandala Art Competition", category: "Arts" },
                { time: "12:00 PM", name: "Isharo Isharo Mein", category: "Drama" },
                { time: "15:00 PM", name: "Sketching Competition", category: "Arts" },
                { time: "18:00 PM", name: "Musical", category: "Music" },
                { time: "21:00 PM", name: "Artist Night", category: "Main Event" },
            ]
        }
    ];
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


    return (
        <section id="schedule" className="py-20 mt-20">
            <div className="container mx-auto px-4">
                <h2 className="text-6xl font-bold font-colombo text-center mb-20 text-pink-100" data-aos="fade-up">
                    Uphoria Timeline
                </h2>

                <div className="relative space-y-40">
                    {/* Central Timeline Line */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-500/20 via-purple-500/50 to-pink-500/20 transform -translate-x-1/2" />

                    {festSchedule.map((day, dayIndex) => (
                        <div key={dayIndex} className="relative">
                            {/* Date Circle */}
                            <div
                                className="absolute left-1/2 -top-20 -translate-x-1/2 z-10"
                                data-aos="zoom-in"
                            >
                                <div className="relative group">
                                    <div className="w-40 h-40 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                                        <div className="text-center">
                                            <div className="font-bold text-3xl text-white mb-1">{day.date.split(" ")[0]}</div>
                                            <div className="text-lg text-pink-200">{day.date.split(" ")[1]}</div>
                                            <div className="mt-2 text-sm text-pink-200/80">Day {day.day}</div>
                                        </div>
                                    </div>
                                    <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-20 blur group-hover:opacity-30 transition-opacity" />
                                </div>
                            </div>
                            {/* <div className="bg-white/10 w-[20vw] ml-[38vw]  backdrop-blur-md p-6 rounded-lg border border-pink-500/30">
                                <div className="flex justify-center items-center space-x-4 mb-4 text-center">
                                    <Calendar className="h-8 w-8 text-pink-400" />
                                    <div>
                                        <h3 className="text-2xl font-bold text-pink-100 font-colombo ">Day {day.day}</h3>
                                        <p className="text-pink-200">{day.date}</p>
                                    </div>
                                </div>
                            </div> */}

                            {/* Events Grid */}
                            <div className="grid md:grid-cols-2 gap-8 relative pt-24">
                                {/* Morning Events */}
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-semibold text-pink-200 mb-6 text-center">Morning Events</h3>
                                    {day.events
                                        .filter(event => {
                                            const hour = parseInt(event.time.split(":")[0]);
                                            return hour < 12;
                                        })
                                        .map((event, eventIndex) => (
                                            <div
                                                key={eventIndex}
                                                className="group relative"
                                                data-aos="fade-right"
                                                data-aos-delay={eventIndex * 50}
                                            >
                                                <div className="relative bg-white/10 backdrop-blur-md p-6 rounded-lg border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y--1">
                                                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                                                    <div className="flex items-center justify-between mb-3">
                                                        <span className="text-pink-400 font-medium flex items-center">
                                                            <Calendar className="w-4 h-4 mr-2" />
                                                            {event.time}
                                                        </span>
                                                        <span className="text-sm text-pink-300 px-3 py-1 rounded-full bg-pink-500/20">
                                                            {event.category}
                                                        </span>
                                                    </div>
                                                    <h4 className="text-lg font-semibold text-white group-hover:text-pink-200 transition-colors">
                                                        {event.name}
                                                    </h4>
                                                </div>
                                            </div>
                                        ))}
                                </div>

                                {/* Afternoon/Evening Events */}
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-semibold text-pink-200 mb-6 text-center">Afternoon & Evening Events</h3>
                                    {day.events
                                        .filter(event => {
                                            const hour = parseInt(event.time.split(":")[0]);
                                            return hour >= 12;
                                        })
                                        .map((event, eventIndex) => (
                                            <div
                                                key={eventIndex}
                                                className="group relative"
                                                data-aos="fade-left"
                                                data-aos-delay={eventIndex * 50}
                                            >
                                                <div className="relative bg-white/10 backdrop-blur-md p-6 rounded-lg border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y--1">
                                                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                                                    <div className="flex items-center justify-between mb-3">
                                                        <span className="text-pink-400 font-medium flex items-center">
                                                            <Calendar className="w-4 h-4 mr-2" />
                                                            {event.time}
                                                        </span>
                                                        <span className="text-sm text-pink-300 px-3 py-1 rounded-full bg-pink-500/20">
                                                            {event.category}
                                                        </span>
                                                    </div>
                                                    <h4 className="text-lg font-semibold text-white group-hover:text-pink-200 transition-colors">
                                                        {event.name}
                                                    </h4>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default Timeline