export default function WhatWeDo() {
  const concepts = [
    { name: 'Connect', icon: '🌐' },
    { name: 'Build', icon: '🔨' },
    { name: 'Innovate', icon: '💡' },
  ];

  const galleryImages = [
    { src: '/api/placeholder/400/300', alt: 'Students in lecture hall' },
    { src: '/api/placeholder/400/300', alt: 'Students taking selfie' },
    { src: '/api/placeholder/400/300', alt: 'Students in workspace' },
    { src: '/api/placeholder/400/300', alt: 'Award presentation' },
    { src: '/api/placeholder/400/300', alt: 'Students in modern room' },
    { src: '/api/placeholder/400/300', alt: 'Students at dinner' },
  ];

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Title */}
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
            WHAT WE DO
          </h2>
          
          {/* Main Description */}
          <p className="text-2xl text-gray-700 mb-16 leading-relaxed">
            We provide the most driven students with an extraordinary network, exclusive opportunities, and mentorship to achieve great things.
          </p>

          {/* Key Concepts */}
          <div className="flex flex-wrap justify-center gap-12 mb-16">
            {concepts.map((concept, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="text-4xl mb-4">{concept.icon}</div>
                <h3 className="text-xl font-semibold text-gray-700">{concept.name}</h3>
              </div>
            ))}
          </div>

          {/* Photo Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="aspect-square bg-gray-200 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <div className="w-full h-full bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Event Photo {index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
