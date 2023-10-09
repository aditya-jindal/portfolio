"use client";
import { useEffect } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import useSectionInView from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.24);
  // ref={ref}

  // const { setActiveSection, timeSinceClick } = useActiveSectionContext();
  // const { ref, inView } = useInView({ threshold: 0.5 });
  // useEffect(
  //   function () {
  //     if (inView && Date.now() - timeSinceClick > 1000)
  //       setActiveSection("Projects");
  //   },
  //   [inView, setActiveSection, timeSinceClick]
  // );

  return (
    <section id="projects" ref={ref} className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <Project {...project} key={index} />
        ))}
      </div>
    </section>
  );
}
