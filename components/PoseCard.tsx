
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { YogaPose } from '../types';

interface PoseCardProps {
  pose: YogaPose;
  className?: string;
}

const PoseCard: React.FC<PoseCardProps> = ({ pose, className = '' }) => {
  return (
    <Link 
      to={`/poses/${pose.id}`} 
      className={`group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col border border-slate-100 hover:border-ocean-light/30 ${className}`}
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={pose.imageUrl} 
          alt={pose.englishName} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
        <div className="absolute bottom-4 left-4 text-white">
          <span className="inline-block px-2 py-1 bg-white/20 backdrop-blur-md rounded-md text-xs font-bold uppercase tracking-wider mb-2 border border-white/30">
            {pose.category}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-serif font-bold text-ocean-dark group-hover:text-ocean-light transition-colors">
            {pose.englishName}
          </h3>
          <span className={`px-2 py-1 rounded text-xs font-bold uppercase ${
            pose.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
            pose.difficulty === 'Intermediate' ? 'bg-orange-100 text-orange-700' :
            'bg-red-100 text-red-700'
          }`}>
            {pose.difficulty}
          </span>
        </div>
        
        <p className="text-slate-500 italic font-serif mb-4 text-sm">{pose.sanskritName}</p>
        
        <div className="mt-auto flex items-center text-ocean-light font-semibold text-sm group-hover:translate-x-1 transition-transform">
          View Instructions <ArrowRight size={16} className="ml-1" />
        </div>
      </div>
    </Link>
  );
};

export default PoseCard;
