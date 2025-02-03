import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import dynamic from 'next/dynamic';

const DynamicPortfolioPage = dynamic(() => import('./portfolio/page'), {
  loading: () => <div>Loading...</div>,
  ssr: true
});

const DynamicContactForm = dynamic(() => import('./components/contactPage/ContactForm'), {
  loading: () => <div>Loading...</div>,
  ssr: true
});

export default async function Home() {

  return (
    <div>
      <HeroSection />
      <AboutSection />
      <DynamicPortfolioPage />
      <DynamicContactForm />
    </div>
  );
}
