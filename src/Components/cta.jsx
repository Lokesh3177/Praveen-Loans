import React from 'react';
import { useReveal } from '../useRevel';

const FinalCTA = () => {
  const sectionRef = useReveal();
  const phoneNumber = import.meta.env.VITE_WHATSAPP_CONTACT_NUMBER;

  return (
    <section
      id="final-cta"
      className="py-16 px-6"
      style={{ background: 'linear-gradient(135deg, #1A2B5F 0%, #0d1835 100%)' }}
    >
      <div ref={sectionRef} className="container mx-auto max-w-3xl text-center">

        <div className="reveal inline-block border border-gold/30 px-4 py-1 rounded-full mb-5 backdrop-blur-sm">
          <span className="text-gold text-[10px] font-bold uppercase tracking-wider">Get Started Today</span>
        </div>

        <h2 className="reveal text-white font-header text-3xl md:text-4xl font-black mb-4 leading-tight">
          Your Loan, Your Terms —{' '}
          <span className="text-gold italic">We Make It Happen</span>
        </h2>

        <p className="reveal text-white/60 text-sm mb-8 max-w-md mx-auto delay-100">
          Join 500+ satisfied customers who trusted Praveen Loans Consultancy in Salem.
        </p>

        <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-3 delay-200">
          <a
            href={`https://wa.me/${phoneNumber}?text=Hi%2C+I+want+to+apply+for+a+loan`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-105 active:scale-95 hover:brightness-110 shadow-lg"
            style={{ backgroundColor: '#F3D060', color: '#0F1E45' }}
          >
            Apply Now →
          </a>
          <a
            href={`https://wa.me/${phoneNumber}?text=Hi%2C+I+want+a+free+loan+consultation`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold border border-white/20 text-white text-sm hover:bg-white/10 transition-all duration-300 hover:scale-105"
          >
            Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;