import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Tours from './pages/Tours';
import Support from './pages/Support';
import Bookings from './pages/Bookings';
import About from './pages/About';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-800">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/support" element={<Support />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<About />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}
