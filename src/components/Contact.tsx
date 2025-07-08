import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Upload, Instagram, Youtube, Globe } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    file: null as File | null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '', file: null });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, file });
    }
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6 font-serif">
            Start Your Memory Journey
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            Ready to preserve your precious memories? Get in touch with us today for a free consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-xl p-8 border border-amber-100">
            <h3 className="text-2xl font-semibold text-amber-900 mb-6 font-serif">
              Send Us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-amber-800 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-amber-800 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-amber-800 mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your memory preservation needs..."
                />
              </div>

              <div>
                <label htmlFor="file" className="block text-sm font-medium text-amber-800 mb-2">
                  Upload Sample File (Optional)
                </label>
                <div className="relative">
                  <input
                    type="file"
                    id="file"
                    onChange={handleFileUpload}
                    className="hidden"
                    accept="image/*,.pdf,.doc,.docx"
                  />
                  <label
                    htmlFor="file"
                    className="w-full px-4 py-3 border-2 border-dashed border-amber-200 rounded-lg cursor-pointer hover:border-amber-400 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Upload className="w-5 h-5 text-amber-600" />
                    <span className="text-amber-700">
                      {formData.file ? formData.file.name : 'Choose a file or drag and drop'}
                    </span>
                  </label>
                </div>
                <p className="text-sm text-amber-600 mt-2">
                  Share a sample photo or document to help us understand your needs better.
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-700 text-white py-3 px-6 rounded-lg hover:bg-amber-800 transition-colors font-semibold flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-xl p-8 border border-amber-100">
              <h3 className="text-2xl font-semibold text-amber-900 mb-6 font-serif">
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-1">Email Us</h4>
                    <p className="text-amber-700">support@nostalgiacircle.com</p>
                    <p className="text-sm text-amber-600">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-1">Call Us</h4>
                    <p className="text-amber-700">1-555-NOSTALGIA</p>
                    <p className="text-sm text-amber-600">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-1">Visit Us</h4>
                    <p className="text-amber-700">Nationwide Service</p>
                    <p className="text-sm text-amber-600">We serve clients across the US</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-lg shadow-xl p-8 border border-amber-100">
              <h3 className="text-2xl font-semibold text-amber-900 mb-6 font-serif">
                Follow Our Journey
              </h3>
              
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/nostalgiacircle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center hover:bg-amber-200 transition-colors"
                >
                  <Instagram className="w-6 h-6 text-amber-600" />
                </a>
                <a
                  href="https://youtube.com/nostalgiacircle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center hover:bg-amber-200 transition-colors"
                >
                  <Youtube className="w-6 h-6 text-amber-600" />
                </a>
                <a
                  href="https://pinterest.com/nostalgiacircle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center hover:bg-amber-200 transition-colors"
                >
                  <Globe className="w-6 h-6 text-amber-600" />
                </a>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-amber-50 rounded-lg p-6 border border-amber-200">
              <h4 className="font-semibold text-amber-900 mb-3">Why Choose Us?</h4>
              <ul className="space-y-2 text-amber-700">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span>5+ years of experience</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span>Fully insured & bonded</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span>100% satisfaction guarantee</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span>Free consultation & quotes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;