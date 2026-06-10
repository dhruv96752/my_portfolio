import { useState, useEffect } from "react";
import { ArrowRight, Download, Github, Linkedin, Briefcase, Eclipse } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  scrollToSection: (id: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  const words = [
    "AI/ML Engineer",
    "Java Developer",
    "Problem Solver",
    "Building Real-World Solutions",
  ];

  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const handleTyping = () => {
      const fullWord = words[currentWordIdx];
      if (!isDeleting) {
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        if (currentText === fullWord) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 1500);
          return;
        }
      } else {
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIdx((prev) => (prev + 1) % words.length);
        }
      }

      setTypingSpeed(isDeleting ? 40 : 80);
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIdx, typingSpeed]);

  return (
    <section
      id="home"
      className="relative min-h-[85vh] lg:min-h-screen pt-16 sm:pt-24 lg:pt-0 pb-16 sm:pb-24 lg:pb-0 flex flex-col justify-center items-center overflow-hidden bg-white"
    >
      {/* Background Graphic Lines (Stripe-inspired soft grid) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.4] mix-blend-multiply">
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-blue-50/60 to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-teal-50/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-50/40 rounded-full blur-3xl" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(ellipse 60% 60% at 50% -10%, rgba(37, 99, 235, 0.05), transparent), 
                              radial-gradient(circle at 100px 100px, rgba(20, 184, 166, 0.03) 1px, transparent 1px)`,
            backgroundSize: "200px 200px, 24px 24px",
          }}
        />
      </div>

      <div className="max-w-7xl lg:max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-center w-full">
          {/* Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6 lg:space-y-8 pt-4 lg:pt-10">
            {/* Status Badging */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="mt-3 sm:mt-5 inline-flex items-center gap-2 px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-slate-700 font-mono text-xs"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              Looking for AI & ML Internships (Spring / Fall 2026)
            </motion.div>

            {/* Main Title */}
            <div className="space-y-2 lg:space-y-3">
              <motion.h3
                initial={{ opacity: 0, y: 25, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="font-mono text-xs lg:text-sm font-semibold tracking-widest text-blue-600 uppercase"
              >
                Hi there, I'm Dhruv Varshney
              </motion.h3>
              <motion.h1
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-[clamp(3.5rem,5vw,5rem)] xl:text-[clamp(4rem,6vw,7rem)] font-extrabold tracking-tight text-slate-900 leading-tight lg:leading-[1.05]"
              >
                Aspiring <span className="text-blue-600">AI Engineer</span> & CS Student
              </motion.h1>
            </div>

            {/* Simulated Typist Grid */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="h-10 sm:h-12 lg:h-16 flex items-center justify-center lg:justify-start"
            >
              <div className="font-mono text-lg sm:text-xl md:text-2xl lg:text-[clamp(1.5rem,2.2vw,2.5rem)] font-bold text-slate-700 flex items-center whitespace-nowrap">
                <span>I am a&nbsp;</span>
                <span className="text-teal-600 relative flex items-center">
                  {currentText || "\u00A0"}
                  <span className="inline-block w-[3px] h-[1.10em] bg-teal-500 ml-1.5 align-middle animate-blink" />
                </span>
              </div>
            </motion.div>

            {/* Subtitle description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="text-sm sm:text-base lg:text-lg xl:text-xl text-slate-600 max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto lg:mx-0 leading-relaxed font-sans"
            >
              Currently pursuing my B.Tech in Computer Science and Engineering. I bridge 
              computational logic with high-performance ML pipelines, crafting robust algorithms 
              in Java and training intelligent networks in Python.
            </motion.p>

            {/* Interactive Triggers */}
            <motion.div
              initial={{ opacity: 0, y: 25, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pb-6"
            >
              <button
                id="hero-contact-trigger"
                onClick={() => scrollToSection("contact")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 lg:px-8 lg:py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm lg:text-base xl:text-lg rounded-full transition-colors cursor-pointer shadow-sm group"
              >
                Contact Me
                <ArrowRight className="h-4 w-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                id="hero-resume-download"
                href="#download-resume"
                onClick={(e) => {
                  e.preventDefault();
                  alert(
                    "ATS-Optimized Resume Download Initiated:\nIn a production environment, this triggers a direct download of 'Dhruv_Varshney_Resume.pdf' matching recruiters' ATS formats."
                  );
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 lg:px-8 lg:py-4 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm lg:text-base xl:text-lg rounded-full transition-colors cursor-pointer shadow-xs"
              >
                <Download className="h-4 w-4 text-slate-400" />
                Download ATS Resume
              </a>
            </motion.div>

            {/* Social Indicator Connections */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.65 }}
              className="flex items-center justify-center lg:justify-start gap-5 pt-2"
            >
              <span className="text-xs font-mono text-slate-400">CONNECT PROTOCOL:</span>
              <a
                id="hero-github-link"
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 border border-slate-100 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors"
                title="GitHub Profile"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                id="hero-linkedin-link"
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 border border-slate-100 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                id="hero-email-link"
                href="mailto:dhruvvarshney0011@gmail.com"
                className="p-2 border border-slate-100 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors"
                title="Send Email"
              >
                <Eclipse className="h-4 w-4" />
              </a>
            </motion.div>
          </div>

          {/* Interactive visual profile avatar */}
          <div className="lg:col-span-5 flex justify-center items-center text-center w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px] xl:w-[480px] xl:h-[480px] 2xl:w-[540px] 2xl:h-[540px]"
            >
              {/* Spinning background outline aura */}
              <div className="absolute inset-0 rounded-3xl border border-dashed border-slate-200 animate-spin-slow pointer-events-none" />

              {/* Glowing soft radial ring */}
              <div className="absolute inset-4 rounded-3xl bg-gradient-to-tr from-blue-500/10 via-teal-500/5 to-transparent blur-xl" />

              {/* Main Avatar Card Frame */}
              <div className="absolute inset-6 rounded-3xl border border-slate-100 bg-linear-to-tr from-slate-50 to-white shadow-lg overflow-hidden group">
                <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors duration-300 pointer-events-none z-10" />

                {/* Recruiter-focused illustration or high-concept vector of a neural network developer */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 z-20">
                  {/* Card Top Pill Badge */}
                  <div className="flex justify-between items-start">
                    <div className="px-2.5 py-1 bg-white/90 backdrop-blur-xs border border-slate-100 rounded-md shadow-xs">
                      <span className="font-mono text-[9px] font-bold text-slate-700 tracking-wider">
                        PLATFORM STATUS
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 bg-teal-500 text-white rounded-md shadow-xs font-mono text-[9px] font-bold">
                      <Briefcase className="h-3 w-3" />
                      ACTIVE
                    </div>
                  </div>

                  {/* Micro-interactive Tech Blueprint overlay */}
                  <div className="space-y-1.5 text-left bg-slate-950/80 backdrop-blur-md p-4 rounded-xl border border-slate-800 shadow-md">
                    <div className="font-mono text-[10px] text-teal-400">SYSTEMS_INTELLIGENCE: 2026</div>
                    <div className="font-serif text-sm font-semibold text-white">Dhruv Varshney</div>
                    <div className="flex items-center gap-3 text-[9px] font-mono text-slate-400 mt-1">
                      <span>B.Tech CSE</span>
                      <span>•</span>
                      <span>CGPA: 9.24</span>
                    </div>
                  </div>
                </div>

                {/* High fidelity background graphics for visual depth */}
                <img
                  referrerPolicy="no-referrer"
                  src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800"
                  alt="Professional Student Framework"
                  className="w-full h-full object-cover grayscale brightness-95 transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Decorative nodes */}
              <div className="absolute -top-1 left-1/2 p-2 lg:p-3 bg-white border border-slate-150 rounded-xl shadow-md text-xs lg:text-sm font-mono font-bold text-blue-600 -translate-x-1/2">
                PyTorch
              </div>
              <div className="absolute -bottom-1 left-20 lg:left-24 p-2 lg:p-3 bg-white border border-slate-150 rounded-xl shadow-md text-xs lg:text-sm font-mono font-bold text-slate-800">
                Java SE 17
              </div>
              <div className="absolute bottom-12 lg:bottom-16 right-0 p-2 lg:p-3 bg-white border border-slate-150 rounded-xl shadow-md text-xs lg:text-sm font-mono font-bold text-teal-600">
                LLMs / RAG
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
