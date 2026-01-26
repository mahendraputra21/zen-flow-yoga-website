import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import AdSlot from '../components/AdSlot';
import { AdPosition } from '../types';

type Phase = 'inhale' | 'hold' | 'exhale' | 'idle';

const BreathingTool: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<Phase>('idle');
  const [instruction, setInstruction] = useState('Ready?');
  const [timer, setTimer] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(false);

  // Animation variants
  const circleVariants = {
    idle: { scale: 1, opacity: 0.8 },
    inhale: { scale: 1.5, opacity: 1, transition: { duration: 4, ease: "easeInOut" as const } },
    hold: { 
      scale: [1.5, 1.45, 1.5], 
      opacity: 0.9, 
      transition: { duration: 7, repeat: Infinity, repeatType: "reverse" as const } 
    },
    exhale: { scale: 1, opacity: 0.8, transition: { duration: 8, ease: "easeInOut" as const } }
  };

  useEffect(() => {
    let interval: any;
    
    if (isActive) {
      const runCycle = async () => {
        // Inhale (4s)
        setPhase('inhale');
        setInstruction('Inhale deeply...');
        setTimer(4);
        await new Promise(r => setTimeout(r, 4000));
        
        if (!isActive) return;

        // Hold (7s)
        setPhase('hold');
        setInstruction('Hold gently...');
        setTimer(7);
        await new Promise(r => setTimeout(r, 7000));

        if (!isActive) return;

        // Exhale (8s)
        setPhase('exhale');
        setInstruction('Exhale slowly...');
        setTimer(8);
        await new Promise(r => setTimeout(r, 8000));

        if (isActive) {
            runCycle(); // Loop
        }
      };

      runCycle();
    } else {
      setPhase('idle');
      setInstruction('Ready to relax?');
      setTimer(0);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  const toggleSession = () => {
    setIsActive(!isActive);
    if (isActive) {
      // Stopping
      setPhase('idle');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-ocean-mist">
      
      <div className="w-full max-w-3xl px-4 py-12 flex-grow flex flex-col items-center justify-center">
        
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-ocean-dark mb-4">4-7-8 Breathing</h1>
          <p className="text-slate-600 max-w-lg mx-auto">
            This simple technique activates the parasympathetic nervous system, reducing anxiety instantly.
            Follow the circle: Inhale for 4, Hold for 7, Exhale for 8.
          </p>
        </div>

        {/* Animation Container */}
        <div className="relative w-80 h-80 flex items-center justify-center mb-12">
          {/* Outer Guide Circle */}
          <div className="absolute w-full h-full rounded-full border-4 border-white/50 shadow-inner"></div>
          
          {/* Animated Circle */}
          <motion.div
            variants={circleVariants}
            animate={phase}
            className="w-48 h-48 bg-gradient-to-br from-ocean-light to-ocean-dark rounded-full shadow-2xl flex items-center justify-center z-10"
          >
            <div className="text-white text-center">
              <p className="text-2xl font-bold font-serif mb-1">{instruction}</p>
              {isActive && (
                 <p className="text-xs opacity-80 uppercase tracking-widest">{phase}</p>
              )}
            </div>
          </motion.div>

          {/* Pulse Rings Effect (Optional visual flair) */}
          {phase === 'hold' && (
             <motion.div 
                initial={{ scale: 1.5, opacity: 0 }}
                animate={{ scale: 2, opacity: 0 }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute w-48 h-48 bg-ocean-light rounded-full z-0"
             />
          )}
        </div>

        {/* Controls */}
        <div className="flex items-center space-x-6">
          <button
            onClick={toggleSession}
            className={`flex items-center space-x-2 px-8 py-4 rounded-xl font-bold shadow-lg transition-all transform hover:scale-105 ${
              isActive 
                ? 'bg-white text-ocean-dark border border-ocean-dark' 
                : 'bg-ocean-dark text-white'
            }`}
          >
            {isActive ? (
              <>
                <Pause size={20} />
                <span>Pause Session</span>
              </>
            ) : (
              <>
                <Play size={20} />
                <span>Start Breathing</span>
              </>
            )}
          </button>

          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-4 rounded-xl bg-white text-slate-500 shadow-md hover:text-ocean-dark transition-colors"
            title="Toggle Sound (Placeholder)"
          >
            {soundEnabled ? <Volume2 size={24} /> : <VolumeX size={24} />}
          </button>
        </div>

      </div>

      {/* Bottom Ad */}
      <div className="w-full max-w-4xl px-4 pb-12">
        <AdSlot position={AdPosition.TOOL_BOTTOM} className="mt-auto" />
      </div>
    </div>
  );
};

export default BreathingTool;