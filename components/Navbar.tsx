import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';

import Logo from '../assets/images/Logo.png';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Customize', href: '#customize' },
    { name: 'About', href: '#about' },
    { name: 'Our Work', href: '#work' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    if (location.pathname !== '/') {
      navigate('/');
      if (href !== '#') {
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else {
      if (href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" onClick={(e) => handleNavClick(e, '#')} className="flex items-center">
            <img 
              src={Logo} 
              alt="Mansory Mobilje" 
              className={`h-12 md:h-14 w-auto transition-all duration-300 ${scrolled ? '' : 'brightness-0 invert md:brightness-100 md:invert-0'}`}
            />
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-medium text-sm tracking-wide uppercase hover:text-gold-400 transition-colors ${scrolled ? 'text-gray-800' : 'text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="bg-gold-400 text-white px-5 py-2 rounded-sm text-sm font-semibold uppercase tracking-wider hover:bg-gold-500 transition-all"
            >
              Get a Quote
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 ${scrolled ? 'text-dark-900' : 'text-white'}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible h-0'}`}>
        <div className="flex flex-col px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-dark-900 font-medium text-lg border-b border-gray-100 pb-2"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 flex flex-col space-y-3">
             <div className="flex items-center text-gray-600">
                <Phone size={18} className="mr-2 text-gold-400" />
                <span>+383 45 297 275</span>
             </div>
             <div className="flex items-center text-gray-600">
                <Mail size={18} className="mr-2 text-gold-400" />
                <span>mansorymobilje@gmail.com</span>
             </div>
          </div>
        </div>
      </div>
    </nav>
  );
};