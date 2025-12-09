import React, { useState } from 'react';
import { MOCK_JOBS } from '../constants';
import JobCard from '../components/JobCard';
import { Filter, Search } from 'lucide-react';
import { JobCategory } from '../types';

const Jobs: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Alle');

  const filteredJobs = MOCK_JOBS.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Alle' || job.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Aktuelle Stellenangebote</h1>
          <p className="text-slate-600 mt-2">Finde aus {MOCK_JOBS.length} offenen Positionen deinen Traumjob.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 sticky top-24">
              <div className="flex items-center gap-2 mb-6 text-slate-800">
                <Filter className="h-5 w-5" />
                <h3 className="font-bold">Filter</h3>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 mb-2">Suche</label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Jobtitel, Firma..."
                    className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 mb-2">Kategorie</label>
                <div className="space-y-2">
                  {['Alle', ...Object.values(JobCategory)].map(cat => (
                    <label key={cat} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === cat}
                        onChange={() => setSelectedCategory(cat)}
                        className="text-amber-600 focus:ring-amber-500 h-4 w-4"
                      />
                      <span className="text-sm text-slate-600">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                 <label className="block text-sm font-medium text-slate-700 mb-2">Anstellungsart</label>
                 <div className="space-y-2">
                    {['Vollzeit', 'Teilzeit', 'Minijob', 'Ausbildung'].map(type => (
                       <label key={type} className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" className="rounded text-amber-600 focus:ring-amber-500 h-4 w-4" />
                          <span className="text-sm text-slate-600">{type}</span>
                       </label>
                    ))}
                 </div>
              </div>
            </div>
          </div>

          {/* Job Grid */}
          <div className="lg:w-3/4">
             {filteredJobs.length > 0 ? (
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {filteredJobs.map(job => (
                   <JobCard key={job.id} job={job} />
                 ))}
               </div>
             ) : (
                <div className="bg-white p-12 rounded-xl text-center shadow-sm">
                   <p className="text-slate-500 text-lg">Keine Jobs gefunden, die deinen Kriterien entsprechen.</p>
                   <button 
                     onClick={() => {setSearchTerm(''); setSelectedCategory('Alle')}}
                     className="mt-4 text-amber-600 font-medium hover:underline"
                   >
                     Filter zurücksetzen
                   </button>
                </div>
             )}

             {/* SEO Text Block for Job Listing Page */}
             <div className="mt-16 prose prose-slate max-w-none bg-white p-8 rounded-xl shadow-sm border border-slate-100">
               <h2 className="text-2xl font-bold mb-4">Tipps für deine Jobsuche in der Gastronomie</h2>
               <p>
                 Die Suche nach dem perfekten Gastro-Job kann herausfordernd sein. Hier sind einige Tipps, um deine Chancen zu erhöhen:
               </p>
               <ul>
                 <li><strong>Aktualität:</strong> Gastronomie ist schnelllebig. Antworte zügig auf Inserate.</li>
                 <li><strong>Probetag:</strong> Biete proaktiv einen Probetag an. In der Küche und im Service zählt die Praxis mehr als Papier.</li>
                 <li><strong>Flexibilität:</strong> Zeige Bereitschaft für Wochenend- und Schichtarbeit – das ist oft Voraussetzung.</li>
               </ul>
               <p>
                 Nutze unsere Filterfunktion, um gezielt nach Stellen in deiner Nähe oder deinem Fachbereich (Küche, Service, Management) zu suchen.
               </p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
