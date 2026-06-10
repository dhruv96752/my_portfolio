import { useState, FormEvent } from "react";
import { Mail, Linkedin, Github, MessageCircle, Send, CheckCircle2, Sparkles, Loader2, AlertCircle } from "lucide-react";
import { motion } from "motion/react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Hiring Interest",
    message: ""
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const contactChannels = [
    {
      name: "Direct Email Enquiries",
      value: "dhruvvarshney0011@gmail.com",
      url: "mailto:dhruvvarshney0011@gmail.com",
      icon: Mail,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      name: "Professional LinkedIn Network",
      value: "linkedin.com/in/dhruv-ai",
      url: "https://linkedin.com",
      icon: Linkedin,
      color: "text-blue-700",
      bgColor: "bg-slate-50"
    },
    {
      name: "Open Source Activity hub",
      value: "github.com/dhruv-ai",
      url: "https://github.com",
      icon: Github,
      color: "text-slate-900",
      bgColor: "bg-slate-50"
    },
    {
      name: "WhatsApp Consultation Protocol",
      value: "+91 99999 00000",
      url: "https://wa.me/919999900000?text=Hi%20Dhruv,%20viewed%20your%20CS%20AI%20Portfolio!",
      icon: MessageCircle,
      color: "text-emerald-500",
      bgColor: "bg-emerald-50/50"
    }
  ];

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = "Name description is required.";
    if (!formData.email.trim()) {
      errors.email = "Email target channel is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Input does not comply with secure email syntax.";
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      errors.message = "Message must contain at least 10 computational characters.";
    }
    return errors;
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setIsSubmitting(true);

    // Simulate reliable API delivery pipeline
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({ name: "", email: "", subject: "Hiring Interest", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-50 border border-teal-100 rounded-full text-teal-700 text-xs font-mono font-semibold">
            <Sparkles className="h-3 w-3 text-teal-600" />
            08 . TRANSMISSION CHANNELS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Open Communication Terminal
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto">
            Initiate communication for fall internship opportunities, software integration assignments, or academic research panels.
          </p>
        </div>

        {/* Form and info grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          {/* Left panel Connection indicators */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-lg font-bold text-slate-900 tracking-tight">
              Direct Protocols
            </h3>
            <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
              Recruiters are requested to initiate secure connections. Responses are typically dispatched 
              within 4 business hours.
            </p>

            <div className="space-y-4 pt-2">
              {contactChannels.map((chan, idx) => {
                const Icon = chan.icon;
                return (
                  <a
                    id={`contact-channel-${idx}`}
                    key={idx}
                    href={chan.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-350 hover:bg-slate-100/30 transition-all duration-300 group"
                  >
                    <div className={`p-3 rounded-xl ${chan.bgColor} ${chan.color} transition-transform group-hover:scale-105`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider">
                        {chan.name}
                      </p>
                      <p className="text-xs font-extrabold text-slate-800 break-all font-mono">
                        {chan.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right panel Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl border border-slate-150 bg-slate-50/50 shadow-xs">
              <h3 className="text-md font-bold text-slate-900 mb-6">
                Send Direct Message
              </h3>

              {submitSuccess ? (
                <motion.div
                  id="contact-form-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 rounded-2xl bg-emerald-50 border border-emerald-100 text-center space-y-3"
                >
                  <CheckCircle2 className="h-10 w-10 text-emerald-500 mx-auto" />
                  <h4 className="text-sm font-bold text-emerald-800">
                    Message Dispatched Successfully!
                  </h4>
                  <p className="text-xs text-emerald-600 leading-relaxed max-w-sm mx-auto">
                    A secure transmission has been logged. Thank you for your review; Dhruv will connect 
                    back in short duration.
                  </p>
                  <button
                    id="reset-contact-flow"
                    onClick={() => setSubmitSuccess(false)}
                    className="mt-2 text-xs font-mono font-bold text-emerald-700 underline decoration-emerald-200 hover:text-emerald-800"
                  >
                    SUBMIT ANOTHER MESSAGE
                  </button>
                </motion.div>
              ) : (
                <form id="contact-form-flow" onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                        YOUR NAME
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        placeholder="Dr. Sarah Jenkins"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-2 text-xs border bg-white rounded-lg focus:outline-hidden transition-all ${
                          formErrors.name 
                            ? "border-red-400 focus:border-red-500" 
                            : "border-slate-200 focus:border-blue-500"
                        }`}
                      />
                      {formErrors.name && (
                        <p className="text-[10px] text-red-500 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" /> {formErrors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                        EMAIL ADDRESS
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        placeholder="jenkins@institution.org"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-2 text-xs border bg-white rounded-lg focus:outline-hidden transition-all ${
                          formErrors.email 
                            ? "border-red-400 focus:border-red-500" 
                            : "border-slate-200 focus:border-blue-500"
                        }`}
                      />
                      {formErrors.email && (
                        <p className="text-[10px] text-red-500 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" /> {formErrors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject selector */}
                  <div className="space-y-1.5">
                    <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                      CONNECTION PURPOSE
                    </label>
                    <select
                      id="contact-purpose"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2 text-xs border border-slate-200 bg-white rounded-lg focus:outline-hidden focus:border-blue-500 text-slate-800 font-sans"
                    >
                      <option value="Hiring Interest">Hiring Inquiry / Internship Offer</option>
                      <option value="Project Collaboration">Open Source Project Partnership</option>
                      <option value="Tech Discussion">General Engineering Discussion</option>
                      <option value="Academic Request">Academic Research Panel Enquiry</option>
                    </select>
                  </div>

                  {/* Message body */}
                  <div className="space-y-1.5">
                    <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                      DETAILED PACKET MESSAGE
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      placeholder="Enter details of your project context, timeline, and stack requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-4 py-3 text-xs border bg-white rounded-lg focus:outline-hidden transition-all resize-none ${
                        formErrors.message 
                          ? "border-red-400 focus:border-red-500" 
                          : "border-slate-200 focus:border-blue-500"
                      }`}
                    />
                    {formErrors.message && (
                      <p className="text-[10px] text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" /> {formErrors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Trigger */}
                  <button
                    id="contact-form-submit"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs tracking-wider rounded-lg shadow-sm transition-colors cursor-pointer select-none active:scale-[0.99] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        TRANSMITTING SECURE DATA...
                      </>
                    ) : (
                      <>
                        <Send className="h-3.5 w-3.5" />
                        DISPATCH MESSAGE PACKET
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
