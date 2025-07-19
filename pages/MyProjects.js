"use client";

import { useState } from "react";
import Link from "next/link";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Image from "next/image";
import {
  FaReact,
  FaChartBar,
  FaProjectDiagram,
  FaDatabase,
  FaTools,
  FaGripLines,
  FaSignInAlt,
  FaCloud,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import ProjectDetails from "./ProjectDetails"; // adjust path based on your folder structure

const techIcons = {
  React: <FaReact />,
  "Chart.js": <FaChartBar />,
  "Microfrontend Architecture": <FaProjectDiagram />,
  "Google Analytics": <FaChartBar />,
  Redux: <FaGripLines />,
  "REST API": <FaDatabase />,
  "React Testing Library": <FaTools />,
  GraphQL: <FaProjectDiagram />,
  JWT: <FaSignInAlt />,
  "Next.js": <SiNextdotjs />,
  "Tailwind CSS": <SiTailwindcss />,
  Cloudinary: <FaCloud />,
};

const projects = [
  {
    name: "Portfolio",
    description:
      "Portfolio site to highlight my skills, tech stack, and featured projects, built with modern technologies.",
    preview: "/images/PortfolioPreview.png",
    link: "https://eishaportfolio.vercel.app/",
    tech: ["Next.js", "React", "Tailwind CSS", "Cloudinary"],
  },
  {
    name: "IBG (Intelligent Business Growth)",
    description:
      "Internal Walmart tool using microfrontend architecture and analytics integration.",
    preview: "/images/WalmartLogo.png",
    link: "http://ibgworkbench.qa.walmart.com/",
    tech: [
      "React",
      "AgGrid",
      "Chart.js",
      "Microfrontend Architecture",
      "Google Analytics",
      "Redux",
      "REST API",
      "React Testing Library",
      "walmart-web/livingdesign-components",
      "GraphQL",
    ],
    isInternal: true,
  },
  {
    name: "Tripocity",
    description:
      "Internal Walmart tool using microfrontend architecture and analytics integration.",
    preview: "/images/Thesis.jpeg",
    link: "https://github.com/EishaAnwar/FYP",
    tech: ["React Native", "Node.js", "MySql", "TomTom Map", "REST API"],
    isInternal: false,
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div id="projects" className="container px-4 py-16 max-w-6xl mx-auto">
      <div className="title mb-[30px]">
        <p>Recent</p>
        <p>Projects</p>
      </div>

      <div className="projects-container flex flex-col gap-6 md:gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="project flex flex-col sm:flex-row justify-between items-start text-white cursor-default rounded-[16px] transition duration-300 px-[10px] py-[16px] border border-transparent hover:-translate-y-1 hover:bg-[#1a1817] hover:shadow-lg hover:border-[#f46c38] hover:border-l-[8px]"
          >
            <div className="inner-container flex flex-col md:flex-row items-center gap-5 w-full">
              <div className="project-preview flex items-center justify-center overflow-hidden h-[160px] w-full sm:w-[92%] md:h-[93px] md:w-[160px] rounded-lg">
                <Image
                  src={project.preview}
                  alt={project.name}
                  width={300}
                  height={200}
                  className="object-contain w-full h-full"
                />
              </div>

              <div className="project-info flex flex-col gap-[3px] w-full">
                <p className="text-[24px] font-bold">{project.name}</p>
                <p className="text-[#998f8f] text-sm line-clamp-2">
                  {project.description}
                </p>

                {project.isInternal && (
                  <p className="text-xs text-yellow-400 mt-1 italic">
                    ⚠️ Internal Project – accessible only via Walmart VPN
                  </p>
                )}
                {project.link && project.isInternal && (
                  <p className="text-xs text-gray-400 break-all mt-1">
                    URL: {project.link}
                  </p>
                )}

                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-1 px-2 py-0.5 text-[10px] bg-white/10 text-white border border-white/30 rounded-full"
                    >
                      {techIcons[tech] || null} {tech}
                    </span>
                  ))}
                </div>

                {/* <div className="mt-2 flex justify-end">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-sm text-[#f46c38] hover:underline flex items-center gap-1"
                  >
                    View Details{" "}
                    <FaArrowUpRightFromSquare className="text-xs" />
                  </button>
                </div> */}
              </div>
            </div>

            {project.link && !project.isInternal && (
              <div className="mt-2 flex justify-end">
                <Link
                  href={project.link}
                  target="_blank"
                  className="text-sm text-[#f46c38] hover:underline flex items-center gap-1"
                >
                  <FaArrowUpRightFromSquare
                    width={24}
                    height={24}
                    className="text-xs"
                  />
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>

      <ProjectDetails
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        techIcons={techIcons}
      />
    </div>
  );
}
