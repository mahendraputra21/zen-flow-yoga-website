import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../types';
import { ArrowRight, Calendar, User } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <div className="bg-ocean-sand rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col h-full border border-slate-100">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={article.imageUrl} 
          alt={article.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-ocean-light text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
          {article.category}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-serif font-bold text-ocean-dark mb-3 line-clamp-2">
          {article.title}
        </h3>
        
        <div className="flex items-center text-slate-500 text-xs mb-4 space-x-4">
          <div className="flex items-center">
            <User size={14} className="mr-1" />
            {article.author}
          </div>
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            {article.date}
          </div>
        </div>

        <p className="text-slate-600 mb-6 text-sm line-clamp-3 flex-grow">
          {article.excerpt}
        </p>

        <Link 
          to={`/article/${article.id}`} 
          className="inline-flex items-center text-ocean-light font-semibold hover:text-ocean-dark transition-colors mt-auto group"
        >
          Read Article 
          <ArrowRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
