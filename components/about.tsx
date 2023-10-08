"use client";
import { useEffect } from "react";
import { useActiveSectionContext } from "@/context/active-section-context";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import useSectionInView from "@/lib/hooks";

function About() {
  const { ref } = useSectionInView("About");
  // const { setActiveSection, timeSinceClick } = useActiveSectionContext();
  // const { ref, inView } = useInView({ threshold: 0.75 });
  // useEffect(
  //   function () {
  //     if (inView && Date.now() - timeSinceClick > 1000)
  //       setActiveSection("About");
  //   },
  //   [inView, setActiveSection, timeSinceClick]
  // );

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Highly motivated and enthusiastic{" "}
        <span className="font-semibold">
          Computer Science Engineering (CSE){" "}
        </span>
        sophomore at <span className="font-semibold">VIT, Vellore</span> with a
        strong academic background and a passion for technology. Possessing
        <span className="font-semibold">
          {" "}
          solid foundational knowledge{" "}
        </span>in{" "}
        <span className="underline italic">
          Front-End Web Development,
        </span>{" "}
        combined with excellent problem-solving skills. A quick learner with a{" "}
        <span className="font-semibold"> keen eye for detail</span> and a
        dedication to delivering{" "}
        <span className="font-semibold italic">high-quality results</span>.
        Strong communication and teamwork abilities, with a proven track record
        of collaborating effectively with diverse groups to accomplish shared
        objectives.{" "}
        <span className="font-semibold">Seeking an opportunity </span>to apply
        my skills and contribute to
        <span className="italic font-semibold"> innovative </span>projects while
        further developing my expertise in the field of web development.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy
        playing video games, watching movies, and reading books. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about the<span className="font-medium"> Indian Mythology.</span>
      </p>
    </motion.section>
  );
}

export default About;
