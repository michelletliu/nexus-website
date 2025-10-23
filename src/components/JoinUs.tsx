export default function JoinUs() {
  return (
    <section id="join" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
              JOIN US
            </h2>
            
            <div className="space-y-6 mb-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe in high-growth individuals—those who take initiative, relentlessly pursue their goals, and aim to build transformative projects.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                If this sounds like you, Nexus is here to provide the support, network, and exclusive opportunities to help you get there faster.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#apply"
                className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-4 rounded-lg text-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Apply Now
              </a>
              <a
                href="#team"
                className="inline-block border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white font-semibold px-8 py-4 rounded-lg text-center transition-all duration-300 transform hover:scale-105"
              >
                Join the Internal Team
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-teal-100 to-teal-200 rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-gray-500 text-lg">Team Photo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
