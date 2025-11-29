import project1 from "../assets/ams-dashboard.png";
import project2 from "../assets/netflix.png";
import project3 from "../assets/foundry.png";
import project4 from "../assets/mtcmProjectImg.png";
import project5 from "../assets/employe.jpg";
import project6 from "../assets/cloud.jpg";
import project7 from "../assets/waxInjectionImg.png";
import project8 from "../assets/spindleprojectImg.png";
import project9 from "../assets/gym.jpg";
import CMTI_LOGO_Image from '../assets/CMTILogo.png'
import KODNEST_LOGO_Image from '../assets/KodnestLogo.png'



export const heroData = {
  hello: "Hello, I'm",
  name: "Swarna C S",
  title: "Software Developer | Java & GUI Applications",
  subtitle:
    "I specialize in building scalable desktop and web applications using Java, Spring Boot, and C++/Qt. I develop data-driven systems, integrate image processing solutions, and optimize industrial inspection workflows using MySQL and Halcon.",
};


export const cardData = [
  {
    icon: "👤",
    title: "About Me",
    text: "Software Developer with 2 years of experience designing GUI-based applications and data-driven systems. I deliver user-focused solutions using Java, Spring Boot, C++/Qt and MySQL, with strong expertise in building efficient and scalable architectures.",
  },
  {
    icon: "⭐",
    title: "What I Do",
    text: "I build Java applications, optimize industrial inspection workflows, and integrate image-processing features using Halcon. I focus on improving system performance, usability, and automation to accelerate manufacturing operations.",
  },
  {
    icon: "",
    title: "My Passion",
    text: "I love developing reliable software, improving system efficiency, and exploring new technologies in UI/UX, automation, and smart industrial solutions.",
  },
];




export const HERO_CONTENT = `Software Developer with 2 years of experience in building GUI applications and data-driven systems. Proficient in Java, Spring 
Boot, Hibernate, MySQL, and C++/Qt for developing scalable desktop and web applications. Experienced in integrating Halcon 
for image processing, optimizing inspection workflows, and improving system usability. Skilled in crafting responsive UIs, reusable 
components, and clean architectures with hands-on exposure to React.js, JavaScript, and modern design practices. Experienced in 
integrating REST APIs and strong understanding of version control (Git/GitHub). Capable of delivering reliable, efficient, and 
user-focused software solutions. `;

export const ABOUT_TEXT = `I'm a Frontend Developer with 1.10 years of experience building high-performance, IoT-integrated web applications at CMTI. I specialize in React.js and Next.js, transforming complex industrial data into intuitive real-time dashboards that drive operational efficiency.
My expertise implementing in a architecting and developing scalable monitoring systems with real-time sensor integration and advanced data visualization. I've successfully delivered enterprise-grade solutions using React, Next.js, TypeScript, Tailwind CSS, and modern animation libraries, consistently meeting performance benchmarks and business requirements.
I specialize in building industrial monitoring systems that handle live sensor data, FFT analysis, and predictive maintenance alerts. My approach combines technical excellence with user-centric design, focusing on creating responsive applications that solve real-world challenges.
I thrive on solving challenging problems at the intersection of frontend development and IoT technology. Whether it's optimizing React component architecture, implementing sophisticated data visualization, or integrating RESTful APIs for real-time monitoring, I'm passionate about building applications that make a measurable impact.`

export const experiences = [
  {
    title: "Project Associate - 1 (Java Developer)",
    company_name: "Central Manufacturing Technology Institute",
    icon: CMTI_LOGO_Image,
    iconBg: "#383E56",
    date: "March 2024 - Present",
    technologies: ["Java", "C++", "Qt", "SQL", "Spring Boot", "Hibernate"],
    points: [
      "Developed GUI applications for PCB inspection using C++ and Qt, which improved the workflow efficiency and usability by around 30%",
      "Integrated Halcon image-processing features to automate defect detection and made the inspection process more accurate by about 25%",
"Designed and set up a MySQL-based data storage system that made storing and retrieving inspection reports easier and  faster by around 40%."
    ],

  },
  {
    title: "Java Development Intern",
    company_name: "KodNest",
    icon: KODNEST_LOGO_Image,
    iconBg: "#E6DEDD",
    date: "July 2023 - Feb 2024",
    technologies: ["Javascript", "React.js",  "MySQL", "Spring Boot", "MySQL", "Java", "Hibernate"],
    points: [
      "Implemented add-song functionality and audio playback module using Java backend and ReactJS frontend, increasing content uploads by 35% and improving user engagement.",
      "Built a responsive ReactJS frontend to display playlists, upload tracks, and play songs with a custom audio player, improving user engagement and delivering seamless UI/UX for real-time music streaming.",
    ],
  },

];



export const EXPERIENCES = [
  {
    year: "Feb-2024 - Present",
    role: "Frontend Developer",
    company: "CMTI - [Ministry of Heavy Indurstries govt. of India]",
    description: `
Designed and developed user interfaces for web applications using React and Tailwind CSS Bootstrap.
Implemented robust user validation techniques to enhance security and the user experience, ensuring intuitive navigation and fast loading times. 
Implemented responsive designs and optimized frontend performance.`,
    technologies: ["Javascript", "React.js", "NextJS", "Python", "MongoDB", "MySQL", "Bootstrap", "Redux", "Tailwind.CSS",],
  },
];

export const COMPANY_PROJECTS = [
  {
    title: `Automated Optical Inspection for System PCB’s `,
    image: project7,
    description:"Developing a GUI-based Automated Optical Inspection system using C++, Qt, and Halcon that improved PCB defect detection speed by 30% and increased inspection accuracy by 25%, significantly enhancing workflow efficiency in manufacturing operations.",
    technologies: ["Java", "C++", "SQL", "Qt", "Spring Boot", "Hibernate"],
    link: ""
  },
  
];


export const PERSONAL_PROJECTS = [
  
  {
    title: "Responsive Gym Website",
    image: project9,
    description:
      "A responsive gym website with features like an eye-catching showcase for gym plans, sections for reviews, gallery, and trainers, ensuring compatibility across various devices and screen sizes.",
    technologies: ["HTML", "CSS", "Bootstrap", "React"],
    link: "https://responsive-gym-website-xi.vercel.app/"
  },
  
]