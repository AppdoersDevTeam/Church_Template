import React, { useEffect, useRef, useState } from 'react';
import { Clock, MapPin, Users, Music, Coffee, Heart, ArrowRight, Calendar } from 'lucide-react';

const ServiceInfo = () => {
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

  const serviceTimes = [
    {
      day: "Sunday",
      time: "9:30 AM",
      type: "Main Service",
      description: "Join us for worship, teaching, and community"
    },
    {
      day: "Sunday",
      time: "11:00 AM",
      type: "Family Service",
      description: "A service designed for families with children"
    },
    {
      day: "Wednesday",
      time: "7:00 PM",
      type: "Prayer Meeting",
      description: "Come together for prayer and fellowship"
    }
  ];

  const whatToExpect = [
    {
      icon: Users,
      title: "Welcoming Community",
      description: "You'll be greeted with warm smiles and genuine hospitality from the moment you arrive."
    },
    {
      icon: Music,
      title: "Contemporary Worship",
      description: "Enjoy modern worship music that connects hearts to God in meaningful ways."
    },
    {
      icon: Coffee,
      title: "Fellowship Time",
      description: "Stay after the service for coffee, tea, and conversation with our church family."
    },
    {
      icon: Heart,
      title: "Biblical Teaching",
      description: "Hear relevant, practical messages based on God's Word that apply to everyday life."
    }
  ];

  return (
    <section id="service-info" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-teal-200 to-teal-300 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-gold-200 to-gold-300 rounded-full opacity-20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
            Join Us for{' '}
            <span className="bg-gradient-to-r from-gold-500 to-gold-600 bg-clip-text text-transparent">
              Worship
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everyone is welcome at our Sunday services. Come as you are and experience a community rooted in faith, hope, and love.
          </p>
        </div>

        {/* Service times */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-navy-900 text-center mb-12">
            Service Times
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {serviceTimes.map((service, index) => (
              <div
                key={`${service.day}-${service.time}`}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-navy-600 to-teal-700 rounded-2xl mx-auto flex items-center justify-center shadow-lg mb-4">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-navy-900 mb-2">{service.day}</h4>
                  <p className="text-3xl font-bold text-gold-600 mb-2">{service.time}</p>
                  <p className="text-lg font-semibold text-navy-700 mb-3">{service.type}</p>
                </div>
                <p className="text-gray-600 leading-relaxed text-center">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* What to expect */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-navy-900 text-center mb-12">
            What to Expect
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whatToExpect.map((item, index) => (
              <div
                key={item.title}
                className={`text-center transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl mx-auto flex items-center justify-center shadow-lg mb-6 group-hover:shadow-xl transform group-hover:scale-110 transition-all duration-300">
                  <item.icon className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-navy-900 mb-3">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Location and directions */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 delay-800 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <h3 className="text-3xl font-bold text-navy-900 mb-6">
                Find Us
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-navy-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-navy-900">Grace Community Church</p>
                    <p className="text-gray-600">123 Church Street, Christchurch 8011</p>
                    <p className="text-gray-600">New Zealand</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-navy-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-navy-900">Office Hours</p>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Calendar className="h-6 w-6 text-navy-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-navy-900">Parking</p>
                    <p className="text-gray-600">Free parking available on-site</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`transition-all duration-1000 delay-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <div className="bg-gradient-to-br from-navy-600 to-teal-700 rounded-2xl p-8 text-white text-center">
                <MapPin className="h-16 w-16 mx-auto mb-4 opacity-80" />
                <h4 className="text-2xl font-bold mb-4">Easy to Find</h4>
                <p className="text-lg mb-6 opacity-90">
                  Located in the heart of Christchurch, we're easily accessible by car, bus, or walking.
                </p>
                <button className="bg-white text-navy-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 flex items-center mx-auto">
                  Get Directions
                  <ArrowRight className="h-4 w-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className={`text-center transition-all duration-1000 delay-1200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-3xl font-bold text-navy-900 mb-6">
            Ready to Visit?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We can't wait to meet you! Whether you're exploring faith for the first time or looking for a church home, you'll find a warm welcome here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-navy-600 to-navy-700 text-white px-8 py-3 rounded-full font-semibold hover:from-navy-700 hover:to-navy-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Plan Your Visit
            </button>
            <button className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-8 py-3 rounded-full font-semibold hover:from-gold-600 hover:to-gold-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceInfo; 