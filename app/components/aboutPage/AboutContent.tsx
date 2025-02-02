'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutContent() {
    const values = [
        {
            title: 'Keyfiyyət',
            description: 'Hər bir layihədə ən yüksək keyfiyyət standartlarını təmin edirik'
        },
        {
            title: 'Peşəkarlıq',
            description: 'Təcrübəli komandamızla peşəkar xidmət göstəririk'
        },
        {
            title: 'İnnovasiya',
            description: 'Ən son texnologiyalardan istifadə edərək müasir həllər təqdim edirik'
        },
        {
            title: 'Etibarlılıq',
            description: 'Müştərilərimizlə uzunmüddətli və etibarlı əməkdaşlıq qururuq'
        }
    ];

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl font-bold text-gray-200">Şirkətimiz Haqqında</h2>
                        <p className="text-lg text-gray-300">

                            2010-cu ildən etibarən Azərbaycanın inşaat sektorunda fəaliyyət göstərən
                            Samram Projects, müasir tikinti həlləri və keyfiyyətli xidməti ilə
                            seçilir. Şirkətimiz müştərilərinə ən yaxşı xidməti təqdim etmək üçün
                            daim inkişaf edir və yenilənir.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            {values.map((value, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="space-y-2"
                                >
                                    <h3 className="text-xl font-semibold text-gray-200">{value.title}</h3>
                                    <p className="text-gray-400">{value.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Side - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative h-[600px] rounded-lg overflow-hidden"
                    >
                        <Image
                            src="/about.jpg"
                            alt="Samram Projects Office"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
} 