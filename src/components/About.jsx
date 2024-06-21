import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

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
          I am a <b>16 year old </b>
          student at the <b>School of Science and Technology</b>, and
          I study <b>Computing+</b>. I am currently in the <b>Integrated Diploma Programme</b>.
          I am passionate about <b>technology </b>
          and <b>entrepreneurship</b>!
        </motion.p>
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
