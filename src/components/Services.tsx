import React, { useEffect, useRef, useState } from 'react';
import { Clock, MapPin, Users, Headphones, Baby, Coffee } from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "Sunday Morning Worship",
      time: "9:00 AM & 11:00 AM",
      description: "Join us for inspiring worship, practical teaching, and community connection.",
      features: ["Live music", "Children's program", "Coffee & fellowship"],
      icon: Users,
      color: "from-navy-600 to-navy-700"
    },
    {
      title: "Online Experience",
      time: "Live & On-Demand",
      description: "Can't make it in person? Join our vibrant online community from anywhere.",
      features: ["HD livestream", "Interactive chat", "Digital connect cards"],
      icon: Headphones,
      color: "from-teal-600 to-teal-700"
    },
    {
      title: "Family Service",
      time: "1st Sunday, 5:00 PM",
      description: "A relaxed, family-friendly service designed for all ages to worship together.",
      features: ["Interactive worship", "Family activities", "Casual atmosphere"],
      icon: Baby,
      color: "from-gold-600 to-gold-700"
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-gradient-to-br from-navy-900 via-navy-800 to-teal-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-gold-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-teal-400 rounded-full opacity-10 blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Join Us for{' '}
            <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
              Worship
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">
            Experience the presence of God in our welcoming community. 
            Whether in-person or online, there's a place for you.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${300 + index * 200}ms` }}
            >
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 hover:transform hover:scale-105 h-full">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${service.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">{service.title}</h3>
                
                <div className="flex items-center text-gold-400 mb-3 sm:mb-4">
                  <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                  <span className="font-semibold text-sm sm:text-base">{service.time}</span>
                </div>
                
                <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{service.description}</p>
                
                <ul className="space-y-1 sm:space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm sm:text-base">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gold-400 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Location info */}
        <div className={`text-center transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 bg-white bg-opacity-10 backdrop-blur-md rounded-xl sm:rounded-2xl px-4 py-4 sm:px-6 sm:py-5 lg:px-8 lg:py-6 text-white border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-gold-400" />
            <div className="text-center sm:text-left">
              <p className="font-semibold text-sm sm:text-base lg:text-lg">Ashburton Baptist Church</p>
              <p className="text-gray-300 text-xs sm:text-sm">284 Havelock Street, Ashburton 7700</p>
            </div>
            <a 
              href="https://maps.google.com/?q=284+Havelock+Street+Ashburton+7700+New+Zealand" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:from-gold-600 hover:to-gold-700 transform hover:scale-105 transition-all duration-300 sm:ml-4 inline-block"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;