import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const { t } = useAppContext();

  return (
    <footer className="bg-[#0a1d3a] w-full mt-auto border-t border-[#0a1d3a]">
      <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-6 lg:px-8 py-8 md:py-12 w-full max-w-7xl mx-auto gap-6 md:gap-8">
        <div className="flex flex-col items-center md:items-start text-center md:text-start gap-3">
          <div className="text-white font-bold text-lg md:text-xl tracking-tight">
            El-Bahrin Tours
          </div>
          <span className="text-slate-400 text-sm max-w-sm leading-relaxed">
            {t('footer.description')}
          </span>
        </div>
        
        <nav className="flex flex-col items-center md:items-start gap-y-3">
          <Link to="/support" className="text-slate-300 hover:text-white hover:opacity-80 transition-all duration-200 focus:ring-2 focus:ring-[#07b800] outline-none rounded-sm text-sm uppercase tracking-wider font-bold mb-1">
            {t('footer.contact')}
          </Link>
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <Mail className="w-4 h-4" />
            info@elbahrintours.com
          </div>
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <Phone className="w-4 h-4" />
            <span dir="ltr" className="inline-block">01006236286</span>
          </div>
          <Link to="/support" className="flex items-center justify-center gap-2 text-slate-300 hover:bg-[#07b800] hover:border-[#07b800] hover:text-white transition-all text-sm mt-1 border border-slate-600 px-4 py-2 rounded-lg w-full md:w-auto font-medium">
            <MapPin className="w-4 h-4" />
            {t('support.branches')}
          </Link>
        </nav>

        <div className="text-slate-300 text-sm">
          <a 
            href="https://ibrahim-httamy-s-portfolio-ef9k6a0ae-hemo1430s-projects.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white transition-colors hover:underline"
          >
            {t('footer.developedBy')}
          </a>
        </div>
      </div>
    </footer>
  );
}
