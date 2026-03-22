import { Job, JobCategory, NavItem, FaqItem } from './types';

export const APP_NAME = "GastronomieStellenangebote.de";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Startseite', path: '/' },
  { label: 'Jobs finden', path: '/jobs' },
  { label: 'Für Arbeitgeber', path: '/arbeitgeber' },
  { label: 'Karriere-Ratgeber', path: '/karriere' },
];

export const MOCK_JOBS: Job[] = [
  {
    id: '1',
    title: 'Versand- & Lagermitarbeiter (m/w/d) als Shipping & Receiving Clerk',
    company: 'Elevate Aircraft Seating GmbH',
    location: 'Kaiserslautern',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Versand- & Lagermitarbeiter (m/w/d) als Shipping & Receiving Clerk',
    tags: [],
    postedAt: '2026-03-22'
  },
  {
    id: '2',
    title: 'Mitarbeiter Kundenservice Online Banking (m/w/d)',
    company: 'Serviscope AG',
    location: 'Köln',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Mitarbeiter Kundenservice Online Banking (m/w/d)',
    tags: [],
    postedAt: '2026-03-22'
  },
  {
    id: '3',
    title: 'Mitarbeiter Kundenservice Online Banking (m/w/d)',
    company: 'Serviscope AG',
    location: 'Troisdorf',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Mitarbeiter Kundenservice Online Banking (m/w/d)',
    tags: [],
    postedAt: '2026-03-22'
  },
  {
    id: '4',
    title: 'Elektrotechnikerin / Elektrotechniker / Meisterin / Meister (m/w/d) als Projektmitarbeiter Eisenbahn-Signaltechnik',
    company: 'Scheidt & Bachmann Signalling Systems GmbH',
    location: 'Düsseldorf',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Elektrotechnikerin / Elektrotechniker / Meisterin / Meister (m/w/d) als Projektmitarbeiter Eisenbahn-Signaltechnik',
    tags: [],
    postedAt: '2026-03-22'
  },
  {
    id: '5',
    title: 'Elektrotechnikerin / Elektrotechniker / Meisterin / Meister (m/w/d) als Projektmitarbeiter Eisenbahn-Signaltechnik',
    company: 'Scheidt & Bachmann Signalling Systems GmbH',
    location: 'Mönchengladbach',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Elektrotechnikerin / Elektrotechniker / Meisterin / Meister (m/w/d) als Projektmitarbeiter Eisenbahn-Signaltechnik',
    tags: [],
    postedAt: '2026-03-22'
  },
  {
    id: '6',
    title: 'Sachbearbeitung Umsatzsteuer und Kommunalabgaben (m/w/d)',
    company: 'Gemeinde HudeSofort-Bewerbung',
    location: 'Hude (Oldb)',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Sachbearbeitung Umsatzsteuer und Kommunalabgaben (m/w/d)',
    tags: [],
    postedAt: '2026-03-22'
  },
  {
    id: '7',
    title: 'Fachkraft - Gastronomie',
    company: 'Geier. Die Bäckerei GmbH',
    location: 'Deutsch-Wagram',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Fachkraft - Gastronomie',
    tags: ['Fachkraft - Gastronomie'],
    postedAt: '2026-03-20'
  },
  {
    id: '8',
    title: 'Fachkraft - Gastronomie',
    company: 'Geier. Die Bäckerei GmbH',
    location: 'Zistersdorf',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Fachkraft - Gastronomie',
    tags: ['Fachkraft - Gastronomie'],
    postedAt: '2026-03-20'
  },
  {
    id: '9',
    title: 'Fachkraft - Gastronomie',
    company: 'Gerstner Exhibition Congress Catering Messe Wien',
    location: 'Wien,Leopoldstadt',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Fachkraft - Gastronomie',
    tags: ['Fachkraft - Gastronomie'],
    postedAt: '2026-03-20'
  },
  {
    id: '10',
    title: 'Servicemitarbeiter in der Gastronomie (m/w/d)',
    company: 'Weingut Holler',
    location: 'Hösbach',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Servicemitarbeiter in der Gastronomie (m/w/d)',
    tags: ['Fachkraft - Gastgewerbe'],
    postedAt: '2026-03-20'
  },
  {
    id: '11',
    title: 'Servicekraft in der Gastronomie',
    company: 'Jonas Jensen',
    location: 'Glückstadt',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Servicekraft in der Gastronomie',
    tags: ['Servicekraft - Gastronomie und Gastgewerbe'],
    postedAt: '2026-03-19'
  },
  {
    id: '12',
    title: 'Servicekraft in der Gastronomie (m/w/d)',
    company: 'dasrößle eG',
    location: 'Todtnau',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Servicekraft in der Gastronomie (m/w/d)',
    tags: ['Servicekraft - Gastronomie und Gastgewerbe'],
    postedAt: '2026-03-19'
  },
  {
    id: '13',
    title: 'Servicekraft Gastronomie',
    company: 'Seelounge - Inhaber Matthias Schwedler',
    location: 'Senftenberg, Niederlausitz',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Servicekraft Gastronomie',
    tags: ['Servicekraft - Gastronomie und Gastgewerbe'],
    postedAt: '2026-03-16'
  },
  {
    id: '14',
    title: 'Mitarbeiter (m/w/d) Gastronomie',
    company: 'Lühmann Tankstellen Betriebs GmbH & Co. KG',
    location: 'Bad Wildungen',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Mitarbeiter (m/w/d) Gastronomie',
    tags: ['Fachkraft - Gastronomie (Systemgastronomie)'],
    postedAt: '2026-03-16'
  },
  {
    id: '15',
    title: 'Einrichter (m/w/d) für Kunststoffspritzgussmaschinen',
    company: 'Medisca GmbH',
    location: 'Kabelsketal',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Einrichter (m/w/d) für Kunststoffspritzgussmaschinen',
    tags: [],
    postedAt: '2026-03-15'
  },
  {
    id: '16',
    title: 'Zahnarzt (m/w/d)',
    company: 'MeinDentist Berlin GmbH',
    location: 'Potsdam',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Zahnarzt (m/w/d)',
    tags: [],
    postedAt: '2026-03-15'
  },
  {
    id: '17',
    title: 'Zahnarzt (m/w/d)',
    company: 'MeinDentist Berlin GmbH',
    location: 'Berlin',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Zahnarzt (m/w/d)',
    tags: [],
    postedAt: '2026-03-15'
  },
  {
    id: '18',
    title: 'Mitarbeiter (m/w/d) Finanzbuchhaltung & Digitale Prozesse',
    company: 'avs SYSTEM LIFT AGSofort-Bewerbung',
    location: 'Hannover',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Mitarbeiter (m/w/d) Finanzbuchhaltung & Digitale Prozesse',
    tags: [],
    postedAt: '2026-03-15'
  },
  {
    id: '19',
    title: 'Mitarbeiter (m/w/d) Finanzbuchhaltung & Digitale Prozesse',
    company: 'avs SYSTEM LIFT AGSofort-Bewerbung',
    location: 'Isernhagen',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Mitarbeiter (m/w/d) Finanzbuchhaltung & Digitale Prozesse',
    tags: [],
    postedAt: '2026-03-15'
  },
  {
    id: '20',
    title: 'Fachkraft für Gastronomie (m/w/d)',
    company: 'NGD Norddeutsche Gesellschaft für Diakonie e. V.',
    location: 'Flensburg',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Fachkraft für Gastronomie (m/w/d)',
    tags: ['Fachkraft - Gastronomie'],
    postedAt: '2026-03-13'
  },
  {
    id: '21',
    title: 'Fachkraft für Gastronomie',
    company: 'Volkswagen',
    location: 'Wolfsburg',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Fachkraft für Gastronomie',
    tags: ['Fachkraft - Gastronomie'],
    postedAt: '2026-03-13'
  },
  {
    id: '22',
    title: 'Fachkraft für Gastronomie',
    company: 'Hofmeister',
    location: 'Ehingen (Donau)',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Fachkraft für Gastronomie',
    tags: ['Fachkraft - Gastronomie'],
    postedAt: '2026-03-13'
  },
  {
    id: '23',
    title: 'Fachkraft für Gastronomie',
    company: 'Hofmeister',
    location: 'Bietigheim-Bissingen',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Fachkraft für Gastronomie',
    tags: ['Fachkraft - Gastronomie'],
    postedAt: '2026-03-13'
  },
  {
    id: '24',
    title: 'Fachkraft für Gastronomie',
    company: 'Hofmeister',
    location: 'Sindelfingen',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Fachkraft für Gastronomie',
    tags: ['Fachkraft - Gastronomie'],
    postedAt: '2026-03-13'
  },
  {
    id: '25',
    title: 'Fachkraft - Gastronomie',
    company: 'K.u.K. Hofzuckerbäcker Ch.Demel\'s Söhne GmbH',
    location: 'Wien,Innere Stadt',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Fachkraft - Gastronomie',
    tags: ['Fachkraft - Gastronomie'],
    postedAt: '2026-03-12'
  }
];

