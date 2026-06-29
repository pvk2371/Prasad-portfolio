import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Navbar({ currentSection, onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Certifications', id: 'certifications' },
    { label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      id="main-navigation-bar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isMobileMenuOpen
          ? 'bg-[#7F5539] py-4 border-b border-[#FAF9F7]/10'
          : isScrolled
          ? 'bg-[#FAF9F7]/95 backdrop-blur-md py-4 shadow-sm border-b border-[#7F5539]/10'
          : 'bg-transparent py-6 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => handleLinkClick('home')}
          className="flex flex-col items-start focus:outline-none cursor-pointer group"
        >
          <span className={`font-serif-cormorant text-xl md:text-2xl font-light tracking-[0.18em] transition-colors duration-300 ${
            isMobileMenuOpen
              ? 'text-white group-hover:text-[#C9A227]'
              : 'text-[#2B2B2B] group-hover:text-[#7F5539]'
          }`}>
            PRASAD KHOKALE
          </span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <ul className="flex items-center space-x-7">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative font-sans text-xs uppercase tracking-widest font-medium cursor-pointer transition-colors duration-300 py-1.5 focus:outline-none ${
                    currentSection === link.id
                      ? 'text-[#7F5539] font-bold'
                      : 'text-[#2B2B2B]/75 hover:text-[#7F5539]'
                  }`}
                >
                  {link.label}
                  {currentSection === link.id && (
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#7F5539] transition-all duration-300" />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Vertical Divider */}
          <div className="h-4 w-[1px] bg-[#EFECE6]" />

          {/* Action Trigger */}
          <a
            href="/pvk.pdf"
            download="Prasad_Vijay_Khokale_Resume.pdf"
            className="flex items-center space-x-1 px-4 py-2 bg-[#7F5539] hover:bg-[#5C4033] text-white text-[10px] tracking-widest uppercase font-medium rounded transition-all duration-300"
          >
            <span>Resume</span>
            <ArrowUpRight size={12} />
          </a>
        </div>

        {/* Mobile Controls Trigger */}
        <div className="flex lg:hidden items-center space-x-3">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2.5 rounded-lg border transition-all duration-300 focus:outline-none cursor-pointer ${
              isMobileMenuOpen
                ? 'border-[#FAF9F7]/30 text-white hover:bg-white/10'
                : isScrolled
                ? 'border-[#7F5539]/30 text-[#7F5539] bg-[#7F5539]/5 hover:bg-[#7F5539]/15'
                : 'border-[#2B2B2B]/20 text-[#2B2B2B] bg-white/40 backdrop-blur-sm hover:bg-[#2B2B2B]/5'
            }`}
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Glass Drawer Overlay */}
      {isMobileMenuOpen && (
        <div
          id="mobile-navigation-overlay"
          className="fixed inset-0 bg-[#7F5539] z-40 lg:hidden flex flex-col justify-between pt-24 pb-8 px-8 animate-fade-in"
        >
          <ul className="flex flex-col space-y-6">
            {navLinks.map((link, idx) => (
              <li
                key={link.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.08}s` }}
              >
                <button
                  onClick={() => handleLinkClick(link.id)}
                  className={`font-serif-cormorant text-3xl font-light tracking-wide focus:outline-none w-full text-left cursor-pointer transition-colors duration-300 ${
                    currentSection === link.id
                      ? 'text-white font-normal pl-3 border-l-2 border-[#C9A227]'
                      : 'text-[#FAF9F7]/80 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Footer Links */}
          <div className="space-y-6 pt-6 border-t border-[#FAF9F7]/10 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="flex justify-between items-center text-xs tracking-wider font-mono">
              <span className="text-[#FAF9F7]/60">LET'S COLLABORATE</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[#C9A227] hover:text-white underline font-bold transition-colors">
                Email
              </a>
            </div>
            <a
              href="/pvk.pdf"
              download="Prasad_Vijay_Khokale_Resume.pdf"
              className="flex justify-center items-center space-x-2 py-3 bg-[#FAF9F7] hover:bg-white text-[#7F5539] text-xs tracking-widest uppercase font-semibold rounded transition-all duration-300 w-full"
            >
              <span>Download Resume</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
