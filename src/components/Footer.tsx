import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  return (
    // <footer id="contact" className="bg-gradient-to-b from-pink-900 to-purple-900 text-pink-100 py-12">
    <footer id="contact" className=" text-pink-100 py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <Heart className="h-12 w-12 text-pink-400 animate-pulse" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-pink-200">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-pink-400" />
                <span>uphoria@college.edu</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-pink-400" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-pink-400" />
                <span>College Campus, City</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4 text-pink-200">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-pink-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-pink-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-pink-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4 text-pink-200">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-pink-400 transition-colors">About Us</a></li>
              <li><a href="#events" className="hover:text-pink-400 transition-colors">Events</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Schedule</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Register</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-pink-500/30 text-center">
          <p>Made with <Heart className="inline-block h-4 w-4 text-pink-400 mx-1" /> | &copy; 2025 Uphoria</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;