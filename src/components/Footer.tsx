import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import address from '../assets/footer/Group 75.svg';
import bennett from '../assets/footer/Bennett University.svg';

const Footer = () => {
  return (
    <footer id="contact" className="text-pink-100 py-12 border-2 flex justify-between items-center w-full px-6">
      {/* Social Media Section */}
      <div className="flex flex-col">
        <h3 className="text-4xl font-bold mb-4 text-pink-200 font-colombo">Follow Us</h3>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-pink-400 transition-colors">
            <Instagram className="h-8 w-8" />
          </a>
          <a href="#" className="hover:text-pink-400 transition-colors">
            <Facebook className="h-8 w-8" />
          </a>
          <a href="#" className="hover:text-pink-400 transition-colors">
            <Twitter className="h-8 w-8" />
          </a>
        </div>
      </div>

      {/* Address and Bennett University Section */}
      <div className="flex flex-col items-center space-y-3 z-10">
        <a href="https://maps.app.goo.gl/oN9okdg26b3cXd6j9"><img src={address} alt="address" height={300} width={300} /></a>
        <img src={bennett} alt="bennett" height={190} width={190} />
      </div>
    </footer>
  );
};

export default Footer;
