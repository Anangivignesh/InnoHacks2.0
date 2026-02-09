import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Code2, Mail, MapPin, Phone, 
  Twitter, Linkedin, Instagram, Github, Youtube 
} from 'lucide-react';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Schedule', path: '/schedule' },
  { name: 'Tracks', path: '/tracks' },
  { name: 'Sponsors', path: '/sponsors' },
  { name: 'Contact', path: '/contact' },
];

const resources = [
  { name: 'Code of Conduct', path: '#' },
  { name: 'Privacy Policy', path: '#' },
  { name: 'Terms of Service', path: '#' },
  { name: 'FAQs', path: '#' },
  { name: 'Support', path: '#' },
];

const socialLinks = [
  { name: 'Twitter', icon: Twitter, url: '#' },
  { name: 'LinkedIn', icon: Linkedin, url: '#' },
  { name: 'Instagram', icon: Instagram, url: '#' },
  { name: 'GitHub', icon: Github, url: '#' },
  { name: 'YouTube', icon: Youtube, url: '#' },
];

const Footer = () => {
  return (
    <footer className="relative bg-dark-900 border-t border-white/5">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-neon-cyan/5 to-transparent pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-lg blur-lg opacity-50" />
                <div className="relative bg-dark-900 rounded-lg p-2">
                  <Code2 className="w-6 h-6 text-neon-cyan" />
                </div>
              </div>
              <span className="text-xl font-bold text-gradient">
                InnoHacks 2.0
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              India's premier inter-college hackathon. Join 500+ innovators for 24 hours of coding, creativity, and collaboration.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-neon-cyan transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-neon-cyan transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-neon-cyan flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Tech University Campus,<br />
                  Innovation Hub, Block C,<br />
                  Bangalore, India - 560001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-neon-cyan flex-shrink-0" />
                <a 
                  href="mailto:hello@innohacks.tech"
                  className="text-gray-400 hover:text-neon-cyan transition-colors text-sm"
                >
                  hello@innohacks.tech
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-neon-cyan flex-shrink-0" />
                <a 
                  href="tel:+919876543210"
                  className="text-gray-400 hover:text-neon-cyan transition-colors text-sm"
                >
                  +91 98765 43210
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} InnoHacks 2.0. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Made with <span className="text-red-500">♥</span> by the InnoHacks Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
