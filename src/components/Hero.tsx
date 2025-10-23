export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-100/50 to-teal-200/30"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight animate-fadeInUp">
          Nexus
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          Southern California's First Intercollegiate Entrepreneurship Society
        </p>
        <a
          href="#join"
          className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-fadeInUp hover-lift"
          style={{ animationDelay: '0.4s' }}
        >
          Join the Community
        </a>
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-teal-300/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }}></div>
    </section>
  );
}
