import React from 'react';
import { Heart, Instagram, Youtube, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold font-serif">NostalgiaCircle</span>
            </div>
            <p className="text-amber-200 mb-6 max-w-md">
              Preserving precious memories and creating lasting legacies for families across the nation. 
              Every story deserves to be remembered.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/nostalgiacircle"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-amber-800 rounded-lg flex items-center justify-center hover:bg-amber-700 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/nostalgiacircle"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-amber-800 rounded-lg flex items-center justify-center hover:bg-amber-700 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://pinterest.com/nostalgiacircle"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-amber-800 rounded-lg flex items-center justify-center hover:bg-amber-700 transition-colors"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-amber-200 hover:text-white transition-colors">
                  Personal Memory Archiving
                </a>
              </li>
              <li>
                <a href="#" className="text-amber-200 hover:text-white transition-colors">
                  Audio Recording Services
                </a>
              </li>
              <li>
                <a href="#" className="text-amber-200 hover:text-white transition-colors">
                  Photo & Letter Scanning
                </a>
              </li>
              <li>
                <a href="#" className="text-amber-200 hover:text-white transition-colors">
                  Legacy Video Interviews
                </a>
              </li>
              <li>
                <a href="#" className="text-amber-200 hover:text-white transition-colors">
                  Family Tree Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-amber-200 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-amber-200 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-amber-200 hover:text-white transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#contact" className="text-amber-200 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-amber-200 hover:text-white transition-colors">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-amber-200 text-sm">
              © 2024 NostalgiaCircle.com. All rights reserved.
            </p>
            <p className="text-amber-200 text-sm mt-2 md:mt-0">
              Vintage story preservation • Personal memory archiving • Legacy recording services
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;