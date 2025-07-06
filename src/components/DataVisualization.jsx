import React from 'react';
import { FaChartBar, FaTable, FaUsers, FaClock } from 'react-icons/fa';

const DataVisualization = () => {
  const chartData = [
    { skill: 'Excel - Podstawowy', employees: 5, percentage: 45 },
    { skill: 'Excel - Średniozaawansowany', employees: 4, percentage: 36 },
    { skill: 'Excel - Zaawansowany', employees: 2, percentage: 18 },
  ];

  const barrierData = [
    { barrier: 'Brak czasu na szkolenia', count: 7, percentage: 64 },
    { barrier: 'Niewystarczająca wiedza produktowa', count: 6, percentage: 55 },
    { barrier: 'Niejasne procedury', count: 2, percentage: 18 },
    { barrier: 'Zbyt dużo obowiązków', count: 2, percentage: 18 },
  ];

  const communicationSchedule = [
    { week: 'Tydzień -2', action: 'Mail do managerów', target: 'Kierownicy zespołów', status: 'Zaplanowane' },
    { week: 'Tydzień -1', action: 'Mail zapowiadający', target: 'Wszyscy pracownicy', status: 'Zaplanowane' },
    { week: 'Tydzień 0', action: 'Plakaty w biurze', target: 'Wszyscy pracownicy', status: 'Zaplanowane' },
    { week: 'Tydzień 1', action: 'Ankieta ewaluacyjna', target: 'Uczestnicy', status: 'Zaplanowane' },
  ];

  return (
    <section id="data-visualization" className="section-padding bg-secondary-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
            Wizualizacja <span className="gradient-text">danych HR</span>
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Przykłady analiz i wizualizacji danych z moich projektów HR
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Wykres umiejętności Excel */}
          <div className="card">
            <div className="flex items-center mb-6">
              <FaChartBar className="w-6 h-6 text-primary-600 mr-3" />
              <h3 className="text-xl font-bold text-secondary-900">
                Poziom znajomości MS Excel w zespole
              </h3>
            </div>
            <div className="space-y-4">
              {chartData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-secondary-700">{item.skill}</span>
                      <span className="text-sm text-secondary-500">{item.employees} osób ({item.percentage}%)</span>
                    </div>
                    <div className="w-full bg-secondary-200 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-3 rounded-full transition-all duration-1000"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 bg-primary-50 rounded-lg">
              <p className="text-sm text-primary-700">
                <strong>Wniosek:</strong> 81% zespołu wymaga szkoleń z zakresu Excel na poziomie podstawowym lub średniozaawansowanym.
              </p>
            </div>
          </div>

          {/* Wykres barier rozwojowych */}
          <div className="card">
            <div className="flex items-center mb-6">
              <FaClock className="w-6 h-6 text-primary-600 mr-3" />
              <h3 className="text-xl font-bold text-secondary-900">
                Główne bariery rozwoju zawodowego
              </h3>
            </div>
            <div className="space-y-4">
              {barrierData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-secondary-700">{item.barrier}</span>
                      <span className="text-sm text-secondary-500">{item.count} osób ({item.percentage}%)</span>
                    </div>
                    <div className="w-full bg-secondary-200 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-orange-400 to-orange-500 h-3 rounded-full transition-all duration-1000"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 bg-orange-50 rounded-lg">
              <p className="text-sm text-orange-700">
                <strong>Rekomendacja:</strong> Wdrożenie mikro-szkoleń (30-60 min) dostosowanych do harmonogramu pracy.
              </p>
            </div>
          </div>
        </div>

        {/* Harmonogram komunikacyjny */}
        <div className="card">
          <div className="flex items-center mb-6">
            <FaTable className="w-6 h-6 text-primary-600 mr-3" />
            <h3 className="text-xl font-bold text-secondary-900">
              Harmonogram komunikacji - "Tydzień Dobrego Samopoczucia"
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-secondary-200">
                  <th className="text-left py-3 px-4 font-semibold text-secondary-700">Okres</th>
                  <th className="text-left py-3 px-4 font-semibold text-secondary-700">Działanie</th>
                  <th className="text-left py-3 px-4 font-semibold text-secondary-700">Grupa docelowa</th>
                  <th className="text-left py-3 px-4 font-semibold text-secondary-700">Status</th>
                </tr>
              </thead>
              <tbody>
                {communicationSchedule.map((item, index) => (
                  <tr key={index} className="border-b border-secondary-100 hover:bg-secondary-50">
                    <td className="py-3 px-4 font-medium text-secondary-900">{item.week}</td>
                    <td className="py-3 px-4 text-secondary-700">{item.action}</td>
                    <td className="py-3 px-4 text-secondary-700">{item.target}</td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Kluczowe metryki */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="card text-center">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <FaUsers className="w-6 h-6 text-primary-600" />
            </div>
            <div className="text-3xl font-bold text-primary-600 mb-2">11</div>
            <div className="text-sm text-secondary-600">Przebadanych pracowników</div>
          </div>
          <div className="card text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <FaChartBar className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-green-600 mb-2">7</div>
            <div className="text-sm text-secondary-600">Pytań w ankiecie</div>
          </div>
          <div className="card text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <FaClock className="w-6 h-6 text-orange-600" />
            </div>
            <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
            <div className="text-sm text-secondary-600">Wskaźnik odpowiedzi</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataVisualization; 