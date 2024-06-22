import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import {google} from '../assets';

const Hero = () => {
  return (
    <>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={google}
          alt="Felix presenting at Google HQ in Singapore"
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        bg-hero overflow-hidden">
        <div
          style={{
            position: 'absolute',
            top: '250px', // Adjust these values as needed
            right: '-50rem', // Adjust this value to control the right offset
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'start',
            maxWidth: '1280px', // Adjust this value as needed
            margin: '0 auto',
          }}
        >
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-black sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          <div>
          <h1 className={`mr-10 text-stone-300 font-black uppercase text-right font-poppins`}>
            <span style={{ fontSize: '60px'}}>My name?</span>{' '}<br />
            <span
              className="sm:text-battleGray sm:text-[90px] text-eerieBlack text-[50px] felix-color"
              style={{ color: '#fed7aa' }}
            >
              It's&nbsp;Felix.
            </span>
          </h1>
            <p className={`mt-10 mr-10 text-green-300 text-right`}>
              <span style={{ fontSize: '40px'}}>Inquisitive Technologist,</span><br />
              <span style={{ fontSize: '40px'}}>Creative Innovator,</span><br />
              <span style={{ fontSize: '40px'}}>Critical Thinker.</span><br />
            </p>
          </div>
          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"></div>

          <div></div>
        </div>

        <div
          className="absolute xs:bottom-10 bottom-32 w-full 
          flex justify-center items-center">
          <a href="#about">
            <div
              className="">
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;

