import { Suspense } from "react";
import AboutSection from "./_components/about-us-section";
import HeroSection from "./_components/hero-section";
import PortfolioSection from "./_components/portfolio-section";
import ServicesSection from "./_components/service-section";
import ToolsSection from "./_components/tools-section";

const HomePage = () => {
  return (
    <div className="bg-white">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ToolsSection />
      <Suspense fallback={<div className="min-h-[500px] w-full bg-[#f8faff]" />}>
        <PortfolioSection />
      </Suspense>
    </div>
  );
};

export default HomePage;
