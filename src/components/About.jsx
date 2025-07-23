import React from 'react';
import { FaUsers, FaChartLine, FaComments, FaHandshake, FaCertificate, FaGraduationCap, FaAward, FaUser, FaBriefcase, FaHeart, FaStar } from 'react-icons/fa';

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
      company: 'Wykonywanie procedur medycznych oraz Administrowanie dokumentacji personalnej',
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
    <section id="about" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        

        {/* Introduction Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary-100 to-primary-200 rounded-full mb-6">
              <FaUser className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-3xl font-bold text-secondary-900 mb-4">
              Kim jestem?
            </h3>
          </div>
          
          <div className="max-w-5xl mx-auto mb-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <FaGraduationCap className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-secondary-700 leading-relaxed text-center">
                  Rozwijam swoje kompetencje na <strong>studiach podyplomowych z analizy biznesowej</strong>. 
                  Posiadam podstawową wiedzę z zakresu zarządzania projektami oraz metodyk 
                  zwinnych <strong>Agile/Scrum</strong>, potwierdzoną certyfikatami.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-green-200 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <FaUsers className="w-6 h-6 text-green-600" />
                </div>
                <p className="text-secondary-700 leading-relaxed text-center">
                  Cechuje mnie <strong>dyscyplina, dobra organizacja pracy</strong> i umiejętność skutecznego 
                  zarządzania czasem w dynamicznym środowisku. Moje mocne strony według testu 
                  Gallupa to <strong>empatia, rozwijanie innych, odpowiedzialność</strong>.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-purple-200 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <FaChartLine className="w-6 h-6 text-purple-600" />
                </div>
                <p className="text-secondary-700 leading-relaxed text-center">
                  Łączę <strong>doświadczenie medyczne z pasją do HR</strong> i analizy biznesowej. 
                  Wierzę w systematyczne podejście oparte na <strong>danych i skutecznej komunikacji</strong> 
                  w budowaniu pozytywnego środowiska pracy.
                </p>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl">
              <h4 className="text-2xl font-bold text-secondary-900 mb-6 text-center">
                Narzędzia i technologie
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {skills.map((skill) => (
                  <div key={skill} className="bg-white text-primary-700 px-4 py-3 rounded-lg text-center font-medium shadow-sm hover:shadow-md transition-shadow duration-200">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
              <h4 className="text-2xl font-bold text-secondary-900 mb-6 text-center">
                Umiejętności miękkie
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {softSkills.map((skill) => (
                  <div key={skill} className="bg-white text-green-700 px-4 py-3 rounded-lg text-center font-medium shadow-sm hover:shadow-md transition-shadow duration-200">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full mb-6">
              <FaBriefcase className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-3xl font-bold text-secondary-900 mb-4">
              Moje doświadczenie
            </h3>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Poznaj moją ścieżkę zawodową i projekty, które kształtowały moje umiejętności
            </p>
          </div>
          
          <div className="space-y-8 max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h4 className="text-2xl font-bold text-secondary-900 mb-2">{exp.title}</h4>
                    <p className="text-primary-600 font-semibold text-lg">{exp.company}</p>
                  </div>
                  <span className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mt-4 lg:mt-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-secondary-600 text-lg leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Interests Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-pink-100 to-pink-200 rounded-full mb-6">
              <FaHeart className="w-8 h-8 text-pink-600" />
            </div>
            <h3 className="text-3xl font-bold text-secondary-900 mb-4">
              Moje pasje
            </h3>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Obszary, które napędzają moją motywację i rozwój zawodowy
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {interests.map((interest, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200 group">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                  <interest.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h4 className="text-xl font-bold text-secondary-900 mb-4">
                  {interest.title}
                </h4>
                <p className="text-secondary-600 leading-relaxed">
                  {interest.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Qualifications Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-full mb-6">
              <FaStar className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="text-3xl font-bold text-secondary-900 mb-4">
              Kwalifikacje i osiągnięcia
            </h3>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Moje wykształcenie, certyfikaty i mocne strony
            </p>
          </div>

          {/* Certificates */}
          <div className="mb-16">
            <h4 className="text-2xl font-bold text-secondary-900 mb-8 text-center">
              Certyfikaty
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {certificates.map((cert, index) => (
                <div key={index} className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl border border-primary-200 hover:shadow-lg transition-all duration-200 hover:scale-105">
                  <div className="flex items-center mb-4">
                    <FaCertificate className="text-2xl text-primary-600 mr-3" />
                    <h5 className="text-lg font-semibold text-secondary-900">Certyfikat</h5>
                  </div>
                  <p className="text-secondary-700 font-medium">{cert}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education and Gallup */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Education */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-8">
                <FaGraduationCap className="text-3xl text-primary-600 mr-4" />
                <h4 className="text-2xl font-bold text-secondary-900">Wykształcenie</h4>
              </div>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-primary-200 pl-6 hover:border-primary-400 transition-colors duration-200">
                    <h5 className="font-bold text-secondary-900 text-lg">{edu.title}</h5>
                    <p className="text-secondary-600 font-medium">{edu.institution}</p>
                    <p className="text-secondary-500">{edu.period}</p>
                    <span className={`inline-block px-3 py-1 text-sm rounded-full mt-2 font-medium ${
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
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-8">
                <FaAward className="text-3xl text-primary-600 mr-4" />
                <h4 className="text-2xl font-bold text-secondary-900">Test Gallupa</h4>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {gallupStrengths.map((strength, index) => (
                  <div key={index} className="bg-primary-50 text-primary-700 px-4 py-3 rounded-lg font-semibold text-center hover:bg-primary-100 transition-colors duration-200">
                    {strength}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 