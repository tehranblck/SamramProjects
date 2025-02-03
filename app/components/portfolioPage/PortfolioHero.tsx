'use client';

export default function PortfolioHero() {
    return (
        <section className="relative h-[60vh] flex items-center justify-center">
            <div
                className="absolute inset-0 bg-cover bg-center md:bg-fixed"
                style={{
                    backgroundImage: 'url(/bg1.jpg)',
                }}
            >
                <div className="absolute inset-0 bg-black/60" />
            </div>

            <div className="relative container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                    Layihələrimiz
                </h1>
                <p className="text-xl text-stone-200 max-w-3xl mx-auto">
                    Uğurla tamamladığımız layihələr və referanslarımız
                </p>
            </div>
        </section>
    );
} 