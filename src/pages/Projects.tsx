import { useState } from "react";
import { PROJECTS } from "../data";
import { Project } from "../types";
import { Github, ExternalLink, Search, Sparkles, FolderGit2, Star, X, CheckCircle2, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import PageWrapper from "../components/PageWrapper";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("all-trigger-ignore-empty");
  const [realSearch, setRealSearch] = useState<string>("");
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const categories = ["all", "ai-ml", "dsa-java", "web-dev"];

  const filteredProjects = PROJECTS.filter((proj) => {
    const matchesCategory = selectedCategory === "all" || proj.category === selectedCategory;
    const searchString = realSearch.toLowerCase();
    const matchesSearch = !searchString || 
                          proj.title.toLowerCase().includes(searchString) ||
                          proj.description.toLowerCase().includes(searchString) ||
                          proj.tags.some(tag => tag.toLowerCase().includes(searchString));
    return matchesCategory && matchesSearch;
  });

  return (
    <PageWrapper>
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading */}
          <div className="max-w-3xl mb-16 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-xs font-mono font-semibold">
              <Sparkles className="h-3 w-3 text-blue-600" />
              SYSTEMS ARCHITECT LEGACY
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Engineered Software Repositories
            </h1>
            <p className="text-sm sm:text-lg text-slate-500 max-w-2xl">
              A comprehensive directory of specialized AI frameworks, machine learning models, optimization packages, and robust web runtime configurations.
            </p>
          </div>

          {/* Search & Dynamic Filters Navigation */}
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-12 border-b border-slate-100 pb-8">
            {/* Categories */}
            <div className="flex flex-wrap items-center gap-1.5 order-2 md:order-1">
              {categories.map((cat) => (
                <button
                  id={`page-project-filter-${cat}`}
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-mono font-bold tracking-wider rounded-md transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-blue-600 text-white shadow-xs"
                      : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {cat === "all" ? "ALL PROJECTS" : cat === "ai-ml" ? "AI & ML" : cat === "dsa-java" ? "JAVA CORE & DSA" : "WEB APPLICATIONS"}
                </button>
              ))}
            </div>

            {/* Search bar */}
            <div className="relative w-full md:w-72 order-1 md:order-2">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                id="page-project-search-input"
                type="text"
                placeholder="Search stack, title or tags..."
                value={realSearch}
                onChange={(e) => setRealSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-1.5 text-xs border border-slate-200 bg-slate-50/50 rounded-lg focus:outline-hidden focus:border-blue-500 focus:bg-white transition-all text-slate-800"
              />
              {realSearch && (
                <button
                  onClick={() => setRealSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-mono font-bold"
                >
                  CLEAR
                </button>
              )}
            </div>
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20 border border-dashed border-slate-200 rounded-2xl max-w-md mx-auto">
              <FolderGit2 className="h-10 w-10 text-slate-300 mx-auto mb-4" />
              <p className="text-sm font-semibold text-slate-700">No projects match your filter query</p>
              <p className="text-xs text-slate-400 mt-1">Try typing key terms like "PyTorch", "Model Parallelism" or "Java"</p>
            </div>
          )}

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project: Project, idx: number) => (
                <motion.div
                  id={`page-project-card-${project.id}`}
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 35, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 1.1, ease: "easeInOut", delay: idx * 0.12 }}
                  className="group relative bg-white border border-slate-150 rounded-2xl overflow-hidden hover:border-slate-300 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Photo representation */}
                    <div className="relative h-48 overflow-hidden bg-slate-100">
                      <img
                        referrerPolicy="no-referrer"
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform scale-100 group-hover:scale-103 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60 pointer-events-none" />
                      
                      {/* Featured star or top level status badge */}
                      {project.featured && (
                        <span className="absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 bg-blue-600 text-white text-[9px] font-mono font-bold rounded-md shadow-sm">
                          <Star className="h-2.5 w-2.5 fill-white" />
                          FEATURED
                        </span>
                      )}

                      {project.stars && (
                        <span className="absolute top-3 right-3 inline-flex items-center gap-1 px-2 py-0.5 bg-black/75 backdrop-blur-xs text-white text-[9px] font-mono rounded border border-white/10 shadow-xs">
                          {project.stars} <Star className="h-2.5 w-2.5 fill-amber-400 text-amber-400" />
                        </span>
                      )}
                    </div>

                    {/* Body Content */}
                    <div className="p-6 space-y-4">
                      <div className="space-y-1.5">
                        <span className="font-mono text-[9px] font-bold text-blue-600 px-2 py-0.5 bg-blue-50 rounded">
                          {project.category === "ai-ml" ? "AI & ML CORE" : project.category === "dsa-java" ? "JAVA CORE / DSA" : "WEB INFRASTRUCTURE"}
                        </span>
                        <h4 className="text-md font-bold text-slate-900 tracking-tight leading-tight group-hover:text-blue-600 transition-colors">
                          {project.title}
                        </h4>
                      </div>

                      <p className="text-xs text-slate-505 leading-relaxed line-clamp-3 text-slate-500 font-sans">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-[10px] font-mono text-slate-600 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer Actions */}
                  <div className="p-6 pt-0 border-t border-slate-50 mt-4 flex items-center justify-between gap-2 bg-slate-50/50">
                    <button
                      id={`page-project-${project.id}-modal-trigger`}
                      onClick={() => setActiveProjectModal(project)}
                      className="text-xs font-mono font-bold text-slate-700 hover:text-blue-600 p-2 cursor-pointer transition-colors"
                    >
                      VIEW ARCHITECTURE →
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        id={`page-project-${project.id}-github`}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 border border-slate-200 hover:border-slate-350 bg-white rounded-md text-slate-600 hover:text-slate-950 transition-colors shadow-2xs"
                        title="GitHub Repository"
                      >
                        <Github className="h-3.5 w-3.5" />
                      </a>
                      {project.liveUrl && (
                        <a
                          id={`page-project-${project.id}-live`}
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 border border-slate-200 hover:border-slate-350 bg-white rounded-md text-slate-600 hover:text-slate-950 transition-colors shadow-2xs"
                          title="Live Demonstration"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Detailed Modern Details Modal */}
          <AnimatePresence>
            {activeProjectModal && (
              <motion.div
                id="page-project-overlay-modal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-55 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4"
              >
                <motion.div
                  initial={{ scale: 0.95, y: 15 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.95, y: 15 }}
                  transition={{ type: "spring", duration: 0.4 }}
                  className="bg-white rounded-3xl border border-slate-150 max-w-2xl w-full shadow-2xl overflow-hidden focus:outline-hidden"
                >
                  {/* Header Graphic */}
                  <div className="relative h-48 bg-slate-100">
                    <img
                      referrerPolicy="no-referrer"
                      src={activeProjectModal.image}
                      alt={activeProjectModal.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                    
                    {/* Close trigger */}
                    <button
                      id="page-modal-close-trigger"
                      onClick={() => setActiveProjectModal(null)}
                      className="absolute top-4 right-4 p-2 bg-slate-950/80 hover:bg-slate-950 border border-white/10 rounded-full text-white cursor-pointer transition-colors shadow-md animate-none"
                      aria-label="Close Dialog"
                    >
                      <X className="h-4 w-4" />
                    </button>

                    <div className="absolute bottom-4 left-6 right-6">
                      <span className="font-mono text-[9px] font-bold text-blue-400 uppercase tracking-widest bg-blue-950/50 border border-blue-500/10 px-2 py-0.5 rounded">
                        {activeProjectModal.category === "ai-ml" ? "Artificial Intelligence" : activeProjectModal.category === "dsa-java" ? "Core Systems" : "Web Development"}
                      </span>
                      <h3 className="text-lg md:text-xl font-extrabold text-white mt-1.5 leading-tight">
                        {activeProjectModal.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body Details */}
                  <div className="p-6 space-y-6 overflow-y-auto max-h-[350px]">
                    <div className="space-y-2">
                      <h5 className="text-xs font-mono font-bold text-slate-450 uppercase tracking-widest flex items-center gap-1 text-slate-400">
                        <Calendar className="h-3.5 w-3.5 text-blue-500" />
                        ENGINEERING SPECIFICATION & METRICS
                      </h5>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                        {activeProjectModal.description}
                      </p>
                    </div>

                    {/* Bullet points detailing features */}
                    <div className="space-y-3">
                      <h5 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                        SYSTEM ARCHITECTURE BREAKDOWN
                      </h5>
                      <ul className="space-y-2 text-xs">
                        {activeProjectModal.details.map((detail, idx) => (
                          <li key={idx} className="flex gap-2.5 items-start">
                            <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span className="text-slate-600 leading-relaxed font-sans">
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Project tags list */}
                    <div className="flex flex-wrap gap-1.5">
                      {activeProjectModal.tags.map((tag) => (
                        <span key={tag} className="text-[10px] font-mono text-slate-800 bg-slate-100 border border-slate-150 px-2.5 py-0.5 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer triggers */}
                  <div className="p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[9px] text-slate-400">CONNECT SECURE:</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span className="font-mono text-[9px] text-slate-500">256-SHA SIGNED</span>
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      <a
                        id="page-modal-github-action"
                        href={activeProjectModal.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded-lg shadow-2xs transition-colors"
                      >
                        <Github className="h-3.5 w-3.5" />
                        Source Code
                      </a>
                      {activeProjectModal.liveUrl && (
                        <a
                          id="page-modal-live-action"
                          href={activeProjectModal.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          Launch Preview
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </PageWrapper>
  );
}
