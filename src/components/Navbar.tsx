import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe, Banknote, Menu, X, Home, Compass, Headphones, Info, ChevronRight, ChevronLeft } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useAppContext } from '../context/AppContext';

export default function Navbar() {
  const { lang, setLang, currency, setCurrency, selectedTourId, t } = useAppContext();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLangToggle = () => {
    setLang(lang === 'en' ? 'ar' : 'en');
  };

  const handleCurrencyToggle = () => {
    if (currency === 'EGP') setCurrency('USD');
    else if (currency === 'USD') setCurrency('SAR');
    else setCurrency('EGP');
  };

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.tours'), path: '/tours' },
    { name: t('nav.support'), path: '/support' },
    { name: t('nav.about'), path: '/about' },
  ];

  const getLinkIcon = (path: string) => {
    switch (path) {
      case '/': return <Home className="w-5 h-5" />;
      case '/tours': return <Compass className="w-5 h-5" />;
      case '/support': return <Headphones className="w-5 h-5" />;
      case '/about': return <Info className="w-5 h-5" />;
      default: return <Compass className="w-5 h-5" />;
    }
  };

  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  return (
    <>
      <header className="bg-white/80 backdrop-blur-md text-slate-800 shadow-sm border-b border-slate-200 sticky top-0 z-50 w-full transition-all duration-300" dir={dir}>
        <div className="flex justify-between items-center px-4 md:px-6 lg:px-8 py-2 max-w-7xl mx-auto w-full h-14 sm:h-16 md:h-20 transition-all duration-300">
          {/* Brand Logo & Name */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 cursor-pointer group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(7,184,0,0.3)] group-hover:shadow-[0_0_20px_rgba(7,184,0,0.5)] transition-all duration-300 overflow-hidden">
              <img 
                src="https://www.elbahrintours.com/siteAssests/images/logo.png" 
                alt="El-Bahrin Tours" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-bold text-base sm:text-lg md:text-2xl tracking-tight text-[#07b800] transition-all duration-300">
              {lang === 'ar' ? 'البحرين للسياحة' : 'El-Bahrin Tours'}
            </span>
          </Link>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-6">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm lg:text-base font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-[#07b800] font-bold border-b-2 border-[#07b800]'
                      : 'text-slate-600 hover:text-[#07b800] hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1 sm:gap-2">
            {/* Language Toggle */}
            <button
              onClick={handleLangToggle}
              className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full text-slate-600 hover:text-[#07b800] hover:bg-slate-50 transition-all duration-200 active:scale-95"
              aria-label="Toggle language"
              title={lang === 'en' ? 'Switch to Arabic' : 'Switch to English'}
            >
              <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            
            {/* Currency Toggle */}
            <button
              onClick={handleCurrencyToggle}
              className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full text-slate-600 hover:text-[#07b800] hover:bg-slate-50 transition-all duration-200 active:scale-95 font-semibold text-xs sm:text-sm relative"
              aria-label="Toggle currency"
              title={`Current: ${currency}`}
            >
              <span className="absolute inset-0 flex items-center justify-center text-[10px] sm:text-xs">
                {currency === 'EGP' ? 'EGP' : currency === 'USD' ? '$' : 'SAR'}
              </span>
            </button>

            {/* Book Button */}
            <Link
              to="/bookings"
              className="hidden sm:relative sm:inline-flex bg-[#07b800] text-white px-3 py-1.5 sm:px-5 sm:py-2 rounded-md font-semibold text-xs sm:text-sm lg:text-base shadow-[0_0_10px_rgba(7,184,0,0.2)] hover:shadow-[0_0_20px_rgba(7,184,0,0.4)] hover:bg-[#06a300] transition-all duration-300 active:scale-95 text-center"
            >
              {t('nav.book')}
              {selectedTourId && (
                <span className="absolute -top-1 -end-1 w-2.5 h-2.5 bg-green-200 rounded-full border border-white animate-pulse"></span>
              )}
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-[#07b800] transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Side Drawer overlay) */}
      <AnimatePresence>
        {isMenuOpen && (
          <div className="fixed inset-0 z-[1000000] md:hidden" dir={dir}>
            {/* Backdrop with elegant dark overlay & motion blur */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-[#0a1d3a]/60 backdrop-blur-sm"
            />

            {/* Side Drawer with sliding spring animation */}
            <motion.div 
              initial={{ x: lang === 'ar' ? '-100%' : '100%' }}
              animate={{ x: 0 }}
              exit={{ x: lang === 'ar' ? '-100%' : '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 240 }}
              className={`fixed top-0 bottom-0 ${lang === 'ar' ? 'left-0' : 'right-0'} w-[82%] max-w-[340px] h-full bg-white shadow-[0_0_40px_rgba(10,29,58,0.25)] p-5 flex flex-col justify-between z-[1000001]`}
            >
              <div>
                {/* Custom Brand Header inside Drawer */}
                <div className="flex justify-between items-center pb-5 mb-5 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-50 flex items-center justify-center p-0.5 shadow-[0_0_10px_rgba(7,184,0,0.15)]">
                      <img 
                        src="https://www.elbahrintours.com/siteAssests/images/logo.png" 
                        alt="Logo" 
                        className="w-full h-full object-contain" 
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-extrabold text-[#07b800] text-sm sm:text-base tracking-tight leading-tight">
                        {lang === 'ar' ? 'البحرين للسياحة' : 'El-Bahrin Tours'}
                      </span>
                      <span className="text-[10px] text-slate-400 font-medium">
                        {lang === 'ar' ? 'رحلتك المفضلة تبدأ من هنا' : 'Your journey starts here'}
                      </span>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-all duration-200"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Navigation Links with Icons */}
                <nav className="flex flex-col gap-2.5 py-1">
                  {navLinks.map((link) => {
                    const isActive = location.pathname === link.path;
                    return (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={`group flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-300 ${
                          isActive 
                            ? 'bg-[#07b800]/10 text-[#07b800] font-bold shadow-xs' 
                            : 'text-slate-700 hover:text-[#07b800] hover:bg-slate-50 font-medium'
                        }`}
                      >
                        <div className="flex items-center gap-3.5">
                          <span className={`p-1.5 rounded-lg transition-colors ${
                            isActive ? 'bg-[#07b800] text-white' : 'bg-slate-100 text-slate-400 group-hover:text-[#07b800] group-hover:bg-[#07b800]/10'
                          }`}>
                            {getLinkIcon(link.path)}
                          </span>
                          <span className="text-sm sm:text-base">{link.name}</span>
                        </div>
                        
                        {lang === 'ar' ? (
                          <ChevronLeft className={`w-4 h-4 transition-transform ${isActive ? 'text-[#07b800]' : 'text-slate-300 group-hover:text-[#07b800]'}`} />
                        ) : (
                          <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'text-[#07b800]' : 'text-slate-300 group-hover:text-[#07b800]'}`} />
                        )}
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Preferences and Book Actions */}
              <div className="pt-5 border-t border-slate-100 flex flex-col gap-4">
                <div className="bg-slate-50 rounded-2xl p-3.5 flex flex-col gap-3">
                  <span className="text-[11px] font-bold text-slate-400 tracking-wider uppercase">
                    {lang === 'ar' ? 'الإعدادات والعملة' : 'PREFERENCES'}
                  </span>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {/* Language Switch */}
                    <button 
                      onClick={handleLangToggle}
                      className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-[#07b800] hover:bg-[#07b800]/5 transition-all duration-200 active:scale-95 text-xs font-bold text-slate-700 shadow-3xs"
                    >
                      <Globe className="w-3.5 h-3.5 text-[#07b800]" />
                      {lang === 'en' ? 'العربية' : 'English'}
                    </button>

                    {/* Currency Switch */}
                    <button 
                      onClick={handleCurrencyToggle}
                      className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-[#07b800] hover:bg-[#07b800]/5 transition-all duration-200 active:scale-95 text-xs font-bold text-slate-700 shadow-3xs"
                    >
                      <Banknote className="w-3.5 h-3.5 text-[#07b800]" />
                      {currency}
                    </button>
                  </div>
                </div>

                {/* Instant Booking Action */}
                <Link
                  to="/bookings"
                  onClick={() => setIsMenuOpen(false)}
                  className="relative w-full overflow-hidden bg-gradient-to-r from-[#07b800] to-[#06a300] text-white py-3.5 rounded-xl font-bold text-center block shadow-[0_4px_14px_rgba(7,184,0,0.3)] hover:shadow-[0_6px_20px_rgba(7,184,0,0.45)] transition-all duration-300 hover:scale-[1.02] active:scale-95"
                >
                  <div className="relative z-10 flex items-center justify-center gap-2">
                    <span>{t('nav.book')}</span>
                    {selectedTourId && (
                      <span className="w-2.5 h-2.5 bg-green-200 rounded-full border border-white animate-pulse"></span>
                    )}
                  </div>
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
