import { useState } from "react";
import { SKILLS } from "../data";
import { Skill } from "../types";
import { Coffee, Terminal, Code2, Brain, ScatterChart, Binary, Database, GitBranch, Cloud, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Helper map to dynamically resolve Lucide icons based on standard strings in data
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

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Languages", "AI & ML", "Core & Systems", "Tools & Devops"];

  const filteredSkills = selectedCategory === "All"
    ? SKILLS
    : SKILLS.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-24 bg-slate-50 relative border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-50 border border-teal-100 rounded-full text-teal-700 text-xs font-mono font-semibold">
            <Sparkles className="h-3 w-3 text-teal-600" />
            02 . SKILL BLUEPRINTS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Technical Stack & Capabilities
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto">
            Categorized competency vectors mapped across active development contexts. Filter by core domains 
            to evaluate language proficiencies and infrastructure know-how.
          </p>
        </div>

        {/* Filter Badges */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              id={`skill-filter-${cat.toLowerCase().replace(/\s/g, "-")}`}
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-mono font-bold tracking-wide rounded-full transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? "bg-slate-900 text-white border-2 border-slate-900 shadow-xs"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-950"
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Grid layout */}
        <motion.div
          id="skills-grid"
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill: Skill) => {
              const IconComponent = ICON_MAP[skill.icon] || Code2;
              return (
                <motion.div
                  id={`skill-card-${skill.name.toLowerCase().replace(/\s/g, "-")}`}
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 rounded-2xl bg-white border border-slate-150 shadow-xs hover:shadow-md hover:border-slate-250 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-slate-50 border border-slate-100 rounded-xl group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                          <IconComponent className="h-5 w-5 text-slate-700 group-hover:text-blue-600 transition-colors" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-900 tracking-tight">
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
                    <p className="text-xs text-slate-500 leading-relaxed min-h-[40px]">
                      {skill.description}
                    </p>
                  </div>

                  {/* Level Slider Bar (Recruiter metric) */}
                  <div className="mt-5 space-y-1">
                    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-blue-600 to-teal-500 rounded-full"
                      />
                    </div>
                    <div className="flex justify-between items-center text-[9px] font-mono text-slate-400">
                      <span>FAMILIARITY LEVEL</span>
                      <span>PRODUCTION CAPABLE</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
