import React from 'react';
import { FAQS } from '../constants';

const CareerAdvice: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">Karriere-Ratgeber Gastronomie</h1>
        <p className="text-xl text-slate-600 mb-12">
          Alles, was du über den Aufstieg in der Gastwelt wissen musst. Von der Gehaltsverhandlung bis zur Work-Life-Balance.
        </p>

        {/* Article Section */}
        <article className="prose prose-slate prose-lg max-w-none mb-16">
          <h3>Der moderne Arbeitsmarkt in der Gastronomie</h3>
          <p>
            Die Zeiten, in denen Gastronomie nur "Knochenarbeit" bedeutete, ändern sich. Immer mehr Betriebe setzen auf faire Arbeitszeiten,
            digitale Zeiterfassung und Benefits wie Urban Sports Club Mitgliedschaften oder Weiterbildungsbudgets. 
            <strong>Fachkräfte sind Goldstaub</strong>, und das spiegelt sich zunehmend in den Gehältern wider.
          </p>
          <p>
            Besonders gefragt sind aktuell Spezialisten mit Nischenwissen: Baristas, Sommeliers, Patissiers und Diätköche. 
            Aber auch Generalisten, die als "Allrounder" im Service und an der Bar einsetzbar sind, haben beste Karten.
          </p>

          <h3>Soft Skills vs. Hard Skills</h3>
          <p>
            Was zählt mehr? Ein perfektes Tranchieren am Tisch oder ein strahlendes Lächeln, wenn der Gast reklamiert? 
            Die Antwort ist: Beides, aber Soft Skills gewinnen an Bedeutung. Handwerk kann man lernen, Gastfreundschaft muss man fühlen.
          </p>
          <ul>
            <li><strong>Resilienz:</strong> Ruhe bewahren, wenn es brennt (sprichwörtlich und metaphorisch).</li>
            <li><strong>Teamfähigkeit:</strong> Die Küche und der Service sind Zahnräder eines Getriebes.</li>
            <li><strong>Sprachkenntnisse:</strong> In touristischen Hotspots ist Englisch Pflicht, weitere Sprachen die Kür.</li>
          </ul>

          <h3>Bewerbungstipps für Gastro-Profis</h3>
          <p>
            Dein Lebenslauf sollte "schmecken". Nutze ein modernes Design. Da die Branche visuell ist, hilft ein sympathisches Foto enorm.
            Führe deine Stationen (Chef de Rang, Commis, etc.) klar auf und nenne die Art der Küche (Sternegastronomie, Systemgastro, Gutbürgerlich).
          </p>
        </article>

        {/* FAQ Section with Schema Markup Structure visually */}
        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
          <h2 className="text-2xl font-bold mb-8 text-slate-900">Häufig gestellte Fragen (FAQ)</h2>
          <div className="space-y-6">
            {FAQS.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-slate-800 mb-2">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerAdvice;
