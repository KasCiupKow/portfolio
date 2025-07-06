import React from 'react';
import { FaUsers, FaChartLine, FaComments, FaHandshake } from 'react-icons/fa';

const About = () => {
  const skills = [
    { name: 'Canva', level: 90 },
    { name: 'Microsoft Excel', level: 85 },
    { name: 'Google Forms', level: 90 },
    { name: 'Google Docs', level: 95 },
    { name: 'Komunikacja wewnętrzna', level: 85 },
    { name: 'Analiza danych HR', level: 80 },
  ];

  const experiences = [
    {
      title: 'Praktyki HR',
      company: 'Firma Consulting Plus',
      period: '2024 - 6 miesięcy',
      description: 'Wsparcie w procesach rekrutacyjnych, tworzenie materiałów komunikacyjnych i analiza potrzeb szkoleniowych.'
    },
    {
      title: 'Projekt studencki',
      company: 'Uniwersytet Ekonomiczny',
      period: '2023 - 2024',
      description: 'Opracowanie kompleksowego programu onboardingowego dla średnich przedsiębiorstw.'
    },
    {
      title: 'Wolontariat',
      company: 'Fundacja Rozwoju Kariery',
      period: '2022 - 2023',
      description: 'Prowadzenie warsztatów z zakresu komunikacji interpersonalnej i rozwoju osobistego.'
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
                Jestem absolwentką kierunku Zarządzanie Zasobami Ludzkimi z pasją do tworzenia 
                pozytywnego środowiska pracy. Specjalizuję się w komunikacji wewnętrznej, 
                procesach onboardingowych i analizie potrzeb rozwojowych.
              </p>
              <p>
                Moja podróż w świecie HR rozpoczęła się podczas studiów, gdzie odkryłam fascynację 
                psychologią organizacji i wpływem dobrze zaprojektowanych procesów personalnych 
                na satysfakcję pracowników.
              </p>
              <p>
                Wierzę w siłę danych i systematycznego podejścia do HR. Tworzę rozwiązania, 
                które są nie tylko praktyczne, ale także oparte na rzeczywistych potrzebach 
                organizacji i jej pracowników.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">3</div>
                <div className="text-sm text-secondary-500">Zrealizowane projekty HR</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">11</div>
                <div className="text-sm text-secondary-500">Przebadanych pracowników</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">100%</div>
                <div className="text-sm text-secondary-500">Zaangażowanie w projekty</div>
              </div>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div>
            <h3 className="text-2xl font-bold text-secondary-900 mb-6">
              Narzędzia HR
            </h3>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-secondary-700">{skill.name}</span>
                    <span className="text-sm text-secondary-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-secondary-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
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
        <div>
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
      </div>
    </section>
  );
};

export default About; 