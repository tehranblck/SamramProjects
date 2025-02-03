'use client';

export default function ContactHero() {
    return (
        <section className="relative h-[60vh] flex items-center justify-center">
            <div
                className="absolute inset-0 bg-cover bg-center md:bg-fixed"
                style={{
                    backgroundImage: 'url(/contact.jpg)',
                }}
            >
                <div className="absolute inset-0 bg-black/60" />
            </div>

            <div className="relative container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                    Əlaqə
                </h1>
                <p className="text-xl text-stone-200 max-w-3xl mx-auto">
                    Bizimlə əlaqə saxlayın
                </p>
            </div>
        </section>
    );
} 