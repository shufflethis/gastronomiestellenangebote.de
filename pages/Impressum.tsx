import React from 'react';

const Impressum: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Impressum</h1>
        
        <div className="space-y-6 text-slate-700">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Angaben gemäß § 5 TMG</h2>
            <p>
              GastronomieStellenangebote GmbH (Musterfirma)<br />
              Musterstraße 1<br />
              10115 Berlin<br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Kontakt</h2>
            <p>
              Telefon: +49 (0) 30 12345678<br />
              E-Mail: kontakt@gastro-jobs-beispiel.de
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Registereintrag</h2>
            <p>
              Eintragung im Handelsregister.<br />
              Registergericht: Amtsgericht Berlin-Charlottenburg<br />
              Registernummer: HRB 123456
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              DE 123456789
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>
              Max Mustermann<br />
              Musterstraße 1<br />
              10115 Berlin
            </p>
          </section>

          <section className="pt-8 border-t border-slate-200 mt-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Haftungsausschluss (Disclaimer)</h2>
            <h3 className="font-bold mt-4">Haftung für Inhalte</h3>
            <p className="text-sm mt-2">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <h3 className="font-bold mt-4">Haftung für Links</h3>
            <p className="text-sm mt-2">
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
