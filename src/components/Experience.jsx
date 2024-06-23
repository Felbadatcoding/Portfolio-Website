import React, { useState } from 'react';
import { experiences } from '../constants';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
  const [type, setType] = useState('all');

  const filteredExperiences = experiences.filter((timeline) => {
    if (type === 'all') return true;
    return timeline.some((experience) => experience.type === type);
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
            className={`mr-4 cursor-pointer ${type === 'education' ? 'text-white duration-100' : 'text-gray-800 hover:scale-105 duration-100'}`}
            onClick={() => setType('education')}
          >
            Education
          </li>
          <li
            className={`mr-4 cursor-pointer ${type === 'experience' ? 'text-white duration-100' : 'text-gray-800 hover:scale-105 duration-100'}`}
            onClick={() => setType('experience')}
          >
            Work
          </li>
          <li
            className={`mr-4 cursor-pointer ${type === 'service learning' ? 'text-white duration-100' : 'text-gray-800 hover:scale-105 duration-100'}`}
            onClick={() => setType('service learning')}
          >
            Service Learning
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
                    color: '#292929',
                    boxShadow:
                      'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
                  }}
                  contentArrowStyle={{
                    borderRight: '7px solid  #232631',
                  }}
                  date={
                    <div>
                      <h3 className="text-stone-950 text-[18px] font-bold font-poppins">
                        {experience.date}
                      </h3>
                    </div>
                  }
                  iconStyle={{ background: experience.iconBg }}
                  icon={
                    <div className="flex justify-center items-center w-full h-full">
                      <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className="w-[60%] h-[60%] object-contain"
                      />
                    </div>
                  }
                >
                  <div>
                    <h3 className="text-jetLight text-[24px] font-bold">
                      {experience.title}
                    </h3>
                    <p
                      className="text-slate-700 text-[22px]"
                      style={{ margin: 0 }}
                    >
                      {experience.company_name}
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








