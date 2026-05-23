import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { ArrowRight, Star, Anchor, Shield, HelpCircle, StarHalf } from 'lucide-react';

export default function Home() {
  const { lang, t } = useAppContext();
  const navigate = useNavigate();

  const isAr = lang === 'ar';

  return (
    <div className="w-full">
      {/* ──────────────────────────────────────────────────────── */}
      {/* 1. DESKTOP & TABLET VIEWPORT (Preserved exact design) */}
      {/* ──────────────────────────────────────────────────────── */}
      <main className="hidden md:flex max-w-7xl mx-auto px-4 md:px-8 py-16 flex-col gap-16 w-full">
        {/* Stats Section */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-16 py-8">
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-[#07b800] leading-tight">
              {isAr ? 'البحرين للسياحة' : 'El-Bahrin Tours'}
            </h1>
            <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
              {isAr
                ? 'مجموعة متميزة من الرحلات السياحية والدينية. نقدم لك أفضل الخدمات وأعلى مستويات الراحة لضمان تجربة سفر لا تُنسى. اكتشف معنا العالم من خلال باقات تناسب جميع متطلباتك.'
                : 'El-Bahrin Tours Company is an Egyptian joint-stock company established in 1989. As a class "A" agency, we specialize in general, domestic, international, religious, and medical tourism, along with inbound tours and limousine transportation services.'}
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img 
              src="https://www.elbahrintours.com/siteAssests/images/logo.png" 
              alt="El-Bahrin Tours Logo" 
              className="w-full max-w-sm lg:max-w-md object-contain drop-shadow-2xl"
            />
          </div>
        </section>

        <section className="flex flex-col gap-8 md:px-[150px]">
          {/* Cards Grid */}
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            <div className="bg-[#0a1d3a] text-white p-2 md:p-4 rounded-xl flex flex-col items-center justify-center aspect-[211/170] w-full shadow-sm transition-all duration-300">
              <span className="text-[clamp(1.5rem,4vw,64px)] font-bold">25</span>
              <span className="text-[clamp(9px,1.2vw,18px)] mt-1 md:mt-4 text-center text-white/80 font-medium">
                {isAr ? 'سنوات من الخبرة' : 'years of experience'}
              </span>
            </div>
            <div className="bg-[#0a1d3a] text-white p-2 md:p-4 rounded-xl flex flex-col items-center justify-center aspect-[211/170] w-full shadow-sm transition-all duration-300">
              <span className="text-[clamp(1.5rem,4vw,64px)] font-bold">13</span>
              <span className="text-[clamp(9px,1.2vw,18px)] mt-1 md:mt-4 text-center text-white/80 font-medium">
                {isAr ? 'جوائز تكريم' : 'Trophies'}
              </span>
            </div>
            <div className="bg-[#0a1d3a] text-white p-2 md:p-4 rounded-xl flex flex-col items-center justify-center aspect-[211/170] w-full shadow-sm transition-all duration-300">
              <span className="text-[clamp(1.5rem,4vw,64px)] font-bold">950+</span>
              <span className="text-[clamp(9px,1.2vw,18px)] mt-1 md:mt-4 text-center text-white/80 font-medium">
                {isAr ? 'رحلات طيران' : 'Flights'}
              </span>
            </div>
          </div>

          {/* Ratings Row */}
          <div className="flex flex-row gap-4 md:gap-8 justify-center mt-8 w-full">
            <div className="w-[30%] max-w-[240px] aspect-square rounded-full border-2 border-slate-300 flex flex-col items-center justify-center text-[#0a1d3a] bg-white shadow-sm transition-all duration-300">
              <span className="text-[clamp(2rem,85px,150px)] lg:text-[150px] leading-none font-bold mb-1">A</span>
              <span className="text-[clamp(8px,1.2vw,20px)] leading-none uppercase tracking-wider font-medium text-slate-500">
                {isAr ? 'تصنيف ممتاز' : 'Class'}
              </span>
            </div>
            <div className="w-[30%] max-w-[240px] aspect-square rounded-full border-2 border-slate-300 flex flex-col items-center justify-center text-[#0a1d3a] bg-white shadow-sm transition-all duration-300">
              <span className="text-[clamp(2rem,85px,150px)] lg:text-[150px] leading-none font-bold mb-1">4</span>
              <div className="flex gap-0.5 md:gap-1 text-[#07b800]">
                <Star className="w-[clamp(10px,1.8vw,24px)] h-[clamp(10px,1.8vw,24px)] fill-current border-transparent" />
                <Star className="w-[clamp(10px,1.8vw,24px)] h-[clamp(10px,1.8vw,24px)] fill-current border-transparent" />
                <Star className="w-[clamp(10px,1.8vw,24px)] h-[clamp(10px,1.8vw,24px)] fill-current border-transparent" />
                <Star className="w-[clamp(10px,1.8vw,24px)] h-[clamp(10px,1.8vw,24px)] fill-current border-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Tours Section */}
        <section className="flex flex-col gap-6">
          {/* Card 1 */}
          <Link to="/tours#hajj" className="relative w-full h-64 md:h-[400px] rounded-xl overflow-hidden group cursor-pointer shadow-sm block">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCwaxX2oep7RLnCeuvt4Rx5aoDi12FQ5WzfkzNRm51zXb03lMyomBVIF8FAYqJr87gPX3r8RXTcI6MN46gwLamRiM0stvyjs-nfN5WhZhRaBHq5vOwPq3_VSXDDxR3gNcLZGeLizLtEVjfbd7NS8NdVtYp898AG0XJuDsxrs5okeNvhsiXFJAzQgSaJWc9aaNsUlHc7dfCuo-zHHALyt7VdbpihGnXAjDfbLC-oV4DsHyNIB_eminjlSgYL_f3u7qvOGLtXm2M4hw')" }}></div>
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0a1d3a]/90 to-transparent"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="flex justify-between items-end">
                <h3 className="text-white text-3xl md:text-[40px] font-bold">{isAr ? 'حج وعمرة' : 'Hajj and Umrah'}</h3>
                <button className="w-14 h-14 bg-white text-[#0a1d3a] rounded-full flex items-center justify-center shadow-lg group-hover:bg-[#07b800] group-hover:text-white transition-colors">
                  <ArrowRight className={`w-6 h-6 ${isAr ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>
          </Link>

          {/* Card 2 */}
          <Link to="/tours#local" className="relative w-full h-64 md:h-[400px] rounded-xl overflow-hidden group cursor-pointer shadow-sm block">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuACBr7lJikAZpm0C_4kAqVlitgMZTLS6wNMaY-iZSKANuM9iI0Qv9OvcPaNj9hj3CCUUL_H-3foMAQXrf-HJwaeu1xYHA_RX_Z9ZuCmYEXKF2EZenY4ZCiB-z-O8IQvdJhP3lxCbjWnwlQnnzhGGyKYenk2pTv8rmJCyjEEbMCsFm1q4bAQY7AnaAPbaFLY_46f2G2vABl8BjsFbISWtPzaOt6f6XEAUvj7yPDKhTba7u1slJ7TRa2rKryjCcxeB5psfhFyL6IRKQ')" }}></div>
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0a1d3a]/90 to-transparent"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="flex justify-between items-end">
                <h3 className="text-white text-3xl md:text-[40px] font-bold">{isAr ? 'سياحة داخلية' : 'Local Tourism'}</h3>
                <button className="w-14 h-14 bg-white text-[#0a1d3a] rounded-full flex items-center justify-center shadow-lg group-hover:bg-[#07b800] group-hover:text-white transition-colors">
                  <ArrowRight className={`w-6 h-6 ${isAr ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>
          </Link>

          {/* Card 3 */}
          <Link to="/tours#world" className="relative w-full h-64 md:h-[400px] rounded-xl overflow-hidden group cursor-pointer shadow-sm block">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuApSpKPdy_9oOswmV3wHIMGeXst5jOe4dx7aNqjvvoWHSu0EiKKrS4YWY7FI0xCuJbcZhcKtsx_rVaub1GEvkg3NvNDvR7mtxSPQHLUpp2l10ZWA6_DRvAUpONSTAOEwmflWvyfJNYGTxxi4bG9KXTVt0B0g20UjsB8OFiqM59fWP5iaNpxLj5PpfRerL49vuEBzp9DiAwpG_5Et74Ldo2G3FZE_4oN_uenA3bFTqESWW7Q0poNi04p5M0YyKqVEZrEBOa0UB1sOg')" }}></div>
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0a1d3a]/90 to-transparent"></div>
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="flex justify-between items-end">
                <h3 className="text-white text-3xl md:text-[40px] font-bold">{isAr ? 'سياحة خارجية' : 'Global Tourism'}</h3>
                <button className="w-14 h-14 bg-white text-[#0a1d3a] rounded-full flex items-center justify-center shadow-lg group-hover:bg-[#07b800] group-hover:text-white transition-colors">
                  <ArrowRight className={`w-6 h-6 ${isAr ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>
          </Link>
        </section>
      </main>

      {/* ──────────────────────────────────────────────────────── */}
      {/* 2. MOBILE VIEWPORT (El-Bahrin Tours - Home Mobile Refined) */}
      {/* ──────────────────────────────────────────────────────── */}
      <main className="block md:hidden w-full bg-[#f9f9f9]" dir={isAr ? 'rtl' : 'ltr'}>
        {/* Feature Highlight (Three Mobile Cards matching desktop categories) */}
        <section className="py-12 bg-slate-50 px-4">
          <div className="space-y-6 max-w-md mx-auto">
            {/* Card 1: Hajj & Umrah */}
            <Link to="/tours#hajj" className="bg-white border border-slate-200 rounded-xl relative overflow-hidden group shadow-sm h-52 block">
              <img 
                alt="Hajj and Umrah" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-103 brightness-90" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwaxX2oep7RLnCeuvt4Rx5aoDi12FQ5WzfkzNRm51zXb03lMyomBVIF8FAYqJr87gPX3r8RXTcI6MN46gwLamRiM0stvyjs-nfN5WhZhRaBHq5vOwPq3_VSXDDxR3gNcLZGeLizLtEVjfbd7NS8NdVtYp898AG0XJuDsxrs5okeNvhsiXFJAzQgSaJWc9aaNsUlHc7dfCuo-zHHALyt7VdbpihGnXAjDfbLC-oV4DsHyNIB_eminjlSgYL_f3u7qvOGLtXm2M4hw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
              <div className="absolute bottom-5 inset-x-5">
                <h3 className="text-white font-extrabold text-xl mb-1">{isAr ? 'حج وعمرة' : 'Hajj and Umrah'}</h3>
              </div>
            </Link>

            {/* Card 2: Local Tourism */}
            <Link to="/tours#local" className="bg-white border border-slate-200 rounded-xl relative overflow-hidden group shadow-sm h-52 block">
              <img 
                alt="Local Tourism" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-103 brightness-90" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuACBr7lJikAZpm0C_4kAqVlitgMZTLS6wNMaY-iZSKANuM9iI0Qv9OvcPaNj9hj3CCUUL_H-3foMAQXrf-HJwaeu1xYHA_RX_Z9ZuCmYEXKF2EZenY4ZCiB-z-O8IQvdJhP3lxCbjWnwlQnnzhGGyKYenk2pTv8rmJCyjEEbMCsFm1q4bAQY7AnaAPbaFLY_46f2G2vABl8BjsFbISWtPzaOt6f6XEAUvj7yPDKhTba7u1slJ7TRa2rKryjCcxeB5psfhFyL6IRKQ"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
              <div className="absolute bottom-5 inset-x-5">
                <h3 className="text-white font-extrabold text-xl mb-1">{isAr ? 'سياحة داخلية' : 'Local Tourism'}</h3>
              </div>
            </Link>

            {/* Card 3: Global Tourism */}
            <Link to="/tours#world" className="bg-white border border-slate-200 rounded-xl relative overflow-hidden group shadow-sm h-52 block text-start">
              <img 
                alt="Global Tourism" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-103 brightness-90" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuApSpKPdy_9oOswmV3wHIMGeXst5jOe4dx7aNqjvvoWHSu0EiKKrS4YWY7FI0xCuJbcZhcKtsx_rVaub1GEvkg3NvNDvR7mtxSPQHLUpp2l10ZWA6_DRvAUpONSTAOEwmflWvyfJNYGTxxi4bG9KXTVt0B0g20UjsB8OFiqM59fWP5iaNpxLj5PpfRerL49vuEBzp9DiAwpG_5Et74Ldo2G3FZE_4oN_uenA3bFTqESWW7Q0poNi04p5M0YyKqVEZrEBOa0UB1sOg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
              <div className="absolute bottom-5 inset-x-5">
                <h3 className="text-white font-extrabold text-xl mb-1">{isAr ? 'سياحة خارجية' : 'Global Tourism'}</h3>
              </div>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
