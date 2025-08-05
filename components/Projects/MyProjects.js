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
import ProjectDetails from "./ProjectDetails";

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
    link: "https://github.com/EishaAnwar/Portfolio/",
    tech: ["Next.js", "React", "Tailwind CSS", "Cloudinary", "Resend"],
    features: [
      "Built with Next.js and Tailwind CSS for performance, scalability, and modern styling",
      "Email functionality powered by Resend API with secure server-side handling",
      "Images hosted via Cloudinary for fast, optimized media delivery",
      "Deployed on Vercel with seamless CI/CD integration",
      "Custom domain: eishaanwar.me connected and configured",
    ],
    type: "webapp",
  },
  {
    name: "IBG (Intelligent Business Growth)",
    description:
      "IBG (Intelligent Business Growth) provides a structure for measuring the impact of multiple initiatives on the P&L and prescriptive insights for connected financial driven decision making. The platform will be integrated with up/downstream systems to systematically execute approved plans and offer end-to-end visibility into value realization.",
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
    type: "webapp",
    features: [
      "Built with React and Walmart’s internal design system (walmart-web/livingdesign-components) for consistent UI",
      "Built using Microfrontend Architecture enabling modular, plug-and-play component development for scalability and reusability",
      "Provides prescriptive insights and visualizations to assess impact across P&L for financial planning",
      "Built with AgGrid and Chart.js for dynamic data tables and insightful visual dashboards",
      "Internal analytics powered by Google Analytics to track user engagement and behavior",
      "Enables cross-functional collaboration during strategic planning to improve decision-making",
      "Integrates with upstream and downstream systems for seamless execution and visibility of approved plans",
      "Features end-to-end visibility into initiative value realization across the enterprise",
      "Uses Redux and GraphQL for state management and efficient data fetching",
      "Includes unit and integration tests using React Testing Library to ensure feature reliability",
    ],
  },
  {
    name: "Tripocity",
    description:
      "Tripocity is a mobile application designed to simplify trip planning by automatically generating itineraries based on user interests, travel duration, and location. It provides optimized routes on maps, location-based recommendations, editable trip plans, and real-time information including hotels, hospitals, emergency services, and nearby restaurants. The app supports both manual and system-generated trip customization, delivering a seamless travel planning experience.",
    preview: "/images/Thesis.jpeg",
    link: "https://github.com/EishaAnwar/FYP",
    tech: ["React Native", "Node.js", "MySql", "TomTom Map", "REST API"],
    isInternal: false,
    type: "mobile app",
    features: [
      "Built with Node.js backend, MySQL database, and REST APIs",
      "Interactive map with optimal travel routes and estimated travel time",
      "Manual trip creation and full itinerary editing before trip starts",
      "View images and information for all locations in the itinerary",
      "Nearby services: hotels, hospitals, emergency numbers, and restaurants",
      "Cross-platform support for Android and iOS (React Native)",
      "AI-assisted trip generation based on user interests and available time",
      "Real-time location tracking and map-based navigation",
      "Modular MVC architecture for scalable development",
    ],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div id="projects" className="container px-4 py-16 max-w-6xl mx-auto">
      <div className="title mb-8">
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
              {/* Image */}
              <div className="project-preview flex items-center justify-center overflow-hidden h-[160px] w-full sm:w-[92%] md:h-[93px] md:w-[160px] rounded-lg">
                <Image
                  src={project.preview}
                  alt={project.name}
                  width={300}
                  height={200}
                  className="object-contain w-full h-full"
                />
              </div>

              {/* Info */}
              <div className="project-info flex flex-col gap-2 w-full">
                <div className="flex justify-between">
                  <p className="text-xl font-bold">{project.name}</p>

                  {/* External Link (for public projects) */}
                  {project.link && !project.isInternal && (
                    <div className="mt-2 flex justify-end sm:justify-start px-2">
                      <div className="relative group inline-block">
                        <Link
                          href={project.link}
                          target="_blank"
                          alt={project.name}
                          className="text-xs text-[#f46c38] hover:underline flex items-center gap-1"
                          aria-label={`${project.name} link`}
                        >
                          <FaArrowUpRightFromSquare
                            alt="openlink"
                            className="text-[10px] cursor-pointer"
                          />
                        </Link>

                        {/* Tooltip */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-max max-w-xs bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                          Open Link
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <p className="text-[#998f8f] text-sm line-clamp-2">
                  {project.description}
                </p>

                {project.isInternal && (
                  <div className="relative group inline-block">
                    <p className="text-xs text-yellow-400 mt-1 italic">
                      ⚠️ Internal Project – accessible only via Walmart VPN
                    </p>

                    {project.link && (
                      <div className="absolute z-10 left-0 top-full mt-1 w-max max-w-xs bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                        {project.link}
                      </div>
                    )}
                  </div>
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

                <div className="mt-2 flex justify-end">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-sm text-[#f46c38] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    View Details{" "}
                    <FaArrowUpRightFromSquare className="text-xs" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for details */}
      {selectedProject && (
        <ProjectDetails
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          techIcons={techIcons}
        />
      )}
    </div>
  );
}
