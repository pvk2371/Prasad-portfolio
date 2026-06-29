import { useEffect } from 'react';
import { X, Github, ExternalLink, ShieldCheck, Cpu, Layout, HelpCircle } from 'lucide-react';

export default function PortfolioModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      id="project-case-study-modal"
      className="fixed inset-0 z-[999] flex justify-end bg-black/60 backdrop-blur-sm transition-opacity duration-500 ease-out animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl h-full bg-[#FAF9F7] overflow-y-auto shadow-2xl relative flex flex-col transition-transform duration-500 ease-out transform translate-x-0"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div className="sticky top-0 bg-[#FAF9F7]/90 backdrop-blur-md z-10 px-6 py-4 md:px-10 md:py-6 border-b border-[#EFECE6] flex justify-between items-center">
          <div>
            <span className="font-mono text-[10px] tracking-[0.25em] text-[#B08968] uppercase font-bold">
              {project.category}
            </span>
            <h2 className="font-serif-cormorant text-2xl md:text-3xl text-[#2B2B2B] font-medium tracking-tight">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 rounded-full border border-[#EFECE6] hover:border-[#7F5539] hover:bg-[#F5EFE6] text-[#2B2B2B] focus:outline-none focus:ring-2 focus:ring-[#7F5539] focus:ring-offset-1 transition-all duration-300"
            aria-label="Close Case Study"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content Section */}
        <div className="flex-1 p-6 md:p-10 space-y-10">
          {/* Elegant Minimalist Spec Cover (Zero Photos, Zero Blueprints) */}
          <div className="relative rounded-xl border border-[#EFECE6]/80 bg-white p-8 md:p-12 text-center flex flex-col items-center justify-center space-y-4 shadow-sm">
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#B08968] font-bold select-none">
              CASE STUDY SPECIFICATION
            </span>
            <div className="w-12 h-[1px] bg-[#C9A227] my-1" />
            <h3 className="font-serif-cormorant text-3xl md:text-5xl font-light text-[#2B2B2B] tracking-tight max-w-2xl leading-tight">
              {project.title}
            </h3>
            <p className="font-sans text-xs md:text-sm text-[#2B2B2B]/70 tracking-wide max-w-lg leading-relaxed">
              {project.subtitle}
            </p>
            <div className="w-24 h-[1px] bg-[#EFECE6] mt-4" />
          </div>

          {/* Quick Context Metadata */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-lg bg-[#F5EFE6]/50 border border-[#EFECE6]/80 text-[#2B2B2B]">
            <div>
              <p className="font-sans text-[10px] uppercase tracking-widest text-[#B08968]">CLIENT</p>
              <p className="font-serif-playfair text-sm font-medium mt-1">{project.client || 'Select Consultancy'}</p>
            </div>
            <div>
              <p className="font-sans text-[10px] uppercase tracking-widest text-[#B08968]">YEAR</p>
              <p className="font-serif-playfair text-sm font-medium mt-1">{project.year}</p>
            </div>
            <div>
              <p className="font-sans text-[10px] uppercase tracking-widest text-[#B08968]">ROLE</p>
              <p className="font-serif-playfair text-sm font-medium mt-1">Lead Developer</p>
            </div>
            <div>
              <p className="font-sans text-[10px] uppercase tracking-widest text-[#B08968]">EXPERIENCE</p>
              <p className="font-serif-playfair text-sm font-medium mt-1">Bespoke Production</p>
            </div>
          </div>

          {/* Core Case-Study Body */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left Columns - Narrative */}
            <div className="lg:col-span-2 space-y-8">
              {/* Introduction */}
              <div>
                <h3 className="font-serif-cormorant text-xl font-semibold tracking-tight text-[#2B2B2B] border-b border-[#EFECE6] pb-2 mb-3">
                  Executive Abstract
                </h3>
                <p className="text-[#2B2B2B]/85 text-[15px] leading-relaxed font-sans">
                  {project.description}
                </p>
              </div>

              {/* Challenge */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-[#7F5539]">
                  <HelpCircle size={18} className="shrink-0" />
                  <h4 className="font-serif-cormorant text-lg font-bold">The Architecture Challenge</h4>
                </div>
                <p className="text-[#2B2B2B]/80 text-sm leading-relaxed pl-6 font-sans">
                  {project.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-[#C9A227]">
                  <ShieldCheck size={18} className="shrink-0" />
                  <h4 className="font-serif-cormorant text-lg font-bold">The Strategic Solution</h4>
                </div>
                <p className="text-[#2B2B2B]/80 text-sm leading-relaxed pl-6 font-sans">
                  {project.solution}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-[#2B2B2B]">
                  <Layout size={18} className="shrink-0" />
                  <h4 className="font-serif-cormorant text-lg font-bold">Core Implemented Capabilities</h4>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-6">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-xs text-[#2B2B2B]/80 space-x-2">
                      <span className="text-[#7F5539] font-bold shrink-0 mt-0.5">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Columns - Tech, Architecture, Links */}
            <div className="space-y-8">
              {/* Action Buttons */}
              <div className="flex flex-col gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center space-x-2 w-full py-3 px-4 bg-[#7F5539] hover:bg-[#5C4033] text-white text-xs font-medium tracking-[0.1em] uppercase rounded transition-all duration-300"
                  >
                    <span>Launch Live Showcase</span>
                    <ExternalLink size={14} />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center space-x-2 w-full py-3 px-4 border border-[#7F5539]/20 hover:border-[#7F5539] bg-transparent hover:bg-[#F5EFE6] text-[#7F5539] text-xs font-medium tracking-[0.1em] uppercase rounded transition-all duration-300"
                  >
                    <span>Inspect Source</span>
                    <Github size={14} />
                  </a>
                )}
              </div>

              {/* Technologies */}
              <div className="p-5 rounded-lg border border-[#EFECE6] bg-white space-y-3">
                <h4 className="font-serif-cormorant text-md font-bold text-[#2B2B2B] tracking-tight border-b border-[#FAF9F7] pb-1">
                  Engineered Stack
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-[10px] font-mono tracking-wider text-[#7F5539] bg-[#F5EFE6] rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Architecture Blueprint */}
              <div className="p-5 rounded-lg border border-[#EFECE6] bg-[#FAF9F7] space-y-3">
                <div className="flex items-center space-x-2 text-[#2B2B2B] border-b border-[#EFECE6] pb-2">
                  <Cpu size={14} />
                  <h4 className="font-serif-cormorant text-sm font-bold tracking-wider">SYSTEM BLUEPRINT</h4>
                </div>
                <div className="space-y-2.5">
                  {project.architecture.map((arch, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <p className="text-[10px] font-mono uppercase text-[#B08968]">Layer {idx + 1}</p>
                      <p className="text-[11px] text-[#2B2B2B]/90 font-sans leading-tight">{arch}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}
