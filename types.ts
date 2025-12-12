export interface Recommendation {
  name: string;
  query: string;
}

export interface ActivityItem {
  title: string;
  description: string;
  query: string;
}

export interface Activity {
  id: string;
  time: string;
  title: string;
  description: string;
  locationQuery: string; // Para Google Maps principal de la actividad
  type: 'transport' | 'food' | 'culture' | 'walk' | 'leisure' | 'hotel' | 'info';
  recommendations?: Recommendation[]; // Lista de botones clicables
  items?: ActivityItem[]; // Lista de mini-tarjetas detalladas (para Info Local)
  important?: boolean;
}

export interface DayPlan {
  id: string;
  date: string;
  title: string;
  subtitle: string;
  theme: string;
  coverImage: string;
  activities: Activity[];
}