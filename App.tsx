import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ArticleDetail from './pages/ArticleDetail';
import BreathingTool from './pages/BreathingTool';
import About from './pages/About';
import PoseDirectory from './pages/PoseDirectory';
import PoseDetail from './pages/PoseDetail';
import AmbiencePlayer from './components/AmbiencePlayer';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans text-slate-800 bg-ocean-mist">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:id" element={<ArticleDetail />} />
          <Route path="/tools/breathing" element={<BreathingTool />} />
          <Route path="/poses" element={<PoseDirectory />} />
          <Route path="/poses/:id" element={<PoseDetail />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <AmbiencePlayer />
      <Footer />
    </div>
  );
};

export default App;