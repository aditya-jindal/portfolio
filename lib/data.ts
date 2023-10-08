import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import fastReactPizza from "@/public/fast-react-pizza.png";
import usePopcorn from "@/public/use-popcorn.png";
import pigGame from "@/public/pig-game.png";
import irctcClone from "@/public/irctc-clone.png";
import portfolio from "@/public/portfolio.png";
import groceryClock from "@/public/grocery-clock.png";
import wildOasis from "@/public/wild-oasis-2.png";
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
      "I'm currently working part-time as a Front-End Web Developer at VITrendz. My main role involves working alongside a team and implementing front-end for our apps. By designing intuitive interfaces, I aim to enrich the student experience at VIT and contribute positively to their academic journey.",
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
    liveUrl: "https://fast-react-pizza-aditya.netlify.app/",
    sourceUrl: "https://github.com/aditya-jindal/fast-react-pizza",
  },
  {
    title: "usePopcorn",
    description:
      "A web app that lets users keep track of the movies they watched. The app uses the OMDb API to fetch movie data from IMDb.",
    tags: ["React", "ContextAPI"],
    imageUrl: usePopcorn,
    liveUrl: "https://usepopcorn-by-aditya.netlify.app/",
    sourceUrl: "https://github.com/aditya-jindal/usePopcorn",
  },
  {
    title: "IRCTC Clone",
    description:
      "A clone of IRCTC website. My first web development project built using vanilla technologies.",
    tags: ["HTML", "CSS", "JAVASCRIPT"],
    imageUrl: irctcClone,
    liveUrl: "https://aditya-jindal.github.io/IRCTC-clone",
    sourceUrl: "https://github.com/aditya-jindal/IRCTC-clone",
  },
  {
    title: "OneTurnWin",
    description:
      "An interactive two-player dice game in which players strategically accumulate points by rolling dice and aim to be the first to reach 100 points.",
    tags: ["HTML", "CSS", "JAVASCRIPT"],
    imageUrl: pigGame,
    liveUrl: "https://aditya-jindal.github.io/pigGame/",
    sourceUrl: "https://github.com/aditya-jindal/pigGame",
  },
  {
    title: "Portfolio",
    description: "This portfolio website. Design inspired by ByteGrad.",
    tags: [
      "Next.js",
      "React",
      "Tailwind",
      "Redux",
      "TypeScript",
      "Framer Motion",
      "React Resend",
    ],
    imageUrl: portfolio,
    liveUrl: "https://adityajindal.vercel.app/",
    sourceUrl: "https://github.com/aditya-jindal/portfolio",
  },
  {
    title: "Wild Oasis",
    description:
      "A website designed for hotel staff, aiding in booking management and sales tracking.",
    tags: ["React", "Tailwind", "React Query"],
    imageUrl: wildOasis,
    liveUrl: "dne",
    sourceUrl: "dne",
  },
  {
    title: "Grocery Clock",
    description:
      "An app aiding users in managing groceries by recommending recipes based on item expiration to combat food waste effectively.",
    tags: ["Next.js", "React", "Tailwind", "Redux"],
    imageUrl: groceryClock,
    liveUrl: "dne",
    sourceUrl: "dne",
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
