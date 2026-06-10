import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Terminal, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Skills", path: "/skills" },
    { label: "Projects", path: "/projects" },
    { label: "Experience", path: "/experience" },
    { label: "Certifications", path: "/certifications" },
    { label: "GitHub Hub", path: "/github" },
    { label: "Achievements", path: "/achievements" },
    { label: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check if a path is currently active
  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header
      id="header-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm py-2 sm:py-3"
          : "bg-white/40 backdrop-blur-xs py-2.5 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            id="logo-trigger"
            to="/"
            className="flex items-center gap-2 group cursor-pointer"
            onClick={() => {
              setIsMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <div className="p-2 border border-slate-100 rounded-lg bg-slate-50 group-hover:bg-blue-50 transition-colors">
              <Terminal className="h-5 w-5 text-blue-605 text-blue-600 transition-transform group-hover:rotate-12" />
            </div>
            <div className="text-left">
              <div className="font-mono text-sm font-semibold tracking-wide text-slate-900 leading-none">
                DHRUV.AI
              </div>
              <div className="text-[10px] text-slate-400 font-mono tracking-widest uppercase mt-0.5">
                B.Tech CS & AI
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  id={`nav-${item.label.toLowerCase().replace(/\s/g, "-")}`}
                  key={item.path}
                  to={item.path}
                  className={`relative px-3 py-2 text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer rounded-md ${
                    active
                      ? "text-blue-600"
                      : "text-slate-600 hover:text-slate-950 hover:bg-slate-50"
                  }`}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: "instant" });
                  }}
                >
                  {item.label}
                  {active && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-blue-600 rounded-full"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Call to Action Trigger */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              id="header-resume-link"
              to="/contact"
              className="flex items-center gap-1.5 px-4 py-2 border border-slate-200 bg-white text-slate-700 text-xs font-semibold tracking-wide rounded-full hover:bg-slate-50 shadow-2xs transition-colors"
              onClick={() => {
                setIsMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: "instant" });
              }}
            >
              Let's Connect
              <ArrowUpRight className="h-3.5 w-3.5 text-slate-400" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 border border-slate-100 rounded-lg text-slate-600 hover:text-slate-950 bg-slate-50"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden border-b border-indigo-50/50 bg-white overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 sm:px-6">
              {navItems.map((item) => {
                const active = isActive(item.path);
                return (
                  <Link
                    id={`mobile-nav-${item.label.toLowerCase().replace(/\s/g, "-")}`}
                    key={item.path}
                    to={item.path}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      window.scrollTo({ top: 0, behavior: "instant" });
                    }}
                    className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-medium tracking-wide transition-colors ${
                      active
                        ? "bg-blue-50 text-blue-700 font-semibold"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-slate-100 px-4">
                <Link
                  id="mobile-menu-connect-link"
                  to="/contact"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: "instant" });
                  }}
                  className="flex items-center justify-center gap-1.5 w-full py-3 bg-blue-600 text-white text-sm font-semibold tracking-wide rounded-xl shadow-xs hover:bg-blue-700 transition-colors"
                >
                  Let's Connect
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
