import React from 'react';
import { Camera, Mic, FileText, Video, Users, Globe, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'personal-memory-archiving',
      title: 'Personal Memory Archiving',
      description: 'Transform your precious memories into beautifully organized digital archives that will last for generations.',
      icon: FileText,
      color: 'bg-amber-100',
      hoverColor: 'group-hover:bg-amber-200'
    },
    {
      id: 'audio-recording',
      title: 'Audio Recording of Life Stories',
      description: 'Capture the irreplaceable stories and wisdom of your loved ones with professional audio recording.',
      icon: Mic,
      color: 'bg-orange-100',
      hoverColor: 'group-hover:bg-orange-200'
    },
    {
      id: 'photo-scanning',
      title: 'Old Photo & Letter Scanning',
      description: 'Preserve your precious photographs and handwritten letters with high-quality digital scanning.',
      icon: Camera,
      color: 'bg-yellow-100',
      hoverColor: 'group-hover:bg-yellow-200'
    },
    {
      id: 'legacy-video-interviews',
      title: 'Legacy Video Interviews',
      description: 'Create beautiful video documentaries of your family\'s stories and preserve them forever.',
      icon: Video,
      color: 'bg-red-100',
      hoverColor: 'group-hover:bg-red-200'
    },
    {
      id: 'family-tree-documentation',
      title: 'Family Tree Documentation',
      description: 'Research and document your family history with professional genealogy services.',
      icon: Users,
      color: 'bg-green-100',
      hoverColor: 'group-hover:bg-green-200'
    },
    {
      id: 'tribute-page-creation',
      title: 'Tribute Page Creation',
      description: 'Honor loved ones with beautiful online tribute pages that celebrate their life and legacy.',
      icon: Globe,
      color: 'bg-blue-100',
      hoverColor: 'group-hover:bg-blue-200'
    }
  ];

  const handleServiceClick = (serviceId: string) => {
    // In a real app, this would use React Router
    window.history.pushState({}, '', `/services/${serviceId}`);
    window.location.reload();
  };

  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6 font-serif">
            Our Memory Preservation Services
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            We offer comprehensive services to help you preserve, digitize, and share your most precious memories.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                onClick={() => handleServiceClick(service.id)}
                className="group bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border border-amber-100"
              >
                <div className="p-8">
                  <div className={`w-16 h-16 ${service.color} ${service.hoverColor} rounded-lg flex items-center justify-center mb-6 transition-colors`}>
                    <IconComponent className="w-8 h-8 text-amber-600" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-amber-900 mb-4 group-hover:text-amber-700 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-amber-700 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center text-amber-600 group-hover:text-amber-800 transition-colors">
                    <span className="font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-amber-700 mb-8">
            Not sure which service is right for you?
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-amber-700 text-white px-8 py-3 rounded-lg hover:bg-amber-800 transition-colors font-semibold"
          >
            Get a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;