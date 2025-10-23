export default function UniversityPartners() {
  const universities = [
    { name: 'USC', logo: 'USC' },
    { name: 'UCLA', logo: 'UCLA' },
    { name: 'Caltech', logo: 'Caltech' },
    { name: 'LMU', logo: 'LMU' },
    { name: 'UC San Diego', logo: 'UCSD' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {universities.map((university, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-16 w-32 opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <div className="text-2xl font-bold text-gray-700 text-center">
                {university.logo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
