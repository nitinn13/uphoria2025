import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <nav className="w-full bg-[#752E50] backdrop-blur-md z-50 py-3 px-5 ">
      <div className="container mx-auto flex items-center justify-between">
        {/* Navigation Links with Responsive Font Size and Scrollable */}
        <div className="flex items-center space-x-3 md:space-x-14 font-colombo text-xs md:text-base lg:text-lg overflow-x-auto">
          <Link to="/" className="text-pink-100 hover:text-pink-400 transition-colors">Home</Link>
          {/* <a href="#timeline" className="text-pink-100 hover:text-pink-400 transition-colors">Timeline</a> */}
          <a href="#events" className="text-pink-100 hover:text-pink-400 transition-colors">Events</a>
          <a href="#gallery" className="text-pink-100 hover:text-pink-400 transition-colors">Gallery</a>
          <a href="#" className="text-pink-100 hover:text-pink-400 transition-colors">Sponsors</a>
          <a href="#" className="text-pink-100 hover:text-pink-400 transition-colors">Accommodation</a>
        </div>

        {/* Theme Toggle Button */}
        <div>
          <button onClick={toggleTheme} className="text-pink-100">
            <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} size="2xl" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
