import React from 'react';
import { FaArrowDown, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Greeting */}
          <p className="text-primary-600 font-medium mb-4 animate-fade-in">
            👋 Witaj, jestem
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold text-secondary-900 mb-6 animate-slide-up">
            <span className="gradient-text">Katarzyna</span>
            <br />
            <span className="gradient-text">Ciupek-Kownacka</span>
          </h1>

          
          <br></br>


          {/* Description */}
          <p className="text-lg md:text-xl text-secondary-600 mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up">
          Łączę doświadczenie medyczne z HR i analizą biznesową. Rozwijam kompetencje w zarządzaniu projektami, metodykach Agile/Scrum oraz efektywnego zarządzania czasem w dynamicznym środowisku
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up">
            <button 
              onClick={() => scrollToSection('projects')}
              className="btn-primary"
            >
              Zobacz moje projekty
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-secondary"
            >
              Skontaktuj się ze mną
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12 animate-slide-up">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-500 hover:text-primary-600 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:katarzyna.kownacka7@gmail.com@gmail.com"
              className="text-secondary-500 hover:text-primary-600 transition-colors duration-200"
              aria-label="Email"
            >
              <FaEnvelope className="w-6 h-6" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <button
              onClick={() => scrollToSection('about')}
              className="text-secondary-400 hover:text-primary-600 transition-colors duration-200"
              aria-label="Przewiń w dół"
            >
              <FaArrowDown className="w-6 h-6 mx-auto" />
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero; 