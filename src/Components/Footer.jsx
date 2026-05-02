import React from 'react';

const services = [
  'Personal Loan', 'Home Loan', 'Business Loan', 'Plot Loan',
  'Construction Loan', 'Balance Transfer', 'Loan Against Property', 'CIBIL Issue Loan',
];

const quickLinks = [
  { label: 'About Us', id: 'about' },
  { label: 'EMI Calculator', id: 'emicalc' },
  { label: 'How It Works', id: 'process' },
  { label: 'Refer & Earn', id: 'refer' },
  { label: 'Apply Now', id: 'apply' },
  { label: 'Contact', id: 'contact' },
];

const Footer = () => {
  const year = new Date().getFullYear();
  const phoneNumber = import.meta.env.VITE_WHATSAPP_CONTACT_NUMBER;

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080f28] text-white pt-16 pb-8 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gold-light rounded-md flex items-center justify-center text-navy font-black text-lg">
                P
              </div>
              <div>
                <h2 className="text-white font-header text-xl font-bold leading-none">Praveen Loan Consultancy</h2>
                <p className="text-gold text-[10px] font-bold uppercase tracking-widest mt-0.5">Your Trusted Financial Partner</p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-5">
              Trusted loan experts in Salem, Tamil Nadu. Helping you get personal, home,
              business & property loans with fast approval and expert guidance.
            </p>
            <a
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-sm font-bold hover:brightness-110 transition-all"
              style={{ backgroundColor: '#25D366' }}
            >
              WhatsApp Us
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-sm mb-5">Loan Services</h3>
            <ul className="space-y-2.5">
              {services.map((item) => (
                <li key={item}>
                  <span className="text-white/45 hover:text-gold text-[13px] transition-colors cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-sm mb-5">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="text-white/45 hover:text-gold text-[13px] transition-colors text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/8 flex flex-col md:flex-row justify-between items-center gap-3 text-[12px] text-white/35">
          <p>© {year} Praveen Loan Consultancy. All rights reserved. Salem, Tamil Nadu.</p>
          <p>Built for <span className="text-gold font-bold">Praveen Loan Consultancy</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;