import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import LogoCube from "./Cube/Cube";


const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>My skills</p>
        <h2 className={styles.sectionHeadTextLight}>Software and Coding Languages</h2>
      </motion.div>

      <div className="flex justify-center mt-36">
        <div className="relative">
          <div className="flex mt-20">
            <div className="relative mr-40">
              <p className="absolute text-4xl top-[-90px] left-[50%] translate-x-[-50%] text-neutral-50 font-poppins  ">
                Languages
              </p>
              <LogoCube /> 
            </div>
            <div className="relative ml-40">
              <p className="absolute text-4xl top-[-90px] left-[50%] translate-x-[-50%] text-neutral-50 font-poppins  ">
                Software
              </p>
              <LogoCube />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, '');

