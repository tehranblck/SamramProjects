import React from "react";



export default function AboutHero() {
    return (
        <section className="relative h-[60vh] flex items-center justify-center">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center md:bg-fixed"
                style={{
                    backgroundImage: 'url(/about.jpg)',
                }}
            >
                <div className="absolute inset-0 bg-black/60" />
            </div>

            {/* Content */}
            <div className="relative container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                    Haqqımızda
                </h1>
                <p className="text-xl text-stone-200 max-w-3xl mx-auto">
                    Samram Projects olaraq, müştərilərimizin etibarını qazanmaq və layihələri
                    ən yüksək keyfiyyətlə həyata keçirmək bizim əsas prioritetimizdir.
                </p>
            </div>
        </section>
    );
} 