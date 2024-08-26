"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";

import { ScrollArea } from "../../components/ui/scroll-area";
import { motion } from "framer-motion";

const about = [
  {
    title: "About me",
    description:
      "As a web developer, I specialize in building responsive, user-friendly websites by integrating clean code and modern technologies. I turn ideas into seamless digital solutions that deliver both functionality and visual appeal.",
    info: [
      {
        fieldName: "Name",
        fieldValue: "Alif Hossen",
      },
      {
        fieldName: "Phone",
        fieldValue: "(+880) 18349-10647",
      },
      {
        fieldName: "Experience",
        fieldValue: "2+ Years",
      },
      {
        fieldName: "skype",
        fieldValue: "Alif.01",
      },
      {
        fieldName: "Nationality",
        fieldValue: "American",
      },
      {
        fieldName: "Email",
        fieldValue: "alifhossen3721@gmail.com",
      },
      {
        fieldName: "Freelance",
        fieldValue: "Available",
      },
      {
        fieldName: "Languages",
        fieldValue: "English, Bengali, hindi",
      },
    ],
  },
];

//experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "I have experience in developing dynamic and responsive websites using a range of modern web technologies. My focus is on delivering efficient, user-centric solutions that combine clean design with robust functionality.",
  items: [
    {
      company: "Tech Solutions Inc.",
      position: "Full-Stack Developer",
      duration: "2022 - Present",
    },
    {
      company: "Web Design Studio",
      position: "Front-end Developer Intern",
      duration: "Summer 2021",
    },
    {
      company: "E-commerce Startup",
      position: "Freelance Web developer",
      duration: "2020 - 2021",
    },
    {
      company: "Tech Academy",
      position: "Teaching Assistant",
      duration: "2019 - 2020",
    },
    {
      company: "Digital Agency",
      position: "UI/UX Designer",
      duration: "2018 - 2019",
    },
    {
      company: "NextGen Software Firm",
      position: "Junior Developer",
      duration: "2017 - 2018",
    },
  ],
};

//education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "I've honed my skills in web development through a mix of formal education and hands-on experience. My learning journey has been focused on mastering both front-end and back-end technologies to build comprehensive digital solutions.",
  items: [
    {
      institution: "Programming Hero",
      degree: "Advance Web Development Bootcamp",
      duration: "2023",
    },
    {
      institution: "Programming Hero",
      degree: "Full-Stack Web Development Bootcamp",
      duration: "2022",
    },
    {
      institution: "Solo-learn",
      degree: "Basic JavaScript",
      duration: "2021",
    },
    {
      institution: "Solo-learn",
      degree: "Basic HTML & CSS",
      duration: "2021",
    },
    {
      institution: "Icon Technologies",
      degree: "Diploma in Graphics Design",
      duration: "2016-2018",
    },
  ],
};

//skill data
const skills = {
  title: "My Skills",
  description:
    "My skills include front-end development with HTML, CSS, and JavaScript, alongside frameworks like React. On the back-end, I work with Node.js and databases like MongoDB. I’m also proficient in UI/UX design, responsive web design, and SEO best practices to create well-rounded digital experiences.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javaScript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
  ],
};

const Resume = () => {
  return <div>Resume page</div>;
};

export default Resume;
