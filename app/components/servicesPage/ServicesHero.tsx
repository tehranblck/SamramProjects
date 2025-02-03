'use client';

export default function ServicesHero() {
    return (
        <section className="relative h-[40vh] md:h-[60vh] flex items-center justify-center">
            <div
                className="absolute inset-0 bg-cover bg-center md:bg-fixed"
                style={{
                    backgroundImage: 'url(/services.jpg)',
                }}
            >
                <div className="absolute inset-0 bg-black/60" />
            </div>

            <div className="relative container mx-auto px-4 text-center">
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-3 md:mb-4">
                    Xidmətlərimiz
                </h1>
                <p className="text-base md:text-xl text-stone-200 max-w-3xl mx-auto px-4 md:px-0">
                    Peşəkar komandamızla sizə ən yaxşı tikinti və inşaat xidmətlərini təqdim edirik
                </p>
            </div>
        </section>
    );
} 