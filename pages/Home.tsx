import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Heart, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { articles } from '../data';
import ArticleCard from '../components/ArticleCard';
import AdSlot from '../components/AdSlot';
import { AdFormat, AdPosition } from '../types';

const slides = [
  {
    id: 1,
    // Yoga by the ocean
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1920&auto=format&fit=crop",
    title: "Find Your Inner Peace Through Movement",
    subtitle: "Yoga routines backed by psychology to reduce anxiety, improve sleep, and manage stress effectively."
  },
  {
    id: 2,
    // Calm meditation
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1920&auto=format&fit=crop",
    title: "Breathe In Calm, Breathe Out Stress",
    subtitle: "Discover the power of mindful breathing techniques to instantly regulate your nervous system."
  },
  {
    id: 3,
    // Nature flow
    image: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=1920&auto=format&fit=crop",
    title: "Restore Balance to Body and Mind",
    subtitle: "Beginner-friendly flows designed to clear brain fog and build emotional resilience."
  }
];

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { scrollY } = useScroll();
  
  // Smooth out the scroll value using physics-based spring
  const scrollYSmooth = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  // Parallax transforms using smoothed scroll
  // We map 0-600px scroll to 0-300px translation
  const bgY = useTransform(scrollYSmooth, [0, 600], [0, 300]);
  const textY = useTransform(scrollYSmooth, [0, 600], [0, 100]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const scrollToArticles = () => {
    const element = document.getElementById('articles');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Slider Section */}
      <section className="relative h-[600px] w-full overflow-hidden bg-ocean-dark group">
        
        {/* Parallax Background Container */}
        {/* 
            Geometry Fix for Parallax:
            To prevent gaps when translating 'y' downwards by up to 300px, 
            we must position the top upwards by 300px (-50% of 600px).
            We also increase height to 150% (900px) to cover the container 
            even when shifted.
        */}
        <motion.div 
          style={{ y: bgY }}
          className="absolute -top-[50%] left-0 w-full h-[150%] z-0"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <motion.img 
                src={slides[currentSlide].image} 
                alt="Yoga background" 
                className="w-full h-full object-cover"
                // Subtle persistent Ken Burns effect
                initial={{ scale: 1.05 }}
                animate={{ scale: 1.1 }}
                transition={{ duration: 8, ease: "linear" }}
              />
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-ocean-dark/90 via-ocean-dark/40 to-transparent sm:bg-gradient-to-t sm:from-ocean-dark/80 sm:via-transparent sm:to-transparent" />
              <div className="absolute inset-0 bg-black/20" />
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Content Container with Parallax */}
        <motion.div 
          style={{ y: textY }}
          className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg">
                {slides[currentSlide].title}
              </h1>
              <p className="text-xl text-ocean-mist/90 mb-10 max-w-2xl font-light leading-relaxed drop-shadow-md">
                {slides[currentSlide].subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link 
                  to="/tools/breathing" 
                  className="px-8 py-4 bg-ocean-light text-white rounded-xl font-semibold shadow-lg hover:bg-white hover:text-ocean-dark hover:scale-105 transition-all duration-300 w-full sm:w-auto text-center"
                >
                  Start Breathing
                </Link>
                <button 
                  onClick={scrollToArticles} 
                  className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/30 rounded-xl font-semibold hover:bg-white hover:text-ocean-dark transition-all duration-300 w-full sm:w-auto"
                >
                  Read Articles
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Slider Controls */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 text-white backdrop-blur-sm hover:bg-white hover:text-ocean-dark transition-colors opacity-0 group-hover:opacity-100 z-20"
          aria-label="Previous slide"
        >
          <ChevronLeft size={32} />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/20 text-white backdrop-blur-sm hover:bg-white hover:text-ocean-dark transition-colors opacity-0 group-hover:opacity-100 z-20"
          aria-label="Next slide"
        >
          <ChevronRight size={32} />
        </button>

        {/* Dots Indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3 z-20">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === currentSlide ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Ad Slot 1 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdSlot position={AdPosition.HEADER} format={AdFormat.BANNER} />
      </div>

      {/* Value Props */}
      <section className="bg-white py-16 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-ocean-mist w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-ocean-dark">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Science-Backed</h3>
              <p className="text-slate-600 text-sm">
                Techniques rooted in parasympathetic nervous system regulation.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-ocean-mist w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-ocean-dark">
                <Heart size={32} />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Beginner Friendly</h3>
              <p className="text-slate-600 text-sm">
                No flexibility required. Simple movements accessible to everyone.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-ocean-mist w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-ocean-dark">
                <Brain size={32} />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">Mental Focus</h3>
              <p className="text-slate-600 text-sm">
                Designed specifically to clear brain fog and reduce rumination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section id="articles" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-serif font-bold text-ocean-dark">Latest Insights</h2>
            <p className="text-slate-500 mt-2">Expert guides for your mental wellness journey.</p>
          </div>
          <Link to="/" className="hidden sm:flex items-center text-ocean-light font-semibold hover:text-ocean-dark transition-colors">
            View All <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;