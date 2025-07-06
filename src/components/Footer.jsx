import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Portfolio': [
      { name: 'O mnie', href: '#about' },
      { name: 'Projekty', href: '#projects' },
      { name: 'Umiejętności', href: '#skills' },
      { name: 'Kontakt', href: '#contact' },
    ],
    'Projekty HR': [
      { name: 'Komunikacja wewnętrzna', href: '#projects' },
      { name: 'Analiza potrzeb rozwojowych', href: '#projects' },
      { name: 'Program onboardingowy', href: '#projects' },
      { name: 'Materiały komunikacyjne', href: '#projects' },
    ],
    'Narzędzia': [
      { name: 'Canva', href: '#projects' },
      { name: 'Google Forms', href: '#projects' },
      { name: 'Microsoft Excel', href: '#projects' },
      { name: 'Google Docs', href: '#projects' },
    ]
  };

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold gradient-text mb-4">
                Portfolio
              </h3>
              <p className="text-secondary-300 mb-6 leading-relaxed">
                HR Specialist specjalizująca się w komunikacji wewnętrznej i procesach personalnych. 
                Pasjonatka budowania pozytywnej kultury organizacyjnej.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center text-secondary-300 hover:bg-primary-600 hover:text-white transition-all duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-lg font-semibold text-white mb-4">
                  {category}
                </h4>
                <ul className="space-y-2">
                  {links.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-secondary-300 hover:text-primary-400 transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-secondary-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-secondary-300">
              <span>© {currentYear} Katarzyna Ciupek-Kownacka. Wszystkie prawa zastrzeżone.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Stworzone z</span>
              <FaHeart className="w-4 h-4 text-red-500" />
              <span className="hidden sm:inline">w Polsce</span>
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 bg-secondary-800 hover:bg-primary-600 text-secondary-300 hover:text-white px-4 py-2 rounded-lg transition-all duration-200"
              aria-label="Przewiń do góry"
            >
              <span className="text-sm font-medium">Do góry</span>
              <FaArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-primary-600"></div>
        <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary-600 rounded-full opacity-10"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary-700 rounded-full opacity-10"></div>
      </div>
    </footer>
  );
};

export default Footer; 