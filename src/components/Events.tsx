import React, { useEffect, useRef, useState } from 'react';
import { Calendar, Clock, MapPin, Users, ArrowRight, Heart, Coffee, BookOpen } from 'lucide-react';

const Events = () => {
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

  const events = [
    {
      id: 1,
      title: "Community Outreach Day",
      date: "March 15, 2025",
      time: "9:00 AM - 4:00 PM",
      location: "Central Ashburton",
      description: "Join us as we serve our local community with love and compassion.",
      attendees: 85,
      category: "Outreach",
      icon: Heart,
      color: "from-coral-500 to-coral-600"
    },
    {
      id: 2,
      title: "Young Adults Coffee & Connect",
      date: "March 18, 2025",
      time: "7:00 PM - 9:00 PM",
      location: "Church Café",
      description: "Casual evening for young adults to connect, share, and build friendships.",
      attendees: 32,
      category: "Fellowship",
      icon: Coffee,
      color: "from-teal-500 to-teal-600"
    },
    {
      id: 3,
      title: "Bible Study: Book of Acts",
      date: "March 20, 2025",
      time: "7:00 PM - 8:30 PM",
      location: "Main Sanctuary",
      description: "Deep dive into the early church and God's power in action.",
      attendees: 67,
      category: "Study",
      icon: BookOpen,
      color: "from-navy-500 to-navy-600"
    }
  ];

  return (
    <section id="events" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-coral-200 to-coral-300 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-navy-200 to-navy-300 rounded-full opacity-20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
            Upcoming{' '}
            <span className="bg-gradient-to-r from-coral-500 to-coral-600 bg-clip-text text-transparent">
              Events
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Connect, grow, and serve together through our various community events and gatherings.
          </p>
        </div>

        {/* Events grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {events.map((event, index) => (
            <div
              key={event.id}
              className={`group cursor-pointer transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${300 + index * 200}ms` }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 hover:transform hover:scale-105 transition-all duration-300 h-full">
                {/* Event header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-br ${event.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <event.icon className="h-7 w-7 text-white" />
                  </div>
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                    {event.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-coral-600 transition-colors duration-300">
                  {event.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {event.description}
                </p>

                {/* Event details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-3 text-coral-500" />
                    <span className="font-medium">{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-3 text-coral-500" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-3 text-coral-500" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-4 w-4 mr-3 text-coral-500" />
                    <span>{event.attendees} attending</span>
                  </div>
                </div>

                {/* RSVP button */}
                <button className="w-full bg-gradient-to-r from-coral-500 to-coral-600 text-white py-3 rounded-xl font-semibold hover:from-coral-600 hover:to-coral-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 group">
                  <span>RSVP Now</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View all events button */}
        <div className={`text-center transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <button className="bg-gradient-to-r from-navy-600 to-navy-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-navy-700 hover:to-navy-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2 mx-auto">
            <Calendar className="h-5 w-5" />
            <span>View All Events</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;