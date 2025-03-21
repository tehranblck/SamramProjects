
import PortfolioHero from '../components/portfolioPage/PortfolioHero';
import ProjectGrid from '../components/portfolioPage/ProjectGrid';



export default async function PortfolioPage() {
    const response = await fetch("https://api.samramprojects.com/api/projects?populate=*",
        {
            next: {
                revalidate: 3600
            }
        }
    );
    const projectsData = await response.json();


    return (
        <>
            <PortfolioHero />
            <ProjectGrid projects={projectsData} />
        </>
    );
}