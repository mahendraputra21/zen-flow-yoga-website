
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Activity, Moon, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { articles, yogaPoses } from '../data';
import ArticleCard from '../components/ArticleCard';
import PoseCard from '../components/PoseCard';
import MoodSelector from '../components/MoodSelector';
import AdSlot from '../components/AdSlot';
import SEO from '../components/SEO';
import { AdFormat, AdPosition, MoodTag } from '../types';

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
  const [selectedMood, setSelectedMood] = useState<MoodTag | null>(null);
  const { scrollY } = useScroll();
  
  // Smooth out the scroll value using physics-based spring
  const scrollYSmooth = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  // Parallax transforms using smoothed scroll
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

  const filteredArticles = selectedMood 
    ? articles.filter(a => a.tags.includes(selectedMood)) 
    : articles;
  
  const filteredPoses = selectedMood
    ? yogaPoses.filter(p => p.tags.includes(selectedMood))
    : [];

  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="Home" 
        description="Find inner peace with Zen Flow Yoga. Explore science-backed yoga routines, breathing tools, and mental health insights." 
      />
      
      {/* Hero Slider Section */}
      <section className="relative h-[600px] w-full overflow-hidden bg-ocean-dark group">
        
        {/* Parallax Background Container */}
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
      
      {/* Mood Selector Section */}
      <section className="bg-ocean-mist border-b border-ocean-light/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MoodSelector selectedMood={selectedMood} onSelect={setSelectedMood} />
        </div>
      </section>

      {/* Ad Slot 1 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdSlot position={AdPosition.HEADER} format={AdFormat.BANNER} />
      </div>

      {/* NEW SECTION: What is Yoga? */}
      {!selectedMood && (
        <section className="py-20 bg-gradient-to-b from-white to-ocean-mist/30 overflow-hidden relative">
           {/* Decorative background element */}
           <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-ocean-light/5 rounded-full blur-3xl" />
           <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-200/10 rounded-full blur-3xl" />

           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
               
               {/* Image Column */}
               <motion.div 
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.8 }}
                 viewport={{ once: true }}
                 className="relative"
               >
                 <div className="absolute inset-0 bg-ocean-dark/10 rounded-2xl transform translate-x-4 translate-y-4" />
                 <img 
                   src="https://images.unsplash.com/photo-1501597301489-8b75b675ba0a?q=80&w=1169&auto=format&fit=crop" 
                   alt="Peaceful yoga practice" 
                   className="relative rounded-2xl shadow-xl w-full h-[500px] object-cover"
                 />
                 {/* Floating Quote Card */}
                 <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg max-w-xs border border-slate-50 hidden md:block">
                    <p className="font-serif italic text-ocean-dark text-lg mb-2">"Yoga is the journey of the self, through the self, to the self."</p>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">— The Bhagavad Gita</p>
                 </div>
               </motion.div>

               {/* Text Column */}
               <motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 0.2 }}
                 viewport={{ once: true }}
                 className="lg:pl-10"
               >
                 <div className="flex items-center space-x-2 mb-4">
                   <div className="h-px w-8 bg-ocean-light" />
                   <span className="text-ocean-light font-bold uppercase tracking-widest text-sm">Philosophy</span>
                 </div>
                 
                 <h2 className="text-4xl md:text-5xl font-serif font-bold text-ocean-dark mb-6 leading-tight">
                   What is Yoga?
                 </h2>
                 
                 <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light">
                   <p>
                     At its core, yoga is more than just physical flexibility or strength. It is a 
                     <span className="font-medium text-ocean-dark mx-1">conscious technology</span> 
                     developed over thousands of years to unite the breath, body, and mind.
                   </p>
                   <p>
                     In our modern context, yoga serves as a powerful tool for mental health. By synchronizing movement with deep breathing, we stimulate the vagus nerve, signaling safety to our nervous system and effectively counteracting the stress response.
                   </p>
                   <p>
                     Whether you are holding a warrior pose or simply sitting in silence, you are practicing the art of presence—learning to observe your thoughts without being ruled by them.
                   </p>
                 </div>

                 <div className="mt-8 flex flex-wrap gap-4">
                   <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-100 text-sm text-slate-700">
                      <div className="w-2 h-2 rounded-full bg-ocean-light" />
                      <span>Breath Control</span>
                   </div>
                   <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-100 text-sm text-slate-700">
                      <div className="w-2 h-2 rounded-full bg-ocean-light" />
                      <span>Mindfulness</span>
                   </div>
                   <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-100 text-sm text-slate-700">
                      <div className="w-2 h-2 rounded-full bg-ocean-light" />
                      <span>Movement</span>
                   </div>
                 </div>

               </motion.div>
             </div>
           </div>
        </section>
      )}

      {/* NEW SECTION: Why Yoga? (Replacing old Value Props) */}
      {!selectedMood && (
        <section className="py-24 bg-ocean-dark relative overflow-hidden border-t border-white/10">
          {/* Background decorations */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-ocean-light rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-400 rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <span className="text-ocean-light font-bold uppercase tracking-widest text-sm">Benefits</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mt-3 mb-6">Why Practice Yoga?</h2>
              <p className="text-ocean-mist/80 max-w-2xl mx-auto text-lg leading-relaxed font-light">
                Beyond physical flexibility, yoga is a powerful practice for mental resilience. Here is how it transforms your well-being from the inside out.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {/* Card 1: Nervous System */}
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 0 }}
                 viewport={{ once: true }}
                 className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group hover:shadow-2xl hover:shadow-ocean-light/10 hover:-translate-y-1"
               >
                 <div className="bg-gradient-to-br from-ocean-light to-ocean-dark w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform shadow-lg">
                   <Activity size={28} />
                 </div>
                 <h3 className="text-xl font-bold text-white mb-3">Nervous System Regulation</h3>
                 <p className="text-ocean-mist/70 leading-relaxed font-light">
                   Shifts your body from "fight or flight" to "rest and digest" by stimulating the vagus nerve through controlled breathing and movement.
                 </p>
               </motion.div>

               {/* Card 2: Emotional Balance */}
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 0.1 }}
                 viewport={{ once: true }}
                 className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group hover:shadow-2xl hover:shadow-ocean-light/10 hover:-translate-y-1"
               >
                 <div className="bg-gradient-to-br from-ocean-light to-ocean-dark w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform shadow-lg">
                   <Brain size={28} />
                 </div>
                 <h3 className="text-xl font-bold text-white mb-3">Emotional Resilience</h3>
                 <p className="text-ocean-mist/70 leading-relaxed font-light">
                   Teaches you to sit with discomfort and observe emotions without reactivity, building mental fortitude and reducing rumination.
                 </p>
               </motion.div>

               {/* Card 3: Better Sleep */}
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 0.2 }}
                 viewport={{ once: true }}
                 className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group hover:shadow-2xl hover:shadow-ocean-light/10 hover:-translate-y-1"
               >
                 <div className="bg-gradient-to-br from-ocean-light to-ocean-dark w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform shadow-lg">
                   <Moon size={28} />
                 </div>
                 <h3 className="text-xl font-bold text-white mb-3">Deep Restoration</h3>
                 <p className="text-ocean-mist/70 leading-relaxed font-light">
                   Practices like Yoga Nidra reduce sleep latency and improve quality by physically releasing held tension from the muscles.
                 </p>
               </motion.div>
            </div>
            
            {/* Bottom Call to Action */}
             <div className="mt-16 text-center">
               <Link to="/tools/breathing" className="inline-flex items-center text-white font-semibold border-b border-ocean-light pb-1 hover:text-ocean-light transition-colors group">
                  Try a breathing exercise to feel it yourself <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
               </Link>
             </div>
          </div>
        </section>
      )}

      {/* Featured Content / Filtered Results */}
      <section id="articles" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-serif font-bold text-ocean-dark">
              {selectedMood ? 'Recommended for You' : 'Latest Insights'}
            </h2>
            <p className="text-slate-500 mt-2">
              {selectedMood 
                ? `Curated resources to help when you are feeling ${selectedMood.toLowerCase()}.` 
                : 'Expert guides for your mental wellness journey.'}
            </p>
          </div>
          <Link to="/" className="hidden sm:flex items-center text-ocean-light font-semibold hover:text-ocean-dark transition-colors">
            {selectedMood ? 'View All Content' : 'View All'} <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatePresence>
            {/* Articles */}
            {filteredArticles.map((article) => (
              <motion.div
                key={`article-${article.id}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ArticleCard article={article} />
              </motion.div>
            ))}

            {/* Poses (Only shown when filtered) */}
            {filteredPoses.map((pose) => (
              <motion.div
                key={`pose-${pose.id}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <PoseCard pose={pose} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredArticles.length === 0 && filteredPoses.length === 0 && (
           <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-slate-100">
             <p className="text-xl text-slate-500">We couldn't find specific resources for this mood right now.</p>
             <button 
               onClick={() => setSelectedMood(null)}
               className="text-ocean-light font-semibold hover:underline mt-2"
             >
               View all content
             </button>
           </div>
        )}
      </section>

    </div>
  );
};

export default Home;
