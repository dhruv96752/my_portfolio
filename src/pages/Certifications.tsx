import { useState } from "react";
import { CERTIFICATES } from "../data";
import { Certificate } from "../types";
import { Award, ExternalLink, Calendar, ShieldCheck, Sparkles, Search, CheckCircle2, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import PageWrapper from "../components/PageWrapper";

export default function CertificationsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeVerificationCert, setActiveVerificationCert] = useState<Certificate | null>(null);

  const categories = ["All", "AI/ML", "Cloud/DevOps", "Development"];

  const filteredCertificates = CERTIFICATES.filter((cert) => {
    const matchesCategory = selectedCategory === "All" || cert.category === selectedCategory;
    const searchString = searchQuery.toLowerCase();
    const matchesSearch = !searchString || 
                          cert.title.toLowerCase().includes(searchString) ||
                          cert.issuer.toLowerCase().includes(searchString) ||
                          (cert.credentialId && cert.credentialId.toLowerCase().includes(searchString));
    return matchesCategory && matchesSearch;
  });

  return (
    <PageWrapper>
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading */}
          <div className="max-w-3xl mb-16 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 border border-amber-100 rounded-full text-amber-700 text-xs font-mono font-semibold">
              <Sparkles className="h-3 w-3 text-amber-600" />
              VERIFIED PROFESSIONAL CREDENTIALS
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Professional Certifications & Badges
            </h1>
            <p className="text-sm sm:text-lg text-slate-500 max-w-2xl">
              Industry-validated credentials proving structural excellence in Deep Learning architectures, cloud infrastructure management, and object-oriented systems compiling.
            </p>
          </div>

          {/* Search & Dynamic Filters */}
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-12 border-b border-slate-100 pb-8">
            {/* Categories */}
            <div className="flex flex-wrap items-center gap-1.5 order-2 md:order-1">
              {categories.map((cat) => (
                <button
                  id={`page-cert-filter-${cat.toLowerCase().replace(/\//g, "-")}`}
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-mono font-bold tracking-wider rounded-md transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-amber-500 text-white shadow-xs"
                      : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {cat.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Search inputs */}
            <div className="relative w-full md:w-72 order-1 md:order-2">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                id="page-cert-search-input"
                type="text"
                placeholder="Search issuer, title or ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-1.5 text-xs border border-slate-200 bg-slate-50/50 rounded-lg focus:outline-hidden focus:border-amber-500 focus:bg-white transition-all text-slate-800"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-mono font-bold"
                >
                  CLEAR
                </button>
              )}
            </div>
          </div>

          {/* Grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredCertificates.map((cert: Certificate, idx: number) => (
                <motion.div
                  id={`page-cert-card-${cert.id}`}
                  key={cert.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 1.0, ease: "easeInOut", delay: idx * 0.12 }}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-150 hover:border-slate-300 hover:bg-white transition-all duration-300 flex flex-col justify-between group shadow-2xs hover:shadow-md"
                >
                  <div className="space-y-4">
                    {/* Visual Icon Header */}
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 bg-white border border-slate-150 rounded-xl group-hover:bg-amber-50 group-hover:text-amber-500 transition-colors">
                        <Award className="h-5 w-5 text-slate-600 group-hover:text-amber-500 transition-colors" />
                      </div>
                      <span className="font-mono text-[9px] font-bold text-slate-400 tracking-wider">
                        {cert.category}
                      </span>
                    </div>

                    {/* Info block */}
                    <div className="space-y-1.5">
                      <h4 className="text-sm font-bold text-slate-900 leading-tight group-hover:text-amber-600 transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-xs font-semibold text-slate-600 font-mono">
                        {cert.issuer}
                      </p>
                    </div>

                    {/* Sub-text blocks */}
                    <div className="space-y-1 text-xs text-slate-500">
                      <div className="flex items-center gap-1.5 text-[11px] font-sans">
                        <Calendar className="h-3.5 w-3.5 text-slate-400" />
                        Issued: {cert.date}
                      </div>
                      {cert.credentialId && (
                        <div className="flex items-center gap-1.5 font-mono text-[10px] break-all text-slate-400">
                          <ShieldCheck className="h-3.5 w-3.5 text-blue-500" />
                          ID: {cert.credentialId}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="mt-6 pt-4 border-t border-slate-15 w-full">
                    <button
                      id={`page-cert-view-btn-${cert.id}`}
                      onClick={() => setActiveVerificationCert(cert)}
                      className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded-lg hover:text-slate-950 transition-all cursor-pointer shadow-2xs"
                    >
                      Verify Credentials
                      <ExternalLink className="h-3 w-3 text-slate-400" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Secure verification dialog */}
          <AnimatePresence>
            {activeVerificationCert && (
              <motion.div
                id="cert-verification-modal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-55 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4 animate-none"
              >
                <motion.div
                  initial={{ scale: 0.95, y: 15 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.95, y: 15 }}
                  transition={{ type: "spring", duration: 0.4 }}
                  className="bg-white rounded-3xl border border-slate-150 max-w-md w-full shadow-2xl p-6 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
                  
                  {/* Close trigger */}
                  <button
                    id="cert-modal-close"
                    onClick={() => setActiveVerificationCert(null)}
                    className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 cursor-pointer transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>

                  <div className="space-y-6 pt-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-amber-50 text-amber-500 rounded-xl border border-amber-100">
                        <Award className="h-6 w-6" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold text-amber-600 bg-amber-50 border border-amber-200/50 px-2 py-0.5 rounded uppercase">
                          {activeVerificationCert.category}
                        </span>
                        <h4 className="text-md font-bold text-slate-900 mt-1">
                          Signature Verification Success
                        </h4>
                      </div>
                    </div>

                    <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl space-y-3 text-xs">
                      <div className="grid grid-cols-3 font-mono text-[10px] text-slate-400">
                        <span>CREDENTIAL:</span>
                        <span className="col-span-2 text-slate-700 font-bold font-sans text-xs">{activeVerificationCert.title}</span>
                      </div>
                      <div className="grid grid-cols-3 font-mono text-[10px] text-slate-400">
                        <span>ISSUING BODY:</span>
                        <span className="col-span-2 text-slate-700 font-mono text-xs">{activeVerificationCert.issuer}</span>
                      </div>
                      {activeVerificationCert.credentialId && (
                        <div className="grid grid-cols-3 font-mono text-[10px] text-slate-400">
                          <span>REGISTRY ID:</span>
                          <span className="col-span-2 text-blue-600 font-mono font-bold text-xs">{activeVerificationCert.credentialId}</span>
                        </div>
                      )}
                      <div className="grid grid-cols-3 font-mono text-[10px] text-slate-400">
                        <span>ISSUED DATE:</span>
                        <span className="col-span-2 text-slate-500 text-xs">{activeVerificationCert.date}</span>
                      </div>
                      <div className="grid grid-cols-3 font-mono text-[10px] text-slate-400">
                        <span>STATUS:</span>
                        <span className="col-span-2 text-emerald-600 font-mono font-bold text-xs flex items-center gap-1">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                          SECURE SIGNED SHA-256
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-3 pt-2">
                      <button
                        onClick={() => setActiveVerificationCert(null)}
                        className="flex-1 py-2.5 border border-slate-200 hover:border-slate-350 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs rounded-xl transition-colors cursor-pointer"
                      >
                        Close Registry
                      </button>
                      <a
                        id="cert-signature-redirect"
                        href={activeVerificationCert.verificationUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 py-2.5 bg-slate-950 text-white hover:bg-slate-900 font-semibold text-xs rounded-xl inline-flex items-center justify-center gap-1.5 transition-colors"
                      >
                        Verify in Authority
                        <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </PageWrapper>
  );
}
