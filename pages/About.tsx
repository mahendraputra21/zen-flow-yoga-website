import React from 'react';
import { ShieldAlert, Heart, Info } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      
      <div className="text-center mb-16">
        <h1 className="text-4xl font-serif font-bold text-ocean-dark mb-6">About ZenFlow Yoga</h1>
        <p className="text-xl text-slate-600 leading-relaxed">
          Democratizing mental wellness through accessible, science-backed yoga and breathing techniques.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12 mb-12">
        <div className="flex items-start mb-6">
          <div className="bg-ocean-mist p-3 rounded-lg mr-4 text-ocean-dark">
            <Heart size={28} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed">
              We believe that mental peace shouldn't be a luxury. In a world that constantly demands our attention, ZenFlow Yoga provides a sanctuary to reconnect with yourself. We curate yoga routines and breathing exercises specifically designed to lower cortisol, manage anxiety, and improve sleep quality—all for free.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-red-50 rounded-2xl border border-red-100 p-8 md:p-12">
        <div className="flex items-start">
          <div className="bg-white p-3 rounded-lg mr-4 text-red-500 shadow-sm">
            <ShieldAlert size={28} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-red-800 mb-4">Medical Disclaimer</h2>
            <div className="prose prose-red text-red-700">
              <p className="font-medium mb-4">
                The content provided on ZenFlow Yoga, including text, graphics, images, and other material, is for informational purposes only.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>
                  <strong>Not Medical Advice:</strong> This content is not intended to be a substitute for professional medical advice, diagnosis, or treatment.
                </li>
                <li>
                  <strong>Seek Professional Help:</strong> Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
                </li>
                <li>
                  <strong>Emergency:</strong> If you think you may have a medical emergency, call your doctor or your local emergency number immediately.
                </li>
                <li>
                  <strong>Risk:</strong> Participation in any physical exercise involves the risk of injury. By using this website, you agree to do so at your own risk.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;