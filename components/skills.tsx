"use client";
import useSectionInView from "@/lib/hooks";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";
function Skills() {
  const { ref } = useSectionInView("Skills");
  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3"
            key={index}
            initial={{ opacity: 0, y: 100 }}
            custom={index}
            variants={{
              animate: (index: number) => ({
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.035 * index,
                },
              }),
            }}
            whileInView="animate"
            viewport={{ once: true }}
            // variants={fadeInAnimationVariants}
            // initial="initial"
            // whileInView="animate"
            // viewport={{
            //   once: true,
            // }}
            // custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
