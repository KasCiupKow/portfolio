import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaExternalLinkAlt, FaReact, FaNodeJs, FaDatabase, FaCode, FaEnvelope, FaFileAlt, FaCalendar, FaUsers, FaChartBar } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb } from 'react-icons/si';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const navigate = useNavigate();

  const openProject = (projectId) => {
    navigate(`/projekt/${projectId}`);
  };

  const projects = [
    {
      id: 1,
      title: 'Plan Komunikacji Wewnętrznej "Tydzień Dobrego Samopoczucia"',
      description: 'Kompleksowa kampania komunikacyjna dla fikcyjnej inicjatywy firmowej. Projekt obejmował planowanie, tworzenie materiałów i harmonogram komunikacji dla wszystkich pracowników.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      technologies: ['Canva', 'Google Docs', 'Microsoft Excel', 'Google Forms'],
      category: 'komunikacja',
      duration: '2 tygodnie',
      tools: ['Canva', 'Google Docs', 'Microsoft Excel', 'Google Forms'],
      github: '#',
      live: '#',
      featured: true,
      detailedContent: [
        {
          title: 'Cel projektu',
          type: 'text',
          icon: FaFileAlt,
          content: 'Zaplanowanie i stworzenie materiałów komunikacyjnych dla fikcyjnej inicjatywy firmowej "Tydzień Dobrego Samopoczucia" (Wellness Week).'
        },
        {
          title: 'Moje działania',
          type: 'list',
          icon: FaUsers,
          items: [
            'Określenie grupy docelowej (wszyscy pracownicy) i kluczowych kanałów komunikacji',
            'Napisanie treści maila do managerów',
            'Napisanie treści maila zapowiadającego wydarzenie',
            'Zaprojektowanie prostego, przyciągającego wzrok plakatu w Canvie',
            'Przygotowanie harmonogramu komunikacji (kiedy i co publikujemy)',
            'Stworzenie ankiety oceny wyzwania firmowego'
          ]
        },
        {
          title: 'Harmonogram komunikacyjny',
          type: 'table',
          icon: FaCalendar,
          headers: ['Data', 'Kanał', 'Treść', 'Grupa docelowa'],
          rows: [
            ['Poniedziałek', 'Email', 'Mail do managerów - briefing', 'Kadra kierownicza'],
            ['Wtorek', 'Email + Plakaty', 'Ogłoszenie inicjatywy', 'Wszyscy pracownicy'],
            ['Środa', 'Plakaty', 'Przypomnienie o wydarzeniach', 'Wszyscy pracownicy'],
            ['Czwartek', 'Email', 'Zaproszenie na webinar', 'Wszyscy pracownicy'],
            ['Piątek', 'Google Forms', 'Ankieta ewaluacyjna', 'Uczestnicy']
          ]
        }
      ],
      results: [
        'Gotowe do użycia szablony komunikacyjne',
        'Kompleksowy plan komunikacji na 5 dni',
        'Materiały wizualne (plakaty) w 2 wersjach',
        'Ankieta ewaluacyjna z 8 pytaniami',
        'Harmonogram publikacji z dokładnymi terminami'
      ]
    },
    {
      id: 2,
      title: 'Analiza Potrzeb Rozwojowych Zespołu',
      description: 'Przeprowadzenie badania potrzeb rozwojowych w 11-osobowym zespole. Projekt obejmował ankietę, analizę danych, wizualizacje i rekomendacje szkoleniowe.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      technologies: ['Google Forms', 'Microsoft Excel', 'Analiza danych'],
      category: 'analiza',
      duration: '3 tygodnie',
      tools: ['Microsoft Excel', 'Google Forms', 'Google Sheets'],
      github: '#',
      live: '#',
      featured: true,
      detailedContent: [
        {
          title: 'Cel projektu',
          type: 'text',
          icon: FaFileAlt,
          content: 'Identyfikacja kluczowych potrzeb rozwojowych w 11-osobowym zespole poprzez przeprowadzenie ankiety. Zebrane dane posłużyły do analizy obecnego stanu kompetencji, barier rozwojowych oraz ogólnego samopoczucia w pracy.'
        },
        {
          title: 'Metodologia',
          type: 'text',
          icon: FaChartBar,
          content: 'Przeprowadzono anonimową ankietę online za pośrednictwem Google Forms, skierowaną do 11 fikcyjnych członków zespołu. Ankieta zawierała 7 pytań otwartych i zamkniętych. Dane zostały zebrane i przeanalizowane w Google Sheets, a wizualizacje wykonano w Microsoft Excel.'
        },
        {
          title: 'Główne wnioski',
          type: 'list',
          icon: FaUsers,
          items: [
            'Potrzeba wzmocnienia wiedzy produktowej u nowych pracowników (6 osób)',
            'Niskie/średnie kompetencje w Excelu (5 osób ocena 2, 1 osoba ocena 3)',
            'Brak czasu na szkolenia jako główna bariera rozwojowa (7 osób)',
            'Problemy z jasnością procesów u doświadczonych pracowników',
            'Niewystarczająca wiedza produktowa wpływa na poczucie niepewności w pracy'
          ]
        },
        {
          title: 'Rekomendacje',
          type: 'list',
          icon: FaFileAlt,
          items: [
            'Wzmocnienie procesu onboardingu - moduł szkoleniowy z wiedzy produktowej',
            'Obowiązkowe szkolenie z podstaw MS Excel dla nowych pracowników',
            'Wdrożenie mikro-szkoleń (30-60 min) dostępnych na żądanie',
            'Warsztaty dla menedżerów w zakresie precyzowania oczekiwań',
            'Regularne newslettery o zmianach w procedurach'
          ]
        }
      ],
      results: [
        '100% wskaźnik odpowiedzi na ankietę (11/11)',
        '7 szczegółowych wykresów analitycznych',
        '5 konkretnych rekomendacji rozwojowych',
        'Identyfikacja 3 kluczowych obszarów do poprawy',
        'Plan działań na najbliższe 6 miesięcy'
      ]
    },
    {
      id: 3,
      title: 'Program Onboardingowy "Start"',
      description: 'Zaprojektowanie 4-tygodniowego planu wdrożenia dla nowego pracownika na stanowisku Młodszy Specjalista ds. Marketingu. Obejmuje checklisy, harmonogram i materiały wspierające.',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop',
      technologies: ['Canva', 'Google Docs', 'Projektowanie procesów'],
      category: 'onboarding',
      duration: '1 miesiąc',
      tools: ['Canva', 'Google Docs', 'Microsoft Word'],
      github: '#',
      live: '#',
      featured: true,
      detailedContent: [
        {
          title: 'Cel projektu',
          type: 'text',
          icon: FaFileAlt,
          content: 'Zaprojektowanie 4-tygodniowego planu wdrożenia dla nowego pracownika na stanowisku "Młodszy Specjalista ds. Marketingu", aby skrócić czas adaptacji i zwiększyć jego zaangażowanie od pierwszego dnia.'
        },
        {
          title: 'Moje działania',
          type: 'list',
          icon: FaUsers,
          items: [
            'Przeprowadzenie research dotyczącego najlepszych praktyk onboardingowych',
            'Stworzenie szczegółowej checklisty zadań na pierwszy dzień',
            'Zaprojektowanie harmonogramu spotkań z kluczowymi osobami w firmie',
            'Opracowanie pomysłu na "Welcome Pack" (pakiet powitalny)',
            'Przygotowanie szablonów komunikacyjnych (maile powitalne)',
            'Stworzenie checklisty dla nowego pracownika'
          ]
        },
        {
          title: 'Checklista - Pierwszy dzień',
          type: 'list',
          icon: FaCalendar,
          items: [
            'Przygotowanie stanowiska pracy (sprzęt, materiały biurowe)',
            'Sprawdzenie dostępności oprogramowania (MS Office, komunikatory)',
            'Przekazanie Welcome Pack (torba, kubek, list powitalny)',
            'Powitanie nowego pracownika o godz. 10:00',
            'Oprowadzenie po biurze (toaleta, wyjścia ewakuacyjne, kuchnia)',
            'Wstępna rozmowa o roli i oczekiwaniach',
            'Zapoznanie z Buddy o godz. 12:00',
            'Udział w lunchu integracyjnym z zespołem'
          ]
        }
      ],
      results: [
        'Gotowy do wdrożenia 4-tygodniowy plan onboardingu',
        'Szczegółowa checklista na pierwszy dzień (8 punktów)',
        'Szablony komunikacyjne dla HR i managera',
        'Koncepcja Welcome Pack z konkretnym wyposażeniem',
        'Harmonogram spotkań z kluczowymi osobami',
        'Materiały w formie przejrzystej prezentacji PDF'
      ]
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
            <div key={project.id} className="card group overflow-hidden flex flex-col">
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

                {/* Quick View Button */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => openProject(project.id)}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-secondary-700 hover:text-primary-600 transition-colors duration-200"
                    aria-label="Zobacz szczegóły"
                  >
                    <FaExternalLinkAlt className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Project Content */}
              <div className="flex flex-col flex-grow">
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
                <div className="mt-auto">
                  <button
                    onClick={() => openProject(project.id)}
                    className="flex items-center gap-2 text-secondary-600 hover:text-primary-600 font-medium transition-colors duration-200"
                  >
                    <FaFileAlt className="w-4 h-4" />
                    Zobacz szczegóły
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 