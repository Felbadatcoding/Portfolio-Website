// import React from 'react';
// import { motion } from 'framer-motion';
// import { styles } from '../styles';
// import { services } from '../constants';
// import { fadeIn, textVariant } from '../utils/motion';
// import { SectionWrapper } from '../hoc';

// const ServiceCard = ({ index, title, icon }) => {
//   return (
//     <motion.div
//       variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
//       className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
//       <div
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//         className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
//         <img src={icon} alt={title} className="w-16 h-16 object-contain" />
//         <h3 className="text-taupe text-[18px] font-bold text-center">
//           {title}
//         </h3>
//       </div>
//     </motion.div>
//   );
// };


// const Projects = () => {
//   return (
//     <div className="-mt-[6rem] ">
//       <motion.div variants={textVariant()}>
//         <p className={`${styles.sectionSubText}`}>
//           What have I done so far?
//         </p>
//         <h2 className={`${styles.sectionHeadText}`}>
//           My Projects
//         </h2>
//       </motion.div>

//       <motion.p
//         variants={fadeIn('', '', 0.1, 1)}
//         className="mt-4 text-zinc-200 text-[18px] max-w-3xl leading-[30px]">
//         <p>I am a <b>cofounder of two companies</b>, which have made the 
//         applications <b>GiftDuck</b> and <b>GrowCalth</b>. </p><br />
//         <p>Furthermore, I have done multiple <b>projects and hacakthons</b> in school, 
//         demonstrating my <b>leadership</b> and
//         <b> cooperative </b> capabilities, and my <b>creative</b> and <b>logical thinking</b>.</p><br />
//         <p>Learn more about them by clicking the button below!</p>
//       </motion.p>

//       <div className="mt-20 flex flex-wrap gap-10">
//         {services.map((service, index) => (
//           <ServiceCard key={service.title} index={index} {...service} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SectionWrapper(Projects, 'projects');


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { textfighter, cvbooth, portfolio, predage, bii, gifthub, growcalth, scout, box } from '../assets';
import { modelDirection } from 'three/examples/jsm/nodes/Nodes.js';

// Data for each project/service
const projects = [
  {
    title: 'AI Model for Medical Conditions Identification',
    award: 'Capstone Project with A*STAR BII',
    image: bii,
    description: 'As part of a capstone project with A*STAR Bioinformatics Institute, me and 3 other teammates have been developing an AI model for the identification of medical conditions using Python Sklearn.',
  },
  {
    title: 'GrowCalth',
    award: '1st Place, Project Serve. Served >800 Users and 45000km travelled',
    image: growcalth,
    description: "GrowCalth is an app created by my co-workers and me in 2022 as part of SSTInc's Project Serve to assist the House Committee in tracking the exercise levels of students and increasing activity levels of students. When we launched in 2024 to SST, the app saw >800 signups, over 58 million steps tracked, 45000km travelled and solved our client's needs.",
  },
  {
    title: 'Scout',
    award: 'Best Business Plan Award',
    image: scout,
    description: 'Scout is a website conceptualised (with a wireframe) to connect young technopreneurs with lack of access to resources and mentors with a platform to engage with mentors and get access to the resources they need. We won the Best Business Plan for having the best all rounded plan.',
  },
  {
    title: 'Speech to Text Box',
    award: 'UX Designer Award',
    image: box,
    description: 'We noticed there was an issue of communication between people who can speak and hear and the deaf. As such, we want to bridge the communication gap between the deaf and people who can speak and hear. We developed a Speech to Text Box that can convert speech into text using a voice recognition model, then displaying the voice recognised text on a LCD. We won the UX Designer award for our considerations towards our users needs.'
  },
  {
    title: 'GiftHub',
    award: 'Produced in Swift Accelerator Programme',
    image: gifthub,
    description: 'GiftHub is an app for remembering Birthdays through reminders, storing potential gift ideas for friends and having sections for reccomended gifts. The app was produced in the Swift Accelerator Programme in 2022, and is available on the iOS App Store.',
  },
  {
    title: 'Predicting Ageing Population with AI',
    award: 'Produced for Coursework Project',
    image: predage,
    description: 'We used Machine Learning (Sklearn) to predict the Ageing Population of Singapore for "infrastructure planning" as part of a coursework project.',
  },
  {
    title: 'Computer-Vision Virtual Photobooth',
    award: 'Produced for Coursework Project',
    image: cvbooth,
    description: "Me and my teammate produced a virtual photobooth with Computer Vision in the context of SST's 15 Year Anniversary.",
  },
  {
    title: 'Python Textfighter',
    award: 'Produced for fun',
    image: textfighter,
    description: 'A textfighter made in python with different moves and health between two players for fun.',
  },
  {
    title: 'Portfolio Website',
    award: 'Produced for fun',
    image: portfolio,
    description: 'The website is made using React, CSS, HTML and Tailwind CSS and deployed with Vercel. The website is originally made from a Portfolio Template and was heavily modified to serve my needs and preferrences.',
  },
];

const Projects = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState({
    title: '',
    description: '',
  });

  const togglePopup = (title, description) => {
    setPopupContent({ title, description });
    setShowPopup(!showPopup);
  };

  return (
    <div className="-mt-[6rem]">
      {/* Title and subtitle with motion */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>
          What have I done so far?
        </p>
        <h2 className={`${styles.sectionHeadText}`}>
          My Projects
        </h2>
      </motion.div>

      {/* Description of projects */}
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-zinc-200 text-[18px] max-w-3xl leading-[30px]">
        <p>I am a <span className="text-purple-300"><b>cofounder of two companies</b></span>, which have made the 
        applications <span className="text-yellow-200"><b>GiftDuck</b></span> and <span className="text-red-400"><b>GrowCalth</b></span>. </p><br />
        <p>Furthermore, I have done multiple <span className="text-lime-200"><b>projects and hackathons</b></span> in school, 
        demonstrating my <span className="text-yellow-200"><b>leadership</b></span> and
        <span className="text-yellow-200"><b> cooperative </b></span> capabilities, and my <span className="text-yellow-200"><b>creative</b> and <b>logical thinking</b></span>.</p><br />
        <p><span className = "text-emerald-200">Click on Each Project to Learn about them more!</span></p>
      </motion.p>

      {/* Render project cards with popup description */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
            className="w-full card-gradient p-[1px] rounded-[20px] shadow-card relative cursor-pointer"
            onClick={() => togglePopup(project.title, project.description)}
          >
            <div
              className="bg-slate-600 rounded-[20px] py-5 px-12 h-[325px] flex justify-evenly items-center flex-col relative"
            >
              <img src={project.image} alt={project.title} className="w-40 h-40 object-contain mb-4" />
              <h3 className="text-purple-300 text-[18px] font-bold text-center">{project.title}</h3>
              <h4 className="text-white-100 text-[15px] text-center">{project.award}</h4>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Popup description */}
      {showPopup && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-800 bg-opacity-90 flex justify-center items-center">
          <div className="max-w-lg p-6 rounded-lg bg-white shadow-lg">
            <h2 className="text-xl font-bold mb-4">{popupContent.title}</h2>
            <p className="text-gray-700">{popupContent.description}</p>
            <button 
              className="mt-4 px-4 py-2 bg-gray-800 text-white rounded" 
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionWrapper(Projects, 'projects');

