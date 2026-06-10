import { GraduationCap, Target, Eye, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function About() {
  const milestones = [
    {
      type: "education",
      title: "Bachelor of Technology in Computer Science & Engineering",
      institution: "Vellore Institute of Technology (VIT)",
      period: "2022 - 2026 (Expected)",
      details: [
        "Specialization: Artificial Intelligence and Machine Learning Core.",
        "Academic standing: 9.24 CGPA through 6 semesters.",
        "Relevant Coursework: Advanced Algorithms, Deep Learning, Database Systems, Operating Systems, Java Programming."
      ],
      icon: GraduationCap,
    },
    {
      type: "aspiration",
      title: "Strategic Career Goals",
      institution: "AI & MLOps Infrastructure Specialist",
      period: "2026 & Beyond",
      details: [
        "Aiming to build zero-lag LLM middleware and optimize model deployment metrics on Cloud runtimes.",
        "Committed to rigorous DSA optimization to solve highly parallel computation problems."
      ],
      icon: Target,
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-xs font-mono font-semibold">
            <Sparkles className="h-3 w-3 text-blue-600" />
            01 . BACKGROUND PROFILE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Fusing Algorithms with Intelligence
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto">
            A B.Tech Computer Science student with a passionate drive to build production-grade Artificial 
            Intelligence. I write highly clean Java modules and script predictive models in Python.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Professional Introduction */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <Eye className="h-4 w-4 text-teal-500" />
              The Professional Thesis
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              My engineering journey is centered around building applications that execute machine intelligence in the 
              real world, rather than just running notebooks locally. 
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Through extensive programming in core Java, I have unlocked deep appreciation for structural 
              efficiency, multithreading, and time complexity. I replicate these standards when building AI models in 
              PyTorch or orchestrating training pipelines with Docker and FastAPI.
            </p>

            {/* Recruiter-focused Highlights */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-3 text-xs">
              <p className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                RAPID ASSESSMENT FOR RECRUITERS
              </p>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">✓</span>
                  <span><strong>Clean Code Advocate:</strong> Refactoring is a habit. Always writing detailed documentation and TypeScript declarations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">✓</span>
                  <span><strong>ATS Ready:</strong> Solid foundational core in Object Oriented Programming (OOP) and Data Structures.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">✓</span>
                  <span><strong>Collaborative Native:</strong> Extensive experience as GDSC Core Lead and leading multi-disciplinary squads during hackathons.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Timeline Cards (Education & Career) */}
          <div className="lg:col-span-6 space-y-6">
            {milestones.map((milestone, idx) => {
              const Icon = milestone.icon;
              return (
                <motion.div
                  id={`milestone-${milestone.type}`}
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 hover:bg-slate-100/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 bg-white border border-slate-100 rounded-xl text-slate-700 shadow-xs shrink-0">
                      <Icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="space-y-2">
                      <span className="font-mono text-[9px] font-bold text-blue-600 px-2 py-0.5 bg-blue-50 rounded">
                        {milestone.period}
                      </span>
                      <h4 className="text-md font-bold text-slate-900 tracking-tight">
                        {milestone.title}
                      </h4>
                      <p className="text-xs font-semibold text-slate-600">
                        {milestone.institution}
                      </p>
                      <ul className="space-y-1.5 pt-2">
                        {milestone.details.map((detail, dIdx) => (
                          <li key={dIdx} className="text-xs text-slate-500 list-disc list-inside leading-relaxed">
                            {detail}
                          </li>
                        ))}
                      </ul>
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
