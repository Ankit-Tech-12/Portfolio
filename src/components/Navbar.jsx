import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = ["home", "about", "skills", "projects", "contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-slate-900/40 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* Logo */}
          <h1 className="text-xl md:text-2xl font-bold tracking-wide text-cyan-400">
            AnKit Gupta 
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-10 text-gray-300 font-medium">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="capitalize relative group transition duration-300 hover:text-cyan-400"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1 z-50"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="w-6 h-0.5 bg-cyan-400 rounded"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="w-6 h-0.5 bg-cyan-400 rounded"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="w-6 h-0.5 bg-cyan-400 rounded"
            />
          </button>
        </div>
      </motion.nav>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Slide Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-screen w-[75%] max-w-sm bg-slate-950 border-l border-white/10 z-50 flex flex-col"
            >
              {/* Close Button */}
              <div className="flex justify-end p-6">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-cyan-400 text-2xl transition duration-300"
                >
                  ✕
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-col items-center justify-center flex-1 gap-8 text-xl font-medium text-gray-300">
                {navLinks.map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    onClick={() => setIsOpen(false)}
                    className="capitalize relative group transition duration-300 
                               hover:text-cyan-400 
                               hover:scale-105 
                               hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]"
                  >
                    {item}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
