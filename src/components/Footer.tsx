import { ArrowUp, Heart, Terminal } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer-section" className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          
          {/* Logo brand */}
          <div className="flex items-center gap-2">
            <div className="p-2 bg-slate-800 rounded-lg text-white">
              <Terminal className="h-4.5 w-4.5" />
            </div>
            <div className="text-left">
              <div className="font-mono text-xs font-semibold tracking-wider text-slate-200">
                DHRUV.AI
              </div>
              <div className="text-[9px] text-slate-500 font-mono tracking-widest uppercase">
                B.Tech CS Engineering
              </div>
            </div>
          </div>

          {/* Quick legal stats */}
          <div className="text-xs font-mono text-center md:text-right space-y-1">
            <p className="text-slate-200 font-semibold">RECIPROCITY METRIC: 2026 ENGAGEMENTS</p>
            <p className="text-[10px] text-slate-500 font-mono">HOSTED SECURE IN CLOUD RUN PLATFORM</p>
          </div>
        </div>

        {/* Lower footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <div className="text-xs text-slate-500 font-mono text-center sm:text-left flex items-center gap-1">
            <span>© {currentYear} Dhruv Varshney. Engineered with</span>
            <Heart className="h-3 w-3 text-red-500 inline fill-red-500 animate-pulse" />
            <span>& Framer Motion.</span>
          </div>

          {/* Scroll to top */}
          <button
            id="scroll-to-top-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="p-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg cursor-pointer transition-colors flex items-center gap-1.5 text-xs font-mono font-bold"
            aria-label="Scroll to top of page"
          >
            BACK TO TOP
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
