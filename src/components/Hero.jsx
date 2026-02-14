import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="scroll-mt-24 min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 relative overflow-hidden"
    >
      
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
      >
        Hi, I'm <span className="text-cyan-400">Ankit Gupta</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="text-base sm:text-lg md:text-xl text-gray-400 max-w-xl md:max-w-2xl"
      >
        I build modern, scalable and high-performance web applications.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-8 flex flex-col sm:flex-row gap-4"
      >
        {/* Primary Button */}
        <a
          href="#projects"
          className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 transition rounded-2xl shadow-lg shadow-cyan-500/30 text-sm sm:text-base hover:scale-105"
        >
          View Projects
        </a>

        {/* Resume Button */}
        <a
          href="/Ankit.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-white/20 rounded-2xl text-sm sm:text-base 
                     hover:border-cyan-400 hover:text-cyan-400 
                     transition duration-300 hover:scale-105"
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
