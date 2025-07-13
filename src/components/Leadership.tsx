import React, { useEffect, useRef, useState } from 'react';
import { Users, Mail, Phone, MapPin, Award, Heart, BookOpen, Settings } from 'lucide-react';

const Leadership = () => {
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

  const leadership = [
    {
      name: "Pastor John Smith",
      role: "Senior Pastor",
      description: "Leading our congregation with wisdom and compassion for over 15 years.",
      icon: Heart,
      contact: "pastor@gracecommunity.nz",
      phone: "+64 3 555 0123"
    },
    {
      name: "Sarah Johnson",
      role: "Associate Pastor",
      description: "Overseeing youth ministry and community outreach programs.",
      icon: Users,
      contact: "sarah@gracecommunity.nz",
      phone: "+64 3 555 0124"
    },
    {
      name: "Michael Brown",
      role: "Elder & Chairman",
      description: "Providing spiritual guidance and church governance leadership.",
      icon: Award,
      contact: "michael@gracecommunity.nz",
      phone: "+64 3 555 0125"
    },
    {
      name: "David Wilson",
      role: "Elder",
      description: "Supporting pastoral care and church administration.",
      icon: BookOpen,
      contact: "david@gracecommunity.nz",
      phone: "+64 3 555 0126"
    },
    {
      name: "Emma Davis",
      role: "Office Administrator",
      description: "Managing church operations and coordinating events.",
      icon: Settings,
      contact: "office@gracecommunity.nz",
      phone: "+64 3 555 0127"
    },
    {
      name: "Lisa Thompson",
      role: "CAP Manager",
      description: "Leading our Christians Against Poverty ministry and financial support.",
      icon: Heart,
      contact: "cap@gracecommunity.nz",
      phone: "+64 3 555 0128"
    }
  ];

  return (
    <section id="leadership" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-teal-200 to-teal-300 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-gold-200 to-gold-300 rounded-full opacity-20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-gold-500 to-gold-600 bg-clip-text text-transparent">
              Leadership Team
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Meet the dedicated team who guide and serve our church community. Our leaders are committed to fostering spiritual growth, connection, and support for all.
          </p>
        </div>

        {/* Leadership grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leadership.map((leader, index) => (
            <div
              key={leader.name}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-navy-600 to-teal-700 rounded-2xl mx-auto flex items-center justify-center shadow-lg mb-4">
                  <leader.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">{leader.name}</h3>
                <p className="text-gold-600 font-semibold">{leader.role}</p>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed text-center">
                {leader.description}
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <Mail className="h-4 w-4 mr-2 text-navy-600" />
                  <a href={`mailto:${leader.contact}`} className="hover:text-navy-600 transition-colors">
                    {leader.contact}
                  </a>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Phone className="h-4 w-4 mr-2 text-navy-600" />
                  <a href={`tel:${leader.phone}`} className="hover:text-navy-600 transition-colors">
                    {leader.phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-lg text-gray-600 mb-6">
            Want to connect with our leadership team? We'd love to hear from you!
          </p>
          <button className="bg-gradient-to-r from-navy-600 to-navy-700 text-white px-8 py-3 rounded-full font-semibold hover:from-navy-700 hover:to-navy-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Leadership; 