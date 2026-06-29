import { useEffect, useState } from 'react';

export default function Loader({ onComplete }) {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Elegant, premium delay of 2.2 seconds before transitioning out
    const timeout = setTimeout(() => {
      setIsFading(true);
      const completeTimeout = setTimeout(onComplete, 1000); // Wait for transition out
      return () => clearTimeout(completeTimeout);
    }, 2200);

    return () => clearTimeout(timeout);
  }, [onComplete]);

  return (
    <div
      id="luxury-loader"
      className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#FAF9F7] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isFading ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Custom Styles for Advanced Ring Animations */}
      <style>{`
        @keyframes rotate-clockwise {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes rotate-counter {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }
        @keyframes shimmer-gold {
          0%, 100% { opacity: 0.45; }
          50% { opacity: 0.85; }
        }
        @keyframes letter-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        @keyframes reveal-logo {
          0% {
            opacity: 0;
            transform: scale(0.93);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes reveal-name {
          0% {
            opacity: 0;
            transform: translateY(10px) scale(0.98);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .anim-ring-outer {
          animation: rotate-clockwise 15s linear infinite;
        }
        .anim-ring-inner {
          animation: rotate-counter 10s linear infinite;
        }
        .anim-glow {
          animation: shimmer-gold 3s ease-in-out infinite;
        }
        .letter-p { animation: letter-float 3s ease-in-out infinite; }
        .letter-v { animation: letter-float 3s ease-in-out infinite 0.3s; }
        .letter-k { animation: letter-float 3s ease-in-out infinite 0.6s; }
        .anim-reveal-logo {
          opacity: 0;
          animation: reveal-logo 1.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 0.1s;
        }
        .anim-reveal-name {
          opacity: 0;
          animation: reveal-name 1.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 0.4s;
        }
      `}</style>

      {/* Middle Section: Beautiful Concentric Rings, Monogram & Name */}
      <div className="flex flex-col items-center justify-center space-y-10">
        <div className="relative w-44 h-44 flex items-center justify-center anim-reveal-logo">
          {/* Subtle Outer Glow Backdrop */}
          <div className="absolute inset-0 bg-[#F5EFE6] rounded-full blur-3xl opacity-60 anim-glow" />

          {/* Outer Segmented Dotted Ring */}
          <div className="absolute inset-0 rounded-full border border-dashed border-[#B08968]/30 anim-ring-outer" />

          {/* Inner Custom Ring with Elegant Indicator Dots */}
          <div className="absolute inset-3 rounded-full border border-double border-[#7F5539]/25 anim-ring-inner">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#7F5539]/50" />
          </div>

          {/* Monogram Core */}
          <div className="relative z-10 flex flex-col items-center justify-center">
            <div className="flex items-center space-x-2 font-serif-cormorant text-4xl font-light tracking-[0.1em] text-[#2B2B2B]">
              <span className="letter-p inline-block">P</span>
              <span className="text-[#C9A227] font-serif-playfair italic text-2xl font-normal">.</span>
              <span className="letter-v inline-block">V</span>
              <span className="text-[#C9A227] font-serif-playfair italic text-2xl font-normal">.</span>
              <span className="letter-k inline-block">K</span>
            </div>
            <div className="w-8 h-[1px] bg-[#C9A227] mt-2.5 opacity-60" />
          </div>
        </div>

        {/* Branding & Full Name */}
        <div className="text-center space-y-2 anim-reveal-name">
          <h1 className="font-serif-cormorant text-2xl md:text-3xl font-light tracking-[0.18em] text-[#2B2B2B] uppercase">
            Prasad Vijay Khokale
          </h1>
          <div className="w-12 h-[1px] bg-[#B08968]/30 mx-auto mt-1" />
        </div>
      </div>
    </div>
  );
}
