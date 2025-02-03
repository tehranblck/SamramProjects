'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Project {
    id: number;
    documentId: string;
    title: string;
    description: string;
    category: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    image: {
        url: string;
        formats: {
            thumbnail: { url: string };
            small: { url: string };
            medium: { url: string };
            large: { url: string };
        }
    }
}

interface ProjectGridProps {
    projects: {
        data: Project[];
        meta: {
            pagination: {
                page: number;
                pageSize: number;
                pageCount: number;
                total: number;
            }
        }
    }
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
    const baseUrl = "https://api.samramprojects.com";
    // Benzersiz kategorileri al
    const uniqueCategories = ['all', ...new Set(projects.data.map(project => project.category))];
    const [activeCategory, setActiveCategory] = useState('all');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const filteredProjects = projects.data.filter(project =>
        activeCategory === 'all' || project.category === activeCategory
    );

    return (
        <section className="py-12 md:py-20">
            <div className="container mx-auto px-4">
                {/* Filter Buttons */}
                <div className="flex flex-wrap gap-3 md:gap-4 justify-center mb-8 md:mb-12">
                    {uniqueCategories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 md:px-6 py-2 text-sm md:text-base rounded-full transition-colors duration-200 
                                ${activeCategory === category
                                    ? 'bg-stone-900 text-white'
                                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}
                        >
                            {category === 'all' ? 'Hamısı' : category}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="group cursor-pointer"
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="relative h-[250px] md:h-[300px] overflow-hidden rounded-lg">
                                <Image
                                    src={project?.image?.url ? `${baseUrl}${project.image.url}` : '/placeholder.jpg'}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    priority
                                />
                                <div className="absolute inset-0 bg-stone-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="text-center text-white p-4">
                                        <h3 className="text-lg md:text-xl font-bold mb-2">{project.title}</h3>
                                        <p className="text-sm md:text-base text-stone-200">{project.description}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 