import { EXPERIENCES } from "../data";
import { Experience } from "../types";
import { Briefcase, Milestone, Calendar, MapPin, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 bg-slate-50 relative border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full text-emerald-700 text-xs font-mono font-semibold">
            <Sparkles className="h-3 w-3 text-emerald-600" />
            04 . PROFESSIONAL CHRONOLOGY
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Work Experience & Leadership
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto">
            Practical application of algorithmic paradigms during real-world internships, open source advocacy roles, 
            and developer community leadership initiatives.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central path line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-100 -translate-x-1/2 pointer-events-none" />

          {/* Timeline node loop */}
          <div className="space-y-12 relative">
            {EXPERIENCES.map((exp: Experience, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  id={`experience-entry-${exp.id}`}
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`flex flex-col md:flex-row items-stretch ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Left or Right blank offset area */}
                  <div className="hidden md:block md:w-1/2 md:px-8" />

                  {/* Indicator Dot Node */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full border border-slate-200 bg-white shadow-xs -translate-x-1/2 flex items-center justify-center z-10 transition-transform group-hover:scale-110">
                    {exp.type === "Internship" ? (
                      <Briefcase className="h-4 w-4 text-blue-600 animate-pulse" />
                    ) : (
                      <Milestone className="h-4 w-4 text-teal-600" />
                    )}
                  </div>

                  {/* Experience Card */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <div className="p-6 rounded-2xl bg-white border border-slate-150 shadow-xs hover:border-slate-350 hover:shadow-md transition-all duration-300">
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
                          <li key={dIdx} className="text-xs text-slate-500 leading-relaxed list-disc list-inside">
                            {detail}
                          </li>
                        ))}
                      </ul>

                      {/* Skills applied block */}
                      <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                        <span className="text-[9px] font-mono text-slate-400 self-center uppercase font-bold">APPLIED:</span>
                        {exp.skillsApplied.map((skill) => (
                          <span key={skill} className="text-[9px] font-mono text-slate-600 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded">
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
  );
}
