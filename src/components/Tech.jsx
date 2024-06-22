import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import LogoCubeLang from "./Cube/CubeLang";
import LogoCubeSoft from "./Cube/CubeSoft";


const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>My skills</p>
        <h2 className={styles.sectionHeadTextLight}>Turn the cubes around!</h2>
      </motion.div>

      <div className="flex justify-center mt-36">
        <div className="relative">
          <div className="flex mt-20">
            <div className="relative mr-40">
              <p className="absolute text-4xl top-[-90px] left-[50%] translate-x-[-50%] text-neutral-50 font-poppins  ">
                Languages
              </p>
              <LogoCubeLang /> 
            </div>
            <div className="relative ml-40">
              <p className="absolute text-4xl top-[-90px] left-[50%] translate-x-[-50%] text-neutral-50 font-poppins  ">
                Software
              </p>
              <LogoCubeSoft /> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, '');

