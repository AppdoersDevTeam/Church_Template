import React from 'react';
import { Heart, MapPin, Phone, Mail, Facebook, Instagram, Youtube, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Events', href: '#events' },
    { name: 'Connect', href: '#connect' },
    { name: 'Give Online', href: '#' },
    { name: 'Prayer Requests', href: '#' }
  ];

  const ministries = [
    { name: 'Children\'s Ministry', href: '#' },
    { name: 'Youth Ministry', href: '#' },
    { name: 'Young Adults', href: '#' },
    { name: 'Small Groups', href: '#' },
    { name: 'Worship Team', href: '#' },
    { name: 'Community Outreach', href: '#' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-400' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-400' },
    { name: 'YouTube', icon: Youtube, href: '#', color: 'hover:text-red-400' }
  ];

  return (
    <footer className="bg-gradient-to-br from-navy-900 via-navy-800 to-teal-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold-500 rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-400 rounded-full opacity-5 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main footer content */}
        <div className="py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Church info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Heart className="h-8 w-8 text-gold-400" />
              <span className="text-2xl font-bold">Ashburton Baptist Church</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              A place where faith meets community, and every person matters. 
              Join us as we grow together in love, hope, and purpose.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <MapPin className="h-5 w-5 mr-3 text-gold-400 flex-shrink-0" />
                <span>284 Havelock Street, Ashburton 7700</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-5 w-5 mr-3 text-gold-400 flex-shrink-0" />
                <span>+64 3 308 1234</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 mr-3 text-gold-400 flex-shrink-0" />
                <span>hello@ashburtonbaptist.co.nz</span>
              </div>
            </div>
          </div>

          {/* Service times */}
          <div>
            <h3 className="text-xl font-bold mb-6">Service Times</h3>
            <div className="space-y-4">
              <div className="bg-white bg-opacity-10 rounded-lg p-4 border border-white border-opacity-20">
                <div className="flex items-center mb-2">
                  <Clock className="h-4 w-4 mr-2 text-gold-400" />
                  <span className="font-semibold">Sunday Worship</span>
                </div>
                <p className="text-gray-300 text-sm">9:00 AM & 11:00 AM</p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-4 border border-white border-opacity-20">
                <div className="flex items-center mb-2">
                  <Clock className="h-4 w-4 mr-2 text-gold-400" />
                  <span className="font-semibold">Family Service</span>
                </div>
                <p className="text-gray-300 text-sm">1st Sunday, 5:00 PM</p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-4 border border-white border-opacity-20">
                <div className="flex items-center mb-2">
                  <Clock className="h-4 w-4 mr-2 text-gold-400" />
                  <span className="font-semibold">Online Service</span>
                </div>
                <p className="text-gray-300 text-sm">Live & On-Demand</p>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-gold-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ministries */}
          <div>
            <h3 className="text-xl font-bold mb-6">Ministries</h3>
            <ul className="space-y-3">
              {ministries.map((ministry) => (
                <li key={ministry.name}>
                  <a
                    href={ministry.href}
                    className="text-gray-300 hover:text-gold-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {ministry.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-white border-opacity-20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social links */}
            <div className="flex items-center space-x-6">
              <span className="text-gray-300 text-sm">Follow us:</span>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`text-gray-300 ${social.color} transition-all duration-300 transform hover:scale-110`}
                  aria-label={social.name}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-gray-300 text-sm">
                © {currentYear} Ashburton Baptist Church. All rights reserved.
              </p>
              <p className="text-gray-400 text-xs mt-1">
                Made with ❤️ in New Zealand
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;