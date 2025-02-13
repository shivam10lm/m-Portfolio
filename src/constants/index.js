import { ucal, wipro, rubodex } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [

    {
    title: "Software Developer",
    company_name: "Tech Connect Alberta",
    icon: ucal,
    iconBg: "#fff",
    date: "Nov 2024 - Present",
    points: [
      "Architected a dynamic mentorship platform with Next.js, TypeScript, Tailwind, and NextAuth.js, delivering seamless real-time mentor discovery and secure authentication.",
      "Implemented a robust backend system using PostgreSQL and Prisma ORM, streamlining data handling for mentor profiles, advanced search filters, and seamless booking workflows.",
      "Integrated RESTful APIs to enhance scalability, maintainability, and efficient communication with front-end services.",
"Enhanced application efficiency by implementing Zustand for streamlined global state management & scalable performance.",
    ],
  },

    {
    title: "Backend Developer Internship",
    company_name: "Reskill Calgary",
    icon: ucal,
    iconBg: "#fff",
    date: "Nov 2024 - Feb 2025",
    points: [
      "Developed and optimized the backend of Reskill Calgary using Express.js and PostgreSQL, ensuring efficient data handling and seamless user interactions.",
      " Implemented backend functionality for a newsletter system and a 'Send Me a Message' feature, enabling automated email subscriptions and direct user inquiries.",
    ],
  },

  
  {
    title: "Teaching Assistant - Full Stack Web Development",
    company_name: "University of Calgary",
    icon: ucal,
    iconBg: "#fff",
    date: "Jan 2024 - April 2024",
    points: [
      "Coordinated technical workshops as a Teaching Assistant for over 100 students, enhancing their skills in modern web frameworks, SOLID principles and Agile Software Lifecycle(SCRUM, Kanban).",
      "Mentored over 10 students in front-end and back-end development, emphasizing secure, scalable, and maintainable code, while also imparting UI/UX design and implementation to ensure a seamless user experience.",
    ],
  },
  {
    title: "Project Engineer",
    company_name: "Wipro Limited",
    icon: wipro,
    iconBg: "#fff",
    date: "Aug 2021 - July 2022",
    points: [
"Collaborated on the development of cross-browser web applications for the Indian Air Force using React, TypeScript, and Redux, achieving a 95% user satisfaction rate by optimizing performance and ensuring scalable architecture.",
"Optimized the performance and responsiveness of web applications by leveraging React features like code splitting and memoization, resulting in a 25% improvement in load times.",
"Conducted thorough unit testing across multiple modules using Jest, improved code quality, reducing production bugs by 40%.",
"Optimized SQL Server queries, improving data retrieval efficiency by 15% & enhancing overall application performance.",
"Adapted and integrated Docker into existing systems, incorporating CI/CD pipelines to streamline the deployment process, resulting in a 30% reduction in deployment times.",
    ],
  },
  {
    title: "Junior Software Developer",
    company_name: "Rubodex Herbal Private Limited",
    icon: rubodex,
    iconBg: "#fff",
    date: "April 2020 - Dec 2020",
    points: [
      "Engineered and deployed a full-stack e-commerce platform using React, Express, and MySQL, optimizing transaction processes and driving a 50% increase in online sales.",
      "Enhanced backend performance by optimizing Express API endpoints and refining MySQL database queries, achieving a 40% reduction in response times and delivering a seamless user experience.",
"Developed and integrated a custom WhatsApp API for real-time order notifications, providing customers with instant purchase and shipping updates, which led to a 20% boost in customer engagement.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/shivam10lm",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/shivamgupta-sg/",
  },
];

export const projects = [
   {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Cold Email Generator Chatbot",
    description:
      "Developed an end-to-end LLM-powered cold email generator using Llama 3.1, Vector Database(ChromaDB), LangChain, and Streamlit, designed to help software and AI services companies craft and send personalized cold emails to potential clients through an intuitive and efficient interface.",
    link: "https://huggingface.co/spaces/Shivam10lm/ColdEmail",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "AI Movie Recommendation System",
    description:
      "Engineered a Python-based Movie Recommender System using ML algorithms on a dataset of 4,803 films, achieving a 92% accuracy in delivering personalized recommendations. Enhanced user experience by leveraging detailed genre and casting data.",
    link: "https://movie-recommendation-system-xtz3bxlfty27cbxaurnagu.streamlit.app/",
  },

  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "AI Image Generation Application",
    description:
      "Designed and deployed a full-stack web application with Next.js, TypeScript, and MongoDB implementing user management, image transformations, search, and a credit system. Integrated Stripe for payments and used Cloudinary's AI to reduce image handling time by 40%.",
    link: "https://imaginify-sigma-sandy.vercel.app",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Car Racing Game",
    description:
      "Developed a dynamic car racing game utilizing Vanilla JavaScript, featuring real-time vehicle control mechanics and interactive game levels, demonstrating advanced programming skills and creative problem-solving in software development.",
    link: "https://shivam10lm.github.io/carGame/",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "YouTube Clone Application",
    description:
      "Implemented integration with RapidAPI to fetch real-time video data, resulting in a 40% reduction in loading time and enabling users to browse, search, and view videos seamlessly.",
    link: "https://csb-851kug.netlify.app/",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Weather Application",
    description:
      "Engineered an interactive weather application using React, implementing features for real-time weather data retrieval based on user-input location names, enhancing user experience through efficient search functionality and responsive design.",
    link: "https://3rshpn.csb.app/",
  },

];
