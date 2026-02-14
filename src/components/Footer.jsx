import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative px-6 py-10 border-t border-white/10 bg-slate-950">

      {/* Top subtle gradient line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
      >
        {/* Left */}
        <div>
          <h3 className="text-lg font-semibold text-cyan-400">
            AniKit Gupta
          </h3>
          <p className="text-gray-400 text-sm mt-1">
            Building modern, scalable web experiences.
          </p>
        </div>

        {/* Center Links */}
        <div className="flex gap-6 text-gray-400 text-sm">
          <a href="#home" className="hover:text-cyan-400 transition">
            Home
          </a>
          <a href="#about" className="hover:text-cyan-400 transition">
            About
          </a>
          <a href="#projects" className="hover:text-cyan-400 transition">
            Projects
          </a>
        </div>

        {/* Right */}
        <div className="text-gray-500 text-sm">
          © {new Date().getFullYear()} AnKit Gupta. All rights reserved.
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
