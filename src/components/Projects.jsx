import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaDatabase, FaCode } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb } from 'react-icons/si';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Plan Komunikacji Wewnętrznej "Tydzień Dobrego Samopoczucia"',
      description: 'Kompleksowa kampania komunikacyjna dla fikcyjnej inicjatywy firmowej. Projekt obejmował planowanie, tworzenie materiałów i harmonogram komunikacji dla wszystkich pracowników.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      technologies: ['Canva', 'Google Docs', 'Microsoft Excel', 'Google Forms'],
      category: 'komunikacja',
      github: '#',
      live: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Analiza Potrzeb Rozwojowych Zespołu',
      description: 'Przeprowadzenie badania potrzeb rozwojowych w 11-osobowym zespole. Projekt obejmował ankietę, analizę danych, wizualizacje i rekomendacje szkoleniowe.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      technologies: ['Google Forms', 'Microsoft Excel', 'Analiza danych'],
      category: 'analiza',
      github: '#',
      live: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Program Onboardingowy "Start"',
      description: 'Zaprojektowanie 4-tygodniowego planu wdrożenia dla nowego pracownika na stanowisku Młodszy Specjalista ds. Marketingu. Obejmuje checklisy, harmonogram i materiały wspierające.',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop',
      technologies: ['Canva', 'Google Docs', 'Projektowanie procesów'],
      category: 'onboarding',
      github: '#',
      live: '#',
      featured: true
    }
  ];

  const filters = [
    { id: 'all', name: 'Wszystkie' },
    { id: 'komunikacja', name: 'Komunikacja' },
    { id: 'analiza', name: 'Analiza danych' },
    { id: 'onboarding', name: 'Onboarding' }
  ];

  const getTechnologyIcon = (tech) => {
    const icons = {
      'React': FaReact,
      'Node.js': FaNodeJs,
      'MongoDB': FaDatabase,
      'TypeScript': SiTypescript,
      'Tailwind': SiTailwindcss,
      'PostgreSQL': FaDatabase
    };
    return icons[tech] || FaCode;
  };

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section-padding bg-secondary-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
            Moje <span className="gradient-text">projekty</span>
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Oto wybór moich projektów HR. Każdy z nich pokazuje praktyczne zastosowanie 
            wiedzy z zakresu komunikacji, analizy danych i projektowania procesów personalnych.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-secondary-600 hover:bg-primary-50 hover:text-primary-600 border border-secondary-200'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="card group overflow-hidden">
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Wyróżniony
                  </div>
                )}

                {/* Project Links */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-secondary-700 hover:text-primary-600 transition-colors duration-200"
                    aria-label="GitHub"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-secondary-700 hover:text-primary-600 transition-colors duration-200"
                    aria-label="Live Demo"
                  >
                    <FaExternalLinkAlt className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div>
                <h3 className="text-xl font-bold text-secondary-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-secondary-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary-100 text-secondary-700 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-secondary-600 hover:text-primary-600 font-medium transition-colors duration-200"
                  >
                    <FaGithub className="w-4 h-4" />
                    Kod źródłowy
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-secondary-600 hover:text-primary-600 font-medium transition-colors duration-200"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-lg text-secondary-600 mb-6">
            Interesuje Cię współpraca nad projektem?
          </p>
          <a
            href="#contact"
            className="btn-primary"
          >
            Skontaktuj się ze mną
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects; 