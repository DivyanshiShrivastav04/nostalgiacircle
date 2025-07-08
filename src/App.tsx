import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Camera, FileText, Users, Star, ChevronDown, ChevronUp, Upload, Mail, Phone, MapPin, Instagram, Youtube, Globe } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Handle routing for service pages
  useEffect(() => {
    const path = window.location.pathname;
    if (path.startsWith('/services/')) {
      setCurrentPage(path.replace('/services/', ''));
    } else {
      setCurrentPage('home');
    }
  }, []);

  if (currentPage !== 'home') {
    return <ServicePage serviceId={currentPage} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "NostalgiaCircle.com",
            "url": "https://nostalgiacircle.com",
            "logo": "https://nostalgiacircle.com/logo.png",
            "description": "Professional vintage memory archiving and personal story preservation services",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-555-NOSTALGIA",
              "contactType": "Customer Service",
              "email": "support@nostalgiacircle.com"
            },
            "sameAs": [
              "https://instagram.com/nostalgiacircle",
              "https://youtube.com/nostalgiacircle",
              "https://pinterest.com/nostalgiacircle"
            ]
          })
        }}
      />
      
      <Header />
      <Hero />
      <About />
      <Services />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

// Service Page Component
const ServicePage = ({ serviceId }: { serviceId: string }) => {
  const services = {
    'personal-memory-archiving': {
      title: 'Personal Memory Archiving',
      description: 'Transform your precious memories into beautifully organized digital archives that will last for generations.',
      image: 'https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=800',
      benefits: [
        'Professional digitization of photos, documents, and memorabilia',
        'Organized digital filing system with searchable metadata',
        'Cloud storage with secure backup options',
        'Beautiful presentation formats for sharing with family',
        'Preservation of fragile materials before they deteriorate'
      ],
      faqs: [
        {
          question: 'What types of materials can be archived?',
          answer: 'We can digitize photographs, documents, letters, postcards, newspaper clippings, certificates, and other flat memorabilia up to 11x17 inches.'
        },
        {
          question: 'How long does the archiving process take?',
          answer: 'Most personal archiving projects are completed within 2-3 weeks, depending on the volume of materials.'
        },
        {
          question: 'Will my original materials be returned safely?',
          answer: 'Absolutely. We handle all materials with white cotton gloves and return them in protective sleeves and folders.'
        },
        {
          question: 'What digital formats do you provide?',
          answer: 'We provide high-resolution JPEG files for photos and PDF files for documents, along with smaller web-friendly versions.'
        }
      ]
    },
    'audio-recording': {
      title: 'Audio Recording of Life Stories',
      description: 'Capture the irreplaceable stories and wisdom of your loved ones with professional audio recording services.',
      image: 'https://images.pexels.com/photos/4226120/pexels-photo-4226120.jpeg?auto=compress&cs=tinysrgb&w=800',
      benefits: [
        'Professional-quality audio recording equipment',
        'Comfortable, conversational interview style',
        'Skilled interviewers who draw out meaningful stories',
        'Edited and enhanced final recordings',
        'Multiple format options (MP3, CD, digital files)'
      ],
      faqs: [
        {
          question: 'How long are typical recording sessions?',
          answer: 'Sessions typically last 1-2 hours, but we can accommodate longer or shorter sessions based on comfort level.'
        },
        {
          question: 'Do you provide interview questions?',
          answer: 'Yes, we have curated question lists, but we also encourage personal topics and stories you want to preserve.'
        },
        {
          question: 'Can recordings be done remotely?',
          answer: 'We offer both in-person and remote recording options using professional-grade equipment.'
        },
        {
          question: 'What if my loved one is shy or nervous?',
          answer: 'Our experienced interviewers are skilled at creating comfortable environments and helping people feel at ease.'
        }
      ]
    },
    'photo-scanning': {
      title: 'Old Photo & Letter Scanning',
      description: 'Preserve your precious photographs and handwritten letters with high-quality digital scanning services.',
      image: 'https://images.pexels.com/photos/1670770/pexels-photo-1670770.jpeg?auto=compress&cs=tinysrgb&w=800',
      benefits: [
        'High-resolution scanning up to 4800 DPI',
        'Color correction and enhancement services',
        'Dust and scratch removal',
        'Multiple size and format options',
        'Careful handling of fragile materials'
      ],
      faqs: [
        {
          question: 'What resolution do you scan at?',
          answer: 'We typically scan at 600 DPI for standard photos and up to 4800 DPI for enlargements or archival purposes.'
        },
        {
          question: 'Can you restore damaged photos?',
          answer: 'Yes, we offer basic restoration services including dust removal, color correction, and minor damage repair.'
        },
        {
          question: 'How many photos can you handle at once?',
          answer: 'We can process anywhere from a few dozen to several thousand photos, with bulk pricing available.'
        },
        {
          question: 'Do you scan both sides of photos?',
          answer: 'Yes, if there are notes or dates on the back, we can scan both sides at no additional cost.'
        }
      ]
    },
    'legacy-video-interviews': {
      title: 'Legacy Video Interviews',
      description: 'Create beautiful video documentaries of your family\'s stories and preserve them for future generations.',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=800',
      benefits: [
        'Professional video production quality',
        'Thoughtful lighting and audio setup',
        'Skilled documentary-style interviewing',
        'Professional editing and post-production',
        'Multiple delivery formats (DVD, digital files, cloud storage)'
      ],
      faqs: [
        {
          question: 'How long are the final video interviews?',
          answer: 'Final videos typically range from 30-90 minutes, depending on the amount of content and your preferences.'
        },
        {
          question: 'Can you include photos and documents in the video?',
          answer: 'Yes, we can incorporate family photos, documents, and memorabilia into the video presentation.'
        },
        {
          question: 'What equipment do you use?',
          answer: 'We use professional cameras, lighting equipment, and audio recording devices to ensure broadcast-quality results.'
        },
        {
          question: 'Can multiple family members participate?',
          answer: 'Absolutely! We can coordinate group interviews or separate sessions and edit them together beautifully.'
        }
      ]
    },
    'family-tree-documentation': {
      title: 'Family Tree Documentation',
      description: 'Research and document your family history with professional genealogy services and beautiful family trees.',
      image: 'https://images.pexels.com/photos/8923973/pexels-photo-8923973.jpeg?auto=compress&cs=tinysrgb&w=800',
      benefits: [
        'Professional genealogy research',
        'Beautiful custom family tree designs',
        'Historical document verification',
        'Immigration and military record research',
        'Digital and print format options'
      ],
      faqs: [
        {
          question: 'How far back can you trace family history?',
          answer: 'Depending on available records, we can often trace families back 4-6 generations or more.'
        },
        {
          question: 'What information do you need to get started?',
          answer: 'We start with basic information about your parents and grandparents, then work backward from there.'
        },
        {
          question: 'Do you verify the accuracy of information?',
          answer: 'Yes, we cross-reference multiple sources and provide documentation for all findings.'
        },
        {
          question: 'Can you research international family histories?',
          answer: 'Yes, we have access to international databases and work with researchers in other countries when needed.'
        }
      ]
    },
    'tribute-page-creation': {
      title: 'Tribute Page Creation',
      description: 'Honor loved ones with beautiful online tribute pages that celebrate their life and preserve their legacy.',
      image: 'https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?auto=compress&cs=tinysrgb&w=800',
      benefits: [
        'Beautiful, personalized web page design',
        'Photo galleries and video integration',
        'Guest book for messages and memories',
        'Timeline of life events and achievements',
        'Private or public viewing options'
      ],
      faqs: [
        {
          question: 'How long do tribute pages remain online?',
          answer: 'Tribute pages are hosted permanently, with annual hosting fees to keep them accessible forever.'
        },
        {
          question: 'Can family members add content?',
          answer: 'Yes, we can provide access for family members to add photos, stories, and memories.'
        },
        {
          question: 'Are tribute pages search engine friendly?',
          answer: 'Yes, we optimize them for search engines so people can find and share memories easily.'
        },
        {
          question: 'What if we want to make changes later?',
          answer: 'We provide ongoing support for updates and changes to keep the tribute page current.'
        }
      ]
    }
  };

  const service = services[serviceId as keyof typeof services];

  if (!service) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-amber-900 mb-4">Service Not Found</h1>
          <p className="text-amber-700 mb-8">The service you're looking for doesn't exist.</p>
          <button
            onClick={() => window.location.href = '/'}
            className="bg-amber-700 text-white px-8 py-3 rounded-lg hover:bg-amber-800 transition-colors"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-amber-900 mb-6 font-serif">
                  {service.title}
                </h1>
                <p className="text-lg text-amber-700 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-amber-700 text-white px-8 py-3 rounded-lg hover:bg-amber-800 transition-colors font-semibold">
                    Get Started with This Service
                  </button>
                  <button
                    onClick={() => window.location.href = '/'}
                    className="border-2 border-amber-700 text-amber-700 px-8 py-3 rounded-lg hover:bg-amber-50 transition-colors"
                  >
                    View All Services
                  </button>
                </div>
              </div>
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-96 object-cover rounded-lg shadow-2xl"
                />
                <div className="absolute inset-0 bg-amber-900/10 rounded-lg"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-white/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-amber-900 mb-12 text-center font-serif">
              Key Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-amber-800 leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-amber-900 mb-12 text-center font-serif">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {service.faqs.map((faq, index) => (
                <div key={index} className="bg-white/70 rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-amber-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-amber-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-amber-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-amber-900 mb-6 font-serif">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-amber-700 mb-8">
              Contact us today to begin preserving your precious memories with our {service.title.toLowerCase()} service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-amber-700 text-white px-8 py-3 rounded-lg hover:bg-amber-800 transition-colors font-semibold">
                Get Started Now
              </button>
              <button className="border-2 border-amber-700 text-amber-700 px-8 py-3 rounded-lg hover:bg-amber-50 transition-colors">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;