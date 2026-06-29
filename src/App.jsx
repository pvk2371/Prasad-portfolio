import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Award,
  ExternalLink,
  Search,
  Check,
  Compass,
  Code,
  Server,
  Cloud,
  BadgeAlert
} from 'lucide-react';

// Data and components
import { PERSONAL_INFO, PROJECTS, SERVICES, EXPERIENCE_TIMELINE, CERTIFICATIONS, SKILLS_CATEGORIES } from './data';
import Loader from './components/Loader';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PortfolioModal from './components/PortfolioModal';
import CertModal from './components/CertModal';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Portfolio States
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  // Certificate State
  const [selectedCert, setSelectedCert] = useState(null);

  // Contact Form State
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'Bespoke Project Inquiry',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('idle');

  // Stats Counters
  const [counters, setCounters] = useState({ experience: 1, delivery: 1, satisfaction: 1 });

  // Scroll active section and progress tracking
  useEffect(() => {
    const handleScroll = () => {
      // 1. Section tracking
      const sections = ['home', 'about', 'services', 'projects', 'experience', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setCurrentSection(section);
            break;
          }
        }
      }

      // 2. Scroll progress bar calculation
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animating counter increments upon loading completing
  useEffect(() => {
    if (!loading) {
      const interval = setInterval(() => {
        setCounters((prev) => {
          const experienceMax = 1; // Prasad Vijay Khokale's years of technical excellence
          const deliveryMax = 8; // Bespoke deployments and systems delivered
          const satisfactionMax = 100; // Customer satisfaction percentage
          
          return {
            experience: prev.experience < experienceMax ? prev.experience + 1 : experienceMax,
            delivery: prev.delivery < deliveryMax ? prev.delivery + 2 : deliveryMax,
            satisfaction: prev.satisfaction < satisfactionMax ? prev.satisfaction + 3 : satisfactionMax
          };
        });
      }, 50);

      return () => clearInterval(interval);
    }
  }, [loading]);

  const handleNavigate = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setCurrentSection(sectionId);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setFormStatus('error');
      return;
    }

    setFormStatus('submitting');
    // Simulate premium verification & email dispatching
    setTimeout(() => {
      setFormStatus('success');
      setFormState({ name: '', email: '', subject: 'Bespoke Project Inquiry', message: '' });
    }, 1500);
  };

  // Get service icons dynamically
  const getServiceIcon = (name) => {
    switch (name) {
      case 'Compass':
        return <Compass className="text-[#7F5539]" size={28} />;
      case 'Code':
        return <Code className="text-[#7F5539]" size={28} />;
      case 'Server':
        return <Server className="text-[#7F5539]" size={28} />;
      case 'Cloud':
        return <Cloud className="text-[#7F5539]" size={28} />;
      default:
        return <Sparkles className="text-[#7F5539]" size={28} />;
    }
  };

  // Dynamic filter lists
  const filterCategories = ['All', 'Full Stack', 'Frontend', 'UI/UX Design', 'Deployment'];

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    const matchesQuery =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  return (
    <>
      {/* Loading Overlay */}
      {loading && <Loader onComplete={() => setLoading(false)} />}

      {/* Main Container */}
      {!loading && (
        <div className="min-h-screen bg-[#FAF9F7] text-[#2B2B2B]">
          {/* Slim, elegant scroll progress bar */}
          <div
            id="scroll-progress-bar"
            className="fixed top-0 left-0 h-[3px] bg-[#C9A227] z-[100] transition-all duration-75 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />

          {/* Subtle Organic Wood Texture grain overlay */}
          <div className="wood-grain-overlay" />

          {/* Interactive cursor pointer */}
          <Cursor />

          {/* Luxury Sticky Navigation */}
          <Navbar
            currentSection={currentSection}
            onNavigate={handleNavigate}
          />

          {/* ==================== 1. HERO SECTION ==================== */}
          <header
            id="home"
            className="relative min-h-screen flex flex-col justify-center items-center px-6 md:px-12 pt-32 pb-16 overflow-hidden"
          >
            {/* Soft Elegant Background Circle Gradient representing solar/natural light feeling */}
            <div className="absolute top-[20%] left-[10%] w-[450px] h-[450px] bg-[#DCCBB2]/25 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />
            <div className="absolute bottom-[15%] right-[5%] w-[400px] h-[400px] bg-[#B08968]/15 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />

            {/* Inner visual layout */}
            <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 my-auto">
              {/* Brand Lettering / Narrative Left */}
              <div className="lg:col-span-8 flex flex-col justify-center space-y-8 animate-fade-in-up">
                <div className="space-y-4">
                  {/* Small label */}
                  <div className="flex items-center space-x-2 text-[#7F5539]">
                    <span className="h-[1px] w-8 bg-[#7F5539]" />
                    <span className="font-mono text-xs uppercase tracking-[0.25em] font-semibold">
                     Full Stack Developer • DevOps Engineer 
                    </span>
                  </div>

                  {/* Core Typography */}
                  <h1 className="font-serif-cormorant text-4xl sm:text-6xl xl:text-6xl font-light tracking-tight text-[#2B2B2B] leading-[1.05]">
                    Full Stack Development <br />
                    <span className="font-serif-playfair italic text-[#7F5539] font-medium">Meets Cloud Engineering</span>
                  </h1>
                </div>

                <p className="font-sans text-base sm:text-lg text-[#2B2B2B]/80 max-w-2xl leading-relaxed font-light">
                  I am <strong className="font-medium text-[#2B2B2B]">Prasad Vijay Khokale</strong>, a Full Stack Developer and DevOps Engineer passionate about creating responsive web applications, scalable backend systems, and automated cloud deployments using modern technologies like React.js, Node.js, Docker, Jenkins, PostgreSQL, and Linux.
                </p>

                {/* Call-to-action buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <button
                    onClick={() => handleNavigate('projects')}
                    className="group flex items-center space-x-2.5 px-6 py-3.5 bg-[#7F5539] text-[#FAF9F7] text-xs uppercase tracking-[0.2em] font-semibold rounded hover:bg-[#7F5539] transition-all duration-300 clickable cursor-pointer shadow-md"
                  >
                    <span>View Projects</span>
                    <ArrowRight size={13} className="group-hover:translate-x-1.5 transition-transform" />
                  </button>
                  <button
                    onClick={() => {
                      const link = document.createElement("a");
                      link.href = "/pvk.pdf";
                      link.download = "Prasad_Vijay_Khokale_Resume.pdf";
                      link.click();
                    }}
                    className="flex items-center space-x-2 px-6 py-3.5 border border-[#7F5539]/35 hover:border-[#7F5539] hover:bg-[#F5EFE6] text-[#7F5539] text-xs uppercase tracking-[0.2em] font-semibold rounded transition-all duration-300 clickable cursor-pointer"
                  >
                    <span>Download Resume</span>
                  </button>
                </div>
              </div>

              {/* Aesthetic architectural visual right */}
              <div className="lg:col-span-4 flex items-center justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="relative w-full max-w-md aspect-[3/4] rounded-lg overflow-hidden group shadow-2xl border-[10px] border-white/80 bg-white">
                  <div className="absolute inset-0 bg-[#7F5539]/5 mix-blend-overlay z-10" />
                  {/* Elegant architectural mock photo representing premium interior design */}
                  <img
                    src="1775149165364.png"
                    alt="developer"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  {/* Floating Skill Badge Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 bg-[#FAF9F7]/95 backdrop-blur-md p-4 rounded border border-[#EFECE6]/80 flex justify-between items-center z-20">
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-widest text-[#B08968] font-bold">CURRENT STATUS</p>
                      <p className="font-serif-playfair text-xs font-semibold text-[#2B2B2B]">Open for Full-Time Opportunities</p>
                      <p className="font-serif-playfair text-xs font-semibold text-[#2B2B2B]">Open for Freelance Projects</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span className="w-2.5 h-2.5 bg-[#7F5539] rounded-full animate-ping" />
                      <span className="w-2.5 h-2.5 bg-[#7F5539] rounded-full absolute" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section: Scrolling indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 text-xs uppercase tracking-[0.25em] text-[#B08968]/70 font-mono">
              
            </div>
          </header>

          {/* ==================== 2. ABOUT & STATS SECTION ==================== */}
          <section id="about" className="py-24 border-t border-[#7F5539]/10 relative bg-white/45">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                {/* Visual Bio Left */}
                <div className="lg:col-span-5 space-y-8">
                  <div className="space-y-3">
                    <span className="font-mono text-[10px] tracking-[0.25em] text-[#B08968] uppercase font-bold">
                      ABOUT ME
                    </span>
                    <h2 className="font-serif-cormorant text-4xl md:text-5xl font-light text-[#2B2B2B]">
                      From Ideas <br />
                      <span className="font-serif-playfair italic text-[#7F5539]">to Implementation</span>
                    </h2>
                  </div>

                  <p className="font-sans text-[#2B2B2B]/85 text-sm leading-relaxed font-light">
                    Software development, to me, is more than writing code — it's about creating reliable digital experiences that solve real-world problems. I enjoy designing responsive user interfaces, developing scalable backend systems, and automating deployment workflows that ensure applications perform seamlessly in production.
                  </p>

                  <p className="font-sans text-[#2B2B2B]/80 text-sm leading-relaxed font-light">
                    With expertise across Full Stack Development and DevOps, I focus on building secure, maintainable, and high-performance solutions while continuously exploring new technologies and best practices.
                  </p>

                  {/* Fun Facts Row */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#EFECE6]">
                    <div>
                      <p className="font-serif-playfair text-xs italic text-[#7F5539]">Core Expertise</p>
                      <p className="font-sans text-xs font-semibold text-[#2B2B2B] mt-1">Full Stack & DevOps</p>
                    </div>
                    <div>
                      <p className="font-serif-playfair text-xs italic text-[#7F5539]">Production Ready</p>
                      <p className="font-sans text-xs font-semibold text-[#2B2B2B] mt-1">CI/CD • Docker • Nginx</p>
                    </div>
                  </div>
                </div>

                {/* Animated Counters and Story Right */}
                <div className="lg:col-span-7 space-y-12">
                  {/* Grid of Elite Accomplishments */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 p-8 bg-[#FAF9F7]/95 rounded-lg border border-[#EFECE6]/80 shadow-inner">
                    <div className="text-center sm:text-left space-y-2">
                      <div className="font-serif-cormorant text-5xl font-light text-[#7F5539]">
                        {counters.experience}+
                      </div>
                      <p className="font-sans text-[10px] uppercase tracking-widest text-[#B08968] font-bold">
                        Years Professional Experience
                      </p>
                    </div>
                    <div className="text-center sm:text-left space-y-2 border-y sm:border-y-0 sm:border-x border-[#EFECE6] py-6 sm:py-0 sm:px-6">
                      <div className="font-serif-cormorant text-5xl font-light text-[#7F5539]">
                        {counters.delivery}+
                      </div>
                      <p className="font-sans text-[10px] uppercase tracking-widest text-[#B08968] font-bold">
                        Projects Completed
                      </p>
                    </div>
                    <div className="text-center sm:text-left space-y-2">
                      <div className="font-serif-cormorant text-5xl font-light text-[#7F5539]">
                        {counters.satisfaction}%
                      </div>
                      <p className="font-sans text-[10px] uppercase tracking-widest text-[#B08968] font-bold">
                        Commitment to Quality
                      </p>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="space-y-6">
                    <h3 className="font-serif-playfair text-lg font-semibold tracking-tight text-[#2B2B2B]">
                      Technical Expertise
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {SKILLS_CATEGORIES.map((cat, idx) => (
                        <div
                          key={idx}
                          className="p-5 rounded-lg border border-[#EFECE6]/80 bg-[#FAF9F7]/40 space-y-3"
                        >
                          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#B08968] font-bold">
                            {cat.name}
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {cat.skills.map((skill) => (
                              <span
                                key={skill}
                                className="px-2 py-1 text-[10px] font-mono tracking-wider text-[#7F5539] bg-white rounded border border-[#EFECE6]/65"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ==================== 3. SERVICES SECTION ==================== */}
          <section id="services" className="py-24 border-t border-[#7F5539]/10 relative">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              {/* Header */}
              <div className="max-w-xl space-y-3 mb-16">
                <span className="font-mono text-[10px] tracking-[0.25em] text-[#B08968] uppercase font-bold">
                  WHAT I BUILD
                </span>
                <h2 className="font-serif-cormorant text-4xl md:text-5xl font-light text-[#2B2B2B]">
                  Services & 
                  <span className="font-serif-playfair italic text-[#7F5539] font-medium"> Expertise</span>
                </h2>
                <div className="h-[1px] w-24 bg-[#7F5539]/30 mt-4" />
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                {SERVICES.map((service, idx) => (
                  <div
                    key={service.id}
                    className="group relative p-8 bg-white/80 rounded-lg border border-[#EFECE6] shadow-sm transition-all duration-500 hover:translate-y-[-5px] hover:shadow-md flex flex-col justify-between"
                  >
                    <div className="space-y-6">
                      {/* Icon & Title */}
                      <div className="flex justify-between items-start">
                        <div className="p-3 bg-[#FAF9F7] rounded border border-[#EFECE6]/80 group-hover:bg-[#F5EFE6] transition-colors">
                          {getServiceIcon(service.iconName)}
                        </div>
                        <span className="font-mono text-[9px] tracking-widest text-[#B08968] font-bold">
                          0{idx + 1} / IV
                        </span>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-serif-cormorant text-xl font-bold text-[#2B2B2B] tracking-tight">
                          {service.title}
                        </h3>
                        <p className="text-[#2B2B2B]/75 text-xs leading-relaxed font-sans font-light">
                          {service.description}
                        </p>
                      </div>

                      {/* Capabilities checklist */}
                      <ul className="space-y-2 border-t border-[#FAF9F7] pt-4">
                        {service.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start text-[11px] text-[#2B2B2B]/80 space-x-2">
                            <Check size={11} className="text-[#C9A227] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pricing Info & CTA Link */}
                    <div className="pt-6 mt-6 border-t border-[#EFECE6]/75 flex justify-between items-center">
                      <span className="font-mono text-[10px] tracking-wider text-[#B08968] font-bold">
                        {service.pricing || 'Inquire Price'}
                      </span>
                      <button
                        onClick={() => handleNavigate('contact')}
                        className="text-[10px] uppercase tracking-wider font-mono font-bold text-[#7F5539] hover:text-[#5C4033] inline-flex items-center space-x-1"
                      >
                        <span>Explore</span>
                        <ArrowRight size={10} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ==================== 4. PROJECTS SECTION ==================== */}
          <section id="projects" className="py-24 border-t border-[#7F5539]/10 relative bg-[#FAF9F7]/50">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              {/* Header & Advanced Filters */}
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-8 mb-16">
                <div className="space-y-3">
                  <span className="font-mono text-[10px] tracking-[0.25em] text-[#B08968] uppercase font-bold">
                    SELECT SHOWCASES
                  </span>
                  <h2 className="font-serif-cormorant text-4xl md:text-5xl font-light text-[#2B2B2B]">
                    The Portfolio <br />
                    <span className="font-serif-playfair italic text-[#7F5539] font-medium">Wall</span>
                  </h2>
                </div>

                {/* Search & Dynamic Filter Actions */}
                <div className="w-full lg:max-w-2xl space-y-4">
                  {/* Search Bar */}
                  <div className="relative">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#B08968]" size={16} />
                    <input
                      type="text"
                      placeholder="Search projects by technology, brand, or feature..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded border border-[#EFECE6] bg-white focus:outline-none focus:border-[#7F5539] text-xs font-sans placeholder-[#B08968]/70"
                    />
                  </div>

                  {/* Category Pills */}
                  <div className="flex flex-wrap gap-2">
                    {filterCategories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-3 py-1.5 rounded text-[10px] uppercase tracking-wider font-mono transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#7F5539] focus:ring-offset-2 ${
                          activeCategory === cat
                            ? 'bg-[#7F5539] text-white font-bold'
                            : 'bg-white text-[#2B2B2B] hover:bg-[#F5EFE6] border border-[#EFECE6]'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Dynamic Projects Grid */}
              {filteredProjects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProjects.map((project, index) => (
                    <div
                      key={project.id}
                      tabIndex={0}
                      role="button"
                      aria-label={`Project: ${project.title}. Click or press Enter to view case study.`}
                      onClick={() => setSelectedProject(project)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setSelectedProject(project);
                        }
                      }}
                      className="group relative bg-[#FAF9F7]/40 hover:bg-white rounded-xl border border-[#EFECE6]/80 p-8 flex flex-col justify-between hover:shadow-lg hover:border-[#7F5539]/30 transition-all duration-500 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#7F5539] focus:ring-offset-2"
                    >
                      {/* Top Meta Header */}
                      <div className="flex justify-between items-center w-full">
                        <span className="font-serif-playfair text-3xl font-light italic text-[#C9A227] tracking-wider select-none">
                          0{index + 1}
                        </span>
                        <span className="px-2.5 py-0.5 bg-white text-[9px] font-mono tracking-widest text-[#7F5539] border border-[#EFECE6] rounded uppercase font-semibold">
                          {project.category}
                        </span>
                      </div>

                      {/* Content Area */}
                      <div className="space-y-3.5 my-6 flex-1 flex flex-col justify-center">
                        <span className="font-mono text-[8px] uppercase tracking-[0.35em] text-[#B08968] font-bold">
                          PRODUCTION SYSTEM
                        </span>
                        <h3 className="font-serif-cormorant text-2xl md:text-3xl font-light text-[#2B2B2B] group-hover:text-[#7F5539] transition-colors leading-tight">
                          {project.title}
                        </h3>
                        <div className="w-8 h-[1px] bg-[#C9A227] opacity-60" />
                        <p className="text-[#2B2B2B]/75 text-[13px] leading-relaxed font-sans font-light line-clamp-3">
                          {project.subtitle}
                        </p>
                      </div>

                      {/* Technical Stack Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 text-[9px] font-mono text-[#7F5539] bg-white rounded border border-[#EFECE6]/80"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-0.5 text-[9px] font-mono text-[#B08968]/70 bg-white/50 rounded border border-dashed border-[#EFECE6]/80">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Case Study Action Trigger */}
                      <div
                        className="w-full py-3 bg-[#FAF9F7] group-hover:bg-[#7F5539] group-hover:text-white text-[#7F5539] text-[10px] tracking-widest font-mono uppercase font-bold rounded border border-[#EFECE6] group-hover:border-[#7F5539]/15 transition-all duration-300 flex justify-center items-center space-x-2"
                      >
                        <span>Review Case Study</span>
                        <ArrowRight size={11} className="transform group-hover:translate-x-1.5 transition-transform" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-12 text-center bg-white rounded-lg border border-[#EFECE6] space-y-4">
                  <BadgeAlert className="mx-auto text-[#B08968]" size={36} />
                  <div className="space-y-1">
                    <p className="font-serif-playfair text-lg font-bold text-[#2B2B2B]">
                      No cases match current filter criteria
                    </p>
                    <p className="text-[#2B2B2B]/60 text-xs font-sans">
                      Try widening your query or resetting your technology category filter to 'All'.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setActiveCategory('All');
                    }}
                    className="px-4 py-2 bg-[#7F5539] text-white text-[10px] uppercase tracking-widest rounded"
                  >
                    Reset Dashboard
                  </button>
                </div>
              )}
            </div>
          </section>

          {/* ==================== 5. EXPERIENCE TIMELINE ==================== */}
          <section id="experience" className="py-24 border-t border-[#7F5539]/10 relative bg-white/35">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              {/* Header */}
              <div className="max-w-xl space-y-3 mb-16">
                <span className="font-mono text-[10px] tracking-[0.25em] text-[#B08968] uppercase font-bold">
                  JOURNEY TIMELINE
                </span>
                <h2 className="font-serif-cormorant text-4xl md:text-5xl font-light text-[#2B2B2B]">
                  Professional 
                  <span className="font-serif-playfair italic text-[#7F5539] font-medium"> History</span>
                </h2>
              </div>

              {/* Vertical Luxury Timeline */}
              <div className="relative border-l border-[#7F5539]/20 pl-6 md:pl-12 max-w-4xl mx-auto space-y-12">
                {/* Decorative timeline node */}
                <div className="absolute top-0 left-[-4.5px] w-2.5 h-2.5 rounded-full bg-[#7F5539] border border-white" />

                {/* Iterate experiences */}
                {EXPERIENCE_TIMELINE.map((exp, index) => (
                  <div
                    key={exp.id}
                    className="relative bg-[#FAF9F7]/95 p-6 md:p-8 rounded-lg border border-[#EFECE6]/80 shadow-sm space-y-4 hover:shadow-md transition-shadow duration-300"
                  >
                    {/* Node connector on line */}
                    <div className="absolute left-[-31px] md:left-[-55px] top-9 flex items-center justify-center w-4 h-4 rounded-full bg-[#FAF9F7] border-2 border-[#7F5539]" />

                    {/* Metadata Header */}
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 border-b border-[#EFECE6]/70 pb-3">
                      <div>
                        <h3 className="font-serif-cormorant text-xl font-bold text-[#2B2B2B] tracking-tight">
                          {exp.role}
                        </h3>
                        <p className="font-serif-playfair text-xs italic text-[#7F5539]">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2 font-mono text-[10px] tracking-wider uppercase">
                        <span className="px-2 py-1 bg-[#F5EFE6] text-[#7F5539] rounded font-bold">
                          {exp.type}
                        </span>
                        <span className="text-[#B08968] font-bold">
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    {/* Descriptions */}
                    <ul className="space-y-2 text-xs text-[#2B2B2B]/85 leading-relaxed pl-4 list-disc font-sans font-light">
                      {exp.description.map((desc, idx) => (
                        <li key={idx}>{desc}</li>
                      ))}
                    </ul>

                    {/* Elite Achievements row */}
                    {exp.achievements && exp.achievements.length > 0 && (
                      <div className="space-y-2 pt-2 border-t border-[#EFECE6]/50">
                        <p className="font-mono text-[9px] uppercase tracking-widest text-[#B08968] font-bold flex items-center space-x-1">
                          <Sparkles size={10} className="text-[#C9A227]" />
                          <span>Key Contributions</span>
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          {exp.achievements.map((ach, idx) => (
                            <div key={idx} className="p-2.5 rounded bg-white border border-[#EFECE6]/70 text-[10px] text-[#2B2B2B]/80 font-sans">
                              {ach}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ==================== 6. CERTIFICATIONS SECTION ==================== */}
          <section id="certifications" className="py-24 border-t border-[#7F5539]/10 relative bg-[#FAF9F7]/30">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              {/* Header */}
              <div className="max-w-xl space-y-3 mb-16">
                <span className="font-mono text-[10px] tracking-[0.25em] text-[#B08968] uppercase font-bold">
                  CERTIFICATIONS & CREDENTIALS
                </span>
                <h2 className="font-serif-cormorant text-4xl md:text-5xl font-light text-[#2B2B2B]">
                  Professional 
                  <span className="font-serif-playfair italic text-[#7F5539] font-medium"> Certificates</span>
                </h2>
              </div>

              {/* Grid of Framed Mockups */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {CERTIFICATIONS.map((cert) => (
                  <div
                    key={cert.id}
                    tabIndex={0}
                    role="button"
                    aria-label={`Certificate: ${cert.title} issued by ${cert.issuer}. Click or press Enter to inspect certificate.`}
                    onClick={() => setSelectedCert(cert)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedCert(cert);
                      }
                    }}
                    className="group cursor-pointer p-5 bg-white rounded border border-[#EFECE6] shadow-sm transition-all duration-500 hover:shadow-lg hover:translate-y-[-5px] flex flex-col space-y-4 focus:outline-none focus:ring-2 focus:ring-[#7F5539] focus:ring-offset-2"
                  >
                    {/* Picture Frame Representation */}
                    <div className="border-8 border-[#5C4033] bg-[#FFFDF9] shadow-inner p-4 aspect-[4/3] flex flex-col justify-between items-center text-center relative border-double group-hover:border-[#7F5539] transition-colors duration-500">
                      <div className="absolute inset-1 border border-[#B08968]/20 pointer-events-none" />

                      <Award size={18} className="text-[#C9A227]/80 group-hover:rotate-12 transition-transform duration-500" />

                      <div className="my-auto space-y-1">
                        <h3 className="font-serif-cormorant text-sm font-bold text-[#2B2B2B] tracking-tight leading-snug">
                          {cert.title}
                        </h3>
                        <p className="font-serif-playfair text-[10px] italic text-[#7F5539]">
                          {cert.issuer}
                        </p>
                      </div>

                      <span className="font-mono text-[8px] tracking-wider text-[#B08968]">
                        DATE: {cert.date}
                      </span>
                    </div>

                    {/* Metadata summary */}
                    <div className="flex justify-between items-center text-xs pt-2">
                      <div>
                        <p className="font-sans text-[9px] uppercase tracking-wider text-[#B08968] font-bold">ISSUER</p>
                        <p className="font-serif-playfair font-semibold text-[#2B2B2B]">{cert.issuer}</p>
                      </div>
                      <span className="text-[10px] uppercase font-mono font-bold text-[#7F5539] group-hover:underline inline-flex items-center space-x-1">
                        <span>View Certificate</span>
                        <ArrowRight size={10} />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ==================== 7. CONTACT & FAQs SECTION ==================== */}
          <section id="contact" className="py-24 border-t border-[#7F5539]/10 relative bg-[#FAF9F7]/45">
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
              {/* Left Column: Form Inquiry */}
              <div className="lg:col-span-7">
                <div className="p-8 md:p-10 bg-white rounded-xl border border-[#EFECE6] flex flex-col justify-between h-full space-y-8">
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <span className="font-mono text-[10px] tracking-[0.25em] text-[#B08968] uppercase font-bold">
                        GET IN TOUCH
                      </span>
                      <h2 className="font-serif-cormorant text-4xl md:text-5xl font-light text-[#2B2B2B]">
                        Let's
                        <span className="font-serif-playfair italic text-[#7F5539] font-medium"> Build</span>
                      </h2>
                    </div>

                    {/* Form wrapper */}
                    <form onSubmit={handleFormSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-1">
                          <label className="font-mono text-[9px] uppercase tracking-widest text-[#B08968] font-bold block">
                            Your Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formState.name}
                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                            placeholder="Enter Your Full Name Here"
                            className="w-full px-4 py-2.5 rounded border border-[#EFECE6] bg-white focus:outline-none focus:border-[#7F5539] text-xs font-sans placeholder-[#B08968]/50"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="font-mono text-[9px] uppercase tracking-widest text-[#B08968] font-bold block">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            value={formState.email}
                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                            placeholder="Enter Your Mail ID Here"
                            className="w-full px-4 py-2.5 rounded border border-[#EFECE6] bg-white focus:outline-none focus:border-[#7F5539] text-xs font-sans placeholder-[#B08968]/50"
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="font-mono text-[9px] uppercase tracking-widest text-[#B08968] font-bold block">
                          Subject
                        </label>
                        <select
                          value={formState.subject}
                          onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                          className="w-full px-4 py-2.5 rounded border border-[#EFECE6] bg-white focus:outline-none focus:border-[#7F5539] text-xs font-sans text-[#2B2B2B]"
                        >
                          <option>Freelance Project Inquiries</option>
                          <option>Website Design & UI Consultations</option>
                          <option>Production Deployment & Server Orchestration</option>
                          <option>Job Opportunity</option>
                          <option>Collaboration</option>
                        </select>
                      </div>

                      <div className="space-y-1">
                        <label className="font-mono text-[9px] uppercase tracking-widest text-[#B08968] font-bold block">
                          Message *
                        </label>
                        <textarea
                          required
                          rows={4}
                          value={formState.message}
                          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                          placeholder="Tell me about your project, job opportunity, or collaboration. Include your goals, timeline, and any technical requirements."
                          className="w-full px-4 py-2.5 rounded border border-[#EFECE6] bg-white focus:outline-none focus:border-[#7F5539] text-xs font-sans placeholder-[#B08968]/50 resize-y"
                        />
                      </div>

                      {/* Form Status Banner */}
                      {formStatus === 'success' && (
                        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded text-emerald-800 text-xs flex items-start space-x-2 animate-fade-in">
                          <Check size={16} className="shrink-0 mt-0.5" />
                          <div>
                            <p className="font-bold">Message Sent Successfully</p>
                            <p className="mt-0.5">Thank you for reaching out! I've received your message and will get back to you within 24 hours.</p>
                          </div>
                        </div>
                      )}

                      {formStatus === 'error' && (
                        <div className="p-4 bg-rose-50 border border-rose-200 rounded text-rose-800 text-xs flex items-start space-x-2 animate-fade-in">
                          <BadgeAlert size={16} className="shrink-0 mt-0.5" />
                          <div>
                            <p className="font-bold">Required Fields Missing</p>
                            <p className="mt-0.5">Please fill in all required fields marked with an asterisk (*) and try again.</p>
                          </div>
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={formStatus === 'submitting'}
                        className="w-full py-3.5 bg-[#7F5539] hover:bg-[#5C4033] text-white text-xs tracking-widest font-mono uppercase font-bold rounded transition-all duration-300 disabled:opacity-50 flex justify-center items-center space-x-2 clickable cursor-pointer"
                      >
                        {formStatus === 'submitting' ? (
                          <span>Sending Message...</span>
                        ) : (
                          <span>SEND MESSAGE</span>
                        )}
                      </button>
                    </form>
                  </div>
                </div>
              </div>

              {/* Right Column: Office Address, Phone, Maps Placeholder */}
              <div className="lg:col-span-5">
                {/* Office Info Card */}
                <div className="p-8 md:p-10 bg-white rounded-xl border border-[#EFECE6] flex flex-col justify-between h-full space-y-8">
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <span className="font-mono text-[10px] tracking-[0.25em] text-[#B08968] uppercase font-bold">
                        CONTACT DETAILS
                      </span>
                      <h2 className="font-serif-cormorant text-4xl md:text-5xl font-light text-[#2B2B2B]">
                        Let's 
                        <span className="font-serif-playfair italic text-[#7F5539] font-medium"> Connect</span>
                      </h2>
                    </div>

                    <div className="space-y-5 text-xs font-sans">
                      <div className="flex items-start space-x-3 text-[#2B2B2B]">
                        <div className="p-2.5 bg-[#F5EFE6] rounded text-[#7F5539] shrink-0 mt-0.5">
                          <MapPin size={16} />
                        </div>
                        <div>
                          <p className="font-semibold text-[10px] font-mono text-[#B08968] uppercase">Location</p>
                          <p className="mt-1 text-sm text-[#2B2B2B]/90 font-light leading-relaxed">{PERSONAL_INFO.location}</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3 text-[#2B2B2B]">
                        <div className="p-2.5 bg-[#F5EFE6] rounded text-[#7F5539] shrink-0 mt-0.5">
                          <Mail size={16} />
                        </div>
                        <div>
                          <p className="font-semibold text-[10px] font-mono text-[#B08968] uppercase">Email</p>
                          <a href={`mailto:${PERSONAL_INFO.email}`} className="mt-1 text-sm text-[#7F5539] hover:underline block font-light">
                            {PERSONAL_INFO.email}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3 text-[#2B2B2B]">
                        <div className="p-2.5 bg-[#F5EFE6] rounded text-[#7F5539] shrink-0 mt-0.5">
                          <Phone size={16} />
                        </div>
                        <div>
                          <p className="font-semibold text-[10px] font-mono text-[#B08968] uppercase">Phone</p>
                          <p className="mt-1 text-sm text-[#2B2B2B]/90 font-light">{PERSONAL_INFO.phone}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Elegant Vector Map Placeholder */}
                  <div className="w-full h-40 rounded bg-[#F5EFE6] relative overflow-hidden border border-[#EFECE6]/80 flex flex-col justify-center items-center p-4 text-center mt-auto">
                    {/* Abstract circles resembling coordinates */}
                    <div className="absolute w-32 h-32 rounded-full border border-[#B08968]/20 animate-pulse" />
                    <div className="absolute w-16 h-16 rounded-full border border-[#7F5539]/10" />
                    <MapPin size={28} className="text-[#7F5539] relative z-10 animate-bounce" />
                    <p className="font-mono text-[9px] tracking-widest text-[#B08968] mt-3 uppercase font-bold relative z-10">
                    </p>
                    <p className="font-sans text-[10px] text-[#2B2B2B]/60 mt-1 relative z-10 font-light">
                      Pune, Maharashtra, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ==================== FOOTER ==================== */}
          <Footer onNavigate={handleNavigate} />

          {/* ==================== PORTFOLIO CASE STUDY MODAL ==================== */}
          <PortfolioModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />

          {/* ==================== CERTIFICATION DETAILED FRAME MODAL ==================== */}
          <CertModal
            certificate={selectedCert}
            onClose={() => setSelectedCert(null)}
          />
        </div>
      )}
    </>
  );
}
