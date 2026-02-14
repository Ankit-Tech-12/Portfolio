import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const About = () => {
  const text = "Frontend Developer & UI Enthusiast";
  const [displayedText, setDisplayedText] = useState("");
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, { amount: 0.4 });

  // Clean Typing Logic
  useEffect(() => {
    let interval;

    if (isInView) {
      let i = 0;
      setDisplayedText("");

      interval = setInterval(() => {
        i++;
        setDisplayedText(text.slice(0, i));

        if (i >= text.length) clearInterval(interval);
      }, 60);
    } else {
      setDisplayedText("");
    }

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="scroll-mt-24 relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden"
    >
      
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="relative flex justify-center"
        >
          {/* Animated Gradient Border */}
          <div className="absolute w-72 h-72 md:w-80 md:h-80 rounded-3xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-spin-slow blur-xl opacity-30"></div>

          {/* Floating Image */}
          <motion.img
            src="../public/Profile.jpeg"
            alt="Profile"
            animate={{ y: [0, -15, 0] }}
            loading="lazy"
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-64 h-64 md:w-72 md:h-72 object-cover rounded-3xl border border-white/10 shadow-2xl"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>

          {/* Typing Effect */}
          <p className="text-cyan-400 font-medium text-lg h-6 mb-6">
            {displayedText}
            <span className="animate-pulse">|</span>
          </p>

          <p className="text-gray-400 leading-relaxed mb-8">
            I build modern, scalable and responsive web applications using
            React and Tailwind. I focus on performance, clean architecture,
            and smooth UI animations that enhance user experience.
          </p>

          {/* Glassmorphism Cards */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl 
                            transition duration-300 
                            hover:scale-105 
                            hover:border-cyan-400/40 
                            hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]">
              <p className="text-cyan-400 font-bold text-xl">3+</p>
              <p className="text-gray-400 text-sm">Projects Built</p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl 
                            transition duration-300 
                            hover:scale-105 
                            hover:border-cyan-400/40 
                            hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]">
              <p className="text-cyan-400 font-bold text-xl">React</p>
              <p className="text-gray-400 text-sm">Primary Stack</p>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;
