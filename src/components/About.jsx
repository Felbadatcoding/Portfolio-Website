import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import {sf} from '../assets';


const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Who am I exactly?</p>
        <h2 className={`${styles.sectionHeadTextLight}`}>Hi. I'm Felix Forbes Dimjati!</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-10 text-slate-50 text-[20px] max-w-3xl leading-[40px]"
        >
          I am a <span className="text-purple-300"><b>16-year-old </b></span>
          student at the <span className="text-purple-300"><b>School of Science and Technology</b></span>, and
          I study <span className="text-purple-300"><b>Computing+</b></span>. I am currently in the <span className="text-orange-300"><b>Integrated Diploma Programme</b></span>, and 
          I am an <span className="text-orange-300"><b>Intern at A*STAR Bioinformatics Institute</b></span> as part of a Capstone Project.
          I am passionate about <span className="text-yellow-200"><b>technology </b></span>
          and <span className="text-yellow-200"><b>entrepreneurship</b></span>!
        </motion.p>
      </div>
      <div className="flex-1 flex justify-center items-start p-5">
        <img
          src={sf}
          alt="Me and my team and the Bioinformatics Institute"
          className="w-[80%] h-auto object-cover mt-5 ml-5"
        />
      </div>
      <div className="flex-1 flex justify-center items-start text-2xl">
        <h2>My Overseas Learning Experience to San Fransisco. Check Experiences to learn more!</h2>
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
