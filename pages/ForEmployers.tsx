import React from 'react';
import { CheckCircle, TrendingUp, Users, Zap } from 'lucide-react';

const ForEmployers: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Finden Sie das Personal, das Ihr Restaurant verdient.</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Schluss mit Fachkräftemangel. Erreichen Sie tausende qualifizierte Kandidaten aus der Gastronomie mit nur einem Klick.
          </p>
          <button className="bg-amber-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-amber-700 transition-colors">
            Jetzt Stelle inserieren
          </button>
        </div>
      </div>

      {/* Benefits */}
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Warum GastronomieStellenangebote.de?</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center text-center">
            <div className="bg-amber-100 p-4 rounded-full mb-6">
              <Zap className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Schnelle Besetzung</h3>
            <p className="text-slate-600">
              Dank unserer KI-gestützten Matching-Technologie finden Sie passendes Personal schneller als je zuvor.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
             <div className="bg-blue-100 p-4 rounded-full mb-6">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Gezielte Reichweite</h3>
            <p className="text-slate-600">
              Ihre Anzeige erscheint dort, wo Gastronomen suchen. Kein Streuverlust, nur Branchen-Insider.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
             <div className="bg-emerald-100 p-4 rounded-full mb-6">
              <TrendingUp className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Transparente Preise</h3>
            <p className="text-slate-600">
              Keine versteckten Abos. Sie zahlen nur für die Laufzeit Ihrer Anzeige. Volle Kostenkontrolle.
            </p>
          </div>
        </div>
      </div>

      {/* Pricing Table (Simplified) */}
      <div className="bg-slate-50 py-20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Unsere Pakete</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
               
               {/* Basic */}
               <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                  <h3 className="text-xl font-bold mb-2">Basis</h3>
                  <div className="text-4xl font-bold mb-6">49€ <span className="text-sm font-normal text-slate-500">/ 30 Tage</span></div>
                  <ul className="space-y-3 mb-8">
                     <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-500" /> <span>Standard Listing</span></li>
                     <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-500" /> <span>Firmenlogo</span></li>
                  </ul>
                  <button className="w-full border-2 border-slate-900 text-slate-900 py-2 rounded-lg font-bold hover:bg-slate-50">Wählen</button>
               </div>

               {/* Pro */}
               <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-amber-500 relative transform md:-translate-y-4">
                  <div className="absolute top-0 right-0 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">BESTSELLER</div>
                  <h3 className="text-xl font-bold mb-2">Premium</h3>
                  <div className="text-4xl font-bold mb-6">99€ <span className="text-sm font-normal text-slate-500">/ 30 Tage</span></div>
                  <ul className="space-y-3 mb-8">
                     <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-amber-500" /> <span>Top-Platzierung</span></li>
                     <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-amber-500" /> <span>Social Media Boost</span></li>
                     <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-amber-500" /> <span>KI-Textoptimierung</span></li>
                  </ul>
                  <button className="w-full bg-amber-600 text-white py-2 rounded-lg font-bold hover:bg-amber-700">Jetzt buchen</button>
               </div>

               {/* Enterprise */}
               <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                  <h3 className="text-xl font-bold mb-2">Recruiter</h3>
                  <div className="text-4xl font-bold mb-6">249€ <span className="text-sm font-normal text-slate-500">/ Monat</span></div>
                  <ul className="space-y-3 mb-8">
                     <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-500" /> <span>Unbegrenzte Jobs</span></li>
                     <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-500" /> <span>Zugang zur CV-Datenbank</span></li>
                  </ul>
                  <button className="w-full border-2 border-slate-900 text-slate-900 py-2 rounded-lg font-bold hover:bg-slate-50">Kontaktieren</button>
               </div>

            </div>
         </div>
      </div>
    </div>
  );
};

export default ForEmployers;
