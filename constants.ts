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
    title: 'Chef de Partie (m/w/d)',
    company: 'Grand Hotel Berlin',
    location: 'Berlin, Mitte',
    type: 'Vollzeit',
    category: JobCategory.Kueche,
    salary: '2.800€ - 3.200€',
    postedAt: 'Vor 2 Tagen',
    description: 'Wir suchen einen ambitionierten Chef de Partie für unser Gourmet-Restaurant. Erfahrung in der gehobenen Gastronomie erforderlich.',
    tags: ['Fine Dining', 'Team', 'Aufstiegschancen']
  },
  {
    id: '2',
    title: 'Servicekraft (m/w/d)',
    company: 'Café Sonnenschein',
    location: 'München, Schwabing',
    type: 'Teilzeit',
    category: JobCategory.Service,
    salary: '16€/Std + Trinkgeld',
    postedAt: 'Heute',
    description: 'Freundliche Servicekraft für unser belebtes Café gesucht. Du liebst Kaffee und den Umgang mit Menschen?',
    tags: ['Frühstück', 'Tagesdienst', 'Familiär']
  },
  {
    id: '3',
    title: 'Restaurantleiter (m/w/d)',
    company: 'Steakhouse Prime',
    location: 'Hamburg, HafenCity',
    type: 'Vollzeit',
    category: JobCategory.Management,
    salary: '4.500€ + Bonus',
    postedAt: 'Vor 1 Woche',
    description: 'Erfahrener Gastgeber gesucht, der unser Team führt und operative Exzellenz sicherstellt.',
    tags: ['Führung', 'Budgetverantwortung', 'Systemgastro']
  },
  {
    id: '4',
    title: 'Barkeeper / Mixologist (m/w/d)',
    company: 'Sky Bar Frankfurt',
    location: 'Frankfurt am Main',
    type: 'Vollzeit',
    category: JobCategory.Bar,
    salary: '3.000€',
    postedAt: 'Vor 3 Tagen',
    description: 'Kreativer Kopf für unsere High-End Bar gesucht. Umfassende Cocktail-Kenntnisse vorausgesetzt.',
    tags: ['Nachtarbeit', 'Cocktails', 'International']
  },
  {
    id: '5',
    title: 'Spülkraft / Küchenhilfe (m/w/d)',
    company: 'Gasthof zur Post',
    location: 'Stuttgart',
    type: 'Aushilfe',
    category: JobCategory.Kueche,
    salary: '14€/Std',
    postedAt: 'Gestern',
    description: 'Unterstützung für unser Küchenteam gesucht. Zuverlässigkeit ist uns wichtiger als Erfahrung.',
    tags: ['Minijob', 'Abends', 'Quereinsteiger']
  },
  {
    id: '6',
    title: 'Rezeptionist (m/w/d)',
    company: 'Boutique Hotel Rhein',
    location: 'Köln',
    type: 'Vollzeit',
    category: JobCategory.Hotel,
    salary: '2.600€',
    postedAt: 'Vor 5 Tagen',
    description: 'Das erste Lächeln für unsere Gäste. Englischkenntnisse und Erfahrung mit Hotelsoftware (PMS) erwünscht.',
    tags: ['Front Office', 'Empfang', 'Schichtdienst']
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