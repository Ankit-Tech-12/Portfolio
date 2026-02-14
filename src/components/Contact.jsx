import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="scroll-mt-24 min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden"
    >

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="max-w-2xl w-full text-center bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl shadow-2xl"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Let’s <span className="text-cyan-400">Connect</span>
        </h2>

        <p className="text-gray-400 mb-10">
          I'm open to freelance projects, internships, and full-time
          opportunities. Let’s build something amazing together.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">

          <a
            href="mailto:ankitgupta93727@gmail.com"
            className="px-6 py-3 bg-cyan-500 text-black rounded-xl hover:bg-cyan-400 transition duration-300 hover:scale-105"
          >
            Email Me
          </a>

          <a
            href="https://github.com/Ankit-Tech-12/"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 border border-white/20 rounded-xl hover:bg-white/10 transition duration-300 hover:scale-105"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/ankitgupta012/"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 border border-white/20 rounded-xl hover:bg-white/10 transition duration-300 hover:scale-105"
          >
            LinkedIn
          </a>

        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
