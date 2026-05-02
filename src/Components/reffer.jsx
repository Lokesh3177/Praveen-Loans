import React, { useState } from 'react';
import { Gift, IndianRupee, Infinity, Zap } from 'lucide-react';
import { useReveal } from '../useRevel';
const steps = [
  { num: 1, label: 'Sign Up', desc: 'Register as a referral partner — free & quick.' },
  { num: 2, label: 'Submit Details', desc: 'Share your customer\'s name, phone & loan type.' },
  { num: 3, label: 'We Process', desc: 'Our team handles the entire loan process.' },
  { num: 4, label: 'You Earn', desc: 'Receive ₹1,000 once the loan is disbursed.' },
];

const highlights = [
  { icon: <Infinity className="w-5 h-5 text-gold" />, label: 'Unlimited Referrals', desc: 'No cap on how many you can refer' },
  { icon: <Zap className="w-5 h-5 text-gold" />, label: 'Simple Process', desc: 'Just share a name & number — we do the rest' },
  { icon: <IndianRupee className="w-5 h-5 text-gold" />, label: '₹1,000 per Referral', desc: 'Paid out on every successful disbursement' },
];

const ReferEarn = () => {
  const [form, setForm] = useState({ name: '', phone: '', loanType: '' });
  const sectionRef = useReveal();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const phoneNumber = import.meta.env.VITE_WHATSAPP_CONTACT_NUMBER;

  const handleSubmit = () => {
    const { name, phone, loanType } = form;
    if (!name || !phone || !loanType) return alert('Please fill all fields');
    const msg = `Hi, I want to refer a customer for a loan%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0ALoan Type: ${encodeURIComponent(loanType)}`;
    window.open(`https://wa.me/${phoneNumber}?text=${msg}`, '_blank');
  };

  return (
    <section id="refer" className="bg-[#F5F7FA] py-16 px-6">
      <div ref={sectionRef} className="container mx-auto max-w-5xl">

        {/* Header */}
        <div className="reveal text-center mb-10">
          <div className="inline-block border border-gold/30 bg-[#FAF3E0] text-[#B8961E] text-[10px] px-5 py-2 rounded-full font-bold uppercase tracking-widest mb-4">
            Refer & Earn
          </div>
          <h2 className="text-navy text-3xl md:text-4xl font-black mb-4">
            Earn Money by Referring Loans
          </h2>
          <p className="text-[#333A4A]/65 text-sm max-w-xl mx-auto leading-relaxed mb-6">
            Know someone who needs a loan? Refer them to us and earn attractive rewards for every
            successful loan disbursement. Unlimited referrals, unlimited earnings!
          </p>

          {/* ₹1000 reward badge */}
          <div className="inline-flex items-center gap-2 bg-navy text-gold-light font-black text-lg px-6 py-3 rounded-2xl shadow-lg mb-6">
            <IndianRupee className="w-5 h-5" />
            1,000 earned per referral
          </div>

         </div>

        {/* Divider */}
        <div className="border-t border-navy/10 my-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Steps */}
          <div className="reveal-left space-y-4">
            <h3 className="text-navy font-bold text-xl mb-5">How It Works</h3>
            {steps.map((s, i) => (
              <div key={i} className={`flex items-start gap-4 card-hover bg-white p-5 rounded-2xl shadow-sm border border-transparent hover:border-navy/10 delay-${(i + 1) * 100}`}>
                <div className="w-9 h-9 bg-navy rounded-xl flex items-center justify-center text-gold-light font-black text-sm flex-shrink-0">
                  {s.num}
                </div>
                <div>
                  <p className="text-navy font-bold text-sm">{s.label}</p>
                  <p className="text-[#333A4A]/60 text-[12px] mt-0.5">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="reveal-right bg-white rounded-2xl p-7 shadow-sm border border-navy/8">
            <h3 className="text-navy font-bold text-xl mb-6 flex items-center gap-2">
              <Gift className="w-5 h-5 text-gold" /> Refer a Customer
            </h3>
            <div className="space-y-4">
              <div>
                <label className="text-[#333A4A]/70 text-[12px] font-semibold block mb-1.5">Customer Name</label>
                <input
                  type="text" name="name" value={form.name} onChange={handleChange}
                  placeholder="Full name"
                  className="w-full border border-navy/15 rounded-xl px-4 py-3 text-sm text-navy placeholder-navy/30 focus:outline-none focus:ring-2 focus:ring-navy/20 transition-all"
                />
              </div>
              <div>
                <label className="text-[#333A4A]/70 text-[12px] font-semibold block mb-1.5">Phone Number</label>
                <input
                  type="tel" name="phone" value={form.phone} onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full border border-navy/15 rounded-xl px-4 py-3 text-sm text-navy placeholder-navy/30 focus:outline-none focus:ring-2 focus:ring-navy/20 transition-all"
                />
              </div>
              <div>
                <label className="text-[#333A4A]/70 text-[12px] font-semibold block mb-1.5">Loan Type</label>
                <select
                  name="loanType" value={form.loanType} onChange={handleChange}
                  className="w-full border border-navy/15 rounded-xl px-4 py-3 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-navy/20 transition-all bg-white"
                >
                  <option value="">Select loan type</option>
                  {['Personal Loan', 'Home Loan', 'Business Loan', 'Plot Loan', 'Construction Loan', 'Balance Transfer', 'Loan Against Property', 'CIBIL Issue Loan'].map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <button
                onClick={handleSubmit}
                className="w-full bg-[#25D366] text-white font-bold py-3 rounded-xl text-sm flex items-center justify-center gap-2 hover:brightness-110 hover:scale-[1.02] transition-all duration-300 active:scale-95 shadow-lg mt-2"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
                Submit via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferEarn;