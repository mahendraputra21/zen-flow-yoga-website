import React, { useState } from 'react';
import { Facebook, Twitter, MessageCircle, Copy, Check } from 'lucide-react';

interface SocialShareProps {
  url: string;
  title: string;
}

const SocialShare: React.FC<SocialShareProps> = ({ url, title }) => {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = {
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const ShareButton = ({ 
    href, 
    icon: Icon, 
    label, 
    onClick 
  }: { 
    href?: string; 
    icon: React.ElementType; 
    label: string;
    onClick?: () => void;
  }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          onClick();
        }
      }}
      className="group relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-ocean-light/20 text-ocean-dark hover:bg-ocean-light hover:text-white hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-110"
      aria-label={label}
    >
      <Icon size={20} />
      <span className="sr-only">{label}</span>
    </a>
  );

  return (
    <div className="flex items-center space-x-3 sm:space-x-4">
      <span className="text-sm font-serif font-semibold text-slate-500 mr-2 hidden sm:inline-block">Share:</span>
      
      <ShareButton 
        href={shareLinks.whatsapp} 
        icon={MessageCircle} 
        label="Share on WhatsApp" 
      />
      
      <ShareButton 
        href={shareLinks.facebook} 
        icon={Facebook} 
        label="Share on Facebook" 
      />
      
      <ShareButton 
        href={shareLinks.twitter} 
        icon={Twitter} 
        label="Share on X (Twitter)" 
      />
      
      <div className="relative">
        <button
          onClick={copyToClipboard}
          className="group flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-ocean-light/20 text-ocean-dark hover:bg-ocean-light hover:text-white hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-110"
          aria-label="Copy Link"
        >
          {copied ? <Check size={20} /> : <Copy size={20} />}
        </button>
        {copied && (
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-slate-800 text-white text-xs rounded shadow-lg whitespace-nowrap animate-fade-in-up">
            Copied!
          </div>
        )}
      </div>
    </div>
  );
};

export default SocialShare;