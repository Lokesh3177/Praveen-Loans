import React from 'react';
import { Building2, Zap, ShieldCheck, Handshake } from 'lucide-react';
import { useRevealAll } from '../useRevel';

const features = [
  {
    title: 'Strong Bank & NBFC Network',
    description:
      'We partner with 15+ leading banks and NBFCs to find you the best interest rates and approval odds that individual applicants can\'t access.',
    icon: <Building2 className="w-5 h-5 text-white/90" />,
  },
  {
    title: 'Fast Processing',
    description:
      'Our streamlined documentation process and banker relationships mean your loan moves through faster — often approved the same day you apply.',
    icon: <Zap className="w-5 h-5 text-orange-400 fill-orange-400" />,
  },
  {
    title: 'High Approval Ratio',
    description:
      'With a 98% success rate, we pre-screen your profile and match you with the right lender — dramatically reducing rejection risk.',
    icon: <ShieldCheck className="text-green-400 w-5 h-5" />,
  },
  {
    title: 'Honest & Transparent Service',
    description:
      'No hidden fees. No surprises. We explain every term clearly and help you make the most informed financial decision for your situation.',
    icon: <Handshake className="text-yellow-500 w-5 h-5" />,
  },
];

const WhyChooseUs = () => {
  const gridRef = useRevealAll();

  return (
    <section id="why-choose-us" className="bg-[#FAF9F0] py-16 px-6">
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block border border-[#B8961E]/30 bg-[#FAF3E0] text-[#B8961E] text-[10px] px-5 py-2 rounded-full font-bold uppercase tracking-widest mb-4">
            Why Choose Us
          </div>
          <h2 className="text-navy text-3xl md:text-5xl font-black mb-5 leading-tight">
            One of the Best Loan Consultancies in Salem
          </h2>
          <p className="text-[#333A4A]/60 max-w-xl mx-auto text-sm italic leading-relaxed">
            We go beyond just processing loans — we become your financial partner for life.
          </p>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((item, i) => (
            <div
              key={i}
              className={`reveal delay-${(i % 2 + 1) * 100} card-hover bg-white p-8 rounded-[1.5rem] flex items-start gap-6 shadow-sm border border-transparent hover:border-navy/10`}
            >
              <div className="bg-navy w-13 h-13 w-[52px] h-[52px] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                {item.icon}
              </div>
              <div>
                <h3 className="text-navy text-xl font-bold mb-2 leading-tight">{item.title}</h3>
                <p className="text-[#333A4A]/70 text-[13px] leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;