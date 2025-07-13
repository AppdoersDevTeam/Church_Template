import React, { useEffect, useRef, useState } from 'react';
import { Heart, Users, Compass, Star, ChevronRight } from 'lucide-react';
import Leadership from './Leadership';
import Beliefs from './Beliefs';
import ServiceInfo from './ServiceInfo';
import ContactQuickLinks from './ContactQuickLinks';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
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

  const values = [
    {
      icon: Heart,
      title: "Love",
      description: "We believe in the transformative power of God's love and extend it to all."
    },
    {
      icon: Users,
      title: "Community",
      description: "Together we grow stronger, supporting one another through life's journey."
    },
    {
      icon: Compass,
      title: "Purpose",
      description: "We help each person discover their unique calling and make a difference."
    },
    {
      icon: Star,
      title: "Hope",
      description: "In every season, we hold onto hope and share it with our community."
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Users },
    { id: 'leadership', label: 'Leadership', icon: Users },
    { id: 'beliefs', label: 'Our Beliefs', icon: Heart },
    { id: 'services', label: 'Join Us', icon: Compass },
    { id: 'contact', label: 'Contact', icon: Star }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'leadership':
        return <Leadership />;
      case 'beliefs':
        return <Beliefs />;
      case 'services':
        return <ServiceInfo />;
      case 'contact':
        return <ContactQuickLinks />;
      default:
        return (
          <>
            {/* Main content grid */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
              {/* Left content */}
              <div className={`transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}>
                <h3 className="text-3xl font-bold text-navy-900 mb-6">
                  A Place Where Everyone Belongs
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  We're more than just a church – we're a family. Whether you're taking your first 
                  steps in faith or have been walking with God for years, you'll find a warm welcome 
                  and genuine community here.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our mission is simple: to love God, love people, and make a positive impact in 
                  our local and global communities. We believe that everyone has a unique purpose 
                  and we're here to help you discover yours.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => setActiveTab('services')}
                    className="bg-gradient-to-r from-navy-600 to-navy-700 text-white px-8 py-3 rounded-full font-semibold hover:from-navy-700 hover:to-navy-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
                  >
                    Join Us This Sunday
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </button>
                  <button 
                    onClick={() => setActiveTab('leadership')}
                    className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-8 py-3 rounded-full font-semibold hover:from-gold-600 hover:to-gold-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Meet Our Team
                  </button>
                </div>
              </div>

              {/* Right content - Image placeholder with overlay */}
              <div className={`relative transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}>
                <div className="relative h-96 bg-gradient-to-br from-navy-600 to-teal-700 rounded-3xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-black opacity-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Users className="h-16 w-16 mx-auto mb-4 opacity-80" />
                      <p className="text-xl font-semibold">Our Community</p>
                      <p className="text-sm opacity-80">Building relationships that matter</p>
                    </div>
                  </div>
                  {/* Decorative circles */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-gold-400 rounded-full opacity-60"></div>
                  <div className="absolute bottom-6 left-6 w-8 h-8 bg-teal-300 rounded-full opacity-60"></div>
                </div>
              </div>
            </div>

            {/* Values grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className={`text-center group transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl mx-auto flex items-center justify-center shadow-lg group-hover:shadow-xl transform group-hover:scale-110 transition-all duration-300">
                      <value.icon className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute inset-0 w-20 h-20 bg-gold-300 rounded-2xl mx-auto opacity-0 group-hover:opacity-30 transform scale-150 transition-all duration-300"></div>
                  </div>
                  <h4 className="text-xl font-bold text-navy-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </>
        );
    }
  };

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-teal-200 to-teal-300 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-gold-200 to-gold-300 rounded-full opacity-20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
            About{' '}
            <span className="bg-gradient-to-r from-gold-500 to-gold-600 bg-clip-text text-transparent">
              Our Church
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            For over 25 years, Ashburton Baptist Church has been a beacon of hope in Ashburton, 
            bringing people together in faith, love, and service to our community.
          </p>

          {/* Navigation tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-navy-600 to-navy-700 text-white shadow-lg'
                    : 'bg-white text-navy-600 hover:bg-gray-50 shadow-md hover:shadow-lg'
                }`}
              >
                <div className="flex items-center">
                  <tab.icon className="h-4 w-4 mr-2" />
                  {tab.label}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Content based on active tab */}
        {renderContent()}
      </div>
    </section>
  );
};

export default About;