import React from 'react';
 import heroVideo from '../assets/hero-bg.mp4';

const Hero = () => {
  const phoneNumber = import.meta.env.VITE_WHATSAPP_CONTACT_NUMBER;
  return (
    <section
      id="hero"
      className="relative min-h-[80vh] flex items-center overflow-hidden py-16 px-6 bg-navy"
    >
      {/* VIDEO LAYER — uncomment once hero-bg.mp4 is in assets */}

      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline
          className="w-full h-full object-cover opacity-25 brightness-75 contrast-125">
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent z-10" />
        
      </div>


      {/* STATIC GRADIENT BG (fallback while video loads) */}
      

      {/* CONTENT */}
      <div className="container mx-auto relative z-20 max-w-6xl">
        <div className="max-w-2xl space-y-6">

          {/* Badges */}
          <div className="flex flex-wrap gap-2 hero-badge">
            {['Salem\'s Trusted Loan Experts', 'Since 2010'].map((b) => (
              <span
                key={b}
                className="bg-white/5 border border-gold/20 text-gold text-[9px] px-3 py-1.5 rounded-full font-bold uppercase tracking-wider"
              >
                {b}
              </span>
            ))}
          </div>

          {/* Heading */}
          <h1 className="text-white font-header text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1] hero-h1">
            Smart Loan <br />
            Solutions.{' '}
            <span className="text-gold italic">Faster Approvals.</span>
          </h1>

          {/* Subtext */}
          <p className="text-white/50 text-base italic max-w-md leading-relaxed hero-sub">
            We don't just help you get a loan — we help you choose the right loan with the best deal.
          </p>

          <p className="text-white/70 text-sm max-w-lg hero-body">
            At Praveen Loans Consultancy, we simplify your entire loan journey with expert guidance,
            strong bank partnerships, and quick approvals.
          </p>

          {/* Checkmarks */}
          <div className="flex flex-wrap gap-4 text-gold text-[12px] font-bold hero-checks">
            {['✓ Quick Processing', '✓ Low Interest Rates', '✓ High Approval Success'].map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 pt-1 hero-btns">
            <a
              href={`https://wa.me/${phoneNumber}?text=Hi%2C+I+want+to+check+loan+eligibility`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold-light text-navy font-bold px-7 py-3 rounded-md text-sm shadow-[0_0_24px_rgba(243,208,96,0.35)] hover:scale-105 hover:brightness-105 transition-all duration-300 active:scale-95"
            >
              Check Eligibility →
            </a>
            <a
              href={`https://wa.me/${phoneNumber}?text=Hi%2C+I+want+to+apply+for+a+loan`}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 text-white font-bold px-7 py-3 rounded-md text-sm hover:bg-white/8 transition-all duration-300 backdrop-blur-sm"
            >
              Apply Now
            </a>
          </div>

          {/* Stats */}
          <div className="pt-10 mt-2 border-t border-white/8 hero-stats">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { label: 'Loans Disbursed', val: '500+' },
                { label: 'Approval Rate', val: '98%' },
                { label: 'Bank Partners', val: '15+' },
                { label: 'Loans Funded', val: '₹50Cr+' },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <p className="text-gold font-black text-2xl tracking-tight drop-shadow-md">{stat.val}</p>
                  <p className="text-white/30 text-[9px] uppercase tracking-widest font-bold mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp button */}
      <a
        href={`https://wa.me/${phoneNumber}?text=Hi%20Praveen%20Loans%2C%20I%20have%20a%20query`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-xl whatsapp-float"
        style={{ backgroundColor: '#25D366' }}
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.524 5.847L.057 23.882l6.174-1.617A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.012-1.377l-.36-.214-3.726.977.994-3.63-.234-.372A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
        </svg>
      </a>
    </section>
  );
};

export default Hero;