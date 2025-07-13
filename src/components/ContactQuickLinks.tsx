import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Clock, MessageCircle, ArrowRight, Users, Calendar, Heart, BookOpen } from 'lucide-react';

const ContactQuickLinks = () => {
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

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+64 3 555 0123",
      subtitle: "Main Office",
      action: "tel:+6435550123"
    },
    {
      icon: Mail,
      title: "Email",
              details: "info@ashburtonbaptist.co.nz",
      subtitle: "General Inquiries",
              action: "mailto:info@ashburtonbaptist.co.nz"
    },
    {
      icon: MapPin,
      title: "Address",
      details: "123 Church Street",
      subtitle: "Christchurch 8011, NZ",
      action: "#"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: "Mon-Fri: 9:00 AM - 5:00 PM",
      subtitle: "Sunday: 8:00 AM - 1:00 PM",
      action: "#"
    }
  ];

  const quickLinks = [
    {
      icon: Users,
      title: "About Us",
      description: "Learn about our church family and mission",
      link: "#about",
      color: "from-navy-600 to-teal-700"
    },
    {
      icon: Calendar,
      title: "Events",
      description: "See what's happening in our community",
      link: "#events",
      color: "from-gold-500 to-gold-600"
    },
    {
      icon: Heart,
      title: "Get Involved",
      description: "Find ways to serve and connect",
      link: "#services",
      color: "from-teal-600 to-teal-700"
    },
    {
      icon: BookOpen,
      title: "Resources",
      description: "Sermons, studies, and helpful materials",
      link: "#resources",
      color: "from-navy-600 to-navy-700"
    }
  ];

  return (
    <section id="contact-quick-links" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-teal-200 to-teal-300 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-gold-200 to-gold-300 rounded-full opacity-20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
            Connect{' '}
            <span className="bg-gradient-to-r from-gold-500 to-gold-600 bg-clip-text text-transparent">
              With Us
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We'd love to hear from you! Get in touch with us or explore our website to learn more about our church community.
          </p>
        </div>

        {/* Contact information */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-navy-900 text-center mb-12">
            Contact Details
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((contact, index) => (
              <div
                key={contact.title}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-navy-600 to-teal-700 rounded-2xl mx-auto flex items-center justify-center shadow-lg mb-4">
                    <contact.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-navy-900 mb-2">{contact.title}</h4>
                </div>
                
                <div className="text-center">
                  <p className="text-lg font-semibold text-navy-700 mb-1">{contact.details}</p>
                  <p className="text-sm text-gray-600 mb-4">{contact.subtitle}</p>
                  <a 
                    href={contact.action}
                    className="inline-flex items-center text-navy-600 hover:text-navy-700 font-semibold transition-colors"
                  >
                    {contact.title === "Phone" ? "Call Now" : 
                     contact.title === "Email" ? "Send Email" : 
                     contact.title === "Address" ? "Get Directions" : "View Hours"}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-navy-900 text-center mb-12">
            Quick Navigation
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickLinks.map((link, index) => (
              <div
                key={link.title}
                className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <div className="text-center mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${link.color} rounded-2xl mx-auto flex items-center justify-center shadow-lg mb-4 group-hover:shadow-xl transform group-hover:scale-110 transition-all duration-300`}>
                    <link.icon className="h-10 w-10 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-navy-900 mb-3">{link.title}</h4>
                </div>
                
                <p className="text-gray-600 leading-relaxed text-center mb-6">
                  {link.description}
                </p>
                
                <a 
                  href={link.link}
                  className="inline-flex items-center justify-center w-full bg-gradient-to-r from-navy-600 to-navy-700 text-white px-6 py-3 rounded-full font-semibold hover:from-navy-700 hover:to-navy-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Explore
                  <ArrowRight className="h-4 w-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Contact form section */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 delay-800 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <h3 className="text-3xl font-bold text-navy-900 mb-6">
                Send Us a Message
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Have a question, prayer request, or just want to say hello? We'd love to hear from you. Fill out the form and we'll get back to you as soon as possible.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <MessageCircle className="h-5 w-5 mr-3 text-navy-600" />
                  <span>We typically respond within 24 hours</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Heart className="h-5 w-5 mr-3 text-navy-600" />
                  <span>All inquiries are kept confidential</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="h-5 w-5 mr-3 text-navy-600" />
                  <span>Someone from our team will personally respond</span>
                </div>
              </div>
            </div>
            
            <div className={`transition-all duration-1000 delay-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-navy-900 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-navy-900 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-navy-900 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-navy-900 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all duration-300"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-navy-600 to-navy-700 text-white px-8 py-3 rounded-full font-semibold hover:from-navy-700 hover:to-navy-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className={`text-center transition-all duration-1000 delay-1200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-3xl font-bold text-navy-900 mb-6">
            We're Here for You
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you have questions about our church, need prayer, or want to get involved, we're here to help. Don't hesitate to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-navy-600 to-navy-700 text-white px-8 py-3 rounded-full font-semibold hover:from-navy-700 hover:to-navy-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Visit Us
            </button>
            <button className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-8 py-3 rounded-full font-semibold hover:from-gold-600 hover:to-gold-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Join Our Newsletter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactQuickLinks; 