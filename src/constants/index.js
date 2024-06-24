import {
  python,
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'tech',
    title: 'Skills',
  },
  {
    id: 'experience',
    title: 'Experience',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const experiences = [
  [
    // Timeline 1 (Education)
    {
      title: 'SST-NP IDP (Integrated Diploma Programme) Student',
      company_name: 'School of Science and Technology, Singapore',
      icon: dcc, // Replace with the appropriate icon
      iconBg: '#333333',
      date: 'January 2023- December 2024',
      type: 'education',
    },
    {
      title: 'Student',
      company_name: 'School of Science and Technology, Singapore',
      icon: dcc, // Replace with the appropriate icon
      iconBg: '#333333',
      date: 'January 2021- December 2024',
      type: 'education',
    },
    {
      title: 'Swift Accelerator Programme Student',
      company_name: 'Apple',
      icon: dcc, // Replace with the appropriate icon
      iconBg: '#333333',
      date: 'January 2023- December 2024',
      type: 'education',
    },
    {
      title: 'Student',
      company_name: "St Anthony's Primary School",
      icon: dcc, // Replace with the appropriate icon
      iconBg: '#333333',
      date: 'January 2015- December 2020',
      type: 'education',
    },
  ],
  [
    // Timeline 2 (Experience)
    {
      title: 'Intern',
      company_name: 'Bioinformatics Institute, A*STAR',
      icon: coverhunt,
      iconBg: '#333333',
      date: 'November 2023 - Current',
      type: 'experience',
    },
    {
      title: 'UX Design Specialist',
      company_name: 'GrowCalth',
      icon: coverhunt,
      iconBg: '#333333',
      date: 'January 2024 - Current',
      type: 'experience',
    },
    {
      title: 'Chief Technology Officer',
      company_name: 'GrowCalth',
      icon: coverhunt,
      iconBg: '#333333',
      date: 'June 2022 - January 2024',
      type: 'experience',
    },
    {
      title: 'Employee',
      company_name: 'SST Inc',
      icon: coverhunt,
      iconBg: '#333333',
      date: 'Aug 2021 - Feb 2022',
      type: 'experience',
    },
    // ... other work experiences
  ],
  [
    // Timeline 3 (Service Learning)
    {
      title: 'Volunteer',
      company_name: 'Willing Hearts',
      icon: microverse,
      iconBg: '#333333',
      date: 'March 2024',
      type: 'service learning',
    },
    {
      title: 'Community Engagement Seniors Visit',
      company_name: 'Heartware Network',
      icon: microverse,
      iconBg: '#333333',
      date: 'August 2022 - October 2022 and October 2023',
      type: 'service learning',
    },
    {
      title: 'Beach Cleanup',
      company_name: 'East Coast Park',
      icon: microverse,
      iconBg: '#333333',
      date: 'March 2023',
      type: 'service learning',
    },
    // ... other service learning experiences
  ],
  [
    // Timeline 1 (Education)
    {
      title: 'Jakarta SSTxBBS Exchange Trip',
      company_name: 'In my trip to Jakarta, I managed to collaborate with students from Bina Bangsa School, allowing me to make use of Arduino technologies to learn more about the air quality in different parts of the school. Furthermore, when visiting industrial partners such as Charged Indonesia and Gojek, I managed to learn about the future of sustainability in industries such as food delivery and transport. I also managed to have a deeper appreciation for my own culture as I learnt more about Indonesia.',
      icon: dcc, // Replace with the appropriate icon
      iconBg: '#333333',
      date: 'November 2023',
      type: 'ole',
    },
    {
      title: 'San Fransisco OLE',
      company_name: 'As one of the founders of GrowCalth, SSTInc gave us the opportunity to take a learning trip to San Fransisco. Visiting companies and attending events in the Bay Area and Silicon Valley, such as Apple, Block, DeveloperWeek and so on, I managed to learn the many aspects of creating a successful company, such as startup incubation, essential values needed and networking. Furthermore, I visited musems and Institutions such as Stanford, UC Berkeley, Intel Museum and so on, allowing me to understand university life in San Francisco, and the key idea of using resources wisely and learning from others mistakes to make a better product that benefits society.',
      icon: dcc, // Replace with the appropriate icon
      iconBg: '#333333',
      date: 'February 2023',
      type: 'ole',
    },
  ],
];



const projects = [
  {
    id: 'project-1',
    name: 'KomiKult',
    description: 'A comic characters list app that displays Marvel characters.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/shaqdeff/KomiKult',
    demo: 'https://shaqdeff.github.io/KomiKult/',
  },
  {
    id: 'project-2',
    name: 'Leaderboard',
    description:
      'A leaderboard list app that displays scores submitted by different players.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/shaqdeff/Leaderboard',
    demo: 'https://shaqdeff.github.io/Leaderboard/',
  },
  {
    id: 'project-3',
    name: 'Math Magicians',
    description: 'This is a single-page calculator app built with React',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/shaqdeff/Math-Magicians',
    demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
  {
    id: 'project-4',
    name: 'Movie Metro',
    description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/shaqdeff/Movie-Metro',
    demo: 'https://movie-metro.netlify.app/',
  },
  {
    id: 'project-5',
    name: 'Nyeusi Fest Site',
    description:
      'This is a demo concert website for a music festival called Nyeusi.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
    demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  },
];

export { services, experiences, projects };
