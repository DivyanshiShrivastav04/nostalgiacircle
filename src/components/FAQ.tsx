import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is NostalgiaCircle.com?',
      answer: 'NostalgiaCircle.com is a professional memory preservation service that helps families digitize, organize, and archive their precious memories. We specialize in photo scanning, audio recording, video interviews, and creating beautiful digital archives that last forever.'
    },
    {
      question: 'How do I submit my materials?',
      answer: 'You can submit materials through our secure shipping service with prepaid labels, or schedule an in-person pickup for local clients. We also offer drop-off locations in major cities. All materials are handled with white cotton gloves and tracked throughout the process.'
    },
    {
      question: 'Is this service suitable for older adults?',
      answer: 'Absolutely! Our services are designed with seniors in mind. We offer patient, personalized assistance and can work with family members to coordinate the process. Many of our clients are grandparents wanting to preserve their legacy for future generations.'
    },
    {
      question: 'How long does the process take?',
      answer: 'Most projects are completed within 2-4 weeks, depending on the scope and service type. Rush services are available for urgent needs. We provide regular updates throughout the process and will communicate any delays immediately.'
    },
    {
      question: 'Are my photos and stories safe and private?',
      answer: 'Yes, absolutely. We maintain strict confidentiality and security protocols. All materials are stored in secure facilities, handled only by trained professionals, and digital files are encrypted. We never share content without explicit permission.'
    },
    {
      question: 'Can I request a physical copy or just digital?',
      answer: 'We offer both digital and physical options. Digital files come in multiple formats for different uses, and we can create printed albums, photo books, or DVDs. You can choose the combination that works best for your family.'
    },
    {
      question: 'What if I have very old or fragile materials?',
      answer: 'We specialize in handling fragile and vintage materials. Our team is trained in archival preservation techniques and uses specialized equipment for delicate items. We can work with materials dating back over 100 years.'
    },
    {
      question: 'How much does it cost?',
      answer: 'Pricing varies based on the service and volume of materials. We offer transparent pricing with no hidden fees and provide detailed quotes before beginning any work. Many services start at just $50, and we offer package deals for comprehensive projects.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 bg-white/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6 font-serif">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-amber-700">
            Everything you need to know about our memory preservation services.
          </p>
        </div>

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })
          }}
        />

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md border border-amber-100 overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-amber-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-amber-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-amber-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-amber-600 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4 border-t border-amber-100">
                  <p className="text-amber-700 leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-amber-700 mb-6">
            Still have questions? We're here to help!
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-amber-700 text-white px-8 py-3 rounded-lg hover:bg-amber-800 transition-colors font-semibold"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;