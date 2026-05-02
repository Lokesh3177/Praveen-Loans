import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.jpeg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const phoneNumber = import.meta.env.VITE_WHATSAPP_CONTACT_NUMBER;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = ['About', 'Services', 'EMICalc', 'Process', 'Contact'];
  const navLabels = { About: 'About', Services: 'Services', EMICalc: 'EMI Calc', Process: 'How It Works', Contact: 'Contact' };

  return (
    <nav
      className={`sticky top-0 z-50 border-b border-white/5 transition-all duration-300 ${
        scrolled ? 'bg-navy/95 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-navy'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          {/* Uncomment once logo asset is in place: */}
          { <img src={logo} alt="Logo" className="w-10 h-10 object-contain rounded-md" /> }
          
          <div className="flex flex-col">
            <h1 className="text-white font-header font-bold text-lg leading-none">Praveen Loans</h1>
            <span className="text-gold text-[9px] font-bold tracking-[0.2em] uppercase mt-0.5">
              CONSULTANCY • SALEM
            </span>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={600}
              offset={-80}
              className="text-white/70 hover:text-gold text-[13px] font-semibold transition-colors duration-200 cursor-pointer relative group"
              activeClass="text-gold"
              spy={true}
            >
              {navLabels[item]}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* CTA + HAMBURGER */}
        <div className="flex items-center gap-3">
          <a
            href={`https://wa.me/${phoneNumber}?text=Hi%2C+I+want+to+apply+for+a+loan`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold-light text-navy font-bold px-5 py-2.5 rounded-md text-[12px] uppercase tracking-wider hover:brightness-110 transition-all shadow-lg hidden sm:block"
          >
            Apply Now
          </a>
          <button
            className="md:hidden text-white p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`mobile-menu md:hidden bg-navy/95 backdrop-blur-md border-t border-white/5 ${menuOpen ? 'open' : ''}`}>
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={600}
              offset={-80}
              className="text-white/70 hover:text-gold text-sm font-semibold transition-colors cursor-pointer py-1"
              onClick={() => setMenuOpen(false)}
            >
              {navLabels[item]}
            </Link>
          ))}
          <a
            href={`https://wa.me/${phoneNumber}?text=Hi%2C+I+want+to+apply+for+a+loan`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold-light text-navy font-bold px-5 py-2.5 rounded-md text-[12px] uppercase tracking-wider text-center mt-2"
          >
            Apply Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;