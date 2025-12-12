import React from 'react';
import { HashRouter, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import { 
  MapPin, 
  Clock, 
  ChevronLeft, 
  Utensils, 
  Coffee, 
  Camera, 
  Footprints, 
  Train, 
  Plane, 
  Bed, 
  Landmark,
  Heart,
  Navigation,
  ExternalLink
} from 'lucide-react';
import { ITINERARY } from './data';
import { Activity, DayPlan } from './types';

// --- Components ---

const IconMap: Record<string, React.ReactElement> = {
  transport: <Train className="w-5 h-5 text-blue-500" />,
  food: <Utensils className="w-5 h-5 text-rose-500" />,
  culture: <Landmark className="w-5 h-5 text-purple-500" />,
  walk: <Footprints className="w-5 h-5 text-emerald-500" />,
  leisure: <Camera className="w-5 h-5 text-orange-500" />,
  hotel: <Bed className="w-5 h-5 text-indigo-500" />
};

interface ActivityCardProps {
  activity: Activity;
  isLast: boolean;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity, isLast }) => {
  const openMap = (e: React.MouseEvent, query: string) => {
    e.preventDefault();
    e.stopPropagation();
    const encodedQuery = encodeURIComponent(query);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedQuery}`, '_blank');
  };

  return (
    <div className="flex gap-4 relative">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-[19px] top-10 bottom-[-16px] w-0.5 bg-gray-200 z-0"></div>
      )}

      {/* Time & Icon column */}
      <div className="flex flex-col items-center gap-2 z-10 min-w-[50px]">
        <div className="text-xs font-bold text-gray-500">{activity.time}</div>
        <div className={`p-2 rounded-full border-2 shadow-sm bg-white ${activity.important ? 'border-rose-400' : 'border-gray-100'}`}>
          {IconMap[activity.type] || <MapPin className="w-5 h-5 text-gray-500" />}
        </div>
      </div>

      {/* Content Card */}
      <div 
        onClick={(e) => openMap(e, activity.locationQuery)}
        className={`flex-1 mb-6 p-4 rounded-xl border transition-all duration-200 active:scale-95 cursor-pointer shadow-sm hover:shadow-md bg-white ${
          activity.important ? 'border-rose-200 ring-1 ring-rose-100' : 'border-gray-100'
        }`}
      >
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-bold text-gray-800 text-lg leading-tight">{activity.title}</h3>
          <Navigation className="w-4 h-4 text-gray-400 mt-1" />
        </div>
        
        <p className="text-gray-600 text-sm mb-2">{activity.description}</p>
        
        {activity.recommendations && activity.recommendations.length > 0 && (
          <div className="mt-3 bg-rose-50 p-2 rounded-lg border border-rose-100">
            <p className="text-xs font-semibold text-rose-700 mb-2 flex items-center gap-1">
              <Heart className="w-3 h-3 fill-rose-500" /> Opciones Recomendadas:
            </p>
            <div className="flex flex-wrap gap-2">
              {activity.recommendations.map((rec, idx) => (
                <button
                  key={idx}
                  onClick={(e) => openMap(e, rec.query)}
                  className="group flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-md text-xs text-gray-700 border border-gray-200 shadow-sm hover:border-rose-300 hover:text-rose-600 active:bg-rose-50 transition-colors"
                >
                  <span>{rec.name}</span>
                  <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100" />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// --- Views ---

const HomePage = () => {
  return (
    <div className="min-h-screen pb-10 px-4 pt-8 max-w-md mx-auto">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-serif text-gray-900 mb-2">Ámsterdam</h1>
        <p className="text-rose-500 font-medium tracking-widest text-sm uppercase">Viaje de Aniversario 2026</p>
        <div className="mt-4 inline-block bg-white px-4 py-1 rounded-full text-xs font-mono text-gray-500 shadow-sm border border-gray-100">
          13 - 16 Febrero
        </div>
      </header>

      <div className="grid gap-6">
        {ITINERARY.map((day) => (
          <Link key={day.id} to={`/day/${day.id}`} className="block group">
            <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-[1.02] active:scale-95 bg-gray-200">
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
              <img 
                src={day.coverImage} 
                alt={day.title} 
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              
              <div className="absolute bottom-0 left-0 p-5 z-20 w-full">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="inline-block px-2 py-0.5 bg-rose-500 text-white text-[10px] font-bold rounded mb-2 uppercase tracking-wide">
                      {day.date}
                    </span>
                    <h2 className="text-2xl font-serif text-white leading-tight">{day.title}</h2>
                    <p className="text-gray-200 text-sm mt-1 font-light opacity-90">{day.subtitle}</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-md p-2 rounded-full">
                    <ChevronLeft className="w-5 h-5 text-white rotate-180" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <footer className="mt-12 text-center text-gray-400 text-xs font-light">
        Hecho con ❤️ para nuestro viaje
      </footer>
    </div>
  );
};

const DayDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const day = ITINERARY.find(d => d.id === id);

  if (!day) return <div>Día no encontrado</div>;

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Header Image */}
      <div className="relative h-64 bg-gray-300">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src={day.coverImage} 
          alt={day.title} 
          className="w-full h-full object-cover"
        />
        
        {/* Navbar inside Header */}
        <div className="absolute top-0 left-0 w-full p-4 z-20 flex items-center">
          <button 
            onClick={() => navigate('/')} 
            className="bg-white/90 backdrop-blur text-gray-800 p-2 rounded-full shadow-lg hover:bg-white active:scale-90 transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        </div>

        {/* Title Content */}
        <div className="absolute bottom-0 left-0 w-full p-6 z-20 text-white">
          <h1 className="text-4xl font-serif mb-1">{day.title}</h1>
          <p className="text-lg opacity-90 font-light">{day.subtitle}</p>
          <div className="mt-3 flex items-center gap-2 text-xs bg-black/30 w-fit px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
            <span className="font-bold text-rose-300">Tema:</span> {day.theme}
          </div>
        </div>
      </div>

      {/* Content Body */}
      <div className="max-w-md mx-auto px-5 py-8 -mt-6 relative z-30 bg-white rounded-t-3xl min-h-[50vh] shadow-inner">
        <div className="flex flex-col">
          {day.activities.map((activity, index) => (
            <ActivityCard 
              key={activity.id} 
              activity={activity} 
              isLast={index === day.activities.length - 1} 
            />
          ))}
        </div>

        <div className="mt-8 text-center">
          <button 
            onClick={() => navigate('/')}
            className="text-gray-400 text-sm hover:text-rose-500 transition-colors flex items-center justify-center gap-2 w-full"
          >
            <ChevronLeft className="w-4 h-4" /> Volver al menú
          </button>
        </div>
      </div>
    </div>
  );
};

// --- App Root ---

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/day/:id" element={<DayDetailPage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;