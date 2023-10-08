import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import fastReactPizza from "@/public/fast-react-pizza.png";
import usePopcorn from "@/public/use-popcorn.png";
import pigGame from "@/public/pig-game.png";
import irctcClone from "@/public/irctc-clone.png";

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
    title: "Front-End Web Developer",
    location: "VITrendz",
    description:
      "I'm currently working part-time as a front-end web developer for VITrendz. My main task is to apply my skills in front-end to develop platforms that help VITians improve their quality of life. ",
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2023-Present",
  },
] as const;

export const projectsData = [
  {
    title: "Fast React Pizza",
    description:
      "A pizza delivery app made using react.js and tailwind. A fully functional app in which the orders can be modified/tracked using the respective orderIDs.",
    tags: ["React", "Tailwind", "Redux"],
    imageUrl: fastReactPizza,
  },
  {
    title: "usePopcorn",
    description:
      "A web app that lets users keep track of the movies they watched. The app uses the OMDb API to fetch movie data from IMDb.",
    tags: ["React", "ContextAPI"],
    imageUrl: usePopcorn,
  },
  {
    title: "IRCTC Clone",
    description:
      "A pizza delivery app made using react.js and tailwind. Features a responsive design and is a fully functional app in which the orders can be modified/tracked using the respective orderIDs.",
    tags: ["HTML", "CSS", "JAVASCRIPT"],
    imageUrl: irctcClone,
  },
  {
    title: "OneTurnWin",
    description:
      "An interactive two-player dice game in which players strategically accumulate points by rolling dice and aim to be the first to reach 100 points.",
    tags: ["HTML", "CSS", "JAVASCRIPT"],
    imageUrl: pigGame,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Redux",
  "Framer Motion",
  "Python",
  "Java",
  "C++",
] as const;
