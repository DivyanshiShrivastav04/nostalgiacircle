import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-amber-900 font-serif">
              NostalgiaCircle
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-amber-800 hover:text-amber-600 transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-amber-800 hover:text-amber-600 transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-amber-800 hover:text-amber-600 transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-amber-800 hover:text-amber-600 transition-colors font-medium"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-amber-800 hover:text-amber-600 transition-colors font-medium"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-amber-800 hover:text-amber-600 transition-colors font-medium"
            >
              FAQs
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-amber-800 hover:text-amber-600 transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-amber-800 hover:bg-amber-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-amber-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('hero')}
                className="block w-full text-left px-3 py-2 text-amber-800 hover:bg-amber-100 rounded-md transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-amber-800 hover:bg-amber-100 rounded-md transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-3 py-2 text-amber-800 hover:bg-amber-100 rounded-md transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="block w-full text-left px-3 py-2 text-amber-800 hover:bg-amber-100 rounded-md transition-colors"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="block w-full text-left px-3 py-2 text-amber-800 hover:bg-amber-100 rounded-md transition-colors"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="block w-full text-left px-3 py-2 text-amber-800 hover:bg-amber-100 rounded-md transition-colors"
              >
                FAQs
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-amber-800 hover:bg-amber-100 rounded-md transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;