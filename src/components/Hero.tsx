import React from 'react';
import { ArrowRight, Heart } from 'lucide-react';

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1670770/pexels-photo-1670770.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Vintage family photos and memories"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/20 via-amber-50/40 to-amber-100/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Heart className="w-5 h-5 text-amber-600" />
            <span className="text-amber-800 font-medium">Preserving Memories Since 2020</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-amber-900 mb-6 font-serif leading-tight">
            Preserve the Past,
            <br />
            <span className="text-amber-700 font-handwritten">Share the Memories</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-amber-800 mb-8 max-w-3xl mx-auto leading-relaxed">
            We help you archive and celebrate timeless personal stories, 
            transforming precious memories into lasting legacies for future generations.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToServices}
            className="group bg-amber-700 text-white px-8 py-4 rounded-lg hover:bg-amber-800 transition-all duration-300 font-semibold text-lg flex items-center space-x-2 shadow-lg hover:shadow-xl"
          >
            <span>Start Your Memory Archive</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="border-2 border-amber-700 text-amber-700 px-8 py-4 rounded-lg hover:bg-amber-50 transition-colors font-semibold text-lg">
            Learn More
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-amber-900 mb-2">10K+</div>
            <div className="text-amber-700">Photos Preserved</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-amber-900 mb-2">500+</div>
            <div className="text-amber-700">Stories Recorded</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-amber-900 mb-2">200+</div>
            <div className="text-amber-700">Families Served</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-amber-900 mb-2">5 Years</div>
            <div className="text-amber-700">Experience</div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-700 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-amber-700 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;