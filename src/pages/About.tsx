import { GraduationCap, Target, Eye, Sparkles, BookOpen, Award, CheckCircle } from "lucide-react";
import { motion } from "motion/react";
import PageWrapper from "../components/PageWrapper";

export default function About() {
  const milestones = [
    {
      type: "education",
      title: "Bachelor of Technology in Computer Science & Engineering",
      institution: "Greater Noida Institute of Technology (GNIOT)",
      period: "2024 - 2028 (Expected)",
      details: [
        "Specialization: Artificial Intelligence.",
        "Academic standing: 8.24 CGPA through 4 semesters (Top Tier of cohort).",
        "Relevant Coursework: Advanced Algorithms, Deep Learning architectures, Object Oriented Programming, Database Systems, Operating Systems, Java Optimization."
      ],
      icon: GraduationCap,
    },
    {
      type: "aspiration",
      title: "Strategic Career Goals & Trajectory",
      institution: "AI & MLOps Infrastructure Specialist",
      period: "2026 & Beyond",
      details: [
        "Aiming to build zero-lag LLM inference middleware and optimize model deployment metrics on Kubernetes & Cloud environments.",
        "Committed to state-of-the-art model parallelism and distributed hyperparameter tuning to solve real-world latency restrictions."
      ],
      icon: Target,
    }
  ];

  const highlights = [
    {
      title: "Clean Code Advocate",
      desc: "Refactoring and strict type declarations are habits. Writing extensively documented files in Java, Python, and TypeScript.",
    },
    {
      title: "ATS-Optimized Foundations",
      desc: "A solid, robust theoretical and practical framework in modern Algorithmic structures, Object-Oriented paradigms (OOP), and Complexity analysis.",
    },
    {
      title: "Leadership & Collaboration Native",
      desc: "Proven track record driving multi-disciplinary developer cohorts and leading tech squads as a core student lead.",
    }
  ];

  return (
    <PageWrapper>
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main heading */}
          <div className="max-w-3xl mb-16 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-xs font-mono font-semibold">
              <Sparkles className="h-3 w-3 text-blue-600" />
              ABOUT THE ENGINEER
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Fusing Algorithmic Logic with Autonomous Intelligence
            </h1>
            <p className="text-sm sm:text-lg text-slate-500 max-w-2xl">
              I am a B.Tech Computer Science student at Greater Noida Institute of Technology, specializing in CSE-AI. My journey revolves around translating abstract mathematical equations into production-ready runtime loops.
            </p>
          </div>

          {/* Detailed profile description */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                  <Eye className="h-4 w-4 text-teal-500" />
                  The Professional Thesis
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  My engineering journey is centered around building high-performance systems. I strongly believe that artificial intelligence yields the highest business value when hosted on robust, fail-safe backend systems, rather than remaining isolated in draft Jupyter notebooks.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  Through extensive programming in core Java, I have unlocked an advanced appreciation for concurrency, custom memory caching, thread pools, and space-time complexity indicators. I carry these optimization paradigms forward into deep-learning architectures written with PyTorch and deployed as real-time predictive microservices.
                </p>
              </div>

              {/* Personal Journey Section */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-blue-600" />
                  Education & Personal Trajectory
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  From a young age, I was fascinated by computing speed. Transitioning from basic procedural tasks to object-oriented frameworks opened my eyes to complex structural system patterns. Under VIT’s guidance, I channeled this curiosity toward the deep mathematical structures of Artificial Intelligence.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  I dedicate my free time to tracking the latest trends in transformer optimizations, fine-tuning lightweight vision models for micro-segmentation challenges, and implementing modern architectural designs in my projects.
                </p>
              </div>
            </div>

            {/* Timelines and Highlights */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-6">
                {milestones.map((milestone, idx) => {
                  const Icon = milestone.icon;
                  return (
                    <motion.div
                      id={`page-milestone-${milestone.type}`}
                      key={idx}
                      initial={{ opacity: 0, y: 30, scale: 0.98 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 1.1, ease: "easeInOut", delay: idx * 0.15 }}
                      className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 hover:bg-slate-100/30 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-2.5 bg-white border border-slate-100 rounded-xl text-slate-700 shadow-xs shrink-0">
                          <Icon className="h-5 w-5 text-blue-600" />
                        </div>
                        <div className="space-y-2">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-mono text-[9px] font-bold text-blue-600 px-2 py-0.5 bg-blue-50 border border-blue-100/30 rounded">
                              {milestone.period}
                            </span>
                          </div>
                          <h4 className="text-md font-bold text-slate-900 tracking-tight leading-snug">
                            {milestone.title}
                          </h4>
                          <p className="text-xs font-semibold text-slate-600 font-mono">
                            {milestone.institution}
                          </p>
                          <ul className="space-y-1.5 pt-2">
                            {milestone.details.map((detail, dIdx) => (
                              <li key={dIdx} className="text-xs text-slate-505 list-disc list-inside leading-relaxed text-slate-500">
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

              {/* Recruitment Rapid Assessment */}
              <div className="p-6 rounded-2xl bg-slate-950 text-slate-100 space-y-4 border border-slate-800 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/10 rounded-full blur-xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center gap-2 relative z-10">
                  <Award className="h-4 w-4 text-teal-400" />
                  <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Quick Assessment for Recruiters
                  </span>
                </div>

                <div className="space-y-3 relative z-10">
                  {highlights.map((hl, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-teal-400 shrink-0 mt-0.5" />
                      <div className="space-y-0.5">
                        <h5 className="text-xs font-bold text-slate-200">
                          {hl.title}
                        </h5>
                        <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
                          {hl.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
