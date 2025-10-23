import Header from "@/components/Header";
import Hero from "@/components/Hero";
import UniversityPartners from "@/components/UniversityPartners";
import WhoWeAre from "@/components/WhoWeAre";
import WhatWeDo from "@/components/WhatWeDo";
import JoinUs from "@/components/JoinUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <UniversityPartners />
      <WhoWeAre />
      <WhatWeDo />
      <JoinUs />
      <Footer />
    </div>
  );
}
