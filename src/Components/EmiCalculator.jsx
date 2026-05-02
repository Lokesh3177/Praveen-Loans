import React, { useState, useEffect } from 'react';
import { CheckCircle2, MessageCircle, Calculator } from 'lucide-react';
import { useReveal } from '../useRevel';

const EMICalc = () => {
  const [amount, setAmount] = useState(500000);
  const [interest, setInterest] = useState(8.5);
  const [tenure, setTenure] = useState(5);
  const [tenureType, setTenureType] = useState('years');
  const [result, setResult] = useState(null);
  const [calculating, setCalculating] = useState(false);
  const phoneNumber = import.meta.env.VITE_WHATSAPP_CONTACT_NUMBER;

  const sectionRef = useReveal();

  const formatINR = (num) =>
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(num);

  const calculate = () => {
    setCalculating(true);
    setTimeout(() => {
      const months = tenureType === 'years' ? tenure * 12 : tenure;
      const r = interest / 12 / 100;
      let emi, totalPayment, totalInterest;

      if (r === 0) {
        emi = amount / months;
      } else {
        emi = (amount * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
      }

      totalPayment = emi * months;
      totalInterest = totalPayment - amount;

      setResult({ emi, totalInterest, totalPayment });
      setCalculating(false);
    }, 300);
  };

  // Auto-calculate on mount
  useEffect(() => { calculate(); }, []);

  const waMsg = result
    ? `https://wa.me/${phoneNumber}?text=Hi%2C+I+want+to+apply+for+a+loan%0AAmount%3A+${formatINR(amount)}%0AEMI%3A+${formatINR(result.emi)}%0ATenure%3A+${tenure}+${tenureType}`
    : '#';

  return (
    <section id="emicalc" className="bg-navy py-16 px-6">
      <div ref={sectionRef} className="container mx-auto max-w-5xl">

        {/* Header */}
        <div className="reveal text-center mb-12">
          <div className="inline-block border border-gold/30 bg-navy text-gold text-[10px] px-5 py-2 rounded-full font-bold uppercase tracking-widest mb-4">
            EMI Calculator
          </div>
          <h2 className="text-white text-3xl md:text-4xl font-black mb-3">
            Calculate Your Loan EMI Instantly
          </h2>
          <p className="text-white/50 text-sm max-w-md mx-auto">
            Plan your loan smartly. Know your monthly payments before applying.
          </p>
          <div className="flex justify-center flex-wrap gap-4 mt-4 text-gold text-[11px] font-bold">
            {['✔ Instant EMI calculation', '✔ Better financial planning', '✔ Compare loan options'].map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>

        {/* Card */}
        <div className="reveal bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">

            {/* Inputs */}
            <div className="p-8 border-b md:border-b-0 md:border-r border-white/10 space-y-6">

              {/* Loan Amount */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-white/70 text-sm font-semibold">Loan Amount</label>
                  <span className="text-gold font-bold text-sm">{formatINR(amount)}</span>
                </div>
                <input
                  type="range" min="50000" max="10000000" step="50000"
                  value={amount} onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full accent-gold h-1.5 rounded-full cursor-pointer"
                />
                <div className="flex justify-between text-white/30 text-[10px] mt-1">
                  <span>₹50K</span><span>₹1Cr</span>
                </div>
              </div>

              {/* Interest Rate */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-white/70 text-sm font-semibold">Interest Rate (% p.a.)</label>
                  <span className="text-gold font-bold text-sm">{interest}%</span>
                </div>
                <input
                  type="range" min="6" max="24" step="0.1"
                  value={interest} onChange={(e) => setInterest(Number(e.target.value))}
                  className="w-full accent-gold h-1.5 rounded-full cursor-pointer"
                />
                <div className="flex justify-between text-white/30 text-[10px] mt-1">
                  <span>6%</span><span>24%</span>
                </div>
              </div>

              {/* Tenure */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-white/70 text-sm font-semibold">Tenure</label>
                  <div className="flex gap-1">
                    {['years', 'months'].map((t) => (
                      <button
                        key={t}
                        onClick={() => setTenureType(t)}
                        className={`text-[10px] px-2 py-0.5 rounded font-bold transition-colors ${
                          tenureType === t ? 'bg-gold text-navy' : 'text-white/40 border border-white/20'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2 mb-2">
                  <span className="text-gold font-bold text-sm">{tenure} {tenureType}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max={tenureType === 'years' ? 30 : 360}
                  step="1"
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                  className="w-full accent-gold h-1.5 rounded-full cursor-pointer"
                />
                <div className="flex justify-between text-white/30 text-[10px] mt-1">
                  <span>1 {tenureType === 'years' ? 'yr' : 'mo'}</span>
                  <span>{tenureType === 'years' ? '30 yrs' : '360 mo'}</span>
                </div>
              </div>

              <button
                onClick={calculate}
                disabled={calculating}
                className="w-full bg-gold-light text-navy font-bold py-3 rounded-xl text-sm flex items-center justify-center gap-2 hover:brightness-110 transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-lg"
              >
                <Calculator className="w-4 h-4" />
                {calculating ? 'Calculating…' : 'Calculate EMI'}
              </button>
            </div>

            {/* Results */}
            <div className="p-8 flex flex-col justify-between">
              {result ? (
                <>
                  <div className="space-y-6">
                    <div className="text-center">
                      <p className="text-white/50 text-xs uppercase tracking-widest font-bold mb-1">Monthly EMI</p>
                      <p className="text-gold font-black text-4xl md:text-5xl">{formatINR(result.emi)}</p>
                    </div>

                    <div className="space-y-3">
                      {[
                        { label: 'Principal Amount', val: formatINR(amount), color: 'bg-blue-500' },
                        { label: 'Total Interest', val: formatINR(result.totalInterest), color: 'bg-gold' },
                        { label: 'Total Payment', val: formatINR(result.totalPayment), color: 'bg-green-500' },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3">
                          <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${item.color}`} />
                            <span className="text-white/60 text-xs font-medium">{item.label}</span>
                          </div>
                          <span className="text-white font-bold text-sm">{item.val}</span>
                        </div>
                      ))}
                    </div>

                    {/* Pie chart indicator */}
                    <div className="flex items-center gap-4 justify-center">
                      <div
                        className="w-20 h-20 rounded-full flex-shrink-0"
                        style={{
                          background: `conic-gradient(#F3D060 0% ${Math.round((amount / result.totalPayment) * 100)}%, #22c55e ${Math.round((amount / result.totalPayment) * 100)}% 100%)`,
                        }}
                      />
                      <div className="text-xs space-y-1">
                        <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-gold inline-block" /> Principal</div>
                        <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500 inline-block" /> Interest</div>
                      </div>
                    </div>
                  </div>

                  <a
                    href={waMsg}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm text-white transition-all duration-300 hover:scale-[1.02] active:scale-95"
                    style={{ backgroundColor: '#25D366' }}
                  >
                    <MessageCircle className="w-4 h-4" />
                    Get This Loan Now
                  </a>
                </>
              ) : (
                <div className="text-center text-white/40 my-auto">
                  <Calculator className="w-12 h-12 mx-auto mb-3 opacity-30" />
                  <p className="text-sm">Adjust sliders and click Calculate</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EMICalc;