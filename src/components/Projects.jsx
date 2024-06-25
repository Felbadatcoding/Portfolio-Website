import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { textfighter, cvbooth, portfolio, predage, bii, gifthub, growcalth, scout, box } from '../assets';
import { FaGithub, FaAppStore, FaGooglePlay } from 'react-icons/fa';

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
    award: 'Served >800 Users and saw 45000km travelled by users.',
    image: growcalth,
    description: "GrowCalth is an app created by my co-workers and me in 2022 as part of SSTInc's Project Serve to assist the House Committee in tracking the exercise levels of students and increasing activity levels of students. When we launched in 2024 to SST, the app saw >800 signups, over 58 million steps tracked, 45000km travelled and solved our client's needs.",
    ios: 'https://apps.apple.com/sg/app/growcalth/id6456388202',
    andr: 'https://play.google.com/store/apps/details?id=com.growcalth_android&hl=en_US&pli=1',
  },
  {
    title: 'Scout',
    award: 'SST-SMU IDP Technopreuship Hackathon Best Business Plan Award',
    image: scout,
    description: 'We participated in the SST-SMU IDP Technopreuship Hackathon, where we were given 3 problem statments. We conceptualised Scout, a website(with a wireframe) to connect young technopreneurs with lack of access to resources and mentors with a platform to engage with mentors and get access to the resources they need. We won the Best Business Plan for having the best all rounded plan.',
  },
  {
    title: 'Speech to Text Box',
    award: 'SUTD-SST Big D Camp UX Designer Award',
    image: box,
    description: 'We noticed there was an issue of communication between people who can speak and hear and the deaf. As such, we want to bridge the communication gap between the deaf and people who can speak and hear. We developed a Speech to Text Box that can convert speech into text using a voice recognition model, then displaying the voice recognised text on a LCD. We won the UX Designer award for our considerations towards our users needs.'
  },
  {
    title: 'GiftDuck',
    award: 'Produced in Swift Accelerator Programme',
    image: gifthub,
    description: 'GiftDuck is an app for remembering Birthdays through reminders, storing potential gift ideas for friends and having sections for reccomended gifts. The app was produced in the Swift Accelerator Programme in 2022, and is available on the iOS App Store.',
    ios: 'https://apps.apple.com/us/app/giftduck/id6444735527',
  },
  {
    title: 'Predicting Ageing Population with AI',
    award: 'Produced for Coursework Project',
    image: predage,
    description: 'We used Machine Learning in Python with Sklearn to predict the Ageing Population of Singapore for "infrastructure planning" as part of a coursework project.',
    github: 'https://github.com/Felbadatcoding/Predicting-Ageing-Population-using-Ridge-Regression',
  },
  {
    title: 'Computer-Vision Virtual Photobooth',
    award: 'Produced for Coursework Project',
    image: cvbooth,
    description: "Me and my teammate produced a virtual photobooth with Computer Vision in the context of SST's 15 Year Anniversary.",
    github: 'https://github.com/corzolonegatigo/Virtual-Photo-Booth',
  },
  {
    title: 'Python Textfighter',
    award: 'Produced for fun!',
    image: textfighter,
    description: 'A textfighter made in python with different moves and health between two players for fun.',
    github: 'https://github.com/Felbadatcoding/Simple-Text-Fighter',
  },
  {
    title: 'Portfolio Website',
    award: 'Produced for my learning and portfolio.',
    image: portfolio,
    description: 'I created this website using React, CSS, HTML and Tailwind CSS and deployed with Vercel. The website is originally made from a Portfolio Template and was heavily modified to serve my needs and preferrences.',
    github: 'https://github.com/Felbadatcoding/Portfolio-Website',
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
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="absolute top-4 right-4 text-yellow-200"
                >
                  <FaGithub size={30} />
                </a>
              )}
              {project.ios && (
                <a 
                  href={project.ios} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="absolute top-4 right-4 text-yellow-200"
                >
                  <FaAppStore size={30} />
                </a>
              )}
              {project.andr && (
                <a 
                  href={project.andr} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="absolute top-4 right-14 text-yellow-200"
                >
                  <FaGooglePlay size={30} />
                </a>
              )}
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
              className="mt-4 px-4 py-2 bg-rose-400 text-white rounded" 
              onClick={() => setShowPopup(false)}
            >
              Close this popup!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionWrapper(Projects, 'projects');
