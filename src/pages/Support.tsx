import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { MapPin, Phone, Mail, Clock, Search, HelpCircle, Shield, Award } from 'lucide-react';
import whatsappLogo from '../icons8-whatsapp-50.png';

export default function Support() {
  const { lang, t } = useAppContext();
  const [searchQuery, setSearchQuery] = useState('');

  const isAr = lang === 'ar';

  const branchPhotos = {
    cairo: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPMNyGnegWrl5rPiAzUmHuxIfqqdUoUR7UxQgaEmr8ziFHYy-MS3As6i5AdY4mum_PmGUlzNvq-ia1HWC08LvVLyCHTflMEPxhP8vmXEPUPyvT0MfdwrVWvIPEoF-iclnh4tUP4rEkDSG6nZNHyJidNAwJdDIBLO4jazUzn0Kn_v_48h6xh9l0ZyWF82TzmCmLNTK_pw6ISoZLKxBPvKVPIPCibxUV6CoKgR435fnm5UqarSckez7FNrbkoTiUp8yse8ORikHlKQ",
    alex: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4TNSvW6tC89hkpX5iSr-VMUPKuwhEqfG-8UOqa8-Zub-KYAag31ZIBqFBjMqbvF8Ox-Y6sVm8QrXUUtcGFE_6_q2KVDO4-8oK2dVfr7VpuB2seCPuVvWBpa6l-kouMBEpD4vpg6j19SiyY-FAm2AYmCb3m5kChFa3a8qvhrnXHVpzbnGB8iVqaRn-icmU18Bux0vbwOEUaB5G-WgrN0BokeJhfvgZJ6TgxvLheOt2myIErdZaFvwe6Dv713Y_9yI_oxVEos02BQ",
    luxor: "https://lh3.googleusercontent.com/aida-public/AB6AXuBeNJGND9n9xBJOwYQzr71s4pz_DOI-XNebkipVkdkV-MWhDD7g4tni9--2n6ub5ucJ3PCAGMat-7uFJZ6qn_Lc6zYEJZniy_H7NhOWH4NkDrnJkvsq3-rI-Wpsk4WP6pd2XG4xQgpa-Qltl7Fu3KbyG2o-gP1XiYHDc3E70bttP5A346zJ9KpJlIhEK4Ysuxa8h_pjnl8Y7UvisMsVaSS4zB9nLHiv3KZXNnqOssY1IFNp9TOM9uN5V5ToUEeK1cjaJuRAa25hHQ",
    giza: "https://lh3.googleusercontent.com/aida-public/AB6AXuChS4FIJ0X0hSJgBmMC7dsjyB1M36I4ghcjCWlzvdncA6OJDTzz2AKNDsTnoJ419A60h50BHcfoHo4htdGgtcBDtM3fSV0VVoYk0nKNbVo_dtZeDyUU49rvyFdra8aOt5bloQHXEHYWD12CIgd1KA5aIaRZe933C7OoKhmmC7xIbZZa6x46yS66aOx15lBXmyTB1x8gKDavQkT0M0-z1qO2cmn-5DT6KB6iAOJi5yxJA-0a2B8rIG8DevCZOGWZPwXLY6v39Vo36A"
  };

  const branches = [
    {
      id: 'cairo',
      title: t('support.cairo'),
      subtitle: isAr ? 'المقر الرئيسي للمحافظة' : 'Fayoum - Headquarters',
      image: branchPhotos.cairo,
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13916.86495518121!2d30.841782000000002!3d29.305332!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1459790fcffa33cf%3A0x32cd51f68a6a26e5!2z2LTYsdmD2Kkg2KfZhNio2K3YsdmK2YYg2YTZhNiz2YrYp9it2Yc!5e0!3m2!1sar!2seg!4v1779485877741!5m2!1sar!2seg",
      address: t('support.cairoAdd'),
      hotline: '0100 844 9020',
      hours: t('support.hours1'),
      isMain: true
    },
    {
      id: 'alex',
      title: t('support.alex'),
      subtitle: isAr ? 'مكتب الإسكندرية الفرعي' : 'Khatem El-Morsaleen - Coastal Office',
      image: branchPhotos.alex,
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6909.39090382509!2d31.176921!3d30.016900000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145847b2e77812d9%3A0x60b70bccfaac6af3!2z2KfZhNio2K3YsdmK2YYg2YTZhNiz2YrYp9it2Yc!5e0!3m2!1sar!2seg!4v1779486068316!5m2!1sar!2seg",
      address: t('support.alexAdd'),
      hotline: '0100 844 9020',
      hours: t('support.hours2'),
      isMain: false
    },
    {
      id: 'luxor',
      title: t('support.luxor'),
      subtitle: isAr ? 'مكتب وسط المحلة الكبرى' : 'El-Mahalla El-Kobra - Delta Office',
      image: branchPhotos.luxor,
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13686.572247732209!2d31.153828!3d30.952532!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7bb4f93aa5c79%3A0xb7423d8cfc2a69e6!2z2LTYsdmD2Kkg2KfZhNio2K3YsdmK2YYg2YTZhNiz2YrYp9it2Kk!5e0!3m2!1sar!2seg!4v1779485586083!5m2!1sar!2seg",
      address: t('support.luxorAdd'),
      hotline: '0100 267 7607',
      hours: t('support.hours3'),
      isMain: false
    },
    {
      id: 'giza',
      title: t('support.giza'),
      subtitle: isAr ? 'مكتب مدينة السادس من أكتوبر' : '6th Of October Office',
      image: branchPhotos.giza,
      address: t('support.gizaAdd'),
      hotline: '0000 000 0000',
      hours: t('support.hours4'),
      isMain: false
    }
  ];

  const filteredBranches = branches.filter(branch => 
    branch.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    branch.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="flex-grow w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-10" dir={isAr ? 'rtl' : 'ltr'}>
      
      {/* 3. Image-Backed Branches Grid */}
      <section className="mb-16">
        <h2 className="text-xl md:text-2xl font-black text-[#0a1d3a] tracking-tight mb-6">
          {t('support.branches')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredBranches.map((branch) => (
            <div 
              key={branch.id} 
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full group"
            >
              {/* Photo Area */}
              <div className="h-52 md:h-60 relative w-full overflow-hidden">
                {branch.mapEmbed ? (
                  <iframe 
                    src={branch.mapEmbed}
                    className="w-full h-full border-0 absolute inset-0"
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                ) : (
                  <img 
                    alt={branch.title} 
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 brightness-95" 
                    src={branch.image}
                  />
                )}
                {branch.isMain && (
                  <span className="absolute top-4 start-4 bg-[#2672b0] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md z-10">
                    {t('support.mainBranch')}
                  </span>
                )}
              </div>

              {/* Office Details */}
              <div className="p-6 flex flex-col flex-grow justify-between gap-4">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-1">{branch.title}</h3>
                  <p className="text-slate-400 text-xs font-medium mb-4">{branch.subtitle}</p>
                  
                  <div className="space-y-3.5 text-slate-600 text-sm">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-5 h-5 text-[#2672b0] shrink-0" />
                      <span>{branch.address}</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Phone className="w-5 h-5 text-[#2672b0] shrink-0" />
                      <span>{t('support.hotline')}: <strong className="text-slate-800 inline-block" dir="ltr">{branch.hotline}</strong></span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Mail className="w-5 h-5 text-[#2672b0] shrink-0" />
                      <a href="mailto:info@elbahrintours.com" className="hover:text-[#2672b0] transition-colors select-all">info@elbahrintours.com</a>
                    </div>
                  </div>
                </div>

                <a 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); alert(isAr ? 'سيتم تحويلك إلى خرائط جوجل' : 'Directing to Google Maps location...'); }}
                  className="w-full mt-4 bg-slate-50 border border-slate-300 text-slate-700 font-bold py-3 text-center rounded-xl hover:bg-slate-100 hover:text-slate-900 transition-colors inline-block"
                >
                  {t('support.map')}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Social Media Grid */}
      <section className="mb-16">
        <h2 className="text-xl md:text-2xl font-black text-[#0a1d3a] tracking-tight mb-6 text-center">
          {t('support.socials')}
        </h2>
        <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-4">
          {/* Row 1: First 3 cards (YouTube, Instagram, Facebook) */}
          <div className="grid grid-cols-3 gap-4 md:gap-6 justify-center">
            {/* YouTube Card */}
            <a 
              href="https://www.youtube.com/@albhriin" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-center justify-center p-4 md:p-5 bg-[#FF0000] border border-transparent rounded-xl md:rounded-2xl aspect-square shadow-[0_6px_16px_-4px_rgba(255,0,0,0.4)] hover:shadow-[0_10px_20px_-8px_rgba(255,0,0,0.6)] hover:scale-103 transition-all duration-300 text-center group active:scale-95"
            >
              <div className="w-11 h-11 md:w-12 md:h-12 bg-white/20 rounded-xl flex items-center justify-center text-white transition-all duration-300 mb-2.5 shadow-xs">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.522 3.5 12 3.5 12 3.5s-7.522 0-9.388.555A3.002 3.002 0 0 0 .503 6.163C0 8.044 0 12 0 12s0 3.956.503 5.837a3.003 3.003 0 0 0 2.11 2.108C4.478 20.5 12 20.5 12 20.5s7.522 0 9.388-.555a3.003 3.003 0 0 0 2.11-2.108C24 15.956 24 12 24 12s0-3.956-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
              <span className="font-extrabold text-white text-xs md:text-sm transition-colors duration-300">YouTube</span>
            </a>

            {/* Instagram Card */}
            <a 
              href="https://www.instagram.com/albhriin?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-center justify-center p-4 md:p-5 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] border border-transparent rounded-xl md:rounded-2xl aspect-square shadow-[0_6px_16px_-4px_rgba(238,42,123,0.4)] hover:shadow-[0_10px_20px_-8px_rgba(238,42,123,0.6)] hover:scale-103 transition-all duration-300 text-center group active:scale-95"
            >
              <div className="w-11 h-11 md:w-12 md:h-12 bg-white/20 rounded-xl flex items-center justify-center text-white transition-all duration-300 mb-2.5 shadow-xs">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </div>
              <span className="font-extrabold text-white text-xs md:text-sm transition-colors duration-300">Instagram</span>
            </a>

            {/* Facebook Card */}
            <a 
              href="https://www.facebook.com/albhriin" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-center justify-center p-4 md:p-5 bg-[#1877F2] border border-transparent rounded-xl md:rounded-2xl aspect-square shadow-[0_6px_16px_-4px_rgba(24,119,242,0.4)] hover:shadow-[0_10px_20px_-8px_rgba(24,119,242,0.6)] hover:scale-103 transition-all duration-300 text-center group active:scale-95"
            >
              <div className="w-11 h-11 md:w-12 md:h-12 bg-white/20 rounded-xl flex items-center justify-center text-white transition-all duration-300 mb-2.5 shadow-xs">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <span className="font-extrabold text-white text-xs md:text-sm transition-colors duration-300">Facebook</span>
            </a>
          </div>

          {/* Row 2: Last card (TikTok) and the new WhatsApp card with 66.6% width alignment */}
          <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-[66.6%] mx-auto">
            {/* TikTok Card */}
            <a 
              href="https://tiktok.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-center justify-center p-4 md:p-5 bg-slate-950 border border-transparent rounded-xl md:rounded-2xl aspect-square shadow-[0_6px_16px_-4px_rgba(0,0,0,0.4)] hover:shadow-[0_10px_20px_-8px_rgba(0,0,0,0.6)] hover:scale-103 transition-all duration-300 text-center group active:scale-95"
            >
              <div className="w-11 h-11 md:w-12 md:h-12 bg-white/20 rounded-xl flex items-center justify-center text-white transition-all duration-300 mb-2.5 shadow-xs">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.19.98 1.14 2.36 1.87 3.84 2.06v3.82c-1.39-.15-2.74-.71-3.83-1.62-.03-.02-.05-.05-.08-.07v6.2c.03 3.65-2.28 7.03-5.83 7.9-2.07.54-4.29.23-6.11-.84-2.14-1.27-3.48-3.62-3.42-6.11.06-2.91 2.02-5.54 4.86-6.19 1.13-.26 2.32-.14 3.39.34v3.91c-.55-.3-1.18-.42-1.81-.35-.95.1-1.83.67-2.31 1.5-.72 1.25-.41 2.92.74 3.79.84.66 2.04.66 2.88 0 1.05-.8 1.35-2.26 1.35-3.52V0h.07z"/>
                </svg>
              </div>
              <span className="font-extrabold text-white text-xs md:text-sm transition-colors duration-300">TikTok</span>
            </a>

            {/* Copy of Bookings WhatsApp Card */}
            <a 
              href="https://wa.me/201234567890" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-center justify-center p-4 md:p-5 bg-[#25D366] border border-transparent rounded-xl md:rounded-2xl aspect-square shadow-[0_6px_16px_-4px_rgba(37,211,102,0.4)] hover:shadow-[0_10px_20px_-8px_rgba(37,211,102,0.6)] hover:scale-103 transition-all duration-300 text-center group active:scale-95 cursor-pointer"
            >
              <div className="w-11 h-11 md:w-12 md:h-12 bg-white/20 rounded-xl flex items-center justify-center text-white transition-all duration-300 mb-2.5 shadow-xs">
                <img 
                  src={whatsappLogo} 
                  alt="WhatsApp" 
                  className="w-7 h-7 md:w-8 md:h-8 object-contain brightness-0 invert" 
                  referrerPolicy="no-referrer" 
                />
              </div>
              <span className="font-extrabold text-white text-xs md:text-sm transition-colors duration-300">WhatsApp</span>
            </a>
          </div>
        </div>
      </section>



    </main>
  );
}
