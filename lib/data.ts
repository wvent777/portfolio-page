import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap, LuAtom, LuDatabase } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated from Johns Hopkins University",
    location: "Baltimore, MD",
    description:
      "I graduated from Johns Hopkins University with a Dual Masters of Science in Artificial Intelligence and Computer Science",
    icon: React.createElement(LuGraduationCap),
    date: "May 2023",
  },
  {
    title: "AI/ML Graduate Research Intern @ Locker",
    location: "New York, NY",
    description:
      "Worked on engineering an outfit recommender and mapping articles of clothings to users with Computer Vision. Techonologies used include MediaPipe, OpenCV, TensorFlow, and Docker.",
    icon: React.createElement(LuAtom),
    date: "January 2023 - April 2023",
  },
  {
    title: "Data Scientist @ Rise New York",
    location: "New York, NY",
    description:
      "Developed various predictive models on consumer behavior, assortment optimization, social media campagins, and demand generation for ecommerce. ",
    icon: React.createElement(LuDatabase),
    date: "November 2021 - January 2023",
  },
  {
    title: "Business Data Analyst @ IrriLights",
    location: "New York, NY",
    description:
      "Developed various predictive models on consumer behavior, assortment optimization, social media campagins, and demand generation for ecommerce. ",
    icon: React.createElement(LuDatabase),
    date: "November 2021 - January 2023",
  },
  {
    title: "Graduated From Virginia Tech",
    location: "New York, NY",
    description:
      "Developed various predictive models on consumer behavior, assortment optimization, social media campagins, and demand generation for ecommerce. ",
    icon: React.createElement(LuDatabase),
    date: "November 2021 - January 2023",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "Developed a sign langauge detection system that converted sign language to text in real time.",
    tags: ["Python", "MediaPipe", "OpenCV", "TensorFlow"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Sign Language System",
    description:
      "Developed a sign langauge detection system that converted sign language to text in real time.",
    tags: ["Python", "MediaPipe", "OpenCV", "TensorFlow"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "Developed a sign langauge detection system that converted sign language to text in real time.",
    tags: ["Python", "MediaPipe", "OpenCV", "TensorFlow"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Project 4",
    description:
      "Developed a sign langauge detection system that converted sign language to text in real time.",
    tags: ["Python", "MediaPipe", "OpenCV", "TensorFlow"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "NextJS",
  "NodeJS",
  "Git",
  "Docker",
  "Tailwind",
  "MongoDB",
  "GraphQL",
  "PostgreSQL",
  "Python",
  "Framer Motion",
  "TensorFlow",
  "NumPy",
  "ScikitLearn",
  "Bash",
  "Keras",
  "OpenCV",
  "MediaPipe",
  "CUDA",
  "AWS",
  "Firebase",
  "SciPy",
  "NLTK",
  "PyTorch",
] as const;
