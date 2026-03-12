import React from 'react';
import { NavLink } from 'react-router-dom';
import { MapPin } from 'lucide-react';

const GERMAN_CITIES = [
  { name: 'Berlin', region: 'Berlin', jobs: 245, slug: 'berlin' },
  { name: 'Hamburg', region: 'Hamburg', jobs: 189, slug: 'hamburg' },
  { name: 'Muenchen', region: 'Bayern', jobs: 312, slug: 'muenchen' },
  { name: 'Koeln', region: 'Nordrhein-Westfalen', jobs: 156, slug: 'koeln' },
  { name: 'Frankfurt am Main', region: 'Hessen', jobs: 134, slug: 'frankfurt' },
  { name: 'Stuttgart', region: 'Baden-Wuerttemberg', jobs: 118, slug: 'stuttgart' },
  { name: 'Duesseldorf', region: 'Nordrhein-Westfalen', jobs: 102, slug: 'duesseldorf' },
  { name: 'Leipzig', region: 'Sachsen', jobs: 87, slug: 'leipzig' },
  { name: 'Dortmund', region: 'Nordrhein-Westfalen', jobs: 76, slug: 'dortmund' },
  { name: 'Dresden', region: 'Sachsen', jobs: 69, slug: 'dresden' },
  { name: 'Hannover', region: 'Niedersachsen', jobs: 64, slug: 'hannover' },
  { name: 'Nuernberg', region: 'Bayern', jobs: 82, slug: 'nuernberg' },
  { name: 'Bremen', region: 'Bremen', jobs: 54, slug: 'bremen' },
  { name: 'Essen', region: 'Nordrhein-Westfalen', jobs: 48, slug: 'essen' },
  { name: 'Freiburg', region: 'Baden-Wuerttemberg', jobs: 45, slug: 'freiburg' },
  { name: 'Luebeck', region: 'Schleswig-Holstein', jobs: 38, slug: 'luebeck' },
  { name: 'Heidelberg', region: 'Baden-Wuerttemberg', jobs: 42, slug: 'heidelberg' },
  { name: 'Muenster', region: 'Nordrhein-Westfalen', jobs: 39, slug: 'muenster' },
  { name: 'Rostock', region: 'Mecklenburg-Vorpommern', jobs: 31, slug: 'rostock' },
  { name: 'Augsburg', region: 'Bayern', jobs: 37, slug: 'augsburg' },
];

const GermanCitiesGeo: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Gastronomie-Jobs in deutschen Staedten</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Finden Sie Stellenangebote in der Gastronomie in Ihrer Naehe. Wir bieten Jobs in allen grossen Staedten Deutschlands.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
          {GERMAN_CITIES.map((city) => (
            <NavLink
              key={city.slug}
              to={`/jobs?location=${encodeURIComponent(city.name)}`}
              className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-amber-300 hover:shadow-md transition-all group"
            >
              <MapPin className="h-4 w-4 text-amber-500 flex-shrink-0 group-hover:text-amber-600" />
              <div className="min-w-0">
                <span className="font-semibold text-slate-800 text-sm block truncate">{city.name}</span>
                <span className="text-xs text-slate-400">{city.region} &middot; {city.jobs} Stellen</span>
              </div>
            </NavLink>
          ))}
        </div>
        <div className="mt-8 bg-white rounded-xl border border-slate-200 p-6">
          <h3 className="font-bold text-slate-900 mb-3">Gastronomie-Stellenangebote in ganz Deutschland</h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-3">
            Deutschland bietet eine der vielfaeltigsten Gastronomielandschaften Europas. Von der gemuetlichen Biergartenkultur in Muenchen ueber die internationale Spitzengastronomie in Berlin bis hin zu den traditionellen Fischrestaurants in Hamburg - jede Region hat ihren eigenen kulinarischen Charakter.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mb-3">
            Besonders gefragt sind Fachkraefte in Grossstaedten wie Berlin, Muenchen, Hamburg, Koeln und Frankfurt. Aber auch mittelgrosse Staedte wie Freiburg, Luebeck und Dresden verzeichnen eine steigende Nachfrage nach qualifiziertem Gastronomiepersonal.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            Ob Koch, Servicekraft, Barkeeper, Hotelkaufmann oder Restaurantleiter - auf gastronomiestellenangebote.de finden Sie passende Stellenangebote in Ihrer Stadt. Nutzen Sie unsere Jobsuche mit Standortfilter, um Gastronomie-Jobs in Ihrer Naehe zu entdecken.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GermanCitiesGeo;
