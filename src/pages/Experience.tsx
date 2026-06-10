import { EXPERIENCES } from "../data";
import { Experience } from "../types";
import { Briefcase, Milestone, Calendar, MapPin, Sparkles, Trophy } from "lucide-react";
import { motion } from "motion/react";
import PageWrapper from "../components/PageWrapper";

export default function ExperiencePage() {
  return (
    <PageWrapper>
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading */}
          <div className="max-w-3xl mb-16 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full text-emerald-700 text-xs font-mono font-semibold">
              <Sparkles className="h-3 w-3 text-emerald-600" />
              CHRONOLOGY & CAREER PROGRESSION
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Professional Milestones & Leadership Journey
            </h1>
            <p className="text-sm sm:text-lg text-slate-500 max-w-2xl">
              Chronological ledger of engineering roles, ambassador achievements, and student lead positions where I apply algorithm designs to real-world deployment challenges.
            </p>
          </div>

          {/* Timeline container */}
          <div className="relative max-w-4xl mx-auto py-8">
            {/* Vertical central path line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-100 -translate-x-1/2 pointer-events-none" />

            {/* Timeline node loop */}
            <div className="space-y-12 relative">
              {EXPERIENCES.map((exp: Experience, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <motion.div
                    id={`page-experience-entry-${exp.id}`}
                    key={exp.id}
                    initial={{ opacity: 0, y: 40, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.1, ease: "easeInOut", delay: idx * 0.15 }}
                    className={`flex flex-col md:flex-row items-stretch ${
                      isEven ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Left or Right blank offset area */}
                    <div className="hidden md:block md:w-1/2 md:px-8" />

                    {/* Indicator Dot Node */}
                    <div className="absolute left-6 md:left-1/2 w-8 h-8 rounded-full border border-slate-200 bg-white shadow-xs -translate-x-1/2 flex items-center justify-center z-10 transition-transform hover:scale-110">
                      {exp.type === "Internship" ? (
                        <Briefcase className="h-4 w-4 text-blue-600 animate-pulse" />
                      ) : (
                        <Trophy className="h-4 w-4 text-teal-600" />
                      )}
                    </div>

                    {/* Experience Card */}
                    <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                      <div className="p-6 rounded-2xl bg-slate-50/50 border border-slate-150 shadow-xs hover:bg-white hover:border-slate-350 hover:shadow-md transition-all duration-300">
                        {/* Meta header */}
                        <div className="flex flex-wrap items-center justify-between gap-2.5">
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                            exp.type === "Internship" 
                              ? "bg-blue-50 text-blue-700 border border-blue-100" 
                              : exp.type === "Leadership" 
                                ? "bg-teal-50 text-teal-700 border border-teal-100"
                                : "bg-purple-50 text-purple-700 border border-purple-100"
                          }`}>
                            {exp.type.toUpperCase()}
                          </span>

                          <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {exp.period}
                            </span>
                          </div>
                        </div>

                        {/* Role & Company */}
                        <div className="mt-3">
                          <h4 className="text-md font-bold text-slate-900 leading-tight">
                            {exp.role}
                          </h4>
                          <p className="text-xs font-semibold text-slate-600 mt-1 flex items-center gap-1">
                            {exp.company}
                            <span className="text-slate-300">•</span>
                            <span className="text-slate-500 font-normal flex items-center gap-0.5">
                              <MapPin className="h-3 w-3 inline" />
                              {exp.location}
                            </span>
                          </p>
                        </div>

                        {/* Achievements bullets */}
                        <ul className="mt-4 space-y-2">
                          {exp.details.map((detail, dIdx) => (
                            <li key={dIdx} className="text-xs text-slate-505 leading-relaxed list-disc list-inside text-slate-500 font-sans">
                              {detail}
                            </li>
                          ))}
                        </ul>

                        {/* Skills applied block */}
                        <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                          <span className="text-[9px] font-mono text-slate-400 self-center uppercase font-semibold">APPLIED:</span>
                          {exp.skillsApplied.map((skill) => (
                            <span key={skill} className="text-[9px] font-mono text-slate-600 bg-white border border-slate-150 px-2 py-0.5 rounded">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
