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
    title: 'Elektrotechniker EMSR-Technik (w/m/d)',
    company: 'Infraserv GmbH & Co. Höchst KG',
    location: 'Frankfurt am Main',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Elektrotechniker EMSR-Technik (w/m/d)',
    tags: [],
    postedAt: '2026-03-29'
  },
  {
    id: '2',
    title: 'Referent (m/w/d) befristet als Elternzeitvertretung für zwei Jahre',
    company: 'Berufsgenossenschaft Rohstoffe und chemische Industrie (BG RCI)',
    location: 'Langenhagen',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Referent (m/w/d) befristet als Elternzeitvertretung für zwei Jahre',
    tags: [],
    postedAt: '2026-03-29'
  },
  {
    id: '3',
    title: 'Referent (m/w/d) befristet als Elternzeitvertretung für zwei Jahre',
    company: 'Berufsgenossenschaft Rohstoffe und chemische Industrie (BG RCI)',
    location: 'Bochum',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Referent (m/w/d) befristet als Elternzeitvertretung für zwei Jahre',
    tags: [],
    postedAt: '2026-03-29'
  },
  {
    id: '4',
    title: 'Referent (m/w/d) befristet als Elternzeitvertretung für zwei Jahre',
    company: 'Berufsgenossenschaft Rohstoffe und chemische Industrie (BG RCI)',
    location: 'Ober-Olm',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Referent (m/w/d) befristet als Elternzeitvertretung für zwei Jahre',
    tags: [],
    postedAt: '2026-03-29'
  },
  {
    id: '5',
    title: 'Referent (m/w/d) befristet als Elternzeitvertretung für zwei Jahre',
    company: 'Berufsgenossenschaft Rohstoffe und chemische Industrie (BG RCI)',
    location: 'Heidelberg',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Referent (m/w/d) befristet als Elternzeitvertretung für zwei Jahre',
    tags: [],
    postedAt: '2026-03-29'
  },
  {
    id: '6',
    title: 'Mitarbeiter für Gastronomie',
    company: 'Landgasthof Zum Fröhlichen Mann bei Mimmo und Sandra Inh. Cosimo Gallo',
    location: 'Klingenberg am Main',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Mitarbeiter für Gastronomie',
    tags: ['Helfer/in - Küche'],
    postedAt: '2026-03-28'
  },
  {
    id: '7',
    title: 'Koch',
    company: 'Reusenhaus EVENT & ACTION GASTRO',
    location: 'Greifswald, Hansestadt',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Koch',
    tags: ['Koch/Köchin'],
    postedAt: '2026-03-28'
  },
  {
    id: '8',
    title: 'Fachkraft für Gastronomie (m/w/d)',
    company: 'Hotel Am See Sommerfeld Betriebs GmbH',
    location: 'Kremmen',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Fachkraft für Gastronomie (m/w/d)',
    tags: ['Fachkraft - Gastronomie'],
    postedAt: '2026-03-27'
  },
  {
    id: '9',
    title: 'Fachkraft - Gastronomie',
    company: 'Hauserbauer GmbH/Gipflstadl',
    location: 'Bergl',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Fachkraft - Gastronomie',
    tags: ['Fachkraft - Gastronomie'],
    postedAt: '2026-03-27'
  },
  {
    id: '10',
    title: 'Servicekraft Gastronomie (m/w/d)',
    company: 'Irish Pub Limerick Stefan Skoberla',
    location: 'Gotha, Thüringen',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Servicekraft Gastronomie (m/w/d)',
    tags: ['Fachkraft - Gastgewerbe'],
    postedAt: '2026-03-27'
  },
  {
    id: '11',
    title: 'Gastronomie',
    company: 'Gräflicher Park GmbH & Co.KG',
    location: 'Bad Driburg',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Gastronomie',
    tags: ['Servicekraft - Gastronomie und Gastgewerbe'],
    postedAt: '2026-03-26'
  },
  {
    id: '12',
    title: 'Fachkraft Gastronomie',
    company: 'Kaiserhof-Fejza GmbH',
    location: 'Willich',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Fachkraft Gastronomie',
    tags: ['Fachkraft - Gastronomie'],
    postedAt: '2026-03-26'
  },
  {
    id: '13',
    title: 'Fachkraft - Gastronomie',
    company: 'OBERLAA Konditorei GmbH & Co KG',
    location: 'Wien,Favoriten',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Fachkraft - Gastronomie',
    tags: ['Fachkraft - Gastronomie'],
    postedAt: '2026-03-26'
  },
  {
    id: '14',
    title: 'Fachkraft - Gastronomie',
    company: 'MH-Liegenschaftsbetreuung',
    location: 'Salzburg',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Fachkraft - Gastronomie',
    tags: ['Fachkraft - Gastronomie'],
    postedAt: '2026-03-26'
  },
  {
    id: '15',
    title: 'Mitarbeiter*in Gastronomie (m/w/d)',
    company: 'Berliner Fußball-Verband e. V.',
    location: 'Berlin',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Mitarbeiter*in Gastronomie (m/w/d)',
    tags: ['Fachkraft - Gastronomie'],
    postedAt: '2026-03-25'
  },
  {
    id: '16',
    title: 'Servicekraft Gastronomie (m/w/d)',
    company: 'Schützenheim Illertissen',
    location: 'Illertissen',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Servicekraft Gastronomie (m/w/d)',
    tags: ['Servicekraft - Gastronomie und Gastgewerbe'],
    postedAt: '2026-03-24'
  },
  {
    id: '17',
    title: 'Mitarbeiter Gastronomie',
    company: 'eat. catering & event',
    location: 'Eberswalde',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Mitarbeiter Gastronomie',
    tags: ['Servicekraft - Gastronomie und Gastgewerbe'],
    postedAt: '2026-03-24'
  },
  {
    id: '18',
    title: 'Gastronomie-Servicekraft (m/w/d)',
    company: 'Jöckel Gastronomie GmbH',
    location: 'Freiensteinau',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Gastronomie-Servicekraft (m/w/d)',
    tags: ['Servicekraft - Gastronomie und Gastgewerbe'],
    postedAt: '2026-03-23'
  },
  {
    id: '19',
    title: 'Servicekraft Gastronomie (m/w/d)',
    company: 'Martin Kölling Die Burg',
    location: 'Arneburg',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Servicekraft Gastronomie (m/w/d)',
    tags: ['Restaurantfachmann/-frau'],
    postedAt: '2026-03-23'
  },
  {
    id: '20',
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
    id: '21',
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
    id: '22',
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
    id: '23',
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
    id: '24',
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
    id: '25',
    title: 'Sachbearbeitung Umsatzsteuer und Kommunalabgaben (m/w/d)',
    company: 'Gemeinde HudeSofort-Bewerbung',
    location: 'Hude (Oldb)',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Sachbearbeitung Umsatzsteuer und Kommunalabgaben (m/w/d)',
    tags: [],
    postedAt: '2026-03-22'
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