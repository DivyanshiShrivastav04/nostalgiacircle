import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      name: 'Margaret Thompson',
      age: '72',
      location: 'Portland, OR',
      image: 'https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      quote: 'NostalgiaCircle helped me preserve 60 years of family photos. My grandchildren can now see their great-grandparents\' wedding photos in stunning digital quality. It\'s truly priceless.',
      service: 'Photo Scanning'
    },
    {
      name: 'Robert & Linda Chen',
      age: '65 & 63',
      location: 'San Francisco, CA',
      image: 'https://images.pexels.com/photos/3823492/pexels-photo-3823492.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      quote: 'The video interview they created of my father telling his immigration story is the most precious gift we could have given our family. Professional, caring, and beautifully done.',
      service: 'Legacy Video Interviews'
    },
    {
      name: 'Sarah Johnson',
      age: '45',
      location: 'Austin, TX',
      image: 'https://images.pexels.com/photos/3823495/pexels-photo-3823495.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      quote: 'After my mother passed, we found boxes of letters and photos. NostalgiaCircle transformed them into a beautiful digital archive that our whole family treasures.',
      service: 'Personal Memory Archiving'
    },
    {
      name: 'David Martinez',
      age: '58',
      location: 'Phoenix, AZ',
      image: 'https://images.pexels.com/photos/3823491/pexels-photo-3823491.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      quote: 'The family tree documentation they created revealed stories we never knew. It\'s amazing how much history was preserved through their professional research.',
      service: 'Family Tree Documentation'
    },
    {
      name: 'Jennifer Wilson',
      age: '52',
      location: 'Denver, CO',
      image: 'https://images.pexels.com/photos/3823493/pexels-photo-3823493.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      quote: 'The tribute page they created for my husband is beautiful and comforting. Friends and family from around the world have shared their memories there.',
      service: 'Tribute Page Creation'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6 font-serif">
            What Our Families Say
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            Real stories from families who have trusted us with their precious memories.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 border border-amber-100">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-amber-200"
                />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start mb-4">
                  <Quote className="w-8 h-8 text-amber-300 mr-2" />
                  <div className="flex space-x-1">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-lg md:text-xl text-amber-800 mb-6 italic leading-relaxed">
                  "{currentTestimonial.quote}"
                </blockquote>
                
                <div className="border-t border-amber-200 pt-4">
                  <p className="font-semibold text-amber-900 text-lg">
                    {currentTestimonial.name}
                  </p>
                  <p className="text-amber-700">
                    Age {currentTestimonial.age} • {currentTestimonial.location}
                  </p>
                  <p className="text-amber-600 font-medium mt-2">
                    Service: {currentTestimonial.service}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-amber-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-amber-600" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-amber-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-amber-600" />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-amber-600' : 'bg-amber-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;