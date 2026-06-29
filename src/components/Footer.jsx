import { ArrowUp, Github, Linkedin, Mail, ArrowUpRight, User, MapPin, Phone, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="luxury-studio-footer"
      className="bg-[#7F5539] text-[#FAF9F7] pt-20 pb-8 relative overflow-hidden border-t border-[#7F5539]/20"
    >
      {/* Absolute massive abstract background lettering of initials */}
      <div className="absolute bottom-[-10%] right-[-5%] font-serif-cormorant text-[16vw] font-black text-[#FFFFFF]/[0.02] select-none pointer-events-none tracking-tighter leading-none">
        PRASAD VIJAY KHOKALE
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 pb-16 border-b border-[#FAF9F7]/10">
          {/* Logo Column */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="font-serif-cormorant text-3xl md:text-4xl font-light tracking-widest text-white">
              PRASAD KHOKALE
            </h2>
            <p className="font-serif-playfair text-sm italic text-[#FAF9F7]/60 max-w-sm">
              "Building scalable software with clean code, modern technologies, and continuous learning."
            </p>
            <div className="flex space-x-4">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-[#FAF9F7]/10 hover:border-white text-[#FAF9F7]/60 hover:text-white hover:bg-white/5 transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <Github size={16} />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-[#FAF9F7]/10 hover:border-white text-[#FAF9F7]/60 hover:text-white hover:bg-white/5 transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-full border border-[#FAF9F7]/10 hover:border-white text-[#FAF9F7]/60 hover:text-white hover:bg-white/5 transition-all duration-300"
                aria-label="Send Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <p className="font-sans text-[10px] uppercase tracking-widest text-[#B08968] font-bold">Quick Links</p>
            <ul className="space-y-2.5 text-xs text-[#FAF9F7]/70 font-medium">
              {['home', 'about', 'services', 'projects', 'experience', 'certifications', 'contact'].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => onNavigate(section)}
                    className="hover:text-white hover:underline uppercase tracking-wider text-left"
                  >
                    {section}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Address/Inquiries */}
          <div className="space-y-4">
            <p className="font-sans text-[10px] uppercase tracking-widest text-[#B08968] font-bold">Contact Information</p>
            <div className="space-y-3.5 text-xs text-[#FAF9F7]/70">
              <div className="flex items-center space-x-2">
                <User size={13} className="text-[#B08968] shrink-0" />
                <span className="font-medium text-[#FAF9F7]">Prasad Vijay Khokale</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin size={13} className="text-[#B08968] shrink-0 mt-0.5" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={13} className="text-[#B08968] shrink-0" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-white transition-colors">{PERSONAL_INFO.email}</a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={13} className="text-[#B08968] shrink-0" />
                <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-white transition-colors">{PERSONAL_INFO.phone}</a>
              </div>
              <div className="pt-1.5">
                <a
                  href="/pvk.pdf"
                  download="Prasad_Vijay_Khokale_Resume.pdf"
                  className="inline-flex items-center space-x-1.5 text-[#B08968] hover:text-white transition-all text-[11px]"
                >
                  <FileText size={13} />
                  <span>Download Resume</span>
                  <ArrowUpRight size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Base */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-[#FAF9F7]/50 font-mono">
          <p>© 2026 Prasad Vijay Khokale. Turning ideas into scalable software.</p>
          <div className="flex items-center space-x-6">
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1.5 px-3 py-1.5 border border-[#FAF9F7]/10 hover:border-white rounded text-white bg-[#2B2B2B]/40 hover:bg-[#2B2B2B]/80 transition-all duration-300 cursor-pointer"
            >
              <span>Back To Top</span>
              <ArrowUp size={12} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
