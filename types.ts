export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Vollzeit' | 'Teilzeit' | 'Aushilfe' | 'Ausbildung';
  category: JobCategory;
  salary: string;
  postedAt: string;
  description: string;
  tags: string[];
}

export enum JobCategory {
  Kueche = 'Küche',
  Service = 'Service',
  Management = 'Management',
  Bar = 'Bar',
  Hotel = 'Hotel',
  Catering = 'Catering'
}

export interface NavItem {
  label: string;
  path: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
