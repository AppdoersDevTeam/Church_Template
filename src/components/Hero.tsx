import React, { useEffect, useState } from 'react';
import { ChevronDown, Play, Calendar, MapPin } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with image and overlay */}
      <div className="absolute inset-0">
        <img 
          src="/ABC background01.png" 
          alt="Church Background" 
          className="w-full h-full object-cover object-center min-h-screen"
          style={{
            minWidth: '100vw',
            minHeight: '100vh',
            maxWidth: '100%',
            maxHeight: '100%'
          }}
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Organic shapes */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-gold-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-500 rounded-full opacity-10 blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-coral-500 rounded-full opacity-5 blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* ABC Logo - Top Left */}
      <div className="absolute top-4 left-2 sm:top-6 sm:left-4 md:top-8 md:left-6 lg:top-8 lg:left-8 xl:top-8 xl:left-12 z-20">
        <div className="relative">
          {/* Solid sun effect background */}
          <div className="absolute inset-0 bg-gold-500 rounded-full blur-sm scale-110 animate-pulse"></div>
          <div className="absolute inset-0 bg-gold-400 rounded-full blur-md scale-105 animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute inset-0 bg-gold-300 rounded-full blur-lg scale-100 animate-pulse" style={{animationDelay: '1s'}}></div>
          
          {/* Logo with solid border */}
          <div className="relative bg-gold-500 p-0.5 rounded-full" style={{padding: '1px'}}>
            <img 
              src="/ABC Logo.png" 
              alt="ABC Logo" 
              className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 xl:h-36 xl:w-36 2xl:h-44 2xl:w-44 rounded-full object-cover"
              style={{
                minWidth: '64px',
                minHeight: '64px',
                maxWidth: '100%',
                maxHeight: '100%'
              }}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-56">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>

          
          <p className={`text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } raleway-semibold`} 
            style={{ fontSize: '1.5625rem' }}
          >
            A place where faith meets community, and every person matters. 
            Join us as we grow together in love, hope, and purpose.
          </p>

          <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <button className="group bg-transparent text-gold-600 border-2 border-gold-500 px-4 py-2 sm:px-6 sm:py-2 md:px-8 md:py-3 rounded-full font-semibold text-xs sm:text-sm md:text-base hover:bg-gradient-to-r hover:from-gold-500 hover:to-gold-600 hover:text-white transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center space-x-2">
              <Play className="h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="shine-text">Watch Online</span>
            </button>
            
            <button className="group border-2 border-white text-white px-4 py-2 sm:px-6 sm:py-2 md:px-8 md:py-3 rounded-full font-semibold text-xs sm:text-sm md:text-base hover:bg-gradient-to-r hover:from-gold-500 hover:to-gold-600 hover:text-white transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
              <MapPin className="h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Find Us</span>
            </button>
          </div>

          {/* Service times card */}
          <div className={`inline-flex items-center space-x-2 sm:space-x-4 bg-white bg-opacity-10 backdrop-blur-md rounded-xl sm:rounded-2xl px-4 py-3 sm:px-6 sm:py-4 text-white border border-white border-opacity-20 transition-all duration-1000 delay-700 hover:bg-opacity-20 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-gold-400" />
            <div className="text-center">
              <p className="font-semibold text-sm sm:text-base">Sunday Service</p>
              <p className="text-xs sm:text-sm text-gold-400 font-semibold shine-text">10:00 AM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2">
        <ChevronDown className="h-6 w-6 sm:h-8 sm:w-8 text-white animate-bounce cursor-pointer hover:text-gold-400 transition-colors duration-300" />
      </div>
    </section>
  );
};

export default Hero;