import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS / Tailwind", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React", level: 85 },
  { name: "Redux Toolkit", level: 75 },
  { name: "Git & GitHub", level: 70 },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.4 });

  return (
    <section
      id="skills"
      ref={ref}
      className="scroll-mt-24 min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-4xl w-full">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="text-cyan-400">Skills</span>
          </h2>
          <p className="text-gray-400 mt-4">
            Technologies I use to build scalable and modern applications.
          </p>
        </motion.div>

        {/* Skills List */}
        <div className="space-y-8">
          {skills.map((skill, index) => (
            <div key={skill.name}>
              
              {/* Skill Label */}
              <div className="flex justify-between mb-2">
                <span className="text-gray-300 font-medium">
                  {skill.name}
                </span>
                <span className="text-cyan-400 text-sm">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar Background */}
              <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden border border-white/10">

                {/* Animated Progress */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{
                    width: isInView ? `${skill.level}%` : "0%",
                  }}
                  transition={{
                    duration: 1,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                />

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
