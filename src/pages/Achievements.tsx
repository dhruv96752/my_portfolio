import { ACHIEVEMENTS } from "../data";
import { Achievement } from "../types";
import { Award, Trophy, Compass, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import PageWrapper from "../components/PageWrapper";

export default function AchievementsPage() {
  return (
    <PageWrapper>
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading */}
          <div className="max-w-3xl mb-16 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-xs font-mono font-semibold">
              <Sparkles className="h-3 w-3 text-blue-600" />
              DECORATED HONORS & AWARDS
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Hackathons & Competitive Honors
            </h1>
            <p className="text-sm sm:text-lg text-slate-500 max-w-2xl">
              Recognitions and competitive achievements demonstrating computational resilience, design engineering speed under tight constraints, and collaborative team leadership.
            </p>
          </div>

          {/* Achievements Cards Layout Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ACHIEVEMENTS.map((ach: Achievement, idx: number) => (
              <motion.div
                id={`page-achievement-card-${ach.id}`}
                key={ach.id}
                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.1, ease: "easeInOut", delay: idx * 0.15 }}
                className="p-6 rounded-2xl bg-slate-50/70 border border-slate-150 hover:border-slate-350 hover:bg-white hover:shadow-lg transition-all duration-350 flex flex-col justify-between group shadow-2xs"
              >
                <div className="space-y-4">
                  {/* Ribbon Headers */}
                  <div className="flex justify-between items-start">
                    <div className="p-3 bg-white border border-slate-150 rounded-xl text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
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

                  <p className="text-xs text-slate-550 leading-relaxed font-sans text-slate-500">
                    {ach.description}
                  </p>
                </div>

                {/* Tag Badges Array */}
                <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-slate-150">
                  {ach.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-mono text-slate-600 bg-slate-100 border border-slate-150 px-2 py-0.5 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
