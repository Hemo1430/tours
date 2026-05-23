import React from 'react';
import { useAppContext } from '../context/AppContext';

export default function About() {
  const { t } = useAppContext();

  return (
    <main className="flex-grow flex flex-col items-center justify-center p-8 w-full max-w-7xl mx-auto text-center min-h-[60vh]">
      <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">{t('about.404')}</h1>
    </main>
  );
}
