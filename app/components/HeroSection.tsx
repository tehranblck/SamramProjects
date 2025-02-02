'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function HeroSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: '/bg1.jpg',
            title: 'Müasir Tikinti Həlləri',
            subtitle: 'Samram Projects',
            description: 'Keyfiyyətli materiallar və peşəkar komandamızla xəyalınızdakı layihələri reallaşdırırıq',
            stats: [
                { value: '10+', label: 'İl Təcrübə' },
                { value: '50+', label: 'Tamamlanmış Layihə' },
                { value: '100%', label: 'Müştəri Məmnuniyyəti' }
            ]
        },
        {
            image: '/bg2.jpg',
            title: 'İnnovativ Yanaşma',
            subtitle: 'Müasir Həllər',
            description: 'Ən son texnologiyalar və müasir dizayn həlləri ilə xidmətinizdəyik',
            stats: [
                { value: '24/7', label: 'Texniki Dəstək' },
                { value: '200+', label: 'Peşəkar İşçi' },
                { value: '15+', label: 'Partnyor Şirkət' }
            ]
        },
        {
            image: '/bg3.jpg',
            title: 'Etibarlı Tərəfdaşınız',
            subtitle: 'Keyfiyyətli Xidmət',
            description: 'Uzun illər ərzində qazandığımız təcrübə ilə layihələrinizi həyata keçiririk',
            stats: [
                { value: '5+', label: 'Ölkədə Fəaliyyət' },
                { value: '1000+', label: 'Razı Müştəri' },
                { value: '30+', label: 'Mütəxəssis' }
            ]
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000); // 5 saniyeye çıkardım, daha iyi bir deneyim için

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative h-[100vh] pt-36 w-full overflow-hidden">
            {/* Background Slider */}
            {slides.map((slide, index) => (
                <div style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
                        ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                >

                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
                </div>
            ))}

            {/* Content */}
            <div className="relative h-full flex items-center">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl space-y-6">
                        <div className="space-y-2 animate-fadeIn">
                            <p className="text-stone-300 text-lg md:text-xl tracking-wider uppercase">
                                {slides[currentSlide].subtitle}
                            </p>
                            <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight">
                                {slides[currentSlide].title}
                            </h1>

                            <p className="text-xl text-stone-200 leading-relaxed max-w-2xl">
                                {slides[currentSlide].description}
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3  py-8 border-t border-white/10 mt-8">
                            {slides[currentSlide].stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-stone-300 text-sm md:text-base">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4 pt-8">
                            <Link
                                href="/portfolio"
                                className="group px-8 py-4 bg-white text-stone-900 rounded-lg 
                                    hover:bg-stone-200 transition-all duration-300 text-sm font-medium
                                    flex items-center gap-2"
                            >
                                Layihələrimiz
                                <svg
                                    className="w-4 h-4 transition-transform duration-300 transform group-hover:translate-x-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                            <Link
                                href="/contact"
                                className="group px-8 py-4 bg-transparent text-white border border-white/30 
                                    rounded-lg hover:bg-white/10 transition-all duration-300 text-sm font-medium
                                    flex items-center gap-2"
                            >
                                Bizimlə Əlaqə
                                <svg
                                    className="w-4 h-4 transition-transform duration-300 transform group-hover:translate-x-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 
                            ${index === currentSlide ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/70'}`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2 animate-bounce">
                <span className="text-white/70 text-sm font-medium rotate-90 origin-left translate-x-4">
                    Aşağı sürüşdürün
                </span>
                <div className="w-px h-16 bg-gradient-to-b from-white/30 to-transparent" />
            </div>
        </div>
    );
} 