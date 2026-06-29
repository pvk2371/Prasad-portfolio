import { useEffect } from 'react';
import { X, ExternalLink, ShieldAlert, Award } from 'lucide-react';

export default function CertModal({ certificate, onClose }) {
  useEffect(() => {
    if (!certificate) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [certificate, onClose]);

  if (!certificate) return null;

  return (
    <div
      id="certificate-viewer-modal"
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 transition-opacity duration-500 ease-out animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-[#FAF9F7] rounded-lg overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh] md:max-h-none transition-transform duration-500 ease-out transform scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Certificate Frame Container */}
        <div className="p-4 md:p-8 flex-1 flex flex-col items-center">
          {/* Mock Gallery Picture Frame */}
          <div className="relative border-[12px] md:border-[20px] border-[#5C4033] bg-[#FFFDF9] shadow-inner p-6 md:p-10 w-full max-w-lg aspect-[4/3] flex flex-col justify-between items-center text-center rounded border-double">
            {/* Fine line border */}
            <div className="absolute inset-2 border border-[#B08968]/30 pointer-events-none" />

            {/* Frame Content */}
            <div className="w-full flex justify-between items-center text-[10px] tracking-widest text-[#B08968]/80 font-mono">
              <span>EST. 2019</span>
              <Award size={16} className="text-[#C9A227]" />
              <span>P. V. KHOKALE</span>
            </div>

            <div className="my-auto space-y-3">
              <span className="font-sans text-[10px] tracking-[0.3em] text-[#7F5539] uppercase font-bold">
                CERTIFICATE OF ACCOMPLISHMENT
              </span>
              <h3 className="font-serif-cormorant text-2xl md:text-3xl text-[#2B2B2B] tracking-tight leading-none font-medium">
                {certificate.title}
              </h3>
              <div className="h-[1px] w-16 bg-[#DCCBB2] mx-auto my-2" />
              <p className="font-serif-playfair text-sm italic text-[#7F5539]">
                Awarded to Prasad Vijay Khokale by
              </p>
              <p className="font-sans text-xs uppercase tracking-widest font-semibold text-[#2B2B2B]">
                {certificate.issuer}
              </p>
            </div>

            <div className="w-full flex justify-between items-end text-[10px] font-mono text-[#B08968]/80">
              <div className="text-left">
                <p className="text-[8px] uppercase tracking-wider">DATE OF ISSUANCE</p>
                <p className="font-sans text-xs text-[#2B2B2B] mt-0.5">{certificate.date}</p>
              </div>
              <div className="text-right">
                <p className="text-[8px] uppercase tracking-wider">Verification Status</p>
                <p className="font-sans text-[10px] text-[#2B2B2B] mt-0.5">{certificate.credentialId || 'VERIFIED'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Info & Footer */}
        <div className="bg-[#FAF9F7] px-6 py-4 border-t border-[#EFECE6] flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-2 text-[11px] text-[#7F5539] font-mono">
            <ShieldAlert size={14} className="text-[#C9A227]" />
            <span>Verified Digital Credential</span>
          </div>
          <div className="flex space-x-2 w-full sm:w-auto">
            {certificate.url && (
              <a
                href={certificate.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-1 px-4 py-2 bg-[#7F5539] hover:bg-[#5C4033] text-white text-[11px] font-medium uppercase tracking-widest rounded focus:outline-none focus:ring-2 focus:ring-[#7F5539] focus:ring-offset-1 transition-all duration-300 w-full sm:w-auto"
              >
                <span>View Certificate</span>
                <ExternalLink size={12} />
              </a>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 border border-[#EFECE6] hover:bg-[#F5EFE6] text-[#2B2B2B] text-[11px] font-medium uppercase tracking-widest rounded focus:outline-none focus:ring-2 focus:ring-[#7F5539] focus:ring-offset-1 transition-all duration-300 w-full sm:w-auto"
            >
              Close 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
