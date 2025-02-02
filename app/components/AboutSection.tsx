'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutSection() {
    const features = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: 'Keyfiyyətli Xidmət',
            description: 'Hər bir layihəyə maksimum diqqət və peşəkarlıqla yanaşırıq'
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: 'Sürətli İcra',
            description: 'Layihələri vaxtında və dəqiq şəkildə təhvil veririk'
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
            ),
            title: 'Etibarlı Əməkdaşlıq',
            description: 'Müştərilərimizlə uzunmüddətli və etibarlı əməkdaşlıq qururuq'
        }
    ];

    return (
        <section className="py-20 bg-stone-100">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative h-[600px] rounded-2xl overflow-hidden"
                    >
                        <Image
                            src="/about.jpg"
                            alt="Samram Projects"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute bottom-8 left-8 right-8 text-white">
                            <p className="text-sm font-medium mb-2">Samram Projects</p>
                            <h3 className="text-2xl font-bold">10+ illik təcrübə</h3>
                        </div>
                    </motion.div>

                    {/* Right Side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <h2 className="text-4xl font-bold text-stone-900">
                                Müasir Tikinti və İnşaat Həlləri
                            </h2>
                            <p className="text-lg text-stone-600">
                                Samram Projects olaraq, müştərilərimizin etibarını qazanmaq və layihələri
                                ən yüksək keyfiyyətlə həyata keçirmək bizim əsas prioritetimizdir.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex gap-4"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-stone-900 text-white flex items-center justify-center">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-stone-900 mb-2">
                                            {feature.title}
                                        </h3>
                                        <p className="text-stone-600">
                                            {feature.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-8 pt-8 border-t border-stone-200">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-stone-900 mb-1">500+</div>
                                <div className="text-sm text-stone-600">Tamamlanmış Layihə</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-stone-900 mb-1">50+</div>
                                <div className="text-sm text-stone-600">Peşəkar İşçi</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-stone-900 mb-1">15+</div>
                                <div className="text-sm text-stone-600">İl Təcrübə</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
} 