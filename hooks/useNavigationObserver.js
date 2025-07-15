import { useEffect, useState } from "react";

const sectionIds = ["home","about", "projects", "skills", "stories", "contact"];

export default function useNavigationObserver() {
  const [viewedSection, setViewedSection] = useState("");
  const [isVertical, setIsVertical] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
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

      if (closestSection && closestSection !== viewedSection) {
        setViewedSection(closestSection);
      }

      // Optional: Toggle vertical nav when scrolled past a point
      setIsVertical(window.scrollY > 150);
    };

    // Run on mount
    handleScroll();

    // Listen for scroll + resize
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    console.log("active", viewedSection);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [viewedSection]);

  return { viewedSection, isVertical };
}
