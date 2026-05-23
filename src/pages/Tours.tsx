import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { toursList } from '../data';
import { formatPrice } from '../i18n';
import { Ticket, Star, MapPin } from 'lucide-react';

type CategoryType = 'all' | 'hajj' | 'local' | 'world';

export default function Tours() {
  const { lang, currency, setSelectedTourId, selectedTourId, t } = useAppContext();
  const navigate = useNavigate();
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash === 'hajj' || hash === 'local' || hash === 'world') {
      setActiveCategory(hash as CategoryType);
    } else {
      setActiveCategory('all');
    }
  }, [location.hash]);

  const handleSelectTour = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedTourId(id);
    navigate('/bookings');
  };

  const isAr = lang === 'ar';

  const filterTabs = [
    { id: 'all' as CategoryType, name: isAr ? 'جميع الرحلات' : 'All Tours' },
    { id: 'hajj' as CategoryType, name: isAr ? 'حج وعمرة' : 'Hajj & Umrah' },
    { id: 'local' as CategoryType, name: isAr ? 'سياحة داخلية' : 'Local' },
    { id: 'world' as CategoryType, name: isAr ? 'سياحة خارجية' : 'Global' }
  ];

  const renderTourCard = (tour: typeof toursList[0]) => {
    const isSelected = selectedTourId === tour.id;

    return (
      <div 
        key={tour.id} 
        onClick={(e) => handleSelectTour(tour.id, e as any)}
        className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg border border-slate-200 hover:shadow-2xl transition-all duration-300 active:scale-98 cursor-pointer"
      >
        {/* Background Image */}
        <img 
          src={tour.imageUrl} 
          alt={tour.title[lang]} 
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1d3a] via-[#0a1d3a]/45 to-transparent z-10"></div>
        
        {/* Badges */}
        <div className="absolute top-4 inset-x-4 flex justify-end items-start z-20">
          {isSelected && (
            <span className="bg-[#07b800] border border-white/20 text-white text-[10px] font-extrabold px-2 py-1 rounded shadow-sm">
              {isAr ? 'محدد' : 'Selected'}
            </span>
          )}
        </div>

        {/* Content Area */}
        <div className="absolute inset-0 z-20 p-5 flex flex-col justify-end space-y-2">
          <h3 className="text-white font-bold text-lg md:text-xl leading-tight group-hover:text-[#77ff60] transition-colors line-clamp-1">
            {tour.title[lang]}
          </h3>
          <p className="text-white/80 text-xs md:text-sm leading-relaxed line-clamp-2">
            {tour.smallDescription[lang]}
          </p>
          
          <div className="flex justify-between items-center pt-3 border-t border-white/10 mt-1">
            <span className="text-white font-extrabold text-base md:text-lg">
              {formatPrice(tour.price, currency, lang)}
            </span>
            <button 
              onClick={(e) => handleSelectTour(tour.id, e)}
              className="bg-[#07b800] hover:bg-[#06a300] text-white font-bold text-xs px-4 py-2 rounded-lg shadow-md transition-all active:scale-95"
            >
              {isAr ? 'احجز الآن' : 'Book Now'}
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <main className="flex-grow w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-10" dir={isAr ? 'rtl' : 'ltr'}>
      {/* Category Scrolling Filter Bar */}
      <section className="mb-10 text-center md:text-start">
        {/* Interactive Scrollable Pills */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-3 justify-start -mx-4 px-4 sm:mx-0 sm:px-0">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`flex-none px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-200 shadow-xs ${
                activeCategory === tab.id
                  ? 'bg-[#07b800] text-white shadow-md'
                  : 'bg-white border border-slate-200 text-slate-600 hover:border-[#07b800] hover:text-[#07b800]'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </section>

      {/* Grid Collections */}
      <div className="flex flex-col gap-12">
        {/* Category: Hajj & Umrah */}
        {(activeCategory === 'all' || activeCategory === 'hajj') && (
          <section className="space-y-6">
            <div className="flex items-center justify-between border-s-4 border-[#07b800] ps-3.5 mb-6">
              <h2 className="text-xl md:text-2xl font-black text-slate-800 uppercase tracking-wide">
                {t('tours.hajj')}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {toursList.slice(0, 3).map(renderTourCard)}
            </div>
          </section>
        )}

        {/* Category: Local Treasures */}
        {(activeCategory === 'all' || activeCategory === 'local') && (
          <section className="space-y-6">
            <div className="flex items-center justify-between border-s-4 border-[#07b800] ps-3.5 mb-6">
              <h2 className="text-xl md:text-2xl font-black text-slate-800 uppercase tracking-wide">
                {t('tours.local')}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {toursList.slice(3, 7).map(renderTourCard)}
            </div>
          </section>
        )}

        {/* Category: World Destinations */}
        {(activeCategory === 'all' || activeCategory === 'world') && (
          <section className="space-y-6">
            <div className="flex items-center justify-between border-s-4 border-[#07b800] ps-3.5 mb-6">
              <h2 className="text-xl md:text-2xl font-black text-slate-800 uppercase tracking-wide">
                {t('tours.world')}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {toursList.slice(7).map(renderTourCard)}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
