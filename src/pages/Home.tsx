import { ArrowRight, Code2, Cpu, Sparkles, Star } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { PROJECTS } from "../data";
import Hero from "../components/Hero";
import StatsSection from "../components/Stats";
import PageWrapper from "../components/PageWrapper";
import { motion } from "motion/react";

export default function Home() {
  const navigate = useNavigate();
  // Filter for featured projects
  const featuredProjects = PROJECTS.filter((proj) => proj.featured);

  return (
    <PageWrapper>
      {/* Hero section */}
      <Hero scrollToSection={(id) => {
        if (id === "contact") navigate("/contact");
        else navigate("/");
      }} />

      {/* Quick stats dashboard */}
      <StatsSection />

      {/* Brief elegant introduction module */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Design accents */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-xs font-mono font-semibold">
                <Sparkles className="h-3 w-3 text-blue-600" />
                FOUNDATIONAL PILLAR
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Bridging Logic with Machine Intellect
              </h2>
              <p className="text-slate-600 leading-relaxed font-sans text-sm sm:text-base">
                As a B.Tech Computer Science student specializing in AI & ML, I combine rigorous algorithmic engineering with state-of-the-art deep learning architectures. 
              </p>
              <p className="text-slate-600 leading-relaxed font-sans text-sm sm:text-base">
                I believe that intelligence belongs in reliable, high-performance runtime environments—not just isolated Jupyter notebooks. This portfolio represents that standard of design.
              </p>
              <div className="pt-2">
                <Link
                  id="home-about-link"
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 group cursor-pointer"
                >
                  Explore My Profile & Goals
                  <ArrowRight className="h-4 w-4 tracking-normal group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Interactive bento feature blocks */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div
                id="feat-core-logic"
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-150px" }}
                transition={{ duration: 1.0, ease: "easeInOut" }}
                className="p-6 bg-slate-50 border border-slate-100 rounded-2xl space-y-4 hover:border-slate-200 transition-all shadow-2xs"
              >
                <div className="p-3 bg-white border border-slate-100 rounded-xl w-fit">
                  <Code2 className="h-5 w-5 text-blue-600" />
                </div>
                <h4 className="font-bold text-slate-900 text-md">High-Performance Java OOP</h4>
                <p className="text-xs text-slate-500 leading-relaxed leading-medium">
                  Refined knowledge of memory structures, custom generic collections, thread syncing, and algorithmic complexity.
                </p>
              </motion.div>

              <motion.div
                id="feat-ai-pipelines"
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-150px" }}
                transition={{ duration: 1.0, ease: "easeInOut", delay: 0.15 }}
                className="p-6 bg-slate-50 border border-slate-100 rounded-2xl space-y-4 hover:border-slate-200 transition-all shadow-2xs"
              >
                <div className="p-3 bg-white border border-slate-100 rounded-xl w-fit">
                  <Cpu className="h-5 w-5 text-teal-600" />
                </div>
                <h4 className="font-bold text-slate-900 text-md">Scalable Deep Learning</h4>
                <p className="text-xs text-slate-500 leading-relaxed leading-medium">
                  Designing and tuning CNN, LSTM, and generative RAG parameters using PyTorch, vector indices, and Gemini model pipelines.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview section */}
      <section className="py-20 bg-slate-50 border-y border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-50 border border-teal-100 rounded-full text-teal-700 text-xs font-mono font-semibold">
                <Sparkles className="h-3 w-3 text-teal-600" />
                CURATED COMPILATIONS
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
                Featured Engineered Systems
              </h2>
            </div>
            <Link
              id="home-view-projects-btn"
              to="/projects"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-600 hover:text-blue-700 bg-white border border-slate-200 px-4 py-2 rounded-lg shadow-2xs cursor-pointer hover:bg-slate-50 transition-colors"
            >
              VIEW ALL INTERACTIVE PROJECTS ({PROJECTS.length})
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Grid list of featured projects */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, idx) => (
              <motion.div
                id={`featured-proj-${project.id}`}
                key={project.id}
                initial={{ opacity: 0, y: 35, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.1, ease: "easeInOut", delay: idx * 0.12 }}
                className="bg-white border border-slate-150 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-slate-300 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-44 overflow-hidden bg-slate-100">
                    <img
                      referrerPolicy="no-referrer"
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-103 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                    <span className="absolute top-3 left-3 inline-flex items-center gap-1 px-2 py-0.5 bg-blue-600 text-white text-[9px] font-mono font-bold rounded shadow-xs">
                      <Star className="h-2.5 w-2.5 fill-white text-white" />
                      FEATURED
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <span className="text-[9px] font-mono font-extrabold text-blue-600 tracking-wider">
                      {project.category.replace("-", " ").toUpperCase()}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-3 font-sans">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 mt-2 flex justify-between items-center bg-slate-50/50 border-t border-slate-50">
                  <Link
                    id={`featured-link-${project.id}`}
                    to="/projects"
                    className="text-xs font-mono font-bold text-slate-700 hover:text-blue-600 transition-colors"
                  >
                    DEPLOY SPECIFICATIONS →
                  </Link>
                  <span className="text-[10px] text-slate-400 font-mono">
                    {project.tags.slice(0, 2).join(" • ")}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Call to Action widget */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="p-8 sm:p-12 bg-linear-to-tr from-slate-900 to-slate-950 rounded-3xl text-white shadow-xl relative overflow-hidden">
            {/* Background design graphics */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-6 relative z-10">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Reviewing for Internship Roles?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
                I am actively seeking B.Tech CS & MLOps Internship positions for the Spring/Fall 2026 pipelines. Let's build stable and highly optimized applications together.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
                <Link
                  id="home-contact-btn"
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-slate-950 hover:bg-slate-100 font-semibold text-xs leading-none tracking-wide rounded-full transition-colors cursor-pointer shadow-sm"
                >
                  Get In Touch
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  id="home-certs-btn"
                  to="/certifications"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 border border-slate-700 hover:border-slate-600 hover:bg-slate-900/60 text-slate-200 font-semibold text-xs leading-none tracking-wide rounded-full transition-colors cursor-pointer"
                >
                  Review Valid Credentials
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
