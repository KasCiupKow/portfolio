import React from 'react';
import { FaUsers, FaChartLine, FaComments, FaHandshake, FaCertificate, FaGraduationCap, FaAward } from 'react-icons/fa';

const About = () => {
  const skills = [
    'Canva',
    'Microsoft Excel',
    'Google Forms',
    'Google Docs',
    'BPMN',
    'Scrum & Agile',
    'ChatGPT, Gemini & AI Tools',
  ];

  const softSkills = [
    'Komunikatywność',
    'Organizacja pracy',
    'Praca zespołowa',
    'Empatia',
    'Odpowiedzialność',
    'Zarządzanie czasem',
  ];

  const experiences = [
    {
      title: 'Prywatna Przychodnia Salve',
      company: 'Administrowanie dokumentacją personalną',
      period: 'wrzesień 2024 r. - aktualnie',
      description: 'Administrowanie dokumentacją personalną z dbałością i zgodności z RODO. Bieżąca współpraca i wsparcie personelu medycznego w zakresie organizacji pracy.'
    },
    {
      title: 'Kelnerka / Pomoc managera',
      company: 'Branża gastronomiczna',
      period: '2018 - 2024 r.',
      description: 'Obsługa klienta i zarządzanie czasem w dynamicznym środowisku. Onboarding nowych członków zespołu. Rozwijanie umiejętności komunikacyjnych i rozwiązywania problemów.'
    },
    {
      title: 'Projekty studenckie',
      company: 'Uniwersytet Medyczny',
      period: '2021 - 2024',
      description: 'Organizacja wyjazdów koła naukowego. Publikacja artykułu w gazecie studenckiej. Współorganizowanie konferencji naukowej.'
    },
  ];

  const interests = [
    {
      icon: FaUsers,
      title: 'Rozwój pracowników',
      description: 'Pasjonuje mnie wspieranie ludzi w ich rozwoju zawodowym i osobistym.'
    },
    {
      icon: FaChartLine,
      title: 'Analiza danych HR',
      description: 'Uwielbiam odkrywać wzorce w danych i przekładać je na działania.'
    },
    {
      icon: FaComments,
      title: 'Komunikacja',
      description: 'Tworzę skuteczne strategie komunikacji wewnętrznej.'
    },
    {
      icon: FaHandshake,
      title: 'Budowanie kultury',
      description: 'Pomagam organizacjom tworzyć pozytywne środowisko pracy.'
    },
  ];

  const certificates = [
    'Zarządzanie projektami dla początkujących',
    'Podstawy Scrum i Agile – teoria i praktyka',
    'Microsoft Excel – kluczowe zagadnienia',
    'Business Process Model and Notation (BPMN)',
    'Podstawy AI w biznesie'
  ];

  const education = [
    {
      title: 'Studia podyplomowe - Analiza biznesowa',
      institution: 'Uniwersytet',
      period: 'aktualnie',
      status: 'W trakcie'
    },
    {
      title: 'Położnictwo I stopnia',
      institution: 'Uniwersytet Medyczny w Białymstoku',
      period: '2021-2024 r.',
      status: 'Ukończone'
    },
    {
      title: 'Technik organizacji reklamy',
      institution: 'Szkoła średnia',
      period: '2017 - 2021 r.',
      status: 'Ukończone'
    }
  ];

  const gallupStrengths = [
    'Empatia', 'Rozwijanie innych', 'Odpowiedzialność', 
    'Dyscyplina', 'Naprawianie', 'Organizator'
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
            O <span className="gradient-text">mnie</span>
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Jestem pasjonatką HR z doświadczeniem w projektowaniu procesów personalnych i budowaniu pozytywnego środowiska pracy.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Text */}
          <div>
            <h3 className="text-2xl font-bold text-secondary-900 mb-6">
              Kim jestem?
            </h3>
            <div className="space-y-4 text-secondary-600">
              <p>
                Rozwijam swoje kompetencje na studiach podyplomowych z analizy biznesowej. 
                Posiadam podstawową wiedzę z zakresu zarządzania projektami oraz metodyk 
                zwinnych Agile/Scrum, potwierdzoną certyfikatami.
              </p>
              <p>
                Cechuje mnie dyscyplina, dobra organizacja pracy i umiejętność skutecznego 
                zarządzania czasem w dynamicznym środowisku. Moje mocne strony według testu 
                Gallupa to empatia, rozwijanie innych, odpowiedzialność i umiejętność naprawiania.
              </p>
              <p>
                Łączę doświadczenie medyczne z pasją do HR i analizy biznesowej. 
                Wierzę w systematyczne podejście oparte na danych i skutecznej komunikacji 
                w budowaniu pozytywnego środowiska pracy.
              </p>
            </div>


          </div>

          {/* Right Column - Skills */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-6">
                Narzędzia i technologie
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill) => (
                  <div key={skill} className="bg-primary-50 text-primary-700 px-4 py-2 rounded-lg text-sm font-medium text-center">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-6">
                Umiejętności miękkie
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {softSkills.map((skill) => (
                  <div key={skill} className="bg-green-50 text-green-700 px-4 py-2 rounded-lg text-sm font-medium text-center">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-secondary-900 mb-8 text-center">
            Doświadczenie zawodowe
          </h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="card">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-secondary-900">{exp.title}</h4>
                    <p className="text-primary-600 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-secondary-500 text-sm md:text-base">{exp.period}</span>
                </div>
                <p className="text-secondary-600">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Interests Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-secondary-900 mb-8 text-center">
            Moje zainteresowania
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <div key={index} className="card text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <interest.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h4 className="text-lg font-semibold text-secondary-900 mb-2">
                  {interest.title}
                </h4>
                <p className="text-secondary-600 text-sm">
                  {interest.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates Section - Prominent */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-secondary-900 mb-8 text-center">
            Certyfikaty i kwalifikacje
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <div key={index} className="bg-gradient-to-r from-primary-50 to-primary-100 p-6 rounded-lg border border-primary-200 hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-center mb-4">
                  <FaCertificate className="text-2xl text-primary-600 mr-3" />
                  <h4 className="text-lg font-semibold text-secondary-900">Certyfikat</h4>
                </div>
                <p className="text-secondary-700 font-medium">{cert}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education and Gallup Strengths */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <FaGraduationCap className="text-2xl text-primary-600 mr-3" />
              <h3 className="text-xl font-bold text-secondary-900">Wykształcenie</h3>
            </div>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="border-l-4 border-primary-200 pl-4">
                  <h4 className="font-semibold text-secondary-900">{edu.title}</h4>
                  <p className="text-sm text-secondary-600">{edu.institution}</p>
                  <p className="text-sm text-secondary-500">{edu.period}</p>
                  <span className={`inline-block px-2 py-1 text-xs rounded-full mt-1 ${
                    edu.status === 'W trakcie' 
                      ? 'bg-yellow-100 text-yellow-800' 
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {edu.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Gallup Strengths */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-6">
              <FaAward className="text-2xl text-primary-600 mr-3" />
              <h3 className="text-xl font-bold text-secondary-900">Test Gallupa</h3>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {gallupStrengths.map((strength, index) => (
                <div key={index} className="bg-primary-50 text-primary-700 px-3 py-2 rounded-md text-sm font-medium text-center">
                  {strength}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 