import React from 'react';
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import address from '../assets/footer/Group 75.svg';
import bennett from '../assets/footer/Bennett University.svg';
import nitin from '../assets/techteam/nitin.jpg';
import parth from '../assets/techteam/parth.jpg';
import sankalp from '../assets/techteam/sankalp.png';
import soumya from '../assets/techteam/soumya.jpg';
import hardik from '../assets/techteam/Hardik Jain .jpg';
import garvit from '../assets/techteam/Garvit Sharma.jpg';
import naman from '../assets/techteam/Naman Sharma.jpg';



const Footer = () => {
  return (
    <div className='p-3'>
    <footer id="contact" className="text-pink-100 rounded-xl py-12 bg-[#361927] border-2 border-[#D24D8E] flex justify-between items-center w-full px-6">
      {/* Social Media Section */}
      <div className="flex flex-col">
        <h3 className="text-4xl font-bold mb-4 text-pink-200 font-colombo">Follow Us</h3>
        <div className="flex space-x-4">
          <a href="https://www.instagram.com/uphoria_2025/" target='_blank' className="hover:text-pink-400 transition-colors">
            <Instagram className="h-8 w-8" />
          </a>
          <a href="https://www.linkedin.com/company/bennett-university-student-council/" target='_blank' className="hover:text-pink-400 transition-colors">
            
            <Linkedin className="h-8 w-8" />
          </a>
          {/* <a href="#" className="hover:text-pink-400 transition-colors">
            
            <Facebook className="h-8 w-8" />
          </a> */}
          
        </div>
      </div>
      <div className='flex flex-col items-center gap-8'>

      
      {/* Developers Section */}
      <div className="flex-grow">
            <div className="flex flex-col items-center sm:items-end">
              <h1 className="font-sans mb-3 text-center sm:text-right text-neutral-100">Developed By:</h1>
              <div className="flex flex-wrap justify-center sm:justify-end pb-3 gap-2">
                <a href="https://www.linkedin.com/in/nitin-kumar-jha" target="_blank" rel="noopener noreferrer">
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                    <img src={nitin} alt="Nitin Jha" className="relative rounded-full w-12 h-12 object-cover border-2 border-blue-500" />
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/parth-singh427" target="_blank" rel="noopener noreferrer">
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                    <img src={parth} alt="Parth Pankaj Singh" className="relative rounded-full w-12 h-12 object-cover border-2 border-purple-500" />
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/soumyasmitsingh/" target="_blank" rel="noopener noreferrer">
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                    <img src={soumya} alt="Soumya Singh" className="relative rounded-full w-12 h-12 object-cover border-2 border-pink-500" />
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/sankalp-tiwari-79967321a/" target="_blank" rel="noopener noreferrer">
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                    <img src={sankalp} alt="Sankalp Tiwari" className="relative rounded-full w-12 h-12 object-cover border-2 border-purple-500" />
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/hardik-jain-a86531247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                    <img src={hardik} alt="Hardik Jain" className="relative rounded-full w-12 h-12 object-cover border-2 border-purple-500" />
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/garvitsharma1/" target="_blank" rel="noopener noreferrer">
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                    <img src={garvit} alt="Garvit" className="relative rounded-full w-12 h-12 object-cover border-2 border-purple-500" />
                  </div>
                </a>
                {/* <a href="https://www.linkedin.com/in/sankalp-tiwari-79967321a/" target="_blank" rel="noopener noreferrer">
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                    <img src="/divyansh.png" alt="Divyansh" className="relative rounded-full w-12 h-12 object-cover border-2 border-purple-500" />
                  </div>
                </a> */}
                {/* <a href="https://www.linkedin.com/in/sankalp-tiwari-79967321a/" target="_blank" rel="noopener noreferrer">
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                    <img src={naman} alt="Naman Sharma" className="relative rounded-full w-12 h-12 object-cover border-2 border-purple-500" />
                  </div>
                </a> */}
              </div>
            </div>
          </div>

      {/* Address and Bennett University Section */}
      <div className="flex flex-col items-center space-y-3 z-10">
        <a href="https://maps.app.goo.gl/oN9okdg26b3cXd6j9"><img src={address} alt="address" height={300} width={300} /></a>
        <img src={bennett} alt="bennett" height={190} width={190} />
      </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
