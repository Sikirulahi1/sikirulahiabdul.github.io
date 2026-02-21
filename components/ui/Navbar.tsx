"use client";

import { motion, useScroll } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Publications", href: "#publications" },
  { name: "Blogs", href: "#blogs" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showCVDropdown, setShowCVDropdown] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.href.substring(1));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border-subtle"
          : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={scrollToTop}
              className="text-xl font-bold text-text-primary hover:text-accent transition-colors"
            >
              Sikirulahi
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-sm font-medium transition-colors ${activeSection === link.href.substring(1)
                    ? "text-accent"
                    : "text-text-secondary hover:text-accent"
                    }`}
                >
                  {link.name}
                </button>
              ))}

              {/* CV Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setShowCVDropdown(true)}
                  onMouseLeave={() => setShowCVDropdown(false)}
                  className="flex items-center gap-2 px-6 py-2.5 border-2 border-accent text-accent text-sm font-semibold rounded-lg hover:bg-accent hover:text-background transition-all"
                >
                  Download CV
                  <ChevronDown size={14} />
                </button>

                {showCVDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    onMouseEnter={() => setShowCVDropdown(true)}
                    onMouseLeave={() => setShowCVDropdown(false)}
                    className="absolute right-0 mt-2 w-56 bg-card border border-border-subtle rounded-lg shadow-lg overflow-hidden"
                  >
                    <a
                      href="/resume-industry.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-5 py-3.5 text-sm text-text-primary hover:bg-surface hover:text-accent transition-colors"
                    >
                      Industry Resume
                    </a>
                    <a
                      href="/resume-academic.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-5 py-3.5 text-sm text-text-primary hover:bg-surface hover:text-accent transition-colors border-t border-border-subtle"
                    >
                      Academic CV
                    </a>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-text-primary"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 0.3 }}
          className="fixed inset-y-0 right-0 z-40 w-full max-w-sm bg-card border-l border-border-subtle md:hidden"
        >
          <div className="flex flex-col gap-6 p-8 pt-24">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-medium transition-colors ${activeSection === link.href.substring(1)
                  ? "text-accent"
                  : "text-text-secondary hover:text-text-primary"
                  }`}
              >
                {link.name}
              </a>
            ))}

            <div className="flex flex-col gap-3 pt-6 border-t border-border-subtle">
              <a
                href="/resume-industry.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 text-center border-2 border-accent text-accent text-sm font-semibold rounded-lg hover:bg-accent hover:text-background transition-all"
              >
                Industry Resume
              </a>
              <a
                href="/resume-academic.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 text-center border-2 border-accent text-accent text-sm font-semibold rounded-xl hover:bg-accent hover:text-background transition-all"
              >
                Academic CV
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
