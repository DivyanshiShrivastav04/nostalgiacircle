import React from 'react';
import { Heart, Clock, Shield, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6 font-serif">
            Why We Started NostalgiaCircle
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-amber-800 leading-relaxed">
              We started NostalgiaCircle because we believe that every family story deserves to be preserved. 
              Too many precious memories are lost when photo albums fade, letters deteriorate, 
              or when the storytellers in our families are no longer with us.
            </p>
            
            <p className="text-lg text-amber-800 leading-relaxed">
              Our mission is to help families, grandparents, and memory-keepers preserve their legacy 
              in beautiful, lasting formats that can be shared and treasured for generations to come.
            </p>

            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-600">
              <p className="text-amber-900 font-medium italic">
                "Every photograph tells a story, every letter holds a memory, 
                and every voice carries wisdom that should never be forgotten."
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Vintage family portrait"
              className="w-full h-96 object-cover rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent rounded-lg"></div>
          </div>
        </div>

        {/* Why Memory Preservation Matters */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-amber-900 mb-12 text-center font-serif">
            Why Memory Preservation Matters
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors">
                <Heart className="w-8 h-8 text-amber-600" />
              </div>
              <h4 className="text-xl font-semibold text-amber-900 mb-3">Emotional Connection</h4>
              <p className="text-amber-700">
                Memories connect us to our roots and strengthen family bonds across generations.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors">
                <Clock className="w-8 h-8 text-amber-600" />
              </div>
              <h4 className="text-xl font-semibold text-amber-900 mb-3">Time-Sensitive</h4>
              <p className="text-amber-700">
                Every day that passes, precious memories and stories can be lost forever.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors">
                <Shield className="w-8 h-8 text-amber-600" />
              </div>
              <h4 className="text-xl font-semibold text-amber-900 mb-3">Preservation</h4>
              <p className="text-amber-700">
                Digital preservation protects memories from physical deterioration and loss.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors">
                <Users className="w-8 h-8 text-amber-600" />
              </div>
              <h4 className="text-xl font-semibold text-amber-900 mb-3">Legacy</h4>
              <p className="text-amber-700">
                Preserved memories become invaluable gifts for future family members.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;