'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Project {
    id: number;
    title: string;
    category: string;
    image: string;
    description: string;
}

const projects = [
    {
        id: 1,
        title: 'Yaşayış Kompleksi',
        category: 'residential',
        image: '/bg2.jpg',
        description: 'Modern yaşayış kompleksi layihəsi'

    },
    {
        id: 2,
        title: 'Ticarət Mərkəzi',
        category: 'commercial',
        image: '/bg3.jpg',
        description: 'Müasir ticarət mərkəzi'
    },
    {
        id: 3,
        title: 'Villa',
        category: 'residential',
        image: '/bg2.jpg',
        description: 'Lüks villa layihəsi'
    },
    {
        id: 4,
        title: 'Ofis Binası',
        category: 'commercial',
        image: '/bg1.jpg',
        description: 'A klass ofis binası'
    },
    {
        id: 5,
        title: 'Otel',
        category: 'hospitality',
        image: '/bg3.jpg',
        description: '5 ulduzlu otel'
    },
    {
        id: 6,
        title: 'İdman Kompleksi',
        category: 'sports',
        image: '/bg2.jpg',
        description: 'Olimpiya standartlarında idman kompleksi'

    }
];

const categories = [
    { id: 'all', label: 'Hamısı' },
    { id: 'residential', label: 'Yaşayış' },
    { id: 'commercial', label: 'Ticarət' },
    { id: 'hospitality', label: 'Otel' },
    { id: 'sports', label: 'İdman' }
];

export default function ProjectGrid() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const filteredProjects = projects.filter(project =>
        activeCategory === 'all' || project.category === activeCategory
    );

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                {/* Filter Buttons */}
                <div className="flex flex-wrap gap-4 justify-center mb-12">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-6 py-2 rounded-full transition-colors duration-200 
                                ${activeCategory === category.id
                                    ? 'bg-stone-900 text-white'
                                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                            <div className="relative h-[300px] overflow-hidden rounded-lg">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-stone-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="text-center text-white p-4">
                                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                        <p className="text-stone-200">{project.description}</p>
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