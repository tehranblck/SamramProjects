'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { navLinks } from './navLinks';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    return (
        <header
            className={`sticky top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-stone-900/95 backdrop-blur-md py-2 shadow-xl' : 'bg-stone-900/95 backdrop-blur-xs py-2'
                }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="relative z-10">
                        <div className="relative w-32 h-12">
                            <Image
                                src="/logo.png"
                                alt="Samram Projects"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-white hover:text-stone-300 transition-colors duration-200 text-sm font-medium"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden relative z-10 p-2 -mr-2"
                        aria-label="Toggle menu"
                    >
                        <div className="space-y-2">
                            <span className={`block w-8 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''
                                }`} />
                            <span className={`block w-8 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''
                                }`} />
                            <span className={`block w-8 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
                                }`} />
                        </div>
                    </button>

                    {/* Mobile Navigation */}
                    <div className={`
            md:hidden fixed top-0 left-0 w-full min-h-[120dvh] bg-stone-900/95 backdrop-blur-md transition-all duration-300 z-40
            ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
          `}>
                        <div className="container mx-auto px-4 py-4">
                            <div className="flex justify-end">
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="p-2 text-white"
                                    aria-label="Close menu"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <nav className="flex flex-col items-center justify-center h-[calc(100vh-80px)] space-y-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-white hover:text-stone-300 transition-colors duration-200 text-xl font-medium"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
} 