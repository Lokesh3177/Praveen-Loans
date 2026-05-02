import React from 'react';
import { Landmark, Zap, ShieldCheck, FileText } from 'lucide-react';

const Partners = () => {
  const items = [
    { label: '15+ Bank & NBFC Partners', icon: <Landmark className="text-gold w-6 h-6" /> },
    { label: 'Same Day Approval', icon: <Zap className="text-gold w-6 h-6" /> },
    { label: '100% Secure & Confidential', icon: <ShieldCheck className="text-gold w-6 h-6" /> },
    { label: '9 Types of Loans', icon: <FileText className="text-gold w-6 h-6" /> },
  ];

  // 4x repeat for seamless infinite loop
  const loopItems = [...items, ...items, ...items, ...items];

  return (
    <div className="bg-cream py-8 overflow-hidden border-y border-navy/8">
      <div className="flex animate-scroll items-center gap-16">
        {loopItems.map((item, index) => (
          <div key={index} className="flex items-center gap-4 whitespace-nowrap">
            <div className="w-11 h-11 bg-navy rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
              {item.icon}
            </div>
            <span className="text-navy font-bold text-base tracking-tight">{item.label}</span>
            <span className="text-navy/20 text-xl font-light ml-8">|</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;