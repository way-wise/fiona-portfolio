import AboutSection from "./_components/about-us-section";
import { ContactSection } from "./_components/contact-us";
import HeroSection from "./_components/hero-section";
import { PortfolioSection } from "./_components/portfolio-section";
import ServicesSection from "./_components/service-section";
import ToolsSection from "./_components/tools-section";

const HomePage = () => {
  return (
    <div className="bg-white">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ToolsSection />

      <PortfolioSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
