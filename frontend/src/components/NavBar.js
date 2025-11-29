import React, { useState } from 'react';
import { ImLinkedin } from "react-icons/im";
import { VscGithub } from "react-icons/vsc";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { Menu, X } from "lucide-react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  const socialLinks = [
    { icon: <ImLinkedin />, href: 'https://www.linkedin.com/in/swarna-c-s-227b1222b/' },
    { icon: <VscGithub />, href: 'https://github.com/Swarna-CS' },
    { icon: <FaXTwitter />, href: '#' },
    { icon: <FaInstagram />, href: '#' }
  ];

  return (
    <nav className='sticky top-0 z-50 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 backdrop-blur-md border-b border-slate-800 shadow-lg'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16 md:h-20'>
          {/* Logo */}
          <div className='flex-shrink-0 flex items-center group'>
            <div className='w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-bold text-white text-lg md:text-xl shadow-lg group-hover:scale-110 transition-transform duration-300'>
              S
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-1 lg:space-x-2'>
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className='px-3 lg:px-4 py-2 rounded-lg text-sm lg:text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-300 relative group'
              >
                {link.name}
                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300'></span>
              </button>
            ))}
          </div>

          {/* Social Links - Desktop */}
          <div className='hidden md:flex items-center space-x-4 lg:space-x-5'>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className='text-slate-400 hover:text-white text-xl lg:text-2xl transform hover:scale-125 transition-all duration-300'
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-300'
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className='px-4 pt-2 pb-4 space-y-1 bg-slate-900/95 backdrop-blur-sm'>
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className='w-full text-left block px-4 py-3 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800/70 transition-all duration-300'
            >
              {link.name}
            </button>
          ))}
          
          {/* Social Links - Mobile */}
          <div className='flex items-center justify-center space-x-8 pt-4 pb-2 border-t border-slate-800'>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className='text-slate-400 hover:text-white text-2xl transform hover:scale-125 transition-all duration-300'
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;