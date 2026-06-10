import { useState, useMemo } from "react";
import { Github, Star, GitFork, Sparkles, Languages, Check, RefreshCw } from "lucide-react";
import { motion } from "motion/react";
import PageWrapper from "../components/PageWrapper";

interface CommitNode {
  intensity: 0 | 1 | 2 | 3 | 4;
  commits: number;
  dateStr: string;
}

export default function GitHubPage() {
  const [hoveredNode, setHoveredNode] = useState<CommitNode | null>(null);
  const [totalCommits, setTotalCommits] = useState<number>(642);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("Java");

  const commitGridData: CommitNode[][] = useMemo(() => {
    const grid: CommitNode[][] = Array.from({ length: 7 }, () => []);
    
    for (let row = 0; row < 7; row++) {
      for (let col = 0; col < 32; col++) {
        let intensity: 0 | 1 | 2 | 3 | 4 = 0;
        const seed = Math.sin(col * 0.4) + Math.cos(row * 0.5) + Math.random();
        
        if (seed > 1.4) intensity = 4;
        else if (seed > 0.8) intensity = 3;
        else if (seed > 0.2) intensity = 2;
        else if (seed > -0.4) intensity = 1;

        const commits = intensity * (Math.floor(Math.random() * 3) + 1);

        const date = new Date();
        date.setDate(date.getDate() - (224 - (col * 7 + row)));
        
        grid[row].push({
          intensity,
          commits,
          dateStr: date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
        });
      }
    }
    return grid;
  }, [totalCommits]);

  const popularRepos = [
    {
      name: "pytorch-neuro-segmentation",
      desc: "U-Net CNN and ResNet multi-label classification of high-density clinical MRI scans. Achieved 94.2% Dice coefficient.",
      lang: "Python / PyTorch",
      stars: 38,
      forks: 14,
    },
    {
      name: "java-dsa-visualizer",
      desc: "Comprehensive OOP engine mapping AVL logs, Red-Black Trees, and high-path optimization algorithms directly on canvas grids.",
      lang: "Java Core",
      stars: 44,
      forks: 19,
    },
    {
      name: "langchain-academic-rag",
      desc: "RAG Retrieval Agent using vector stores, sentence chunking, and Gemini AI for prompt querying university databases.",
      lang: "TypeScript / Python",
      stars: 52,
      forks: 23,
    }
  ];

  const languages = [
    { name: "Java", pct: 45, lines: "142,500 lines", color: "bg-orange-500" },
    { name: "Python", pct: 35, lines: "98,000 lines", color: "bg-blue-500" },
    { name: "TypeScript / JS", pct: 15, lines: "42,000 lines", color: "bg-yellow-500" },
    { name: "Others (SQL, C)", pct: 5, lines: "12,000 lines", color: "bg-slate-400" },
  ];

  const handleSimulateCommitPulse = () => {
    setTotalCommits(prev => prev + Math.floor(Math.random() * 25) + 10);
  };

  return (
    <PageWrapper>
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading */}
          <div className="max-w-3xl mb-16 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 border border-slate-200 rounded-full text-slate-700 text-xs font-mono font-semibold animate-none">
              <Sparkles className="h-3 w-3 text-slate-500" />
              GIT LOGS & REPOSITORIES
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Open Source Hub & Contributions
            </h1>
            <p className="text-sm sm:text-lg text-slate-500 max-w-2xl">
              Verified software ledger tracking daily activity, lines of code, open commits, and compiled repository structures.
            </p>
          </div>

          {/* GitHub Contribution Graph Section */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-150 shadow-2xs space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-900 rounded-xl text-white shadow-sm">
                  <Github className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-md font-bold text-slate-900">@dhruvvarshney</h4>
                  <p className="text-xs text-slate-550 font-mono text-slate-400">
                    {totalCommits} contributions indexed in the past 224 days
                  </p>
                </div>
              </div>

              {/* Recruiter Simulator */}
              <button
                id="page-simulate-github-commits"
                onClick={handleSimulateCommitPulse}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white border border-slate-200 text-slate-700 text-xs font-semibold rounded-lg hover:bg-slate-100 shadow-2xs cursor-pointer transition-all"
              >
                <RefreshCw className="h-3.5 w-3.5 text-slate-450" />
                Trigger Simulation
              </button>
            </div>

            {/* Grid visual */}
            <div className="overflow-x-auto pb-4">
              <div className="min-w-[640px] flex flex-col gap-1 select-none">
                {commitGridData.map((row, rIdx) => (
                  <div key={rIdx} className="flex gap-1">
                    {/* Row indicator name */}
                    <span className="w-8 text-[9px] font-mono text-slate-400 text-right pr-2 self-center">
                      {rIdx === 1 ? "Mon" : rIdx === 3 ? "Wed" : rIdx === 5 ? "Fri" : ""}
                    </span>

                    {row.map((node: CommitNode, cIdx) => (
                      <div
                        id={`page-commit-node-${rIdx}-${cIdx}`}
                        key={cIdx}
                        className={`h-3 w-3 rounded-xs transition-colors duration-200 cursor-pointer ${
                          node.intensity === 0
                            ? "bg-slate-200 hover:bg-slate-350"
                            : node.intensity === 1
                              ? "bg-emerald-100 hover:bg-emerald-250"
                              : node.intensity === 2
                                ? "bg-emerald-300 hover:bg-emerald-450"
                                : node.intensity === 3
                                  ? "bg-emerald-500 hover:bg-emerald-600"
                                  : "bg-emerald-700 hover:bg-emerald-800"
                        }`}
                        onMouseEnter={() => setHoveredNode(node)}
                        onMouseLeave={() => setHoveredNode(null)}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 pt-2 border-t border-slate-150/50">
              {/* Tooltip dynamic view */}
              <div className="h-4">
                {hoveredNode ? (
                  <span className="text-slate-800 font-bold font-mono">
                    {hoveredNode.commits} commits on {hoveredNode.dateStr}
                  </span>
                ) : (
                  <span>Hover over active cells to view exact records</span>
                )}
              </div>

              <div className="flex items-center gap-1">
                <span>Less</span>
                <span className="h-2.5 w-2.5 rounded-xs bg-slate-200 border border-slate-300" />
                <span className="h-2.5 w-2.5 rounded-xs bg-emerald-100" />
                <span className="h-2.5 w-2.5 rounded-xs bg-emerald-300" />
                <span className="h-2.5 w-2.5 rounded-xs bg-emerald-500" />
                <span className="h-2.5 w-2.5 rounded-xs bg-emerald-700" />
                <span>More</span>
              </div>
            </div>
          </div>

          {/* Breakdown Panel: Languages & Repos Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12 items-start">
            {/* Most Used Languages */}
            <div className="lg:col-span-5 p-6 rounded-3xl bg-slate-50 border border-slate-150 shadow-2xs space-y-6">
              <h4 className="text-sm font-bold text-slate-855 uppercase font-mono tracking-wider flex items-center gap-2 text-slate-800">
                <Languages className="h-4.5 w-4.5 text-blue-500" />
                Primary Core Languages
              </h4>

              <div className="space-y-4">
                {languages.map((lang) => (
                  <div
                    id={`page-lang-line-${lang.name.toLowerCase().replace(/\s/g, "-")}`}
                    key={lang.name}
                    onClick={() => setSelectedLanguage(lang.name)}
                    className={`p-3 rounded-2xl border transition-all cursor-pointer ${
                      selectedLanguage === lang.name
                        ? "bg-white border-blue-500/30 shadow-xs"
                        : "bg-transparent border-slate-150/30 hover:bg-white/40"
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1.5">
                      <div className="flex items-center gap-2.5">
                        <span className={`h-2.5 w-2.5 rounded-full ${lang.color}`} />
                        <span className="text-xs font-bold text-slate-800">{lang.name}</span>
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-900">{lang.pct}%</span>
                    </div>

                    {/* Horizontal Bar */}
                    <div className="w-full h-1.5 bg-slate-150 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${lang.color} rounded-full`}
                        style={{ width: `${lang.pct}%` }}
                      />
                    </div>

                    <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 mt-1">
                      <span>{lang.lines} compiled</span>
                      {selectedLanguage === lang.name && (
                        <span className="text-blue-500 flex items-center gap-0.5 font-bold">
                          <Check className="h-3 w-3" /> Selected Metric
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Curated Repository Showcase */}
            <div className="lg:col-span-7 space-y-4">
              <h4 className="text-sm font-semibold text-slate-400 uppercase font-mono tracking-wider ml-2">
                Featured Repository Clusters
              </h4>

              {popularRepos.map((repo, idx) => (
                <motion.div
                  id={`page-git-repo-${repo.name}`}
                  key={repo.name}
                  initial={{ opacity: 0, scale: 0.98, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{ x: 5 }}
                  transition={{
                    type: "tween",
                    duration: 1.1,
                    ease: "easeInOut",
                    delay: idx * 0.1,
                  }}
                  className="p-5 bg-white border border-slate-150 rounded-2xl hover:border-slate-300 shadow-2xs hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h5 className="text-sm font-bold text-slate-900 font-mono tracking-tight cursor-pointer hover:text-blue-600">
                      dhruvvarshney / <span className="text-blue-600 underline decoration-blue-200">{repo.name}</span>
                    </h5>

                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 text-xs font-mono text-slate-500">
                        <Star className="h-3.5 w-3.5 fill-amber-450 text-amber-500 border-none" />
                        {repo.stars}
                      </span>
                      <span className="flex items-center gap-1 text-xs font-mono text-slate-500">
                        <GitFork className="h-3.5 w-3.5 text-blue-500" />
                        {repo.forks}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    {repo.desc}
                  </p>

                  <div className="flex items-center justify-between gap-4 mt-4 pt-3 border-t border-slate-100 text-[10px] font-mono text-slate-400">
                    <span>Language: {repo.lang}</span>
                    <a
                      id={`page-git-repo-code-${repo.name}`}
                      href={`https://github.com/example/${repo.name}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 hover:underline hover:text-blue-700 font-bold"
                    >
                      EXPLORE REPO →
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
