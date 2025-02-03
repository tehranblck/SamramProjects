import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import PortfolioPage from "./portfolio/page";
import ContactForm from "./components/contactPage/ContactForm";

export default async function Home() {
  const projects = await fetch("https://api.samramprojects.com/api/projects?populate=*");
  const projectsData = await projects.json();
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <PortfolioPage projects={projectsData} />
      <ContactForm />
    </div>
  );
}
