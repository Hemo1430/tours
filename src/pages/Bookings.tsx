import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { toursList } from '../data';
import { formatPrice } from '../i18n';
import { Copy } from 'lucide-react';
import whatsappLogo from '../icons8-whatsapp-50.png';

export default function Bookings() {
  const { lang, currency, selectedTourId, t } = useAppContext();
  
  const selectedTour = toursList.find(tour => tour.id === selectedTourId);
  const isAr = lang === 'ar';

  // Input states for selected tour (first section)
  const [userCity, setUserCity] = useState('');
  
  // Input states for travel inquiry form (second section)
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formDestination, setFormDestination] = useState('');
  const [formCity, setFormCity] = useState('');
  const [formDepDate, setFormDepDate] = useState('');
  const [formRetDate, setFormRetDate] = useState('');
  const [formHotelTier, setFormHotelTier] = useState('');
  const [formAdults, setFormAdults] = useState('1');
  const [formChildren, setFormChildren] = useState('0');
  const [formBabies, setFormBabies] = useState('0');
  const [formNotes, setFormNotes] = useState('');

  // Toast / feedback states
  const [copiedFirst, setCopiedFirst] = useState(false);
  const [copiedSecond, setCopiedSecond] = useState(false);

  // First button clipboard copy action
  const handleCopyFirst = async () => {
    if (!selectedTour) return;
    const tourName = selectedTour.title[lang];
    const city = userCity.trim() || (isAr ? 'لم يحدد' : 'Not specified');
    const priceText = formatPrice(selectedTour.price, currency, lang);
    
    const textToCopy = `${tourName}\n${city}\n${priceText}`;

    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopiedFirst(true);
      setTimeout(() => setCopiedFirst(false), 2500);
    } catch (err) {
      // Fallback
      try {
        const textArea = document.createElement("textarea");
        textArea.value = textToCopy;
        textArea.style.position = "fixed";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        setCopiedFirst(true);
        setTimeout(() => setCopiedFirst(false), 2500);
      } catch (fallbackErr) {
        console.error("Clipboard copy failed:", fallbackErr);
      }
    }
  };

  // Second button clipboard copy action
  const handleCopySecond = async () => {
    const name = formName.trim() || (isAr ? 'لم يحدد' : 'Not specified');
    const phone = formPhone.trim() || (isAr ? 'لم يحدد' : 'Not specified');
    const city = formCity.trim() || (isAr ? 'لم يحدد' : 'Not specified');
    const dest = formDestination.trim() || (isAr ? 'لم يحدد' : 'Not specified');
    const counts = `${formAdults} | ${formChildren} | ${formBabies}`;
    const tier = (formHotelTier || (isAr ? '٣ نجوم' : '3 Stars')).trim();
    const dates = `${formDepDate || (isAr ? 'لم يحدد' : 'Not specified')} | ${formRetDate || (isAr ? 'لم يحدد' : 'Not specified')}`;
    const notes = formNotes.trim() || (isAr ? 'بدون ملاحظات' : 'No notes');

    const textToCopy = `${name}
${phone}
${city}
${dest}
${counts}
${tier}
${dates}
${notes}`;

    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopiedSecond(true);
      setTimeout(() => setCopiedSecond(false), 2500);
    } catch (err) {
      // Fallback
      try {
        const textArea = document.createElement("textarea");
        textArea.value = textToCopy;
        textArea.style.position = "fixed";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        setCopiedSecond(true);
        setTimeout(() => setCopiedSecond(false), 2500);
      } catch (fallbackErr) {
        console.error("Clipboard copy failed:", fallbackErr);
      }
    }
  };

  return (
    <main className="flex-grow w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12" dir={isAr ? 'rtl' : 'ltr'}>
      
      {/* Selected Tour Detailed View */}
      {selectedTour && (
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-md mb-12 flex flex-col md:flex-row">
          {/* Image Area */}
          <div className="md:w-1/2 relative h-[300px] md:h-auto">
            <img 
              alt={selectedTour.title[lang]} 
              className="w-full h-full object-cover" 
              src={selectedTour.imageUrl}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
              <div className="inline-flex items-center gap-2 bg-[#2672b0]/20 backdrop-blur-md border border-[#2672b0] px-3 py-1 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#2672b0] animate-pulse"></span>
                <span className="text-xs font-medium text-[#2672b0]">{t('book.selectedTour')}</span>
              </div>
            </div>
          </div>
          
          {/* Details Area */}
          <div className="md:w-1/2 p-6 md:p-12 flex flex-col justify-between">
            <div>
              <h1 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4">{selectedTour.title[lang]}</h1>
              <p className="text-sm md:text-base text-slate-600 mb-8 leading-relaxed">
                {selectedTour.detailedDescription[lang]}
              </p>
              
              {/* Interaction Controls */}
              <div className="space-y-6 mb-12 animate-fade-in">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-700" htmlFor="office-location">
                    {isAr ? 'مدينتك' : 'Your City'}
                  </label>
                  <input 
                    type="text"
                    id="office-location"
                    value={userCity}
                    onChange={(e) => setUserCity(e.target.value)}
                    placeholder={isAr ? 'مثال: القاهرة' : 'e.g. Cairo'}
                    className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-[#2672b0] focus:ring-1 focus:ring-[#2672b0] transition-colors shadow-sm hover:border-slate-400"
                  />
                </div>
                
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 flex justify-between items-center">
                  <span className="text-sm md:text-base text-slate-700">{t('book.totalPrice')}</span>
                  <span className="text-xl md:text-2xl font-bold text-[#2672b0]">
                    {formatPrice(selectedTour.price, currency, lang)}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Call to Action */}
            <button 
              onClick={handleCopyFirst}
              className="w-full bg-white border border-slate-300 hover:border-[#2672b0] text-slate-900 py-3.5 rounded-lg flex items-center justify-center gap-3 transition-all group relative overflow-hidden active:scale-98"
            >
              <div className="absolute inset-0 bg-[#2672b0]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Copy className="text-[#2672b0] group-hover:scale-110 transition-transform w-5 h-5" />
              <span className="text-sm md:text-base font-semibold relative z-10 text-slate-800">
                {copiedFirst ? (isAr ? 'تم نسخ بيانات الفاتورة!' : 'Receipt details copied!') : t('book.copyReceipt')}
              </span>
            </button>
          </div>
        </div>
      )}

      {/* Travel Inquiry Form */}
      {!selectedTour && (
        <section className="max-w-4xl mx-auto w-full bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden my-12 pt-8">
          <div className="px-6 md:px-12 pb-8">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0a1d3a] mb-2">{t('book.travelInquiry')}</h2>
              <p className="text-slate-500 text-sm md:text-base">{t('book.inquiryText')}</p>
            </div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">{t('book.fullName')}</label>
                  <input 
                    type="text" 
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder={t('form.john')} 
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#2672b0] focus:border-[#2672b0] outline-none transition-all" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">{t('book.phone')}</label>
                  <input 
                    type="text" 
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    placeholder="+20 123 456 7890" 
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#2672b0] focus:border-[#2672b0] outline-none transition-all" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">{t('book.destination')}</label>
                  <input 
                    type="text" 
                    value={formDestination}
                    onChange={(e) => setFormDestination(e.target.value)}
                    placeholder={t('form.maldives')} 
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#2672b0] focus:border-[#2672b0] outline-none transition-all" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">{t('book.city')}</label>
                  <input 
                    type="text" 
                    value={formCity}
                    onChange={(e) => setFormCity(e.target.value)}
                    placeholder={t('form.cairo')} 
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#2672b0] focus:border-[#2672b0] outline-none transition-all" 
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] md:text-xs font-medium text-slate-700 mb-1">{t('book.depDate')}</label>
                    <input 
                      type="date" 
                      value={formDepDate}
                      onChange={(e) => setFormDepDate(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#2672b0] focus:border-[#2672b0] outline-none transition-all text-sm" 
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] md:text-xs font-medium text-slate-700 mb-1">{t('book.retDate')}</label>
                    <input 
                      type="date" 
                      value={formRetDate}
                      onChange={(e) => setFormRetDate(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#2672b0] focus:border-[#2672b0] outline-none transition-all text-sm" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">{t('book.hotelTier')}</label>
                  <div className="relative">
                    <select 
                      value={formHotelTier}
                      onChange={(e) => setFormHotelTier(e.target.value)}
                      className="w-full px-4 py-2 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#2672b0]/20 focus:border-[#2672b0] outline-none transition-all appearance-none cursor-pointer shadow-sm hover:border-slate-400"
                    >
                      <option value={isAr ? '٣ نجوم' : '3 Stars'}>{isAr ? '٣ نجوم' : '3 Stars'}</option>
                      <option value={isAr ? '٤ نجوم' : '4 Stars'}>{isAr ? '٤ نجوم' : '4 Stars'}</option>
                      <option value={isAr ? '٥ نجوم (فاخر)' : '5 Stars'}>{isAr ? '٥ نجوم (فاخر)' : '5 Stars'}</option>
                      <option value={isAr ? '٦ نجوم' : '6 Stars'}>{isAr ? '٦ نجوم' : '6 Stars'}</option>
                      <option value={isAr ? '٧ نجوم (ملكي)' : '7 Stars'}>{isAr ? '٧ نجوم (ملكي)' : '7 Stars'}</option>
                    </select>
                    <span className={`absolute ${isAr ? 'left-4' : 'right-4'} top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none flex items-center justify-center`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="block text-[10px] font-medium text-slate-700 mb-1">{t('book.adults')}</label>
                    <input 
                      type="number" 
                      min="1" 
                      value={formAdults}
                      onChange={(e) => setFormAdults(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#2672b0] focus:border-[#2672b0] outline-none transition-all" 
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-medium text-slate-700 mb-1">{t('book.children')}</label>
                    <input 
                      type="number" 
                      min="0" 
                      value={formChildren}
                      onChange={(e) => setFormChildren(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#2672b0] focus:border-[#2672b0] outline-none transition-all" 
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-medium text-slate-700 mb-1">{t('book.babies')}</label>
                    <input 
                      type="number" 
                      min="0" 
                      value={formBabies}
                      onChange={(e) => setFormBabies(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#2672b0] focus:border-[#2672b0] outline-none transition-all" 
                    />
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">{t('book.notes')}</label>
                <textarea 
                  rows={4} 
                  value={formNotes}
                  onChange={(e) => setFormNotes(e.target.value)}
                  placeholder={t('book.preferences')} 
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#2672b0] focus:border-[#2672b0] outline-none transition-all"
                ></textarea>
              </div>
              <button 
                type="button" 
                onClick={handleCopySecond}
                className="w-full bg-[#2672b0] text-white py-4 rounded-lg font-bold text-lg shadow-md hover:bg-[#1d5c92] hover:shadow-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2"
              >
                {copiedSecond ? (isAr ? 'تم نسخ بيانات الطلب بنجاح!' : 'Inquiry details copied!') : t('book.copyInquiry')}
              </button>
            </form>
          </div>
        </section>
      )}

      {/* Social Media Section */}
      <section className="max-w-4xl mx-auto w-full mb-12 animate-fade-in">
        <h2 id="social-media-heading" className="text-xl md:text-2xl font-black text-[#0a1d3a] tracking-tight mb-6 text-center">
          {isAr ? 'ارسل لنا عبر :' : 'Send to us via:'}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* WhatsApp Card */}
          <a 
            href="https://wa.me/201234567890" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex flex-col items-center justify-center p-6 bg-[#25D366] border border-transparent rounded-2xl aspect-square shadow-[0_8px_20px_-6px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_24px_-10px_rgba(37,211,102,0.6)] hover:scale-103 transition-all duration-300 text-center group active:scale-95 cursor-pointer"
          >
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-white transition-all duration-300 mb-4 shadow-xs">
              <img 
                src={whatsappLogo} 
                alt="WhatsApp" 
                className="w-10 h-10 object-contain brightness-0 invert" 
                referrerPolicy="no-referrer" 
              />
            </div>
            <span className="font-extrabold text-white text-base transition-colors duration-300">WhatsApp</span>
          </a>

          {/* Facebook Card */}
          <a 
            href="https://www.facebook.com/albhriin" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex flex-col items-center justify-center p-6 bg-[#1877F2] border border-transparent rounded-2xl aspect-square shadow-[0_8px_20px_-6px_rgba(24,119,242,0.4)] hover:shadow-[0_12px_24px_-10px_rgba(24,119,242,0.6)] hover:scale-103 transition-all duration-300 text-center group active:scale-95 cursor-pointer"
          >
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-white transition-all duration-300 mb-4 shadow-xs">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
            <span className="font-extrabold text-white text-base transition-colors duration-300">Facebook</span>
          </a>

          {/* Instagram Card */}
          <a 
            href="https://www.instagram.com/albhriin?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex flex-col items-center justify-center p-6 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] border border-transparent rounded-2xl aspect-square shadow-[0_8px_20px_-6px_rgba(238,42,123,0.4)] hover:shadow-[0_12px_24px_-10px_rgba(238,42,123,0.6)] hover:scale-103 transition-all duration-300 text-center group active:scale-95 cursor-pointer"
          >
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-white transition-all duration-300 mb-4 shadow-xs">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
            </div>
            <span className="font-extrabold text-white text-base transition-colors duration-300">Instagram</span>
          </a>
        </div>
      </section>
      
    </main>
  );
}
