import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, ArrowRight } from 'lucide-react';
import { yogaPoses } from '../data';
import AdSlot from '../components/AdSlot';
import { AdPosition, AdFormat } from '../types';

const PoseDirectory: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [difficulty, setDifficulty] = useState<string>('All');
  const [category, setCategory] = useState<string>('All');

  // Derive unique categories and difficulties for filters
  const categories = ['All', ...Array.from(new Set(yogaPoses.map(p => p.category)))];
  const difficulties = ['All', ...Array.from(new Set(yogaPoses.map(p => p.difficulty)))];

  const filteredPoses = yogaPoses.filter(pose => {
    const matchesSearch = 
      pose.englishName.toLowerCase().includes(searchTerm.toLowerCase()) || 
      pose.sanskritName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = difficulty === 'All' || pose.difficulty === difficulty;
    const matchesCategory = category === 'All' || pose.category === category;

    return matchesSearch && matchesDifficulty && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-ocean-mist">
      {/* Header Section */}
      <div className="bg-ocean-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Yoga Pose Library</h1>
          <p className="text-xl text-ocean-mist/80 max-w-2xl mx-auto">
            Explore our comprehensive directory of asanas. Filter by difficulty or focus to find the perfect addition to your flow.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        {/* Search & Filter Container */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          
          {/* Search Bar */}
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-4 border border-slate-200 rounded-xl leading-5 bg-slate-50 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-ocean-light/50 transition-colors"
              placeholder="Search for a pose (e.g., Cobra, Balasana)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
              <div className="flex items-center text-slate-500 mr-2">
                <Filter size={18} />
                <span className="text-sm font-medium ml-1">Difficulty:</span>
              </div>
              {difficulties.map((level) => (
                <button
                  key={level}
                  onClick={() => setDifficulty(level)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    difficulty === level
                      ? 'bg-ocean-dark text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>

            <div className="w-px bg-slate-200 hidden md:block" />

            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
               <span className="text-sm font-medium text-slate-500 mr-2">Category:</span>
               {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    category === cat
                      ? 'bg-ocean-light text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Strategic Ad Placement */}
        <AdSlot position={AdPosition.HEADER} format={AdFormat.BANNER} className="mb-12" />

        {/* Pose Grid */}
        {filteredPoses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
            {filteredPoses.map((pose) => (
              <Link 
                to={`/poses/${pose.id}`} 
                key={pose.id}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col border border-slate-100 hover:border-ocean-light/30"
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
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm">
            <p className="text-xl text-slate-500 mb-2">No poses found matching your criteria.</p>
            <button 
              onClick={() => {setSearchTerm(''); setDifficulty('All'); setCategory('All');}}
              className="text-ocean-light font-semibold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PoseDirectory;