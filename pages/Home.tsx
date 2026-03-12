import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Search, MapPin, ChefHat, Coffee, Wine, BedDouble, Utensils, Users, ArrowRight, ChevronDown, ChevronUp, Briefcase } from 'lucide-react';
import { MOCK_JOBS, SEO_TEXT_INTRO, SEO_CAREER_PATHS, FAQS } from '../constants';
import JobCard from '../components/JobCard';
import GermanCitiesGeo from '../components/geo/GermanCitiesGeo';

const Home: React.FC = () => {
  const featuredJobs = MOCK_JOBS.slice(0, 6);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const categories = [
    { name: 'Küche', icon: ChefHat, count: 120, color: 'bg-orange-100 text-orange-600' },
    { name: 'Service', icon: Coffee, count: 85, color: 'bg-blue-100 text-blue-600' },
    { name: 'Bar', icon: Wine, count: 42, color: 'bg-purple-100 text-purple-600' },
    { name: 'Hotel', icon: BedDouble, count: 64, color: 'bg-emerald-100 text-emerald-600' },
    { name: 'Management', icon: Users, count: 18, color: 'bg-slate-100 text-slate-600' },
    { name: 'Catering', icon: Utensils, count: 32, color: 'bg-pink-100 text-pink-600' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
           <img 
            src="https://picsum.photos/1920/1080?grayscale" 
            alt="Busy Restaurant Kitchen" 
            className="w-full h-full object-cover"
           />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
            Leidenschaft trifft <span className="text-amber-500">Traumjob</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            Die Jobbörse für Gastronomie-Profis. Finde jetzt deinen Platz in den besten Küchen, Bars und Hotels Deutschlands.
          </p>

          <div className="max-w-3xl mx-auto bg-white p-2 rounded-xl shadow-2xl flex flex-col md:flex-row gap-2">
            <div className="flex-1 flex items-center px-4 bg-slate-50 rounded-lg h-12">
              <Search className="h-5 w-5 text-slate-400 mr-3" />
              <input 
                type="text" 
                placeholder="Jobtitel, Stichwort (z.B. Koch)" 
                className="w-full bg-transparent border-none focus:outline-none text-slate-800 placeholder-slate-400"
              />
            </div>
            <div className="flex-1 flex items-center px-4 bg-slate-50 rounded-lg h-12">
              <MapPin className="h-5 w-5 text-slate-400 mr-3" />
              <input 
                type="text" 
                placeholder="Stadt oder PLZ" 
                className="w-full bg-transparent border-none focus:outline-none text-slate-800 placeholder-slate-400"
              />
            </div>
            <NavLink 
              to="/jobs"
              className="bg-amber-600 text-white h-12 px-8 rounded-lg font-semibold flex items-center justify-center hover:bg-amber-700 transition-colors"
            >
              Jobs suchen
            </NavLink>
          </div>
        </div>
      </section>

      {/* Featured Jobs - prominent on mobile, shown before categories */}
      <section className="py-10 md:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Briefcase className="h-6 w-6 text-amber-600" />
                <span className="text-sm font-semibold text-amber-600 uppercase tracking-wide">Aktuelle Stellenangebote</span>
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Top-Jobs der Woche</h2>
              <p className="text-slate-600 mt-2">Die beliebtesten Gastronomie-Stellenangebote unserer Partner.</p>
            </div>
            <NavLink to="/jobs" className="text-amber-600 font-semibold flex items-center hover:text-amber-700">
              Alle Jobs ansehen <ArrowRight className="ml-1 h-4 w-4" />
            </NavLink>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredJobs.map(job => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
          <div className="text-center mt-8">
            <NavLink to="/jobs" className="inline-flex items-center bg-amber-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-amber-700 transition-colors shadow-lg shadow-amber-900/20">
              Alle Stellenangebote durchsuchen <ArrowRight className="ml-2 h-5 w-5" />
            </NavLink>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Bereiche entdecken</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <NavLink
                key={cat.name}
                to={`/jobs?cat=${cat.name}`}
                className="flex flex-col items-center p-6 rounded-xl border border-slate-100 hover:shadow-lg hover:border-amber-200 transition-all group"
              >
                <div className={`p-4 rounded-full mb-3 ${cat.color} group-hover:scale-110 transition-transform`}>
                  <cat.icon className="h-6 w-6" />
                </div>
                <span className="font-semibold text-slate-800">{cat.name}</span>
                <span className="text-xs text-slate-500 mt-1">{cat.count} Stellen</span>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      {/* SEO & Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate prose-lg">
          <h2 className="text-3xl font-bold text-slate-900 not-prose mb-6">Karriere in der Gastronomie</h2>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg mb-8 not-prose">
            <h3 className="font-bold text-amber-900 mb-2">Warum Gastro?</h3>
            <p className="text-amber-800">Die Gastronomie ist mehr als nur Essen und Trinken. Sie ist ein Ort der Begegnung, der Kultur und der grenzenlosen Möglichkeiten. Ob Weltreise auf dem Kreuzfahrtschiff oder Heimatliebe im Landgasthof.</p>
          </div>
          
          <div className="whitespace-pre-line text-slate-600 mb-8">
            {SEO_TEXT_INTRO}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose mb-12">
            <img src="https://picsum.photos/600/400?random=1" alt="Koch beim Anrichten" className="rounded-xl shadow-lg" />
            <img src="https://picsum.photos/600/400?random=2" alt="Bartender mixt Cocktails" className="rounded-xl shadow-lg" />
          </div>

          <h3 className="text-2xl font-bold text-slate-900 not-prose mb-4">Berufsfelder im Fokus</h3>
          <div className="whitespace-pre-line text-slate-600">
            {SEO_CAREER_PATHS}
          </div>
        </div>
      </section>

      {/* Geo SEO - Gastronomie-Jobs in deutschen Staedten */}
      <GermanCitiesGeo />

      {/* FAQ Section */}
      <section className="py-16 bg-white" itemScope itemType="https://schema.org/FAQPage">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-2 text-center">Haeufig gestellte Fragen</h2>
          <p className="text-slate-500 text-center mb-10">Antworten auf die wichtigsten Fragen rund um Gastronomie-Jobs</p>
          <div className="space-y-3">
            {FAQS.map((faq, index) => (
              <div
                key={index}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
                className="border border-slate-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-slate-50 transition-colors"
                >
                  <span itemProp="name" className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-slate-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer" className="px-5 pb-5">
                    <p itemProp="text" className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Info Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Karrierewege in der Gastronomie</h2>
          <p className="text-slate-500 text-center mb-10 max-w-2xl mx-auto">Von der Ausbildung bis zur Fuehrungsposition - die Gastronomie bietet vielfaeltige Karrierechancen.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <ChefHat className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Kueche & Kulinarik</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Vom Commis de Cuisine ueber den Sous Chef bis zum Kuechenchef. Ausbildungsberufe wie Koch/Koechin sind der klassische Einstieg. Weiterbildungen zum Kuechenmeister oder ein Studium im Bereich Culinary Arts eroeffnen Fuehrungspositionen.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Coffee className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Service & Gastgewerbe</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Restaurantfachleute, Sommelier, Barista oder Barkeeper - der Servicebereich bietet abwechslungsreiche Taetigkeiten mit direktem Gaestekontakt. Quereinsteiger sind willkommen, Berufserfahrung zaehlt oft mehr als Abschluesse.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <BedDouble className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Hotel & Management</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Hotelkaufleute, Food & Beverage Manager oder Hoteldirektoren - das Hotelgewerbe verbindet Gastronomie mit Betriebswirtschaft. Ein Studium im Hotelmanagement oder die Weiterbildung zum Hotelbetriebswirt sind typische Karriereschritte.
              </p>
            </div>
          </div>
          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6">
            <h3 className="font-bold text-amber-900 mb-2">Gehalt in der Gastronomie</h3>
            <p className="text-amber-800 text-sm leading-relaxed">
              Die Gehaelter variieren je nach Position, Region und Betriebsgroesse. Koeche verdienen durchschnittlich 2.200 - 3.500 EUR brutto, Servicekraefte 2.000 - 2.800 EUR, und Fuehrungskraefte wie Kuechenchefs oder Restaurantleiter koennen 3.500 - 5.500 EUR und mehr erreichen. In Grossstaedten wie Berlin, Muenchen oder Hamburg liegen die Loehne tendenziell hoeher.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-amber-600 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-600 rounded-full opacity-20 blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Bereit fuer den naechsten Schritt?</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Egal ob du dein Team erweitern oder selbst neu durchstarten moechtest. Wir haben die Loesungen.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <NavLink to="/jobs" className="bg-amber-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-amber-700 transition-colors shadow-lg shadow-amber-900/20">
              Job finden
            </NavLink>
            <NavLink to="/arbeitgeber" className="bg-white text-slate-900 px-8 py-3 rounded-lg font-bold hover:bg-slate-100 transition-colors">
              Arbeitgeber werden
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
