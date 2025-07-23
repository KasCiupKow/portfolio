import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';

const Contact = () => {

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'katarzyna.kownacka7@gmail.com',
      href: 'mailto:katarzyna.kownacka7@gmail.com'
    },
    {
      icon: FaPhone,
      title: 'Telefon',
      value: '+48 733 717 100',
      href: 'tel:+48733717100'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Lokalizacja',
      value: 'Łódź, Polska',
      href: null
    }
  ];

  const socialLinks = [
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/katarzyna-ciupek-kownacka-398a4a257/', label: 'LinkedIn' },
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
            Skontaktuj się ze mną
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Szukasz wsparcia w projektach HR? Chętnie porozmawiam o możliwościach współpracy w obszarze komunikacji wewnętrznej i procesów personalnych!
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 text-center group">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-100 to-primary-200 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-200">
                <info.icon className="w-6 h-6 text-primary-600" />
              </div>
              <h4 className="text-lg font-bold text-secondary-900 mb-2">{info.title}</h4>
                      {info.href ? (
                        <a
                          href={info.href}
                  className="text-base text-secondary-600 hover:text-primary-600 transition-colors duration-200 font-medium"
                        >
                          {info.value}
                        </a>
                      ) : (
                <p className="text-base text-secondary-600 font-medium">{info.value}</p>
                      )}
                  </div>
                ))}
            </div>

        {/* Bottom Section */}
        <div className="grid lg:grid-cols-2 gap-8">
            {/* Social Links */}
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl text-center">
            <h3 className="text-xl font-bold text-secondary-900 mb-4">
                Znajdź mnie w sieci
              </h3>
            <p className="text-secondary-600 mb-6 text-sm">
              Śledź moje aktualności zawodowe i nawiąż kontakt przez LinkedIn
            </p>
            <div className="flex justify-center">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-white text-primary-600 rounded-lg font-medium hover:bg-primary-600 hover:text-white transition-all duration-200 shadow-sm hover:shadow-md group text-sm"
                    aria-label={social.label}
                  >
                  <social.icon className="w-4 h-4 mr-2 group-hover:scale-105 transition-transform duration-200" />
                  Sprawdź mój {social.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-green-200 rounded-xl flex items-center justify-center mx-auto mb-4">
              <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            <h4 className="text-xl font-bold text-secondary-900 mb-3">
                Dostępność
              </h4>
            <p className="text-secondary-600 mb-4 text-sm leading-relaxed">
                Jestem dostępna do nowych projektów i współpracy. 
                Odpowiadam na wiadomości w ciągu 24 godzin.
              </p>
            <div className="inline-flex items-center px-3 py-1 bg-white rounded-full shadow-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
              <span className="text-green-600 font-medium text-sm">Dostępna do projektów</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 