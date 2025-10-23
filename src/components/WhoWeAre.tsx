export default function WhoWeAre() {
  const partners = [
    { name: 'Pear', icon: '🍐' },
    { name: 'SOMA CAPITAL', icon: '👑' },
    { name: '1517', icon: '1517' },
    { name: 'Z Fellows', icon: 'Z' },
  ];

  return (
    <section id="about" className="py-20 gradient-teal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Title */}
          <h2 className="text-sm font-semibold text-teal-100 uppercase tracking-wider mb-8">
            WHO WE ARE
          </h2>
          
          {/* Mission Statement */}
          <div className="mb-16">
            <p className="text-xl text-white mb-6 leading-relaxed">
              Nexus is the community for SoCal's most talented and driven student entrepreneurs.
            </p>
            <p className="text-xl text-white leading-relaxed">
              We bring together the brightest builders— engineers, designers, creators, and more.
            </p>
          </div>

          {/* Partners Section */}
          <div>
            <h3 className="text-sm font-semibold text-teal-100 uppercase tracking-wider mb-8">
              OUR PARTNERS
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center h-20 w-24 opacity-80 hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="text-3xl mb-2">{partner.icon}</div>
                  <div className="text-sm font-medium text-white text-center">
                    {partner.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
