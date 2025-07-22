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

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Events', href: '#events' },
    { name: 'Connect', href: '#connect' },
  ];

  return (
    <header className="absolute top-0 left-0 w-full bg-transparent transition-all duration-300 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-18 lg:h-20 relative">
          {/* Logo or site name for left side (optional, can be left empty for now) */}
          <div className="flex-1 flex items-center">
            {/* You can add a logo or site name here if desired */}
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-4 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {navItems.map((item, index) => (
              <React.Fragment key={item.name}>
                <a
                  href={item.href}
                  className={`relative px-2 py-2 lg:px-4 lg:py-3 text-sm lg:text-base xl:text-lg font-bold transition-all duration-300 hover:scale-105 ${
                    isScrolled 
                      ? 'text-navy-600 hover:text-gold-500' 
                      : 'text-white hover:text-gold-500'
                  } group`}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
                {index < navItems.length - 1 && (
                  <span className={`text-sm lg:text-lg font-medium ${
                    isScrolled ? 'text-gold-600' : 'text-gold-400'
                  }`}>/</span>
                )}
              </React.Fragment>
            ))}
            <span className={`text-sm lg:text-lg font-medium ${
              isScrolled ? 'text-gold-600' : 'text-gold-400'
            }`}>/</span>
            <a 
              href="#join-us" 
              className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-4 py-2 lg:px-6 lg:py-3 xl:px-8 xl:py-3 rounded-full font-bold text-xs lg:text-sm xl:text-base hover:from-gold-600 hover:to-gold-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl inline-block whitespace-nowrap"
            >
              Visit Us
            </a>
          </div>

          {/* Mobile menu button - Right aligned */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 sm:p-3 rounded-md transition-colors duration-300 ml-auto focus:outline-none focus:ring-2 focus:ring-gold-500 ${
              isScrolled ? 'text-navy-600' : 'text-white'
            }`}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X className="h-8 w-8 sm:h-9 sm:w-9" /> : <Menu className="h-8 w-8 sm:h-9 sm:w-9" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-white bg-opacity-95 backdrop-blur-md rounded-lg shadow-xl mt-2 py-2 sm:py-4">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-6 py-4 text-lg sm:text-xl text-navy-600 hover:text-gold-600 hover:bg-gold-50 transition-all duration-300 font-semibold rounded-lg"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: isMenuOpen ? 'slideInLeft 0.3s ease-out forwards' : 'none'
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="px-4 pt-2 sm:px-6">
              <a 
                href="#join-us" 
                className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-white px-6 py-4 text-lg sm:text-xl rounded-lg font-semibold hover:from-gold-600 hover:to-gold-700 transition-all duration-300 inline-block text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Visit Us
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;