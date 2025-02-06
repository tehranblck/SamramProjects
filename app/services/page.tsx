import ServicesHero from '../components/servicesPage/ServicesHero';
import ServicesList from '../components/servicesPage/ServicesList';
import ProcessSection from '../components/servicesPage/ProcessSection';

export default async function ServicesPage() {
    const services = await fetch("https://api.samramprojects.com/api/services?populate=*",
        {
            next: {
                revalidate: 10
            }
        }
    );
    const servicesData = await services.json();

    return (
        <>
            <ServicesHero />

            <ServicesList services={servicesData} />
            <ProcessSection />
        </>
    );
} 