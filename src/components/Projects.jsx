import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "Ugram",
    description:
      "A full-stack social media platform with secure authentication, image uploads, real-time likes, and responsive modern UI.",
    tech: "React • Redux Toolkit • Node.js • Express • MongoDB • Tailwind",
    github: "https://github.com/Ankit-Tech-12/Ugram.git",
    live: "https://ugram-theta.vercel.app",
  },
  {
    title: "Smart Expense Analyzer",
    description:
      "A Redux Toolkit powered expense tracker with category filtering and real-time calculations.",
    tech: "React • Redux Toolkit • Tailwind",
    github: "https://github.com/Ankit-Tech-12/Smart-Expense-Analyzer.git",
    live: "https://smart-expense-analyzer-xi.vercel.app",
  },
  {
    title: "Employment Management System",
    description:
      "A React-based employee management app with Admin and Employee dashboards.",
    tech: "React • JavaScript • Tailwind • LocalStorage",
    github: "https://github.com/Ankit-Tech-12/Employe_Management_System.git",
    live: "https://employe-management-system-ivory.vercel.app",
  },
  {
    title: "Snake Game",
    description:
      "Classic Snake game built with HTML, CSS, and JavaScript featuring real-time gameplay.",
    tech: "HTML • CSS • JavaScript • LocalStorage",
    github: "https://github.com/Ankit-Tech-12/Snake-Game.git",
  },

  // Add future projects here
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll
    ? projects
    : projects.slice(0, 3);

  return (
    <section
      id="projects"
      className="scroll-mt-24 min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-6xl w-full">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="text-cyan-400">Projects</span>
          </h2>

          <p className="text-gray-400 mt-4">
            Some of the work I've built with modern technologies.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: false }}
              className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-xl group hover:scale-[1.03] transition duration-300"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition duration-300"></div>

              <div className="relative z-10">

                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <p className="text-cyan-400 text-sm mb-6">
                  {project.tech}
                </p>

                <div className="flex gap-4 flex-wrap">

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm px-4 py-2 border border-white/20 rounded-lg hover:bg-white/10 transition"
                    >
                      GitHub
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm px-4 py-2 bg-cyan-500 rounded-lg hover:bg-cyan-400 transition text-black font-medium"
                    >
                      Live Demo
                    </a>
                  )}

                </div>
              </div>
            </motion.div>
          ))}

        </div>

        {/* View More Button */}
        {projects.length > 3 && (
          <div className="flex justify-center mt-14">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 hover:bg-cyan-400 hover:text-black transition duration-300 font-medium"
            >
              {showAll ? "Show Less" : "View More"}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;