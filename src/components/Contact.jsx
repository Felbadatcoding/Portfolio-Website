import React from 'react';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <div id="contact" className="flex flex-col items-center pt-24">
      <h2 className="text-3xl font-bold mb-20 text-black">Contact me here!</h2>

      <div className="flex gap-8 items-center mb-20">
        {/* GitHub */}
        <a href="https://github.com/Felbadatcoding" target="_blank" rel="noopener noreferrer">
          <div className="relative flex items-center justify-center bg-black rounded-full w-16 h-16">
            <svg className="absolute top-0 left-0 z-0" width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="45" fill="#000" />
            </svg>
            <FaGithub size={30} className="text-white z-10" />
          </div>
        </a>

        {/* Email */}
        <a href="mailto:felix_f_dimjati@s2021.ssts.edu.sg">
          <div className="relative flex items-center justify-center bg-black rounded-full w-16 h-16">
            <svg className="absolute top-0 left-0 z-0" width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="45" fill="#000" />
            </svg>
            <FaEnvelope size={30} className="text-white z-10" />
          </div>
        </a>

        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/felix-forbes-dimjati-452033232/" target="_blank" rel="noopener noreferrer">
          <div className="relative flex items-center justify-center bg-black rounded-full w-16 h-16">
            <svg className="absolute top-0 left-0 z-0" width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="45" fill="#000" />
            </svg>
            <FaLinkedin size={30} className="text-white z-10" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Contact;