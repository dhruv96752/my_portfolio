import { useState } from "react";
import { SKILLS } from "../data";
import { Skill } from "../types";
import { Coffee, Terminal, Code2, Brain, ScatterChart, Binary, Database, GitBranch, Cloud, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import PageWrapper from "../components/PageWrapper";

const ICON_MAP: Record<string, any> = {
  Coffee: Coffee,
  Terminal: Terminal,
  Code2: Code2,
  Brain: Brain,
  ScatterChart: ScatterChart,
  Binary: Binary,
  Database: Database,
  GitBranch: GitBranch,
  Cloud: Cloud,
};

export default function SkillsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Languages", "AI & ML", "Core & Systems", "Tools & Devops"];

  const filteredSkills = selectedCategory === "All"
    ? SKILLS
    : SKILLS.filter(skill => skill.category === selectedCategory);

  return (
    <PageWrapper>
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading */}
          <div className="max-w-3xl mb-16 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-50 border border-teal-100 rounded-full text-teal-700 text-xs font-mono font-semibold">
              <Sparkles className="h-3 w-3 text-teal-600" />
              SKill Capability MATRIX
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Technical Competencies & Stack Proficiency
            </h1>
            <p className="text-sm sm:text-lg text-slate-500 max-w-2xl">
              Systematic classification of my software frameworks and AI pipelines. Filter down core domains to evaluate my practical readiness for enterprise deployment roles.
            </p>
          </div>

          {/* Filter Badges */}
          <div className="flex flex-wrap justify-start items-center gap-2 mb-12 border-b border-slate-100 pb-6">
            {categories.map((cat) => (
              <button
                id={`page-skill-filter-${cat.toLowerCase().replace(/\s/g, "-")}`}
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-mono font-bold tracking-wide rounded-lg transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-slate-950 text-white border border-slate-900 shadow-sm"
                    : "bg-slate-50 text-slate-600 border border-slate-200 hover:border-slate-350 hover:text-slate-950"
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Grid layout */}
          <motion.div
            id="page-skills-grid"
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill: Skill, idx: number) => {
                const IconComponent = ICON_MAP[skill.icon] || Code2;
                return (
                  <motion.div
                    id={`page-skill-card-${skill.name.toLowerCase().replace(/\s/g, "-")}`}
                    key={skill.name}
                    layout
                    initial={{ opacity: 0, y: 30, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 1.0, ease: "easeInOut", delay: idx * 0.05 }}
                    className="p-6 rounded-2xl bg-slate-50 border border-slate-150 hover:bg-white hover:border-slate-300 shadow-xs hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 bg-white border border-slate-150 rounded-xl group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                            <IconComponent className="h-5 w-5 text-slate-700 group-hover:text-blue-600 transition-colors" />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-slate-900 tracking-tight leading-snug">
                              {skill.name}
                            </h4>
                            <span className="font-mono text-[9px] font-bold text-slate-400 tracking-wider">
                              {skill.category.toUpperCase()}
                            </span>
                          </div>
                        </div>
                        <span className="font-mono text-xs font-bold text-blue-600 bg-blue-50/50 px-2.5 py-1 rounded-md border border-blue-100/30">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Explanatory description */}
                      <p className="text-xs text-slate-550 leading-relaxed font-sans text-slate-500 min-h-[40px]">
                        {skill.description}
                      </p>
                    </div>

                    {/* Level Slider Bar (Recruiter metric) */}
                    <div className="mt-5 space-y-1">
                      <div className="w-full h-1.5 bg-slate-150 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.1, ease: "easeInOut", delay: idx * 0.05 + 0.15 }}
                          className="h-full bg-gradient-to-r from-blue-600 to-teal-500 rounded-full"
                        />
                      </div>
                      <div className="flex justify-between items-center text-[9px] font-mono text-slate-400">
                        <span>FAMILIARITY LEVEL</span>
                        <span>PRODUCTION READY</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
