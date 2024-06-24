import React, { useState } from 'react';
import { experiences } from '../constants';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
  const [type, setType] = useState(null); // Updated initial state to null

  // Selecting the first type by default
  const defaultType = experiences.length > 0 ? experiences[0][0].type : null;
  const [currentType, setCurrentType] = useState(defaultType);

  const filteredExperiences = experiences.filter((timeline) => {
    if (!type && !currentType) return false; // Return false if both type and currentType are null
    if (type === 'all') return true;
    return timeline.some((experience) => experience.type === (type || currentType));
  });

  return (
    <div id="experience">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText2} sm:pl-16 pl-[2rem]`}>
          What have I experienced?
        </p>
        <h2 className={`${styles.sectionHeadText} sm:pl-16 pl-[2rem]`}>
          My Experiences!
        </h2>
      </motion.div>

      <div className="pt-8 ml-20">
        <ul className="flex">
          <li
            className={`mr-4 cursor-pointer ${currentType === 'education' ? 'text-white duration-100' : 'text-gray-800 hover:scale-105 duration-100'}`}
            onClick={() => { setType(null); setCurrentType('education'); }}
          >
            Education
          </li>
          <li
            className={`mr-4 cursor-pointer ${currentType === 'experience' ? 'text-white duration-100' : 'text-gray-800 hover:scale-105 duration-100'}`}
            onClick={() => { setType(null); setCurrentType('experience'); }}
          >
            Work
          </li>
          <li
            className={`mr-4 cursor-pointer ${currentType === 'service learning' ? 'text-white duration-100' : 'text-gray-800 hover:scale-105 duration-100'}`}
            onClick={() => { setType(null); setCurrentType('service learning'); }}
          >
            Service Learning
          </li>
          <li
            className={`mr-4 cursor-pointer ${currentType === 'ole' ? 'text-white duration-100' : 'text-gray-800 hover:scale-105 duration-100'}`}
            onClick={() => { setType(null); setCurrentType('ole'); }}
          >
            Overseas Learning Experiences
          </li>
        </ul>
      </div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline className="vertical-timeline-custom-line">
          {filteredExperiences.map((timeline, index) => (
            <div key={index}>
              {timeline.map((experience, expIndex) => (
                <VerticalTimelineElement
                  key={`${index}-${expIndex}`}
                  contentStyle={{
                    background: '#eaeaec',
                    color: '#999999',
                    boxShadow:
                      'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
                  }}
                  contentArrowStyle={{
                    borderRight: '7px solid  #232631',
                  }}
                  date={
                    <div>
                      <h3 className="text-white text-[18px] font-bold font-poppins">
                        {experience.date}
                      </h3>
                    </div>
                  }
                  iconStyle={{ background: experience.iconBg }}
                >
                  <div>
                    <h3 className="text-jetLight text-[24px] font-bold">
                      {experience.title}
                    </h3>
                    <p
                      className="text-slate-500 text-[22px]"
                      style={{ margin: 0 }}
                    >
                      {experience.company_name}
                    </p>
                    <p
                      className="text-slate-700 text-[22px] mt: 10px"
                    >
                      {experience.desc}
                    </p>
                  </div>
                </VerticalTimelineElement>
              ))}
            </div>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;







