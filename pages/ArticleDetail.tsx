
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { articles } from '../data';
import AdSlot from '../components/AdSlot';
import SEO from '../components/SEO';
import SocialShare from '../components/SocialShare';
import { AdFormat, AdPosition } from '../types';
import { Calendar, User, ChevronRight, Clock } from 'lucide-react';

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = articles.find(a => a.id === id);

  if (!article) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-700">Article not found</h2>
        <Link to="/" className="text-ocean-light hover:underline mt-4 block">Return Home</Link>
      </div>
    );
  }

  const currentUrl = window.location.href;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SEO 
        title={article.title} 
        description={article.excerpt}
        image={article.imageUrl}
        type="article"
      />
      
      {/* Breadcrumb */}
      <nav className="flex items-center text-sm text-slate-500 mb-8">
        <Link to="/" className="hover:text-ocean-dark transition-colors">Home</Link>
        <ChevronRight size={14} className="mx-2" />
        <Link to="/" className="hover:text-ocean-dark transition-colors">Articles</Link>
        <ChevronRight size={14} className="mx-2" />
        <span className="text-ocean-light font-medium">{article.category}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Main Content (70%) */}
        <div className="lg:col-span-8">
          <header className="mb-10">
            <div className="flex flex-wrap gap-2 mb-4">
               <span className="bg-ocean-mist text-ocean-dark text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                 {article.category}
               </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-ocean-dark mb-6 leading-tight">
              {article.title}
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 font-light leading-relaxed font-sans text-justify">
              {article.excerpt}
            </p>

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-y border-slate-100 py-6 gap-4">
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-ocean-light/10 rounded-full flex items-center justify-center text-ocean-dark mr-3">
                    <User size={18} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider font-semibold text-slate-500">Author</p>
                    <p className="text-sm font-bold text-slate-800">{article.author}</p>
                  </div>
                </div>
                <div className="hidden sm:flex items-center">
                  <div className="w-10 h-10 bg-ocean-light/10 rounded-full flex items-center justify-center text-ocean-dark mr-3">
                    <Calendar size={18} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider font-semibold text-slate-500">Published</p>
                    <p className="text-sm font-bold text-slate-800">{article.date}</p>
                  </div>
                </div>
              </div>
              
              <SocialShare url={currentUrl} title={article.title} />
            </div>
          </header>

          <img 
            src={article.imageUrl} 
            alt={article.title} 
            className="w-full h-[400px] object-cover rounded-2xl shadow-md mb-10"
          />

          {/* Ad Slot 2 */}
          <AdSlot position={AdPosition.IN_ARTICLE} className="mb-10" />

          {/* Content Body - Enhanced Typography */}
          <article className="prose prose-lg md:prose-xl prose-slate max-w-none 
            font-serif text-justify
            prose-headings:font-sans prose-headings:font-bold prose-headings:text-ocean-dark 
            prose-p:text-slate-700 prose-p:leading-relaxed
            prose-a:text-ocean-light prose-a:no-underline prose-a:border-b-2 prose-a:border-ocean-light/30 hover:prose-a:border-ocean-light hover:prose-a:text-ocean-dark prose-a:transition-all
            prose-strong:text-ocean-dark prose-strong:font-bold
            prose-li:text-slate-700 prose-li:marker:text-ocean-light">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </article>

          {/* Bottom Share Section */}
          <div className="mt-12 mb-8 pt-8 border-t border-slate-100">
             <h4 className="font-serif font-bold text-slate-800 mb-4">Share this article</h4>
             <SocialShare url={currentUrl} title={article.title} />
          </div>

          {/* Ad Slot 3 */}
          <AdSlot position={AdPosition.IN_ARTICLE} className="my-12" />

          <div className="bg-gradient-to-br from-ocean-mist to-white p-8 rounded-2xl mt-12 border border-blue-50 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 text-ocean-light/10 transform rotate-12">
               <Clock size={120} />
            </div>
            <h3 className="font-serif font-bold text-xl text-ocean-dark mb-4 relative z-10">Key Takeaway</h3>
            <p className="text-slate-700 italic text-lg leading-relaxed relative z-10 font-serif">
              "Consistency is more important than intensity. Five minutes of mindful breathing is better than zero."
            </p>
          </div>
        </div>

        {/* Sidebar (30%) */}
        <aside className="lg:col-span-4 space-y-10">
          
          {/* Newsletter */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="font-serif font-bold text-lg text-ocean-dark mb-2">Join the Calm Circle</h3>
            <p className="text-slate-500 text-sm mb-4">Get weekly mindfulness tips and yoga routines delivered to your inbox.</p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-light/50 transition-shadow"
              />
              <button className="w-full py-2 bg-ocean-light text-white font-semibold rounded-lg hover:bg-ocean-dark transition-colors shadow-md hover:shadow-lg">
                Subscribe
              </button>
            </form>
          </div>

          {/* Popular Posts */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="font-serif font-bold text-lg text-ocean-dark mb-4 border-b border-slate-100 pb-2">Popular Articles</h3>
            <ul className="space-y-4">
              {articles.filter(a => a.id !== id).map(a => (
                <li key={a.id}>
                  <Link to={`/article/${a.id}`} className="group block">
                    <span className="text-xs text-ocean-light font-bold uppercase tracking-wider">{a.category}</span>
                    <h4 className="font-medium text-slate-700 group-hover:text-ocean-dark transition-colors line-clamp-2 mt-1">
                      {a.title}
                    </h4>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ad Slot 4: Sticky Sidebar Ad */}
          <div className="sticky top-24">
            <AdSlot position={AdPosition.SIDEBAR} format={AdFormat.SKYSCRAPER} />
          </div>

        </aside>
      </div>
    </div>
  );
};

export default ArticleDetail;
