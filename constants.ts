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
    title: 'Servicemitarbeiter (m/w/d) Gastronomie in Leonberg',
    company: 'tempster GmbH',
    location: 'Leonberg, Württemberg',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Servicemitarbeiter (m/w/d) Gastronomie in Leonberg',
    tags: ['Servicekraft - Gastronomie und Gastgewerbe'],
    postedAt: '2026-03-03'
  },
  {
    id: '2',
    title: 'Servicekraft - Gastronomie und Gastgewerbe',
    company: 'TRANSFER Planconsult Datentransfer und Anlagenconsulting GmbH',
    location: 'Wien',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Servicekraft - Gastronomie und Gastgewerbe',
    tags: ['Servicekraft - Gastronomie und Gastgewerbe'],
    postedAt: '2026-03-03'
  },
  {
    id: '3',
    title: 'Servicekraft - Gastronomie und Gastgewerbe',
    company: 'Andi\'s Skihotel GmbH',
    location: 'Obertauern',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Servicekraft - Gastronomie und Gastgewerbe',
    tags: ['Servicekraft - Gastronomie und Gastgewerbe'],
    postedAt: '2026-03-03'
  },
  {
    id: '4',
    title: 'Servicekräfte in der Gastronomie',
    company: 'FM Culinary GmbH',
    location: 'Bad Schönborn',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Servicekräfte in der Gastronomie',
    tags: ['Servicekraft - Gastronomie und Gastgewerbe'],
    postedAt: '2026-03-02'
  },
  {
    id: '5',
    title: 'Servicekraft - Gastronomie und Gastgewerbe (m/w/d)',
    company: 'Stiftl Gastronomie Unternehmensgruppe',
    location: 'München',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Servicekraft - Gastronomie und Gastgewerbe (m/w/d)',
    tags: ['Servicekraft - Gastronomie und Gastgewerbe'],
    postedAt: '2026-03-02'
  },
  {
    id: '6',
    title: 'Servicekraft - Gastronomie und Gastgewerbe',
    company: 'La Strada Robert Yaldiz Gastronomie GmbH',
    location: 'Herzogenburg',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Servicekraft - Gastronomie und Gastgewerbe',
    tags: ['Servicekraft - Gastronomie und Gastgewerbe'],
    postedAt: '2026-03-02'
  },
  {
    id: '7',
    title: 'Servicekraft (m/w/d) Gastronomie & Hotellerie',
    company: 'ARWA Personaldienstleistungen GmbH',
    location: 'Dresden',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Servicekraft (m/w/d) Gastronomie & Hotellerie',
    tags: ['Servicekraft - Gastronomie und Gastgewerbe'],
    postedAt: '2026-03-02'
  },
  {
    id: '8',
    title: 'Fachkraft für Gastronomie Schwerpunkt Systemgastronomie',
    company: 'ABV Braunschweig/MD e.V. - Lohn',
    location: 'Braunschweig',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Fachkraft für Gastronomie Schwerpunkt Systemgastronomie',
    tags: ['Fachkraft - Gastronomie'],
    postedAt: '2026-03-02'
  },
  {
    id: '9',
    title: 'Servicemitarbeiter (m/w/d) in der Gastronomie',
    company: 'BESTSTEPS by Bernd Konschak',
    location: 'Werl',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Servicemitarbeiter (m/w/d) in der Gastronomie',
    tags: ['Servicekraft - Gastronomie und Gastgewerbe'],
    postedAt: '2026-03-01'
  },
  {
    id: '10',
    title: 'Servicekraft-Gastronomie (m/w/d)',
    company: 'Hotel-Restaurant Die kleine Blume GmbH',
    location: 'Erfweiler',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Servicekraft-Gastronomie (m/w/d)',
    tags: ['Hotelfachmann/-frau'],
    postedAt: '2026-03-01'
  },
  {
    id: '11',
    title: 'Gastronomie Helfer/in',
    company: 'Cafe-Bistro "Zum Vasi"',
    location: 'St. Blasien',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Gastronomie Helfer/in',
    tags: ['Servicekraft - Gastronomie und Gastgewerbe'],
    postedAt: '2026-02-27'
  },
  {
    id: '12',
    title: 'Servicemitarbeiter für die Gastronomie (m/w/d)',
    company: 'Allianz Deutschland AG',
    location: 'Stuttgart',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Servicemitarbeiter für die Gastronomie (m/w/d)',
    tags: ['Servicekraft - Gastronomie und Gastgewerbe'],
    postedAt: '2026-02-26'
  },
  {
    id: '13',
    title: 'Fachkraft - Gastronomie',
    company: 'Janus RBS Dienstleistungs GmbH',
    location: 'Reichenau an der Rax',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Fachkraft - Gastronomie',
    tags: ['Fachkraft - Gastronomie'],
    postedAt: '2026-02-26'
  },
  {
    id: '14',
    title: 'Mitarbeiter (m/w/d) Gastronomie',
    company: 'GLOBUS Handelshof GmbH & Co.KG Betriebsstätte Gensingen',
    location: 'Gensingen',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Mitarbeiter (m/w/d) Gastronomie',
    tags: ['Servicekraft - Gastronomie und Gastgewerbe'],
    postedAt: '2026-02-25'
  },
  {
    id: '15',
    title: 'Servicekraft - Gastronomie(w/m/d)',
    company: 'Jacqueline Rudolph DAS EISlädchen',
    location: 'Schkeuditz',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Servicekraft - Gastronomie(w/m/d)',
    tags: ['Servicekraft - Gastronomie und Gastgewerbe'],
    postedAt: '2026-02-25'
  },
  {
    id: '16',
    title: 'Teamleiter Gastronomie (m/w/d)',
    company: 'Ravensburger AG',
    location: 'Meckenbeuren',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Teamleiter Gastronomie (m/w/d)',
    tags: ['Fachkraft - Gastronomie'],
    postedAt: '2026-02-25'
  },
  {
    id: '17',
    title: 'Servicekraft Gastronomie (m/w/d)',
    company: 'Sol Melia Deutschland GmbH',
    location: 'Leipzig',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Servicekraft Gastronomie (m/w/d)',
    tags: ['Servicekraft - Gastronomie und Gastgewerbe'],
    postedAt: '2026-02-25'
  },
  {
    id: '18',
    title: 'Gastronomie',
    company: 'Weinstube Korkenzieher',
    location: 'Schweinfurt',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Gastronomie',
    tags: ['Koch/Köchin'],
    postedAt: '2026-02-22'
  },
  {
    id: '19',
    title: 'Mitarbeiter Gastronomie (m/w/d)',
    company: 'mömax Deutschland GmbH',
    location: 'Schwäbisch Gmünd',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Mitarbeiter Gastronomie (m/w/d)',
    tags: ['Servicekraft - Gastronomie und Gastgewerbe'],
    postedAt: '2026-02-22'
  },
  {
    id: '20',
    title: 'Fachkraft für Gastronomie',
    company: 'DSR Hotel Holding GmbH',
    location: 'Wernigerode',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Fachkraft für Gastronomie',
    tags: ['Fachkraft - Gastronomie'],
    postedAt: '2026-02-19'
  },
  {
    id: '21',
    title: 'Fachkraft für Gastronomie',
    company: 'DSR Hotel Holding GmbH',
    location: 'Seebad Bansin',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Fachkraft für Gastronomie',
    tags: ['Fachkraft - Gastronomie'],
    postedAt: '2026-02-19'
  },
  {
    id: '22',
    title: 'Fachkraft für Gastronomie',
    company: 'DSR Hotel Holding GmbH',
    location: 'Rostock',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Fachkraft für Gastronomie',
    tags: ['Fachkraft - Gastronomie'],
    postedAt: '2026-02-19'
  },
  {
    id: '23',
    title: 'Fachkraft für Gastronomie',
    company: 'DSR Hotel Holding GmbH',
    location: 'Lübeck',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Fachkraft für Gastronomie',
    tags: ['Fachkraft - Gastronomie'],
    postedAt: '2026-02-19'
  },
  {
    id: '24',
    title: 'Fachkraft für Gastronomie',
    company: 'Bäderbetriebsgesellschaft Oldenburg mbH',
    location: 'Oldenburg (Oldb)',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Fachkraft für Gastronomie',
    tags: ['Fachkraft - Gastronomie'],
    postedAt: '2026-02-19'
  },
  {
    id: '25',
    title: 'Fachkraft für Gastronomie',
    company: 'Salus Altmark Holding gGmbH',
    location: 'Stendal',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Fachkraft für Gastronomie',
    tags: ['Fachkraft - Gastronomie'],
    postedAt: '2026-02-19'
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