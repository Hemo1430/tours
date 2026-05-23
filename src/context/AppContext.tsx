import React, { createContext, useContext, useState, useEffect } from 'react';
import { Lang, Currency } from '../types';
import { i18n, exchangeRates } from '../i18n';

interface AppContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  selectedTourId: string | null;
  setSelectedTourId: (id: string | null) => void;
  t: (key: keyof typeof i18n['en']) => string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>('ar');
  const [currency, setCurrency] = useState<Currency>('EGP');
  const [selectedTourId, setSelectedTourId] = useState<string | null>(null);
  const [rates, setRates] = useState<Record<Currency, number>>({
    EGP: 1,
    USD: 0.0206,
    SAR: 0.0773,
  });

  // Simple translation helper
  const t = (key: keyof typeof i18n['en']) => {
    return i18n[lang][key] || key;
  };

  // Fetch real-time exchange rates from open-er-api on layout mount
  useEffect(() => {
    const fetchLatestRates = async () => {
      try {
        const response = await fetch('https://open.er-api.com/v6/latest/EGP');
        if (response.ok) {
          const data = await response.json();
          if (data && data.rates) {
            const fetchedUSD = data.rates.USD || 0.0206;
            const fetchedSAR = data.rates.SAR || 0.0773;
            
            // Sync values to both the state and the global variable imported everywhere
            const newRates = { EGP: 1, USD: fetchedUSD, SAR: fetchedSAR };
            setRates(newRates);
            exchangeRates.USD = fetchedUSD;
            exchangeRates.SAR = fetchedSAR;
            console.log('Real-time currency exchange rates successfully synced from money converter API:', newRates);
          }
        }
      } catch (error) {
        console.warn('Could not retrieve dynamic exchange rates, utilizing pristine fallbacks:', error);
      }
    };
    fetchLatestRates();
  }, []);

  // Flip document direction when arabic is selected
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <AppContext.Provider value={{ lang, setLang, currency, setCurrency, selectedTourId, setSelectedTourId, t }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
