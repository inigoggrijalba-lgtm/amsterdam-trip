import { DayPlan } from './types';

export const ITINERARY: DayPlan[] = [
  {
    id: 'day-1',
    date: 'Viernes 13 FEB',
    title: 'Día 1',
    subtitle: 'Primer Contacto & Museos',
    theme: 'Llegada y Arte',
    coverImage: 'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?q=80&w=1000&auto=format&fit=crop',
    activities: [
      {
        id: 'd1-arrival',
        time: '09:00',
        title: 'Llegada a Schiphol',
        description: 'Aterrizaje y recogida de equipaje.',
        locationQuery: 'Schiphol Airport',
        type: 'transport'
      },
      {
        id: 'd1-train',
        time: '09:30',
        title: 'Tren al Centro',
        description: 'Tren directo a Amsterdam Centraal (15-18 min).',
        locationQuery: 'Schiphol Airport Railway Station',
        type: 'transport'
      },
      {
        id: 'd1-lockers',
        time: '10:00',
        title: 'Dejar Mochilas',
        description: 'Taquillas en la estación o ir directo al alojamiento si permiten drop-off.',
        locationQuery: 'Amsterdam Centraal',
        type: 'hotel'
      },
      {
        id: 'd1-walking',
        time: '10:30',
        title: 'Walking Tour Centro',
        description: 'Ruta suave: Damrak, Plaza Dam (Palacio Real), Begijnhof (oasis silencio) y Bloemenmarkt.',
        locationQuery: 'Dam Square, Amsterdam',
        type: 'walk'
      },
      {
        id: 'd1-lunch',
        time: '12:15',
        title: 'Comida Ligera',
        description: 'Parada para reponer fuerzas por el centro.',
        locationQuery: 'The Pantry Amsterdam',
        type: 'food',
        recommendations: [
          { name: 'The Pantry (Holandés casero)', query: 'The Pantry Amsterdam' },
          { name: 'Gartine (Romántico/Local)', query: 'Gartine Amsterdam' },
          { name: 'SLA (Rápido y sano)', query: 'SLA Amsterdam' }
        ]
      },
      {
        id: 'd1-vangogh',
        time: '14:30',
        title: 'Museo Van Gogh',
        description: 'Visita de 2h. ¡Importante! Ver exposición "Yellow". Reserva necesaria.',
        locationQuery: 'Van Gogh Museum',
        type: 'culture',
        important: true
      },
      {
        id: 'd1-museumplein',
        time: '17:00',
        title: 'Paseo Museumplein',
        description: 'Disfrutar del parque y tomar un chocolate caliente.',
        locationQuery: 'Museumplein',
        type: 'leisure'
      },
      {
        id: 'd1-checkin',
        time: '18:00',
        title: 'Check-in Houseboat',
        description: 'Tiempo para relajarse y disfrutar de nuestro barco.',
        locationQuery: 'Amsterdam Houseboat', 
        type: 'hotel'
      },
      {
        id: 'd1-dinner',
        time: '20:00',
        title: 'Cena Romántica',
        description: 'Cena íntima para cerrar el primer día.',
        locationQuery: 'De Belhamel Amsterdam',
        type: 'food',
        recommendations: [
          { name: 'De Belhamel (Canal view)', query: 'De Belhamel Amsterdam' },
          { name: 'Restaurant Black (Moderno)', query: 'Restaurant Black Amsterdam' },
          { name: 'Moeders (Tradicional)', query: 'Moeders Amsterdam' }
        ]
      }
    ]
  },
  {
    id: 'day-2',
    date: 'Sábado 14 FEB',
    title: 'Día 2',
    subtitle: 'San Valentín ❤️',
    theme: 'Amor, Canales y Mercados',
    coverImage: 'https://images.unsplash.com/photo-1583295125721-766a0088cd3f?q=80&w=1000&auto=format&fit=crop',
    activities: [
      {
        id: 'd2-breakfast',
        time: '09:30',
        title: 'Desayuno en De Pijp',
        description: 'Empezar el día con energía en el barrio latino.',
        locationQuery: 'De Pijp Amsterdam',
        type: 'food',
        recommendations: [
          { name: 'CT Coffee & Coconuts', query: 'CT Coffee & Coconuts Amsterdam' },
          { name: 'Little Collins', query: 'Little Collins De Pijp' }
        ]
      },
      {
        id: 'd2-park',
        time: '10:30',
        title: 'Paseo Vondelpark',
        description: 'Perfecto para fotos románticas de mañana.',
        locationQuery: 'Vondelpark',
        type: 'walk'
      },
      {
        id: 'd2-cruise',
        time: '12:00',
        title: 'Crucero Romántico',
        description: 'Navegación por los canales (75-90 min).',
        locationQuery: 'Pure Boats Amsterdam',
        type: 'leisure',
        important: true,
        recommendations: [
          { name: 'Pure Boats (Recomendado)', query: 'Pure Boats Amsterdam' },
          { name: 'Amsterdam Boat Trips', query: 'Amsterdam Boat Trips' }
        ]
      },
      {
        id: 'd2-foodhallen',
        time: '13:45',
        title: 'Comida en Foodhallen',
        description: 'Picar algo variado: burgers, asiático, gin tonics...',
        locationQuery: 'Foodhallen Amsterdam',
        type: 'food'
      },
      {
        id: 'd2-museum',
        time: '15:30',
        title: 'Tarde de Arte',
        description: 'Opción Clásica (Stedelijk) o Alternativa (Ferry a NDSM + STRAAT Museum).',
        locationQuery: 'Stedelijk Museum Amsterdam',
        type: 'culture',
        recommendations: [
          { name: 'Stedelijk Museum', query: 'Stedelijk Museum Amsterdam' },
          { name: 'STRAAT Museum (NDSM)', query: 'STRAAT Museum Amsterdam' }
        ]
      },
      {
        id: 'd2-dinner',
        time: '20:00',
        title: 'Cena San Valentín',
        description: 'La gran cena especial.',
        locationQuery: 'The Duchess Amsterdam',
        type: 'food',
        important: true,
        recommendations: [
          { name: 'The Duchess (Elegante)', query: 'The Duchess Amsterdam' },
          { name: 'Ciel Bleu (Michelin)', query: 'Ciel Bleu Restaurant Amsterdam' },
          { name: 'The Seafood Bar (Marisco)', query: 'The Seafood Bar Amsterdam' }
        ]
      },
      {
        id: 'd2-walk',
        time: '22:00',
        title: 'Paseo Nocturno',
        description: 'Caminar viendo los canales iluminados.',
        locationQuery: 'Keizersgracht',
        type: 'walk'
      }
    ]
  },
  {
    id: 'day-3',
    date: 'Domingo 15 FEB',
    title: 'Día 3',
    subtitle: 'Historia & Jordaan',
    theme: 'Barrios con encanto',
    coverImage: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=1000&auto=format&fit=crop',
    activities: [
      {
        id: 'd3-jordaan',
        time: '09:00',
        title: 'Ruta por Jordaan',
        description: 'Descubrir casitas estrechas, cafés y tiendas vintage.',
        locationQuery: 'Jordaan Amsterdam',
        type: 'walk'
      },
      {
        id: 'd3-anne',
        time: '10:00',
        title: 'Casa de Ana Frank',
        description: 'Visita histórica obligatoria (1h-1h15). Entradas reservadas.',
        locationQuery: 'Anne Frank House',
        type: 'culture',
        important: true
      },
      {
        id: 'd3-brunch',
        time: '12:00',
        title: 'Brunch Local',
        description: 'Parada obligatoria para probar la tarta de manzana.',
        locationQuery: 'Winkel 43',
        type: 'food',
        recommendations: [
          { name: 'Winkel 43 (Tarta manzana)', query: 'Winkel 43 Amsterdam' },
          { name: 'Dignita Westerpark', query: 'Dignita Westerpark' },
          { name: 'Kessens', query: 'Kessens Amsterdam' }
        ]
      },
      {
        id: 'd3-adam',
        time: '13:30',
        title: 'A\'DAM Tower',
        description: 'Ferry gratis y subida al mirador panorámico.',
        locationQuery: 'A\'DAM Lookout',
        type: 'leisure'
      },
      {
        id: 'd3-afternoon',
        time: '15:30',
        title: 'Paseo Ribera o Extra',
        description: 'Paseo por el IJ, Waterlooplein Market o Heineken Experience.',
        locationQuery: 'Waterlooplein Market',
        type: 'walk'
      },
      {
        id: 'd3-dinner',
        time: '19:30',
        title: 'Cena Relajada',
        description: 'Algo rico y tranquilo para acabar el finde.',
        locationQuery: 'Pazzi Amsterdam',
        type: 'food',
        recommendations: [
          { name: 'Pazzi (Pizza)', query: 'Pazzi Amsterdam' },
          { name: 'Bistro Berlage', query: 'Bistro Berlage' },
          { name: 'Café Bern (Fondue)', query: 'Cafe Bern Amsterdam' }
        ]
      }
    ]
  },
  {
    id: 'day-4',
    date: 'Lunes 16 FEB',
    title: 'Día 4',
    subtitle: 'Despedida Relax',
    theme: 'Últimos momentos',
    coverImage: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?q=80&w=1000&auto=format&fit=crop',
    activities: [
      {
        id: 'd4-walk',
        time: '09:30',
        title: 'Paseo por el Amstel',
        description: 'Cruzar el Magere Brug (Puente Delgado).',
        locationQuery: 'Magere Brug',
        type: 'walk'
      },
      {
        id: 'd4-brunch',
        time: '10:45',
        title: 'Último Café/Brunch',
        description: 'Disfrutar de las vistas del canal.',
        locationQuery: 'Bakhuys Amsterdam',
        type: 'food',
        recommendations: [
          { name: 'Bakhuys', query: 'Bakhuys Amsterdam' },
          { name: 'Coffee Company', query: 'Coffee Company Amsterdam' },
          { name: 'Marie Amsterdam', query: 'Marie Amsterdam' }
        ]
      },
      {
        id: 'd4-checkout',
        time: '11:00',
        title: 'Check-out',
        description: 'Salida del alojamiento con equipaje.',
        locationQuery: '',
        type: 'hotel'
      },
      {
        id: 'd4-shop',
        time: '12:00',
        title: 'Compras & Relax',
        description: 'Spiegelkwartier (arte) o 9 Straatjes (boutiques).',
        locationQuery: 'The 9 Streets',
        type: 'leisure'
      },
      {
        id: 'd4-lunch',
        time: '14:00',
        title: 'Comida de Despedida',
        description: 'Último bocado antes de irnos.',
        locationQuery: 'Oriental City Amsterdam',
        type: 'food',
        recommendations: [
          { name: 'Foodware', query: 'Foodware Amsterdam' },
          { name: 'Broodje Bert', query: 'Broodje Bert Amsterdam' },
          { name: 'Oriental City', query: 'Oriental City Amsterdam' }
        ]
      },
      {
        id: 'd4-train',
        time: '17:30',
        title: 'Tren al Aeropuerto',
        description: 'Salida desde Amsterdam Centraal.',
        locationQuery: 'Amsterdam Centraal',
        type: 'transport',
        important: true
      },
      {
        id: 'd4-fly',
        time: '20:40',
        title: 'Vuelo de Vuelta',
        description: 'Fin del viaje maravilloso. ❤️',
        locationQuery: 'Schiphol Airport',
        type: 'transport'
      }
    ]
  }
];