export const SEO_TEXT_INTRO = `
Die Gastronomiebranche in Deutschland erlebt derzeit einen dynamischen Wandel. Von der klassischen Sterneküche über trendige Street-Food-Märkte bis hin zur innovativen Systemgastronomie – die Vielfalt an Beschäftigungsmöglichkeiten war noch nie so groß wie heute. GastronomieStellenangebote.de ist Ihre zentrale Anlaufstelle, um in diesem pulsierenden Umfeld Fuß zu fassen oder qualifiziertes Personal zu finden.

Wir verbinden Leidenschaft mit Professionalität. Für Arbeitnehmer bieten wir nicht nur eine Auflistung von Vakanzen, sondern detaillierte Einblicke in Berufsbilder, Gehaltsstrukturen und Weiterbildungsmöglichkeiten. Für Arbeitgeber stellen wir eine Plattform bereit, die durch hohe Sichtbarkeit und zielgerichtete Ansprache den Recruiting-Prozess signifikant verkürzt. In Zeiten des Fachkräftemangels ist eine effiziente Vermittlung essenziell.
`;

export const SEO_CAREER_PATHS = `
**Küchenbrigade**: Der Weg vom Commis de Cuisine zum Executive Chef ist steinig, aber lohnend. In modernen Küchen zählen nicht nur handwerkliche Fähigkeiten, sondern auch Teamführung und Kalkulationssicherheit.
**Service Excellence**: Service ist mehr als "Teller tragen". Es ist gelebte Gastfreundschaft, Verkaufspsychologie und Sommelier-Wissen in einem.
**Hotelmanagement**: Ein Hotel ist ein komplexes Ökosystem. Karrierewege führen oft über das Front Office oder Food & Beverage Management bis hin zur Hoteldirektion.
`;

export const FAQS: FaqItem[] = [
  {
    question: "Ist die Nutzung für Bewerber kostenlos?",
    answer: "Ja, für Arbeitnehmer ist die Jobsuche und Bewerbung über unser Portal zu 100% kostenfrei. Wir finanzieren uns über Premium-Anzeigen der Arbeitgeber."
  },
  {
    question: "Welche Qualifikationen brauche ich für die Gastronomie?",
    answer: "Das variiert stark. Während für Küchenchefs eine abgeschlossene Ausbildung und Meistertitel wichtig sind, bieten Service und Küchenhilfe hervorragende Chancen für Quereinsteiger."
  },
  {
    question: "Wie funktioniert die 'Generative Engine Optimization' (GEO) auf dieser Seite?",
    answer: "Unsere Inhalte sind so strukturiert, dass KI-Suchmaschinen wie Google Gemini oder ChatGPT sie optimal erfassen können. Klare Strukturen, Faktenreichtum und semantisches HTML sorgen für beste Auffindbarkeit."
  }
];