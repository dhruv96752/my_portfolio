import { CERTIFICATES } from "../data";
import { Certificate } from "../types";
import { Award, ExternalLink, Calendar, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 border border-amber-100 rounded-full text-amber-700 text-xs font-mono font-semibold">
            <Sparkles className="h-3 w-3 text-amber-600" />
            05 . CREDENTIAL VALIDATION
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Professional Certifications
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto">
            Industry-validated certifications corroborating competencies across neural structures, 
            enterprise cloud routing, and core structural Java compiling.
          </p>
        </div>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATES.map((cert: Certificate, idx) => (
            <motion.div
              id={`cert-card-${cert.id}`}
              key={cert.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 hover:bg-slate-100/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Visual Icon Header */}
                <div className="flex items-center justify-between">
                  <div className="p-2.5 bg-white border border-slate-100 rounded-xl group-hover:bg-amber-100/50 group-hover:text-amber-600 transition-colors">
                    <Award className="h-5 w-5 text-slate-600 group-hover:text-amber-600 transition-colors" />
                  </div>
                  <span className="font-mono text-[9px] font-bold text-slate-400 tracking-wider">
                    {cert.category}
                  </span>
                </div>

                {/* Info block */}
                <div className="space-y-1.5">
                  <h4 className="text-sm font-bold text-slate-900 leading-tight">
                    {cert.title}
                  </h4>
                  <p className="text-xs font-semibold text-slate-600">
                    {cert.issuer}
                  </p>
                </div>

                {/* Sub-text blocks */}
                <div className="space-y-1 text-xs text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    Issued Value: {cert.date}
                  </div>
                  {cert.credentialId && (
                    <div className="flex items-center gap-1.5 font-mono text-[10px] break-all">
                      <ShieldCheck className="h-3.5 w-3.5 text-blue-500" />
                      ID: {cert.credentialId}
                    </div>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-slate-150/50">
                <a
                  id={`cert-view-btn-${cert.id}`}
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    alert(
                      `Simulated Secure Credential Registry:\nTitle: ${cert.title}\nIssuer: ${cert.issuer}\nVerification ID: ${cert.credentialId || "N/A"}\nRedirecting recruiter in professional pipeline sandbox.`
                    );
                  }}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded-lg hover:text-slate-950 transition-all cursor-pointer shadow-2xs"
                >
                  View Certificate
                  <ExternalLink className="h-3 w-3 text-slate-400" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
