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
    id: '2',
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
    id: '3',
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
    id: '4',
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
    id: '5',
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
    id: '6',
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
    id: '7',
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
    id: '8',
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
    id: '9',
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
    id: '10',
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
    id: '11',
    title: 'Fachkraft - Gastronomie',
    company: 'K.u.K. Hofzuckerbäcker Ch.Demel\'s Söhne GmbH',
    location: 'Wien,Innere Stadt',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Fachkraft - Gastronomie',
    tags: ['Fachkraft - Gastronomie'],
    postedAt: '2026-03-12'
  },
  {
    id: '12',
    title: 'Servicekraft (m/w/d) in der Gastronomie',
    company: 'AMEOS Pflegegesellschaft Südholstein mbH & Co. KG',
    location: 'Ratzeburg',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Servicekraft (m/w/d) in der Gastronomie',
    tags: ['Fachkraft - Gastronomie'],
    postedAt: '2026-03-11'
  },
  {
    id: '13',
    title: 'Fachkraft- Gastronomie',
    company: 'MEDIAN Service IV GmbH',
    location: 'Bad Oeynhausen',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Fachkraft- Gastronomie',
    tags: ['Fachkraft - Gastronomie'],
    postedAt: '2026-03-10'
  },
  {
    id: '14',
    title: 'Fachkraft - Gastronomie',
    company: 'Emrich Christopher',
    location: 'Gallspach',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Fachkraft - Gastronomie',
    tags: ['Fachkraft - Gastronomie'],
    postedAt: '2026-03-10'
  },
  {
    id: '15',
    title: 'Fachkraft - Gastronomie',
    company: 'Emrich Christopher',
    location: 'Offenhausen',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Fachkraft - Gastronomie',
    tags: ['Fachkraft - Gastronomie'],
    postedAt: '2026-03-10'
  },
  {
    id: '16',
    title: 'Werkstudent Gastronomie (m/w/d)',
    company: 'Schwarz Corporate Solutions',
    location: 'Neckarsulm',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Werkstudent Gastronomie (m/w/d)',
    tags: ['Servicekraft - Gastronomie und Gastgewerbe'],
    postedAt: '2026-03-10'
  },
  {
    id: '17',
    title: 'Fachkraft Gastronomie',
    company: 'HAFFHUS GmbH',
    location: 'Ueckermünde',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Fachkraft Gastronomie',
    tags: ['Fachkraft - Gastronomie'],
    postedAt: '2026-03-09'
  },
  {
    id: '18',
    title: 'Mitarbeiter (m/w/d) Gastronomie',
    company: 'Bruno Leo',
    location: 'Dillenburg',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Mitarbeiter (m/w/d) Gastronomie',
    tags: ['Servicekraft - Gastronomie und Gastgewerbe'],
    postedAt: '2026-03-05'
  },
  {
    id: '19',
    title: 'Teamleitung Gastronomie (m/w/d)',
    company: 'bewaffel dich betriebsgesellschaft mbH',
    location: 'Halle (Saale)',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Teamleitung Gastronomie (m/w/d)',
    tags: ['Fachkraft - Küche'],
    postedAt: '2026-03-05'
  },
  {
    id: '20',
    title: 'Fachkraft Gastronomie (m/w/d)',
    company: 'Seitenbacher KG Naturkost',
    location: 'Buchen (Odenwald)',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Fachkraft Gastronomie (m/w/d)',
    tags: ['Fachkraft - Gastronomie'],
    postedAt: '2026-03-05'
  },
  {
    id: '21',
    title: 'Servicekraft Gastronomie',
    company: 'Rene Reuter Reuters Kitchen Catering & Service',
    location: 'Düsseldorf',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Servicekraft Gastronomie',
    tags: ['Servicekraft - Gastronomie und Gastgewerbe'],
    postedAt: '2026-03-04'
  },
  {
    id: '22',
    title: 'Fachkraft - Gastronomie',
    company: 'Zum Oberjäger Hotel Betrieb s GmbH',
    location: 'Lackenbach',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Fachkraft - Gastronomie',
    tags: ['Fachkraft - Gastronomie'],
    postedAt: '2026-03-04'
  },
  {
    id: '23',
    title: 'Servicemitarbeiter für die Gastronomie (m/w/d) *Minijob*',
    company: 'Theater Lübeck gGmbH',
    location: 'Lübeck',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Servicemitarbeiter für die Gastronomie (m/w/d) *Minijob*',
    tags: ['Fachkraft - Gastronomie'],
    postedAt: '2026-03-04'
  },
  {
    id: '24',
    title: 'Servicekraft - Gastronomie und Gastgewerbe (m/w/d)',
    company: 'Restaurant in der Rommelmühle',
    location: 'Bietigheim-Bissingen',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Servicekraft - Gastronomie und Gastgewerbe (m/w/d)',
    tags: ['Servicekraft - Gastronomie und Gastgewerbe'],
    postedAt: '2026-03-04'
  },
  {
    id: '25',
    title: 'Fachkraft Gastronomie ? (w/m/d)',
    company: 'BUHL Personal GmbH - Niederlassung Leipzig',
    location: 'Leipzig',
    type: 'Vollzeit',
    category: JobCategory.OTHER,
    description: 'Fachkraft Gastronomie ? (w/m/d)',
    tags: ['Restaurantfachmann/-frau'],
    postedAt: '2026-03-04'
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