import { useEffect, useState } from "react";

const sectionIds = ["home", "about", "projects", "skills", "stories", "contact"];

export default function useNavigationObserver() {
  const [viewedSection, setViewedSection] = useState("#home");
  const [isVertical, setIsVertical] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    const scrollY = window.scrollY;

    // Force "home" if near top
    if (scrollY < 100) {
      setViewedSection("#home");
      setIsVertical(false);
      return;
    }

    let closestSection = "";
    let minDistance = Infinity;

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (!el) continue;

      const rect = el.getBoundingClientRect();
      const middle = window.innerHeight / 2;
      const sectionMiddle = rect.top + rect.height / 2;
      const distance = Math.abs(middle - sectionMiddle);

      if (distance < minDistance) {
        minDistance = distance;
        closestSection = `#${id}`;
      }
    }

    // Only update if different
    setViewedSection((prev) => {
      if (prev !== closestSection) {
        return closestSection;
      }
      return prev;
    });

    setIsVertical(scrollY > 150);
  };

  handleScroll(); // Run on mount

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("resize", handleScroll);
  };
}, []);


  return { viewedSection, isVertical };
}
