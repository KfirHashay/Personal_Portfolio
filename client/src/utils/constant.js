import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaFacebook,
  BiCrown,
  BiGlobe,
  BiLayer,
} from '../components';

export const socials = [
  {
    name: 'linkedin',
    icon: <FaLinkedinIn className="icon" />,
    url: 'https://www.linkedin.com/in/kfir-hashay',
  },
  {
    name: 'github',
    url: 'https://github.com/KfirHashay',
    icon: <FaGithub className="icon" />,
  },
  {
    name: 'twitter',
    icon: <FaTwitter className="icon" />,
    url: 'https://www.twiiter.com',
  },
  {
    name: 'facebook',
    icon: <FaFacebook className="icon" />,
    url: 'https://www.facebook.com',
  },
];

export const abouts = [
  {
    title: 'UI/UX Design',
    icon: <BiCrown />,
    description:
      'Turn what you have in mind of a digital product into reality. For any platform you consider.',
  },
  {
    title: 'Application Development',
    icon: <BiLayer />,
    description:
      'Standard designing, building, and implementing your applications with documentation.',
  },

  {
    title: 'Web Development',
    icon: <BiGlobe />,
    description:
      'Create and maintain your websites and also take care of its performance and traffic capacity.',
  },
];

export const companies = [
  {
    id: 'company-1',
    name: '019 Mobile',
    job_title: 'NOC Manager',
    job_location: 'Ariel, Israel',
    job_type: 'Full Time',
    job_start: 'Aug 2022',
    job_end: 'Present',

    responsibility1: 'managing and coordinating the NOC team',
    responsibility2:
      'Handle escalations and manage support from different levels',
    responsibility3:
      'Provides solutions in real time to various networking problems',
    responsibility4: '',
  },
  {
    id: 'company-2',
    name: '019 Mobile',
    job_title: 'NOC Supervisor',
    job_location: 'Ariel, Israel',
    job_type: 'Full Time',
    job_start: 'May 2021',
    job_end: 'Aug 2022',

    responsibility1:
      'Ongoing inspection in real time of the comapnt statistics',
    responsibility2:
      'Troubleshoot Problems in the network field, in front of the company agents and business clients.',

    responsibility3: '',
    responsibility4: '',
  },
  {
    id: 'company-3',
    name: 'Modiin Ezrahi',
    job_title: 'Security Inspector',
    job_location: 'Ariel University, Israel',
    job_type: 'Full Time',
    job_start: 'Nov 2016',
    job_end: 'July 2020',

    responsibility1: 'Security inspector at Ariel University.',
    responsibility2:
      'A variety of responsibilities in the security and safety fields.',

    responsibility3: '',
    responsibility4: '',
  },
  {
    id: 'company-4',
    name: 'Military service',
    job_title: 'Company Sergeant Major',
    job_location: 'Golani, Battalion 12',
    job_type: 'Full Time',
    job_start: 'March 2012',
    job_end: 'March 2015',

    responsibility1: 'Company Sergeant Major, First-symbol release',
    responsibility2:
      'Man Management, Budget control, Organization, order and discipline.',

    responsibility3:
      'Managing the combat service support Company at Routine and emergency.',
    responsibility4: '',
  },
];

export const TestimonialCardText = [
  {
    id: 1,
    text: 'We were very pleased to hear how you resolved our websites user interface issues and challenges.',
    name: 'Amelia Miller',
  },
  {
    id: 2,
    text: 'I’m glad I decided to work with you. The project was delivered on time with all the requirements.',
    name: 'James Delaney',
  },

  {
    id: 3,
    text: 'The management of our projects was always faced with difficulties, but you handled these well.',
    name: 'Isabella Bennett',
  },
  {
    id: 4,
    text: 'Example 4 Example 4 Example 4 Example 4 Example 4',
    name: 'Example 4 Name',
  },
  {
    id: 5,
    text: 'Example 5 Example 5 Example 5 Example 5 Example 5 Example 5',
    name: 'Example 5 Name',
  },

  {
    id: 6,
    text: 'Example 6 Example 6 Example 6 Example 6 Example 6 Example 6',
    name: 'Example 6 Name',
  },
];

export const SkillBar = [
  {
    id: 1,
    label: 'ReactJS',
    total: '100',
    proggress: '80',
  },
  {
    id: 2,
    label: 'Framer-Motion Library',
    total: '100',
    proggress: '77',
  },
  {
    id: 3,
    label: 'Node JS',
    total: '100',
    proggress: '65',
  },
  {
    id: 4,
    label: 'Sequelize',
    total: '100',
    proggress: '70',
  },
  {
    id: 5,
    label: 'Redux',
    total: '100',
    proggress: '65',
  },
  {
    id: 6,
    label: 'Linux',
    total: '100',
    proggress: '40',
  },
  {
    id: 7,
    label: 'MySQL',
    total: '100',
    proggress: '45',
  },
];

export const Edu_objects = [
  {
    id: 1,
    title: 'Ariel university',
    degree: 'Practical Software Engineer',
    date: '2019 - 2021',
  },
  {
    id: 2,
    title: 'Web & Software Development ',
    degree: 'Cyber specialization as part of the syllabus',
    date: 'Linux & Windows',
  },

  {
    id: 3,
    title: 'Final project',
    degree: 'using ReactJS, NodeJS Express, MySQL',
    date: 'Grade: 100',
  },
];
