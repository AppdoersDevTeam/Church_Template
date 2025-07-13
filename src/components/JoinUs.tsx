import React, { useEffect, useRef, useState } from 'react';
import { Clock, MapPin, Users, Heart, ArrowRight } from 'lucide-react';

const JoinUs = () => {
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
      time: "9:00 AM",
      service: "Traditional Service",
      description: "Classic hymns and traditional liturgy"
    },
    {
      time: "11:00 AM",
      service: "Contemporary Service",
      description: "Modern worship with contemporary music"
    },
    {
      time: "6:00 PM",
      service: "Evening Service",
      description: "Intimate worship and teaching"
    }
  ];

  const welcomeFeatures = [
    {
      icon: Users,
      title: "Welcoming Community",
      description: "Find your place in our diverse, loving family"
    },
    {
      icon: Heart,
      title: "Come As You Are",
      description: "No dress code, no pressure - just authentic worship"
    },
    {
      icon: Clock,
      title: "Children Welcome",
      description: "Nursery and kids programs available"
    }
  ];

  return (
    <section id="join-us" ref={sectionRef} className="py-20 bg-gradient-to-br from-white via-gray-50 to-teal-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-gold-500 rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-coral-500 rounded-full opacity-5 blur-3xl"></div>

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
            Everyone is welcome at our Sunday services. Come as you are and experience a community 
            rooted in faith, hope, and love.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Service Times */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-navy-900 mb-8 flex items-center">
                <Clock className="h-6 w-6 mr-3 text-gold-500" />
                Sunday Service Times
              </h3>
              
              <div className="space-y-6">
                {serviceTimes.map((service, index) => (
                  <div
                    key={service.time}
                    className="group p-6 bg-gradient-to-r from-navy-50 to-teal-50 rounded-2xl border border-navy-100 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-xl font-bold text-navy-900 mb-2">{service.service}</h4>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gold-600">{service.time}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-gold-500 to-gold-600 rounded-2xl text-white">
                <h4 className="text-lg font-semibold mb-2">First Time Visitor?</h4>
                <p className="text-gold-100 mb-4">
                  We'd love to meet you! Look for our welcome team in the lobby, or let us know you're coming.
                </p>
                <button className="bg-white text-gold-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center">
                  <span>Plan Your Visit</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </button>
              </div>
            </div>
          </div>

          {/* Right side - Location & Welcome */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="space-y-8">
              {/* Location */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-navy-900 mb-6 flex items-center">
                  <MapPin className="h-6 w-6 mr-3 text-gold-500" />
                  Find Us
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-navy-900">Ashburton Baptist Church</h4>
                    <p className="text-gray-600">123 Faith Street, Auckland 1010</p>
                  </div>
                  
                  <div className="space-y-2">
                    <h5 className="font-medium text-navy-900">Parking</h5>
                    <p className="text-gray-600">Free parking available on-site and street parking nearby</p>
                  </div>
                  
                  <div className="space-y-2">
                    <h5 className="font-medium text-navy-900">Public Transport</h5>
                    <p className="text-gray-600">10-minute walk from Britomart Station, bus routes 70, 75, 76</p>
                  </div>
                </div>

                <button className="mt-6 w-full bg-gradient-to-r from-navy-600 to-navy-700 text-white py-3 rounded-xl font-semibold hover:from-navy-700 hover:to-navy-800 transition-all duration-300 flex items-center justify-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  Get Directions
                </button>
              </div>

              {/* Welcome Features */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-navy-900 mb-6">What to Expect</h3>
                
                <div className="space-y-6">
                  {welcomeFeatures.map((feature) => (
                    <div key={feature.title} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-navy-900 mb-1">{feature.title}</h4>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs; 