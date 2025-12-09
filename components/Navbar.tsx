import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, UtensilsCrossed } from 'lucide-react';
import { NAV_ITEMS, APP_NAME } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex-shrink-0 flex items-center gap-2">
              <div className="bg-amber-600 p-1.5 rounded-full">
                <UtensilsCrossed className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl text-slate-800 tracking-tight hidden sm:block">
                {APP_NAME}
              </span>
              <span className="font-bold text-xl text-slate-800 tracking-tight sm:hidden">
                GastroJobs
              </span>
            </NavLink>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'text-amber-600 border-b-2 border-amber-600' : 'text-slate-600 hover:text-amber-600'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink
              to="/arbeitgeber"
              className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors"
            >
              Stelle inserieren
            </NavLink>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none"
            >
              <span className="sr-only">Menü öffnen</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="pt-2 pb-3 space-y-1 px-2">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? 'bg-amber-50 text-amber-700'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
             <NavLink
                to="/arbeitgeber"
                onClick={() => setIsOpen(false)}
                className="block w-full text-left px-3 py-2 text-base font-medium text-amber-600 hover:bg-slate-50"
              >
                Für Arbeitgeber
              </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
