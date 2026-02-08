import { DayPlan } from './types';

export const ITINERARY: DayPlan[] = [
  {
    id: 'day-1',
    date: 'Viernes 13 FEB',
    title: 'Día 1',
    subtitle: 'Llegada y Calma',
    theme: 'Ritmo Pausado',
    coverImage: 'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?q=80&w=1000&auto=format&fit=crop',
    activities: [
      {
        id: 'd1-arrival',
        time: '09:00',
        title: 'Llegada a Schiphol',
        description: 'Aterrizaje y recogida de equipaje sin prisas.',
        locationQuery: 'Schiphol Airport',
        type: 'transport'
      },
      {
        id: 'd1-uber',
        time: '10:00',
        title: 'UBER al Houseboat',
        description: 'Traslado directo para dejar las maletas.\nDirección: Realengracht 9, 1013 KW Amsterdam.',
        locationQuery: 'Realengracht 9, Amsterdam',
        type: 'transport',
        important: true
      },
      {
        id: 'd1-walking-soft',
        time: '11:30',
        title: 'Paseo por los Canales',
        description: 'Caminata suave por el cinturón de canales (Grachtengordel). Explorar la zona cercana a la casa flotante.',
        locationQuery: 'Prinsengracht Amsterdam',
        type: 'walk'
      },
      {
        id: 'd1-lunch-long',
        time: '13:30',
        title: 'Almuerzo sin Prisas',
        description: 'Disfrutar de una comida larga en un rincón acogedor.',
        locationQuery: 'Gartine Amsterdam',
        type: 'food',
        recommendations: [
          { name: 'Gartine (Huerto propio)', query: 'Gartine Amsterdam' },
          { name: 'Buffet van Odette', query: 'Buffet van Odette' }
        ]
      },
      {
        id: 'd1-rest',
        time: '16:00',
        title: 'Tarde en la Houseboat',
        description: 'Momento para disfrutar de nuestro barco. Abrir un vino y ver pasar la tarde sobre el canal.',
        locationQuery: 'Realengracht 9, Amsterdam', 
        type: 'hotel'
      },
      {
        id: 'd1-dinner-chill',
        time: '20:00',
        title: 'Cena de Bienvenida',
        description: 'Cena relajada cerca de los canales centrales.',
        locationQuery: 'De Belhamel Amsterdam',
        type: 'food'
      }
    ]
  },
  {
    id: 'day-2',
    date: 'Sábado 14 FEB',
    title: 'Día 2',
    subtitle: 'San Valentín sobre Ruedas',
    theme: 'Bicis y Arte Moderno',
    coverImage: 'https://images.unsplash.com/photo-1583295125721-766a0088cd3f?q=80&w=1000&auto=format&fit=crop',
    activities: [
      {
        id: 'd2-bike-pickup',
        time: '09:00',
        title: 'Alquiler de Bicicletas',
        description: 'Recogida de nuestras bicis para todo el día. ¡La mejor forma de ver la ciudad!',
        locationQuery: 'Black Bikes Amsterdam',
        type: 'leisure',
        important: true
      },
      {
        id: 'd2-breakfast',
        time: '09:45',
        title: 'Desayuno en De Pijp',
        description: 'Pedalear hasta el barrio latino para un desayuno energético.',
        locationQuery: 'CT Coffee & Coconuts',
        type: 'food'
      },
      {
        id: 'd2-moco',
        time: '11:30',
        title: 'MOCO Museum',
        description: 'Visita al museo de arte contemporáneo (Banksy, Kusama). Recorrido por la Villa Alsberg.',
        locationQuery: 'Moco Museum Amsterdam',
        type: 'culture',
        important: true
      },
      {
        id: 'd2-ride-vondel',
        time: '13:00',
        title: 'Ruta por Vondelpark',
        description: 'Recorrido en bici por el pulmón verde de Ámsterdam. Parada para fotos en el estanque.',
        locationQuery: 'Vondelpark',
        type: 'walk'
      },
      {
        id: 'd2-foodhallen',
        time: '14:15',
        title: 'Comida de San Valentín',
        description: 'Opciones variadas en un ambiente animado.',
        locationQuery: 'Foodhallen Amsterdam',
        type: 'food',
        recommendations: [
          { name: 'Foodhallen (Mercado variado)', query: 'Foodhallen Amsterdam' },
          { name: 'The Seafood Bar (Marisco fresco)', query: 'The Seafood Bar Spui' },
          { name: 'Pluk (Instagrammable & Sano)', query: 'Pluk Amsterdam' },
          { name: 'Moeders (Casero holandés)', query: 'Moeders Amsterdam' }
        ]
      },
      {
        id: 'd2-canal-ride',
        time: '16:30',
        title: 'Circuito de los Canales',
        description: 'Ruta en bici por Prinsengracht, Keizersgracht y Herengracht. Ver las casas "danzantes" y los puentes icónicos.',
        locationQuery: 'Leidseplein',
        type: 'walk'
      },
      {
        id: 'd2-dinner-special',
        time: '20:30',
        title: 'Gran Cena de Aniversario',
        description: 'Celebración especial en uno de los mejores locales de la ciudad.',
        locationQuery: 'The Duchess Amsterdam',
        type: 'food',
        important: true,
        recommendations: [
          { name: 'The Duchess (Sofisticado)', query: 'The Duchess Amsterdam' },
          { name: 'Pesca (El teatro del pescado)', query: 'Pesca Amsterdam' },
          { name: 'Restaurant Bussia (Italiano top)', query: 'Bussia Amsterdam' },
          { name: 'Restaurant C (Experiencia 360)', query: 'Restaurant C Amsterdam' }
        ]
      },
      {
        id: 'd2-bike-return',
        time: '22:30',
        title: 'Devolución de Bicis',
        description: 'Entrega de las bicicletas antes de volver a la Houseboat.',
        locationQuery: 'Black Bikes Amsterdam',
        type: 'leisure'
      }
    ]
  },
  {
    id: 'day-3',
    date: 'Domingo 15 FEB',
    title: 'Día 3',
    subtitle: 'Jordaan y NDSM Art',
    theme: 'Barrios y Street Art',
    coverImage: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=1000&auto=format&fit=crop',
    activities: [
      {
        id: 'd3-jordaan-deep',
        time: '09:30',
        title: 'Secretos de Jordaan',
        description: 'Exploración a fondo: entrar en algún "hofje" (patio escondido) como el Karthuizerhof.',
        locationQuery: 'Jordaan Amsterdam',
        type: 'walk'
      },
      {
        id: 'd3-brunch-winkel',
        time: '11:30',
        title: 'El Brunch Perfecto',
        description: 'Tarta de manzana famosa y café frente a la Noorderkerk.',
        locationQuery: 'Winkel 43',
        type: 'food',
        recommendations: [
          { name: 'Winkel 43 (Tarta mítica)', query: 'Winkel 43 Amsterdam' },
          { name: 'Bakers & Roasters (Brunch Kiwi)', query: 'Bakers & Roasters Amsterdam' },
          { name: 'Greenwoods (Clásico Inglés)', query: 'Greenwoods Keizersgracht' },
          { name: 'Dignita Hoftuin (Oasis verde)', query: 'Dignita Hoftuin' }
        ]
      },
      {
        id: 'd3-ferry',
        time: '13:30',
        title: 'Ferry NDSM-werf',
        description: 'Embarque en la línea F4 detrás de la Estación Central. Travesía de 15 min por el río IJ.',
        locationQuery: 'Amsterdam Centraal Ferry Terminal',
        type: 'transport'
      },
      {
        id: 'd3-straat',
        time: '14:00',
        title: 'STRAAT Museum',
        description: 'Dirección: NDSM-Plein 1. El mayor museo de arte urbano en un antiguo hangar naval de 8.000m2.',
        locationQuery: 'STRAAT Museum Amsterdam',
        type: 'culture',
        important: true
      },
      {
        id: 'd3-ndsm-walk',
        time: '16:30',
        title: 'Exploración NDSM',
        description: 'Paseo por el muelle industrial, ver el submarino abandonado y los contenedores de artistas.',
        locationQuery: 'NDSM Wharf',
        type: 'walk'
      },
      {
        id: 'd3-dinner-pazzi',
        time: '19:45',
        title: 'Última Cena en la Ciudad',
        description: 'Regreso al centro para una cena con encanto local.',
        locationQuery: 'Pazzi Amsterdam',
        type: 'food',
        recommendations: [
          { name: 'Pazzi (Pizza artesanal)', query: 'Pazzi Amsterdam' },
          { name: 'Toscanini (Italiano auténtico)', query: 'Toscanini Amsterdam' },
          { name: 'Cannibale Royale (Brasas)', query: 'Cannibale Royale Ruysdaelkade' },
          { name: 'Hap-Hmm (Tradicional barato)', query: 'Hap-Hmm Amsterdam' }
        ]
      }
    ]
  },
  {
    id: 'day-4',
    date: 'Lunes 16 FEB',
    title: 'Día 4',
    subtitle: 'Despedida Amstel',
    theme: 'Últimos Momentos',
    coverImage: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?q=80&w=1000&auto=format&fit=crop',
    activities: [
      {
        id: 'd4-amstel',
        time: '09:30',
        title: 'Río Amstel',
        description: 'Paseo por el puente Magere Brug y las esclusas.',
        locationQuery: 'Magere Brug',
        type: 'walk'
      },
      {
        id: 'd4-brunch-final',
        time: '11:00',
        title: 'Último Café',
        description: 'Despedirse de los canales con un buen café y bollos artesanos.',
        locationQuery: 'Bakhuys Amsterdam',
        type: 'food'
      },
      {
        id: 'd4-train-airport',
        time: '17:30',
        title: 'Hacia Schiphol',
        description: 'Regreso al aeropuerto. ¡Fin de un viaje inolvidable!',
        locationQuery: 'Amsterdam Centraal',
        type: 'transport'
      }
    ]
  },
  {
    id: 'info-local',
    date: 'Extra',
    title: 'INFO LOCAL',
    subtitle: 'Guía de Supervivencia',
    theme: 'Datos Útiles',
    coverImage: '', 
    activities: [
      {
        id: 'info-culture',
        time: '🏛️',
        title: 'Cultura y Museos',
        description: 'Las joyas artísticas de la ciudad.',
        locationQuery: 'Museumplein',
        type: 'culture',
        items: [
          { title: 'STRAAT Museum', description: 'NDSM-Plein 1. El museo de arte callejero más grande del mundo en un hangar industrial.', query: 'STRAAT Museum' },
          { title: 'MOCO Museum', description: 'Famoso por sus exposiciones de Banksy y arte moderno en un edificio histórico.', query: 'Moco Museum' },
          { title: 'Rijksmuseum', description: 'La joya de la corona. Dedica varias horas para ver "La Ronda de Noche" de Rembrandt.', query: 'Rijksmuseum' },
          { title: 'Museo Van Gogh', description: 'Alberga la colección más grande del mundo del pintor post-impresionista.', query: 'Van Gogh Museum' },
          { title: 'Casa de Ana Frank', description: 'Una experiencia conmovedora. Requiere reserva con muchísima antelación.', query: 'Anne Frank House' },
          { title: 'Stedelijk Museum', description: 'Dedicado al arte moderno y contemporáneo y al diseño.', query: 'Stedelijk Museum' },
          { title: 'Casa de Rembrandt', description: 'Visita la casa-taller original del maestro.', query: 'Rembrandt House Museum' },
          { title: 'Hermitage Amsterdam', description: 'Exposiciones de talla mundial junto al río Amstel.', query: 'Hermitage Amsterdam' },
          { title: 'Museo de los Canales', description: 'Aprende cómo se construyó la famosa red de canales.', query: 'Museum of the Canals' },
          { title: 'NEMO Science Museum', description: 'Museo interactivo con una terraza con vistas geniales.', query: 'NEMO Science Museum' }
        ]
      },
      {
        id: 'info-plans',
        time: '🚲',
        title: 'Planes Clave',
        description: 'Experiencias imprescindibles.',
        locationQuery: 'Amsterdam',
        type: 'leisure',
        items: [
          { title: 'Alquilar una Bici', description: 'La forma más auténtica de moverse. Alquila en MacBike o Black Bikes.', query: 'Bike Rental Amsterdam' },
          { title: 'Paseo en Barco', description: 'Crucero turístico o alquila un bote pequeño eléctrico.', query: 'Canal Cruise Amsterdam' },
          { title: 'Vondelpark', description: 'El parque más famoso, ideal para un pícnic o paseo.', query: 'Vondelpark' },
          { title: 'Jordaan', description: 'Barrio encantador con callejones estrechos y patios secretos (hofjes).', query: 'Jordaan' },
          { title: 'Plaza Dam', description: 'Centro histórico con el Palacio Real.', query: 'Dam Square' },
          { title: 'A\'DAM Lookout', description: 'Mirador panorámico y columpio sobre el borde.', query: 'A\'DAM Lookout' },
          { title: 'Bloemenmarkt', description: 'Único mercado de flores flotante del mundo.', query: 'Bloemenmarkt' },
          { title: 'Heineken Experience', description: 'Recorrido interactivo por la antigua fábrica.', query: 'Heineken Experience' },
          { title: 'Los Nueve Calles', description: 'Boutiques de diseño, tiendas vintage y cafés únicos.', query: 'The 9 Streets' },
          { title: 'Westerkerk', description: 'Sube a su torre para las mejores vistas de Jordaan.', query: 'Westerkerk' },
          { title: 'Mercado Albert Cuyp', description: 'Mercado al aire libre perfecto para sentir el ambiente local.', query: 'Albert Cuyp Market' }
        ]
      },
      {
        id: 'info-food-dutch',
        time: '🍽️',
        title: 'Comida Típica',
        description: 'Lo que hay que probar sí o sí.',
        locationQuery: 'Amsterdam',
        type: 'food',
        items: [
          { title: 'Stroopwafel', description: 'Prueba uno recién hecho y caliente en el Albert Cuypmarkt.', query: 'Stroopwafel Albert Cuyp Market' },
          { title: 'Patat/Frites', description: 'Patatas fritas servidas con mayonesa u otras salsas.', query: 'Manneken Pis Fries' },
          { title: 'Haring (Arenque)', description: 'Pescado crudo servido con cebolla y pepinillos en puestos callejeros.', query: 'Haringhandel Amsterdam' },
          { title: 'Kroket y Bitterballen', description: 'Bolitas fritas de ragú, ideales con una cerveza.', query: 'Cafe Luxembourg' },
          { title: 'Quesos Holandeses', query: 'Cheese Shop Amsterdam', description: 'Degusta quesos Gouda, Edam y Maasdam.' },
          { title: 'Poffertjes', description: 'Mini tortitas dulces con mantequilla y azúcar glass.', query: 'Poffertjes Albert Cuyp' }
        ]
      },
      {
        id: 'info-food-cafes',
        time: '☕',
        title: 'Cafés y Bares',
        description: 'Desde lo clásico a lo moderno.',
        locationQuery: 'Amsterdam',
        type: 'food',
        items: [
          { title: 'Café Chris (Jordaan)', description: 'Uno de los Brown Cafés más antiguos y auténticos.', query: 'Cafe Chris' },
          { title: 'Café Hoppe', description: 'Histórico y elegante en la zona de Spui.', query: 'Cafe Hoppe' },
          { title: 'De Drie Fleschjes', description: 'Taberna de licores más antigua de la ciudad.', query: 'De Drie Fleschjes' },
          { title: 'Modernos', description: 'Coffee Company o Bagels & Beans para un buen desayuno.', query: 'Coffee Company Amsterdam' }
        ]
      },
      {
        id: 'info-food-world',
        time: '🍜',
        title: 'Cocina Internacional',
        description: 'Sabores del mundo en Ámsterdam.',
        locationQuery: 'Amsterdam',
        type: 'food',
        items: [
          { title: 'Indonesa (Rijsttafel)', description: 'El festín de platos pequeños "Mesa de Arroz". Prueba en Tempo Doeloe.', query: 'Restaurant Tempo Doeloe' },
          { title: 'Alta Gama', description: 'Restaurantes como Vinkeles o De Kas (en un invernadero).', query: 'Restaurant De Kas' },
          { title: 'Foodhallen', description: 'Mercado interior con gran variedad internacional.', query: 'Foodhallen' }
        ]
      },
      {
        id: 'info-excursions',
        time: '🏘️',
        title: 'Excursiones',
        description: 'Escapadas de un día.',
        locationQuery: 'Amsterdam Central',
        type: 'transport',
        items: [
          { title: 'Zaanse Schans', description: 'Pueblo de postal con molinos y talleres de zuecos.', query: 'Zaanse Schans' },
          { title: 'Volendam y Marken', description: 'Encantadores pueblos pesqueros tradicionales.', query: 'Volendam' },
          { title: 'Haarlem', description: 'Ciudad tranquila con impresionante plaza principal.', query: 'Haarlem' }
        ]
      }
    ]
  }
];