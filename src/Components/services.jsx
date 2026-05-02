import React from 'react';
import { User, Home, Briefcase, Map, HardHat, RefreshCw, Landmark, Key, ShieldAlert, Check } from 'lucide-react';
import { useRevealAll } from '../useRevel';

const loanServices = [
  {
    title: 'Personal Loan',
    icon: <User className="w-5 h-5" />,
    color: 'text-blue-500',
    bg: 'bg-blue-50',
    features: ['No collateral required', 'Fast approval', 'Flexible EMI'],
  },
  {
    title: 'Home Loan',
    icon: <Home className="w-5 h-5" />,
    color: 'text-green-600',
    bg: 'bg-green-50',
    features: ['Low interest rates', 'High eligibility', 'Long tenure'],
  },
  {
    title: 'Business Loan',
    icon: <Briefcase className="w-5 h-5" />,
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    features: ['Working capital', 'Expansion funding', 'Quick disbursement'],
  },
  {
    title: 'Plot Loan',
    icon: <Map className="w-5 h-5" />,
    color: 'text-orange-500',
    bg: 'bg-orange-50',
    features: ['Easy approval', 'Flexible EMI', 'Minimal documents'],
  },
  {
    title: 'Construction Loan',
    icon: <HardHat className="w-5 h-5" />,
    color: 'text-yellow-600',
    bg: 'bg-yellow-50',
    features: ['Stage-wise funding', 'Lower EMI start', 'Expert support'],
  },
  {
    title: 'Balance Transfer',
    icon: <RefreshCw className="w-5 h-5" />,
    color: 'text-teal-600',
    bg: 'bg-teal-50',
    features: ['Reduce EMI', 'Better interest', 'Top-up options'],
  },
  {
    title: 'Loan Against Property',
    icon: <Landmark className="w-5 h-5" />,
    color: 'text-red-500',
    bg: 'bg-red-50',
    features: ['High loan amount', 'Low interest', 'Multi-purpose'],
  },
  {
    title: 'Property Purchase Loan',
    icon: <Key className="w-5 h-5" />,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    features: ['Full documentation help', 'Fast approval', 'End-to-end support'],
  },
  {
    title: 'CIBIL Issue Loan',
    icon: <ShieldAlert className="w-5 h-5" />,
    color: 'text-pink-600',
    bg: 'bg-pink-50',
    features: ['Low score solutions', 'Multiple lenders', 'Credit guidance'],
  },
];

const Services = () => {
  const gridRef = useRevealAll();

  return (
    <section id="services" className="bg-[#F5F7FA] py-16 px-6">
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block border border-gold/30 bg-[#FAF3E0] text-[#B8961E] text-[10px] px-5 py-2 rounded-full font-bold uppercase tracking-widest mb-4">
            Our Services
          </div>
          <h2 className="text-navy text-3xl md:text-4xl font-black mb-4">
            All Types of Loans — One Trusted Partner
          </h2>
          <p className="text-[#333A4A]/60 max-w-lg mx-auto text-sm">
            From personal loans to property loans, we cover every financial need with expert guidance.
          </p>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {loanServices.map((service, i) => (
            <div
              key={i}
              className={`reveal delay-${Math.min((i % 3 + 1) * 100, 300)} card-hover bg-white rounded-2xl p-6 border border-transparent hover:border-navy/10 shadow-sm group cursor-pointer`}
            >
              {/* Icon + Title */}
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-11 h-11 ${service.bg} rounded-xl flex items-center justify-center ${service.color} flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-navy font-bold text-base leading-tight">{service.title}</h3>
              </div>

              {/* Features */}
              <ul className="space-y-1.5">
                {service.features.map((f, fi) => (
                  <li key={fi} className="flex items-center gap-2 text-[#333A4A]/70 text-[12px]">
                    <Check className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={`https://wa.me/91XXXXXXXXXX?text=Hi%2C+I+want+to+apply+for+${encodeURIComponent(service.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-[#B8961E] text-[12px] font-bold hover:gap-2 transition-all duration-200"
              >
                Apply Now →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;