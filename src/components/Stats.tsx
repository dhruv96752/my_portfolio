import { useState, useEffect, useRef } from "react";
import { GraduationCap, Award, FolderHeart, Laptop } from "lucide-react";
import { motion, useInView } from "motion/react";

interface CountUpProps {
  end: number;
  decimals?: number;
  suffix?: string;
  duration?: number;
  trigger: boolean;
}

function CountUp({ end, decimals = 0, suffix = "", duration = 1500, trigger }: CountUpProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const val = progress * end;
      setCount(val);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(step);
  }, [end, duration, trigger]);

  return (
    <span>
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const stats = [
    {
      label: "Cumulative CGPA",
      desc: "B.Tech Computer Science",
      endValue: 9.24,
      decimals: 2,
      suffix: "/10",
      icon: GraduationCap,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      label: "Innovative Projects",
      desc: "Full Stack & AI Core",
      endValue: 12,
      decimals: 0,
      suffix: "+",
      icon: FolderHeart,
      color: "text-teal-600",
      bgColor: "bg-teal-50"
    },
    {
      label: "Valid Certifications",
      desc: "TensorFlow, Google, Oracle",
      endValue: 8,
      decimals: 0,
      suffix: "+",
      icon: Award,
      color: "text-amber-500",
      bgColor: "bg-amber-50"
    },
    {
      label: "Internship Engagements",
      desc: "MLOps & Healthcare AI",
      endValue: 2,
      decimals: 0,
      suffix: " Internships",
      icon: Laptop,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50"
    }
  ];

  return (
    <section
      id="stats-section"
      ref={containerRef}
      className="py-12 bg-white relative border-y border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                id={`stat-card-${idx}`}
                key={idx}
                initial={{ opacity: 0, scale: 0.98, y: 30 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 1.0, ease: "easeInOut", delay: idx * 0.12 }}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 hover:bg-slate-100/50 transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2.5 rounded-xl ${stat.bgColor} ${stat.color} transition-transform group-hover:scale-110`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-[9px] font-bold text-slate-400 tracking-wider">
                    VETTED STAT
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    <CountUp
                      end={stat.endValue}
                      decimals={stat.decimals}
                      suffix={stat.suffix}
                      trigger={isInView}
                    />
                  </h4>
                  <p className="text-xs font-semibold text-slate-700 tracking-wide">
                    {stat.label}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    {stat.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
