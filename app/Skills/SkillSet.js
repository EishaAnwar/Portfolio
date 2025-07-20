"use client";

import {
  FaCode,
  FaCogs,
  FaPalette,
  FaTools,
  FaDatabase,
  FaServer,
  FaBug,
  FaPaintBrush,
  FaWrench,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiBootstrap,
  SiSass,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiGitlab,
  SiDocker,
  SiJest,
  SiTestinglibrary,
  SiCypress,
  SiFigma,
  SiAdobe,
  SiCanva,
  SiWebpack,
  SiBabel,
  SiEslint,
  SiPrettier,
  SiHtml5,
  SiCss3,
  SiC,
  SiCplusplus,
} from "react-icons/si";
import { motion } from "framer-motion";

const skillData = [
  {
    title: "Languages",
    icon: <FaCode size={28} />,
    color: "bg-purple-500",
    skills: [
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss3 /> },
      { name: "C", icon: <SiC /> },
      { name: "C++", icon: <SiCplusplus /> },
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: <FaServer size={28} />,
    color: "bg-green-500",
    skills: [
      { name: "React.js", icon: <SiReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express", icon: <SiExpress /> },
    ],
  },
  {
    title: "Styling & UI",
    icon: <FaPaintBrush size={28} />,
    color: "bg-pink-500",
    skills: [
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Sass", icon: <SiSass /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
    ],
  },
  {
    title: "Databases",
    icon: <FaDatabase size={28} />,
    color: "bg-yellow-500",
    skills: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
    ],
  },
  {
    title: "Version Control & DevOps",
    icon: <FaTools size={28} />,
    color: "bg-blue-500",
    skills: [
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "GitLab", icon: <SiGitlab /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "CI/CD", icon: <FaWrench /> },
    ],
  },
  {
    title: "Build Tools",
    icon: <FaCogs size={28} />,
    color: "bg-orange-500",
    skills: [
      { name: "Babel", icon: <SiBabel /> },
      { name: "Webpack", icon: <SiWebpack /> },
      { name: "ESLint", icon: <SiEslint /> },
      { name: "Prettier", icon: <SiPrettier /> },
    ],
  },
  {
    title: "Testing Tools",
    icon: <FaBug size={28} />,
    color: "bg-red-500",
    skills: [
      { name: "Jest", icon: <SiJest /> },
      { name: "React Testing Library", icon: <SiTestinglibrary /> },
      { name: "Cypress", icon: <SiCypress /> },
    ],
  },
  {
    title: "Design Tools",
    icon: <FaPalette size={28} />,
    color: "bg-pink-600",
    skills: [
      { name: "Figma", icon: <SiFigma /> },
      { name: "Adobe XD", icon: <SiAdobe /> },
      { name: "Canva", icon: <SiCanva /> },
    ],
  },
  {
    title: "Methodologies",
    icon: <FaCogs size={28} />,
    color: "bg-teal-500",
    skills: [{ name: "Agile" }, { name: "Scrum" }],
  },
];

export default function SkillSet() {
  return (
    <div className="container" id="skills">
      <div className="title">
        <p>Skills</p>
      </div>
      <div className="skill-set container mx-auto px-4 py-10 grid gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
        {skillData.map((set, index) => (
          <div
            key={index}
            className={`rounded-xl shadow-lg p-4 sm:p-5 md:p-6 transition-all duration-300 ${set.color} bg-opacity-10 backdrop-blur-sm`}
          >
            <div className="flex flex-wrap items-center mb-4 min-w-0">
              <div className="flex items-center gap-4 min-w-0 w-full">
                <div
                  className={`rounded-full w-12 h-12 flex-shrink-0 flex items-center justify-center text-white ${set.color}`}
                >
                  {set.icon}
                </div>

                <h3 className="text-xl font-bold text-white break-words whitespace-normal w-full max-w-full min-w-0">
                  {set.title}
                </h3>
              </div>
            </div>

            {/* ✅ Skills with word break support */}
            <div className="flex flex-wrap gap-2 mt-4">
              {set.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="group cursor-pointer px-4 py-2 text-sm font-medium rounded-full border border-white text-white hover:border-dashed hover:border-white flex items-center gap-2 break-words whitespace-normal max-w-full"
                >
                  {skill.icon && <span className="text-lg">{skill.icon}</span>}
                  <span className="break-words whitespace-normal">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
