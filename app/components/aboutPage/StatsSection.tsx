'use client'
import { motion } from 'framer-motion';

export default function StatsSection() {
    const stats = [
        { value: '10+', label: 'İl Təcrübə' },
        { value: '500+', label: 'Tamamlanmış Layihə' },
        { value: '50+', label: 'Peşəkar İşçi' },
        { value: '100%', label: 'Müştəri Məmnuniyyəti' }
    ];

    return (
        <section className="py-20 bg-stone-900">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                                {stat.value}
                            </div>
                            <div className="text-stone-300">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 