import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { yogaPoses } from '../data';
import AdSlot from '../components/AdSlot';
import { AdFormat, AdPosition } from '../types';
import { ChevronRight, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';

const PoseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const pose = yogaPoses.find(p => p.id === id);

  if (!pose) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-700">Pose not found</h2>
        <Link to="/poses" className="text-ocean-light hover:underline mt-4 block">Back to Library</Link>
      </div>
    );
  }

  // Suggest 2 other poses (excluding current)
  const suggestedPoses = yogaPoses
    .filter(p => p.id !== id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 2);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center text-sm text-slate-500 mb-8">
        <Link to="/" className="hover:text-ocean-dark transition-colors">Home</Link>
        <ChevronRight size={14} className="mx-2" />
        <Link to="/poses" className="hover:text-ocean-dark transition-colors">Pose Library</Link>
        <ChevronRight size={14} className="mx-2" />
        <span className="text-ocean-light font-medium">{pose.englishName}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Main Content Column (Left) */}
        <div className="lg:col-span-8">
          <header className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                pose.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                pose.difficulty === 'Intermediate' ? 'bg-orange-100 text-orange-700' :
                'bg-red-100 text-red-700'
              }`}>
                {pose.difficulty}
              </span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold uppercase tracking-wider">
                {pose.category}
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-ocean-dark mb-2">
              {pose.englishName}
            </h1>
            <h2 className="text-2xl text-slate-500 font-serif italic mb-6">
              {pose.sanskritName}
            </h2>
          </header>

          <div className="bg-white p-2 rounded-2xl shadow-sm border border-slate-100 mb-10">
            <img 
              src={pose.imageUrl} 
              alt={pose.englishName} 
              className="w-full h-[400px] sm:h-[500px] object-cover rounded-xl"
            />
          </div>

          {/* Benefits Section */}
          <section className="mb-10">
            <h3 className="text-2xl font-serif font-bold text-ocean-dark mb-6 flex items-center">
              <CheckCircle className="text-ocean-light mr-3" />
              Why do this pose?
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pose.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start bg-ocean-mist/50 p-4 rounded-xl">
                  <span className="w-2 h-2 mt-2 bg-ocean-light rounded-full mr-3 flex-shrink-0" />
                  <span className="text-slate-700 leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Ad Slot A: High Visibility Rectangle */}
          <AdSlot position={AdPosition.IN_ARTICLE} format={AdFormat.RECTANGLE} className="my-10" />

          {/* Instructions Section */}
          <section className="mb-10">
            <h3 className="text-2xl font-serif font-bold text-ocean-dark mb-6">Step-by-Step Instructions</h3>
            <div className="space-y-6">
              {pose.steps.map((step, idx) => (
                <div key={idx} className="flex group">
                  <div className="flex-shrink-0 w-10 h-10 bg-white border-2 border-ocean-light text-ocean-dark font-bold rounded-full flex items-center justify-center mr-6 group-hover:bg-ocean-light group-hover:text-white transition-colors shadow-sm">
                    {idx + 1}
                  </div>
                  <p className="text-lg text-slate-700 leading-relaxed pt-1">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Contraindications Warning */}
          <section className="bg-amber-50 border border-amber-200 rounded-xl p-6 md:p-8">
            <div className="flex items-start">
              <AlertTriangle className="text-amber-500 flex-shrink-0 mr-4 mt-1" size={24} />
              <div>
                <h4 className="text-lg font-bold text-amber-800 mb-2">Safety Tips & Contraindications</h4>
                <p className="text-amber-800/80 mb-3 text-sm">Please consult with a healthcare provider before attempting this pose if you have:</p>
                <ul className="list-disc pl-5 space-y-1 text-amber-900">
                  {pose.contraindications.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

        </div>

        {/* Sidebar Column (Right) */}
        <aside className="lg:col-span-4 space-y-8">
          
          {/* Internal Linking: Flow Suggestions */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="font-serif font-bold text-lg text-ocean-dark mb-4">Perfect Flow With</h3>
            <div className="space-y-4">
              {suggestedPoses.map(p => (
                <Link key={p.id} to={`/poses/${p.id}`} className="flex items-center group">
                  <img 
                    src={p.imageUrl} 
                    alt={p.englishName} 
                    className="w-16 h-16 rounded-lg object-cover mr-4" 
                  />
                  <div>
                    <h4 className="font-bold text-slate-700 text-sm group-hover:text-ocean-light transition-colors">
                      {p.englishName}
                    </h4>
                    <span className="text-xs text-slate-500">{p.difficulty}</span>
                  </div>
                  <ArrowRight size={16} className="ml-auto text-slate-300 group-hover:text-ocean-light" />
                </Link>
              ))}
            </div>
          </div>

          {/* Ad Slot B: Sticky Skyscraper */}
          <div className="sticky top-24">
            <AdSlot position={AdPosition.SIDEBAR} format={AdFormat.SKYSCRAPER} />
          </div>

        </aside>
      </div>
    </div>
  );
};

export default PoseDetail;