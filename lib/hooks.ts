import { useActiveSectionContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { links } from "@/lib/data";

type useSectionInViewTypes = (typeof links)[number]["name"];

function useSectionInView(
  sectionName: useSectionInViewTypes,
  threshold = 0.75
) {
  const { setActiveSection, timeSinceClick } = useActiveSectionContext();
  const { ref, inView } = useInView({ threshold });
  useEffect(
    function () {
      if (inView && Date.now() - timeSinceClick > 1000)
        setActiveSection(sectionName);
    },
    [inView, setActiveSection, timeSinceClick, sectionName]
  );
  return { ref };
}

export default useSectionInView;
