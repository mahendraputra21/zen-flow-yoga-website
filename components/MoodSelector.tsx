
import React from 'react';
import { MoodTag } from '../types';
import { Sparkles } from 'lucide-react';

interface MoodSelectorProps {
  selectedMood: MoodTag | null;
  onSelect: (mood: MoodTag | null) => void;
}

const moods: { id: MoodTag; label: string }[] = [
  { id: 'Anxious', label: 'Anxious' },
  { id: 'Tired', label: 'Tired' },
  { id: 'Insomnia', label: "Can't Sleep" },
  { id: 'Stiff', label: 'Stiff Body' },
  { id: 'Stressed', label: 'Overwhelmed' },
];

const MoodSelector: React.FC<MoodSelectorProps> = ({ selectedMood, onSelect }) => {
  return (
    <div className="w-full py-8 text-center">
      <div className="inline-flex items-center justify-center gap-2 mb-6">
        <Sparkles size={20} className="text-ocean-light" />
        <h2 className="text-2xl font-serif font-bold text-ocean-dark">How are you feeling today?</h2>
      </div>
      
      <div className="flex flex-wrap justify-center gap-3 md:gap-4 px-4 overflow-x-auto scrollbar-hide pb-2">
        {moods.map((mood) => {
          const isActive = selectedMood === mood.id;
          return (
            <button
              key={mood.id}
              onClick={() => onSelect(isActive ? null : mood.id)}
              className={`
                px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform
                ${isActive 
                  ? 'bg-ocean-dark text-white shadow-lg scale-105 border-transparent' 
                  : 'bg-white text-ocean-dark border border-ocean-light/30 hover:bg-ocean-mist hover:border-ocean-light'
                }
              `}
            >
              {mood.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MoodSelector;
