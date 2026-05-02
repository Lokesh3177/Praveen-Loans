import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react'; // Added for the bullet points
import { useReveal } from '../useRevel';


const QuickApply = () => {
  const [form, setForm] = useState({ name: '', loanType: '', city: '' });
  const sectionRef = useReveal();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  

  const handleSubmit = () => {
    const phoneNumber = import.meta.env.VITE_WHATSAPP_CONTACT_NUMBER;
    
    const { name, loanType, city } = form;
    if (!name || !loanType || !city) return alert('Please fill all fields');
    const msg = `Hi%2C+I+want+to+apply+for+a+loan%0AName%3A+${encodeURIComponent(name)}%0ALoan+Type%3A+${encodeURIComponent(loanType)}%0ACity%3A+${encodeURIComponent(city)}`;
    window.open(`https://wa.me/${phoneNumber}?text=${msg}`, '_blank');
  };

  const features = [
    "Free consultation — no charges",
    "Response within 30 minutes",
    "Best rates from 15+ lenders",
    "All loan types handled",
    "CIBIL issues? We still help"
  ];

  return (
    <section id="apply" className="bg-[#1A2B5F] py-16 px-6">
      <div ref={sectionRef} className="container mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Column: Content */}
        <div className="reveal space-y-6">
          <div className="inline-block border border-[#B8961E]/30 text-[#B8961E] text-[10px] px-5 py-2 rounded-full font-bold uppercase tracking-widest">
            Apply Now
          </div>
          <h2 className="text-white text-4xl font-black leading-tight">
            Ready to Get Your Loan?
          </h2>
          <p className="text-white/70 text-base leading-relaxed">
            Fill in your details and our loan expert will reach out within minutes via WhatsApp to guide you through the process.
          </p>
          
          <ul className="space-y-3">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-3 text-white/90 text-sm">
                <CheckCircle2 className="w-5 h-5 text-[#B8961E]" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Form Card */}
        <div className="reveal bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl backdrop-blur-sm space-y-4">
          <h3 className="text-white text-xl font-bold mb-2">Quick Application</h3>
          <div>
            <label className="text-white/60 text-[12px] font-semibold block mb-1.5">Your Name *</label>
            <input
              type="text" name="name" value={form.name} onChange={handleChange}
              placeholder="Full name"
              className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:ring-2 focus:ring-[#B8961E]/30 transition-all"
            />
          </div>
          <div>
            <label className="text-white/60 text-[12px] font-semibold block mb-1.5">Loan Type *</label>
            <select
              name="loanType" value={form.loanType} onChange={handleChange}
              className="w-full bg-[#1A2B5F] border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#B8961E]/30 transition-all"
            >
              <option value="">Select loan type</option>
              {['Personal Loan', 'Home Loan', 'Business Loan', 'Plot Loan', 'Construction Loan', 'Balance Transfer', 'Loan Against Property', 'CIBIL Issue Loan'].map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-white/60 text-[12px] font-semibold block mb-1.5">City *</label>
            <input
              type="text" name="city" value={form.city} onChange={handleChange}
              placeholder="Your city"
              className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:ring-2 focus:ring-[#B8961E]/30 transition-all"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="w-full bg-[#B8961E] text-white font-bold py-3.5 rounded-xl text-sm hover:brightness-110 hover:scale-[1.02] transition-all duration-300 active:scale-95 shadow-lg mt-2"
          >
            Apply Now via WhatsApp →
          </button>
          <p className="text-white/30 text-[11px] text-center">
            No spam. We'll only contact you about your loan.
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default QuickApply;