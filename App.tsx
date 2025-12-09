import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import ForEmployers from './pages/ForEmployers';
import CareerAdvice from './pages/CareerAdvice';
import Impressum from './pages/Impressum';
import AiAssistant from './components/AiAssistant';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white text-slate-900 font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/arbeitgeber" element={<ForEmployers />} />
            <Route path="/karriere" element={<CareerAdvice />} />
            <Route path="/impressum" element={<Impressum />} />
          </Routes>
        </main>
        <AiAssistant />
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
