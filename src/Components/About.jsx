import React from 'react';
import { Award, Users, Building2, TrendingUp } from 'lucide-react';
import { useReveal, useRevealAll } from '../useRevel';
 import logo from '../assets/logo.jpeg';

const About = () => {
  const sectionRef = useReveal();
  const statsRef = useRevealAll();

  const stats = [
    { label: 'Years Experience', val: '10+', icon: <Award className="w-5 h-5 text-gold" /> },
    { label: 'Happy Clients', val: '1500+', icon: <Users className="w-5 h-5 text-gold" /> },
    { label: 'Bank Partners', val: '50+', icon: <Building2 className="w-5 h-5 text-gold" /> },
    { label: 'Approval Rate', val: '98%', icon: <TrendingUp className="w-5 h-5 text-gold" /> },
  ];

  return (
    <section id="about" className="bg-[#FAF9F0] py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div ref={sectionRef} className="flex flex-col lg:flex-row items-center gap-12">

          {/* Left — Image / Logo block */}
          <div className="reveal-left lg:w-2/5 flex-shrink-0">
            <div className="relative">
              {/* Decorative gold ring */}
              <div className="absolute -inset-3 rounded-2xl border border-gold/20" />
              <div className="relative bg-navy rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center shadow-2xl">
                  <img src={logo} alt="Praveen Loans Logo" className="w-full h-full object-cover" />
                
              </div>
            </div>
          </div>

          {/* Right — Text */}
          <div className="reveal-right lg:w-3/5 space-y-5">
            <div className="inline-block border border-gold/30 bg-[#FAF3E0] text-gold text-[10px] px-4 py-1.5 rounded-full font-bold uppercase tracking-widest">
              Who We Are
            </div>
            <h2 className="text-navy text-3xl md:text-4xl font-black leading-tight">
              Trusted Loan Consultancy in Salem, Tamil Nadu
            </h2>
            <p className="text-[#333A4A]/70 text-sm leading-relaxed">
              Praveen Loans Consultancy is a leading loan consultancy in Salem helping individuals and
              businesses secure the best financial solutions. With 10+ years of experience and strong
              partnerships with 15+ banks and NBFCs, we make loan approvals faster, simpler, and stress-free.
            </p>
            <ul className="space-y-2">
              {['Faster approvals — often same day', 'Better interest rates through our network', 'Transparent guidance with zero hidden fees'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-[#333A4A]/80">
                  <span className="w-5 h-5 rounded-full bg-navy flex items-center justify-center text-gold text-[10px] flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats row */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`reveal delay-${(i + 1) * 100} card-hover bg-white rounded-2xl p-6 text-center border border-navy/8 shadow-sm`}
            >
              <div className="w-10 h-10 bg-navy rounded-xl flex items-center justify-center mx-auto mb-3">
                {s.icon}
              </div>
              <p className="text-navy font-black text-2xl">{s.val}</p>
              <p className="text-[#333A4A]/50 text-[11px] uppercase tracking-wider font-bold mt-1">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;