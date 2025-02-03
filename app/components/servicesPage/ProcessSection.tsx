'use client';

import { motion } from 'framer-motion';

const steps = [
    {
        number: '01',
        title: 'Konsultasiya',
        description: 'Layihənin tələblərini müəyyənləşdiririk'
    },
    {
        number: '02',
        title: 'Layihələndirmə',
        description: 'Texniki və memarlıq həllərini hazırlayırıq'
    },
    {
        number: '03',
        title: 'İcra',
        description: 'Tikinti işlərini həyata keçiririk'
    },
    {
        number: '04',
        title: 'Təhvil',
        description: 'Layihəni tam hazır şəkildə təhvil veririk'
    }
];

export default function ProcessSection() {
    return (
        <section className="py-20 bg-stone-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        İş Prosesimiz
                    </h2>
                    <p className="text-lg text-stone-300 max-w-2xl mx-auto">
                        Layihələri professional şəkildə və mərhələli olaraq həyata keçiririk
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative"
                        >
                            <div className="bg-stone-800 rounded-lg p-6 h-full">
                                <div className="text-4xl font-bold text-stone-700 mb-4">
                                    {step.number}
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-stone-400">
                                    {step.description}
                                </p>
                            </div>
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                                    <svg className="w-6 h-6 text-stone-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 