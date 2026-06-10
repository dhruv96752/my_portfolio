import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Page Views
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Certifications from "./pages/Certifications";
import GitHub from "./pages/GitHub";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/github" element={<GitHub />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/contact" element={<Contact />} />
        {/* Redirect unknown routes back to Home */}
        <Route path="*" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div
        id="portfolio-applet"
        className="min-h-screen bg-white text-slate-800 font-sans antialiased selection:bg-blue-100 selection:text-blue-900 flex flex-col justify-between"
      >
        {/* Sticky navbar */}
        <Header />

        {/* Dynamic content with fluid page transitions */}
        <main className="w-full pt-14 sm:pt-20 flex-grow">
          <AnimatedRoutes />
        </main>

        {/* Global footer screen elements */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
