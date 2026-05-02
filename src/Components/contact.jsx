import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useReveal } from '../useRevel';

const Contact = () => {
  const sectionRef = useReveal();
  
  // Pull variables from .env
  const phoneNumber = import.meta.env.VITE_WHATSAPP_CONTACT_NUMBER;
  const supportEmail = import.meta.env.VITE_OFFICE_SUPPORT_EMAIL;

  // Define contact details INSIDE the component
  const contactDetails = [
    { 
      icon: <MapPin className="w-5 h-5" />, 
      label: 'Location', 
      value: 'Salem, Tamil Nadu' 
    },
    { 
      icon: <Phone className="w-5 h-5" />, 
      label: 'Phone / WhatsApp', 
      value: `+91 ${phoneNumber}`, // Use backticks for clean formatting
      href: `tel:+91${phoneNumber}` 
    },
    { 
      icon: <Mail className="w-5 h-5" />, 
      label: 'Email', 
      value: supportEmail, 
      href: `mailto:${supportEmail}` 
    },
    { 
      icon: <Clock className="w-5 h-5" />, 
      label: 'Working Hours', 
      value: 'Mon – Sat, 9 AM – 7 PM' 
    },
  ];

  return (
    <section id="contact" className="bg-[#F5F7FA] py-16 px-6">
      <div ref={sectionRef} className="container mx-auto max-w-5xl">

        {/* Header */}
        <div className="reveal text-center mb-12">
          <div className="inline-block border border-[#B8961E]/30 bg-[#F5F7FA] text-[#B8961E] text-[10px] px-5 py-2 rounded-full font-bold uppercase tracking-widest mb-4">
            Contact Us
          </div>
          <h2 className="text-[#1A2B5F] text-3xl md:text-4xl font-black mb-3">Speak to a Loan Expert</h2>
          <p className="text-[#333A4A]/60 text-sm max-w-md mx-auto">
            Get free consultation. We'll help you find the best loan for your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="reveal-left space-y-4">
            {contactDetails.map((item, i) => (
              <div key={i} className="card-hover bg-white rounded-2xl p-5 flex items-center gap-4 shadow-sm border border-transparent hover:border-[#1A2B5F]/10">
                <div className="w-11 h-11 bg-[#1A2B5F] rounded-xl flex items-center justify-center text-[#B8961E] flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-[#333A4A]/50 text-[11px] uppercase tracking-wider font-bold">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-[#1A2B5F] font-bold text-sm hover:text-[#B8961E] transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-[#1A2B5F] font-bold text-sm">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Map + CTA */}
          <div className="reveal-right space-y-4">
            <div className="rounded-2xl overflow-hidden shadow-sm border border-[#1A2B5F]/10 h-52 w-full">
              <iframe
                title="LoanPro Consultancy Office"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125026.17228834446!2d78.07062497746141!3d11.654728564032152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1bb59411e43%3A0x13936630f9a2b53!2sSalem%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1714574850000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <a
              href={`https://wa.me/${phoneNumber}?text=Hi%2C+I+want+a+free+loan+consultation`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-white text-sm hover:brightness-110 hover:scale-[1.02] transition-all duration-300 active:scale-95 shadow-lg"
              style={{ backgroundColor: '#25D366' }}
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
              Chat on WhatsApp
            </a>

            <a
              href={`tel:+91${phoneNumber}`}
              className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-white text-sm bg-[#B8961E] hover:brightness-110 hover:scale-[1.02] transition-all duration-300 active:scale-95 shadow-lg"
            >
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;