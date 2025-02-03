import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import PortfolioPage from "./portfolio/page";
import ContactForm from "./components/contactPage/ContactForm";

export default async function Home() {

  return (
    <div>
      <HeroSection />
      <AboutSection />
      <PortfolioPage />
      <ContactForm />
    </div>
  );
}
