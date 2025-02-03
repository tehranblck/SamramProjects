import PortfolioHero from '../components/portfolioPage/PortfolioHero';
import ProjectGrid from '../components/portfolioPage/ProjectGrid';

export default function PortfolioPage({ projects }: { projects: any }) {
    return (
        <>
            <PortfolioHero />
            <ProjectGrid projects={projects} />
        </>
    );
}