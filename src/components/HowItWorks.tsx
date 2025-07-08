import React from 'react';
import { Upload, Cog, Share2 } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      title: 'Submit Your Memories',
      description: 'Send us your photos, documents, or schedule a recording session. We handle everything with care and provide secure shipping options.',
      icon: Upload,
      color: 'bg-amber-100'
    },
    {
      step: 2,
      title: 'We Digitize & Curate Them',
      description: 'Our skilled team professionally scans, records, and organizes your memories with attention to detail and quality.',
      icon: Cog,
      color: 'bg-orange-100'
    },
    {
      step: 3,
      title: 'You Share or Preserve Forever',
      description: 'Receive your beautifully preserved memories in digital formats, ready to share with family or store safely for the future.',
      icon: Share2,
      color: 'bg-yellow-100'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6 font-serif">
            How It Works
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            Our simple three-step process makes memory preservation effortless and stress-free.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-0.5 bg-amber-200 -z-10"></div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-16">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={step.step} className="text-center group">
                  <div className="relative mb-8">
                    <div className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 border-4 border-white shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-amber-600" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {step.step}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-amber-900 mb-4 font-serif">
                    {step.title}
                  </h3>
                  
                  <p className="text-amber-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-amber-50 rounded-lg p-8 border border-amber-200">
            <h3 className="text-2xl font-semibold text-amber-900 mb-4">
              Ready to Start Your Memory Journey?
            </h3>
            <p className="text-amber-700 mb-6">
              The process is simple, secure, and designed with your precious memories in mind.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-amber-700 text-white px-8 py-3 rounded-lg hover:bg-amber-800 transition-colors font-semibold"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;