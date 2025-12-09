import React from 'react';
import { NavLink } from 'react-router-dom';
import { ChefHat, MapPin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <ChefHat className="h-6 w-6 text-amber-500" />
              <span className="font-bold text-xl text-white">GastroJobs</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Deutschlands modernste Jobbörse für Gastronomie und Hotellerie. 
              Wir bringen Talente und Gastgeber zusammen – schnell, einfach und KI-gestützt.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Für Bewerber</h3>
            <ul className="space-y-2 text-sm">
              <li><NavLink to="/jobs" className="hover:text-amber-500 transition-colors">Alle Stellenangebote</NavLink></li>
              <li><NavLink to="/jobs?cat=Küche" className="hover:text-amber-500 transition-colors">Jobs in der Küche</NavLink></li>
              <li><NavLink to="/jobs?cat=Service" className="hover:text-amber-500 transition-colors">Service Jobs</NavLink></li>
              <li><NavLink to="/karriere" className="hover:text-amber-500 transition-colors">Karriere-Ratgeber</NavLink></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Für Arbeitgeber</h3>
            <ul className="space-y-2 text-sm">
              <li><NavLink to="/arbeitgeber" className="hover:text-amber-500 transition-colors">Stelle inserieren</NavLink></li>
              <li><NavLink to="/arbeitgeber" className="hover:text-amber-500 transition-colors">Preise & Pakete</NavLink></li>
              <li><NavLink to="/arbeitgeber" className="hover:text-amber-500 transition-colors">Erfolgsgeschichten</NavLink></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Kontakt & Rechtliches</h3>
            <ul className="space-y-2 text-sm">
               <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-amber-500" />
                <span>Musterstraße 1, 10115 Berlin</span>
              </li>
               <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-amber-500" />
                <span>kontakt@gastro-jobs-beispiel.de</span>
              </li>
              <li><NavLink to="/impressum" className="hover:text-amber-500 transition-colors mt-2 block">Impressum & Datenschutz</NavLink></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} GastronomieStellenangebote.de. Alle Rechte vorbehalten. Made with React & Tailwind.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
