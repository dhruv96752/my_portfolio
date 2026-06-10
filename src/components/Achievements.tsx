import { ACHIEVEMENTS } from "../data";
import { Achievement } from "../types";
import { Award, Trophy, Compass, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-slate-50 relative border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-xs font-mono font-semibold">
            <Sparkles className="h-3 w-3 text-blue-600" />
            07 . DECORATED COMPETENCIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Hackathons & Coding Honors
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto">
            Selected accomplishments demonstrating computational resilience, speed under pressure, and elite team synergy.
          </p>
        </div>

        {/* Achievements Cards Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ACHIEVEMENTS.map((ach: Achievement, idx) => (
            <motion.div
              id={`achievement-card-${ach.id}`}
              key={ach.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-white border border-slate-150 hover:border-slate-300 hover:shadow-lg transition-all duration-350 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Ribbon Headers */}
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-blue-50 border border-blue-100 rounded-xl text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    {idx === 0 ? (
                      <Trophy className="h-5 w-5" />
                    ) : idx === 1 ? (
                      <Compass className="h-5 w-5" />
                    ) : (
                      <Award className="h-5 w-5" />
                    )}
                  </div>

                  {ach.rank && (
                    <span className="inline-block text-[10px] font-mono font-bold text-teal-600 bg-teal-50 border border-teal-100 px-2.5 py-1 rounded-md">
                      {ach.rank}
                    </span>
                  )}
                </div>

                {/* Info Text */}
                <div className="space-y-1.5">
                  <h4 className="text-sm font-extrabold text-slate-900 tracking-tight leading-tight group-hover:text-blue-600 transition-colors">
                    {ach.title}
                  </h4>
                  <p className="text-xs font-semibold text-slate-500">
                    {ach.event}
                  </p>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed font-sans">
                  {ach.description}
                </p>
              </div>

              {/* Tag Badges Array */}
              <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-slate-50">
                {ach.tags.map((tag) => (
                  <span key={tag} className="text-[9px] font-mono text-slate-500 bg-slate-50 px-2 py-0.5 rounded">
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
