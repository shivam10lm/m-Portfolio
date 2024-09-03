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
    title: "Teaching Assistant - Full Stack Web Development",
    company_name: "University of Calgary",
    icon: ucal,
    iconBg: "#fff",
    date: "Jan 2024 - April 2024",
    points: [
      "Coordinated technical workshops as a Teaching Assistant for over 100 students, enhancing their skills in modern web frameworks and RESTful API integration, while fostering a collaborative learning environment.",
      "Mentored 10+ students in best practices for front-end and back-end development, focusing on secure, scalable, and maintainable code",
    ],
  },
  {
    title: "Project Engineer",
    company_name: "Wipro Limited",
    icon: wipro,
    iconBg: "#fff",
    date: "Aug 2021 - July 2022",
    points: [
      "Spearheaded the development of cross-browser web applications for the Indian Air Force, achieving a 95% user satisfaction rate by implementing efficient code and robust data structures.",
      "Enhanced the performance of web applications by integrating advanced Node.js packages, achieving a 25% reduction in load times and markedly improving the end-user experience.",
      "Adapted and integrated new technologies such as Docker and Kubernetes into existing systems, reducing deployment times by 30% and demonstrating flexibility and continuous learning in a dynamic technological landscape.",
    ],
  },
  {
    title: "Junior Developer Intern",
    company_name: "Rubodex Herbal Private Limited",
    icon: rubodex,
    iconBg: "#fff",
    date: "April 2020 - Dec 2020",
    points: [
      "Engineered and deployed a robust payment gateway, boosting online sales by 50% through streamlined transaction processes using Stripe API |Optimized the e-commerce store's speed statistic & boosted its Google score to 90+.",
      "Developed a custom WhatsApp API for real-time order notifications, enhancing customer engagement by 20% and optimizing the order tracking system.",
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
