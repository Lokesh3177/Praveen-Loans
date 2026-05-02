import React from 'react';
import { useReveal, useRevealAll } from '../useRevel';

const steps = [
  { id: 1, title: 'Submit Details', description: 'Share requirements via WhatsApp or call. No upfront paperwork.' },
  { id: 2, title: 'Get Offers', description: 'We compare 15+ banks to find your best matching loan offers.' },
  { id: 3, title: 'Choose Option', description: 'Pick the loan that fits your budget with our expert guidance.' },
  { id: 4, title: 'Loan Approved!', description: 'Paperwork handled by us. Funds disbursed to your account.' },
];

const HowItWorks = () => {
  const headerRef = useReveal();
  const stepsRef = useRevealAll();
const phoneNumber = import.meta.env.VITE_WHATSAPP_CONTACT_NUMBER;
  return (
    <section id="process" className="bg-navy py-16 px-6 text-white overflow-hidden">
      <div className="container mx-auto max-w-5xl">

        {/* Header */}
        <div ref={headerRef} className="reveal text-center mb-14">
          <div className="inline-block border border-gold/30 text-gold text-[9px] px-4 py-1.5 rounded-full font-bold uppercase tracking-widest mb-3">
            The Process
          </div>
          <h2 className="font-header text-3xl md:text-4xl font-black mb-3">How It Works</h2>
          <p className="text-white/50 text-sm max-w-md mx-auto">
            Getting your loan approved is a simple 4-step journey with us.
          </p>
        </div>

        {/* Steps */}
        <div ref={stepsRef} className="relative">
          {/* Connector line — desktop only */}
          <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px overflow-hidden">
            <div className="step-line reveal h-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => (
              <div
                key={step.id}
                className={`reveal delay-${(i + 1) * 100} text-center group`}
              >
                {/* Circle */}
                <div className="relative mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-gold-light rounded-full flex items-center justify-center text-navy text-xl font-black shadow-[0_0_24px_rgba(243,208,96,0.25)] group-hover:scale-110 transition-transform duration-300">
                    {step.id}
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-white/40 text-[12px] leading-relaxed px-2">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href={`https://wa.me/${phoneNumber}?text=Hi%2C+I+want+to+start+my+loan+process`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold-light text-navy font-bold px-8 py-3 rounded-xl text-sm hover:brightness-110 hover:scale-105 transition-all duration-300 active:scale-95 shadow-lg"
          >
            Start Your Loan Journey →
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;