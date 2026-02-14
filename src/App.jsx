import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative overflow-x-hidden bg-slate-950 text-white">
      {/* Subtle Static Gradient Background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
