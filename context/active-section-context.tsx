"use client";
import { useState, useContext } from "react";
import { links } from "@/lib/data";
import { createContext } from "react";
type NavType = (typeof links)[number]["name"];

type ActiveNavContextType = {
  activeSection: NavType;
  setActiveSection: React.Dispatch<React.SetStateAction<NavType>>;
  timeSinceClick: number;
  setTimeSinceClick: React.Dispatch<React.SetStateAction<number>>;
};
const ActiveSectionContext = createContext<ActiveNavContextType | null>(null);

function ActiveSectionProvider({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState<NavType>("Home");
  const [timeSinceClick, setTimeSinceClick] = useState<number>(0);
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeSinceClick,
        setTimeSinceClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);
  if (context === null)
    throw new Error("useActiveSectionContext called outside Provider");
  return context;
}

export default ActiveSectionProvider;
