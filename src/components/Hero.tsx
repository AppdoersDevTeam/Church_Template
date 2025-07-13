import React, { useEffect, useState } from 'react';
import { ChevronDown, Play, Calendar, MapPin } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-teal-900">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        {/* Organic shapes */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-gold-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-500 rounded-full opacity-10 blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-coral-500 rounded-full opacity-5 blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <div>Welcome to</div>
            <div className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
              Ashburton Baptist Church
            </div>
          </h1>
          
          <p className={`text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            A place where faith meets community, and every person matters. 
            Join us as we grow together in love, hope, and purpose.
          </p>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <button className="group bg-gradient-to-r from-gold-500 to-gold-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-gold-600 hover:to-gold-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center space-x-2">
              <Play className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Watch Online</span>
            </button>
            
            <button className="group border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-navy-900 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
              <MapPin className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Find Us</span>
            </button>
          </div>

          {/* Service times card */}
          <div className={`inline-flex items-center space-x-4 bg-white bg-opacity-10 backdrop-blur-md rounded-2xl px-6 py-4 text-white border border-white border-opacity-20 transition-all duration-1000 delay-700 hover:bg-opacity-20 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <Calendar className="h-6 w-6 text-gold-400" />
            <div className="text-left">
              <p className="font-semibold">Sunday Services</p>
              <p className="text-sm text-gray-200">9:00 AM & 11:00 AM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ChevronDown className="h-8 w-8 text-white animate-bounce cursor-pointer hover:text-gold-400 transition-colors duration-300" />
      </div>
    </section>
  );
};

export default Hero;