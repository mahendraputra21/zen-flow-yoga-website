import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Headphones, Play, Pause, Volume2, VolumeX, Waves } from 'lucide-react';

const AMBIENCE_URL = "https://actions.google.com/sounds/v1/water/waves_crashing_on_rock_beach.ogg";

const AmbiencePlayer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch(e => {
        console.error("Audio play failed (interaction required):", e);
        setIsPlaying(false);
      });
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Hidden Audio Element */}
      <audio ref={audioRef} src={AMBIENCE_URL} loop />

      {/* Expanded Control Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="mb-4 bg-white/80 backdrop-blur-lg border border-white/50 p-4 rounded-2xl shadow-xl w-72 text-ocean-dark"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="p-2 bg-ocean-mist rounded-lg mr-3 text-ocean-light">
                  <Waves size={20} />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-sm text-ocean-dark">Ocean Ambience</h3>
                  <p className="text-xs text-slate-500">Focus & Relax</p>
                </div>
              </div>
              
              <button 
                onClick={() => setIsPlaying(!isPlaying)} 
                className={`p-3 rounded-full shadow-sm transition-colors ${
                  isPlaying ? 'bg-ocean-light text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-0.5"/>}
              </button>
            </div>
            
            <div className="flex items-center space-x-3 px-1">
              <button onClick={() => setVolume(0)} className="text-slate-400 hover:text-ocean-dark transition-colors">
                 {volume === 0 ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
              
              <div className="relative flex-grow h-6 flex items-center">
                 <input 
                    type="range" 
                    min="0" 
                    max="1" 
                    step="0.01" 
                    value={volume} 
                    onChange={(e) => setVolume(parseFloat(e.target.value))}
                    className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-ocean-dark z-10"
                />
                <div 
                  className="absolute left-0 h-1.5 bg-ocean-light rounded-l-lg pointer-events-none" 
                  style={{ width: `${volume * 100}%` }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 border-2 ${
            isPlaying 
                ? 'bg-ocean-light border-ocean-light text-white shadow-ocean-light/40 animate-pulse-slow' 
                : 'bg-white border-white text-ocean-light hover:bg-ocean-mist'
        }`}
      >
        <Headphones size={24} />
      </motion.button>
    </div>
  );
};

export default AmbiencePlayer;