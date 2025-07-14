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
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Join Us for{' '}
            <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
              Worship
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience the presence of God in our welcoming community. 
            Whether in-person or online, there's a place for you.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${300 + index * 200}ms` }}
            >
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 hover:transform hover:scale-105 h-full">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                
                <div className="flex items-center text-gold-400 mb-4">
                  <Clock className="h-4 w-4 mr-2" />
                  <span className="font-semibold">{service.time}</span>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-gold-400 rounded-full mr-3"></div>
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
          <div className="inline-flex items-center space-x-4 bg-white bg-opacity-10 backdrop-blur-md rounded-2xl px-8 py-6 text-white border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
            <MapPin className="h-8 w-8 text-gold-400" />
            <div className="text-left">
              <p className="font-semibold text-lg">Grace Community Church</p>
              <p className="text-gray-300">123 Hope Street, Auckland, New Zealand</p>
            </div>
            <button className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-6 py-3 rounded-full font-semibold hover:from-gold-600 hover:to-gold-700 transform hover:scale-105 transition-all duration-300 ml-4">
              Get Directions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;