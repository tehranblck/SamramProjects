'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';



export default function ServicesList({ services }: { services: any }) {
    const baseUrl = "https://api.samramprojects.com";
    const serviesToShow = services?.data;

    return (
        <section className="py-12 md:py-20">
            <div className="container mx-auto px-4">
                <div className="grid gap-8 md:gap-12">
                    {serviesToShow?.map((service: any, index: number) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`grid md:grid-cols-2 gap-6 md:gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            <div className="relative h-[250px] md:h-[400px] rounded-lg overflow-hidden">
                                <Image
                                    src={serviesToShow && `${baseUrl}${service?.image.url}`}
                                    alt={service.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority={index < 2}
                                />
                            </div>
                            <div className="space-y-4 md:space-y-6 px-2 md:px-0">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-200">{service.title}</h2>
                                <p className="text-base md:text-lg text-gray-300">{service.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 