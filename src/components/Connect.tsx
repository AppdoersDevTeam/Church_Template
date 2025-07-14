import React, { useEffect, useRef, useState } from 'react';
import { MessageCircle, Mail, Phone, Send, User, Heart } from 'lucide-react';

const Connect = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    interest: 'general'
  });
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      interest: 'general'
    });
  };

  const connectOptions = [
    {
      title: "Prayer Request",
      description: "Share your prayer needs with our caring team",
      icon: Heart,
      color: "from-coral-500 to-coral-600"
    },
    {
      title: "New Here?",
      description: "Let us welcome you and help you get connected",
      icon: User,
      color: "from-teal-500 to-teal-600"
    },
    {
      title: "Get Involved",
      description: "Discover volunteer opportunities and ministries",
      icon: MessageCircle,
      color: "from-gold-500 to-gold-600"
    }
  ];

  return (
    <section id="connect" ref={sectionRef} className="py-20 bg-gradient-to-br from-navy-900 via-navy-800 to-teal-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-gold-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-coral-500 rounded-full opacity-10 blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Let's{' '}
            <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We'd love to hear from you! Whether you're new, have questions, or want to get involved, 
            we're here to help you take your next step.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Connect options */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <h3 className="text-2xl font-bold text-white mb-8">How can we help you?</h3>
            
            <div className="space-y-6 mb-8">
              {connectOptions.map((option, index) => (
                <div
                  key={option.title}
                  className="group bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${option.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <option.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">{option.title}</h4>
                      <p className="text-gray-300">{option.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Get in Touch</h4>
              <div className="flex items-center text-gray-300">
                <Phone className="h-5 w-5 mr-3 text-gold-400" />
                <span>+64 9 123 4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 mr-3 text-gold-400" />
                <span>hello@gracecommunity.nz</span>
              </div>
            </div>
          </div>

          {/* Right side - Contact form */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 border border-white border-opacity-20">
              <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-white text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all duration-300"
                    placeholder="+64 ..."
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-white text-sm font-medium mb-2">
                    I'm interested in
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all duration-300"
                  >
                    <option value="general">General Information</option>
                    <option value="visit">Planning a Visit</option>
                    <option value="volunteer">Volunteering</option>
                    <option value="prayer">Prayer Request</option>
                    <option value="groups">Small Groups</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all duration-300"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-white py-4 rounded-xl font-semibold hover:from-gold-600 hover:to-gold-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;